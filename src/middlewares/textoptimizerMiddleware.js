const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const fs = require("fs");
const cheerio = require("cheerio");
const {
  JSON_to_URLEncoded,
  textoptimizerAuthLogin,
} = require("../services/utils");
const FormData = require("form-data");
const credentialModel = require("../models/credential");

const textoptimizerMiddleware = (prefix) =>
  createProxyMiddleware({
    target: `https://textoptimizer.com`,
    selfHandleResponse: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
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
          let body = JSON_to_URLEncoded(req.body);
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
          /^\/ajax/.test(req.path)
        ) {
          if (proxyRes.headers["content-encoding"] === "zstd") {
            res.setHeader("content-encoding", "zstd");
          }
          return responseBuffer;
        }
        if (
          req.path == "/" ||
          (typeof req.user == "object" &&
            !req.user.isAdmin &&
            (/\/update_address/.test(req.path) ||
              /\/update_password/.test(req.path)))
        ) {
          proxyRes.statusCode = 301;
          proxyRes.headers["location"] = domain + "/o";
          res.statusCode = 301;
          res.setHeader("location", domain + "/o");
        }

        if (req.path == "/do-auto-login") {
          try {
            let { username, password } = await credentialModel.findOne({
              type: "textoptimizer",
            });
            let result = await textoptimizerAuthLogin(username, password);
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
            "https://textoptimizer.com",
            domain
          );
          res.setHeader(
            "location",
            proxyRes.headers["location"].replace(
              "https://textoptimizer.com",
              domain
            )
          );
        }
        if (
          proxyRes.headers["content-type"] &&
          proxyRes.headers["content-type"].includes("text/html")
        ) {
          if (proxyRes.headers["content-encoding"] === "zstd") {
            res.setHeader("content-encoding", "zstd");
            return responseBuffer;
          } else {
            let response = responseBuffer.toString("utf-8");
            let $ = cheerio.load(response);
            let links = $("link");
            links.each(function () {
              let href = $(this).attr("href");
              if (href !== undefined) {
                $(this).attr(
                  "href",
                  href.replace("https://textoptimizer.com", domain)
                );
              }
            });
            let forms = $("form");
            forms.each(function () {
              let action = $(this).attr("action");
              if (action !== undefined) {
                $(this).attr(
                  "action",
                  action.replace("https://textoptimizer.com", domain)
                );
              }
            });
            let anchors = $("a");
            anchors.each(function () {
              let href = $(this).attr("href");
              if (href !== undefined) {
                $(this).attr(
                  "href",
                  href.replace("https://textoptimizer.com", domain)
                );
              }
            });
            let scripts = $("script");
            scripts.each(function () {
              let src = $(this).attr("src");
              if (src == undefined) {
                let content = $(this).html();
                let newContent = content.replace(
                  /https:\/\/textoptimizer.com/g,
                  domain
                );
                $(this).html(newContent);
              } else {
                $(this).attr(
                  "src",
                  src.replace("https://textoptimizer.com", domain)
                );
              }
            });
            if (typeof req.user == "object" && !req.user.isAdmin) {
              if (req.path == "/profile") {
                $("table a").remove();
              }
            }
            if (req.path == "/login") {
              let html = fs.readFileSync(
                __dirname + "/../views/textoptimizer-auth.ejs"
              );
              return html.toString();
            }
            return $.html();
          }
        }
        return responseBuffer;
      }
    ),
    prependPath: true,
    secure: false,
    hostRewrite: true,
    headers: {
      referer: "https://textoptimizer.com",
      origin: "https://textoptimizer.com",
    },
    autoRewrite: true,
    ws: true,
    timeout: 60000,
  });

module.exports = textoptimizerMiddleware;
