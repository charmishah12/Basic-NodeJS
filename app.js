const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const expresshbs = require('express-handlebars')

app.engine('handlebars',expresshbs())
app.set("view engine", "handlebars");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { title: '404 - Page not found' });
});

app.listen(3000);
