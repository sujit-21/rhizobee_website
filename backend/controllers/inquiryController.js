const ContactInquiry = require('../models/ContactInquiry');
const JobApplication = require('../models/JobApplication');
const Lead = require('../models/Lead');
const Newsletter = require('../models/Newsletter');
const HomeItem = require('../models/HomeItem');
const TestimonialItem = require('../models/TestimonialItem');
const AboutItem = require('../models/AboutItem');
const ServiceItem = require('../models/ServiceItem');
const SolutionItem = require('../models/SolutionItem');
const IndustryItem = require('../models/IndustryItem');
const CareerOpening = require('../models/CareerOpening');

// --- CONTACT INQUIRIES ---
exports.createInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, company, businessType, serviceInterested, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide full name, email, and message.' });
    }

    const inquiry = await ContactInquiry.create({
      fullName,
      email,
      phone,
      company,
      businessType,
      serviceInterested,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! Our team will contact you within 1 business day.',
      data: inquiry
    });
  } catch (err) {
    console.error('Error creating inquiry:', err);
    res.status(500).json({ success: false, message: 'Server error while submitting inquiry.', error: err.message });
  }
};

exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await ContactInquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const inquiry = await ContactInquiry.findByIdAndUpdate(id, { status }, { new: true });
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    res.json({ success: true, data: inquiry });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// --- JOB APPLICATIONS ---
exports.createJobApplication = async (req, res) => {
  try {
    const { fullName, email, phone, position, preferredLocation, experienceYears, resumeLink, coverNote } = req.body;

    if (!fullName || !email || !phone || !position) {
      return res.status(400).json({ success: false, message: 'Please provide full name, email, phone, and position.' });
    }

    const application = await JobApplication.create({
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      position: String(position).trim(),
      preferredLocation: preferredLocation ? String(preferredLocation).trim() : 'Any',
      experienceYears: Number(experienceYears) || 0,
      resumeLink: resumeLink ? String(resumeLink).trim() : '',
      coverNote: coverNote ? String(coverNote).trim() : ''
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our recruitment team will review your profile.',
      data: application
    });
  } catch (err) {
    console.error('Error creating job application:', err);
    res.status(500).json({ success: false, message: err.message || 'Server error while submitting application.', error: err.message });
  }
};

exports.getJobApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.json({ success: true, count: applications.length, data: applications });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateJobApplicationStatus = async (req, res) => {
  try {
    const { status, coverNote, notes } = req.body;
    const update = {};
    if (status) update.status = status;
    if (coverNote || notes) update.coverNote = coverNote || notes;

    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );
    if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
    res.json({ success: true, message: 'Application updated successfully', data: application });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteJobApplication = async (req, res) => {
  try {
    const application = await JobApplication.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
    res.json({ success: true, message: 'Application deleted successfully', data: application });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// --- LEADS & CALLBACKS ---
exports.createLead = async (req, res) => {
  try {
    const { name, phone, email, leadType, notes } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, message: 'Name and phone are required.' });
    }
    const lead = await Lead.create({ name, phone, email, leadType, notes });
    res.status(201).json({ success: true, message: 'Callback request registered!', data: lead });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, count: leads.length, data: leads });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// --- NEWSLETTER ---
exports.subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email is required' });
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.json({ success: true, message: 'You are already subscribed to Rhizobee updates!' });
    }
    await Newsletter.create({ email });
    res.status(201).json({ success: true, message: 'Thank you for subscribing to Rhizobee updates!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// --- PLATFORM STATS / METRICS ---
exports.getPlatformStats = async (req, res) => {
  try {
    const [
      inquiriesCount,
      applicationsCount,
      leadsCount,
      homeCount,
      testimonialsCount,
      aboutCount,
      servicesCount,
      solutionsCount,
      industriesCount,
      careersCount
    ] = await Promise.all([
      ContactInquiry.countDocuments(),
      JobApplication.countDocuments(),
      Lead.countDocuments(),
      HomeItem.countDocuments(),
      TestimonialItem.countDocuments(),
      AboutItem.countDocuments(),
      ServiceItem.countDocuments(),
      SolutionItem.countDocuments(),
      IndustryItem.countDocuments(),
      CareerOpening.countDocuments()
    ]);

    res.json({
      success: true,
      data: {
        stats: {
          uptime: '99.98%',
          merchantsOnboarded: '10,000+',
          dailyTransactions: '500,000+',
          bankingPartners: '12+',
          pinCodesCovered: '19,000+'
        },
        databaseCounts: {
          inquiries: inquiriesCount,
          applications: applicationsCount,
          leads: leadsCount,
          homeItems: homeCount,
          testimonials: testimonialsCount,
          aboutItems: aboutCount,
          services: servicesCount,
          solutions: solutionsCount,
          industries: industriesCount,
          careers: careersCount,
          totalContentRecords: homeCount + testimonialsCount + aboutCount + servicesCount + solutionsCount + industriesCount + careersCount
        }
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
