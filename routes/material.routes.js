const express = require('express');
const materialRouter = express.Router();
const Material = require('../models/Material');

//GET Routes
<<<<<<< HEAD
materialRouter.get('/', (req, res) => {
   const { name, materialCO2E } = req.body;
=======
materialRouter.get('/', (req,res)=>{

    const { name, co2e } = req.body

>>>>>>> 5204ff238e1cdefd35c3e13523fbbbf3cb24c86b

   Material.find({})
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status.apply(500).send('Something wrong'));
});

//POST Routes

materialRouter.post('/', (req, res) => {
<<<<<<< HEAD
   const { name, co2e } = req.body;

   Material.create({ name, co2e })
      .then((data) => {
         res.status(200).send(data);
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
=======
    const { name, co2e } = req.body


    Material.create({ name, co2e })
    .then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
>>>>>>> 5204ff238e1cdefd35c3e13523fbbbf3cb24c86b
});

//UPDATE Routes
<<<<<<< HEAD
materialRouter.put('/:id', (req, res) => {
   Material.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Material.findOne({ _id: req.params.id })
         .then((result) => {
            res.status(200).send(result);
         })
         .catch((err) => {
            console.log(err);
            res.status(500).send('Something went wrong');
         });
   });
});

//REMOVE ROUTES
materialRouter.delete('/:id', (req, res) => {
   Material.findByIdAndRemove({ _id: req.params.id })
      .then((result) => {
         console.log(result);
         res.status(200).send('Item successfully deleted ');
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
});

module.exports = materialRouter;
=======
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
>>>>>>> 5204ff238e1cdefd35c3e13523fbbbf3cb24c86b
