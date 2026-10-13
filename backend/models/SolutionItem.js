const mongoose = require('mongoose');

const solutionItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'solutions'
    },
    section: {
      type: String,
      default: 'solutions_list'
    },
    title: {
      type: String,
      required: true,
      trim: true // e.g. "High Conversion Online Checkout"
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
      default: 'Payment Framework'
    },
    icon: {
      type: String,
      default: 'Layers'
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
    collection: 'solution_items'
  }
);

module.exports = mongoose.model('SolutionItem', solutionItemSchema);
