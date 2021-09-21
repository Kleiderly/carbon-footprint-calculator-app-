const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    name: { type: String, required: true },
    materialCO2E: { type: Number, required: true }
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;