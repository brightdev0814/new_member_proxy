const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const cheerio = require("cheerio");
const { jsonAryUrlEncoded, indexmenowAuthLogin } = require("../services/utils");
const credentialModel = require("../models/credential");
const domainOverviewModel = require("../models/domainOverview");
const FormData = require("form-data");
const fs = require("fs");

const indexmenowMiddleware = (prefix) =>
  createProxyMiddleware({
    target: `https://tool.indexmenow.com`,
    selfHandleResponse: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      let userAgent = req.headers["user-agent"];
      let { cookie } = req.proxy;
      proxyReq.setHeader("user-agent", userAgent);
      proxyReq.setHeader("Cookie", cookie);

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
          req.url.match(/\.(css|json|js|text|png|jpg|map|ico|svg)/) ||
          /^\/ajax/.test(req.path) ||
          /\/dir\/countkeywords/.test(req.path)
        ) {
          return responseBuffer;
        }

        // if (typeof req.user == "object" && !req.user.isAdmin) {
        //   proxyRes.statusCode = 301;
        //   proxyRes.headers["location"] = domain;
        //   res.statusCode = 301;
        //   res.setHeader("location", domain);
        // }

        if (req.path == "/do-auto-login") {
          let { username, password } = await credentialModel.findOne({
            type: "indexmenow",
          });
          let result = await indexmenowAuthLogin(username, password);
          if (result) {
            res.statusCode = 200;
            return JSON.stringify({ status: true });
          } else {
            res.statusCode = 200;
            return JSON.stringify({ status: false });
          }
        }

        if (proxyRes.headers["location"]) {
          proxyRes.headers["location"] = proxyRes.headers["location"].replace(
            "https://tool.indexmenow.com",
            domain
          );
          res.setHeader(
            "location",
            proxyRes.headers["location"].replace(
              "https://tool.indexmenow.com",
              domain
            )
          );
        }
        if (
          proxyRes.headers["content-type"] &&
          proxyRes.headers["content-type"].includes("text/html")
        ) {
          let response = responseBuffer.toString("utf-8");
          let $ = cheerio.load(response);
          $("meta[name='data-base-url']").attr("content", domain);
          let links = $("link");
          links.each(function () {
            let href = $(this).attr("href");
            if (href !== undefined) {
              $(this).attr(
                "href",
                href.replace("https://tool.indexmenow.com", domain)
              );
            }
          });
          let forms = $("form");
          forms.each(function () {
            let action = $(this).attr("action");
            if (action !== undefined) {
              $(this).attr(
                "action",
                action.replace("https://tool.indexmenow.com", domain)
              );
            }
          });
          let anchors = $("a");
          anchors.each(function () {
            let href = $(this).attr("href");
            if (href !== undefined) {
              href = href.replace("https://tool.indexmenow.com", domain);
              $(this).attr("href", href);
            }
          });
          let scripts = $("script");
          scripts.each(function () {
            let src = $(this).attr("src");
            if (src == undefined) {
              let content = $(this).html();
              content = content.replaceAll(
                /https:\/\/tool.indexmenow.com/g,
                domain
              );
              $(this).html(content);
            } else {
              $(this).attr(
                "src",
                src.replace("https://tool.indexmenow.com", domain)
              );
            }
          });
          $("body").append(
            "<script>var linkLimit = " + req.proxy.linkLimit + ";</script>"
          );
          $("body").append("<script src='/js/indexmenow.js'></script>");
          $("form#form_project_add > .card-body > .form-group").eq(2).remove();

          if (typeof req.user == "object" && !req.user.isAdmin) {
            $(".menu-nav .menu-item").eq(3).remove();
            $(".topbar > .dropdown > .topbar-item").eq(0).remove();
            $(
              "#kt_quick_user .offcanvas-content .navi .navi-item:nth-child(1), #kt_quick_user .offcanvas-content .navi .navi-item:nth-child(2), #kt_quick_user .offcanvas-content .navi .navi-item:nth-child(3), #kt_quick_user .offcanvas-content .navi .navi-item:nth-child(5)"
            ).remove();
          }
          let createdProjectCount = await domainOverviewModel.countRequests(
            req.user.id,
            req.user.username,
            req.wpSite,
            "indexmenow",
            "project"
          );
          if (
            /\/project\/add/.test(req.path) &&
            createdProjectCount >= req.proxy.projectLimit
          ) {
            $(".card.card-custom").children("form").remove();
            $(".card.card-custom").append(`<div class="card-body">
                        <div class='alert alert-danger'>
                            <strong>Warning!</strong> You have reached your limit creating project per day. you can only create ${req.proxy.projectLimit} projects a day.
                        </div>
                    </div>`);
          }
          if (/\/login/.test(req.path)) {
            const html = fs.readFileSync(
              __dirname + "/../views/indexmenow-auth.ejs"
            );
            return html.toString();
          }
          let content = $.html();
          return content;
        }
        return responseBuffer;
      }
    ),
    prependPath: true,
    secure: false,
    hostRewrite: true,
    headers: {
      referer: "https://tool.indexmenow.com",
      origin: "https://tool.indexmenow.com",
    },
    autoRewrite: true,
    ws: true,
    timeout: 60000,
  });

module.exports = indexmenowMiddleware;
