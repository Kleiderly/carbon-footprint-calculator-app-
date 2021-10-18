const express = require('express');
const fasteningRouter = express.Router();
const Fastening = require('../models/Fastening');

//GET Routes
fasteningRouter.get('/', (req, res) => {
   Fastening.find({})
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send('Something went wrong'));
});

//POST Routes
fasteningRouter.post('/', (req, res) => {
   const { name, co2e } = req.body;

   Fastening.create({ name, co2e })
      .then((result) => {
         res.status(200).send(result);
      })
      .catch((err) => {
         console.err(err);
         res.status(500).send('Something went wrong');
      });
});

//UPDATE Routes
fasteningRouter.put('/:id', (req, res) => {
   Fastening.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
      Fastening.findOne({ _id: req.params.id })
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
fasteningRouter.delete('/:id', (req, res) => {
   Fastening.findByIdAndRemove({ _id: req.params.id })
      .then((result) => {
         console.log(result);
         res.status(200).send('Item successfully deleted ');
      })
      .catch((err) => {
         console.log(err);
         res.status(500).send('Something went wrong');
      });
});

module.exports = fasteningRouter;
