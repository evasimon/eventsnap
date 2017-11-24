// npm packages required / dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes")

// sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// serves up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// configures body parser for AJAX requests and
// sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// adds routes, both API and view
app.use(routes);

// requires models for syncing
var db = require("./models")

// syncs the sequelize models and then connects the Express app
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});

