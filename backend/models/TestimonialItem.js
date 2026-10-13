const mongoose = require('mongoose');

const testimonialItemSchema = new mongoose.Schema(
  {
    tab: {
      type: String,
      default: 'home'
    },
    title: {
      type: String,
      required: true,
      trim: true // Author / Client Name
    },
    subtitle: {
      type: String,
      default: '',
      trim: true // Role / Company / Location
    },
    description: {
      type: String,
      required: true,
      trim: true // Testimonial Quote
    },
    category: {
      type: String,
      default: 'Merchant Trust'
    },
    section: {
      type: String,
      default: 'testimonials'
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5
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
    collection: 'testimonial_items'
  }
);

module.exports = mongoose.model('TestimonialItem', testimonialItemSchema);
