const mongoose = require('mongoose');

const serviceItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'services'
    },
    section: {
      type: String,
      default: 'services_list'
    },
    title: {
      type: String,
      required: true,
      trim: true // e.g. "Payment Gateway Solutions"
    },
    subtitle: {
      type: String,
      default: '',
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'Core Service'
    },
    icon: {
      type: String,
      default: 'CreditCard'
    },
    status: {
      type: String,
      enum: ['active', 'draft', 'archived'],
      default: 'active'
    },
    order: {
      type: Number,
      default: 0
    },
    extraData: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    createdBy: {
      type: String,
      default: 'Admin'
    },
    updatedBy: {
      type: String,
      default: 'Admin'
    }
  },
  {
    timestamps: true,
    collection: 'service_items'
  }
);

module.exports = mongoose.model('ServiceItem', serviceItemSchema);
