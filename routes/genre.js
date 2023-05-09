const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/genre", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "genre.html"));
});

module.exports = router;