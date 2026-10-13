const mongoose = require('mongoose');

const contactInquirySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  businessType: {
    type: String,
    enum: ['Small Business Owner', 'SME', 'MSME', 'Enterprise', 'Corporate', 'Other'],
    default: 'SME'
  },
  serviceInterested: {
    type: String,
    enum: [
      'Payment Gateway Solutions',
      'QR Code Payments',
      'Soundbox Solutions',
      'POS Devices',
      'PPI Wallet Solutions',
      'Brand Gift Vouchers & Gift Cards',
      'Switch',
      'Zoompe Retailer Portal',
      'General Inquiry'
    ],
    default: 'Payment Gateway Solutions'
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Contacted', 'Resolved'],
    default: 'New'
  },
  inquiryId: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});

contactInquirySchema.pre('save', function (next) {
  if (!this.inquiryId) {
    this.inquiryId = 'RHZ-' + Math.floor(100000 + Math.random() * 900000);
  }
  next();
});

module.exports = mongoose.model('ContactInquiry', contactInquirySchema);
