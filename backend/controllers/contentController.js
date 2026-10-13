const ContentItem = require('../models/ContentItem');
const ContactInquiry = require('../models/ContactInquiry');
const HomeItem = require('../models/HomeItem');
const TestimonialItem = require('../models/TestimonialItem');
const AboutItem = require('../models/AboutItem');
const ServiceItem = require('../models/ServiceItem');
const SolutionItem = require('../models/SolutionItem');
const IndustryItem = require('../models/IndustryItem');
const CareerOpening = require('../models/CareerOpening');

// Initial default seed items for all 6 content tabs
const initialSeedItems = [
  // --- HOME TAB (FEATURES) ---
  {
    tab: 'home',
    section: 'features',
    title: 'Instant Merchant Onboarding',
    subtitle: 'Zero Paperwork',
    description: 'Get verified and start accepting digital payments across UPI, cards, and wallets within hours.',
    category: 'Onboarding',
    icon: 'Zap',
    status: 'active',
    order: 1,
    extraData: { highlight: '99.9% Approval Speed' }
  },
  {
    tab: 'home',
    section: 'features',
    title: 'Multi-Rail Payment Routing',
    subtitle: 'High Success Rate',
    description: 'Dynamic transaction switching across major Indian banks guaranteeing over 99.95% transaction uptime.',
    category: 'Reliability',
    icon: 'ShieldCheck',
    status: 'active',
    order: 2,
    extraData: { highlight: '₹0 Setup Fee' }
  },
  {
    tab: 'home',
    section: 'features',
    title: 'Instant T+0 Settlements',
    subtitle: 'Liquidity Optimized',
    description: 'Direct settlement to current accounts ensuring steady daily cash flow for growing retailers and enterprises.',
    category: 'Settlements',
    icon: 'IndianRupee',
    status: 'active',
    order: 3,
    extraData: { highlight: 'Same Day Credit' }
  },

  // --- HOME TAB (FEEDBACK / TESTIMONIALS) ---
  {
    tab: 'home',
    section: 'testimonials',
    title: 'Ramesh Kulkarni',
    subtitle: 'Director of Retail Operations, Maharashtra',
    description: 'Deploying Rhizobee’s soundbox and POS terminals across our 45 retail outlets cut counter disputes to practically zero. Audio confirmations are instant and loud.',
    category: 'Retail Operations',
    icon: 'MessageSquare',
    status: 'active',
    order: 1,
    extraData: { rating: 5, location: 'Maharashtra' }
  },
  {
    tab: 'home',
    section: 'testimonials',
    title: 'Pooja Agarwal',
    subtitle: 'Founder, D2C Lifestyle Brand, Delhi NCR',
    description: 'Their payment gateway integrated seamlessly with our custom shopping cart. Checkout conversion jumped by 14% thanks to smart UPI fallback routing.',
    category: 'D2C Brand',
    icon: 'MessageSquare',
    status: 'active',
    order: 2,
    extraData: { rating: 5, location: 'Delhi NCR' }
  },
  {
    tab: 'home',
    section: 'testimonials',
    title: 'Anand Verma',
    subtitle: 'Fintech Distributor, Madhya Pradesh',
    description: 'Zoompe has transformed our regional agent network. Being able to offer banking cash-out, BBPS, and ticketing all on one portal brought real income growth to our CSPs.',
    category: 'Fintech Distribution',
    icon: 'MessageSquare',
    status: 'active',
    order: 3,
    extraData: { rating: 5, location: 'Madhya Pradesh' }
  },

  // --- ABOUT US TAB (STATS / METRICS) ---
  {
    tab: 'about',
    section: 'stats',
    title: '7',
    subtitle: 'Core payment solutions on one platform',
    description: 'Comprehensive suite encompassing Gateway, Soundbox, QR, POS, PPI Wallets, and Corporate Vouchers.',
    category: 'Key Metric',
    icon: 'Layers',
    status: 'active',
    order: 1,
    extraData: { statValue: '7', statLabel: 'Core payment solutions on one platform' }
  },
  {
    tab: 'about',
    section: 'stats',
    title: '99.9%',
    subtitle: 'Transaction platform uptime',
    description: 'Multi-rail redundancy with instant failover routing across major Tier-1 partner banks.',
    category: 'Key Metric',
    icon: 'Activity',
    status: 'active',
    order: 2,
    extraData: { statValue: '99.9%', statLabel: 'Transaction platform uptime' }
  },
  {
    tab: 'about',
    section: 'stats',
    title: '24/7',
    subtitle: 'Merchant support availability',
    description: 'Round-the-clock merchant helpdesk, technical onboarding, and hardware maintenance.',
    category: 'Key Metric',
    icon: 'Clock',
    status: 'active',
    order: 3,
    extraData: { statValue: '24/7', statLabel: 'Merchant support availability' }
  },
  {
    tab: 'about',
    section: 'stats',
    title: '100%',
    subtitle: 'Compliant merchant onboarding',
    description: 'Strict adherence to RBI guidelines, PCI-DSS compliance, and automated KYC verification.',
    category: 'Key Metric',
    icon: 'ShieldCheck',
    status: 'active',
    order: 4,
    extraData: { statValue: '100%', statLabel: 'Compliant merchant onboarding' }
  },

  // --- ABOUT US TAB (VALUES) ---
  {
    tab: 'about',
    section: 'values',
    title: 'Integrity First',
    subtitle: 'Core Foundation',
    description: 'We adhere to the highest compliance and RBI guidelines to ensure full fiduciary transparency for every merchant.',
    category: 'Values',
    icon: 'Shield',
    status: 'active',
    order: 1,
    extraData: { badge: 'Compliance' }
  },
  {
    tab: 'about',
    section: 'values',
    title: 'Relentless Innovation',
    subtitle: 'Fintech Leadership',
    description: 'Pioneering smart soundbox audio technology, cloud POS terminals, and omnichannel PPI digital wallets.',
    category: 'Innovation',
    icon: 'Cpu',
    status: 'active',
    order: 2,
    extraData: { badge: 'R&D' }
  },
  {
    tab: 'about',
    section: 'values',
    title: 'Customer Centricity',
    subtitle: '24/7 Dedicated Support',
    description: 'Personalized account managers and round-the-clock technical merchant support across all Indian states.',
    category: 'Support',
    icon: 'Headphones',
    status: 'active',
    order: 3,
    extraData: { badge: '24/7 SLA' }
  },

  // --- SERVICES TAB ---
  {
    tab: 'services',
    section: 'services_list',
    title: 'Payment Gateway',
    subtitle: 'Online Checkout Suite',
    description: 'Accept credit/debit cards, 60+ NetBanking banks, UPI, and EMI with effortless single-code API integration.',
    category: 'Online',
    icon: 'Globe',
    status: 'active',
    order: 1,
    extraData: { features: ['UPI Intent & QR', 'Card Tokenization', 'Recurring Mandates'] }
  },
  {
    tab: 'services',
    section: 'services_list',
    title: 'QR Code Payments',
    subtitle: 'Interoperable BharatQR / UPI',
    description: 'Standee and dynamic digital QR codes for physical counters with zero merchant transaction friction.',
    category: 'In-Store',
    icon: 'QrCode',
    status: 'active',
    order: 2,
    extraData: { features: ['Zero MDR on UPI', 'Instant Sound confirmation', 'Daily summary SMS'] }
  },
  {
    tab: 'services',
    section: 'services_list',
    title: 'Soundbox & POS Machines',
    subtitle: 'Voice Alerts & Card Swipes',
    description: 'Loud regional audio announcement devices combined with 4G wireless Android billing POS terminals.',
    category: 'Hardware',
    icon: 'Volume2',
    status: 'active',
    order: 3,
    extraData: { features: ['10+ Regional Languages', 'Dual SIM connectivity', 'Long battery life'] }
  },
  {
    tab: 'services',
    section: 'services_list',
    title: 'PPI Wallets & Co-Branded Cards',
    subtitle: 'Prepaid Instruments',
    description: 'Full-stack PPI prepaid wallet infrastructure for corporate employee allowances, vendor payouts, and gifts.',
    category: 'Fintech Infrastructure',
    icon: 'CreditCard',
    status: 'active',
    order: 4,
    extraData: { features: ['RuPay & Visa co-brand', 'KYC Verification API', 'Real-time spend limits'] }
  },

  // --- SOLUTIONS TAB ---
  {
    tab: 'solutions',
    section: 'solutions_list',
    title: 'Small Businesses & Retail Stores',
    subtitle: 'Quick Setup for Kiranas & Boutiques',
    description: 'All-in-one payment acceptance package with soundbox, dynamic UPI QR standee, and instant WhatsApp receipts.',
    category: 'Retail',
    icon: 'Store',
    status: 'active',
    order: 1,
    extraData: { pricing: 'Starting from ₹0/month', target: 'Single Store & Kirana' }
  },
  {
    tab: 'solutions',
    section: 'solutions_list',
    title: 'SMEs & Growing Brands',
    subtitle: 'Omnichannel Growth Suite',
    description: 'Unified payment dashboard managing multiple physical branches, web store checkouts, and automated ledger sync.',
    category: 'Growth',
    icon: 'TrendingUp',
    status: 'active',
    order: 2,
    extraData: { pricing: 'Custom pricing in ₹', target: 'Multi-outlet SMEs' }
  },
  {
    tab: 'solutions',
    section: 'solutions_list',
    title: 'Enterprises & Corporates',
    subtitle: 'High Volume Scalability',
    description: 'Dedicated cloud infrastructure capable of 10,000+ TPS with custom ERP/SAP integration and treasury tools.',
    category: 'Enterprise',
    icon: 'Building2',
    status: 'active',
    order: 3,
    extraData: { pricing: 'Enterprise SLA in ₹', target: 'Corporates & Institutions' }
  },

  // --- INDUSTRIES TAB ---
  {
    tab: 'industries',
    section: 'industries_list',
    title: 'Retail & Supermarkets',
    subtitle: 'High Velocity Checkout',
    description: 'Accelerate billing counters with split-second UPI QR and contactless chip-and-pin card processing.',
    category: 'Retail',
    icon: 'ShoppingBag',
    status: 'active',
    order: 1,
    extraData: { keyMetric: '3x Faster Billing' }
  },
  {
    tab: 'industries',
    section: 'industries_list',
    title: 'E-Commerce & Digital Marketplaces',
    subtitle: 'High Conversion Checkouts',
    description: 'Boost cart conversions with auto-filling UPI apps, saved card tokenization, and pre-authorized payments.',
    category: 'E-Commerce',
    icon: 'Laptop',
    status: 'active',
    order: 2,
    extraData: { keyMetric: '99.4% Payment Success' }
  },
  {
    tab: 'industries',
    section: 'industries_list',
    title: 'Healthcare, Clinics & Hospitals',
    subtitle: 'Secure & Compliant Billing',
    description: 'Seamless patient OPD payments, insurance claim copays, and touch-free digital hospital invoices.',
    category: 'Healthcare',
    icon: 'HeartPulse',
    status: 'active',
    order: 3,
    extraData: { keyMetric: '100% Audit Ready' }
  },
  {
    tab: 'industries',
    section: 'industries_list',
    title: 'Education & Institutions',
    subtitle: 'Fee Collection Engine',
    description: 'Automated student fee collection with recurring reminders, installment options, and real-time reconciliation.',
    category: 'Education',
    icon: 'GraduationCap',
    status: 'active',
    order: 4,
    extraData: { keyMetric: '95% On-time Fee Collection' }
  },

  // --- CAREERS TAB ---
  {
    tab: 'careers',
    section: 'openings',
    title: 'Senior Fintech Backend Engineer',
    subtitle: 'Engineering',
    description: 'Design and optimize resilient Node.js microservices handling thousands of concurrent banking transactions.',
    category: 'Engineering',
    icon: 'Code',
    status: 'active',
    order: 1,
    extraData: {
      location: 'Mumbai / Hybrid',
      type: 'Full-time',
      experience: '4-7 Years',
      salary: '₹18,00,000 - ₹28,00,000 / year',
      openingsCount: 2
    }
  },
  {
    tab: 'careers',
    section: 'openings',
    title: 'Fintech Product Sales Manager',
    subtitle: 'Business Development',
    description: 'Lead merchant acquisition for Rhizobee soundbox and payment gateway solutions across Western India.',
    category: 'Sales',
    icon: 'Briefcase',
    status: 'active',
    order: 2,
    extraData: {
      location: 'Mumbai / Field',
      type: 'Full-time',
      experience: '3-5 Years',
      salary: '₹8,00,000 - ₹14,00,000 + Incentives',
      openingsCount: 3
    }
  },
  {
    tab: 'careers',
    section: 'openings',
    title: 'Risk & Compliance Analyst',
    subtitle: 'Operations',
    description: 'Monitor live merchant transaction anomalies, enforce RBI/NPCI compliance, and manage AML verification.',
    category: 'Operations',
    icon: 'ShieldCheck',
    status: 'active',
    order: 3,
    extraData: {
      location: 'Mumbai Office',
      type: 'Full-time',
      experience: '2-4 Years',
      salary: '₹7,50,000 - ₹11,00,000 / year',
      openingsCount: 1
    }
  }
];

// Mapping of tab models for lookups
const tabModelConfigs = [
  { tab: 'home', section: 'features', model: HomeItem, collection: 'home_items' },
  { tab: 'home', section: 'testimonials', model: TestimonialItem, collection: 'testimonial_items' },
  { tab: 'about', model: AboutItem, collection: 'about_items' },
  { tab: 'services', model: ServiceItem, collection: 'service_items' },
  { tab: 'solutions', model: SolutionItem, collection: 'solution_items' },
  { tab: 'industries', model: IndustryItem, collection: 'industry_items' },
  { tab: 'careers', model: CareerOpening, collection: 'career_openings' }
];

// Helper to seed all dedicated tab collections if empty
const seedDedicatedCollections = async () => {
  try {
    // 1. Home items (features)
    const homeCount = await HomeItem.countDocuments();
    if (homeCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'home' && i.section !== 'testimonials');
      await HomeItem.insertMany(items);
      console.log('✅ Dedicated collection `home_items` seeded.');
    }

    // 2. Testimonial items
    const testCount = await TestimonialItem.countDocuments();
    if (testCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'home' && i.section === 'testimonials').map(i => ({
        ...i,
        rating: (i.extraData && i.extraData.rating) || 5
      }));
      await TestimonialItem.insertMany(items);
      console.log('✅ Dedicated collection `testimonial_items` seeded.');
    }

    // 3. About items (stats + values)
    const aboutCount = await AboutItem.countDocuments();
    if (aboutCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'about');
      await AboutItem.insertMany(items);
      console.log('✅ Dedicated collection `about_items` seeded.');
    }

    // 4. Service items
    const serviceCount = await ServiceItem.countDocuments();
    if (serviceCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'services');
      await ServiceItem.insertMany(items);
      console.log('✅ Dedicated collection `service_items` seeded.');
    }

    // 5. Solution items
    const solutionCount = await SolutionItem.countDocuments();
    if (solutionCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'solutions');
      await SolutionItem.insertMany(items);
      console.log('✅ Dedicated collection `solution_items` seeded.');
    }

    // 6. Industry items
    const industryCount = await IndustryItem.countDocuments();
    if (industryCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'industries');
      await IndustryItem.insertMany(items);
      console.log('✅ Dedicated collection `industry_items` seeded.');
    }

    // 7. Career openings
    const careerCount = await CareerOpening.countDocuments();
    if (careerCount === 0) {
      const items = initialSeedItems.filter(i => i.tab === 'careers');
      await CareerOpening.insertMany(items);
      console.log('✅ Dedicated collection `career_openings` seeded.');
    }
  } catch (err) {
    console.error('Error seeding dedicated tab collections:', err.message);
  }
};

// Seed DB on startup if empty
exports.seedIfEmpty = async () => {
  await seedDedicatedCollections();
};

// GET content items (filtered by ?tab= and/or ?section= or all collections)
exports.getContent = async (req, res) => {
  try {
    const { tab, section, status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    let items = [];

    if (tab === 'home') {
      if (section === 'testimonials') {
        const testDocs = await TestimonialItem.find(filter).sort({ order: 1, createdAt: -1 });
        items = testDocs.map(d => ({ ...d.toObject(), tab: 'home', section: 'testimonials' }));
      } else if (section) {
        const homeDocs = await HomeItem.find({ ...filter, section }).sort({ order: 1, createdAt: -1 });
        items = homeDocs.map(d => ({ ...d.toObject(), tab: 'home' }));
      } else {
        const [homeDocs, testDocs] = await Promise.all([
          HomeItem.find(filter).sort({ order: 1, createdAt: -1 }),
          TestimonialItem.find(filter).sort({ order: 1, createdAt: -1 })
        ]);
        items = [
          ...homeDocs.map(d => ({ ...d.toObject(), tab: 'home' })),
          ...testDocs.map(d => ({ ...d.toObject(), tab: 'home', section: 'testimonials' }))
        ];
      }
    } else if (tab === 'about') {
      const query = { ...filter };
      if (section) query.section = section;
      const docs = await AboutItem.find(query).sort({ order: 1, createdAt: -1 });
      items = docs.map(d => ({ ...d.toObject(), tab: 'about' }));
    } else if (tab === 'services') {
      const docs = await ServiceItem.find(filter).sort({ order: 1, createdAt: -1 });
      items = docs.map(d => ({ ...d.toObject(), tab: 'services', section: d.section || 'services_list' }));
    } else if (tab === 'solutions') {
      const docs = await SolutionItem.find(filter).sort({ order: 1, createdAt: -1 });
      items = docs.map(d => ({ ...d.toObject(), tab: 'solutions', section: d.section || 'solutions_list' }));
    } else if (tab === 'industries') {
      const docs = await IndustryItem.find(filter).sort({ order: 1, createdAt: -1 });
      items = docs.map(d => ({ ...d.toObject(), tab: 'industries', section: d.section || 'industries_list' }));
    } else if (tab === 'careers') {
      const docs = await CareerOpening.find(filter).sort({ order: 1, createdAt: -1 });
      items = docs.map(d => ({ ...d.toObject(), tab: 'careers', section: d.section || 'openings' }));
    } else {
      // No tab specified: fetch from ALL 7 dedicated tab collections concurrently
      const [homes, testimonials, abouts, services, solutions, industries, careers] = await Promise.all([
        HomeItem.find(filter).sort({ order: 1, createdAt: -1 }),
        TestimonialItem.find(filter).sort({ order: 1, createdAt: -1 }),
        AboutItem.find(filter).sort({ order: 1, createdAt: -1 }),
        ServiceItem.find(filter).sort({ order: 1, createdAt: -1 }),
        SolutionItem.find(filter).sort({ order: 1, createdAt: -1 }),
        IndustryItem.find(filter).sort({ order: 1, createdAt: -1 }),
        CareerOpening.find(filter).sort({ order: 1, createdAt: -1 })
      ]);

      items = [
        ...homes.map(d => ({ ...d.toObject(), tab: 'home' })),
        ...testimonials.map(d => ({ ...d.toObject(), tab: 'home', section: 'testimonials' })),
        ...abouts.map(d => ({ ...d.toObject(), tab: 'about' })),
        ...services.map(d => ({ ...d.toObject(), tab: 'services', section: d.section || 'services_list' })),
        ...solutions.map(d => ({ ...d.toObject(), tab: 'solutions', section: d.section || 'solutions_list' })),
        ...industries.map(d => ({ ...d.toObject(), tab: 'industries', section: d.section || 'industries_list' })),
        ...careers.map(d => ({ ...d.toObject(), tab: 'careers', section: d.section || 'openings' }))
      ];
    }

    res.json({ success: true, count: items.length, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET single item across collections
exports.getContentById = async (req, res) => {
  try {
    const { id } = req.params;
    for (const conf of tabModelConfigs) {
      const found = await conf.model.findById(id);
      if (found) {
        return res.json({
          success: true,
          data: {
            ...found.toObject(),
            tab: conf.tab,
            section: found.section || conf.section || 'general'
          }
        });
      }
    }

    // Legacy fallback
    const legacy = await ContentItem.findById(id);
    if (legacy) return res.json({ success: true, data: legacy });

    res.status(404).json({ success: false, message: 'Item not found in any tab collection' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// CREATE new content item into its dedicated collection
exports.createContent = async (req, res) => {
  try {
    const { tab, section, title, subtitle, description, category, icon, status, order, extraData } = req.body;
    if (!tab || !title) {
      return res.status(400).json({ success: false, message: 'Tab and Title are required.' });
    }

    const adminEmail = req.headers['x-admin-email'] || 'Admin';
    const payload = {
      tab,
      section: section || 'general',
      title,
      subtitle: subtitle || '',
      description: description || '',
      category: category || 'General',
      icon: icon || '',
      status: status || 'active',
      order: Number(order) || 0,
      extraData: extraData || {},
      createdBy: adminEmail,
      updatedBy: adminEmail
    };

    let createdDoc;
    let collectionName = '';

    if (tab === 'home') {
      if (section === 'testimonials') {
        createdDoc = await TestimonialItem.create({
          ...payload,
          rating: (extraData && extraData.rating) ? Number(extraData.rating) : 5
        });
        collectionName = 'testimonial_items';
      } else {
        createdDoc = await HomeItem.create(payload);
        collectionName = 'home_items';
      }
    } else if (tab === 'about') {
      createdDoc = await AboutItem.create({
        ...payload,
        section: section || 'general'
      });
      collectionName = 'about_items';
    } else if (tab === 'services') {
      createdDoc = await ServiceItem.create(payload);
      collectionName = 'service_items';
    } else if (tab === 'solutions') {
      createdDoc = await SolutionItem.create(payload);
      collectionName = 'solution_items';
    } else if (tab === 'industries') {
      createdDoc = await IndustryItem.create(payload);
      collectionName = 'industry_items';
    } else if (tab === 'careers') {
      createdDoc = await CareerOpening.create(payload);
      collectionName = 'career_openings';
    } else {
      createdDoc = await ContentItem.create(payload);
      collectionName = 'contentitems';
    }

    const result = {
      ...createdDoc.toObject(),
      tab,
      section: createdDoc.section || section || 'general',
      collection: collectionName
    };

    res.status(201).json({
      success: true,
      message: `Item created in dedicated '${collectionName}' collection`,
      data: result
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// UPDATE content item in its dedicated collection
exports.updateContent = async (req, res) => {
  try {
    const adminEmail = req.headers['x-admin-email'] || 'Admin';
    const updateData = { ...req.body, updatedBy: adminEmail };
    const { id } = req.params;

    for (const conf of tabModelConfigs) {
      const updated = await conf.model.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
      if (updated) {
        return res.json({
          success: true,
          message: `Item updated in dedicated '${conf.collection}' collection`,
          data: {
            ...updated.toObject(),
            tab: conf.tab,
            section: updated.section || conf.section || 'general'
          }
        });
      }
    }

    // Legacy fallback
    const legacy = await ContentItem.findByIdAndUpdate(id, updateData, { new: true });
    if (legacy) {
      return res.json({ success: true, message: 'Content item updated successfully', data: legacy });
    }

    res.status(404).json({ success: false, message: 'Content item not found in any tab collection' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE content item from its dedicated collection
exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;

    for (const conf of tabModelConfigs) {
      const deleted = await conf.model.findByIdAndDelete(id);
      if (deleted) {
        return res.json({
          success: true,
          message: `Item deleted from dedicated '${conf.collection}' collection`,
          data: deleted
        });
      }
    }

    // Legacy fallback
    const legacy = await ContentItem.findByIdAndDelete(id);
    if (legacy) {
      return res.json({ success: true, message: 'Content item deleted successfully', data: legacy });
    }

    res.status(404).json({ success: false, message: 'Content item not found in any tab collection' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// RESET / RE-SEED all dedicated tab collections
exports.resetContentSeed = async (req, res) => {
  try {
    await Promise.all([
      HomeItem.deleteMany({}),
      TestimonialItem.deleteMany({}),
      AboutItem.deleteMany({}),
      ServiceItem.deleteMany({}),
      SolutionItem.deleteMany({}),
      IndustryItem.deleteMany({}),
      CareerOpening.deleteMany({}),
      ContentItem.deleteMany({})
    ]);

    await seedDedicatedCollections();

    res.json({
      success: true,
      message: 'Reset all dedicated tab collections to defaults (home_items, testimonial_items, about_items, service_items, solution_items, industry_items, career_openings).'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE contact inquiry
exports.deleteInquiry = async (req, res) => {
  try {
    const deleted = await ContactInquiry.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    res.json({ success: true, message: 'Inquiry deleted successfully', data: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ADMIN CREATE contact inquiry (manual lead/inquiry creation)
exports.adminCreateInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, company, message, serviceOfInterest, status, notes } = req.body;
    if (!fullName || !email) {
      return res.status(400).json({ success: false, message: 'Full name and email are required' });
    }

    const count = await ContactInquiry.countDocuments();
    const inquiryId = `RZ-ADM-${String(count + 1).padStart(4, '0')}`;

    const newInquiry = await ContactInquiry.create({
      inquiryId,
      fullName,
      email,
      phone: phone || '',
      company: company || '',
      serviceOfInterest: serviceOfInterest || 'General Inquiry',
      message: message || 'Added manually by administrator',
      status: status || 'New',
      notes: notes || 'Created via Admin Portal DB'
    });

    res.status(201).json({ success: true, message: 'Inquiry added successfully', data: newInquiry });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
