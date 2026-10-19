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

  // Master 90 circles forming mathematically uniform, symmetrical concentric rings around the stage: [cx, cy, rx, ry]
  const ecosystemCircles = [
    // Middle-Inner Ring (Ring 2 - small/medium circles):
    [822.0, 280.0, 19.0, 11.2],
    [811.3, 327.0, 19.0, 11.2],
    [703.0, 421.8, 19.0, 11.2],
    [657.3, 439.0, 19.0, 11.2],
    [609.8, 450.8, 19.0, 11.2],
    [415.0, 451.0, 19.0, 11.2],
    [367.5, 439.2, 19.0, 11.2],
    [321.7, 422.1, 19.0, 11.2],
    [213.0, 327.5, 19.0, 11.2],
    [202.0, 280.2, 19.0, 11.2],
    [212.8, 232.9, 19.0, 11.2],
    [366.9, 118.0, 18.0, 10.5],
    [640.0, 112.0, 18.0, 10.5],
    [745.4, 161.5, 19.0, 11.2],
    [811.1, 232.7, 19.0, 11.2],

    // Middle-Outer Ring (Ring 3 - medium/large circles):
    [884.7, 304.4, 22.0, 13.0],
    [867.0, 350.9, 22.0, 13.0],
    [836.4, 390.4, 22.0, 13.0],
    [798.0, 422.3, 22.0, 13.0],
    [754.9, 447.6, 22.0, 13.0],
    [708.9, 467.2, 22.0, 13.0],
    [661.1, 481.9, 22.0, 13.0],
    [612.2, 492.0, 22.0, 13.0],
    [512.5, 500.0, 22.0, 13.0],
    [462.5, 498.1, 22.0, 13.0],
    [412.8, 492.2, 22.0, 13.0],
    [363.8, 482.1, 22.0, 13.0],
    [315.9, 467.5, 22.0, 13.0],
    [269.9, 448.0, 22.0, 13.0],
    [226.7, 422.8, 22.0, 13.0],
    [157.4, 351.6, 22.0, 13.0],
    [139.4, 305.1, 22.0, 13.0],
    [139.4, 255.4, 22.0, 13.0],
    [157.1, 208.9, 22.0, 13.0],
    [187.8, 169.5, 22.0, 13.0],
    [226.2, 137.6, 22.0, 13.0],
    [315.3, 92.7, 22.0, 13.0],
    [363.1, 78.1, 22.0, 13.0],
    [600.0, 48.0, 20.0, 11.5],
    [660.4, 78.0, 22.0, 13.0],
    [708.3, 92.5, 22.0, 13.0],
    [754.3, 112.1, 22.0, 13.0],
    [797.5, 137.4, 22.0, 13.0],
    [836.0, 169.2, 22.0, 13.0],
    [866.7, 208.6, 22.0, 13.0],
    [884.6, 255.1, 22.0, 13.0],

    // Outer Ring (Ring 4 - large perimeter circles):
    [952.0, 280.0, 25.0, 14.5],
    [944.0, 329.4, 25.0, 14.5],
    [921.7, 374.9, 25.0, 14.5],
    [889.2, 413.8, 25.0, 14.5],
    [850.2, 446.3, 25.0, 14.5],
    [807.0, 472.9, 25.0, 14.5],
    [761.0, 494.4, 25.0, 14.5],
    [713.1, 511.3, 25.0, 14.5],
    [663.9, 524.0, 25.0, 14.5],
    [613.9, 532.9, 25.0, 14.5],
    [563.4, 538.2, 25.0, 14.5],
    [512.6, 540.0, 25.0, 14.5],
    [461.8, 538.3, 25.0, 14.5],
    [411.3, 533.1, 25.0, 14.5],
    [361.2, 524.3, 25.0, 14.5],
    [312.0, 511.6, 25.0, 14.5],
    [264.0, 494.8, 25.0, 14.5],
    [217.9, 473.4, 25.0, 14.5],
    [174.6, 446.9, 25.0, 14.5],
    [135.4, 414.5, 25.0, 14.5],
    [102.8, 375.6, 25.0, 14.5],
    [80.3, 330.2, 25.0, 14.5],
    [72.0, 280.3, 25.0, 14.5],
    [80.1, 230.3, 25.0, 14.5],
    [102.5, 184.9, 25.0, 14.5],
    [135.0, 146.0, 25.0, 14.5],
    [174.0, 113.5, 25.0, 14.5],
    [217.2, 87.0, 25.0, 14.5],
    [263.3, 65.5, 25.0, 14.5],
    [311.2, 48.7, 25.0, 14.5],
    [360.3, 35.9, 25.0, 14.5],
    [410.4, 25.0, 24.0, 13.5],
    // Top back arc completing Ring 4 above speaker:
    [461.5, 16.0, 22.0, 12.0],
    [512.0, 13.5, 21.0, 11.5],
    [562.5, 16.0, 22.0, 12.0],
    [613.0, 25.0, 24.0, 13.5],
    [663.1, 35.8, 25.0, 14.5],
    [712.3, 48.5, 25.0, 14.5],
    [760.2, 65.3, 25.0, 14.5],
    [806.3, 86.7, 25.0, 14.5],
    [849.6, 113.3, 25.0, 14.5],
    [888.7, 145.7, 25.0, 14.5],
    [921.3, 184.6, 25.0, 14.5],
    [943.8, 230.1, 25.0, 14.5]
  ];

  // Sort concentric rings clockwise starting from 12 o'clock (top center) for smooth sequential blinking
  const centerOrbit = { x: 512, y: 280 };
  const getClockwiseAngle = (c) => {
    const phi = Math.atan2(c[1] - centerOrbit.y, c[0] - centerOrbit.x);
    return ((phi + Math.PI / 2) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  };

  const ring2 = ecosystemCircles.filter(c => c[2] <= 19.5).sort((a, b) => getClockwiseAngle(a) - getClockwiseAngle(b));
  const ring3 = ecosystemCircles.filter(c => c[2] > 19.5 && c[2] <= 23.0).sort((a, b) => getClockwiseAngle(a) - getClockwiseAngle(b));
  const ring4 = ecosystemCircles.filter(c => c[2] > 23.0).sort((a, b) => getClockwiseAngle(a) - getClockwiseAngle(b));
  const sortedEcosystemRings = [ring4, ring3, ring2];

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
        {/* Master High-Res 3D Isometric Ecosystem Artwork (Pristine clean devices on white) */}
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

        {/* Dynamic Automatic Clockwise Sequential One-by-One Blue and White Blinking Circles */}
        <svg
          viewBox="0 0 1024 564"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 6,
            overflow: 'visible'
          }}
        >
          {sortedEcosystemRings.map((ring, ringIdx) => {
            const count = ring.length;
            const duration = 4.0; // 4s loop for smooth, continuous clockwise circuit
            return ring.map(([cx, cy, rx, ry], idx) => {
              // Alternating blue and white nodes around the ring
              const isBlue = idx % 2 === 0;
              const delay = -(idx * (duration / count)).toFixed(3);

              return (
                <ellipse
                  key={`${ringIdx}-${idx}`}
                  cx={cx}
                  cy={cy}
                  rx={rx}
                  ry={ry}
                  className={isBlue ? 'dynamic-circle-blue' : 'dynamic-circle-white'}
                  style={{
                    animationDelay: `${delay}s`
                  }}
                />
              );
            });
          })}
        </svg>

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

        /* Pattern 1: Blue node blink - sharp, crisp electric blue flash with brilliant white core */
        @keyframes blinkBlueNode {
          0%, 100% {
            fill: rgba(224, 242, 254, 0.85);
            stroke: #0284c7;
            stroke-width: 1.5px;
            filter: drop-shadow(0 1px 3px rgba(2, 132, 199, 0.15));
          }
          2% {
            fill: #0284c7;
            stroke: #38bdf8;
            stroke-width: 2.2px;
            filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.95)) drop-shadow(0 0 18px rgba(2, 132, 199, 0.8));
          }
          4% {
            fill: #ffffff;
            stroke: #0284c7;
            stroke-width: 2.8px;
            filter: drop-shadow(0 0 14px #ffffff) drop-shadow(0 0 22px rgba(14, 165, 233, 0.95));
          }
          6% {
            fill: #38bdf8;
            stroke: #0284c7;
            stroke-width: 2px;
            filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.8));
          }
          8% {
            fill: rgba(224, 242, 254, 0.85);
            stroke: #0284c7;
            stroke-width: 1.5px;
            filter: drop-shadow(0 1px 3px rgba(2, 132, 199, 0.15));
          }
        }

        /* Pattern 2: White node blink - sharp, brilliant pure white flash with electric blue aura */
        @keyframes blinkWhiteNode {
          0%, 100% {
            fill: #ffffff;
            stroke: #38bdf8;
            stroke-width: 1.5px;
            filter: drop-shadow(0 1px 3px rgba(14, 165, 233, 0.15));
          }
          2% {
            fill: #38bdf8;
            stroke: #ffffff;
            stroke-width: 2.2px;
            filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.9)) drop-shadow(0 0 16px rgba(14, 165, 233, 0.7));
          }
          4% {
            fill: #ffffff;
            stroke: #0ea5e9;
            stroke-width: 2.8px;
            filter: drop-shadow(0 0 16px #ffffff) drop-shadow(0 0 26px rgba(14, 165, 233, 0.95));
          }
          6% {
            fill: #e0f2fe;
            stroke: #38bdf8;
            stroke-width: 2px;
            filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.8));
          }
          8% {
            fill: #ffffff;
            stroke: #38bdf8;
            stroke-width: 1.5px;
            filter: drop-shadow(0 1px 3px rgba(14, 165, 233, 0.15));
          }
        }

        .dynamic-circle-blue {
          animation: blinkBlueNode 4s ease-in-out infinite;
          will-change: fill, stroke, filter;
        }

        .dynamic-circle-white {
          animation: blinkWhiteNode 4s ease-in-out infinite;
          will-change: fill, stroke, filter;
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
