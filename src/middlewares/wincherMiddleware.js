const fs = require("fs");
const path = require("path");
const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const credentialModel = require("../models/credential");
const cheerio = require("cheerio");
const { JSON_to_URLEncoded, wincherAuthLogin } = require("../services/utils");

const wincherMiddleware = (prefix) => {
  return createProxyMiddleware({
    target: `https://app.wincher.com`,
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
          let body = JSON_to_URLEncoded(req.body);
          proxyReq.setHeader(
            "content-type",
            "application/x-www-form-urlencoded"
          );
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
          req.path == "/" ||
          (typeof req.user === "object" &&
            !req.user.isAdmin &&
            (req.path === "/account/profile" ||
              req.path === "/account/billing" ||
              req.path === "/account/notifications" ||
              req.path === "/account/users" ||
              req.path === "/account/personal-access-tokens"))
        ) {
          proxyRes.statusCode = 301;
          proxyRes.headers["location"] = `${domain}/websites`;
          res.statusCode = 301;
          res.setHeader("location", `${domain}/websites`);
        }

        if (req.path == "/do-auto-login") {
          try {
            let { username, password } = await credentialModel.findOne({
              type: "wincher",
            });
            let result = await wincherAuthLogin(username, password);
            if (result) {
              res.statusCode = 200;
              return JSON.stringify({ status: true });
            } else {
              res.statusCode = 200;
              return JSON.stringify({ status: false });
            }
          } catch (err) {
            res.statusCode = 200;
            return JSON.stringify({ status: false });
          }
        }

        if (proxyRes.headers["location"]) {
          proxyRes.headers["location"] = proxyRes.headers["location"].replace(
            "https://app.wincher.com",
            domain
          );
          res.setHeader(
            "location",
            proxyRes.headers["location"].replace(
              "https://app.wincher.com",
              domain
            )
          );
        }
        if (
          proxyRes.headers["content-type"] &&
          proxyRes.headers["content-type"].includes("text/html")
        ) {
          if (req.path == "/login") {
            let html = fs.readFileSync(
              __dirname + "/../views/wincher-auth.ejs"
            );
            return html.toString();
          }
          let response = responseBuffer.toString("utf-8");
          response = response.replace(/https:\/\/app.wincher.com/g, domain);
          let $ = cheerio.load(response);
          let scripts = $("script");
          scripts.each(function() {
            let src= $(this).attr("src");
            if (src !== undefined && /\/_next\/static\/chunks\/pages\/_app-.*\.js/.test(src)) {
              $(this).attr("src", `${domain}/js/wincher.js`);
            }
          });
          if (
            typeof req.user === "object" &&
            !req.user.isAdmin &&
            (req.path === "/account/profile" ||
              req.path === "/account/billing" ||
              req.path === "/account/notifications" ||
              req.path === "/account/users" ||
              req.path === "/account/personal-access-tokens")
          ) {
            $("head").append(`<style>
                #nav-profile {
                    display: none !important;
                }
                main nav[role='menu'] {
                    display: none !important;
                }
                div[data-testid='drawer'] nav div:nth-child(4) {
                    display: none !important;
                }
            </style>`);
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
      referer: "https://app.wincher.com",
      origin: "https://app.wincher.com",
    },
    autoRewrite: true,
    ws: true,
    timeout: 60000,
  });
};

module.exports = wincherMiddleware;
