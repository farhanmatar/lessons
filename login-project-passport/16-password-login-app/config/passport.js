const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Load User Model
const User = require('../models/User');

module.exports = (passport)=>{
    passport.use(
        new LocalStrategy({usernameField : 'email'} , (email ,password,done)=>{
            //match User in Mongo DB
            User.findOne({email:email})
            .then((userData)=>{
                
                if(!userData){
                    return done(null,false,{ message:'this email is not reqisterd'})
                }
                //Match Password
                bcrypt.compare(password , userData.password,(err, isMatch)=>{
                   
                    if(err)throw err;
                    if(isMatch){
                        
                        return done(null,userData)

                    }
                    else{
                        return done(null,false,{message:'password incorrect '})
                    }
                })

            })
            .catch(err => {
                console.log(err);
                
            })
        })
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}