const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
    type : String,
    require :true
   },
   lname:{
    type : String,
    require :true
   },
   bdate:{
    type : Date,
    require :true
   },
   gender:{
    type : String,
    require :true
   },
   nationality:{
    type : String,
    require :true
   },
   phone:{
    type : Number,
    require :true
   },
   email:{
    type : String,
    require :true
   },
   password:{
    type : String,
    require :true
   },
   date:{
    type : Date,
    default :Date.now
   },

})

const User = mongoose.model('User' ,UserSchema);
module.exports = User;