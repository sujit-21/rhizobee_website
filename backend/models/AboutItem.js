const mongoose = require('mongoose');

const aboutItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'about'
    },
    section: {
      type: String,
      required: true,
      enum: ['stats', 'values', 'general']
    },
    title: {
      type: String,
      required: true,
      trim: true // e.g. 99.9% or "Integrity First"
    },
    subtitle: {
      type: String,
      default: '',
      trim: true // e.g. "Transaction platform uptime"
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    category: {
      type: String,
      default: 'Key Metric'
    },
    icon: {
      type: String,
      default: 'Activity'
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
    collection: 'about_items'
  }
);

module.exports = mongoose.model('AboutItem', aboutItemSchema);
