import React from 'react';
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
  Repeat, 
  BarChart3, 
  Headphones, 
  Layers, 
  Sparkles,
  Building2,
  Store,
  Users2,
  Briefcase
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ZoompeBanner from '../components/ZoompeBanner';
import FaqAccordion from '../components/FaqAccordion';

export default function HomePage() {
  const solutions = [
    {
      title: 'Payment Gateway Solutions',
      icon: <CreditCard size={24} color="var(--royal)" />,
      desc: 'Seamless, high-conversion online checkouts with cards, UPI, net banking, and EMI for web and mobile platforms.'
    },
    {
      title: 'QR Code Payments',
      icon: <QrCode size={24} color="var(--royal)" />,
      desc: 'Interoperable UPI and Bharat QR codes that let customers scan and pay instantly with zero contact friction.'
    },
    {
      title: 'Soundbox Solutions',
      icon: <Volume2 size={24} color="var(--royal)" />,
      desc: 'Instant bilingual voice verification for every UPI transaction, reducing disputes and boosting counter speed.'
    },
    {
      title: 'POS Devices',
      icon: <Smartphone size={24} color="var(--royal)" />,
      desc: 'Smart Android terminals and portable swipe machines supporting contactless NFC, chip & PIN, and receipt printing.'
    },
    {
      title: 'PPI Wallet Solutions',
      icon: <Wallet size={24} color="var(--royal)" />,
      desc: 'Semi-closed & co-branded prepaid digital wallets, campus cards, payroll disbursements, and corporate allowances.'
    },
    {
      title: 'Brand Gift Vouchers & Gift Cards',
      icon: <Gift size={24} color="var(--royal)" />,
      desc: 'Catalogue of 200+ popular brand gift cards and custom merchant gift vouchers for rewards, sales incentives, and loyalty.'
    }
  ];

  const businessStages = [
    {
      role: 'Small Business Owners',
      icon: <Store size={22} color="var(--gold)" />,
      desc: 'Single-counter kiranas, retail shops, and pharmacies looking for instant QR standees, Soundbox audio confirmations, and affordable POS machines.'
    },
    {
      role: 'SMEs',
      icon: <Store size={22} color="var(--royal)" />,
      desc: 'Fast-growing retailers, multi-brand outlets, and distributors requiring integrated payment terminals, automated day-end batch settlements, and GST invoicing.'
    },
    {
      role: 'MSMEs',
      icon: <Briefcase size={22} color="var(--sky)" />,
      desc: 'Manufacturing hubs, vendors, and regional traders requiring online payment gateway links, vendor payout systems, and reliable banking reconciliation.'
    },
    {
      role: 'Enterprises',
      icon: <Building2 size={22} color="var(--royal)" />,
      desc: 'Omnichannel brands and nationwide store networks requiring scalable switch routing, sub-merchant management, API-driven refunds, and customized SLAs.'
    },
    {
      role: 'Corporates',
      icon: <Users2 size={22} color="var(--gold)" />,
      desc: 'Large organizations requiring automated bulk vendor disbursements, employee meal & wellness prepaid wallets, and festive brand gift card programs.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* HERO SECTION */}
      <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '7rem' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.28 }} aria-hidden="true" />
        <div 
          style={{
            position: 'absolute',
            right: '-8rem',
            top: '-8rem',
            height: '28rem',
            width: '28rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(22, 86, 214, 0.3)',
            filter: 'blur(90px)'
          }}
          aria-hidden="true"
        />
        <div 
          style={{
            position: 'absolute',
            left: '-6rem',
            bottom: '0',
            height: '22rem',
            width: '22rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(217, 164, 65, 0.15)',
            filter: 'blur(90px)'
          }}
          aria-hidden="true"
        />

        <div className="container-custom" style={{ position: 'relative' }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            {/* Left Copy */}
            <div>
              <span className="badge-tag" style={{ color: 'var(--royal)' }}>
                <span className="badge-dot" />
                Fintech &amp; Digital Payment Solutions
              </span>

              <h1 style={{ fontSize: '3.25rem', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.03em', marginTop: '1.25rem' }}>
                Secure payments.{' '}
                <span className="text-gradient">Smart solutions.</span>
              </h1>

              <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.72)', maxWidth: '36rem' }}>
                Rhizobee Innovations equips small business owners, SMEs, MSMEs, enterprises, and corporates with secure, scalable digital payment technology — payment gateway, QR, soundbox, POS, and PPI wallet solutions, delivered through our partnerships with leading banks and payment aggregators.
              </p>

              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn-royal" style={{ padding: '0.875rem 1.75rem', fontSize: '0.95rem' }}>
                  Talk to Our Team
                </Link>
                <Link to="/services" className="btn-outline-white" style={{ padding: '0.875rem 1.75rem', fontSize: '0.95rem' }}>
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust Badges */}
              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--gold)" /> Secure &amp; Reliable
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--gold)" /> Fast &amp; Seamless
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--gold)" /> Built for Growth
                </span>
              </div>
            </div>

            {/* Right Interactive Mockup / Icon Mark */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  borderRadius: '1.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  padding: '2.5rem',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 25px 60px -15px rgba(22, 86, 214, 0.35)'
                }}
              >
                <img 
                  src="/images/rhizobee-icon.png" 
                  alt="Rhizobee Innovations mark" 
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    height: '14rem',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(22, 86, 214, 0.45))'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                <div 
                  style={{
                    marginTop: '2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem'
                  }}
                >
                  {['Payment Gateway', 'QR Code Payments', 'Soundbox & POS', 'PPI Wallets'].map((item, idx) => (
                    <div 
                      key={idx}
                      style={{
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.75rem 1rem',
                        textAlign: 'center',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.85)'
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <PartnerMarquee />

      {/* ZOOMPE SECTION */}
      <ZoompeBanner />

      {/* CORE VALUE PILLARS */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Strategic Foundation
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              A fintech partner built for India's digital payments economy
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)', lineHeight: 1.6, marginTop: '0.75rem' }}>
              We unite regulated banking infrastructure with merchant-friendly hardware and cloud APIs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                title: 'Backed by trusted partners',
                desc: 'Delivered in synergy with India’s leading banks, certified switches, and RBI-regulated payment aggregators.',
                badge: 'Bank Grade'
              },
              {
                title: 'Compliance built in',
                desc: 'Adhering to strict PCI-DSS standards, end-to-end tokenization, and multi-factor authentication protocols.',
                badge: '100% Compliant'
              },
              {
                title: 'One partner, every payment method',
                desc: 'From UPI dynamic QR & audio soundbox to smart Android POS and online payment gateways.',
                badge: 'Omni-Channel'
              },
              {
                title: 'Built for every business size',
                desc: 'Tailored solutions scaling from single-counter retail shops to nationwide retail conglomerates.',
                badge: 'Scalable'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="feature-card">
                <span 
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.725rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-data)',
                    backgroundColor: 'var(--paper)',
                    color: 'var(--royal)',
                    marginBottom: '1rem'
                  }}
                >
                  {pillar.badge}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.8875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS AT THE COUNTER & CHECKOUT */}
      <section style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="badge-tag">
                <span className="badge-dot" />
                Product Portfolio
              </span>
              <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Payment solutions built for every counter and checkout
              </h2>
            </div>
            <Link to="/services" className="btn-royal">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {solutions.map((item, idx) => (
              <div key={idx} className="feature-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div 
                    style={{
                      height: '3.25rem',
                      width: '3.25rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(22, 86, 214, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--paper-dim)' }}>
                  <Link 
                    to="/contact" 
                    style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 600, 
                      color: 'var(--royal)', 
                      textDecoration: 'none', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.35rem' 
                    }}
                  >
                    Deploy for your business <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE METRICS & STATS */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '5.5rem', paddingBottom: '5.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto 3.5rem' }}>
            <span className="badge-tag" style={{ color: 'var(--sky)', justifyContent: 'center' }}>
              <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
              High Performance Engine
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              The infrastructure behind every transaction
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '0.75rem' }}>
              Built for resilient uptime, low transaction latency, and deep financial integration across India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { stat: '99.98%', label: 'Switch Uptime', desc: 'Fault-tolerant multi-bank architecture' },
              { stat: '10,000+', label: 'Active Merchants', desc: 'From local retail to enterprise chains' },
              { stat: '500,000+', label: 'Daily Transactions', desc: 'Processed with sub-second speeds' },
              { stat: '12+', label: 'Banking & PA Partners', desc: 'Direct clearing and settlement rails' },
              { stat: '19,000+', label: 'Pin Codes Served', desc: 'Pan-India merchant distribution' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  textAlign: 'center'
                }}
              >
                <div className="font-data" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--gold-soft)', letterSpacing: '-0.02em' }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff', marginTop: '0.5rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.35rem' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR EVERY STAGE OF BUSINESS */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Tailored Segments
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Built for every stage of business
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)', lineHeight: 1.6, marginTop: '0.75rem' }}>
              Whether you need single-terminal simplicity or complex multi-entity settlement architectures.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {businessStages.map((stage, idx) => (
              <div key={idx} className="feature-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'var(--paper)' }}>
                    {stage.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)' }}>
                    {stage.role}
                  </h3>
                </div>
                <p style={{ fontSize: '0.8875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: 'var(--paper-dim)', paddingTop: '5.5rem', paddingBottom: '5.5rem' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto 3rem' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Merchant Trust
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              What our clients say about working with us
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                quote: 'Deploying Rhizobee’s soundbox and POS terminals across our 45 retail outlets cut counter disputes to practically zero. Audio confirmations are instant and loud.',
                author: 'Ramesh Kulkarni',
                role: 'Director of Retail Operations, Maharashtra'
              },
              {
                quote: 'Their payment gateway integrated seamlessly with our custom shopping cart. Checkout conversion jumped by 14% thanks to smart UPI fallback routing.',
                author: 'Pooja Agarwal',
                role: 'Founder, D2C Lifestyle Brand, Delhi NCR'
              },
              {
                quote: 'Zoompe has transformed our regional agent network. Being able to offer banking cash-out, BBPS, and ticketing all on one portal brought real income growth to our CSPs.',
                author: 'Anand Verma',
                role: 'Fintech Distributor, Madhya Pradesh'
              }
            ].map((t, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', padding: '2rem', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--slate)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{t.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.95rem' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-dim)', marginTop: '0.2rem' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <FaqAccordion />

      {/* BOTTOM CTA BANNER */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div style={{ position: 'relative', maxWidth: '44rem', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-tag" style={{ color: 'var(--gold)', justifyContent: 'center' }}>
            <Sparkles size={14} color="var(--gold)" /> Get Started Today
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', marginTop: '1rem', lineHeight: 1.2 }}>
            Ready to modernise how your business runs?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.65, marginTop: '1rem' }}>
            Speak with our payment specialists today. We will guide you to the right mix of gateways, counter devices, and partner APIs.
          </p>
          <div style={{ marginTop: '2.25rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
              Talk to Our Team
            </Link>
            <Link to="/services" className="btn-outline-white" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
              Explore Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
