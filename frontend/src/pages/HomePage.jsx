import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  Volume2, 
  Smartphone, 
  Wallet, 
  Gift, 
  Sparkles,
  Building2,
  Store,
  Users2,
  Briefcase,
  Star,
  Quote,
  TrendingUp,
  Zap,
  Lock,
  Wifi,
  Radio,
  Check,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ZoompeBanner from '../components/ZoompeBanner';
import FaqAccordion from '../components/FaqAccordion';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import LivePaymentTicker from '../components/LivePaymentTicker';

export default function HomePage() {
  const defaultTestimonials = [
    {
      _id: '1',
      title: 'Ramesh Kulkarni',
      subtitle: 'Director of Retail Operations, Maharashtra',
      description: 'Deploying Rhizobee’s soundbox and POS terminals across our 45 retail outlets cut counter disputes to practically zero. Audio confirmations are instant and loud.'
    },
    {
      _id: '2',
      title: 'Pooja Agarwal',
      subtitle: 'Founder, D2C Lifestyle Brand, Delhi NCR',
      description: 'Their payment gateway integrated seamlessly with our custom shopping cart. Checkout conversion jumped by 14% thanks to smart UPI fallback routing.'
    },
    {
      _id: '3',
      title: 'Anand Verma',
      subtitle: 'Fintech Distributor, Madhya Pradesh',
      description: 'Zoompe has transformed our regional agent network. Being able to offer banking cash-out, BBPS, and ticketing all on one portal brought real income growth to our CSPs.'
    }
  ];

  const defaultMetrics = [
    { _id: '1', title: '7', subtitle: 'Core payment solutions on one platform' },
    { _id: '2', title: '99.9%', subtitle: 'Transaction platform uptime' },
    { _id: '3', title: '24/7', subtitle: 'Merchant support availability' },
    { _id: '4', title: '100%', subtitle: 'Compliant merchant onboarding' }
  ];

  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [metrics, setMetrics] = useState(defaultMetrics);
  const [solutionCategory, setSolutionCategory] = useState('all');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  // Auto-slide testimonials every 3 seconds
  useEffect(() => {
    if (!testimonials || testimonials.length <= 1 || isTestimonialPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials, isTestimonialPaused]);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Hero hardware slides configuration with pictures & animated widgets
  const heroHardwareSlides = [
    {
      id: 'suite',
      thumbLabel: 'Flagship Suite',
      thumbImg: '/images/home/hero-hardware.jpg',
      image: '/images/home/hero-hardware.jpg',
      alt: 'Rhizobee Flagship Counter Suite - Soundbox 4G, Android POS Terminal and QR Standee',
      title: 'Rhizobee Flagship Counter Suite',
      subtitle: 'Soundbox 4G • Android POS • Dynamic QR Standee',
      tag: 'ALL-IN-ONE COUNTER SUITE'
    },
    {
      id: 'soundbox',
      thumbLabel: '4G Soundbox',
      thumbImg: '/images/home/product-soundbox.jpg',
      image: '/images/home/product-soundbox.jpg',
      alt: 'Rhizobee 4G Smart Voice Soundbox with instant bilingual announcements',
      title: '4G Smart Voice Soundbox',
      subtitle: 'High-Decibel Speaker • Hindi, English & 9 Regional Languages',
      tag: 'AUDIO CONFIRMATION'
    },
    {
      id: 'pos',
      thumbLabel: 'Android POS',
      thumbImg: '/images/home/product-pos.jpg',
      image: '/images/home/product-pos.jpg',
      alt: 'Rhizobee Smart Handheld Android POS Terminal with thermal receipt printer',
      title: 'Smart Android POS Terminal',
      subtitle: 'Contactless Tap & Pay • Thermal Printer • All Cards & UPI',
      tag: 'EMV & TAP-TO-PAY'
    },
    {
      id: 'qr',
      thumbLabel: 'BharatQR & Cards',
      thumbImg: '/images/home/product-cards.jpg',
      image: '/images/home/product-cards.jpg',
      alt: 'Dynamic QR Standee and All Payment Cards Ecosystem',
      title: 'Dynamic Counter Standee & QR Rails',
      subtitle: 'Dynamic BharatQR • Multi-Bank Routing • 0% MDR for Small Merchants',
      tag: 'BHARATQR 2.0'
    }
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHeroSlidePaused, setIsHeroSlidePaused] = useState(false);

  // Auto-slide hero hardware box every 3 seconds
  useEffect(() => {
    if (isHeroSlidePaused) return;

    const interval = setInterval(() => {
      setCurrentHeroSlide(prev => (prev + 1) % heroHardwareSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHeroSlidePaused, heroHardwareSlides.length]);

  const handleNextHeroSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentHeroSlide(prev => (prev + 1) % heroHardwareSlides.length);
  };

  const handlePrevHeroSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentHeroSlide(prev => (prev - 1 + heroHardwareSlides.length) % heroHardwareSlides.length);
  };

  useEffect(() => {
    fetch('/api/content?tab=home&section=testimonials&status=active')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setTestimonials(data.data);
        }
      })
      .catch(err => console.error('Failed to load testimonials:', err));

    fetch('/api/content?tab=about&section=stats&status=active')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setMetrics(data.data);
        }
      })
      .catch(err => console.error('Failed to load metrics:', err));
  }, []);

  const solutions = [
    {
      id: 'soundbox',
      category: 'counter',
      title: 'Soundbox Solutions',
      icon: <Volume2 size={24} color="var(--royal)" />,
      desc: 'Instant bilingual voice verification for every UPI transaction, reducing disputes and boosting counter speed.',
      tag: 'Bilingual 4G Audio',
      latency: '0.3s voice trigger'
    },
    {
      id: 'pos',
      category: 'counter',
      title: 'POS Devices & Smart Terminals',
      icon: <Smartphone size={24} color="var(--royal)" />,
      desc: 'Smart Android terminals and portable swipe machines supporting contactless NFC, chip & PIN, and receipt printing.',
      tag: 'Android 12 + Printer',
      latency: 'Chip & NFC Contactless'
    },
    {
      id: 'qr',
      category: 'counter',
      title: 'QR Code Payments',
      icon: <QrCode size={24} color="var(--royal)" />,
      desc: 'Interoperable UPI and Bharat QR codes that let customers scan and pay instantly with zero contact friction.',
      tag: 'Zero MDR',
      latency: 'Instant settlement'
    },
    {
      id: 'gateway',
      category: 'online',
      title: 'Payment Gateway Solutions',
      icon: <CreditCard size={24} color="var(--royal)" />,
      desc: 'Seamless, high-conversion online checkouts with cards, UPI, net banking, and EMI for web and mobile platforms.',
      tag: 'Instant Checkout',
      latency: 'High Success Routing'
    },
    {
      id: 'wallet',
      category: 'prepaid',
      title: 'PPI Wallet Solutions',
      icon: <Wallet size={24} color="var(--royal)" />,
      desc: 'Semi-closed & co-branded prepaid digital wallets, campus cards, payroll disbursements, and corporate allowances.',
      tag: 'Customizable Vault',
      latency: 'RBI PPI Compliant'
    },
    {
      id: 'vouchers',
      category: 'prepaid',
      title: 'Brand Gift Vouchers & Cards',
      icon: <Gift size={24} color="var(--royal)" />,
      desc: 'Catalogue of 200+ popular brand gift cards and custom merchant gift vouchers for rewards, sales incentives, and loyalty.',
      tag: '200+ Brands',
      latency: 'Instant Delivery'
    }
  ];

  const filteredSolutions = solutionCategory === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === solutionCategory);

  const businessStages = [
    {
      id: 'small-biz',
      role: 'Small Business Owners',
      shortName: 'Small Biz',
      tagline: 'Kiranas, Retail Outlets & Pharmacies',
      icon: <Store size={24} color="#fbbf24" />,
      accentColor: '#fbbf24',
      metric: 'Instant Onboarding',
      desc: 'Single-counter kiranas, retail shops, and pharmacies looking for instant QR standees, Soundbox audio confirmations, and affordable POS machines.',
      hardware: ['Soundbox 4G', 'Dynamic BharatQR Standee', '4G Sound Hub'],
      kpis: [
        { label: 'Voice Trigger', val: '< 0.3s' },
        { label: 'Setup Time', val: '5 Mins' },
        { label: 'UPI Settlement', val: 'Real-time T+0' }
      ]
    },
    {
      id: 'smes',
      role: 'SMEs',
      shortName: 'SMEs & Outlets',
      tagline: 'Multi-Store Retailers & Fast Chains',
      icon: <Store size={24} color="var(--sky)" />,
      accentColor: 'var(--sky)',
      metric: 'Auto T+1 Batching',
      desc: 'Fast-growing retailers, multi-brand outlets, and distributors requiring integrated payment terminals, automated day-end batch settlements, and GST invoicing.',
      hardware: ['Smart Android POS', 'Thermal Printer', 'Store Web Portal'],
      kpis: [
        { label: 'Card Auth Speed', val: '< 0.8s' },
        { label: 'Settlement Window', val: 'T+1 06:00 AM' },
        { label: 'Cellular Rails', val: 'Dual SIM 4G' }
      ]
    },
    {
      id: 'msmes',
      role: 'MSMEs',
      shortName: 'MSMEs & Hubs',
      tagline: 'Manufacturing, Traders & Supply Hubs',
      icon: <Briefcase size={24} color="#38bdf8" />,
      accentColor: '#38bdf8',
      metric: 'Bulk Payout APIs',
      desc: 'Manufacturing hubs, vendors, and regional traders requiring online payment gateway links, vendor payout systems, and reliable banking reconciliation.',
      hardware: ['Bulk Payout Engine', 'Escrow Gateway', 'Vendor Webhooks'],
      kpis: [
        { label: 'Routing SLA', val: '99.99%' },
        { label: 'Payout Latency', val: 'Sub-second' },
        { label: 'Reconciliation', val: 'Automated GST' }
      ]
    },
    {
      id: 'enterprises',
      role: 'Enterprises',
      shortName: 'Enterprises',
      tagline: 'Omnichannel Conglomerates & Store Networks',
      icon: <Building2 size={24} color="#34d399" />,
      accentColor: '#34d399',
      metric: 'Custom Dedicated Switch',
      desc: 'Omnichannel brands and nationwide store networks requiring scalable switch routing, sub-merchant management, API-driven refunds, and customized SLAs.',
      hardware: ['Enterprise Switch', 'ERP/SAP Connector', 'Sub-Merchant Engine'],
      kpis: [
        { label: 'Peak Capacity', val: '10,000 TPS' },
        { label: 'Switch Latency', val: '18ms' },
        { label: 'Availability', val: '99.999% SLA' }
      ]
    },
    {
      id: 'corporates',
      role: 'Corporates',
      shortName: 'Corporates',
      tagline: 'Institutions, Tech Parks & HR Divisions',
      icon: <Users2 size={24} color="#f59e0b" />,
      accentColor: '#f59e0b',
      metric: 'Enterprise Multi-Entity',
      desc: 'Large organizations requiring automated bulk vendor disbursements, employee meal & wellness prepaid wallets, and festive brand gift card programs.',
      hardware: ['PPI Digital Wallets', 'Expense Cards', '200+ Brand Vouchers'],
      kpis: [
        { label: 'Brand Vouchers', val: '200+ Catalog' },
        { label: 'Allowance Flow', val: 'Tax-Compliant' },
        { label: 'Audit Security', val: 'PCI-DSS L1' }
      ]
    }
  ];

  const orbitCoordinates = [
    { x: 50, y: 12 },     // Node 0: Top (Small Business)
    { x: 86.1, y: 38.3 }, // Node 1: Top-Right (SMEs)
    { x: 72.3, y: 80.7 }, // Node 2: Bottom-Right (MSMEs)
    { x: 27.7, y: 80.7 }, // Node 3: Bottom-Left (Enterprises)
    { x: 13.9, y: 38.3 }  // Node 4: Top-Left (Corporates)
  ];

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isStagePaused, setIsStagePaused] = useState(false);

  // Auto-cycle through circular business stages every 3.5 seconds
  useEffect(() => {
    if (isStagePaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex(prev => (prev + 1) % businessStages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isStagePaused, businessStages.length]);

  // Verified payment networks supported
  const paymentNetworks = [
    { name: 'UPI', label: 'Unified Payments Interface' },
    { name: 'RuPay', label: 'RuPay Debit & Credit' },
    { name: 'Visa', label: 'Visa International' },
    { name: 'Mastercard', label: 'Mastercard Worldwide' },
    { name: 'Bharat QR', label: 'Interoperable QR' },
    { name: 'PCI-DSS', label: 'Level 1 Certified' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ========================================================
          1. HERO SECTION WITH REAL HARDWARE PHOTO & NETWORK BADGES
          ======================================================== */}
      <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fff7ed', color: '#1c1917', paddingTop: '2.25rem', paddingBottom: '3.5rem' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
        
        {/* Animated Gradient Glow Orbs in Warm Peach & Soft Coral */}
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            right: '-6rem',
            top: '-6rem',
            height: '34rem',
            width: '34rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(251, 146, 60, 0.16)',
            filter: 'blur(100px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            left: '-6rem',
            bottom: '2rem',
            height: '24rem',
            width: '24rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(254, 226, 226, 0.65)',
            filter: 'blur(95px)',
            animationDelay: '2.5s',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <div className="hero-container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-two-column-grid">
            {/* Left Copy */}
            <ScrollReveal animation="fade-up" duration={700}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: '#fee2e2',
                  border: '1px solid rgba(251, 146, 60, 0.35)',
                  backdropFilter: 'blur(8px)',
                  marginBottom: '1.25rem'
                }}
              >
                <span className="beacon-pulse-green" />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c2410c', letterSpacing: '0.04em' }}>
                  Fintech &amp; Digital Payment Solutions
                </span>
              </div>

              <h1 className="hero-main-title">
                <span className="hero-title-line" style={{ color: '#1c1917' }}>Secure payments.</span>
                <span className="hero-title-line text-gradient">Smart solutions.</span>
              </h1>

              <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: 1.7, color: '#57534e', maxWidth: '36rem' }}>
                Rhizobee Innovations equips small business owners, retail shops, MSMEs, and enterprises with next-generation digital payment hardware and cloud rails — Soundbox 4G, smart POS terminals, dynamic QR standees, and online gateways built in synergy with India’s leading banks.
              </p>

              <div className="hero-cta-button-group">
                <Link to="/contact" className="btn-royal btn-shimmer hero-cta-btn">
                  Talk to Our Team <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline-dark btn-shimmer hero-cta-btn">
                  Explore Products &amp; Devices
                </Link>
              </div>

              {/* Supported Payment Networks Badges */}
              <div style={{ marginTop: '2.75rem', paddingTop: '1.5rem', borderTop: '1px solid #fed7aa' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#78716c', marginBottom: '0.85rem', fontWeight: 600 }}>
                  Supported Payment Rails &amp; Standards
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {paymentNetworks.map((net, i) => (
                    <span key={i} className="network-badge-pill">
                      <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: '#10b981' }} />
                      {net.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Hero Product Photo Showcase - Maximized Width & Length with 3-Second Auto-Slide */}
            <ScrollReveal animation="fade-up" delay={200} duration={800} style={{ width: '100%' }}>
              <div 
                className="hero-hardware-wrapper"
                onMouseEnter={() => setIsHeroSlidePaused(true)}
                onMouseLeave={() => setIsHeroSlidePaused(false)}
              >
                <div 
                  className="border-beam-card"
                  style={{
                    boxShadow: '0 25px 65px -15px rgba(251, 146, 60, 0.22), 0 10px 30px rgba(0, 0, 0, 0.08)',
                    width: '100%'
                  }}
                >
                  <div 
                    className="border-beam-card-inner"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #fed7aa',
                      borderRadius: '1.5rem',
                      padding: '14px',
                      width: '100%'
                    }}
                  >
                    <div style={{ borderRadius: '1.35rem', overflow: 'hidden', position: 'relative', width: '100%' }}>
                      {/* 3-Second Active Progress Bar inside Box */}
                      <div className="hero-slide-progress-track">
                        <div 
                          key={currentHeroSlide}
                          className="hero-slide-progress-fill"
                          style={{ animationPlayState: isHeroSlidePaused ? 'paused' : 'running' }}
                        />
                      </div>

                      {/* Main Sliding Hardware Image & Dynamic Cards */}
                      {(() => {
                        const activeSlide = heroHardwareSlides[currentHeroSlide] || heroHardwareSlides[0];
                        return (
                          <div key={activeSlide.id} className="hero-slide-image-animate" style={{ position: 'relative' }}>
                            <img 
                              src={activeSlide.image} 
                              alt={activeSlide.alt} 
                              className="hero-hardware-img"
                            />

                            {/* Gradient Overlay for Sleek Contrast */}
                            <div 
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(5, 12, 30, 0.95) 0%, rgba(5, 12, 30, 0.2) 45%, rgba(5, 12, 30, 0.45) 100%)',
                                pointerEvents: 'none'
                              }}
                            />

                            {/* Inside Box Navigation Arrows */}
                            <button 
                              type="button" 
                              onClick={handlePrevHeroSlide}
                              className="hero-slide-arrow-btn hero-slide-arrow-prev"
                              aria-label="Previous hardware slide"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button 
                              type="button" 
                              onClick={handleNextHeroSlide}
                              className="hero-slide-arrow-btn hero-slide-arrow-next"
                              aria-label="Next hardware slide"
                            >
                              <ChevronRight size={18} />
                            </button>

                            {/* Inside Box Bottom Overlay - Top Info Row & Bottom Thumbnail Navigation */}
                            <div 
                              style={{
                                position: 'absolute',
                                bottom: '14px',
                                left: '16px',
                                right: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                zIndex: 10
                              }}
                            >
                              {/* Row 1: Title & Tag on Left, Compliance Badge on Right */}
                              <div 
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  flexWrap: 'wrap',
                                  gap: '8px'
                                }}
                              >
                                <div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                    <span style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.015em', color: '#ffffff', lineHeight: 1.2 }}>
                                      {activeSlide.title}
                                    </span>
                                    <span style={{ fontSize: '0.62rem', padding: '2px 7px', borderRadius: '5px', background: 'rgba(14, 165, 233, 0.22)', color: 'var(--sky)', border: '1px solid rgba(14, 165, 233, 0.4)', fontWeight: 600 }}>
                                      {activeSlide.tag}
                                    </span>
                                  </div>
                                  <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
                                    {activeSlide.subtitle}
                                  </div>
                                </div>

                                {/* 100% RBI & PCI-DSS Compliant badge */}
                                <div 
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    padding: '4px 11px',
                                    borderRadius: '9999px',
                                    backgroundColor: 'rgba(5, 12, 30, 0.9)',
                                    border: '1px solid rgba(217, 164, 65, 0.55)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(217, 164, 65, 0.25)',
                                    color: '#ffffff',
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '9999px', backgroundColor: 'rgba(217, 164, 65, 0.25)' }}>
                                    <ShieldCheck size={11} color="#fbbf24" />
                                  </span>
                                  <span>100% RBI &amp; PCI-DSS Level 1 Compliant</span>
                                </div>
                              </div>

                              {/* Row 2: 4 Sliding Picture Preview Cards Centered inside Box */}
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="hero-slide-thumbs-row">
                                  {heroHardwareSlides.map((slide, slideIdx) => (
                                    <button
                                      key={slide.id}
                                      type="button"
                                      onClick={() => setCurrentHeroSlide(slideIdx)}
                                      className={`hero-thumb-btn ${slideIdx === currentHeroSlide ? 'active' : ''}`}
                                      aria-label={`Show ${slide.thumbLabel}`}
                                    >
                                      <img 
                                        src={slide.thumbImg} 
                                        alt={slide.thumbLabel} 
                                        className="hero-thumb-img" 
                                      />
                                      <span className="hero-thumb-text">{slide.thumbLabel}</span>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          AUTO-MOVING LIVE PAYMENT & TRANSACTION TICKER (FIGMA)
          ======================================================== */}
      <LivePaymentTicker />

      {/* ========================================================
          2. PARTNER MARQUEE WITH REAL ACCREDITED PARTNER LOGOS
          ======================================================== */}
      <PartnerMarquee />

      {/* ========================================================
          3. HARDWARE & DIGITAL PRODUCT GALLERY (REAL PHOTOS)
          ======================================================== */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '100%', textAlign: 'left', marginBottom: '3.5rem' }}>
              <span className="badge-tag">
                <span className="badge-dot" />
                COUNTER HARDWARE &amp; DIGITAL RAILS
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Next-generation devices designed for India's retail counters
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate)', lineHeight: 1.65, marginTop: '0.5rem', maxWidth: '42rem' }}>
                Purpose-built fintech terminals, audio verification soundboxes, and digital wallet solutions engineered for fast checkouts and high customer trust.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Card 1: 4G Audio Soundbox */}
            <ScrollReveal animation="fade-up" delay={0} duration={650}>
              <div className="product-showcase-card">
                <div className="image-wrapper">
                  <img src="/images/home/product-soundbox.jpg" alt="Rhizobee 4G Smart Voice Soundbox with instant bilingual announcements" />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(10, 26, 58, 0.85)',
                      color: 'var(--sky)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(63, 169, 245, 0.3)'
                    }}
                  >
                    4G Smart Audio
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                      4G Smart Audio Soundbox
                    </h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.25rem' }}>
                       Instant high-decibel audio confirmation for every UPI QR transaction in English, Hindi &amp; regional languages. Zero fraud, zero counter disputes.
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                      <span className="hardware-spec-chip">4G LTE + 2G Auto</span>
                      <span className="hardware-spec-chip">7-Day Battery</span>
                      <span className="hardware-spec-chip">Multi-lingual</span>
                    </div>
                    <Link to="/contact" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--royal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Order for counter <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Smart Android POS Machine */}
            <ScrollReveal animation="fade-up" delay={90} duration={650}>
              <div className="product-showcase-card">
                <div className="image-wrapper">
                  <img src="/images/home/product-pos.jpg" alt="Rhizobee Smart Handheld Android POS Machine with thermal receipt printer" />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(10, 26, 58, 0.85)',
                      color: 'var(--gold-soft)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(217, 164, 65, 0.3)'
                    }}
                  >
                    Smart Android POS
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                      Android POS with Printer
                    </h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.25rem' }}>
                      High-performance quad-core terminal supporting contactless NFC tap, chip cards, magnetic swipe, and super-fast thermal paper receipt printing.
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                      <span className="hardware-spec-chip">Contactless NFC</span>
                      <span className="hardware-spec-chip">Thermal Receipts</span>
                      <span className="hardware-spec-chip">PCI-PTS 6.x</span>
                    </div>
                    <Link to="/contact" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--royal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Get POS Terminal <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Retail Merchant Storefront */}
            <ScrollReveal animation="fade-up" delay={180} duration={650}>
              <div className="product-showcase-card">
                <div className="image-wrapper">
                  <img src="/images/home/retail-merchant.jpg" alt="Retail merchant store counter with QR standee and voice soundbox" />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(10, 26, 58, 0.85)',
                      color: '#4ade80',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(34, 197, 94, 0.3)'
                    }}
                  >
                    Storefront Counter
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                      Merchant Counter Checkouts
                    </h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.25rem' }}>
                      Powering kiranas, supermarkets, pharmacies, and multi-outlet retail chains across India with seamless UPI QR standees and audio verification.
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                      <span className="hardware-spec-chip">10,000+ Merchants</span>
                      <span className="hardware-spec-chip">Zero MDR on UPI</span>
                      <span className="hardware-spec-chip">T+1 Settlement</span>
                    </div>
                    <Link to="/services" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--royal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Explore solutions <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Corporate PPI Wallets & Smart Cards */}
            <ScrollReveal animation="fade-up" delay={270} duration={650}>
              <div className="product-showcase-card">
                <div className="image-wrapper">
                  <img src="/images/home/product-cards.jpg" alt="Prepaid corporate smart cards and digital wallet interface" />
                  <span 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(10, 26, 58, 0.85)',
                      color: 'var(--sky)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(63, 169, 245, 0.3)'
                    }}
                  >
                    PPI &amp; Smart Cards
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                      Prepaid Cards &amp; Wallets
                    </h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.25rem' }}>
                      Co-branded RuPay &amp; Visa prepaid debit cards and digital wallets for employee payroll, corporate allowance, vendor payouts, and rewards.
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                      <span className="hardware-spec-chip">RuPay &amp; Visa</span>
                      <span className="hardware-spec-chip">Digital Vault</span>
                      <span className="hardware-spec-chip">Automated Batching</span>
                    </div>
                    <Link to="/contact" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--royal)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Deploy wallets <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. 4 KEY METRICS BAR WITH ANIMATED COUNTERS
          ======================================================== */}
      <section style={{ borderBottom: '1px solid var(--line)', backgroundColor: '#ffffff', position: 'relative' }}>
        <div className="container-custom" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.25rem' }}>
            {metrics.map((st, idx) => (
              <ScrollReveal key={st._id || idx} animation="fade-up" delay={idx * 100}>
                <div 
                  style={{ 
                    textAlign: 'left',
                    padding: '0.75rem 0.5rem',
                    borderLeft: '2px solid rgba(22, 86, 214, 0.15)',
                    paddingLeft: '1.25rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--royal)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(22, 86, 214, 0.15)'}
                >
                  <p style={{ fontSize: '2.75rem', fontWeight: 700, color: 'var(--royal)', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
                    <AnimatedCounter value={st.title} />
                  </p>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--slate)' }}>
                    {st.subtitle || st.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ZOOMPE REGIONAL AGENT PLATFORM BANNER
          ======================================================== */}
      <ZoompeBanner />

      {/* ========================================================
          6. SOLUTIONS AT COUNTER & CHECKOUT WITH INTERACTIVE TABS
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6.5rem' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span className="badge-tag">
                  <span className="badge-dot" />
                  COMPLETE FINTECH SUITE
                </span>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                  Payment solutions built for every counter and checkout
                </h2>
              </div>
              <Link to="/services" className="btn-royal btn-shimmer">
                View All Services <ArrowRight size={15} />
              </Link>
            </div>

            {/* Interactive Filter Pills */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '2.5rem'
              }}
            >
              {[
                { id: 'all', label: 'All Solutions' },
                { id: 'counter', label: 'Counter & Hardware (Soundbox, QR, POS)' },
                { id: 'online', label: 'Online Payment Gateway' },
                { id: 'prepaid', label: 'PPI Wallets & Brand Gift Cards' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSolutionCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: solutionCategory === cat.id ? '1px solid var(--royal)' : '1px solid var(--line)',
                    backgroundColor: solutionCategory === cat.id ? 'var(--royal)' : '#ffffff',
                    color: solutionCategory === cat.id ? '#ffffff' : 'var(--slate)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Solution Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredSolutions.map((item, idx) => (
              <ScrollReveal key={item.id || idx} animation="fade-up" delay={idx * 100}>
                <div 
                  className="fintech-card-interactive" 
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div 
                        className="icon-box-hover"
                        style={{
                          height: '3.5rem',
                          width: '3.5rem',
                          borderRadius: '1rem',
                          backgroundColor: 'rgba(22, 86, 214, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {item.icon}
                      </div>

                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          backgroundColor: 'var(--paper)',
                          color: 'var(--royal)',
                          fontFamily: 'var(--font-data)'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--slate)' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div 
                    style={{ 
                      marginTop: '1.75rem', 
                      paddingTop: '1rem', 
                      borderTop: '1px solid var(--line)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: 'var(--slate-dim)', fontFamily: 'var(--font-data)' }}>
                      {item.latency}
                    </span>
                    <Link 
                      to="/contact" 
                      style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: 600, 
                        color: 'var(--royal)', 
                        textDecoration: 'none', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.35rem',
                        transition: 'gap 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.gap = '0.55rem'}
                      onMouseLeave={(e) => e.currentTarget.style.gap = '0.35rem'}
                    >
                      Deploy now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. INFRASTRUCTURE METRICS & STATS WITH ANIMATED COUNTERS
          ======================================================== */}
      <section style={{ backgroundColor: '#181513', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.18 }} />
        
        {/* Ambient Warm Amber & Peach backlight glow */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '650px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(245, 158, 11, 0.12) 40%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '3.5rem' }}>
              <span className="badge-tag" style={{ color: 'var(--royal)' }}>
                <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
                INFRASTRUCTURE &amp; SCALE
              </span>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                The infrastructure behind every transaction
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '0.5rem', maxWidth: '38rem' }}>
                Built for resilient uptime, low transaction latency, and deep financial integration across India.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { stat: '99.98%', label: 'Switch Uptime', desc: 'Fault-tolerant multi-bank architecture' },
              { stat: '10,000+', label: 'Active Merchants', desc: 'From local retail to enterprise chains' },
              { stat: '500,000+', label: 'Daily Transactions', desc: 'Processed with sub-second speeds' },
              { stat: '12+', label: 'Banking & PA Partners', desc: 'Direct clearing and settlement rails' },
              { stat: '19,000+', label: 'Pin Codes Served', desc: 'Pan-India merchant distribution' }
            ].map((item, idx) => (
              <ScrollReveal key={idx} animation="scale" delay={idx * 100}>
                <div className={`stat-card-elevated stat-card-float-${idx}`}>
                  <div className="font-data" style={{ fontSize: '2.35rem', fontWeight: 700, color: '#fbbf24', letterSpacing: '-0.02em' }}>
                    <AnimatedCounter value={item.stat} />
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginTop: '0.5rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.68)', marginTop: '0.4rem', lineHeight: 1.45 }}>
                    {item.desc}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BUILT FOR EVERY STAGE OF BUSINESS - FIGMA ANIMATED CIRCULAR ECOSYSTEM
          ======================================================== */}
      <section id="who-we-serve-orbit" style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} aria-hidden="true" />
        
        {/* Ambient Backlight Glow Orbs */}
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            left: '15%',
            top: '25%',
            height: '26rem',
            width: '26rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.25)',
            filter: 'blur(95px)',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            right: '15%',
            bottom: '20%',
            height: '22rem',
            width: '22rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(217, 164, 65, 0.16)',
            filter: 'blur(90px)',
            animationDelay: '2.5s',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <div className="container-custom ecosystem-container-wide" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal animation="fade-up">
            <div className="ecosystem-heading-wrap">
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(16, 185, 129, 0.18)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  backdropFilter: 'blur(8px)',
                  marginBottom: '1rem'
                }}
              >
                <span className="beacon-pulse-royal" />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--sky)', letterSpacing: '0.05em' }}>
                  WHO WE SERVE • FIGMA CIRCULAR ECOSYSTEM
                </span>
              </div>
              <h2 className="ecosystem-main-title">
                Built for every <span className="text-gradient">stage of business</span>
              </h2>
              <p className="ecosystem-main-desc">
                From single-counter kiranas to multi-entity enterprise conglomerates — our unified payment technology stack orbits around your exact operational scale.
              </p>
            </div>
          </ScrollReveal>

          {/* Figma Circular Orbit Ecosystem Grid */}
          <div className="figma-ecosystem-grid">
            {/* Left Column: The Animated Orbit Circle System */}
            <ScrollReveal animation="fade-up" duration={700}>
              <div 
                className="orbit-circle-wrapper"
                onMouseEnter={() => setIsStagePaused(true)}
                onMouseLeave={() => setIsStagePaused(false)}
              >
                <div className="orbit-circle-system">
                  {/* Outer Dashed Orbit Ring */}
                  <div className="orbit-ring-outer" />
                  
                  {/* Middle Orbit Path */}
                  <div className="orbit-ring-middle" />
                  
                  {/* Pulsing Concentric Radar Rings */}
                  <div className="orbit-radar-pulse pulse-1" />
                  <div className="orbit-radar-pulse pulse-2" />
                  <div className="orbit-radar-pulse pulse-3" />

                  {/* SVG Active Connecting Laser Line */}
                  <svg className="orbit-laser-svg" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="orbitLaserGrad" x1="50%" y1="50%" x2={`${orbitCoordinates[activeStageIndex].x}%`} y2={`${orbitCoordinates[activeStageIndex].y}%`}>
                        <stop offset="0%" stopColor="var(--sky)" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#fbbf24" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <line 
                      x1="50" 
                      y1="50" 
                      x2={orbitCoordinates[activeStageIndex].x} 
                      y2={orbitCoordinates[activeStageIndex].y} 
                      stroke="url(#orbitLaserGrad)" 
                      strokeWidth="2.5" 
                      strokeDasharray="4 2"
                      className="orbit-active-laser-line"
                    />
                    <circle 
                      cx={orbitCoordinates[activeStageIndex].x} 
                      cy={orbitCoordinates[activeStageIndex].y} 
                      r="4" 
                      fill="#fbbf24" 
                      style={{ filter: 'drop-shadow(0 0 8px #fbbf24)' }}
                    />
                  </svg>

                  {/* Center Core Hub Disc */}
                  <div className="orbit-core-hub">
                    <div className="orbit-core-inner">
                      <span className="beacon-pulse-royal orbit-core-dot" />
                      <span className="orbit-core-title">RHIZOBEE</span>
                    </div>
                  </div>

                  {/* 5 Orbital Stage Nodes */}
                  {businessStages.map((stage, idx) => {
                    const coord = orbitCoordinates[idx];
                    const isActive = idx === activeStageIndex;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStageIndex(idx)}
                        className={`orbit-node-btn ${isActive ? 'active' : ''}`}
                        style={{
                          left: `${coord.x}%`,
                          top: `${coord.y}%`
                        }}
                        aria-label={`Select ${stage.role}`}
                      >
                        <div className="orbit-node-icon">
                          {stage.icon}
                        </div>
                        <span className="orbit-node-label">{stage.shortName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Active Stage Feature Card Showcase */}
            <ScrollReveal animation="fade-up" delay={150} duration={800}>
              {(() => {
                const currentStage = businessStages[activeStageIndex] || businessStages[0];
                return (
                  <div 
                    key={currentStage.id} 
                    className="orbit-showcase-card"
                    onMouseEnter={() => setIsStagePaused(true)}
                    onMouseLeave={() => setIsStagePaused(false)}
                  >
                    {/* Top Row: Icon + Metric Tag */}
                    <div className="orbit-card-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div 
                          className="orbit-card-icon-wrap"
                          style={{ 
                            border: `1.5px solid ${currentStage.accentColor}`,
                            boxShadow: `0 0 24px ${currentStage.accentColor}38`
                          }}
                        >
                          {currentStage.icon}
                        </div>
                        <div>
                          <div className="orbit-card-tagline" style={{ color: currentStage.accentColor }}>
                            {currentStage.tagline}
                          </div>
                          <h3 className="orbit-card-title">
                            {currentStage.role}
                          </h3>
                        </div>
                      </div>

                      <span className="orbit-card-metric-badge">
                        {currentStage.metric}
                      </span>
                    </div>

                    <p className="orbit-card-desc">
                      {currentStage.desc}
                    </p>

                    {/* Dedicated Hardware & Digital Rails */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div className="orbit-card-hw-title">
                        Tailored Payment Hardware &amp; Cloud Stack
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {currentStage.hardware.map((hw, i) => (
                          <span key={i} className="orbit-spec-chip">
                            <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: currentStage.accentColor }} />
                            {hw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3 KPI Metrics Grid */}
                    <div className="orbit-kpi-grid">
                      {currentStage.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="orbit-kpi-box">
                          <div className="orbit-kpi-label">
                            {kpi.label}
                          </div>
                          <div className="orbit-kpi-val">
                            {kpi.val}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action & Circular Stage Indicators */}
                    <div className="orbit-card-footer">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {businessStages.map((_, dotI) => (
                          <button
                            key={dotI}
                            type="button"
                            onClick={() => setActiveStageIndex(dotI)}
                            className="orbit-dot-nav-btn"
                            style={{
                              width: dotI === activeStageIndex ? '28px' : '8px',
                              backgroundColor: dotI === activeStageIndex ? 'var(--sky)' : 'rgba(255, 255, 255, 0.3)'
                            }}
                            aria-label={`Jump to stage ${dotI + 1}`}
                          />
                        ))}
                      </div>

                      <Link 
                        to="/contact" 
                        className="btn-royal btn-shimmer orbit-card-cta"
                      >
                        Explore Solution for {currentStage.shortName} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. TESTIMONIALS SLIDER - SINGLE FORM (3-SECOND AUTO SLIDE)
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--paper-dim)', paddingTop: '6rem', paddingBottom: '6.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem auto', width: '100%' }}>
              <span className="badge-tag">
                <span className="badge-dot" />
                CLIENT VOICES &amp; ENDORSEMENTS
              </span>
              <h2 
                className="heading-single-line"
                style={{ fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.025em', marginTop: '0.75rem' }}
              >
                What our clients say about working with us
              </h2>
              <p 
                className="subheading-balanced"
                style={{ fontSize: '1.05rem', color: 'var(--slate)', lineHeight: 1.6, marginTop: '0.6rem', maxWidth: '38rem' }}
              >
                Trusted by retail merchants, distribution partners, and enterprise founders across India.
              </p>
            </div>
          </ScrollReveal>

          {/* Single Form Slider Container */}
          <div className="testimonial-single-slider-wrapper">
            <div 
              className="testimonial-slide-card"
              onMouseEnter={() => setIsTestimonialPaused(true)}
              onMouseLeave={() => setIsTestimonialPaused(false)}
            >
              {/* 3-Second Active Progress Bar */}
              <div className="testimonial-progress-bar-track">
                <div 
                  key={currentTestimonialIndex}
                  className="testimonial-progress-bar-fill"
                  style={{ animationPlayState: isTestimonialPaused ? 'paused' : 'running' }}
                />
              </div>

              {/* Watermark Quote Icon */}
              <div style={{ position: 'absolute', top: '2rem', right: '2.5rem', opacity: 0.08, pointerEvents: 'none' }}>
                <Quote size={84} color="var(--royal)" />
              </div>

              {/* Active Testimonial Content with Smooth Fade/Slide */}
              {testimonials && testimonials.length > 0 && (() => {
                const current = testimonials[currentTestimonialIndex] || testimonials[0];
                return (
                  <div 
                    key={current._id || currentTestimonialIndex}
                    className="testimonial-slide-animate"
                  >
                    {/* Rating Stars & Slide Counter */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', position: 'relative', zIndex: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        {[...Array(current.extraData?.rating || 5)].map((_, i) => (
                          <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                        ))}
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--slate-dim)', marginLeft: '8px' }}>
                          5.0 Rating
                        </span>
                      </div>

                      <div className="font-data" style={{ fontSize: '0.8rem', color: 'var(--slate)', backgroundColor: 'var(--paper-dim)', padding: '4px 12px', borderRadius: '9999px', border: '1px solid var(--line)', fontWeight: 600 }}>
                        {String(currentTestimonialIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Main Testimonial Quote */}
                    <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--ink)', fontStyle: 'italic', fontWeight: 500, minHeight: '5.5rem', marginBottom: '2.25rem', position: 'relative', zIndex: 2 }}>
                      "{current.description || current.quote}"
                    </p>

                    {/* Author Details and Verification Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--line)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem', position: 'relative', zIndex: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        {/* Author Avatar with Initial */}
                        <div 
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '9999px',
                            background: 'linear-gradient(135deg, var(--royal) 0%, var(--sky) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '1.15rem',
                            flexShrink: 0,
                            boxShadow: '0 6px 16px rgba(22, 86, 214, 0.28)'
                          }}
                        >
                          {(current.title || current.author || 'M').charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                            {current.title || current.author}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--slate-dim)', marginTop: '0.2rem' }}>
                            {current.subtitle || current.role}
                          </div>
                        </div>
                      </div>

                      {/* Verified Merchant Partner Chip */}
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '9999px', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', color: '#16a34a', fontSize: '0.78rem', fontWeight: 600 }}>
                        <CheckCircle2 size={14} color="#16a34a" /> Verified Client Review
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Slider Controls Bar: Previous, Dots, Next, Pause Hint */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', padding: '0 0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={handlePrevTestimonial}
                  className="testimonial-nav-btn"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNextTestimonial}
                  className="testimonial-nav-btn"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Pagination Dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentTestimonialIndex(dotIdx)}
                    className={`testimonial-dot-btn ${dotIdx === currentTestimonialIndex ? 'active' : ''}`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Status Indicator */}
              <div style={{ fontSize: '0.78rem', color: 'var(--slate-dim)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span 
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '9999px',
                    backgroundColor: isTestimonialPaused ? '#f59e0b' : '#22c55e'
                  }} 
                />
                <span>{isTestimonialPaused ? 'Slide Paused (Hovered)' : 'Auto-sliding 3s'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <FaqAccordion />

      {/* ========================================================
          11. BOTTOM CTA BANNER
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6.5rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            bottom: '-4rem',
            right: '10%',
            width: '28rem',
            height: '28rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(16, 185, 129, 0.25)',
            filter: 'blur(90px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ color: 'var(--gold)' }}>
              <Sparkles size={14} color="var(--gold)" /> GET STARTED TODAY
            </span>
            <h2 style={{ fontSize: '2.6rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.025em', marginTop: '1rem', lineHeight: 1.2 }}>
              Ready to modernise how your business runs?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.78)', lineHeight: 1.7, marginTop: '0.85rem', maxWidth: '38rem' }}>
              Speak with our payment specialists today. We will guide you to the right mix of gateways, counter devices, and partner APIs.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '1rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Talk to Our Team <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline-white btn-shimmer" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Explore Products &amp; Devices
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
