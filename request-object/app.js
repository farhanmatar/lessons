var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.get('/about', (req, res) => {
    console.log(req.params)
    res.send('<h1>About Page</h1>')
})

app.get('/user/:userid', (req, res) => {
    //res.send(`<h1>User</h1><p>ID: ${req.params.userid}</p>`)
    res.send(req.params)
    console.log('Request Param', req.params)
})

app.get('/search', (req, res) => {
    res.send(req.query)
    console.log(req.query.keyword) // "learn-javascript"
})

// https://node.hamburg-coders.pro/weather?filter=very-cold
app.get('/weather', (req, res) => {
    res.send("<h2>Weather Page</h2>")
    console.log(req.protocol)     // "https"
    console.log(req.hostname)     // "hamburg-coders.pro"
    console.log(req.path)         // "/weather"
    console.log(req.originalUrl)  // "/weather?filter=very-cold"
    console.log(req.subomains)    // "['node']"
  })


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
