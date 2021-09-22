const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fasteningSchema = new Schema({
    kindOfExtra: { type: String },
    fasteningCO2: { type: Number }
});

const Fastening = mongoose.model('Fastening', fasteningSchema);

module.exports = Fastening;