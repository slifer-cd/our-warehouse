const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const citiesRoutes = require("./api/routes/cities");
const toolsRoutes = require("./api/routes/tools");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/cities", citiesRoutes);
app.use("/tools", toolsRoutes);

app.use((req, res, next) => {
  const err = new Error("Nout Found");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
const port = process.env.PORT || 3000;
app.listen(port);
