const express = require("express");
// mongoose = require("mongoose");
const path = require("path");
//const config = require("./config/database");
const calculatorRoutes = require("./routes/calculatorRoutes");

// instantiating server
const app = express();

// //express sesssion
// const expressSession = require("express-session")({
//   secret: "secret",
//   resave: false,
//   saveUninitialized: false,
//   //cookie:{ maxAge:60*60*1000},
// });

// views settings or configurations
app.set("view engine", "pug");
app.set("views", "./views");

// middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(expressSession);

// routes
app.use("/", calculatorRoutes);

// handling non existing routes
app.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

// server
const port = 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
