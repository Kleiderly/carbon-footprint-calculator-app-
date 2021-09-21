const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fasteningSchema = new Schema({
    buttons: { type: Number },
    zipper: { type: Number }
});

const Fastening = mongoose.model('Fastening', fasteningSchema);

module.exports = Fastening;