const mongoose = require('mongoose');

const homeItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'home'
    },
    section: {
      type: String,
      default: 'features',
      enum: ['features', 'hero', 'general']
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
      default: 'Feature Highlight'
    },
    icon: {
      type: String,
      default: 'Zap'
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
    collection: 'home_items'
  }
);

module.exports = mongoose.model('HomeItem', homeItemSchema);
