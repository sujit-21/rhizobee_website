import React from 'react';
import { ArrowUpRight, Landmark, Zap, Plane, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ZoompeBanner() {
  const serviceCategories = [
    {
      title: 'Banking & Cash Services',
      icon: <Landmark size={20} color="var(--gold)" />,
      items: [
        'AePS (Cash Withdrawal, Balance Enquiry, Mini Statement)',
        'Micro ATM Services',
        'Domestic Money Transfer (DMT) across India',
        'Cash Management Services (CMS)'
      ]
    },
    {
      title: 'Recharge & Bill Payments',
      icon: <Zap size={20} color="var(--sky)" />,
      items: [
        'Prepaid & Postpaid Mobile Recharges',
        'DTH Recharge for all major operators',
        'Electricity, Water, Gas & Utility Bills (BBPS)',
        'FASTag Recharge & Management'
      ]
    },
    {
      title: 'Travel & Booking',
      icon: <Plane size={20} color="var(--gold)" />,
      items: [
        'Domestic & International Flight Bookings',
        'Inter-city Bus Ticket Booking',
        'Train Ticket Bookings (IRCTC Partnered)',
        'Hotel & Stay Reservations'
      ]
    },
    {
      title: 'Financial Services',
      icon: <ShieldCheck size={20} color="var(--sky)" />,
      items: [
        'Quick Business & Personal Loan Facilitation',
        'General, Health & Motor Insurance',
        'Credit Score Checks & Reports',
        'PAN Card Issuance & Corrections'
      ]
    }
  ];

  return (
    <section id="zoompe" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--ink)', paddingTop: '6rem', paddingBottom: '6rem', color: '#ffffff' }}>
      {/* Background radial dots and glowing spheres */}
      <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} aria-hidden="true" />
      <div 
        style={{
          position: 'absolute',
          left: '-6rem',
          top: '-4rem',
          height: '24rem',
          width: '24rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(22, 86, 214, 0.25)',
          filter: 'blur(80px)'
        }}
        aria-hidden="true"
      />
      <div 
        style={{
          position: 'absolute',
          right: '-6rem',
          bottom: '-4rem',
          height: '22rem',
          width: '22rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(217, 164, 65, 0.12)',
          filter: 'blur(80px)'
        }}
        aria-hidden="true"
      />

      <div className="container-custom" style={{ position: 'relative' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img 
                src="/images/zoompe/zoompe-logo.png" 
                alt="Zoompe logo"
                style={{ height: '3.5rem', width: '3.5rem', borderRadius: '0.75rem', objectFit: 'contain', backgroundColor: '#ffffff', padding: '0.35rem' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="badge-tag" style={{ color: 'var(--sky)' }}>
                <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
                Retailer Portal
              </span>
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#ffffff' }}>
              Introducing Zoompe — <span className="text-gradient">Our Retailer Portal</span>
            </h2>

            <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)' }}>
              We are excited to launch Zoompe, our dedicated retailer portal designed to empower businesses and individuals with a complete suite of digital services, all under one platform.
            </p>

            <p style={{ marginTop: '1rem', fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.65)' }}>
              Whether you're a small shop owner, a CSP agent, or an entrepreneur looking to expand your service offerings, Zoompe gives you everything you need to serve your customers better and grow your business.
            </p>

            <div style={{ marginTop: '2.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <a 
                href="https://www.zoompe.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold"
                style={{ padding: '0.85rem 1.65rem', fontSize: '0.95rem' }}
              >
                Visit Our Retailer Portal <ArrowUpRight size={18} />
              </a>
              <span className="font-data" style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                www.zoompe.in
              </span>
            </div>
          </div>

          {/* Right Column Services Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {serviceCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="feature-card-dark"
                style={{ padding: '1.5rem', borderRadius: '1rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff' }}>
                    {cat.title}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.45 }}>
                      <CheckCircle2 size={14} color="var(--gold)" style={{ shrink: 0, marginTop: '0.15rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
