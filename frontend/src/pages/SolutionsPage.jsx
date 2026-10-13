import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  CreditCard, 
  QrCode, 
  Volume2, 
  Smartphone, 
  Wallet, 
  Gift, 
  ShieldCheck, 
  Lock, 
  Cpu, 
  BarChart2, 
  Sparkles
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';

export default function SolutionsPage() {
  const solutionPackages = [
    {
      title: 'In-Store Counter Acceptance',
      badge: 'Physical Retail',
      icon: <Volume2 size={24} color="var(--royal)" />,
      desc: 'Complete suite for brick-and-mortar storefronts, supermarkets, and restaurants. Combines high-speed Soundboxes for voice confirmation with 4G Android POS devices for card taps and receipt printing.',
      features: [
        'Instant voice verification in local regional languages',
        'Contactless NFC card tap & chip reader',
        'Built-in thermal printing for itemized bills',
        'Unified end-of-day reconciliation across all terminals'
      ],
      idealFor: 'Supermarkets, pharmacies, clothing boutiques, restaurants, quick-service counters'
    },
    {
      title: 'Digital & Omnichannel Checkout',
      badge: 'Online Commerce',
      icon: <CreditCard size={24} color="var(--royal)" />,
      desc: 'Single developer-friendly integration connecting your website or mobile application to India’s top payment rails with intelligent dynamic fallback routing.',
      features: [
        'Cards, UPI collect, UPI intent, and 50+ net banking channels',
        'Customizable pre-built drop-in checkout modal',
        'Instant webhook callbacks for order fulfillment',
        'Automated refund routing and dispute mitigation'
      ],
      idealFor: 'E-commerce portals, SaaS businesses, educational institutions, service apps'
    },
    {
      title: 'Retailer Network & Rural Distribution',
      badge: 'Agent Distribution',
      icon: <Smartphone size={24} color="var(--gold)" />,
      desc: 'Powered by the Zoompe Retailer Portal, allowing retailers and CSP points to convert their counters into neighborhood banking kiosks with AePS, Micro ATM, and bill payments.',
      features: [
        'Aadhaar Enabled Payment System (AePS) cash withdrawal',
        'Domestic Money Transfer (DMT) across all Indian banks',
        'Bharat Bill Payment System (BBPS) electricity, water, gas bills',
        'Attractive agent commissions with instant ledger crediting'
      ],
      idealFor: 'Kirana stores, CSP kiosks, village entrepreneurs, regional distribution agents'
    },
    {
      title: 'Corporate Rewards & PPI Wallets',
      badge: 'Enterprise & HR',
      icon: <Wallet size={24} color="var(--royal)" />,
      desc: 'Semi-closed digital wallets and branded gift voucher programs tailored for employee benefits, vendor payouts, customer acquisition rewards, and loyalty programs.',
      features: [
        '200+ top brand vouchers (Amazon, Flipkart, Swiggy, Zomato)',
        'Co-branded corporate prepaid expense cards',
        'Instant digital distribution via API or batch excel uploads',
        'Real-time spending reports and unredeemed balances tracking'
      ],
      idealFor: 'Enterprises, corporate HR teams, loyalty platform providers, marketing agencies'
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
            Integrated Architecture
          </span>

          <h1 style={{ fontSize: '3.15rem', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '1.25rem', lineHeight: 1.15 }}>
            The complete payment solution, <span className="text-gradient">one merchant relationship</span>
          </h1>

          <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)' }}>
            We bring all payment modalities — soundboxes, POS terminals, dynamic QR, payment gateways, and prepaid wallets — together into a cohesive ecosystem.
          </p>

          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 1.75rem' }}>
              Explore Custom Package
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTION PACKAGES */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {solutionPackages.map((pkg, idx) => (
              <div 
                key={idx} 
                className="feature-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  padding: '2.25rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: 'rgba(22, 86, 214, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {pkg.icon}
                    </div>
                    <span className="font-data" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', backgroundColor: 'var(--paper)', color: 'var(--royal)', fontWeight: 600 }}>
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                    {pkg.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                    {pkg.desc}
                  </p>

                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.85rem', fontFamily: 'var(--font-data)' }}>
                    Included Features
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color="var(--royal)" style={{ shrink: 0, marginTop: '0.15rem' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--paper-dim)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-dim)', marginBottom: '0.85rem' }}>
                    <strong>Ideal for:</strong> {pkg.idealFor}
                  </div>
                  <Link 
                    to="/contact" 
                    className="btn-royal"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem' }}
                  >
                    Deploy Solution <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & BANKING BACKING */}
      <section style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Institutional Security
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Solutions backed by regulated banking partners
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)', marginTop: '0.75rem' }}>
              Enterprise grade encryption, zero trust routing, and real-time fraud mitigation on every rupee.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: <Lock size={22} color="var(--royal)" />,
                title: 'PCI-DSS Compliant Rails',
                desc: 'All sensitive card data is stored and handled within Level 1 certified token vaults.'
              },
              {
                icon: <ShieldCheck size={22} color="var(--gold)" />,
                title: 'RBI Tokenization & 2FA',
                desc: 'Compliant with all Reserve Bank of India mandates on recurring mandates and device binding.'
              },
              {
                icon: <Cpu size={22} color="var(--royal)" />,
                title: 'Automated Fraud Engine',
                desc: 'Machine-learning heuristics detecting velocity anomalies and stolen credential usage.'
              },
              {
                icon: <BarChart2 size={22} color="var(--gold)" />,
                title: 'Consolidated Ledgers',
                desc: 'T+1 or Instant settlements with clear breakdowns of MDR, GST, and net merchant balances.'
              }
            ].map((sec, idx) => (
              <div key={idx} className="feature-card">
                <div style={{ marginBottom: '1rem' }}>
                  {sec.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                  {sec.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <PartnerMarquee 
        title="Backed by leading banks and payment aggregators" 
        subtitle="Our architecture interfaces directly with national clearing houses and payment aggregators."
      />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '5.5rem 1.25rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Not sure which solution fits your business?
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
            Our payment solution architects will assess your point of sale, web traffic, or disbursement needs.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Schedule Technical Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
