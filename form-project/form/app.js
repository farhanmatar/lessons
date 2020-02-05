var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayout = require('express-ejs-layouts');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const colors = require('colors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//load env cariables
dotenv.config({ path : './config/config.env'});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Connect to MOngo DB
const connectDB = require('./config/db');

//Connect to database MongoDB
connectDB();


//EJS
app.use(expressLayout);



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

   
  
});

module.exports = app;
