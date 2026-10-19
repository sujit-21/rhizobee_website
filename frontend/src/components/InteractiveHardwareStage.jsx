import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

export default function InteractiveHardwareStage() {
  const [activeDevice, setActiveDevice] = useState('pos'); // 'pod', 'soundbox', 'pos', 'qr'
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through devices gently every 4.5 seconds if not actively hovered
  useEffect(() => {
    if (isHovered) return;
    const deviceKeys = ['pod', 'soundbox', 'pos', 'qr'];
    const interval = setInterval(() => {
      setActiveDevice(prev => {
        const nextIdx = (deviceKeys.indexOf(prev) + 1) % deviceKeys.length;
        return deviceKeys[nextIdx];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Particle dots data for the PhonePe-style elliptical surrounding wave
  const particleDots = [
    // Top-left peach/gold cluster
    { cx: 180, cy: 90, r: 8, color: '#fb923c', delay: '0s', dur: '3.2s' },
    { cx: 230, cy: 75, r: 10, color: '#f59e0b', delay: '0.4s', dur: '2.8s' },
    { cx: 280, cy: 65, r: 9, color: '#fed7aa', delay: '0.8s', dur: '3.5s' },
    { cx: 330, cy: 55, r: 11, color: '#fb923c', delay: '1.2s', dur: '3.1s' },
    { cx: 380, cy: 50, r: 9, color: '#f59e0b', delay: '0.6s', dur: '3.6s' },
    { cx: 430, cy: 50, r: 12, color: '#fed7aa', delay: '1.5s', dur: '3.3s' },
    { cx: 480, cy: 55, r: 10, color: '#fb923c', delay: '0.3s', dur: '2.9s' },

    // Top-right cyan/mint cluster
    { cx: 540, cy: 65, r: 11, color: '#6ee7b7', delay: '0.7s', dur: '3.4s' },
    { cx: 590, cy: 80, r: 9, color: '#38bdf8', delay: '1.1s', dur: '3.0s' },
    { cx: 640, cy: 100, r: 10, color: '#a7f3d0', delay: '0.2s', dur: '3.7s' },
    { cx: 685, cy: 125, r: 12, color: '#38bdf8', delay: '1.4s', dur: '3.2s' },
    { cx: 720, cy: 155, r: 9, color: '#6ee7b7', delay: '0.5s', dur: '2.8s' },

    // Far right cyan cluster
    { cx: 750, cy: 190, r: 11, color: '#38bdf8', delay: '0.9s', dur: '3.5s' },
    { cx: 765, cy: 230, r: 10, color: '#a7f3d0', delay: '1.3s', dur: '3.1s' },
    { cx: 760, cy: 270, r: 12, color: '#38bdf8', delay: '0.4s', dur: '3.6s' },
    { cx: 740, cy: 310, r: 9, color: '#6ee7b7', delay: '1.6s', dur: '3.3s' },
    { cx: 710, cy: 345, r: 11, color: '#38bdf8', delay: '0.8s', dur: '2.9s' },

    // Bottom-right peach/gold cluster
    { cx: 670, cy: 375, r: 10, color: '#f59e0b', delay: '0.3s', dur: '3.4s' },
    { cx: 620, cy: 400, r: 12, color: '#fb923c', delay: '1.1s', dur: '3.0s' },
    { cx: 565, cy: 420, r: 9, color: '#fed7aa', delay: '0.6s', dur: '3.7s' },
    { cx: 510, cy: 435, r: 11, color: '#f59e0b', delay: '1.5s', dur: '3.2s' },
    { cx: 450, cy: 440, r: 10, color: '#fb923c', delay: '0.2s', dur: '2.8s' },
    { cx: 390, cy: 435, r: 12, color: '#fed7aa', delay: '0.9s', dur: '3.5s' },
    { cx: 330, cy: 420, r: 9, color: '#f59e0b', delay: '1.4s', dur: '3.1s' },

    // Bottom-left cluster
    { cx: 275, cy: 395, r: 11, color: '#fb923c', delay: '0.5s', dur: '3.6s' },
    { cx: 225, cy: 365, r: 10, color: '#fed7aa', delay: '1.2s', dur: '3.3s' },
    { cx: 185, cy: 330, r: 12, color: '#f59e0b', delay: '0.1s', dur: '2.9s' },
    { cx: 155, cy: 290, r: 9, color: '#fb923c', delay: '0.8s', dur: '3.4s' },
    { cx: 140, cy: 250, r: 11, color: '#fed7aa', delay: '1.6s', dur: '3.0s' },
    { cx: 145, cy: 205, r: 10, color: '#f59e0b', delay: '0.4s', dur: '3.7s' },
    { cx: 160, cy: 160, r: 12, color: '#fb923c', delay: '1.0s', dur: '3.2s' },

    // Inner orbiting accent ring
    { cx: 260, cy: 130, r: 7, color: '#fed7aa', delay: '0.3s', dur: '3.0s' },
    { cx: 370, cy: 105, r: 8, color: '#f59e0b', delay: '1.1s', dur: '3.3s' },
    { cx: 480, cy: 110, r: 8, color: '#6ee7b7', delay: '0.7s', dur: '3.6s' },
    { cx: 580, cy: 140, r: 7, color: '#38bdf8', delay: '1.3s', dur: '2.9s' },
    { cx: 645, cy: 210, r: 8, color: '#6ee7b7', delay: '0.5s', dur: '3.4s' },
    { cx: 630, cy: 290, r: 8, color: '#38bdf8', delay: '1.2s', dur: '3.1s' },
    { cx: 540, cy: 360, r: 7, color: '#f59e0b', delay: '0.8s', dur: '3.5s' },
    { cx: 310, cy: 350, r: 8, color: '#fb923c', delay: '0.2s', dur: '3.2s' }
  ];

  return (
    <div 
      className="hardware-interactive-stage-clean"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '82rem',
        margin: '0 auto 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible'
      }}
    >
      {/* Main Isometric Stage Canvas */}
      <div 
        className="isometric-stage-canvas"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* SVG Elliptical Particle Wave Field */}
        <svg 
          viewBox="0 0 900 500" 
          preserveAspectRatio="xMidYMid meet"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <defs>
            <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          {/* Isometric Perspective Oval Guide Path */}
          <ellipse 
            cx="450" 
            cy="250" 
            rx="350" 
            ry="190" 
            fill="none" 
            stroke="url(#orbitLineGrad)" 
            strokeWidth="1.5" 
            strokeDasharray="6 8"
            opacity="0.6"
          />
          <ellipse 
            cx="450" 
            cy="250" 
            rx="230" 
            ry="125" 
            fill="none" 
            stroke="rgba(251, 146, 60, 0.12)" 
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Render All Particle Wave Dots */}
          {particleDots.map((dot, i) => (
            <ellipse
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              rx={dot.r}
              ry={dot.r * 0.58} /* Isometric tilt flattening */
              fill={dot.color}
              opacity="0.85"
              style={{
                animation: `stageDotBreath ${dot.dur} ease-in-out infinite alternate ${dot.delay}`,
                transformOrigin: `${dot.cx}px ${dot.cy}px`
              }}
            />
          ))}
        </svg>

        {/* 4 Floating Isometric Devices Layer */}
        <div 
          className="stage-devices-layer"
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            maxWidth: '820px',
            height: '420px'
          }}
        >
          {/* ========================================================
              DEVICE 1: SMART POD (Left Side)
              ======================================================== */}
          <div
            className={`stage-device-unit unit-pod ${activeDevice === 'pod' ? 'active-unit' : ''}`}
            onClick={() => setActiveDevice('pod')}
            style={{
              position: 'absolute',
              left: '6%',
              top: '12%',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: activeDevice === 'pod' ? 10 : 4
            }}
          >
            {/* Dynamic Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-28px',
                left: '20px',
                width: '110px',
                height: '35px',
                borderRadius: '50%',
                backgroundColor: 'rgba(28, 25, 23, 0.14)',
                filter: 'blur(10px)',
                transform: activeDevice === 'pod' ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.35s ease'
              }}
            />

            {/* Device Body Container with Floating Physics */}
            <div 
              className="device-levitate-pod"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Isometric 3D SVG Artwork: Smart Pod Stand */}
              <div 
                className="device-art-box"
                style={{
                  width: '140px',
                  height: '210px',
                  position: 'relative',
                  filter: activeDevice === 'pod' ? 'drop-shadow(0 12px 28px rgba(251, 146, 60, 0.45))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 160 240" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Stand Base & Side Thickness (Isometric 3D) */}
                  <path d="M40 200 L120 200 L140 215 L20 215 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                  <path d="M20 215 L140 215 L135 224 L15 224 Z" fill="#94a3b8" />
                  <path d="M38 180 L48 200 L112 200 L122 180 Z" fill="#cbd5e1" />

                  {/* Main Pod Terminal Angled Body */}
                  <rect x="25" y="25" width="110" height="170" rx="16" fill="#ffffff" stroke="#fb923c" strokeWidth="3.5" />
                  <rect x="30" y="30" width="100" height="160" rx="12" fill="#fff7ed" />

                  {/* Top Logo / Brand */}
                  <rect x="65" y="42" width="30" height="6" rx="3" fill="#ea580c" />
                  <circle cx="58" cy="45" r="4" fill="#fb923c" />

                  {/* NFC Contactless Wave Rings */}
                  <g transform="translate(80, 95)">
                    <circle cx="0" cy="0" r="14" fill="#ffedd5" stroke="#fb923c" strokeWidth="2.5" />
                    <path d="M-6 4 C-8 0, -8 -4, -6 -8" stroke="#ea580c" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M-2 7 C-5 1, -5 -5, -2 -11" stroke="#ea580c" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M2 10 C-2 2, -2 -6, 2 -14" stroke="#ea580c" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Display Text Label */}
                  <text x="80" y="128" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1c1917" fontFamily="sans-serif">
                    Cards Accepted
                  </text>
                  <text x="80" y="137" textAnchor="middle" fontSize="5.5" fontWeight="500" fill="#78716c" fontFamily="sans-serif">
                    Tap or Insert to Pay
                  </text>

                  {/* Bottom Chip Insert Slot */}
                  <rect x="42" y="152" width="76" height="18" rx="4" fill="#1c1917" />
                  <rect x="52" y="159" width="56" height="4" rx="2" fill="#38bdf8" />
                </svg>
              </div>

              {/* Interactive + Hotspot Button */}
              <button 
                type="button"
                className="device-hotspot-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 12px rgba(234, 88, 12, 0.6), 0 2px 6px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  marginTop: '-10px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#1c1917', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                SMART POD
              </div>
            </div>
          </div>

          {/* ========================================================
              DEVICE 2: SMARTSPEAKER 2nd GEN / 4G (Top Center)
              ======================================================== */}
          <div
            className={`stage-device-unit unit-soundbox ${activeDevice === 'soundbox' ? 'active-unit' : ''}`}
            onClick={() => setActiveDevice('soundbox')}
            style={{
              position: 'absolute',
              left: '38%',
              top: '0%',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: activeDevice === 'soundbox' ? 10 : 4
            }}
          >
            {/* Dynamic Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '15px',
                width: '120px',
                height: '35px',
                borderRadius: '50%',
                backgroundColor: 'rgba(28, 25, 23, 0.14)',
                filter: 'blur(10px)',
                transform: activeDevice === 'soundbox' ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.35s ease'
              }}
            />

            {/* Device Body Container with Floating Physics */}
            <div 
              className="device-levitate-soundbox"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Isometric 3D SVG Artwork: Soundbox */}
              <div 
                className="device-art-box"
                style={{
                  width: '150px',
                  height: '160px',
                  position: 'relative',
                  filter: activeDevice === 'soundbox' ? 'drop-shadow(0 12px 28px rgba(245, 158, 11, 0.5))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 170 170" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Isometric Side Extrusions */}
                  <path d="M30 40 L45 20 L145 20 L130 40 Z" fill="#ea580c" />
                  <path d="M130 40 L145 20 L145 120 L130 140 Z" fill="#c2410c" />
                  <path d="M25 45 L130 40 L130 140 L25 145 Z" fill="#ffffff" stroke="#f59e0b" strokeWidth="3" />

                  {/* Soundbox Front Face */}
                  <rect x="32" y="46" width="92" height="92" rx="14" fill="#1c1917" />
                  
                  {/* Glowing Audio Waves Face Ring */}
                  <circle cx="78" cy="92" r="32" fill="#0b1528" stroke="#f59e0b" strokeWidth="2.5" />
                  <circle cx="78" cy="92" r="24" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Speaker Waves Icon */}
                  <path d="M72 85 L76 85 L81 81 L81 103 L76 99 L72 99 Z" fill="#f59e0b" />
                  <path d="M85 87 C87 90, 87 94, 85 97" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M89 83 C93 88, 93 96, 89 101" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

                  {/* Top Notification Light & SIM Indicator */}
                  <rect x="62" y="30" width="36" height="5" rx="2.5" fill="#38bdf8" />
                  <circle cx="48" cy="32" r="2.5" fill="#22c55e" />
                </svg>
              </div>

              {/* Interactive + Hotspot Button */}
              <button 
                type="button"
                className="device-hotspot-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#f59e0b',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 12px rgba(245, 158, 11, 0.6), 0 2px 6px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  marginTop: '-12px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#1c1917', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                SmartSpeaker 2<sup>nd</sup> Gen
              </div>
            </div>
          </div>

          {/* ========================================================
              DEVICE 3: EDC MACHINE (Right Side)
              ======================================================== */}
          <div
            className={`stage-device-unit unit-pos ${activeDevice === 'pos' ? 'active-unit' : ''}`}
            onClick={() => setActiveDevice('pos')}
            style={{
              position: 'absolute',
              right: '7%',
              top: '18%',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: activeDevice === 'pos' ? 10 : 4
            }}
          >
            {/* Dynamic Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-28px',
                left: '20px',
                width: '130px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(28, 25, 23, 0.14)',
                filter: 'blur(10px)',
                transform: activeDevice === 'pos' ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.35s ease'
              }}
            />

            {/* Device Body Container with Floating Physics */}
            <div 
              className="device-levitate-pos"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Isometric 3D SVG Artwork: Android POS Machine */}
              <div 
                className="device-art-box"
                style={{
                  width: '165px',
                  height: '210px',
                  position: 'relative',
                  filter: activeDevice === 'pos' ? 'drop-shadow(0 14px 32px rgba(16, 185, 129, 0.5))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 180 230" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Isometric Side Extrusion (Thick POS body) */}
                  <path d="M30 40 L50 20 L150 20 L130 40 Z" fill="#e2e8f0" />
                  <path d="M130 40 L150 20 L160 170 L140 190 Z" fill="#94a3b8" />
                  
                  {/* Top Paper Roll Cover */}
                  <path d="M35 30 L145 30 L140 52 L30 52 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                  <rect x="50" y="24" width="75" height="12" rx="2" fill="#ffffff" stroke="#e2e8f0" />
                  <text x="87" y="32" textAnchor="middle" fontSize="5" fontWeight="700" fill="#94a3b8" fontFamily="sans-serif">RECEIPT</text>

                  {/* Main POS White Body */}
                  <rect x="25" y="45" width="118" height="150" rx="18" fill="#ffffff" stroke="#10b981" strokeWidth="3" />
                  
                  {/* Vivid Touchscreen */}
                  <rect x="35" y="58" width="98" height="126" rx="12" fill="url(#screenGradClean)" />
                  <defs>
                    <linearGradient id="screenGradClean" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="60%" stopColor="#064e3b" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  {/* Verified Checkmark Badge on Screen */}
                  <circle cx="84" cy="98" r="18" fill="#ffffff" />
                  <circle cx="84" cy="98" r="15" fill="#10b981" />
                  <path d="M78 98 L82 102 L91 93" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Screen Text */}
                  <text x="84" y="126" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#ffffff" fontFamily="sans-serif">
                    Payment Successful
                  </text>
                  <text x="84" y="136" textAnchor="middle" fontSize="8" fontWeight="800" fill="#a7f3d0" fontFamily="sans-serif">
                    ₹ 1,450.00
                  </text>
                  <text x="84" y="145" textAnchor="middle" fontSize="5" fontWeight="600" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">
                    RuPay Contactless Tap
                  </text>

                  {/* Contactless Waves on Screen Top */}
                  <path d="M76 68 C80 65, 88 65, 92 68" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M79 72 C82 70, 86 70, 89 72" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Interactive + Hotspot Button */}
              <button 
                type="button"
                className="device-hotspot-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 12px rgba(16, 185, 129, 0.6), 0 2px 6px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  marginTop: '-10px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#1c1917', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                EDC Machine
              </div>
            </div>
          </div>

          {/* ========================================================
              DEVICE 4: QR CODE (Bottom Center)
              ======================================================== */}
          <div
            className={`stage-device-unit unit-qr ${activeDevice === 'qr' ? 'active-unit' : ''}`}
            onClick={() => setActiveDevice('qr')}
            style={{
              position: 'absolute',
              left: '42%',
              bottom: '2%',
              cursor: 'pointer',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: activeDevice === 'qr' ? 10 : 5
            }}
          >
            {/* Dynamic Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-18px',
                left: '10px',
                width: '100px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(28, 25, 23, 0.14)',
                filter: 'blur(8px)',
                transform: activeDevice === 'qr' ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.35s ease'
              }}
            />

            {/* Device Body Container with Floating Physics */}
            <div 
              className="device-levitate-qr"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Isometric 3D SVG Artwork: Tabletop QR Standee */}
              <div 
                className="device-art-box"
                style={{
                  width: '120px',
                  height: '130px',
                  position: 'relative',
                  filter: activeDevice === 'qr' ? 'drop-shadow(0 12px 28px rgba(56, 189, 248, 0.5))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 140 150" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Stand Base Flat Isometric Floor */}
                  <polygon points="15,130 125,130 115,142 5,142" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
                  
                  {/* Angled Acrylic Board */}
                  <polygon points="20,30 120,30 110,130 10,130" fill="#ffffff" stroke="#38bdf8" strokeWidth="3" />
                  <polygon points="25,35 115,35 106,125 16,125" fill="#f0f9ff" />

                  {/* Top UPI Brand Pill */}
                  <rect x="45" y="42" width="50" height="14" rx="4" fill="#0284c7" />
                  <text x="70" y="52" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#ffffff" fontFamily="sans-serif">
                    BHARAT QR
                  </text>

                  {/* Matrix QR Code Pattern */}
                  <g transform="translate(42, 62)">
                    <rect x="0" y="0" width="56" height="56" fill="#ffffff" rx="4" />
                    {/* Corners */}
                    <rect x="4" y="4" width="16" height="16" fill="#0284c7" />
                    <rect x="7" y="7" width="10" height="10" fill="#ffffff" />
                    <rect x="9" y="9" width="6" height="6" fill="#0284c7" />

                    <rect x="36" y="4" width="16" height="16" fill="#0284c7" />
                    <rect x="39" y="7" width="10" height="10" fill="#ffffff" />
                    <rect x="41" y="9" width="6" height="6" fill="#0284c7" />

                    <rect x="4" y="36" width="16" height="16" fill="#0284c7" />
                    <rect x="7" y="39" width="10" height="10" fill="#ffffff" />
                    <rect x="9" y="41" width="6" height="6" fill="#0284c7" />

                    {/* Inner QR Matrix Grid Dots */}
                    <rect x="24" y="8" width="4" height="8" fill="#1c1917" />
                    <rect x="24" y="22" width="8" height="4" fill="#1c1917" />
                    <rect x="28" y="30" width="6" height="6" fill="#0284c7" />
                    <rect x="36" y="24" width="6" height="4" fill="#1c1917" />
                    <rect x="24" y="40" width="8" height="6" fill="#1c1917" />
                    <rect x="36" y="38" width="6" height="8" fill="#1c1917" />
                  </g>
                </svg>
              </div>

              {/* Interactive + Hotspot Button */}
              <button 
                type="button"
                className="device-hotspot-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 12px rgba(2, 132, 199, 0.6), 0 2px 6px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  marginTop: '-8px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '4px', fontSize: '0.8rem', fontWeight: 700, color: '#1c1917', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                QR Code
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hardware Stage Dedicated Keyframe Animations & Media Queries */}
      <style>{`
        @keyframes stageDotBreath {
          0% {
            opacity: 0.35;
            transform: scale(0.85);
          }
          100% {
            opacity: 0.95;
            transform: scale(1.15);
          }
        }

        @keyframes floatDevicePod {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(-0.5deg);
          }
        }

        @keyframes floatDeviceSoundbox {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatDevicePos {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(0.6deg);
          }
        }

        @keyframes floatDeviceQr {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .device-levitate-pod {
          animation: floatDevicePod 4.5s ease-in-out infinite;
        }

        .device-levitate-soundbox {
          animation: floatDeviceSoundbox 4.2s ease-in-out infinite 0.6s;
        }

        .device-levitate-pos {
          animation: floatDevicePos 4.8s ease-in-out infinite 1.2s;
        }

        .device-levitate-qr {
          animation: floatDeviceQr 4.0s ease-in-out infinite 1.8s;
        }

        .stage-device-unit:hover .device-art-box,
        .stage-device-unit.active-unit .device-art-box {
          transform: scale(1.08) translateY(-4px);
        }

        .stage-device-unit:hover .device-hotspot-btn,
        .stage-device-unit.active-unit .device-hotspot-btn {
          transform: scale(1.22);
        }

        @media (max-width: 768px) {
          .isometric-stage-canvas {
            min-height: 400px !important;
          }
          .stage-devices-layer {
            height: 380px !important;
            transform: scale(0.85);
            transform-origin: center center;
          }
        }

        @media (max-width: 480px) {
          .isometric-stage-canvas {
            min-height: 350px !important;
          }
          .stage-devices-layer {
            height: 340px !important;
            transform: scale(0.72);
            transform-origin: center center;
          }
        }
      `}</style>
    </div>
  );
}
