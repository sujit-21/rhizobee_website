import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Building2,
  Sparkles,
  Zap,
  Headphones,
  Check
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    businessType: 'SME',
    serviceInterested: 'Payment Gateway Solutions',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setResult(data);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          businessType: 'SME',
          serviceInterested: 'Payment Gateway Solutions',
          message: ''
        });
      } else {
        setError(data.message || 'Unable to submit inquiry.');
      }
    } catch (err) {
      setError('Network communication failed. Please verify the backend is running.');
    } finally {
      setLoading(false);
    }
  };

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

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, maxWidth: '50rem', textAlign: 'center' }}>
          <ScrollReveal animation="fade-up">
            <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
              <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
              Contact Rhizobee
            </span>

            <h1 style={{ fontSize: '3.3rem', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 1.15 }}>
              Let's get your business <span className="text-gradient">accepting payments</span>
            </h1>

            <p style={{ marginTop: '1.25rem', fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)' }}>
              Whether you need a payment gateway, QR code standee, soundbox, POS device, or PPI wallet solution, tell us about your business. Our payment specialists respond within one business day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MAIN CONTACT & INQUIRY FORM */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '4rem',
              alignItems: 'start'
            }}
          >
            {/* Left: Contact Info + Support Hub Photo */}
            <ScrollReveal animation="fade-up">
              <div>
                <span className="badge-tag">
                  <span className="badge-dot" /> Get in Touch
                </span>
                <h2 style={{ fontSize: '2.3rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.75rem', marginBottom: '1rem' }}>
                  Reach us directly
                </h2>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--slate)', marginBottom: '2rem' }}>
                  Reach our dedicated merchant operations team using the details below, or send a message using the form.
                </p>

                {/* Support Hub Team Photo Card */}
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '1.25rem',
                    overflow: 'hidden',
                    border: '1px solid var(--line)',
                    boxShadow: '0 16px 36px -10px rgba(0, 0, 0, 0.1)',
                    marginBottom: '2.5rem'
                  }}
                >
                  <img 
                    src="/images/contact/support-hub.jpg" 
                    alt="Rhizobee 24/7 Merchant Operations & Support Center" 
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 26, 58, 0.9) 0%, transparent 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '16px'
                    }}
                  >
                    <div style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 700 }}>
                      24/7 Merchant Support &amp; Concierge Hub
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem' }}>
                      Multi-lingual assistance across India • Average response &lt; 15 mins
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'var(--paper)', border: '1px solid var(--line)' }}>
                      <Mail size={20} color="var(--royal)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Email
                      </div>
                      <a href="mailto:info@rhizobee.com" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
                        info@rhizobee.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'var(--paper)', border: '1px solid var(--line)' }}>
                      <Phone size={20} color="var(--royal)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Phone
                      </div>
                      <a href="tel:02245857049" style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}>
                        022-4585 7049
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'var(--paper)', border: '1px solid var(--line)' }}>
                      <MapPin size={20} color="var(--royal)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Corporate Office
                      </div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.5, marginTop: '0.2rem' }}>
                        101, Wellington Business Park 2<br />
                        Andheri Kurla Road, Marol, Andheri East<br />
                        Mumbai 400059, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'var(--paper)', border: '1px solid var(--line)' }}>
                      <Clock size={20} color="var(--gold)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Business Hours
                      </div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--slate)', marginTop: '0.2rem' }}>
                        Monday – Saturday, 10:00 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: 'var(--paper)', border: '1px solid var(--line)' }}>
                      <FileText size={20} color="var(--royal)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Company Identification
                      </div>
                      <p className="font-data" style={{ fontSize: '0.9rem', color: 'var(--ink)', fontWeight: 600, marginTop: '0.2rem' }}>
                        CIN: U72900DL2022PTC393198
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Interactive Form Linked to MongoDB */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div 
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.75rem',
                  border: '1px solid var(--line)',
                  padding: '2.5rem',
                  boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.08)'
                }}
              >
                {result ? (
                  <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div 
                      style={{
                        height: '4rem',
                        width: '4rem',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(22, 86, 214, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem'
                      }}
                    >
                      <CheckCircle2 size={36} color="var(--royal)" />
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--ink)' }}>
                      Thank You! Inquiry Received
                    </h3>
                    <p style={{ marginTop: '0.75rem', color: 'var(--slate)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {result.message}
                    </p>

                    <div 
                      style={{
                        marginTop: '1.5rem',
                        padding: '1rem 1.5rem',
                        backgroundColor: 'var(--paper)',
                        borderRadius: '0.75rem',
                        display: 'inline-block',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Tracking Reference
                      </div>
                      <div className="font-data" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--royal)', marginTop: '0.25rem' }}>
                        {result.data?.inquiryId}
                      </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                      <button 
                        onClick={() => setResult(null)} 
                        className="btn-royal btn-shimmer"
                        style={{ padding: '0.75rem 2rem' }}
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                      Send an Inquiry
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--slate)', marginBottom: '1.75rem' }}>
                      Fill out the fields below. Recorded live into our merchant management database.
                    </p>

                    {error && (
                      <div 
                        style={{
                          marginBottom: '1.25rem',
                          padding: '0.85rem 1rem',
                          borderRadius: '0.75rem',
                          backgroundColor: '#fee2e2',
                          color: '#b91c1c',
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <AlertCircle size={16} /> {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div>
                        <label htmlFor="contact-fullName" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                          Full Name *
                        </label>
                        <input
                          id="contact-fullName"
                          type="text"
                          name="fullName"
                          autoComplete="name"
                          required
                          placeholder="Your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                            Contact Number
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label htmlFor="contact-company" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                            Company Name
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            name="company"
                            autoComplete="organization"
                            placeholder="Your business or brand name"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-businessType" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                            Business Type
                          </label>
                          <select
                            id="contact-businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            className="form-input"
                          >
                            <option value="Small Business Owner">Small Business Owner</option>
                            <option value="SME">SME</option>
                            <option value="MSME">MSME</option>
                            <option value="Enterprise">Enterprise</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-serviceInterested" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                          Service Interested In
                        </label>
                        <select
                          id="contact-serviceInterested"
                          name="serviceInterested"
                          value={formData.serviceInterested}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="Payment Gateway Solutions">Payment Gateway Solutions</option>
                          <option value="QR Code Payments">QR Code Payments</option>
                          <option value="Soundbox Solutions">Soundbox Solutions</option>
                          <option value="POS Devices">POS Devices</option>
                          <option value="PPI Wallet Solutions">PPI Wallet Solutions</option>
                          <option value="Brand Gift Vouchers & Gift Cards">Brand Gift Vouchers &amp; Gift Cards</option>
                          <option value="Switch">Payment Switch</option>
                          <option value="Zoompe Retailer Portal">Zoompe Retailer Portal</option>
                          <option value="General Inquiry">General Partnership Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows="4"
                          placeholder="Tell us about your business requirements, monthly transaction volumes, or preferred setup..."
                          value={formData.message}
                          onChange={handleChange}
                          className="form-input"
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-royal btn-shimmer"
                        style={{ padding: '0.9rem', width: '100%', justifyContent: 'center', fontSize: '0.975rem' }}
                      >
                        {loading ? 'Transmitting to Database...' : 'Send Message'} <Send size={16} />
                      </button>

                      <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--slate-dim)' }}>
                        🔒 Submitting securely saves your inquiry into our live MERN database.
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
