var express = require('express');
var layouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');

//  need to add more featuees regarging server
//  add dev stage

//db config
var db = require('../config/key').DBURI


//db connection

mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err));


var app = express();


// ejs
app.use(layouts);
app.set('view engine', 'ejs');

// bodyparser
app.use(express.urlencoded({extended: false }));

// Express session middleware
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true,
// }));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// connect flash
app.use(flash());


// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   next();
// })

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  // res.locals.error = req.flash('error');
  next();
});


app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));


const port = process.env.port || 5000;
app.listen(port, console.log(`Server has started on port ${port}`));

