const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

describe("testing api", () => {
  test("testing healthcheck endpoint", async () => {
    const healthcheck = await api.get("/api/countries/healthcheck").expect(200);
    expect(healthcheck.text).toEqual("healthcheck ok");
    expect(healthcheck.status).toEqual(200);
  });
});
