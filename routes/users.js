var express = require('express');
var router = express.Router();

// Login 
router.get('/Login', (req, res) =>
  res.render("Login")
);

// Register
router.get('/Register', (req, res) =>
  res.render("Register")
);

module.exports = router;