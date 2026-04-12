const express = require("express");
const { showIndexPage, openMessage } = require("../controller/indexController.js");

const indexRouter = express.Router();

indexRouter.get("/", showIndexPage);
indexRouter.get("/open/:messageUser", openMessage);

module.exports = {
  indexRouter,
};
