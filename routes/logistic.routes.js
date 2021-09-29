const express = require('express');
const logisticRouter = express.Router();
const Logistic = require('../models/Logistic');


//GET Routes
logisticRouter.get('/', (req,res)=> {
    const { productionLocation, consumerLocation, co2e } = req.body;

    Logistic.find({})
    .then((result) => res.status(200).send(result))
    .catch((err)=> res.status(500).send("Something went wrong"))
});


//POST Routes
logisticRouter.post('/:productionLocation/:consumerLocation/:co2e', (req, res) => {
    const { productionLocation, consumerLocation, co2e } = req.params

    Logistic.create({ productionLocation, consumerLocation, co2e })
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

//UPDATE Routes
logisticRouter.put('/:id/:productionLocation/:consumerLocation/:co2e', (req, res) => {

    Logistic.findByIdAndUpdate({_id: req.params.id}, req.params)
    .then(()=>{
        Logistic.findOne({_id: req.params.id})
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).send('Something went wrong')
        })
    })
})


//REMOVE ROUTES
logisticRouter.delete('/:id', (req, res)=>{
    Logistic.findByIdAndRemove({_id: req.params.id})
    .then((result)=>{
        console.log(result)
        res.status(200).send("Item successfully deleted ")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Something went wrong")
    })
})

module.exports = logisticRouter;