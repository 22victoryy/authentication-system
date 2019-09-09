var express = require('express');
var expresshb = require('express-handlebars');
var expressval = require('express-validator');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var flash = require('flash');
var LocalStrategy = require('passport-local').Strategy;
var path = require('path');

mongoose.connect('mongodb://localhost/passport');

var db = mongoose.connection;

