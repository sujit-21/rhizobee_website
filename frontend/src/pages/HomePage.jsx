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
  ChevronRight
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ZoompeBanner from '../components/ZoompeBanner';
import FaqAccordion from '../components/FaqAccordion';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';

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
      role: 'Small Business Owners',
      icon: <Store size={22} color="var(--gold)" />,
      desc: 'Single-counter kiranas, retail shops, and pharmacies looking for instant QR standees, Soundbox audio confirmations, and affordable POS machines.',
      metric: 'Instant Onboarding'
    },
    {
      role: 'SMEs',
      icon: <Store size={22} color="var(--royal)" />,
      desc: 'Fast-growing retailers, multi-brand outlets, and distributors requiring integrated payment terminals, automated day-end batch settlements, and GST invoicing.',
      metric: 'Auto T+1 Batching'
    },
    {
      role: 'MSMEs',
      icon: <Briefcase size={22} color="var(--sky)" />,
      desc: 'Manufacturing hubs, vendors, and regional traders requiring online payment gateway links, vendor payout systems, and reliable banking reconciliation.',
      metric: 'Bulk Payout APIs'
    },
    {
      role: 'Enterprises',
      icon: <Building2 size={22} color="var(--royal)" />,
      desc: 'Omnichannel brands and nationwide store networks requiring scalable switch routing, sub-merchant management, API-driven refunds, and customized SLAs.',
      metric: 'Custom Dedicated Switch'
    },
    {
      role: 'Corporates',
      icon: <Users2 size={22} color="var(--gold)" />,
      desc: 'Large organizations requiring automated bulk vendor disbursements, employee meal & wellness prepaid wallets, and festive brand gift card programs.',
      metric: 'Enterprise Multi-Entity'
    }
  ];

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
      <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6.5rem', paddingBottom: '7rem' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.28 }} aria-hidden="true" />
        
        {/* Animated Gradient Glow Orbs */}
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            right: '-6rem',
            top: '-6rem',
            height: '34rem',
            width: '34rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(22, 86, 214, 0.4)',
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
            backgroundColor: 'rgba(217, 164, 65, 0.2)',
            filter: 'blur(95px)',
            animationDelay: '2.5s',
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Copy */}
            <ScrollReveal animation="fade-up" duration={700}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(22, 86, 214, 0.18)',
                  border: '1px solid rgba(63, 169, 245, 0.35)',
                  backdropFilter: 'blur(8px)',
                  marginBottom: '1.25rem'
                }}
              >
                <span className="beacon-pulse-royal" />
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--sky)', letterSpacing: '0.04em' }}>
                  Fintech &amp; Digital Payment Solutions
                </span>
              </div>

              <h1 style={{ fontSize: '3.4rem', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.035em', marginTop: '0.5rem' }}>
                Secure payments.{' '}
                <span className="text-gradient">Smart solutions.</span>
              </h1>

              <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)', maxWidth: '36rem' }}>
                Rhizobee Innovations equips small business owners, retail shops, MSMEs, and enterprises with next-generation digital payment hardware and cloud rails — Soundbox 4G, smart POS terminals, dynamic QR standees, and online gateways built in synergy with India’s leading banks.
              </p>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.9rem 1.85rem', fontSize: '0.975rem' }}>
                  Talk to Our Team <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline-white btn-shimmer" style={{ padding: '0.9rem 1.85rem', fontSize: '0.975rem' }}>
                  Explore Products &amp; Devices
                </Link>
              </div>

              {/* Supported Payment Networks Badges */}
              <div style={{ marginTop: '2.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.85rem', fontWeight: 600 }}>
                  Supported Payment Rails &amp; Standards
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {paymentNetworks.map((net, i) => (
                    <span key={i} className="network-badge-pill">
                      <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: '#22c55e' }} />
                      {net.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Hero Product Photo Showcase with Floating Badges */}
            <ScrollReveal animation="fade-up" delay={200} duration={800}>
              <div style={{ position: 'relative' }}>
                {/* Floating Top Badge */}
                <div 
                  className="animate-float"
                  style={{
                    position: 'absolute',
                    top: '-18px',
                    right: '12px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(10, 26, 58, 0.92)',
                    border: '1px solid rgba(63, 169, 245, 0.4)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(22, 86, 214, 0.3)',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '9999px', backgroundColor: 'rgba(34, 197, 94, 0.25)' }}>
                    <Zap size={13} color="#22c55e" />
                  </span>
                  <span>0.3s Voice Trigger</span>
                </div>

                {/* Main Hero Hardware Photo Frame */}
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    background: 'linear-gradient(145deg, rgba(20, 42, 82, 0.8) 0%, rgba(10, 26, 58, 0.95) 100%)',
                    boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    padding: '12px'
                  }}
                >
                  <div style={{ borderRadius: '1.25rem', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src="/images/home/hero-hardware.jpg" 
                      alt="Rhizobee Smart Payment Hardware - 4G Soundbox, Android POS Terminal and QR Code Standee" 
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxHeight: '380px'
                      }}
                    />

                    {/* Gradient Overlay for Sleek Contrast */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10, 26, 58, 0.85) 0%, rgba(10, 26, 58, 0.1) 40%, transparent 100%)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Overlay Label inside Photo */}
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '16px',
                        right: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: '#ffffff'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
                          Rhizobee Flagship Counter Suite
                        </div>
                        <div style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.75)' }}>
                          Soundbox 4G • Android POS • Dynamic QR Standee
                        </div>
                      </div>
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          backgroundColor: 'rgba(34, 197, 94, 0.25)',
                          border: '1px solid rgba(34, 197, 94, 0.5)',
                          color: '#4ade80',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span className="beacon-pulse-green" /> Live
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Left Badge */}
                <div 
                  className="animate-float-slow"
                  style={{
                    position: 'absolute',
                    bottom: '-18px',
                    left: '12px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(10, 26, 58, 0.95)',
                    border: '1px solid rgba(217, 164, 65, 0.5)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(217, 164, 65, 0.3)',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '9999px', backgroundColor: 'rgba(217, 164, 65, 0.25)' }}>
                    <ShieldCheck size={14} color="#fbbf24" />
                  </span>
                  <span>100% RBI &amp; PCI-DSS Level 1 Compliant</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PARTNER MARQUEE WITH REAL ACCREDITED PARTNER LOGOS
          ======================================================== */}
      <PartnerMarquee />

      {/* ========================================================
          3. HARDWARE & DIGITAL PRODUCT GALLERY (REAL PHOTOS)
          ======================================================== */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
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
            <ScrollReveal animation="fade-up" delay={0}>
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
            <ScrollReveal animation="fade-up" delay={120}>
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
            <ScrollReveal animation="fade-up" delay={240}>
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
            <ScrollReveal animation="fade-up" delay={360}>
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
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.16 }} />
        
        {/* Ambient backlight glow */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(22, 86, 214, 0.2) 0%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none'
          }}
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '3.5rem' }}>
              <span className="badge-tag" style={{ color: 'var(--sky)' }}>
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
                <div className="stat-card-elevated">
                  <div className="font-data" style={{ fontSize: '2.35rem', fontWeight: 700, color: 'var(--gold-soft)', letterSpacing: '-0.02em' }}>
                    <AnimatedCounter value={item.stat} />
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginTop: '0.5rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '0.4rem', lineHeight: 1.45 }}>
                    {item.desc}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. BUILT FOR EVERY STAGE OF BUSINESS
          ======================================================== */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '100%', textAlign: 'left', marginBottom: '3.5rem' }}>
              <span className="badge-tag">
                <span className="badge-dot" />
                WHO WE SERVE
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Built for every stage of business
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate)', lineHeight: 1.65, marginTop: '0.5rem', maxWidth: '38rem' }}>
                Whether you need single-terminal simplicity or complex multi-entity settlement architectures.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {businessStages.map((stage, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="fintech-card-interactive" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div className="icon-box-hover" style={{ padding: '0.6rem', borderRadius: '0.75rem', backgroundColor: 'var(--paper)' }}>
                        {stage.icon}
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--royal)', fontFamily: 'var(--font-data)' }}>
                        {stage.metric}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                      {stage.role}
                    </h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate)' }}>
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. TESTIMONIALS WITH ELEVATED CLIENT CARDS
          ======================================================== */}
      <section style={{ backgroundColor: 'var(--paper-dim)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '3.5rem' }}>
              <span className="badge-tag">
                <span className="badge-dot" />
                CLIENT VOICES
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                What our clients say about working with us
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate)', lineHeight: 1.6, marginTop: '0.5rem' }}>
                Trusted by merchants, distributors, and enterprise founders across India.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {testimonials.map((t, idx) => (
              <ScrollReveal key={t._id || idx} animation="fade-up" delay={idx * 150}>
                <div className="testimonial-card-elevated" style={{ height: '100%' }}>
                  {/* Subtle quote icon watermark in top corner */}
                  <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.1, pointerEvents: 'none' }}>
                    <Quote size={40} color="var(--royal)" />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1.25rem' }}>
                      {[...Array(t.extraData?.rating || 5)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <p style={{ fontSize: '0.975rem', lineHeight: 1.7, color: 'var(--slate)', fontStyle: 'italic', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>
                      "{t.description || t.quote}"
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--line)', paddingTop: '1.25rem' }}>
                    {/* Author Initial Avatar Ring */}
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, var(--royal) 0%, var(--sky) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        flexShrink: 0,
                        boxShadow: '0 4px 10px rgba(22, 86, 214, 0.25)'
                      }}
                    >
                      {(t.title || t.author || 'M').charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '0.975rem' }}>
                        {t.title || t.author}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--slate-dim)', marginTop: '0.15rem' }}>
                        {t.subtitle || t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
            backgroundColor: 'rgba(22, 86, 214, 0.25)',
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
