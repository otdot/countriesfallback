require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const http = require("http");
const cors = require("cors");
const weatherRouter = require("./routes/weatherRoutes");
const countryRouter = require("./routes/countryRoutes");

const app = express();

app.use(express.json());
app.use(cors());
morgan.token("body", (req, res) => {
  return JSON.stringify(req.body);
});
app.use(morgan(":body"));
app.use(express.static("build"));

app.use("/api/countries", countryRouter);
app.use("/api/weather", weatherRouter);

const server = http.createServer(app);

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
