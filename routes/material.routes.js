const materialRouter = require('express').Router();
const Material = require('../models/Material');


//GET Routes
materialRouter.get('/', (req,res)=>{
    const { name, co2e } = req.body;
    Material.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});


//POST Routes
materialRouter.post('/', (req, res) => {
    const { name, co2e } = req.params

    console.log(name, co2e)

    Material.create({ name, co2e })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});


//UPDATE Routes
materialRouter.put('/:id/:name/:co2e', (req, res) => {

    Material.findByIdAndUpdate({_id: req.params.id}, req.params)
    .then(()=>{
        Material.findOne({_id: req.params.id})
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
materialRouter.delete('/:id', (req, res)=>{
    Material.findByIdAndRemove({_id: req.params.id})
    .then((result)=>{
        console.log(result)
        res.status(200).send("Item successfully deleted ")
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send("Something went wrong")
    })
})


module.exports = materialRouter;