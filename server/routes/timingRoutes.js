const express = require("express");

const router = express.Router();

router.get("/health", (request, response) => response.send("Time"));

router.get("/openingTime", (request, response) => response.send("4pm - 12 am"));

module.exports = router;
