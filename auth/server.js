var express = require('express');
var layouts = require('express-ejs-layouts');
var mongoose = require('mongoose');

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


app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));


const port = process.env.port || 5000;
app.listen(port, console.log(`Server has started on port ${port}`));

