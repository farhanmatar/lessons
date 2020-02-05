const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');
const colors = require('colors');
const strategy = require('./config/Login_facebook');


//load env cariables
dotenv.config({ path : './config/config.env'});

//Connect to MOngo DB
const connectDB = require('./config/db');

//Connect to database MongoDB
connectDB();



const app = express();

//EJS
app.use(expressLayout);
app.set('view engine','ejs')




// Body parser for Posting Data
app.use(express.urlencoded({extended:true}))

// Express Session 
app.use(session({
    secret : "secret",
    resave:true,
    saveUninitialized:true,
    
}));
//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

//passport config
require('./config/passport')(passport)

//Connect Flash
app.use(flash());

//Global variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

// Routes another way 
/* const index = require('./routes/index')
const users = require('./routes/users')
app.use('/',index);
app.use('/users',users); */




//Routes
app.use('/' ,require('./routes/index'));
app.use('/users' ,require('./routes/users'));



const PORT = process.env.PORT || 5005;
const server = app.listen(PORT,console.log(`Server Started on port ${PORT} in ${process.env.NODE_ENV} mode `.bgMagenta))

