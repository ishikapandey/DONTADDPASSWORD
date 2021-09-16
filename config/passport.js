const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require('bcryptjs');

// Load User model
const User = require("../models/User");

module.exports = (passport)=>{
  passport.use(new LocalStrategy({usernameField:'username'},
  (username, password, done) =>{
    User.findOne({ username: username }, (err, user) =>{
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password!==password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};





module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // Match user
      User.findOne({
        username: username
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'That username is not registered' });
        }

        // Match password
        if(password===user.password)
         {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
      });
    })
  );}
