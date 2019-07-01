const express = require("express");

const server = express();

const db = require("./data/games/gamesModel.js");

server.use(express.json());

server.get("/games", async (req, res) => {
  try {
    const games = await db.get();
    if (games.length < 1) {
      res.status(200).json([]);
    } else {
      res.status(200).json(games);
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the games" });
  }
});

server.post("/games", (req, res) => {
  null;
});

module.exports = server;
