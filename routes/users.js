var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
// call user model
const User = require('../model/usermodel');
var passport = require('passport');

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
    errors.push({msg: "Please enter all the fields."});
  }

  if (password != password2){
    errors.push({msg: "Your password does not match."});
  }
  if(password.length < 8) {
    errors.push({msg: "Password needs to be at least 8 characters."});
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
    // user validation
    User.findOne({email: email})
    .then(user => {
      if (user)
      {
        errors.push({ msg: 'Email is already used to register.'})
        res.render('register', {
          errors,
          name ,
          email,
          password,
          password2
        });
      } else
      {
        var newuser = new User({
          name,
          email,
          password,
        });
      console.log(newuser);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          if (err) throw err;
          newuser.password = hash;
          newuser
            .save()
            .then(user => {
              req.flash(
                'success_msg',
                'You are now registered and can log in'
              );
              res.redirect('/users/login');
            })
            .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// login handler

router.post('/login', function(req, res, next){
  passport.authenticate('local', {
    successRedirect: '/bbs',
    failureRedirect: '/users/login',
    failureFlash: true
  }) (req, res, next) ;
});

//l logout handler
router.get('/logout', function(req, res){
  req.logout();
  req.flash('success_msg', 'y ou have successfully logged out.');
  res.redirect('/users/login');
});

module.exports = router;
