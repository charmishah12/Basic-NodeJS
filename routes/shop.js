const path = require('path')
const express = require("express");
const rootdir = require('../util/path')

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express.js</h1>");
  res.sendFile(path.join(rootdir,'views','shop.html'))
});

module.exports = router;
