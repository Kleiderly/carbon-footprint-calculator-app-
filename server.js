require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Routes = require('./routes/routes');
const errorHandler = require('./Middleware/error');

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/private', require('./routes/private.routes'));
Routes(app);

app.use(express.static(path.join(__dirname, 'build')));

// //Middleware needed to receive the req.body

app.use(express.urlencoded({ extended: false }));

mongoose
   .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xge0g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
   )
   .then((result) => console.log('Connected to MONGO ATLAS'))
   .catch((err) => console.log(err));

// To solve issue with dual servers
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
});

// Read Frontend from Backend
app.use((req, res) =>
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
);

// Error Handler
app.use(errorHandler);

const port = process.env.PORT || 5000;

//App listener
app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
});
