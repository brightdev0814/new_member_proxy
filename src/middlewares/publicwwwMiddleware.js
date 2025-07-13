const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const cheerio = require("cheerio");
const { jsonAryUrlEncoded, publicwwwAuthLogin } = require("../services/utils");
const credentialModel = require("../models/credential");
const FormData = require("form-data");
const fs = require("fs");

const publicwwwMiddleware = (prefix) =>
  createProxyMiddleware({
    target: `https://publicwww.com`,
    selfHandleResponse: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      let userAgent = req.headers["user-agent"];
      let { cookie } = req.proxy;
      let _cookie = "";
      if (req.cookies._cnt)
        _cookie += `_cnt=${encodeURIComponent(req.cookies._cnt)}; `;
      if (req.cookies._lpg)
        _cookie += `_lpg=${encodeURIComponent(req.cookies._lpg)}; `;
      proxyReq.setHeader("user-agent", userAgent);
      proxyReq.setHeader("Cookie", cookie + _cookie);
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
        if (req.url.match(/\.(css|json|js|text|png|jpg|map|ico|svg)/)) {
          return responseBuffer;
        }

        if (
          typeof req.user == "object" &&
          !req.user.isAdmin &&
          (/\/profile/.test(req.path) || /\/ad\/finance/.test(req.path))
        ) {
          proxyRes.statusCode = 301;
          proxyRes.headers["location"] = domain;
          res.statusCode = 301;
          res.setHeader("location", domain);
        }

        if (req.path == "/do-auto-login") {
          let { username, password } = await credentialModel.findOne({
            type: "publicwww",
          });
          let result = await publicwwwAuthLogin(username, password);
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
            "https://publicwww.com",
            domain
          );
          res.setHeader(
            "location",
            proxyRes.headers["location"].replace(
              "https://publicwww.com",
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
          let links = $("link");
          links.each(function () {
            let href = $(this).attr("href");
            if (href !== undefined) {
              $(this).attr(
                "href",
                href.replace("https://publicwww.com", domain)
              );
            }
          });
          let forms = $("form");
          forms.each(function () {
            let action = $(this).attr("action");
            if (action !== undefined) {
              $(this).attr(
                "action",
                action.replace("https://publicwww.com", domain)
              );
            }
          });
          let anchors = $("a");
          anchors.each(function () {
            let href = $(this).attr("href");
            if (href !== undefined) {
              href = href.replace("https://publicwww.com", domain);
              $(this).attr("href", href);
            }
          });
          let scripts = $("script");
          scripts.each(function () {
            let src = $(this).attr("src");
            if (src == undefined) {
              let content = $(this).html();
              content = content.replaceAll(/https:\/\/publicwww.com/g, domain);
              $(this).html(content);
            } else {
              $(this).attr("src", src.replace("https://publicwww.com", domain));
            }
          });
          
          if (typeof req.user == "object" && !req.user.isAdmin) {
            $("#mainmenu > .pull-right").remove();
          }

          if (/\/profile\/login.html/.test(req.path)) {
            let html = fs.readFileSync(
              __dirname + "/../views/publicwww-auth.ejs"
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
      referer: "https://publicwww.com",
      origin: "https://publicwww.com",
    },
    autoRewrite: true,
    ws: true,
    timeout: 60000,
  });

module.exports = publicwwwMiddleware;
