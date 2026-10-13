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
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['X-Response-Time']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// High-Resolution API Response-Time Tracker & Console Logger
app.use((req, res, next) => {
  const startHrTime = process.hrtime();

  // Attach X-Response-Time header before sending response headers
  const originalEnd = res.end;
  res.end = function (...args) {
    const elapsed = process.hrtime(startHrTime);
    const ms = (elapsed[0] * 1000 + elapsed[1] / 1e6).toFixed(2);
    if (!res.headersSent) {
      res.setHeader('X-Response-Time', `${ms}ms`);
    }
    return originalEnd.apply(this, args);
  };

  // Log on response completion
  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = (elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6).toFixed(2);

    // Color indicator based on HTTP status code
    let statusLabel = `${res.statusCode}`;
    if (res.statusCode >= 500) {
      statusLabel = `\x1b[31m${res.statusCode} ERROR\x1b[0m`;
    } else if (res.statusCode >= 400) {
      statusLabel = `\x1b[33m${res.statusCode} WARN\x1b[0m`;
    } else if (res.statusCode >= 300) {
      statusLabel = `\x1b[36m${res.statusCode}\x1b[0m`;
    } else {
      statusLabel = `\x1b[32m${res.statusCode} OK\x1b[0m`;
    }

    // Color indicator based on response duration: <100ms (fast/green), 100-400ms (normal/yellow), >400ms (slow/red)
    let timeFormatted = `${elapsedTimeInMs} ms`;
    if (elapsedTimeInMs > 400) {
      timeFormatted = `\x1b[31m${elapsedTimeInMs} ms (SLOW)\x1b[0m`;
    } else if (elapsedTimeInMs > 100) {
      timeFormatted = `\x1b[33m${elapsedTimeInMs} ms\x1b[0m`;
    } else {
      timeFormatted = `\x1b[32m${elapsedTimeInMs} ms\x1b[0m`;
    }

    const method = req.method.padEnd(6);
    const url = req.originalUrl || req.url;
    console.log(`[API TIMER] ${method} ${url} ➔ ${statusLabel} in ${timeFormatted}`);
  });

  next();
});

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
