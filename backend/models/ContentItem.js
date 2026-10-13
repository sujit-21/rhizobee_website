const mongoose = require('mongoose');

const contentItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      required: true,
      enum: ['home', 'about', 'services', 'solutions', 'industries', 'careers', 'contacts'],
      index: true
    },
    section: {
      type: String,
      default: 'general'
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    subtitle: {
      type: String,
      default: '',
      trim: true
    },
    description: {
      type: String,
      default: '',
      trim: true
    },
    category: {
      type: String,
      default: 'General'
    },
    icon: {
      type: String,
      default: ''
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
    // Flexible fields for tab-specific custom data (e.g. salary in ₹, features list, metrics)
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
    timestamps: true
  }
);

module.exports = mongoose.model('ContentItem', contentItemSchema);
