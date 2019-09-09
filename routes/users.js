var express = require('express');
var router = express.Router();

// Login 
router.get('/Login', (req, res) =>
  res.send("Login")
);

// Register
router.get('/Register', (req, res) =>
  res.send("Register")
);

module.exports = router;