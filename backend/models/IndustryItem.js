const mongoose = require('mongoose');

const industryItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'industries'
    },
    section: {
      type: String,
      default: 'industries_list'
    },
    title: {
      type: String,
      required: true,
      trim: true // e.g. "Retail & Supermarkets"
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
      default: 'Industry Segment'
    },
    icon: {
      type: String,
      default: 'ShoppingBag'
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
    collection: 'industry_items'
  }
);

module.exports = mongoose.model('IndustryItem', industryItemSchema);
