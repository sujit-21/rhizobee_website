const express = require('express');
const router = express.Router();
const {
  createInquiry,
  getInquiries,
  updateInquiryStatus,
  createJobApplication,
  getJobApplications,
  updateJobApplicationStatus,
  deleteJobApplication,
  createLead,
  getLeads,
  subscribeNewsletter,
  getPlatformStats
} = require('../controllers/inquiryController');

const {
  adminSignup,
  adminSignin,
  getMe
} = require('../controllers/authController');

const {
  getContent,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
  resetContentSeed,
  deleteInquiry,
  adminCreateInquiry
} = require('../controllers/contentController');

// Admin Auth (Stealth endpoints)
router.post('/admin/signup', adminSignup);
router.post('/admin/signin', adminSignin);
router.post('/admin/login', adminSignin);
router.get('/admin/me', getMe);

// --- CONTENT CRUD FOR ALL TABS (Home, About, Services, Solutions, Industries, Careers) ---
router.get('/content', getContent);
router.get('/content/:id', getContentById);
router.post('/content', createContent);
router.put('/content/:id', updateContent);
router.patch('/content/:id', updateContent);
router.delete('/content/:id', deleteContent);
router.post('/content/reset-seed', resetContentSeed);

// --- INQUIRIES & CONTACTS CRUD ---
router.post('/inquiries', createInquiry);
router.post('/inquiries/admin-create', adminCreateInquiry);
router.get('/inquiries', getInquiries);
router.patch('/inquiries/:id', updateInquiryStatus);
router.delete('/inquiries/:id', deleteInquiry);

// --- CAREERS APPLICATIONS ---
router.post('/careers/apply', createJobApplication);
router.get('/careers/applications', getJobApplications);
router.patch('/careers/applications/:id', updateJobApplicationStatus);
router.delete('/careers/applications/:id', deleteJobApplication);

// --- LEADS & NEWSLETTER ---
router.post('/leads', createLead);
router.get('/leads', getLeads);
router.post('/newsletter/subscribe', subscribeNewsletter);

// --- PLATFORM STATS ---
router.get('/stats', getPlatformStats);

module.exports = router;
