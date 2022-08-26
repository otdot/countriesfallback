require("dotenv").config();

const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

module.exports = { PORT, WEATHER_API_KEY };
