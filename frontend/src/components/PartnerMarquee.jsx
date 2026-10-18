import React from 'react';

const partners = [
  { name: 'PayU', logo: '/images/partners/payu.png' },
  { name: 'Zaakpay', logo: '/images/partners/zaakpay.png' },
  { name: 'JioPay', logo: '/images/partners/jiopay.png' },
  { name: 'Getepay', logo: '/images/partners/getepay.png' },
  { name: 'Easebuzz', logo: '/images/partners/easebuzz.png' },
  { name: 'PayPoint', logo: '/images/partners/paypoint.png' },
  { name: 'ArthPay', logo: '/images/partners/arthpay.png' },
  { name: 'Airpay', logo: '/images/partners/airpay.png' },
  { name: 'Razorpay', logo: '/images/partners/razorpay.png' },
  { name: 'PhonePe', logo: '/images/partners/phonepe.png' },
  { name: 'Finacus', logo: '/images/partners/finacus.png' },
];

export default function PartnerMarquee({ title = "Our Payments Partners", subtitle = "We work with leading payment aggregators and gateways to deliver reliable, compliant payment acceptance to our merchants." }) {
  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section aria-labelledby="payment-partners-heading" style={{ overflow: 'hidden', backgroundColor: '#ffffff', paddingTop: '4rem', paddingBottom: '3.5rem', borderBottom: '1px solid var(--line)' }}>
      <div className="container-custom">
        <div style={{ maxWidth: '68rem', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-tag" style={{ justifyContent: 'center' }}>
            <span className="badge-dot" />
            Trusted Ecosystem
          </span>
          <h2 
            id="payment-partners-heading" 
            className="heading-single-line"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.25rem)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p 
              className="subheading-balanced subheading-single-line-desktop"
              style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', color: 'var(--slate)', lineHeight: 1.6, marginTop: '0.75rem', maxWidth: '60rem' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Infinite marquee ticker */}
      <div className="partner-marquee" role="region" aria-label="Payment partner logos">
        <div className="partner-marquee-track">
          {marqueeList.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                height: '5.5rem',
                width: '12rem',
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1rem',
                border: '1px solid var(--line)',
                backgroundColor: '#ffffff',
                padding: '1rem',
                marginRight: '1rem',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(22, 86, 214, 0.4)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(22, 86, 214, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
              }}
            >
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                style={{
                  maxHeight: '2.25rem',
                  maxWidth: '85%',
                  objectFit: 'contain',
                  filter: 'grayscale(15%)',
                  transition: 'transform 0.25s ease, filter 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.06)';
                  e.currentTarget.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'grayscale(15%)';
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerText = p.name;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
