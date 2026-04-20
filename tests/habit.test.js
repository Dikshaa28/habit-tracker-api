const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");

describe("Habit API", () => {

  it("should create a habit", async () => {
    const res = await request(app)
      .post("/api/habits")
      .send({
        title: "Test Habit",
        userId: "69e5d6043a048375ff0577ce"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("_id");
  });

  it("should get all habits", async () => {
    const res = await request(app).get("/api/habits");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});


afterAll(async () => {
  await mongoose.connection.close();
});