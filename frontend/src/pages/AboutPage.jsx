import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Compass, HeartHandshake, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';

export default function AboutPage() {
  const defaultStats = [
    { _id: '1', title: '7', subtitle: 'Core payment solutions on one platform' },
    { _id: '2', title: '99.9%', subtitle: 'Transaction platform uptime' },
    { _id: '3', title: '24/7', subtitle: 'Merchant support availability' },
    { _id: '4', title: '100%', subtitle: 'Compliant merchant onboarding' }
  ];

  const [statsList, setStatsList] = useState(defaultStats);

  useEffect(() => {
    fetch('/api/content?tab=about&section=stats&status=active')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setStatsList(data.data);
        }
      })
      .catch(err => console.error('Failed to load stats from DB:', err));
  }, []);

  const principles = [
    {
      title: 'Compliance first',
      desc: 'In fintech, getting compliance and security right is part of doing the job well, not a secondary concern. We maintain strict adherence to RBI payment aggregator guidelines and PCI-DSS protocols.',
      icon: <Shield size={22} color="var(--royal)" />
    },
    {
      title: 'Financial inclusion',
      desc: 'Digital payments should empower every counter in India. Through our soundbox, QR devices, and the Zoompe retailer portal, we bring modern banking services to semi-urban and rural entrepreneurs.',
      icon: <HeartHandshake size={22} color="var(--gold)" />
    },
    {
      title: 'Partnership, not vendorship',
      desc: 'We do not simply drop hardware at your counter. We act as long-term financial technology allies, assisting with interchange optimization, terminal uptime, and day-to-day reconciliation.',
      icon: <Target size={22} color="var(--royal)" />
    },
    {
      title: 'Reliability at the counter',
      desc: 'When a queue is waiting, every second counts. Our payment routing switch and audio hardware are built for instant latency, ensuring transactions clear without friction.',
      icon: <Zap size={22} color="var(--gold)" />
    }
  ];

  const differentiators = [
    { title: 'Backed by trusted partners', desc: 'Direct technical routing with leading banks and RBI-licensed payment aggregators.' },
    { title: 'Compliance built in', desc: '256-bit encryption, tokenization engines, and automated risk scoring.' },
    { title: 'One partner, every payment method', desc: 'Cards, UPI, Net Banking, Wallets, Soundbox, and POS under one roof.' },
    { title: 'Built for every business size', desc: 'Custom configurations for sole proprietors, SMEs, and enterprise retail.' },
    { title: 'Real-time visibility', desc: 'Intuitive merchant dashboard providing unified settlement tracking and transaction analytics.' },
    { title: 'Dedicated merchant support', desc: 'Responsive multi-lingual customer care team resolving inquiries with rapid SLAs.' }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div 
          style={{
            position: 'absolute',
            right: '-6rem',
            top: '-6rem',
            height: '24rem',
            width: '24rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(22, 86, 214, 0.25)',
            filter: 'blur(80px)'
          }} 
        />

        <div className="container-custom" style={{ position: 'relative', maxWidth: '48rem', textAlign: 'center' }}>
          <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
            <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
            About Rhizobee Innovations
          </span>

          <h1 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '1.25rem', lineHeight: 1.15 }}>
            Simplifying digital payments for <span className="text-gradient">every kind of business</span>
          </h1>

          <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)' }}>
            Rhizobee Innovations Private Limited was founded to bridge the gap between financial institutions, payment gateways, and businesses across India. We deliver the hardware, software, and distribution channels merchants need to thrive.
          </p>

          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 1.75rem' }}>
              Connect with Leadership
            </Link>
            <Link to="/services" className="btn-outline-white" style={{ padding: '0.85rem 1.75rem' }}>
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* STATS / METRICS BAR (DIRECTLY BELOW HERO) */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', backgroundColor: '#ffffff' }}>
        <div className="container-custom" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {statsList.map((st, idx) => (
              <div key={st._id || idx} style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '2.65rem', fontWeight: 600, color: 'var(--royal)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                  {st.title}
                </p>
                <p style={{ marginTop: '0.45rem', fontSize: '0.875rem', lineHeight: 1.45, color: 'var(--slate)' }}>
                  {st.subtitle || st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '46rem', margin: '0 auto 4rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Our Purpose
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Built to bridge merchants, enterprises, and financial institutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="feature-card" style={{ padding: '2.25rem' }}>
              <div style={{ height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: 'rgba(22, 86, 214, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={22} color="var(--royal)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                Why we do this
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--slate)' }}>
                India is experiencing unprecedented growth in digital transaction volumes. Yet countless merchants still struggle with high failure rates, cumbersome reconciliation, and unreliable counter hardware. We solve this by delivering enterprise-grade payment infrastructure that any business can effortlessly deploy.
              </p>
            </div>

            <div className="feature-card" style={{ padding: '2.25rem' }}>
              <div style={{ height: '3rem', width: '3rem', borderRadius: '0.75rem', backgroundColor: 'rgba(217, 164, 65, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Compass size={22} color="var(--gold)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                Where we're headed
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--slate)' }}>
                Our vision is to build India’s most dependable payment distribution and orchestration network. By coupling our POS & Soundbox devices with the Zoompe Retailer Portal, we are empowering over 100,000 neighborhood retail hubs to offer full-fledged banking and ticketing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OPERATING PRINCIPLES */}
      <section style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Guiding Philosophy
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              The principles behind how we work
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {principles.map((p, idx) => (
              <div key={idx} className="feature-card">
                <div style={{ marginBottom: '1rem' }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.8875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM */}
      <PartnerMarquee 
        title="Backed by leading banks and payment aggregators" 
        subtitle="Through deep technical integrations, Rhizobee brings together the best financial networks in the country." 
      />

      {/* WHY PARTNERS GROW WITH US */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Merchant Advantage
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Why merchants and corporates choose to grow with us
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {differentiators.map((diff, idx) => (
              <div key={idx} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--line)', backgroundColor: 'var(--paper)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--royal)" /> {diff.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--slate)', paddingLeft: '1.65rem' }}>
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '5.5rem 1.25rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
            Want to know if we're the right payments partner for you?
          </h2>
          <p style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: 1.6 }}>
            Our team will walk you through customized commercial terms, terminal options, and integration timelines.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-royal" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Speak with Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
