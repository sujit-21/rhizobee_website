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
  Headphones
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Small Business Owners',
      badge: 'Counter Retail',
      icon: <Store size={26} color="var(--gold)" />,
      subtitle: 'Kirana stores, neighborhood cafes, pharmacies, salons, and local retail',
      desc: 'Busy neighborhood merchants need zero-friction tools that eliminate cashier doubt and keep lines moving quickly.',
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
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', maxWidth: '48rem', textAlign: 'center' }}>
          <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
            <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
            Industry Specialization
          </span>

          <h1 style={{ fontSize: '3.15rem', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '1.25rem', lineHeight: 1.15 }}>
            Digital payment solutions for <span className="text-gradient">every stage of business</span>
          </h1>

          <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)' }}>
            From single-counter retail to enterprise omnichannel chains, Rhizobee aligns payment technology to the exact scale of your operations.
          </p>

          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 1.75rem' }}>
              Find Your Solution
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILED INDUSTRY SECTIONS */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {industries.map((ind, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  backgroundColor: idx % 2 === 0 ? 'var(--paper)' : '#ffffff',
                  border: '1px solid var(--line)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                      {ind.icon}
                    </div>
                    <span className="font-data" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--royal)', padding: '0.25rem 0.65rem', borderRadius: '9999px', backgroundColor: '#ffffff' }}>
                      {ind.badge}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.85rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                    {ind.title}
                  </h2>
                  <div style={{ fontSize: '0.9rem', color: 'var(--royal)', fontWeight: 500, marginBottom: '1rem' }}>
                    {ind.subtitle}
                  </div>
                  <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                    {ind.desc}
                  </p>
                  <Link to="/contact" className="btn-royal" style={{ fontSize: '0.85rem' }}>
                    Get Started for {ind.title} <ArrowRight size={14} />
                  </Link>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1.25rem', border: '1px solid var(--line)' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem', fontFamily: 'var(--font-data)' }}>
                    Tailored Capabilities
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {ind.solutions.map((sol, sIdx) => (
                      <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} color="var(--royal)" style={{ shrink: 0, marginTop: '0.2rem' }} />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <PartnerMarquee 
        title="Backed by leading banks and payment aggregators" 
        subtitle="Regulated infrastructure trusted by merchants across every Indian state." 
      />

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '5.5rem 1.25rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Don't see your business type listed?
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
            We customize hardware deployments and aggregator routing for specialized commerce workflows.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Speak with a Specialist <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
