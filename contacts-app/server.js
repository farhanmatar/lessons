const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const app= express();

// Load env variables
dotenv.config({path : './config/config.env'})
//Contect to database DB
connectDB();

// Initialize Middleware
app.use(express.json({extends:false}));


app.get ('/',(req,res)=>{
    res.json({msg:'welcome to contact  app api'})
})



// Define Routes

app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));

const PORT = process.env.PORT || 5002;

app.listen(PORT ,()=> console.log(`Server started on port ${PORT}`.rainbow.underline.bold)
)