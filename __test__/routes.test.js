const request = require("supertest");
const app = require("../app");

describe("post endpoints", () => {
  it("should create a new post", async () => {
    const res = await request(app).post("/api/v1/auth/login").send({
      username: 1,
      title: "test is cool",
    });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("post");
  });
});
