const express = require("express");
const morgan = require("morgan");
var cookieSession = require("cookie-session");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init routers

app.get("/", (req, res, next) => {
  const strCompress = "Hello Nguyen";
  return res.status(200).json({
    message: "Welcome",
    metadata: strCompress.repeat(1000),
  });
});
app.get("/user", (req, res) => {
  req.session.count = (req.session.count || 0) + 1;
  res.send("viewed " + req.session.count + " times\n");
});
module.exports = app;
