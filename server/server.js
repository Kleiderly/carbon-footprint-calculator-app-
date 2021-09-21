require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xge0g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then((result)=>console.log('Connected to MONGO ATLAS'))
.catch((err)=>console.log(err));

//Middleware needed to receive the req.body
app.use(express.json());


//Models
const Logistic = require('./models/Logistic');
const Material = require('./models/Material');
const Product = require('./models/Product');


//Routes
app.use('/api/logistic', require('./routes/logistic.routes'));
app.use('/api/fastening', require('./routes/fastening.routes'));
app.use('/api/material', require('./routes/material.routes'));


//App listener
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
