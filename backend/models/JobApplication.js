const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  position: {
    type: String,
    required: [true, 'Position applied for is required'],
    trim: true
  },
  preferredLocation: {
    type: String,
    trim: true,
    default: 'Any'
  },
  experienceYears: {
    type: Number,
    default: 0
  },
  resumeLink: {
    type: String,
    trim: true
  },
  coverNote: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Submitted', 'Under Review', 'Interview Scheduled', 'Rejected', 'Selected'],
    default: 'Submitted'
  },
  applicationId: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});

jobApplicationSchema.pre('save', function (next) {
  if (!this.applicationId) {
    this.applicationId = 'APP-' + Math.floor(100000 + Math.random() * 900000);
  }
  next();
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
