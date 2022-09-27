const express = require('express');
const router = express.Router();

// Get a landing page
router.get('/', (req, res) => {
    res.render('calculator')
})

module.exports = router;