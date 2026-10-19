import React, { useState } from 'react';
import { Plus, Check, ShieldCheck, Zap, Radio, Smartphone, CreditCard, QrCode, X } from 'lucide-react';

export default function InteractiveHardwareStage() {
  const [activeDevice, setActiveDevice] = useState(null); // 'pod', 'soundbox', 'pos', 'qr'
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  // Exact pixel centers in 1024 x 564 master image:
  // Pod: cx = 329.5 (32.18%), cy = 343.0 (60.82%)
  // Soundbox: cx = 481.5 (47.02%), cy = 166.5 (29.52%)
  // QR: cx = 529.0 (51.66%), cy = 443.5 (78.63%)
  // POS: cx = 709.5 (69.29%), cy = 345.5 (61.26%)
  const deviceData = {
    pod: {
      name: 'SMART POD',
      tag: 'ALL-IN-ONE HYBRID COUNTERTOP',
      icon: CreditCard,
      color: '#37196c',
      x: '32.18%',
      y: '60.82%',
      badge: 'Cards + Tap',
      desc: 'Seamless hybrid payment terminal accepting contactless NFC cards, chip-and-pin, and magnetic stripe swipe transactions.',
      specs: [
        'EMV & PCI-PTS 6.x Certified',
        'Contactless Tap & RuPay/Visa/Mastercard',
        'Instant audio confirmation sync',
        'All-day battery backup'
      ]
    },
    soundbox: {
      name: 'SmartSpeaker 2nd Gen',
      tag: '4G DUAL-BAND SMART AUDIO',
      icon: Radio,
      color: '#37196c',
      x: '47.02%',
      y: '29.52%',
      badge: 'High-Decibel Speaker',
      desc: 'Next-generation smart speaker delivering loud, crystal-clear bilingual payment alerts with instant zero-delay confirmation.',
      specs: [
        'Instant bilingual & regional voice alerts',
        'Dual 4G SIM + VoLTE connectivity',
        'High-decibel speaker for noisy stores',
        'Long standby 2600mAh battery'
      ]
    },
    pos: {
      name: 'EDC Machine',
      tag: 'ANDROID SMART POS TERMINAL',
      icon: Smartphone,
      color: '#37196c',
      x: '69.29%',
      y: '61.26%',
      badge: 'POS + Thermal Print',
      desc: 'Enterprise-grade Android POS terminal with vivid touchscreen, built-in fast thermal receipt printer, and multi-bank support.',
      specs: [
        'Android OS with custom retail apps',
        'Integrated fast 58mm thermal receipt printer',
        'Contactless, QR & Chip Card acceptance',
        'End-to-end encrypted payment security'
      ]
    },
    qr: {
      name: 'QR Code',
      tag: 'DYNAMIC & STATIC TABLETOP STANDEE',
      icon: QrCode,
      color: '#37196c',
      x: '51.66%',
      y: '78.63%',
      badge: 'Zero MDR UPI',
      desc: 'Durable, weather-resistant tabletop standee designed for high-throughput retail checkout with zero merchant transaction fees.',
      specs: [
        'Universal interoperable Bharat QR & UPI',
        'UV-resistant anti-scratch acrylic finish',
        'Instant payment notification via soundbox & app',
        'Zero setup charges, instant activation'
      ]
    }
  };

  return (
    <div 
      className="hardware-stage-ecosystem-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1024px',
        margin: '0 auto 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Main Interactive Stage Container - strict 1024 / 564 aspect ratio matching the master asset */}
      <div 
        className="hardware-ecosystem-canvas-box"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1024 / 564',
          userSelect: 'none'
        }}
      >
        {/* Master High-Res 3D Isometric Ecosystem Artwork */}
        <img 
          src="/assets/images/hardware-ecosystem.png" 
          alt="Retail Hardware Ecosystem - Smart Pod, SmartSpeaker 2nd Gen, EDC Machine and QR Code"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'contain',
            filter: 'drop-shadow(0 16px 36px rgba(0, 0, 0, 0.04))',
            pointerEvents: 'none'
          }}
        />

        {/* Interactive Hotspot Buttons Overlay at Exact Button Positions */}
        {Object.entries(deviceData).map(([key, device]) => {
          const isHovered = hoveredHotspot === key;
          const isActive = activeDevice === key;

          return (
            <div
              key={key}
              style={{
                position: 'absolute',
                left: device.x,
                top: device.y,
                width: 'clamp(24px, 3.1vw, 32px)',
                height: 'clamp(24px, 3.1vw, 32px)',
                transform: 'translate(-50%, -50%)',
                zIndex: 15,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredHotspot(key)}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => setActiveDevice(activeDevice === key ? null : key)}
            >
              {/* Outer Glowing Radar Pulse Ring */}
              <div 
                className="hotspot-pulse-ring"
                style={{
                  position: 'absolute',
                  inset: '-6px',
                  borderRadius: '50%',
                  border: isActive 
                    ? '2px solid rgba(95, 37, 159, 0.85)' 
                    : isHovered 
                      ? '2px solid rgba(95, 37, 159, 0.7)' 
                      : '2px solid rgba(95, 37, 159, 0.45)',
                  animation: 'hotspotPulseWave 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite',
                  pointerEvents: 'none'
                }}
              />

              {/* Clickable Interactive Hotspot Button */}
              {/* When inactive, button has subtle interactive styling over the native button in the artwork */}
              <button
                type="button"
                aria-label={`View specs for ${device.name}`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: isActive ? '#37196c' : 'rgba(55, 25, 108, 0.1)',
                  color: '#ffffff',
                  border: isActive ? '2px solid #ffffff' : isHovered ? '2px solid rgba(95, 37, 159, 0.8)' : '2px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isActive 
                    ? '0 0 0 4px rgba(95, 37, 159, 0.35), 0 8px 20px rgba(95, 37, 159, 0.6)' 
                    : isHovered 
                      ? '0 0 0 3px rgba(95, 37, 159, 0.3), 0 4px 14px rgba(95, 37, 159, 0.4)' 
                      : 'none',
                  transform: isHovered || isActive ? 'scale(1.15)' : 'scale(1)',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                {isActive ? (
                  <Check size={16} strokeWidth={3} />
                ) : null}
              </button>

              {/* Smart Hover Tooltip Preview */}
              {isHovered && !activeDevice && (
                <div 
                  className="hotspot-tooltip-bubble"
                  style={{
                    position: 'absolute',
                    bottom: 'calc(100% + 14px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1e1b4b',
                    color: '#ffffff',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    pointerEvents: 'none',
                    zIndex: 25,
                    animation: 'tooltipFadeIn 0.2s ease forwards'
                  }}
                >
                  <device.icon size={13} color="#a78bfa" />
                  <span>{device.name}</span>
                  <span style={{ fontSize: '0.68rem', color: '#a78bfa', marginLeft: '2px' }}>• Click to inspect</span>
                  {/* Tooltip Down Arrow */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '6px solid #1e1b4b'
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Device Detailed Specification Drawer / Flyout */}
      {activeDevice && deviceData[activeDevice] && (
        <div 
          className="active-device-spec-drawer"
          style={{
            width: '100%',
            maxWidth: '720px',
            marginTop: '1.25rem',
            padding: '1.25rem 1.75rem',
            borderRadius: '16px',
            backgroundColor: '#faf5ff',
            border: '1.5px solid #e9d5ff',
            boxShadow: '0 12px 32px rgba(95, 37, 159, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            position: 'relative',
            animation: 'drawerSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveDevice(null)}
            aria-label="Close device drawer"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #e9d5ff',
              color: '#5f259f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={14} strokeWidth={2.5} />
          </button>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span 
              style={{ 
                padding: '3px 10px', 
                borderRadius: '9999px', 
                backgroundColor: '#5f259f', 
                color: '#ffffff', 
                fontSize: '0.68rem', 
                fontWeight: 800,
                letterSpacing: '0.04em'
              }}
            >
              {deviceData[activeDevice].tag}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 500 }}>
              {deviceData[activeDevice].badge}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>
              {deviceData[activeDevice].name}
            </h3>
          </div>

          <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.55, margin: 0 }}>
            {deviceData[activeDevice].desc}
          </p>

          {/* Features Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '0.5rem 1rem',
              marginTop: '0.25rem'
            }}
          >
            {deviceData[activeDevice].specs.map((spec, sIdx) => (
              <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#374151' }}>
                <Check size={14} color="#5f259f" strokeWidth={3} />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dedicated CSS Animations */}
      <style>{`
        @keyframes hotspotPulseWave {
          0% {
            transform: scale(0.85);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.6);
            opacity: 0.25;
          }
          100% {
            transform: scale(2.0);
            opacity: 0;
          }
        }

        @keyframes tooltipFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 6px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @keyframes drawerSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hardware-stage-ecosystem-wrapper {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
