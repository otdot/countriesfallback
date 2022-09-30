const express = require("express");
const pingRouter = express.Router();

pingRouter.get("/", (req, res) => {
  res.send("pong");
});

module.exports = pingRouter;
