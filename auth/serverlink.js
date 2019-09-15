var express = require('express');
var layouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');

//  need to add more featuees regarging server
//  add dev stage

// db config
var db = require('../config/key').DBURI

// passport config
require('../config/passport')(passport);

// db connection
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));

// use express
var app = express();

// get views
app.use(layouts);
app.set('view engine', 'ejs');

// bodyparser
app.use(express.urlencoded({extended: false }));


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// intialise passport(middleware)
app.use(passport.initialize());
app.use(passport.session());


// connect flash to system to display error
app.use(flash());


// connect messages to flash
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// connect index, users
app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));

// start the server
const port = process.env.port || 8000;
app.listen(port, console.log(`Server has started on port ${port}`));

