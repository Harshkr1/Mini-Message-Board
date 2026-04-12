const { messages, getMessageByAuthor } = require("../data/messages.js");

function showIndexPage(request, response) {
  response.render("index", { messages: messages });
}

 function openMessage(request, response) {
  const  authorName  = request.params.messageUser;
  const message =  getMessageByAuthor(authorName);

  if (!message) {
    return response.status(404).send("Message not found");
  }

  response.render("open", { message: message });
}

module.exports = {
  showIndexPage,
  openMessage,
};
