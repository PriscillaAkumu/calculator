const express = require("express");
const router = express.Router();

// Get a landing page
router.get("/", (req, res) => {
  res.render("calculator");
  // res.render('app')
});

module.exports = router;
