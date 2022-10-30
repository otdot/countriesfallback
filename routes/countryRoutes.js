const router = require("express").Router();
const axios = require("axios");

router.get("/", async (_req, res) => {
  const countries = await axios.get("https://restcountries.com/v3.1/all");

  res.send(countries.data);
});

router.get("/healthcheck", (_req, res) => {
  res.status(200).send("healthcheck ok");
});

module.exports = router;
