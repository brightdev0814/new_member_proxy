const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const cheerio = require("cheerio");
const zstd = require("@toondepauw/node-zstd");
const { jsonAryUrlEncoded } = require("../services/utils");
const FormData = require("form-data");
const settingModel = require("../models/setting");

const majesticMiddleware = (prefix) =>
  createProxyMiddleware({
    target: `https://majestic.com`,
    selfHandleResponse: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {

      let userAgent = req.headers["user-agent"];
      let { cookie } = req.proxy;
      proxyReq.setHeader("user-agent", userAgent);
      proxyReq.setHeader("Cookie", cookie);
      if (req.headers["x-csrf-token"]) {
        proxyReq.setHeader("x-csrf-token", req.headers["x-csrf-token"]);
      }

      if (["POST", "PATCH", "PUT"].includes(req.method)) {
        let contentType = proxyReq.getHeader("content-type");
        const writeBody = (bodyData) => {
          proxyReq.setHeader("content-length", Buffer.byteLength(bodyData));
          proxyReq.write(bodyData);
        };

        if (contentType && contentType.includes("application/json")) {
          writeBody(JSON.stringify(req.body));
        }

        if (
          contentType &&
          contentType.includes("application/x-www-form-urlencoded")
        ) {
          let body = jsonAryUrlEncoded(req.body);
          proxyReq.setHeader(
            "content-type",
            "application/x-www-form-urlencoded"
          );
          writeBody(body);
        }

        if (contentType && contentType.includes("multipart/form-data")) {
          const parts = (req.headers["content-type"] + "").split(/boundary=/);
          const boundary = parts[1];

          const form = new FormData();
          form.setBoundary(boundary);
          for (let name in req.body) {
            form.append(name, req.body[name]);
          }
          for (let file of req.files) {
            form.append(file["fieldname"], file.buffer, {
              filename: file["originalname"],
            });
          }
          let body = form.getBuffer();
          proxyReq.setHeader("content-type", req.headers["content-type"]);
          writeBody(body);
        }
      }
    },
    onProxyRes: responseInterceptor(
      async (responseBuffer, proxyRes, req, res) => {
        let domain = `https://${req.headers["host"]}`;

        if (
          req.path === "/" ||
          (!req?.user?.isAdmin &&
            (/\/recent-activity/.test(req.path) ||
              /\/account\/my-details/.test(req.path) ||
              /\/account\/my-subscriptions/.test(req.path) ||
              /\/account\/list-invoices/.test(req.path) ||
              /\/account\/vat-details/.test(req.path) ||
              /\/account\/majestic-profile/.test(req.path) ||
              /\/account\/logo/.test(req.path) ||
              /\/account\/invitations/.test(req.path) ||
              /\/account\/settings\/general/.test(req.path) ||
              /\/account\/awards/.test(req.path) ||
              /\/account\/messages/.test(req.path) ||
              /\/reports\/verified-domains\.googlewmt/.test(req.path) ||
              /\/account\/api/.test(req.path) ||
              /\/account\/applications\/openapps/.test(req.path) ||
              /\/help\//.test(req.path) ||
              /\/company\//.test(req.path) ||
              /\/account\/logout/.test(req.path) ||
              /\/plans-pricing/.test(req.path) ||
              (/\/reports/.test(req.path) && ! /\/reports\/.+/.test(req.path)) ||
              /\/bucket/.test(req.path)))
        ) {
          proxyRes.statusCode = 301;
          proxyRes.headers["location"] = domain + "/account#my-campaigns-tab";
          res.statusCode = 301;
          res.setHeader("location", domain + "/account#my-campaigns-tab");
        }

        if (proxyRes.headers["location"]) {
          if (req.path === "/account/login") {
            let _cookies =
              typeof proxyRes.headers["set-cookie"] !== "undefined"
                ? proxyRes.headers["set-cookie"]
                : [];
            if (_cookies.length > 0) {
              let cookies = "";
              for (let cookie of proxyRes.headers["set-cookie"]) {
                cookies += cookie.split("; ")[0] + "; ";
              }
              if (cookies !== "") {
                await settingModel.findOneAndUpdate(
                  null,
                  {
                    majesticCookie: cookies,
                  },
                  {
                    upsert: true,
                  }
                );
              }
            }
          }

          proxyRes.headers["location"] = proxyRes.headers["location"].replace(
            "https://majestic.com",
            domain
          );
          res.setHeader(
            "location",
            proxyRes.headers["location"].replace("https://majestic.com", domain)
          );
        }

        if (
          req.url.match(/\.(css|json|js|text|map)/) ||
          /^\/ajax/.test(req.path) ||
          /\/dir\/countkeywords/.test(req.path)
        ) {
          if (proxyRes.headers["content-encoding"] === "zstd") {
            const decoder = new zstd.Decoder();
            const decoded = await decoder.decode(responseBuffer);
            return decoded;
          } else {
            return responseBuffer;
          }
        }

        if (proxyRes.headers["content-type"] &&
            proxyRes.headers["content-type"].includes("application/json")) {
          let response;
          if (proxyRes.headers["content-encoding"] === "zstd") {
            const decoder = new zstd.Decoder();
            const decoded = await decoder.decode(responseBuffer);
            return decoded.toString("utf-8");
          } else {
            return responseBuffer.toString("utf-8");
          }
        }

        if (
          proxyRes.headers["content-type"] &&
          proxyRes.headers["content-type"].includes("text/html") &&
          !/^\/vue\/component\/(.*)$/.test(req.path)
        ) {
          let response;
          if (proxyRes.headers["content-encoding"] === "zstd") {
            const decoder = new zstd.Decoder();
            const decoded = await decoder.decode(responseBuffer);
            response = decoded.toString("utf-8");
          } else {
            response = responseBuffer.toString("utf-8");
          }

          //we skip instances in which it's not a full web page
          if (! /<\s+html/.test(response)) {
            return response;
          }

          let $ = cheerio.load(response);
          let links = $("link");
          links.each(function () {
            let href = $(this).attr("href");
            if (href !== undefined) {
              $(this).attr(
                "href",
                href.replace("https://majestic.com", domain)
              );
            }
          });
          let forms = $("form");
          forms.each(function () {
            let action = $(this).attr("action");
            if (action !== undefined) {
              $(this).attr(
                "action",
                action.replace("https://majestic.com", domain)
              );
            }
          });

          let anchors = $("a");
          anchors.each(function () {
            let href = $(this).attr("href");
            if (href !== undefined) {
              //we remove 'My Majestic' sidebar links for all member users
              if (!req?.user?.isAdmin && href === '/account') {
                $(this).closest('li.nav-link').closest('ul').remove();
                return;
              }

              $(this).attr(
                "href",
                href.replace("https://majestic.com", domain)
              );
            }
          });
          let scripts = $("script");
          scripts.each(function () {
            let src = $(this).attr("src");
            if (src == undefined) {
              let content = $(this).html();
              let newContent = content.replaceAll(
                /https:\/\/majestic.com/g,
                domain
              );
              $(this).html(newContent);
            } else {
              $(this).attr("src", src.replace("https://majestic.com", domain));
            }
          });
          if (typeof req.user == "object" && !req.user.isAdmin) {
            $(
              ".account-dd li.content > div > div:nth-child(1) > .flex:nth-child(1) .sub-list:nth-child(2)"
            ).remove();
            $(
              ".account-dd li.content > div > div:nth-child(1) > .flex:nth-child(2) .sub-list:nth-child(1)"
            ).remove();
            $(".account-dd li.content .profile-info").remove();
            $(
              "nav.side  li[data-self='my-account'], nav.side li[data-for='my-account'], nav.side li[data-self='support'], nav.side li[data-for='support'], nav.side li[data-self='about-majestic'], nav.side li[data-for='about-majestic'], nav.side li[data-self='about-backlinks'], nav.side li[data-for='about-backlinks']"
            ).remove();
            $("nav.side li:nth-child(19), nav.side li:nth-child(20)").remove();
            $(
              "nav.side li[data-for='my-majestic'] li:nth-child(1), nav.side li[data-for='my-majestic'] li:nth-child(7), nav.side li[data-for='my-majestic'] li:nth-child(8), nav.side li[data-for='my-majestic'] li:nth-child(9)"
            ).remove();
            $("nav.side li.nav-link .logout_header_link").remove();
            if (/\/reports\/bulk-backlink-checker/.test(req.path)) {
              $("#bb-input-options > div:nth-child(2)").remove();
              $(".mj-horz-margin.mj-marg-v-cat.file-upload-link-wrapper").html(
                "Enter or copy/paste up to <b>400</b> URLs, one per line."
              );
            }
            if (/\/reports\/site-explorer\/top-backlinks/.test(req.path)) {
              $("head").append(
                `<style>#export-data-button .mj-dropdown-item:nth-child(3) { display: none; }</style>`
              );
            }
          }

          return $.html();
        }
        return responseBuffer;
      }
    ),
    prependPath: true,
    secure: false,
    hostRewrite: true,
    headers: {
      referer: "https://majestic.com",
      origin: "https://majestic.com",
    },
    autoRewrite: true,
    ws: true,
  });

module.exports = majesticMiddleware;
