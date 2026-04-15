const db = require("../data/query");

function showFormPage(request, response) {
  response.render("form");
}

async function addMessage(request, response) {
  const authorName = request.body.authorName;
  const messageText = request.body.messageText;

  await db.postMessage({ authorName, messageText });

  response.redirect("/");
}

module.exports = {
  showFormPage,
  addMessage,
};
