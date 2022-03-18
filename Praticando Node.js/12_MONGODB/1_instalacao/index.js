const express = require("express");
const exphds = require("express-handlebars");

const app = express();
const conn = require("./db/conn");

app.engine("handlebars", exphds.engine());
app.set("view engine", "handlebars");

// Read Body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.listen(3000);
