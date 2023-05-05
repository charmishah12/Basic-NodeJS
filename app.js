const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("In the middleware 1!");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("In the middleware 2!");
//   res.send('<h1>Middleware without paths!!</h1>')
// });

app.use("/", (req, res, next) => {
  console.log("This function will be always called because next() is called in the next line");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("This function will be called whenever its path is matched & after matching the path it will be exited from the function and won't go to any other path");
  res.send("<h1>List of users</h1><ul><li>User 1</li><li>User 2</li></ul>");
});

app.use("/", (req, res, next) => {
  console.log("Using the global path");
  res.send("You're on the local host");
});

app.listen(3000);
