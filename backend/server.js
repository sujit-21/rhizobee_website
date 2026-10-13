require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

const AdminUser = require('./models/AdminUser');
const { seedIfEmpty } = require('./controllers/contentController');

// Connect to MongoDB
connectDB().then(() => {
  AdminUser.seedDefaultAdmin();
  seedIfEmpty();
});

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Rhizobee Innovations API',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Mount API routes
app.use('/api', apiRoutes);

// Root greeting
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Rhizobee Innovations API Backend',
    docs: '/api/health',
    endpoints: [
      'POST /api/inquiries',
      'GET /api/inquiries',
      'POST /api/careers/apply',
      'GET /api/careers/applications',
      'POST /api/leads',
      'GET /api/stats'
    ]
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Backend Error]', err);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// Start listening with error handling
const server = app.listen(PORT, () => {
  console.log(`[Rhizobee Server] Running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[Server Error] Port ${PORT} is already in use by another process.`);
    console.error(`To fix this:\n 1. Close the running process or kill it (e.g. npx kill-port ${PORT})\n 2. Or set a different port in .env (PORT=5001)\n`);
    process.exit(1);
  } else {
    console.error('[Server Error]', err);
  }
});
