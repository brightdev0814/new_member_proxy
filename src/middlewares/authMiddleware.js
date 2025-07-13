const crypto = require("node:crypto");
const base64 = require("nodejs-base64-encode");
const { isAccessable } = require("../services/utils");
const sessionModel = require("../models/session");

const getMainDomain = (domain) => {
  let segments = domain.split(".");
  let mainDomain = "";
  for (let i = 0; i < segments.length; i++) {
    if (i > 0) mainDomain += "." + segments[i];
  }
  return mainDomain;
};

const authMiddleware = async (req, res, next) => {
  const domain = req.headers["host"];
  const userAgent = req.headers["user-agent"];
  const ipAddr = req.socket.remoteAddress;
  const { token, site } = req.body;
  if (typeof token !== "string" || !/.+#.+#.+/.test(token)) {
    return res.render("warning", {
      msg: `Corrputed token [${token}] sent from IP: ${ipAddr}`,
    });
  }

  const tokenParts = token.split("#");
  if (tokenParts.length !== 3) {
    return res.render("warning", {
      msg: `Corrupted token [${token}] sent from IP: ${ipAddr}`,
    });
  }
  const sentSignature = base64.decode(tokenParts[0], "base64");
  const time = base64.decode(tokenParts[1], "base64");
  const data = base64.decode(tokenParts[2], "base64");
  const parsedUserData = JSON.parse(data);
  const rawString = `${userAgent}\n${time}${data}`;
  const userId = parsedUserData[0];
  const userCookie = parsedUserData[1];
  const userType = parsedUserData[3];
  const serverSignature = crypto
    .createHmac("sha1", process.env.PRIVATE_KEY)
    .update(Buffer.from(rawString, "utf-8"))
    .digest("hex");

  if (sentSignature !== serverSignature) {
    return res.render("warning", {
      msg: `Received signature: ${sentSignature} is different from ${serverSignature}`,
    });
  } else if (!Array.isArray(parsedUserData)) {
    return res.render("warning", {
      msg: `Invalid user data: ${JSON.stringify(parsedUserData)}`,
    });
  } else if (parsedUserData.length !== 4) {
    return res.render("warning", {
      msg: `Invalid user data (array size should be 5): ${JSON.stringify(
        parsedUserData
      )}`,
    });
  } else {
    const hasValidSubscription = await isAccessable(userId, site);
    if (!hasValidSubscription) {
      return res.render("warning", {
        msg: `No valid subscription was found.`,
      });
    }

    const user = {
      id: userId,
      isAdmin: userType,
      username: userCookie.split("=")[1].split("|")[0],
      accessAble: userType ? true : hasValidSubscription,
    };

    await sessionModel.deleteMany({ user: user });
    await sessionModel.create({
      ipAddress: ipAddr,
      userAgent: userAgent,
      user: user,
      wpToken: token,
    });

    res.cookie("wpToken", token, {
      path: "/",
      domain:
        process.env.NODE_ENV === "development"
          ? undefined
          : getMainDomain(domain),
    });
    res.cookie("wpInfo", base64.encode(JSON.stringify({ user, site })), {
      path: "/",
      domain:
        process.env.NODE_ENV === "development"
          ? undefined
          : getMainDomain(domain),
    });

    next();
  }
};

module.exports = authMiddleware;
