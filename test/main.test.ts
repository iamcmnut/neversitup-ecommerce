import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.ok).toBe(true);
        expect(res.body.msg).toBe("Welcome");
        
        done();
      });
  });
});
