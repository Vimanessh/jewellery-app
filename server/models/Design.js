const mongoose = require('mongoose');

const DesignSchema = new mongoose.Schema({
  jewelleryType: { type: String, enum: ['ring','necklace','bracelet','earrings'], required: true },
  material: { type: String, enum: ['gold','silver','platinum','rose-gold'], required: true },
  stone: { type: String, default: 'none' },
  stoneSize: { type: String, enum: ['small','medium','large'], default: 'medium' },
  engraving: { type: String, maxlength: 20 },
  engravingFont: { type: String, default: 'Classic' },
  ringSize: { type: Number },
  quantity: { type: Number, default: 1 },
  estimatedPrice: { type: Number },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String },
  specialInstructions: { type: String },
  status: { type: String, enum: ['pending','in-progress','completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Design', DesignSchema);
