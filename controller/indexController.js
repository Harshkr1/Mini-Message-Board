const db = require("../data/query");

async function showIndexPage(request, response) {
  const messages = await db.getAllMessages();
  response.render("index", { messages: messages });
}

async function openMessage(request, response) {
  const authorName = request.params.messageUser;
  const message = await db.getMessageByAuthor(authorName);

  if (!message) {
    return response.status(404).send("Message not found");
  }

  response.render("open", { message: message });
}

module.exports = {
  showIndexPage,
  openMessage,
};
