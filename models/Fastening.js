const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fasteningSchema = new Schema({
   name: { type: String, required: true },
   co2e: { type: Number, required: true },
});

const Fastening = mongoose.model('Fastening', fasteningSchema);

module.exports = Fastening;
