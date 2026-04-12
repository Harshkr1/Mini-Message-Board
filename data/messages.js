const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

 function getMessageByAuthor(authorName) {
  return messages.find((message) => message.user == authorName);
}

module.exports = {
  messages,
  getMessageByAuthor,
};
