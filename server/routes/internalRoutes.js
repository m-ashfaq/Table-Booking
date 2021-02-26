const express = require("express");

const router = express.Router();

router.get("/_health", (request, response) => response.send("OK"));

module.exports = router;
