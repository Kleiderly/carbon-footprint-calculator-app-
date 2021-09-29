require('dotenv').config();

const port = process.env.PORT || 5000;

const bcrypt = require('bcrypt')
const flash = require('connect-flash') 
const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const path = require('path')



//Models
const Logistic = require('./models/Logistic');
const Material = require('./models/Material');
const Fastening = require('./models/Fastening');
const Admin = require('./models/Admin');


const app = express()



app.use(express.static(path.join(__dirname, "build")));

//Middleware needed to receive the req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}))


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xge0g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then((result)=>console.log('Connected to MONGO ATLAS'))
.catch((err)=>console.log(err));


// The middleware for the session
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true
    })
  )

  // The serialization of the user
passport.serializeUser((user, callback)=>{
    callback(null, user._id)
  })


  // The deserialization of the user
passport.deserializeUser((id, callback)=>{
    Admin.findById(id)
      .then((result)=>{
        callback(null, result)
      })
      .catch((err)=>{
        callback(err)
      })
  })


  // The middleware for flash
app.use(flash())



// The middleware for the Strategy
passport.use(
    new LocalStrategy({
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    }, (req, username, password, next)=>{
      Admin.findOne({username})
      .then((user)=>{
        if(!user){
          return next(null, false, {message: 'Incorrect username'})
        }
  
        if(!bcrypt.compareSync(password, user.password)){
          return next(null, false, {message: 'Incorrect password'})
        }
  
        return next(null, user)
  
      })
      .catch((err)=>{
        next(err)
      })
    })
  )


  // Passport middleware
app.use(passport.initialize())
app.use(passport.session())


//Routes
app.use('/api/logistic', require('./routes/logistic.routes'));
app.use('/api/fastening', require('./routes/fastening.routes'));
app.use('/api/material', require('./routes/material.routes'));
app.use('/api/admin', require('./routes/admin.routes'));
app.use("/auth", require('./routes/auth.routes'));


// To solve issue with dual servers
app.use((req, res, next)=> { res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); res.setHeader("Access-Control-Allow-Credentials", true); next(); });



// Read Frontend from Backend
app.use((req, res) => res.sendFile(path.join(__dirname, "build", "index.html")));

//App listener
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
