const LocalStrategy=require('passport-local').Strategy;
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const JWtStrategy=require('passport-jwt').Strategy;
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//Load User Model
const User=require('../models/User');
//strategy
module.exports=(passport)=>{
    passport.use(
        new LocalStrategy({usernameField:'email'},(email,password,done)=>{
            //Match User in mongoDB
            User.findOne({email:email})
            .then((userData)=>{
                if(!userData){
                    return done(null,false,{message:'this email is not registered'})
                }
                //Match password
                bcrypt.compare(password,userData.password,(err, isMatch)=>{
                    if(err)throw err;
                    if (isMatch){
                        return done(null,userData)
                    }
                    return done(null,false,{message: 'Password incorrect '});
                })
            })
            .catch(err=>{
                console.log(err);
            })
        })
    )
    //sessions
    passport.serializeUser((user, done)=> {
        done(null, user.id);
      });
    passport.deserializeUser((id, done)=>{
        User.findById(id,function(err, user) {
           done(err, user);
        });
      });
    const optionsJWT={
        jwtFromRequest:req=>req.cookies.jwt,
        secretOrKey:process.env.JWT_SECRET
    }
    passport.use('jwt',
     new JWtStrategy(optionsJWT, (jwt_payload,done)=>{
         try{
            User.findOne({email:jwt_payload.id})
            .then(user=>{
                if(user){
                    console.log('User is found in the database')
                    done(null,user)
                }else{
                    console.log('User not found in the database')
                    done(null,false)
                }
            })
         }catch(error){
            done(error)
         }
     }))
    
    const optionFacebook = {
        clientID : '568890190328554',
        clientSecret : '2afe97a59ae4490a35d718a18e1e748f',
        callbackURL : 'http://localhost:5007/users/auth/facebook/callback',
        profileFields : ['id', 'displayName', 'email']
      }
      passport.use('facebook',
        new FacebookStrategy(optionFacebook,(accessToken,refreshToken,profile,done)=>{
            User.findOne({email:profile._json.email}).then( (userData)=>{
                if(!userData){
                    return done(null,false,{message:'This email user is not registered'})
                }else{
                    return done(null,userData)
                }
            }).catch(err=>{
                done(err)
            })
        })
    )

// github login


    var GitHubStrategy = require('passport-github').Strategy;

    passport.use(new GitHubStrategy({
        clientID: 'da5ce0fb240dfbba3cf5',
        clientSecret: 'efd63bfb2532fb46d26c5125fbcb8e3091f310cc',
        callbackURL: "http://localhost:5007/users/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOne({ email: profile._json.email }, function (err, user) {
          return cb(err, user);
        });
      }
    ));
    }
// email login


passport.use(new GoogleStrategy({
    clientID: '1000059143233-idcmg7sqlkfnosahjdsju1ak4q6betas.apps.googleusercontent.com',
    clientSecret:'dj_gLbbwnvGOlxOjeH-Q0oT8',
    callbackURL: "http://localhost:5007/users/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOne({ email: profile._json.email }, function (err, user) {
         return done(err, user);
       });
  }
));
