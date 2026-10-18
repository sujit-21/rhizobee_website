import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Compass, 
  HeartHandshake, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award,
  Users2,
  Building,
  Sparkles
} from 'lucide-react';
import PartnerMarquee from '../components/PartnerMarquee';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';

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
      icon: <Shield size={24} color="var(--royal)" />
    },
    {
      title: 'Financial inclusion',
      desc: 'Digital payments should empower every counter in India. Through our soundbox, QR devices, and the Zoompe retailer portal, we bring modern banking services to semi-urban and rural entrepreneurs.',
      icon: <HeartHandshake size={24} color="var(--gold)" />
    },
    {
      title: 'Partnership, not vendorship',
      desc: 'We do not simply drop hardware at your counter. We act as long-term financial technology allies, assisting with interchange optimization, terminal uptime, and day-to-day reconciliation.',
      icon: <Target size={24} color="var(--royal)" />
    },
    {
      title: 'Reliability at the counter',
      desc: 'When a queue is waiting, every second counts. Our payment routing switch and audio hardware are built for instant latency, ensuring transactions clear without friction.',
      icon: <Zap size={24} color="var(--gold)" />
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
      {/* HERO SECTION WITH MISSION PHOTO */}
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
            <ScrollReveal animation="fade-up">
              <span className="badge-tag" style={{ color: 'var(--sky)' }}>
                <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
                About Rhizobee Innovations
              </span>

              <h1 style={{ fontSize: '3.25rem', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 1.15 }}>
                Simplifying digital payments for <span className="text-gradient">every kind of business</span>
              </h1>

              <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)' }}>
                Rhizobee Innovations Private Limited was founded to bridge the gap between financial institutions, payment gateways, and businesses across India. We deliver the hardware, software, and distribution channels merchants need to thrive.
              </p>

              <div style={{ marginTop: '2.25rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.875rem 1.85rem' }}>
                  Connect with Leadership <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline-white btn-shimmer" style={{ padding: '0.875rem 1.85rem' }}>
                  Explore Solutions
                </Link>
              </div>

              {/* Trust badges */}
              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} color="#4ade80" /> RBI Compliant
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={16} color="var(--gold-soft)" /> Bank-Grade Architecture
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Users2 size={16} color="var(--sky)" /> 10,000+ Merchants
                </span>
              </div>
            </ScrollReveal>

            {/* Right Photo Showcase */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ position: 'relative' }}>
                {/* Floating Top Badge */}
                <div 
                  className="animate-float"
                  style={{
                    position: 'absolute',
                    top: '-16px',
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
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <span className="beacon-pulse-green" />
                  <span>Pan-India Fintech Rail</span>
                </div>

                <div 
                  style={{
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    background: 'linear-gradient(145deg, rgba(20, 42, 82, 0.8) 0%, rgba(10, 26, 58, 0.95) 100%)',
                    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                    padding: '10px'
                  }}
                >
                  <div style={{ borderRadius: '1.25rem', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src="/images/about/about-mission.jpg" 
                      alt="Rhizobee Innovations fintech team and digital payment map of India"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxHeight: '360px'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10, 26, 58, 0.85) 0%, transparent 60%)',
                        pointerEvents: 'none'
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: '14px', left: '16px', color: '#ffffff' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Rhizobee Fintech Hub</div>
                      <div style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.75)' }}>Innovating payments across 19,000+ Pin Codes in India</div>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Badge */}
                <div 
                  className="animate-float-slow"
                  style={{
                    position: 'absolute',
                    bottom: '-16px',
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
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <Zap size={14} color="#fbbf24" />
                  <span>99.98% Switch Routing Uptime</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS / METRICS BAR WITH ANIMATED COUNTERS */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', backgroundColor: '#ffffff' }}>
        <div className="container-custom" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {statsList.map((st, idx) => (
              <ScrollReveal key={st._id || idx} animation="fade-up" delay={idx * 100}>
                <div style={{ textAlign: 'left', borderLeft: '2px solid rgba(22, 86, 214, 0.15)', paddingLeft: '1.25rem' }}>
                  <p style={{ fontSize: '2.75rem', fontWeight: 700, color: 'var(--royal)', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
                    <AnimatedCounter value={st.title} />
                  </p>
                  <p style={{ marginTop: '0.45rem', fontSize: '0.9rem', lineHeight: 1.45, color: 'var(--slate)' }}>
                    {st.subtitle || st.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '46rem', margin: '0 auto 4rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ justifyContent: 'center' }}>
                <span className="badge-dot" />
                Our Purpose
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Built to bridge merchants, enterprises, and financial institutions
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="fintech-card-interactive" style={{ padding: '2.25rem', height: '100%' }}>
                <div className="icon-box-hover" style={{ height: '3.25rem', width: '3.25rem', borderRadius: '0.85rem', backgroundColor: 'rgba(22, 86, 214, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Target size={24} color="var(--royal)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                  Why we do this
                </h3>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--slate)' }}>
                  India is experiencing unprecedented growth in digital transaction volumes. Yet countless merchants still struggle with high failure rates, cumbersome reconciliation, and unreliable counter hardware. We solve this by delivering enterprise-grade payment infrastructure that any business can effortlessly deploy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="fintech-card-interactive" style={{ padding: '2.25rem', height: '100%' }}>
                <div className="icon-box-hover" style={{ height: '3.25rem', width: '3.25rem', borderRadius: '0.85rem', backgroundColor: 'rgba(217, 164, 65, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Compass size={24} color="var(--gold)" />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                  Where we're headed
                </h3>
                <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: 'var(--slate)' }}>
                  Our vision is to build India’s most dependable payment distribution and orchestration network. By coupling our POS &amp; Soundbox devices with the Zoompe Retailer Portal, we are empowering over 100,000 neighborhood retail hubs to offer full-fledged banking and ticketing services.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE OPERATING PRINCIPLES */}
      <section style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '42rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ justifyContent: 'center' }}>
                <span className="badge-dot" />
                Guiding Philosophy
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                The principles behind how we work
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {principles.map((p, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="fintech-card-interactive" style={{ height: '100%' }}>
                  <div className="icon-box-hover" style={{ marginBottom: '1rem', width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {p.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate)' }}>
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM WITH MARQUEE */}
      <PartnerMarquee 
        title="Backed by leading banks and payment aggregators" 
        subtitle="Through deep technical integrations, Rhizobee brings together the best financial networks in the country." 
      />

      {/* WHY PARTNERS GROW WITH US */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '42rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ justifyContent: 'center' }}>
                <span className="badge-dot" />
                Merchant Advantage
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Why merchants and corporates choose to grow with us
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {differentiators.map((diff, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div style={{ padding: '1.75rem', borderRadius: '1rem', border: '1px solid var(--line)', backgroundColor: 'var(--paper)' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={20} color="var(--royal)" /> {diff.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate)', paddingLeft: '1.75rem' }}>
                    {diff.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 1.25rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: '42rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
              <Sparkles size={14} color="var(--gold)" /> PARTNER WITH US
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Want to know if we're the right payments partner for you?
            </h2>
            <p style={{ marginTop: '0.85rem', color: 'rgba(255, 255, 255, 0.78)', fontSize: '1.05rem', lineHeight: 1.65 }}>
              Our team will walk you through customized commercial terms, terminal options, and integration timelines.
            </p>
            <div style={{ marginTop: '2.25rem' }}>
              <Link to="/contact" className="btn-royal btn-shimmer" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
                Speak with Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
