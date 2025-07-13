const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const ProxyModel = require("../models/proxy");

const staticSemrushMiddleware = (prefix) => {
  return createProxyMiddleware({
    target: `https://static.semrush.com`,
    selfHandleResponse: true,
    changeOrigin: true,
    onProxyReq: (proxyReq, req) => {
      let userAgent = req.headers["user-agent"];
      proxyReq.setHeader("user-agent", userAgent);
    },
    onProxyRes: responseInterceptor(
      async (responseBuffer, proxyRes, req, res) => {
        let domain = `https://${req.headers["host"]}`;
        let semrushProxy = await ProxyModel.findOne({ type: "semrush" });
        let semrushDomain = `https://${semrushProxy.domain}`;
        let dataBuffer;
        if (req.url.match(/\.(css|json|js|text|png|jpg|map|ico|svg)/)) {
          let data = responseBuffer.toString("utf8");
          data = data.replaceAll(/https:\/\/static.semrush.com/g, domain);
          data = data.replaceAll(/https:\/\/www.semrush.com/g, semrushDomain);
          dataBuffer = Buffer.from(data, "utf8");

          // override CORS header
          res.setHeader("Access-Control-Allow-Origin", "*");
        } else if (req.url.match(/\.(png|jpg|ico|svg)/)) {
          // png, jpg, map, ico, svg should not be converted to utf8
          // we directly return it instead
          dataBuffer = responseBuffer;

          // override CORS header
          res.setHeader("Access-Control-Allow-Origin", "*");
        }
        return dataBuffer;
      }
    ),
    prependPath: true,
    secure: false,
    hostRewrite: true,
    headers: {
      referer: `https://static.semrush.com`,
      origin: `https://static.semrush.com`,
    },
    autoRewrite: true,
    ws: true,
  });
};

module.exports = staticSemrushMiddleware;
