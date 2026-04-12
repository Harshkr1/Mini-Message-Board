const { messages } = require("../data/messages.js");

function showIndexPage(request, response) {
  response.render("index", { messages: messages });
}

module.exports = {
  showIndexPage,
};
