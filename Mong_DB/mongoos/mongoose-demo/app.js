var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require ('mongoose');
var indexRouter = require('./routes/index');
var ProductRouter = require('../mongoose-demo/routes/products');

var app = express();

/* DB Connection */
mongoose.connect("mongodb://localhost:27017/shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function() {
  console.log("WooooooHoooooo   Database connection established...");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', ProductRouter);

module.exports = app;
