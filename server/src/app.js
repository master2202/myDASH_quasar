const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const welcomeRoutes = require("./api/routes/public/welcome");
const mydashRoutes = require("./api/routes/private/mydash");

//connect db
mongoose.connect(
  "mongodb://myDASH:j9p5k3deluxe@cluster0-shard-00-00-xosjz.gcp.mongodb.net:27017,cluster0-shard-00-01-xosjz.gcp.mongodb.net:27017,cluster0-shard-00-02-xosjz.gcp.mongodb.net:27017/myDASH?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error")
);
mongoose.connection.once("open", () => {
  console.log("Connection Succeeded");
});

// configure app
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//routes which should handle requests
app.use("/welcome", welcomeRoutes);
app.use("/mydash", mydashRoutes);

// errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
