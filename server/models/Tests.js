const mongoose = require('mongoose');

const { Schema } = mongoose;

const testSchema = new Schema({
  name: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('tests', testSchema, 'tests');
