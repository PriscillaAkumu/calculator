const express = require("express");
// mongoose = require("mongoose");
const path = require("path");
//const config = require("./config/database");
const calculatorRoutes = require("./routes/calculatorRoutes");

// instantiating server
const app = express();

// views settings or configurations
app.set("view engine", "pug");
app.set("views", "./views");

// middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", calculatorRoutes);

// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

// server
const port = 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
