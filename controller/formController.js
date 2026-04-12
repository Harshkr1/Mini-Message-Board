const { messages } = require("../data/messages.js");

function showFormPage(request, response) {
  response.render("form");
}

function addMessage(request, response) {
  const authorName = request.body.authorName;
  const messageText = request.body.messageText;

  messages.push({ text: messageText, user: authorName, added: new Date() });

  response.redirect("/");
}

module.exports = {
  showFormPage,
  addMessage,
};
