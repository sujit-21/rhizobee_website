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
  Sparkles,
  Zap,
  Layers,
  Server
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ScrollReveal from '../components/ScrollReveal';

export default function SolutionsPage() {
  const solutionPackages = [
    {
      title: 'In-Store Counter Acceptance',
      badge: 'Physical Retail',
      image: '/images/home/retail-merchant.jpg',
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
      image: '/images/services/gateway-dashboard.jpg',
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
      image: '/images/home/product-soundbox.jpg',
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
      title: 'Enterprise FinOps & Corporate Switch',
      badge: 'High-Volume Enterprise',
      image: '/images/solutions/enterprise-hub.jpg',
      icon: <Server size={24} color="var(--royal)" />,
      desc: 'Multi-bank transaction orchestration switch with intelligent dynamic failovers, custom BIN routing, automated vendor disbursements, and deep ERP integration.',
      features: [
        'Sub-second transaction processing with 99.98% platform reliability',
        'Direct clearing integrations with India’s leading private & PSU banks',
        'Unified multi-entity ledger for automated franchisee settlements',
        '24/7 dedicated enterprise technical support and custom SLA agreements'
      ],
      idealFor: 'Enterprises, multi-brand chains, conglomerates, large fintech platforms'
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
            height: '28rem',
            width: '28rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(22, 86, 214, 0.35)',
            filter: 'blur(90px)',
            pointerEvents: 'none'
          }} 
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '76rem', textAlign: 'center' }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
              <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
              Integrated Payment Architecture
            </span>

            <h1 
              className="heading-single-line"
              style={{ fontSize: 'clamp(1.65rem, 3.1vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 1.2 }}
            >
              The complete payment solution, <span className="text-gradient">one merchant relationship</span>
            </h1>

            <p 
              className="subheading-balanced"
              style={{ marginTop: '1.25rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.12rem)', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)', maxWidth: '62rem' }}
            >
              We bring all payment modalities — soundboxes, POS terminals, dynamic QR, payment gateways, and enterprise switches — together into a unified, high-reliability architecture.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                Explore Custom Package <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SOLUTION PACKAGES GRID WITH PHOTOS */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.25rem' }}>
            {solutionPackages.map((pkg, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div 
                  className="product-showcase-card"
                  style={{ height: '100%', justifyContent: 'space-between' }}
                >
                  <div>
                    <div className="image-wrapper" style={{ height: '200px' }}>
                      <img src={pkg.image} alt={pkg.title} />
                      <span 
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(10, 26, 58, 0.88)',
                          color: '#ffffff',
                          fontSize: '0.725rem',
                          fontWeight: 600,
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                      >
                        {pkg.badge}
                      </span>
                    </div>

                    <div style={{ padding: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                        <div style={{ padding: '0.5rem', borderRadius: '0.65rem', backgroundColor: 'var(--paper)', border: '1px solid var(--line)' }}>
                          {pkg.icon}
                        </div>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)' }}>
                          {pkg.title}
                        </h3>
                      </div>

                      <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                        {pkg.desc}
                      </p>

                      <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '0.65rem' }}>
                          Key Architecture Features
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {pkg.features.map((f, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                              <CheckCircle2 size={16} color="var(--royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ backgroundColor: 'var(--paper)', padding: '0.85rem 1rem', borderRadius: '0.75rem', fontSize: '0.825rem', color: 'var(--slate)' }}>
                        <strong style={{ color: 'var(--ink)' }}>Ideal for:</strong> {pkg.idealFor}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '0 2rem 2rem' }}>
                    <Link to="/contact" className="btn-royal btn-shimmer" style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem' }}>
                      Deploy this Solution <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM */}
      <PartnerMarquee />

      {/* ENTERPRISE COMMAND SECTION */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.16 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            <ScrollReveal animation="fade-up">
              <span className="badge-tag" style={{ color: 'var(--sky)' }}>
                <Zap size={14} color="var(--sky)" /> HIGH-SPEED ROUTING
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Resilient infrastructure built for millions of daily transactions
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, marginTop: '1rem' }}>
                Our enterprise multi-bank switch dynamically balances traffic between ICICI, HDFC, Axis, SBI, and certified payment aggregators, providing real-time failover if any single rail experiences downtime.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ padding: '1rem 1.25rem', borderRadius: '0.85rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-soft)' }}>99.98%</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Platform Switch Uptime</div>
                </div>
                <div style={{ padding: '1rem 1.25rem', borderRadius: '0.85rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4ade80' }}>&lt; 250ms</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>Average Switch Latency</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div 
                style={{
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
                }}
              >
                <img 
                  src="/images/solutions/enterprise-hub.jpg" 
                  alt="Rhizobee enterprise fintech switch command center" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--paper)', padding: '6rem 1.25rem', textAlign: 'center', borderTop: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '68rem', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <Sparkles size={14} color="var(--royal)" /> BESPOKE ARCHITECTURE
            </span>
            <h2 
              className="heading-single-line"
              style={{ fontSize: 'clamp(1.45rem, 2.6vw, 2.45rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.025em', marginTop: '0.75rem' }}
            >
              Have unique checkout requirements?
            </h2>
            <p 
              className="subheading-balanced subheading-single-line-desktop"
              style={{ marginTop: '0.85rem', color: 'var(--slate)', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', lineHeight: 1.65, maxWidth: '58rem' }}
            >
              Our payment engineers design custom API wrappers, batch settlement structures, and white-labeled terminal solutions.
            </p>
            <div style={{ marginTop: '2.25rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Schedule Architecture Review <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
