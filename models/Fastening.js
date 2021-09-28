const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fasteningSchema = new Schema({
    name: { type: String },
    co2e: { type: Number }
});

const Fastening = mongoose.model('Fastening', fasteningSchema);

module.exports = Fastening;