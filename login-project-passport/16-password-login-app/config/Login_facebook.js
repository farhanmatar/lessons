const FacebookStrategy = require('passport-facebook').Strategy


const strategy = (new FacebookStrategy({
    clientID: 568890190328554,
    clientSecret:'2afe97a59ae4490a35d718a18e1e748f',
    callbackURL: "http://localhost:5005/user/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {

       cb(null, profile);
    
  }
));
module.exports= strategy;