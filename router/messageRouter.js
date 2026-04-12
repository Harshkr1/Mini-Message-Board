const express = require("express");
const messageRouter = express.Router();
const { showFormPage, addMessage } = require("../controller/formController.js");

messageRouter.get("/", showFormPage);
messageRouter.post("/", addMessage);

module.exports = { messageRouter };
