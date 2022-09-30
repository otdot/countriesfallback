const serverless = require("serverless-http");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const pingRouter = require("../routes/pingRouter");
const weatherRouter = require("../routes/weatherRoutes");
const countryRouter = require("../routes/countryRoutes");
const app = express();

app.use(express.json());
app.use(cors());
// morgan.token("body", (req, res) => {
//   return JSON.stringify(req.body);
// });
app.use(morgan("dev"));
app.use(express.static("build"));

app.use("/api/countries", countryRouter);
app.use("/api/weather", weatherRouter);
app.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../../dist/index.html"))
);

module.exports.handler = serverless(app);
