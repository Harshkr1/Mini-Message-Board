const express = require("express");
const { showIndexPage } = require("../controller/indexController.js");

const indexRouter = express.Router();

indexRouter.get("/", showIndexPage);

module.exports = {
  indexRouter,
};
