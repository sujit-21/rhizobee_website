const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    default: 'Master Admin'
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  role: {
    type: String,
    enum: ['superadmin', 'admin', 'manager'],
    default: 'superadmin'
  }
}, {
  timestamps: true
});

// Pre-save password hashing
adminUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare password method
adminUserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Fixed 4 Admins List
const FIXED_ADMINS = [
  {
    name: 'Super Admin',
    email: 'rhizobeeadmin@gmail.com',
    password: 'rhizobeeadmin@2026',
    role: 'superadmin'
  },
  {
    name: 'Shamayel',
    email: 'shamayel@gmail.com',
    password: 'shamayel@2026',
    role: 'admin'
  },
  {
    name: 'Amir Khan',
    email: 'amirkhan@gmail.com',
    password: 'amirkhan@2026',
    role: 'admin'
  },
  {
    name: 'Sujit Kumar Gupta',
    email: 'sujitkumargupta@gmail.com',
    password: 'sujtgupta.tech@2026',
    role: 'admin'
  }
];

// Seed and synchronize exactly the 4 fixed admins
adminUserSchema.statics.seedDefaultAdmin = async function () {
  try {
    const fixedEmails = FIXED_ADMINS.map(a => a.email.toLowerCase());

    // Remove any legacy or other accounts so only these 4 exist
    await this.deleteMany({ email: { $nin: fixedEmails } });

    // Upsert each of the 4 admins with properly hashed passwords
    for (const adminData of FIXED_ADMINS) {
      let existing = await this.findOne({ email: adminData.email.toLowerCase() });
      if (!existing) {
        await this.create(adminData);
        console.log(`[Admin Auth] Created fixed admin: ${adminData.email} (${adminData.role})`);
      } else {
        // Ensure password matches in case it was modified
        const isMatch = await existing.comparePassword(adminData.password);
        if (!isMatch) {
          existing.password = adminData.password;
          existing.name = adminData.name;
          existing.role = adminData.role;
          await existing.save();
          console.log(`[Admin Auth] Updated password for fixed admin: ${adminData.email}`);
        }
      }
    }

    console.log('[Admin Auth] Verified all 4 fixed admin accounts in MongoDB.');
  } catch (err) {
    console.error('[Admin Auth] Seed error:', err.message);
  }
};

module.exports = mongoose.model('AdminUser', adminUserSchema);
