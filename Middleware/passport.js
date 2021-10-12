// const bcrypt = require('bcrypt')
// const passport = require('passport')
// const JwtStrategy = require('passport-jwt').Strategy
// const ExtractJwt = require('passport-jwt').ExtractJwt
// const LocalStrategy = require('passport-local').Strategy

//  const authHandler = (app) => {
//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   })

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       const userInformation = {
//         id: user._id,
//         username: user.username,
//       }
//       done(err, userInformation)
//     })
//   })

//   //Email and password Strategy
//   passport.use(
//     new LocalStrategy(
//       {
//         usernameField: 'username',
//         passwordField: 'password',
//         session: false,
//       },
//       login
//     )
//   )


//     //JWT
//     passport.use(
//       new JwtStrategy(
//         {
//           jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//           secretOrKey: process.env.JWT_SECRET,
//         },
//         function (payload, done) {
//           User.findOne({ id: payload.id }, function (err, user) {
//             if (err) {
//               return done(err, false)
//             }
//             if (user) {
//               return done(null, user)
//             } else {
//               return done(null, false)
//             }
//           })
//         }
//       )
//     )


//   // Passport middleware
//     app.use(passport.initialize())
//     app.use(passport.session())
//  }
// module.exports = authHandler