const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  leadType: {
    type: String,
    enum: ['Merchant Onboarding', 'Retailer Portal (Zoompe)', 'Distribution Partner', 'Enterprise Demo', 'Callback'],
    default: 'Merchant Onboarding'
  },
  notes: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Converted', 'Closed'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);
