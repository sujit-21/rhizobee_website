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
  ShieldAlert,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ZoompeBanner from '../components/ZoompeBanner';
import FaqAccordion from '../components/FaqAccordion';

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: 'gateway',
      title: 'Payment Gateway Solutions',
      icon: <CreditCard size={28} color="var(--royal)" />,
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
      id: 'qr',
      title: 'QR Code Payments',
      icon: <QrCode size={28} color="var(--royal)" />,
      tagline: 'Instant counter payment with zero friction',
      desc: 'Give your shoppers the quickest way to pay at the counter. Display interoperable UPI QR codes on physical standees, cash counter displays, or digital POS screens for immediate reconciliation.',
      highlights: [
        'Interoperable with all UPI apps across India',
        'Dynamic QR generation for precise billing amounts and invoices',
        'Instant payment notification via SMS and merchant app',
        'Durable, weather-resistant counter standees with custom merchant branding',
        'Zero setup fee with immediate QR generation during onboarding'
      ]
    },
    {
      id: 'soundbox',
      title: 'Soundbox Solutions',
      icon: <Volume2 size={28} color="var(--royal)" />,
      tagline: 'Real-time bilingual voice alerts that prevent counter fraud',
      desc: 'Eliminate confusion and fake payment screenshots at busy counters. Our portable soundbox immediately broadcasts successful transaction amounts in loud, clear audio within 1.5 seconds.',
      highlights: [
        'Multi-lingual voice announcements in English, Hindi, and regional languages',
        'Dual SIM 4G connectivity with automatic failover network switching',
        'High-capacity rechargeable battery lasting up to 4 days on a single charge',
        'High-decibel speaker designed for noisy retail markets and bazaars',
        'Replay button to re-verify the last received payment at any time'
      ]
    },
    {
      id: 'pos',
      title: 'POS Devices',
      icon: <Smartphone size={28} color="var(--royal)" />,
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
      id: 'ppi',
      title: 'PPI Wallet Solutions',
      icon: <Wallet size={28} color="var(--royal)" />,
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
      tagline: 'Instant gifting and rewards infrastructure for enterprise growth',
      desc: 'Tap into an extensive catalog of over 200+ prominent national brands. Issue e-gift vouchers programmatically for consumer rewards, employee milestones, or channel sales incentives.',
      highlights: [
        'Catalog featuring Amazon, Flipkart, Myntra, Swiggy, Zomato, Croma, and more',
        'Instant digital delivery via SMS, WhatsApp, and email APIs',
        'Bulk generation tools for festival bonuses and corporate gifting',
        'Custom brand voucher white-labeling for your own retail chain',
        'Granular redemption tracking and unredeemed liability reporting'
      ]
    },
    {
      id: 'switch',
      title: 'Payment Switch',
      icon: <Cpu size={28} color="var(--royal)" />,
      tagline: 'High-throughput payment orchestration and routing switch',
      desc: 'Our enterprise switch dynamically assesses bank uptime, gateway performance, and interchange costs in real-time, routing transactions through the most reliable rails with negligible latency.',
      highlights: [
        'Dynamic intelligent failover routing reducing transaction failure rates by up to 22%',
        'Handles over 500,000 daily transactions with 99.98% platform reliability',
        'Unified settlement dashboard reconciling disparate aggregator streams',
        'Webhook notification engine with guaranteed delivery and retry buffers',
        'Custom routing rule engine by card BIN, transaction ticket size, and merchant category'
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
      title: 'Digital KYC & Agreement',
      desc: 'Submit your business registration and bank details digitally for accelerated compliance clearance and underwriting.'
    },
    {
      step: '03',
      title: 'Hardware Dispatch & Setup',
      desc: 'Pre-configured Soundboxes and POS terminals are dispatched directly to your store locations, ready to turn on and accept payments.'
    },
    {
      step: '04',
      title: 'Go-Live & Ongoing Support',
      desc: 'Start collecting payments immediately with real-time settlement tracking on your merchant portal and 24/7 technical oversight.'
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', maxWidth: '48rem', textAlign: 'center' }}>
          <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
            <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
            Services &amp; Technologies
          </span>

          <h1 style={{ fontSize: '3.15rem', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '1.25rem', lineHeight: 1.15 }}>
            Payment technology built for <span className="text-gradient">how you do business</span>
          </h1>

          <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)' }}>
            From in-store checkout speed to online payment conversions and retailer distribution, Rhizobee delivers modular, end-to-end payment products.
          </p>

          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 1.75rem' }}>
              Request Terminal / Gateway
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {serviceDetails.map((s, idx) => (
              <div 
                key={s.id} 
                id={s.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  backgroundColor: idx % 2 === 0 ? 'var(--paper)' : '#ffffff',
                  border: '1px solid var(--line)'
                }}
              >
                <div>
                  <div style={{ display: 'inline-flex', padding: '0.75rem', borderRadius: '1rem', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '1.25rem' }}>
                    {s.icon}
                  </div>
                  <h2 style={{ fontSize: '1.85rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                    {s.title}
                  </h2>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--royal)', marginBottom: '1rem' }}>
                    {s.tagline}
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                    {s.desc}
                  </p>
                  <Link 
                    to="/contact" 
                    className="btn-royal"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Deploy This Solution <ArrowRight size={15} />
                  </Link>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1.25rem', border: '1px solid var(--line)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem', fontFamily: 'var(--font-data)' }}>
                    Key Capabilities
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {s.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color="var(--royal)" style={{ shrink: 0, marginTop: '0.2rem' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZOOMPE SECTION */}
      <ZoompeBanner />

      {/* STRAIGHTFORWARD ONBOARDING JOURNEY */}
      <section style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto 4rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Deployment Workflow
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              A straightforward path from enquiry to live payments
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)', marginTop: '0.75rem' }}>
              We eliminate bureaucratic delays with streamlined digital processes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {steps.map((st, idx) => (
              <div key={idx} className="feature-card" style={{ position: 'relative' }}>
                <span className="font-data" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', display: 'block', marginBottom: '0.75rem' }}>
                  {st.step}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <PartnerMarquee 
        title="Backed by leading banks and payment aggregators" 
        subtitle="Interoperable rails and certified switch integrations ensuring your money moves reliably."
      />

      {/* FAQS */}
      <FaqAccordion />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '5.5rem 1.25rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Not sure which payment solution fits your business?
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
            Share your monthly volume and operating model, and our specialists will configure the best solution for you.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Get Personalized Recommendation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
