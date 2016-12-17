const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const payload = {
        sub: "1234"
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: "Manish"
      };

      return done(null, token, data);
});
const jwt1 = require('jsonwebtoken');
const PassportLocalStrategy1 = require('passport-local').Strategy;
const config1 = require('../../config');


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy1({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const payload = {
        sub: "1234"
      };

     console.log(password);
      if(password !== "Manish")
      {
        console.log(password+"sdfjdsfd dsjf");
        error = new Error("Invalid password");
        error.name = "WrongPassword";
        return done(error);
      }
      else
      {
      // create a token string
          const token = jwt1.sign(payload, config1.jwtSecret);
          const data = {
            name: "Manish"
          };

          return done(null, token, data);
    }
});
