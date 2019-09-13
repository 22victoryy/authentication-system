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

// register handle
router.post('/register', (req, res) => {
  var { name, email, password, password2} = req.body;
  // validation
  let errors = [];

  if (!name || !email || !password || !password2){
    errors.push({msg: "pls enter everything"});
  }

  if (password != password2){
    errors.push({msg: "pw does not match"});
  }
  if(password.length < 8) {
    errors.push({msg: "pass less than 8 char"});
  }
  if (errors.length > 0){
    res.render('register', {
      errors,
      name ,
      email,
      password,
      password2
    });
  }
  else {
    res.send('pass');
  }
});

module.exports = router;