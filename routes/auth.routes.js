const router = require('express').Router()
const passport = require('passport')
const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')

// middleware for checking if the user is logged in
const middleware = {
    checkForAuth: (req, res, next)=>{
      if(req.isAuthenticated()){
        return next()
      } else {
       res.send('The middleware does not let you pass ;)')
     }}}


// Route for sending the errors to the client
router.get('/errors', (req, res)=>{
  res.send({message: req.flash("error")})
})

// Route for checking if the user is logged in
router.get('/verify', middleware.checkForAuth, (req, res)=>{
  res.send(req.user)
})

//Rout Post to sign up a new user
router.post('/signup', (req, res)=>{
    const {username, password} = req.body

    const hashedPassword = bcrypt.hashSync(password, 10);

    Admin.create({username, password: hashedPassword })
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)

    })
  })


  // Route POST to log in
router.post('/login', passport.authenticate("local", {
    successRedirect: '/auth/verify',
    failureRedirect: '/auth/errors',
    failureFlash: true,
    passReqToCallback: true
  }))

  // Route POST to log out
router.post('/logout', (req, res)=>{
    req.logout()
    res.redirect('/auth/verify')
  })


module.exports = router