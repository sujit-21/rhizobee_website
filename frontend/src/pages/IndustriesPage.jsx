import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Building2, 
  Briefcase, 
  Users2, 
  Factory, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Receipt,
  Headphones,
  Sparkles,
  Zap
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import ScrollReveal from '../components/ScrollReveal';

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Small Business Owners',
      badge: 'Counter Retail',
      image: '/images/home/product-soundbox.jpg',
      icon: <Store size={26} color="var(--gold)" />,
      subtitle: 'Kirana stores, neighborhood cafes, pharmacies, salons, and local retail',
      desc: 'Busy neighborhood merchants need zero-friction tools that eliminate cashier doubt and keep counter lines moving quickly.',
      solutions: [
        'Instant 4G Voice Soundbox announcing UPI receipts in regional dialects',
        'Weatherproof dynamic & static UPI QR standees',
        'Affordable portable swipe terminals with zero rental locks',
        'Daily morning settlement direct to current or savings accounts'
      ]
    },
    {
      title: 'SMEs',
      badge: 'Growing Brands',
      image: '/images/home/product-pos.jpg',
      icon: <Store size={26} color="var(--royal)" />,
      subtitle: 'Multi-outlet retailers, regional apparel brands, lifestyle stores, and hospitality',
      desc: 'Expanding retail chains that require consistent payment experiences, centralized settlement reports, and fast cashier training.',
      solutions: [
        'Smart 4G Android POS devices with integrated billing and barcode scanners',
        'Multi-counter and multi-branch transaction tracking dashboard',
        'Custom invoice receipt printing with store branding and GST compliance',
        'Dedicated onboarding manager and priority field support'
      ]
    },
    {
      title: 'MSMEs',
      badge: 'Manufacturing & B2B',
      image: '/images/services/gateway-dashboard.jpg',
      icon: <Factory size={26} color="var(--sky)" />,
      subtitle: 'Manufacturing units, industrial suppliers, distributors, and logistics firms',
      desc: 'B2B commerce entities dealing with vendor invoicing, partial deposits, and large ticket NEFT/RTGS and card settlements.',
      solutions: [
        'Online Payment Gateway with shareable payment links via SMS & WhatsApp',
        'Corporate card acceptance with optimized interchange rates',
        'Automated payout APIs for instant vendor and supplier settlements',
        'Detailed T+1 settlement reconciliation and automated GST reports'
      ]
    },
    {
      title: 'Enterprises',
      badge: 'National Chains',
      image: '/images/solutions/enterprise-hub.jpg',
      icon: <Building2 size={26} color="var(--royal)" />,
      subtitle: 'Large retail conglomerates, omnichannel apparel, modern trade supermarkets',
      desc: 'High-volume national networks requiring ultra-low latency transaction switches, high availability SLAs, and custom ERP integration.',
      solutions: [
        'High-throughput transaction routing switch with multi-bank failover',
        'Custom POS software integrations with SAP, Oracle, and Microsoft Dynamics',
        'Sub-merchant onboarding and parent-child ledger architecture',
        '24/7 dedicated enterprise technical support and custom SLA agreements'
      ]
    },
    {
      title: 'Corporates',
      badge: 'Employee & Rewards',
      image: '/images/home/product-cards.jpg',
      icon: <Users2 size={26} color="var(--gold)" />,
      subtitle: 'Large institutions, tech firms, corporate campuses, and HR divisions',
      desc: 'Organizations looking to modernize employee perks, meal allowances, festive gifts, and partner channel incentives.',
      solutions: [
        'Co-branded PPI digital wallets and prepaid expense cards',
        '200+ brand gift vouchers (Amazon, Flipkart, Swiggy) with API issuance',
        'Tax-compliant meal, fuel, and wellness allowance distribution',
        'Granular allowance spending controls and unspent balance recovery'
      ]
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
              Industry Specialization
            </span>

            <h1 
              className="heading-single-line"
              style={{ fontSize: 'clamp(1.65rem, 3.1vw, 3rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 1.2 }}
            >
              Digital payment solutions for <span className="text-gradient">every stage of business</span>
            </h1>

            <p 
              className="subheading-balanced"
              style={{ marginTop: '1.25rem', fontSize: 'clamp(0.95rem, 1.5vw, 1.12rem)', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)', maxWidth: '62rem' }}
            >
              From single-counter retail kiranas to enterprise omnichannel chains, Rhizobee aligns payment technology to the exact scale of your operations.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                Find Your Industry Solution <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DETAILED INDUSTRY SECTIONS WITH PHOTOS */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {industries.map((ind, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 50}>
                  <div 
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
                    {/* Media Column */}
                    <div style={{ order: isEven ? 2 : 1, position: 'relative' }}>
                      <div 
                        style={{
                          borderRadius: '1.25rem',
                          overflow: 'hidden',
                          border: '1px solid var(--line)',
                          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
                          backgroundColor: '#0b1528',
                          height: '280px'
                        }}
                      >
                        <img 
                          src={ind.image} 
                          alt={ind.title} 
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
                        {ind.badge}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                        <div style={{ padding: '0.6rem', borderRadius: '0.75rem', backgroundColor: '#ffffff', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {ind.icon}
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--royal)', fontFamily: 'var(--font-data)' }}>
                          Tailored Deployment
                        </span>
                      </div>

                      <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                        {ind.title}
                      </h2>
                      <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--royal)', marginBottom: '0.85rem' }}>
                        {ind.subtitle}
                      </p>
                      <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                        {ind.desc}
                      </p>

                      <div style={{ marginBottom: '1.75rem' }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                          Recommended Payment Stack
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {ind.solutions.map((sol, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                              <CheckCircle2 size={16} color="var(--royal)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                        Deploy for {ind.title} <ArrowRight size={15} />
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

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 1.25rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: '68rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
              <Sparkles size={14} color="var(--gold)" /> CUSTOM FIT
            </span>
            <h2 
              className="heading-single-line"
              style={{ fontSize: 'clamp(1.45rem, 2.6vw, 2.45rem)', fontWeight: 700, letterSpacing: '-0.025em', marginTop: '0.75rem' }}
            >
              Find the perfect payment setup for your business
            </h2>
            <p 
              className="subheading-balanced subheading-single-line-desktop"
              style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.78)', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', lineHeight: 1.65, maxWidth: '68rem', margin: '0.85rem auto 0' }}
            >
              Our payment consultants work directly with your team to configure terminals, settlement terms, and gateway links.
            </p>
            <div style={{ marginTop: '2.25rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Schedule Industry Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
