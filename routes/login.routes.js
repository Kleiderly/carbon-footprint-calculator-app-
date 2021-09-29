const express = require('express');
const loginRouter = express.Router();
const User = require('../models/User');




loginRouter.get('/',(req, res)=>{
    const result = User.fin().exec{}
    .then((result)=>{
        

    })
})


loginRouter.post('/', (req, res)=>{

})


