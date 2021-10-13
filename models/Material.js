const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    name: { type: String, required: true },
    co2e: { type: Number, required: true }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;
