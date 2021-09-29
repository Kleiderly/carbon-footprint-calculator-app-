const express = require('express');
const adminRouter = express.Router();
const Admin = require('../models/Admin');


adminRouter.get('/', (req, res)=>{
    Admin.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send("Something went wrong"))
})




module.exports = adminRouter;