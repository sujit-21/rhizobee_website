const mongoose = require('mongoose');

const careerOpeningSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'careers'
    },
    section: {
      type: String,
      default: 'openings'
    },
    title: {
      type: String,
      required: true,
      trim: true // Job Title, e.g. "Senior Fintech Backend Engineer"
    },
    subtitle: {
      type: String,
      default: '',
      trim: true // e.g. "Engineering Team"
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      default: 'Engineering'
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
      salary: { type: String, default: '' },
      location: { type: String, default: 'Mumbai / Hybrid' },
      type: { type: String, default: 'Full-time' },
      experience: { type: String, default: '3-5 years' }
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
    collection: 'career_openings'
  }
);

module.exports = mongoose.model('CareerOpening', careerOpeningSchema);
