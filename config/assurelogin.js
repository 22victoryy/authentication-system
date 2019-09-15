module.exports = {
  assurelogin: function(req, res, next) {
    if (req.isAuthenticated()){
      return next();
    } else {
      req.flash('error_msg', 'Please sign in to access the bulletin board system.')
      res.redirect('/users/login');
    }
  }
}