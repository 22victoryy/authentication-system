var express = require('express');
var layouts = require('express-ejs-layouts');

var app = express();


app.use(layouts);
app.set('view engine', 'ejs');


app.use('/', require('../routes/index'));
app.use('/users', require('../routes/users'));


const port = process.env.port || 5000;
app.listen(port, console.log(`Server has started on port ${port}`));

