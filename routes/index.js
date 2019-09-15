var express = require('express');
var router = express.Router();
var { assurelogin } = require('../config/assurelogin');


// redirect to  welcome page
router.get('/', function(req, res) {
  res.render("welcome")
});

  // get bbs view, redirect to bbs
router.get('/bbs', assurelogin, function(req, res) {
  res.render("bbs", {
    name: req.user.name
  })
});


module.exports = router;