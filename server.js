const express = require("express");

const server = express();
const db = require("./data/db.js");
server.use(express.json());

server.get("/games", (req, res) => {
  null;
});

server.post("/games", (req, res) => {
  null;
});

module.exports = server;
