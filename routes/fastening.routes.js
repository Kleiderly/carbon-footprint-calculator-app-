const express = require('express');
const fasteningRouter = express.Router();
const Fastening = require('../models/Fastening');


//GET Routes
fasteningRouter.get('/', (req,res) => {
    Fastening.find({})
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send("Something went wrong"))
});


//POST Routes
fasteningRouter.post('/', (req, res) => {
    const { kindOfExtra, fasteningCO2 } = req.body

    Fastening.create({ kindOfExtra, fasteningCO2 })
    .then((result) =>{
        res.status(200).send(result)
    })
    .catch((err) => {
        console.err(err)
        res.status(500).send('Something went wrong')
    })
});


  module.exports = fasteningRouter;