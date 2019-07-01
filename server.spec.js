const request = require("supertest");
const server = require("./server.js");
const db = require("./data/db.js");

describe("server.js", () => {
  describe("GET /games", () => {
    it("should return a 200 code after get call", async () => {
      const res = await request(server).get("/games");
    });
  });
});
