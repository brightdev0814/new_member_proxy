const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const cheerio = require("cheerio");
const {
  JSON_to_URLEncoded,
  searchatlasAuthLogin,
} = require("../../services/utils");
const credentialModel = require("../../models/credential");

const dashboardMiddleware = (prefix) =>
  createProxyMiddleware({
    target: `https://dashboard.searchatlas.com`,
    selfHandleResponse: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      const userAgent = req.headers["user-agent"];
      proxyReq.setHeader("user-agent", userAgent);
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
          proxyReq.setHeader("content-type", "application/json");
          writeBody(JSON.stringify(req.body));
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
          /^\/(orders|billing|app-ecosystem|get-started|agency-settings)/.test(
            req.path
          )
        ) {
          proxyRes.statusCode = 301;
          proxyRes.headers["location"] = domain + "/home";
          res.statusCode = 301;
          res.setHeader("location", domain + "/home");
        }

        if (req.path == "/do-auto-login") {
          let { username, password } = await credentialModel.findOne({
            type: "searchatlas",
          });
          let result = await searchatlasAuthLogin(username, password);
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
            "https://dashboard.searchatlas.com",
            domain
          );
          res.setHeader(
            "location",
            proxyRes.headers["location"].replace(
              "https://dashboard.searchatlas.com",
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
          let scripts = $("script");
          scripts.each(function () {
            let src = $(this).attr("src");
            if (src == undefined) {
              let content = $(this).html();
              let newContent = content.replaceAll(
                /https:\/\/dashboard.searchatlas.com/g,
                domain
              );
              $(this).html(newContent);
            } else {
              if (/\/_next\/static\/chunks\/pages\/_app-.*\.js/.test(src)) {
                $(this).attr("src", `${domain}/js/searchatlas.js`);
              } else {
                $(this).attr(
                  "src",
                  src.replace("https://dashboard.searchatlas.com", domain)
                );
              }
            }
          });
          if (req.proxy.cookie) {
            if (typeof req.user == "object" && !req.user.isAdmin) {
              $("head").append(
                "<style>.style_IconsHeader__AS8G_ > a, .style_IconsHeader__AS8G_ > div, .style_header__user-menu__56lt_, .style_trailSec__lGmQ_ { display: none } </style>"
              );
            }
            $("head").append(
              `<script>localStorage.setItem('token', '${req.proxy.cookie}');</script>`
            );
          }

          if (req.path === "/login") {
            let html = fs.readFileSync(
              __dirname + "/../views/searchatlas-auth.ejs"
            );
            return html.toString();
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
      referer: "https://dashboard.searchatlas.com",
      origin: "https://dashboard.searchatlas.com",
    },
    autoRewrite: true,
    ws: true,
    timeout: 60000,
  });

module.exports = dashboardMiddleware;
