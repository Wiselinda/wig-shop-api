const mongoose = require('mongoose');

const wigSchema = new mongoose.Schema({
  name: { type: String, required: true },
  length: { type: String, required: true },
  color: { type: String, required: true },
  style: { type: String, required: true },
  price: { type: Number, required: true },
  material: { type: String, required: true }, 
  inStock: { type: Boolean, default: true },
  description: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Wig', wigSchema);


