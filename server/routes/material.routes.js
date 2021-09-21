const express = require('express');
const materialRouter = express.Router();
const Material = require('../models/Material');


//GET Routes
materialRouter.get('/', (req,res)=>{
    const {name,materialCO2E } = req.body

    Material.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});


//POST Routes
materialRouter.post('/', (req, res) => {
    const { name, materialCO2E } = req.body

    Material.create({ name, materialCO2E })
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

module.exports = materialRouter;