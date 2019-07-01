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

server.post("/games", async (req, res) => {
  let game = req.body;
  if (!game.title) {
    res.status(422).json({ message: "Missing title info" });
  } else if (!game.genre) {
    res.status(422).json({ message: "Missing genre info" });
  }
  try {
    const addedGame = await db.insert(game);
    res.status(201).json(addedGame);
  } catch (err) {
    // res.status(500).json(err);
  }
});

module.exports = server;
