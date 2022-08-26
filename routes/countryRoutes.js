const router = require("express").Router();
const axios = require("axios");

router.get("/", async (_req, res) => {
  const countries = await axios.get("https://restcountries.com/v3.1/all");

  res.send(countries.data);
});

module.exports = router;
