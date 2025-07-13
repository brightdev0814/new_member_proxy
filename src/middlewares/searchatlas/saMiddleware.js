const { createProxyMiddleware } = require("http-proxy-middleware");
const { JSON_to_URLEncoded } = require("../../services/utils");

const saSearchatlasMiddleware = createProxyMiddleware({
  target: "https://sa.searchatlas.com",
  selfHandleResponse: false,
  changeOrigin: true,
  onProxyReq: (proxyReq, req) => {
    let userAgent = req.headers["user-agent"];
    // proxyReq.path = req.path.replace("/sasearchatlas", "");
    proxyReq.setHeader("user-agent", userAgent);
    proxyReq.setHeader("Authorization", `Bearer ${req.token}`);

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
        proxyReq.setHeader("content-type", "application/x-www-form-urlencoded");
        writeBody(body);
      }

      if (contentType && contentType.includes("multipart/form-data")) {
        proxyReq.setHeader("content-type", "application/json");
        writeBody(JSON.stringify(req.body));
      }
    }
  },
  prependPath: true,
  secure: false,
  hostRewrite: true,
  pathRewrite: {
    "^/sasearchatlas": "",
  },
  headers: {
    referer: "https://dashboard.searchatlas.com",
    origin: "https://dashboard.searchatlas.com",
  },
  autoRewrite: true,
  ws: true,
  timeout: 60000,
});

module.exports = saSearchatlasMiddleware;
