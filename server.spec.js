const request = require("supertest");
const server = require("./server.js");
const games = require("./data/games/gamesModel.js");
const db = require("./data/dbConfig.js");

describe("server.js", () => {
  describe("GET /games", () => {
    beforeEach(async () => {
      // this function executes and clears out the table before each test
      await db("games").truncate();
    });

    it("should return a 200 code after get call", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });

    it("should return a JSON", async () => {
      const res = await request(server).get("/games");
      expect(res.type).toBe("application/json");
    });

    it("should return an empty arr when empty", async () => {
      const res = await request(server).get("/games");
      expect(res.body).toEqual([]);
    });

    it("should return games in db", async () => {
      let gamesArr = [
        { title: "Pacman", id: 1, genre: "Arcade", release_year: 1980 },
        { title: "Pokeman", id: 2, genre: "Arcade", release_year: 1990 }
      ];
      await games.insert(gamesArr);
      const res = await request(server).get("/games");
      expect(res.body).toEqual(gamesArr);
    });
  });

  describe("POST /games", () => {
    beforeEach(async () => {
      // this function executes and clears out the table before each test
      await db("games").truncate();
    });

    it("should return a 201 code after insertion", async () => {
      let game = {
        title: "Pacman", // required
        genre: "Arcade", // required
        release_year: 1980 // not required
      };

      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(201);
    });

    it("should return a 422 code if incomplete info", async () => {
      let game = {
        title: "Pacman", // required
        // genre: "Arcade", // required
        release_year: 1980 // not required
      };

      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(422);
    });

    it("should return the id when post sent", async () => {
      let game = {
        title: "Pacman", // required
        genre: "Arcade", // required
        release_year: 1980 // not required
      };
      const res = await request(server)
        .post("/games")
        .send(game);

      expect(res.body).toEqual([1]);
    });
  });
});
