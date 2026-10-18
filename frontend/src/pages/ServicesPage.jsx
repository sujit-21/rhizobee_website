import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  QrCode, 
  Volume2, 
  Smartphone, 
  Wallet, 
  Gift, 
  Repeat, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ZoompeBanner from '../components/ZoompeBanner';
import FaqAccordion from '../components/FaqAccordion';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: 'gateway',
      title: 'Payment Gateway Solutions',
      icon: <CreditCard size={28} color="var(--royal)" />,
      image: '/images/services/gateway-dashboard.jpg',
      badge: 'Web & Mobile APIs',
      tagline: 'High-conversion, developer-friendly checkout engine',
      desc: 'Deliver a fluid payment experience on your web and mobile applications. Rhizobee’s gateway supports all leading Indian payment instruments with dynamic routing that maximizes success rates.',
      highlights: [
        'Cards (Visa, Mastercard, RuPay, Amex)',
        'UPI Intent, Collect, and Dynamic QR (Google Pay, PhonePe, Paytm)',
        'Net Banking integrations with 50+ top commercial and cooperative banks',
        'Pre-integrated Buy Now Pay Later (BNPL) and cardless EMI',
        'PCI-DSS Level 1 compliant card tokenization vault'
      ]
    },
    {
      id: 'soundbox',
      title: 'Soundbox Solutions',
      icon: <Volume2 size={28} color="var(--royal)" />,
      image: '/images/home/product-soundbox.jpg',
      badge: '4G Audio Verification',
      tagline: 'Real-time bilingual voice alerts that prevent counter fraud',
      desc: 'Eliminate confusion and fake payment screenshots at busy counters. Our portable soundbox immediately broadcasts successful transaction amounts in loud, clear audio within 0.3 seconds.',
      highlights: [
        'Multi-lingual voice announcements in English, Hindi, and regional languages',
        'Dual SIM 4G connectivity with automatic failover network switching',
        'High-capacity rechargeable battery lasting up to 7 days on a single charge',
        'High-decibel speaker designed for noisy retail markets and bazaars',
        'Replay button to re-verify the last received payment at any time'
      ]
    },
    {
      id: 'pos',
      title: 'POS Devices & Smart Terminals',
      icon: <Smartphone size={28} color="var(--royal)" />,
      image: '/images/home/product-pos.jpg',
      badge: 'Android Touch Terminals',
      tagline: 'Smart Android terminals engineered for modern retail',
      desc: 'Equip your cashiers with sleek Android POS terminals that do more than just swipe cards. Handle inventory lookups, print GST receipts, and accept contactless tap payments in seconds.',
      highlights: [
        'Fast thermal receipt printer with custom invoice headers and merchant logo',
        'Contactless NFC tap-to-pay, EMV chip, and magnetic stripe reader',
        '4G SIM + high-speed Wi-Fi connectivity for uninterrupted store operations',
        'Android-based OS capable of running custom store billing and inventory apps',
        'End-of-day automated batch closing and ledger reconciliation'
      ]
    },
    {
      id: 'qr',
      title: 'QR Code Payments',
      icon: <QrCode size={28} color="var(--royal)" />,
      image: '/images/home/retail-merchant.jpg',
      badge: 'Instant QR Acceptance',
      tagline: 'Instant counter payment with zero friction',
      desc: 'Give your shoppers the quickest way to pay at the counter. Display interoperable UPI QR codes on physical standees, cash counter displays, or digital POS screens for immediate reconciliation.',
      highlights: [
        'Interoperable with all UPI apps across India (PhonePe, GPay, Paytm, BHIM)',
        'Dynamic QR generation for precise billing amounts and invoices',
        'Instant payment notification via SMS and merchant app',
        'Durable, weather-resistant counter standees with custom merchant branding',
        'Zero setup fee with immediate QR generation during onboarding'
      ]
    },
    {
      id: 'ppi',
      title: 'PPI Wallet Solutions & Smart Cards',
      icon: <Wallet size={28} color="var(--royal)" />,
      image: '/images/home/product-cards.jpg',
      badge: 'Prepaid Digital Vaults',
      tagline: 'Custom prepaid wallets and co-branded card programs',
      desc: 'Build customer loyalty or automate corporate allowances with flexible Prepaid Payment Instruments (PPI). Co-branded with regulated banking partners in full RBI compliance.',
      highlights: [
        'Semi-closed digital wallets for merchant platforms and franchise networks',
        'Corporate expense and meal allowance prepaid digital cards',
        'Closed-loop loyalty cashback and store refund management',
        'Configurable transaction limits, merchant category restrictions, and expiry',
        'Real-time transaction authorization and automated balance top-ups'
      ]
    },
    {
      id: 'vouchers',
      title: 'Brand Gift Vouchers & Gift Cards',
      icon: <Gift size={28} color="var(--royal)" />,
      image: '/images/home/hero-hardware.jpg',
      badge: 'Enterprise Rewards',
      tagline: 'Instant gifting and rewards infrastructure for enterprise growth',
      desc: 'Tap into an extensive catalog of over 200+ prominent national brands. Issue e-gift vouchers programmatically for consumer rewards, employee milestones, or channel sales incentives.',
      highlights: [
        'Catalog featuring Amazon, Flipkart, Myntra, Swiggy, Zomato, Croma, and more',
        'Instant digital delivery via SMS, WhatsApp, and email APIs',
        'Bulk generation tools for festival bonuses and corporate gifting',
        'Custom brand voucher white-labeling for your own retail chain',
        'Granular redemption tracking and unredeemed liability reporting'
      ]
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      desc: 'Our payment architects analyze your business model, counter setup, and current transaction volumes to recommend the ideal mix.'
    },
    {
      step: '02',
      title: 'Compliance & Onboarding',
      desc: 'Paperless digital KYC and compliance checks verified directly with our regulated banking partners in 24 hours.'
    },
    {
      step: '03',
      title: 'Deployment & Dispatch',
      desc: 'Hardware is provisioned, soundbox SIMs activated, and POS terminals shipped directly to your store locations across India.'
    },
    {
      step: '04',
      title: 'Live Transactions & Support',
      desc: 'Start collecting customer payments with real-time settlement tracking and 24/7 dedicated merchant concierge support.'
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6.5rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            right: '-6rem',
            top: '-6rem',
            height: '30rem',
            width: '30rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(22, 86, 214, 0.35)',
            filter: 'blur(95px)',
            pointerEvents: 'none'
          }} 
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '76rem', textAlign: 'center' }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
              <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
              End-to-End Payment Solutions
            </span>

            <h1 
              className="heading-single-line"
              style={{ fontSize: 'clamp(1.65rem, 3.1vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 1.2 }}
            >
              Hardware, software, and distribution <span className="text-gradient">all in one place</span>
            </h1>

            <p 
              className="subheading-balanced"
              style={{ marginTop: '1.25rem', fontSize: 'clamp(0.95rem, 1.6vw, 1.12rem)', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)', maxWidth: '58rem' }}
            >
              From physical counter terminals and 4G voice soundboxes to online payment gateways and PPI wallets, explore our complete catalog of digital financial technology.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                Deploy for Your Business <ArrowRight size={16} />
              </Link>
              <a href="#services-catalog" className="btn-outline-white btn-shimmer" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                View All Services
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DETAILED SERVICES SHOWCASE WITH REAL PHOTOS */}
      <section id="services-catalog" style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {serviceDetails.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <ScrollReveal key={service.id} animation="fade-up" delay={idx * 50}>
                  <div 
                    id={service.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '3.5rem',
                      alignItems: 'center',
                      backgroundColor: 'var(--paper)',
                      borderRadius: '1.75rem',
                      padding: '2.5rem',
                      border: '1px solid var(--line)'
                    }}
                  >
                    {/* Visual Media Column */}
                    <div style={{ order: isEven ? 2 : 1, position: 'relative' }}>
                      <div 
                        style={{
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          border: '1px solid var(--line)',
                          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
                          backgroundColor: '#0b1528',
                          height: '320px'
                        }}
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                          }} 
                        />
                      </div>
                      <span 
                        style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          padding: '6px 14px',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(10, 26, 58, 0.9)',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.6rem', borderRadius: '0.75rem', backgroundColor: '#ffffff', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {service.icon}
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--royal)', fontFamily: 'var(--font-data)' }}>
                          Enterprise Grade
                        </span>
                      </div>

                      <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                        {service.title}
                      </h2>
                      <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--royal)', marginBottom: '1rem' }}>
                        {service.tagline}
                      </p>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                        {service.desc}
                      </p>

                      <div style={{ marginBottom: '2rem' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                          Key Technical Highlights
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {service.highlights.map((h, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                              <CheckCircle2 size={16} color="var(--royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                        Get Started with {service.title} <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <PartnerMarquee />

      {/* HOW TO ONBOARD (STEPS) */}
      <section style={{ backgroundColor: 'var(--paper-dim)', paddingTop: '6rem', paddingBottom: '6rem', borderTop: '1px solid var(--line)' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '68rem', margin: '0 auto 4rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ justifyContent: 'center' }}>
                <span className="badge-dot" />
                HOW IT WORKS
              </span>
              <h2 
                className="heading-single-line"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.35rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}
              >
                From consultation to live transactions in 4 steps
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {steps.map((s, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="fintech-card-interactive" style={{ height: '100%' }}>
                  <div className="font-data" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--royal)', marginBottom: '1rem' }}>
                    {s.step}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate)' }}>
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ZOOMPE BANNER */}
      <ZoompeBanner />

      {/* FAQS */}
      <FaqAccordion />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 1.25rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: '68rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
              <Sparkles size={14} color="var(--gold)" /> START TODAY
            </span>
            <h2 
              className="heading-single-line"
              style={{ fontSize: 'clamp(1.45rem, 2.6vw, 2.45rem)', fontWeight: 700, letterSpacing: '-0.025em', marginTop: '0.75rem' }}
            >
              Ready to modernize your counter checkouts?
            </h2>
            <p 
              className="subheading-balanced subheading-single-line-desktop"
              style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.78)', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', lineHeight: 1.65, maxWidth: '58rem' }}
            >
              Talk to our product specialists to choose the right devices, commercial terms, and settlement schedules.
            </p>
            <div style={{ marginTop: '2.25rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Talk to Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
