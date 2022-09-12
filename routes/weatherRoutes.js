const router = require("express").Router();
const axios = require("axios");
const { WEATHER_API_KEY } = require("../utils/config");

router.get("/:latlng", async (req, res) => {
  const [lat, lon] = req.params.latlng.split("_");

  const weather =
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric
      `);
  res.send(weather.data);
});

module.exports = router;
