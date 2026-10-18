import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  Smartphone, 
  QrCode, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Wifi, 
  ArrowUpRight,
  Sparkles,
  Lock
} from 'lucide-react';

export default function HeroFintechVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tabs = [
    { id: 'soundbox', label: 'Soundbox 4G', icon: Volume2 },
    { id: 'qr', label: 'Dynamic QR', icon: QrCode },
    { id: 'pos', label: 'Smart POS', icon: Smartphone },
    { id: 'gateway', label: 'Online Gateway', icon: CreditCard }
  ];

  // Auto-rotate tabs every 4.5 seconds if user is not hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, tabs.length]);

  return (
    <div 
      className="hero-visualizer-wrap"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto'
      }}
    >
      {/* Ambient background glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '75%',
          height: '75%',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(22, 86, 214, 0.45) 0%, rgba(63, 169, 245, 0.15) 50%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '60%',
          height: '60%',
          borderRadius: '9999px',
          background: 'radial-gradient(circle, rgba(217, 164, 65, 0.25) 0%, transparent 70%)',
          filter: 'blur(45px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Floating Top Badge */}
      <div 
        className="animate-float"
        style={{
          position: 'absolute',
          top: '-18px',
          right: '12px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(10, 26, 58, 0.88)',
          border: '1px solid rgba(63, 169, 245, 0.4)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(22, 86, 214, 0.3)',
          color: '#ffffff',
          fontSize: '0.8rem',
          fontWeight: 600
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '9999px', backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
          <Zap size={13} color="#22c55e" />
        </span>
        <span>0.3s Voice Trigger</span>
      </div>

      {/* Main Glassmorphic Hardware Hub */}
      <div 
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '1.75rem',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          background: 'linear-gradient(145deg, rgba(20, 42, 82, 0.75) 0%, rgba(10, 26, 58, 0.92) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          overflow: 'hidden',
          padding: '1.75rem'
        }}
      >
        {/* Top Status Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '1rem',
            marginBottom: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="beacon-pulse-green" />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255, 255, 255, 0.9)', textTransform: 'uppercase' }}>
              Rhizobee Engine • Online
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Wifi size={13} color="#3fa9f5" /> 4G LTE / Wi-Fi
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Lock size={12} color="#d9a441" /> 256-bit
            </span>
          </div>
        </div>

        {/* Interactive Mode Tabs */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            padding: '5px',
            borderRadius: '0.85rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '1.5rem'
          }}
        >
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 4px',
                  borderRadius: '0.65rem',
                  border: isActive ? '1px solid rgba(63, 169, 245, 0.5)' : '1px solid transparent',
                  backgroundColor: isActive ? 'rgba(22, 86, 214, 0.6)' : 'transparent',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  outline: 'none'
                }}
              >
                <Icon size={16} color={isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Stage */}
        <div 
          style={{
            minHeight: '220px',
            borderRadius: '1.25rem',
            backgroundColor: 'rgba(8, 18, 40, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {/* Subtle grid pattern inside stage */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0)',
              backgroundSize: '16px 16px',
              opacity: 0.5,
              pointerEvents: 'none'
            }}
          />

          {/* TAB 0: SOUNDBOX 4G */}
          {activeTab === 0 && (
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.35)',
                  color: '#4ade80',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                <CheckCircle2 size={13} /> Audio Voice Confirmation
              </div>

              {/* Pulsing Audio Waveform Visualizer */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  height: '48px',
                  marginBottom: '1rem'
                }}
              >
                {[18, 36, 48, 28, 42, 52, 38, 22, 45, 30, 20].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      width: '4px',
                      height: `${h}px`,
                      borderRadius: '9999px',
                      backgroundColor: i % 2 === 0 ? 'var(--sky)' : 'var(--gold-soft)',
                      animation: `audioWave 1.2s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.1}s`,
                      boxShadow: '0 0 10px rgba(63, 169, 245, 0.5)'
                    }}
                  />
                ))}
              </div>

              {/* Speech bubble */}
              <div 
                style={{
                  display: 'inline-block',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '0.75rem',
                  padding: '8px 16px'
                }}
              >
                <p style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  "₹ 1,250 received successfully on UPI"
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem', marginTop: '2px' }}>
                  Instant English, Hindi &amp; Regional Languages
                </p>
              </div>
            </div>
          )}

          {/* TAB 1: DYNAMIC QR */}
          {activeTab === 1 && (
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '1rem' }}>
              {/* Animated QR Visualizer */}
              <div 
                style={{
                  position: 'relative',
                  width: '110px',
                  height: '110px',
                  borderRadius: '1rem',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                  overflow: 'hidden'
                }}
              >
                <QrCode size={94} color="#0a1a3a" />
                {/* Laser scan line moving vertically */}
                <div 
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, #22c55e, #3fa9f5, transparent)',
                    boxShadow: '0 0 12px #22c55e',
                    animation: 'scanLine 2s ease-in-out infinite alternate'
                  }}
                />
              </div>

              <div style={{ textAlign: 'left', maxWidth: '210px' }}>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: 'var(--gold-soft)',
                    fontWeight: 600,
                    marginBottom: '4px'
                  }}
                >
                  <Sparkles size={12} /> DYNAMIC UPI 2.0
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.25 }}>
                  Zero MDR &amp; Instant Settlement
                </h4>
                <p style={{ fontSize: '0.775rem', color: 'rgba(255, 255, 255, 0.7)', marginTop: '4px', lineHeight: 1.4 }}>
                  Compatible with Google Pay, PhonePe, Paytm, BHIM and all banking apps.
                </p>
                <div style={{ marginTop: '8px', display: 'flex', gap: '6px' }}>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
                    Auto-reconcile
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                    Zero MDR
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SMART POS */}
          {activeTab === 2 && (
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(63, 169, 245, 0.15)',
                  border: '1px solid rgba(63, 169, 245, 0.35)',
                  color: 'var(--sky)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                <Smartphone size={13} /> Android POS with Cloud Printer
              </div>

              {/* Credit card tap simulation */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  margin: '0.5rem 0 1rem'
                }}
              >
                <div 
                  className="animate-float"
                  style={{
                    width: '140px',
                    height: '80px',
                    borderRadius: '0.65rem',
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
                    padding: '8px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '18px', height: '14px', borderRadius: '3px', backgroundColor: '#fbbf24' }} />
                    <Wifi size={12} color="#ffffff" style={{ transform: 'rotate(90deg)' }} />
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#ffffff', fontFamily: 'var(--font-data)', letterSpacing: '0.1em' }}>
                    •••• 8842
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.58rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span>RUPAY PLATINUM</span>
                    <span>10/29</span>
                  </div>
                </div>

                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.825rem', fontWeight: 600, color: '#ffffff' }}>
                    Contactless NFC Tap
                  </div>
                  <div style={{ fontSize: '0.725rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                    <CheckCircle2 size={12} /> Approved in 0.8s
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '2px' }}>
                    Chip + PIN + Paper Receipts
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PAYMENT GATEWAY */}
          {activeTab === 3 && (
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CreditCard size={15} color="var(--sky)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>
                    Seamless Online Checkout
                  </span>
                </div>
                <span 
                  style={{
                    fontSize: '0.72rem',
                    color: '#4ade80',
                    fontWeight: 600,
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    padding: '3px 9px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  ✓ 99.98% Success
                </span>
              </div>

              {/* Realistic Customer Payment Checkout Interface */}
              <div 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.85rem',
                  padding: '12px 14px',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                {/* Order Summary Line */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Order Amount</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em' }}>₹ 2,450.00</div>
                  </div>
                  <span style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: '6px', backgroundColor: 'rgba(63, 169, 245, 0.15)', color: 'var(--sky)', fontWeight: 500 }}>
                    Instant Checkout
                  </span>
                </div>

                {/* Selected Payment Option Pill */}
                <div 
                  style={{
                    marginTop: '10px',
                    padding: '8px 10px',
                    borderRadius: '0.55rem',
                    backgroundColor: 'rgba(22, 86, 214, 0.25)',
                    border: '1px solid rgba(63, 169, 245, 0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '9999px', backgroundColor: '#22c55e' }} />
                    <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 600 }}>UPI, Cards &amp; Net Banking</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#4ade80', fontWeight: 600 }}>Fast Route</span>
                </div>

                {/* Pay Action Button */}
                <div 
                  style={{
                    marginTop: '10px',
                    borderRadius: '0.65rem',
                    background: 'linear-gradient(135deg, var(--royal) 0%, var(--sky) 100%)',
                    padding: '8px 12px',
                    textAlign: 'center',
                    color: '#ffffff',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 14px rgba(22, 86, 214, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Lock size={12} /> Pay ₹ 2,450.00 Securely
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                  fontSize: '0.725rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                <span>HDFC • ICICI • Axis • SBI</span>
                <span style={{ color: 'var(--gold-soft)' }}>Smart Auto-Routing</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer indicators */}
        <div 
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.75)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: 'var(--gold)' }} />
            <span>Interactive Demo: Click any tab to test</span>
          </div>

          <div style={{ display: 'flex', gap: '4px' }}>
            {tabs.map((_, i) => (
              <span 
                key={i} 
                onClick={() => setActiveTab(i)}
                style={{
                  width: activeTab === i ? '18px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: activeTab === i ? 'var(--sky)' : 'rgba(255, 255, 255, 0.25)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Bottom Badge */}
      <div 
        className="animate-float-slow"
        style={{
          position: 'absolute',
          bottom: '-18px',
          left: '12px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(10, 26, 58, 0.92)',
          border: '1px solid rgba(217, 164, 65, 0.45)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(217, 164, 65, 0.25)',
          color: '#ffffff',
          fontSize: '0.8rem',
          fontWeight: 600
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '9999px', backgroundColor: 'rgba(217, 164, 65, 0.2)' }}>
          <ShieldCheck size={14} color="#fbbf24" />
        </span>
        <span>PCI-DSS Level 1 &amp; RBI Compliant</span>
      </div>
    </div>
  );
}
