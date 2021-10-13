const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logisticSchema = new Schema({
    productionLocation: { type: String, required: true },
    consumerLocation: { type: String, required: true },
    co2e: { type: Number, required: true },
    
});

const Logistic = mongoose.model('Logistic', logisticSchema);

module.exports = Logistic;