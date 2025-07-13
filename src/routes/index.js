const express = require("express");
const multer = require("multer");
const bodyParser = express.json();
const router = express.Router();
const authorizeCtrl = require("../controllers/authorizeCtrl");
const langCtrl = require("../controllers/langCtrl");
const SettingModel = require("../models/setting");
const {
  authMiddleware,
  memberMiddleware,
  jsonMiddleware,
  nextMiddleware,
  mcopMiddleware,
  applyMiddleware,
} = require("../middlewares/index");
const apiSearchatlasMiddleware = require("../middlewares/searchatlas/apiMiddleware");
const gscSearchatlasMiddleware = require("../middlewares/searchatlas/gscMiddleware");
const saSearchatlasMiddleware = require("../middlewares/searchatlas/saMiddleware");
const caSearchatlasMiddleware = require("../middlewares/searchatlas/caMiddleware");
const keywordSearchatlasMiddleware = require("../middlewares/searchatlas/keywordMiddleware");
const apiWincherMiddleware = require("../middlewares/apiWincherMiddleware");

router.use("/authorize", authMiddleware, authorizeCtrl.index);
router.get("/lang/semrush", langCtrl.semrush);
router.get("/lang/spyfu", langCtrl.spyfu);
router.use(
  "/apisearchatlas",
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  async (req, res, next) => {
    const { searchatlasCookie: token } = await SettingModel.findOne();
    req.token = token;
    next();
  },
  apiSearchatlasMiddleware
);
router.use(
  "/keywordsearchatlas",
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  async (req, res, next) => {
    const { searchatlasCookie: token } = await SettingModel.findOne();
    req.token = token;
    next();
  },
  keywordSearchatlasMiddleware
);
router.use(
  "/gscsearchatlas",
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  async (req, res, next) => {
    const { searchatlasCookie: token } = await SettingModel.findOne();
    req.token = token;
    next();
  },
  gscSearchatlasMiddleware
);
router.use(
  "/sasearchatlas",
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  async (req, res, next) => {
    const { searchatlasCookie: token } = await SettingModel.findOne();
    req.token = token;
    next();
  },
  saSearchatlasMiddleware
);
router.use(
  "/casearchatlas",
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  async (req, res, next) => {
    const { searchatlasCookie: token } = await SettingModel.findOne();
    req.token = token;
    next();
  },
  caSearchatlasMiddleware
);
router.use(
  "/api-wincher",
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  apiWincherMiddleware
);
router.use(
  "/",
  (req, res, next) => {
    // for searchatlas.com
    if (req.query.invoice && req.query.type && req.query.jwt) {
      req.url = `https://${req.headers["host"]}/apisearchatlas/api/customer/invoices/pdf?invoice=${req.query.invoice}&type=${req.query.type}&jwt=${req.query.jwt}`;
    }
    next();
  },
  multer().any(),
  memberMiddleware,
  jsonMiddleware,
  bodyParser,
  nextMiddleware,
  mcopMiddleware,
  applyMiddleware
);

module.exports = router;
