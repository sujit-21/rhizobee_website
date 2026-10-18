import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Volume2, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  TrendingUp, 
  Store, 
  Sparkles,
  Smartphone
} from 'lucide-react';

export default function LivePaymentTicker() {
  const [activeTxIndex, setActiveTxIndex] = useState(0);

  const liveTransactions = [
    { amount: '₹ 1,450.00', method: 'Soundbox 4G Voice Alert', city: 'Mumbai', time: 'Just now' },
    { amount: '₹ 3,280.00', method: 'Contactless RuPay POS', city: 'Bengaluru', time: '3s ago' },
    { amount: '₹ 890.00', method: 'Dynamic UPI QR Scan', city: 'Delhi NCR', time: '5s ago' },
    { amount: '₹ 14,200.00', method: 'Online Gateway Checkout', city: 'Hyderabad', time: '8s ago' },
    { amount: '₹ 450.00', method: 'Soundbox Bilingual Alert', city: 'Pune', time: '12s ago' },
    { amount: '₹ 2,150.00', method: 'Android POS Cloud Receipt', city: 'Ahmedabad', time: '15s ago' }
  ];

  // Auto-move live transaction notification every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTxIndex((prev) => (prev + 1) % liveTransactions.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [liveTransactions.length]);

  const tickerItems = [
    { icon: Zap, text: 'Sub-Second UPI 2.0 Settlement', color: '#38bdf8' },
    { icon: Volume2, text: 'Bilingual 4G Audio Voice Alerts', color: '#f59e0b' },
    { icon: ShieldCheck, text: '100% RBI & PCI-DSS Level 1 Regulated', color: '#4ade80' },
    { icon: CreditCard, text: 'RuPay, Visa & Mastercard Contactless', color: '#60a5fa' },
    { icon: TrendingUp, text: '99.98% High-Throughput Bank Routing Switch', color: '#f59e0b' },
    { icon: Store, text: '10,000+ Active Storefront Merchants', color: '#38bdf8' },
    { icon: Smartphone, text: 'Android 12 POS with Cloud Thermal Printer', color: '#4ade80' }
  ];

  const currentTx = liveTransactions[activeTxIndex];

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* 1. AUTO-MOVING LIVE TRANSACTION PILL (FIGMA POPUP ANIMATE) */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '0.75rem 1rem',
          backgroundColor: '#ffedd5',
          borderBottom: '1px solid #fed7aa'
        }}
      >
        <div 
          className="animate-fade-in-up"
          key={activeTxIndex}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '6px 18px',
            borderRadius: '9999px',
            backgroundColor: '#ffffff',
            border: '1px solid #fed7aa',
            fontSize: '0.8rem',
            color: '#1c1917',
            boxShadow: '0 2px 10px rgba(251, 146, 60, 0.12)',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', fontWeight: 700 }}>
            <span className="beacon-pulse-green" />
            LIVE VERIFIED:
          </span>
          <span style={{ color: '#c2410c', fontWeight: 800, fontFamily: 'var(--font-data)' }}>
            {currentTx.amount}
          </span>
          <span style={{ color: '#44403c', fontWeight: 600 }}>
            via {currentTx.method}
          </span>
          <span style={{ color: '#78716c', fontSize: '0.75rem' }}>
            • {currentTx.city} ({currentTx.time})
          </span>
        </div>
      </div>

      {/* 2. AUTO-MOVING CONTINUOUS RIBBON (FIGMA INFINITE AUTO SCROLL) */}
      <div 
        className="auto-moving-ribbon"
        style={{
          backgroundColor: '#fff7ed',
          borderBottom: '1px solid #fed7aa',
          padding: '0.75rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="ribbon-track">
          {/* Repeat list twice for seamless infinite auto-moving scroll */}
          {[...tickerItems, ...tickerItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0 24px',
                  color: '#44403c',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                <span 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(251, 146, 60, 0.14)'
                  }}
                >
                  <Icon size={14} color={item.color} />
                </span>
                <span>{item.text}</span>
                <span style={{ color: '#fed7aa', marginLeft: '12px' }}>•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
