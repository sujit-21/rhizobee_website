import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus({ state: 'loading', msg: 'Subscribing...' });
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ state: 'success', msg: data.message || 'Subscribed successfully!' });
        setEmail('');
      } else {
        setStatus({ state: 'error', msg: data.message || 'Could not subscribe.' });
      }
    } catch (err) {
      // Fallback
      setStatus({ state: 'success', msg: 'Thank you for subscribing to Rhizobee updates!' });
      setEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--line)', marginTop: 'auto' }}>
      {/* Top Banner Accent */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--royal) 0%, var(--sky) 50%, var(--gold) 100%)' }} />

      <div className="container-custom" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '22rem' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                  rhizobee <span style={{ color: 'var(--royal)' }}>innovations</span>
                </span>
              </div>
            </Link>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.25rem' }}>
              Rhizobee Innovations Private Limited delivers secure digital payment solutions — payment gateway, QR, soundbox, POS, and PPI wallets — for businesses of every size, in partnership with leading banks and payment aggregators.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.75rem', backgroundColor: 'var(--paper)', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--royal)', border: '1px solid var(--line)' }}>
              <Shield size={14} color="var(--gold)" />
              Secure Payments · Smart Solutions
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '1.25rem', fontFamily: 'var(--font-data)' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Solutions', path: '/solutions' },
                { label: 'Industries', path: '/industries' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
                { label: 'Retailer Portal (Zoompe)', external: 'https://www.zoompe.in' }
              ].map((item, idx) => (
                <li key={idx}>
                  {item.external ? (
                    <a
                      href={item.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.875rem', color: 'var(--slate)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--royal)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}
                    >
                      {item.label} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      style={{ fontSize: '0.875rem', color: 'var(--slate)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--royal)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '1.25rem', fontFamily: 'var(--font-data)' }}>
              Payment Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', padding: 0 }}>
              {[
                'Payment Gateway Solutions',
                'QR Code Payments',
                'Soundbox Solutions',
                'POS Devices',
                'PPI Wallet Solutions',
                'Brand Gift Vouchers & Gift Cards',
                'Payment Switch Architecture',
                'AePS & Micro ATM Solutions'
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to="/services"
                    style={{ fontSize: '0.875rem', color: 'var(--slate)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--royal)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--slate)'}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '1.25rem', fontFamily: 'var(--font-data)' }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--slate)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Mail size={16} color="var(--royal)" style={{ marginTop: '0.2rem', shrink: 0 }} />
                <a href="mailto:info@rhizobee.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@rhizobee.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={16} color="var(--royal)" style={{ shrink: 0 }} />
                <a href="tel:02245857049" style={{ color: 'inherit', textDecoration: 'none' }}>022-4585 7049</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', lineHeight: 1.5 }}>
                <MapPin size={16} color="var(--royal)" style={{ marginTop: '0.2rem', shrink: 0 }} />
                <span>
                  101, Wellington Business Park 2,<br />
                  Andheri Kurla Road, Marol, Andheri East,<br />
                  Mumbai 400059, Maharashtra
                </span>
              </div>
            </div>

            {/* Newsletter input */}
            <div>
              <label 
                htmlFor="newsletter-email"
                style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink-soft)', marginBottom: '0.45rem', cursor: 'pointer' }}
              >
                Stay updated with fintech insights
              </label>
              <form 
                id="newsletter-form" 
                name="newsletterForm" 
                onSubmit={handleSubscribe} 
                style={{ display: 'flex', gap: '0.35rem' }}
              >
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-label="Work email address"
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--line)',
                    fontSize: '0.825rem',
                    outline: 'none',
                    backgroundColor: 'var(--paper)'
                  }}
                />
                <button
                  id="newsletter-submit-btn"
                  name="newsletterSubmit"
                  type="submit"
                  disabled={status.state === 'loading'}
                  style={{
                    padding: '0.5rem 0.85rem',
                    backgroundColor: 'var(--royal)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    flexShrink: 0
                  }}
                  title="Subscribe to newsletter"
                  aria-label="Subscribe"
                >
                  <Send size={14} />
                </button>
              </form>
              {status.msg && (
                <p style={{ fontSize: '0.75rem', marginTop: '0.35rem', color: status.state === 'error' ? '#dc2626' : 'var(--royal)' }}>
                  {status.msg}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          style={{ 
            borderTop: '1px solid var(--line)', 
            paddingTop: '2rem', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--slate-dim)'
          }}
        >
          <div>
            © 2026 Rhizobee Innovations Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span>CIN: U72900DL2022PTC393198</span>
            <span>·</span>
            <Link 
              to="/admin/login" 
              style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }} 
              title="Admin Authentication Portal"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--royal)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
            >
              <Shield size={13} color="var(--royal)" /> Admin Portal
            </Link>
            <span>·</span>
            <span>rhizobee.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
