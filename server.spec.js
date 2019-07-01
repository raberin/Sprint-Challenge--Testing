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
  });

  describe("POST /games", () => {
    beforeEach(async () => {
      // this function executes and clears out the table before each test
      await db("games").truncate();
    });

    it("should return a 201 code after insertion", async () => {
      const res = await request(server).post("/games");
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
  });
});
