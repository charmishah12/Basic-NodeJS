const express = require("express");
const router = express.Router();
// const path = require("path");
// const rootDir = require("../util/path");

router.post("/welcome", (req, res, next) => {
  console.log(req.body);
  res.send(
    '<body style="display: flex; justify-content: center;"><div style="width: 600px; padding: 20px;"><h1 style="background-color: #F1fbf1; text-align: center; color: 081c15; padding: 50px">Thank you for subscribing  ' +
      req.body.username +
      " !</h1><button style=' background-color: #d8f3dc;  color: #081c15; font-size: 18px; font-weight: 500; padding: 10px; border: 0px; border-radius: 5px; cursor: pointer;'><a href='/' style='text-decoration: none'>Go to Home Page</a></button><div></body>"
  );
});

module.exports = router;
