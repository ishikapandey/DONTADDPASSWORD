const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require('bcryptjs');

// Load User model
const User = require("../models/User");

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: "username" }, (username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false,);
        }
        if (!user.validPassword(password)) {
          return done(null, false,);
        }
        return done(null, user);
      });
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
