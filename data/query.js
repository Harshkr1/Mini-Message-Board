const pool = require("./pool");

async function getMessageByAuthor(authorName) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE username=($1)",
    [authorName],
  );
  return rows[0];
}

async function postMessage({ authorName, messageText }) {
  await pool.query(
    "INSERT INTO messages (username, message) VALUES (($1), ($2))",
    [authorName, messageText],
  );
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

module.exports = {
  getMessageByAuthor,
  postMessage,
  getAllMessages,
};
