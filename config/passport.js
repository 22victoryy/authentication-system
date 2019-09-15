var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose'); // this is not used...imported for now

// Load User model
var User = require('../model/usermodel');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, complete) => {
      // Match user
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return complete(null, false, { message: 'This email does not exist according to our records.' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return complete(null, user);
          } else {
            return complete(null, false, { message: 'Incorrect password. Please try again.' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, complete) {
    complete(null, user.id);
  });

  passport.deserializeUser(function(id, complete) {
    User.findById(id, function(err, user) {
      complete(err, user);
    });
  });
};
