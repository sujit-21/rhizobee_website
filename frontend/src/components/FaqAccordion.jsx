import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What payment methods does Rhizobee support?',
    a: 'We support all major payment instruments across India: credit & debit cards (Visa, Mastercard, RuPay), UPI (Google Pay, PhonePe, Paytm, Cred, BHIM), Net Banking across 50+ Indian banks, leading digital wallets, and consumer EMI / Pay Later options.'
  },
  {
    q: 'How quickly can our business get onboarded and go live?',
    a: 'Standard merchant onboarding with digital KYC typically completes within 24 to 48 business hours. For enterprise clients requiring custom switch routing, POS fleet deployment, or co-branded wallet infrastructure, our solutions engineering team facilitates integration within 3 to 5 business days.'
  },
  {
    q: 'How does Rhizobee ensure payment security and RBI compliance?',
    a: 'Rhizobee operates in partnership with regulated banking institutions and RBI-authorized payment aggregators. All transaction pathways adhere to PCI-DSS Level 1 compliance, RBI tokenization mandates, multi-factor authentication, 256-bit TLS encryption, and real-time fraud mitigation screening.'
  },
  {
    q: 'What counter devices do you provide for retail merchants?',
    a: 'We offer smart 4G Android POS devices with NFC contactless support and thermal receipt printers, dynamic UPI QR standees, and Soundbox voice notification terminals that announce transaction receipts in English, Hindi, and regional languages in under 1.5 seconds.'
  },
  {
    q: 'Can we integrate Rhizobee payment gateways into our apps and websites?',
    a: 'Yes. Rhizobee provides robust REST APIs, webhooks, and client SDKs for Web (React, Next.js, HTML), Android, iOS, Flutter, and backend stacks like Node.js, Python, and PHP. You also receive an interactive merchant sandbox for end-to-end testing.'
  },
  {
    q: 'What is Zoompe and how is it related to Rhizobee?',
    a: 'Zoompe is Rhizobee’s dedicated retailer portal. It empowers kirana stores, CSP outlets, and neighborhood entrepreneurs with micro-ATM, Aadhaar Enabled Payment System (AePS), utility bill payments (BBPS), money transfers, travel ticketing, and financial service distribution.'
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section style={{ backgroundColor: 'var(--paper)', paddingTop: '5.5rem', paddingBottom: '5.5rem' }}>
      <div className="container-custom" style={{ maxWidth: '54rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <span className="badge-tag">
            <span className="badge-dot" />
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
            Answers to common questions
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--slate)', marginTop: '0.5rem' }}>
            Everything you need to know about Rhizobee payment solutions, onboarding, and technology.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1rem',
                  border: `1px solid ${isOpen ? 'var(--royal)' : 'var(--line)'}`,
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 8px 20px rgba(22, 86, 214, 0.08)' : '0 2px 4px rgba(0,0,0,0.01)'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: isOpen ? 'var(--royal)' : 'var(--ink)',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      shrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--royal)' : 'var(--slate-dim)'
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.35rem 1.5rem',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      color: 'var(--slate)',
                      borderTop: '1px solid var(--paper-dim)'
                    }}
                  >
                    <p style={{ marginTop: '0.75rem' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
