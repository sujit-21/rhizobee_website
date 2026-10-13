const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

const JWT_SECRET = process.env.JWT_SECRET || 'rhizobee_stealth_secret_2026';

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role, name: user.name },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Admin Signup (Stealth mode)
exports.adminSignup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });
    }

    const existing = await AdminUser.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Admin with this email already exists.' });
    }

    const user = await AdminUser.create({
      name: name || 'Admin',
      email: email.toLowerCase(),
      password,
      role: role || 'admin'
    });

    const token = generateToken(user);

    res.status(201).json({
      success: true,
      message: 'Admin account created successfully.',
      token,
      admin: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('[Admin Signup Error]', err);
    res.status(500).json({ success: false, message: 'Server error during signup.', error: err.message });
  }
};

// Admin Signin / Login
exports.adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both email and password.' });
    }

    const user = await AdminUser.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid admin credentials.' });
    }

    const token = generateToken(user);

    res.json({
      success: true,
      message: 'Authentication successful. Access granted to Admin Portal.',
      token,
      admin: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('[Admin Signin Error]', err);
    res.status(500).json({ success: false, message: 'Server error during signin.', error: err.message });
  }
};

// Verify current session
exports.getMe = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Unauthorized. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await AdminUser.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ success: false, message: 'Admin not found.' });
    }

    res.json({
      success: true,
      admin: user
    });
  } catch (err) {
    res.status(401).json({ success: false, message: 'Token invalid or expired.' });
  }
};
