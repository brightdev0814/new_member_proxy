const crypto = require("node:crypto");
const base64 = require("nodejs-base64-encode");
const sessionModel = require("../models/session");

const memberMiddleware = async (req, res, next) => {
  if (req.url.match(/\.(css|json|js|text|png|jpg|map|ico|svg)/)) return next();
  const { wpInfo, wpToken } = req.cookies;

  if (!wpInfo || !wpToken)
    return res.render("warning", {
      msg: "Access denied.",
    });
  const userAgent = req.headers["user-agent"];
  const ipAddr = req.socket.remoteAddress;
  if (typeof wpToken !== "string" || !/.+#.+#.+/.test(wpToken)) {
    return res.render("warning", {
      msg: `Corrputed token [${wpToken}] sent from IP: ${ipAddr}`,
    });
  }

  const tokenParts = wpToken.split("#");
  if (tokenParts.length !== 3) {
    return res.render("warning", {
      msg: `Corrupted token [${wpToken}] sent from IP: ${ipAddr}`,
    });
  }

  const sentSignature = base64.decode(tokenParts[0], "base64");
  const time = base64.decode(tokenParts[1], "base64");
  const data = base64.decode(tokenParts[2], "base64");
  const rawString = `${userAgent}\n${time}${data}`;
  const serverSignature = crypto
    .createHmac("sha1", process.env.PRIVATE_KEY)
    .update(Buffer.from(rawString, "utf-8"))
    .digest("hex");

  if (sentSignature !== serverSignature) {
    return res.render("warning", {
      msg: `Received signature: ${sentSignature} is different from ${serverSignature}`,
    });
  }

  const wpInfoDecoded = JSON.parse(base64.decode(wpInfo));
  if (
    (await sessionModel.count({
      wpToken: wpToken,
      user: wpInfoDecoded.user,
    })) !== 1
  ) {
    return res.render("warning", {
      msg: `Please connect.`,
    });
  }

  req.user = wpInfoDecoded.user;
  req.wpSite = wpInfoDecoded.site;
  next();
};

module.exports = memberMiddleware;
