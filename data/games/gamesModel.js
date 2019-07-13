const db = require("../dbConfig.js");

module.exports = {
  insert,
  get
};

function insert(game) {
  return db("games").insert(game);
}

function get() {
  return db("games");
}
