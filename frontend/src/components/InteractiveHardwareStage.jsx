import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { particleDots } from './formattedDots';

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
        {/* SVG Elliptical Particle Wave Field (Expanded Circumference 1000x550) */}
        <svg 
          viewBox="0 0 1000 550" 
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
            {/* Peach / Apricot 3D Dot Gradient (Wings) */}
            <linearGradient id="peachDotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde0bf" />
              <stop offset="35%" stopColor="#f6b17a" />
              <stop offset="100%" stopColor="#e8985c" />
            </linearGradient>

            {/* Glowing Aqua / Mint 3D Dot Gradient (Bottom Arc) */}
            <linearGradient id="aquaDotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c7fbf5" />
              <stop offset="40%" stopColor="#5eead4" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>

            {/* Glowing Cyan 3D Dot Gradient (Bottom Center Accent) */}
            <linearGradient id="cyanDotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Faded Soft Cream 3D Dot Gradient (Top Arc) */}
            <linearGradient id="fadedCreamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>

            {/* Subtle Ambient Drop Shadow for Dots */}
            <filter id="softDotShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#ea580c" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* Render All Particle Wave Isometric Dots:
              - Radiating concentric arcs on left and right wings
              - Signature glowing aqua/cyan arc under QR Code
              - Sized small at center to big at outer circumference
              - Guaranteed gaps and zero box collisions
          */}
          {particleDots.map((dot, i) => (
            <g key={i} style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}>
              {/* Main Glowing Isometric Oval Disc */}
              <ellipse
                cx={dot.cx}
                cy={dot.cy}
                rx={dot.rx}
                ry={dot.ry}
                fill={dot.grad || dot.color}
                opacity={dot.opacity || 0.92}
                filter="url(#softDotShadow)"
                style={{
                  animation: `stageDotBreath ${dot.dur} ease-in-out infinite alternate ${dot.delay}`,
                  transformOrigin: `${dot.cx}px ${dot.cy}px`
                }}
              />
              {/* 3D Specular Highlight pill for glossy finish */}
              <ellipse
                cx={dot.cx - dot.rx * 0.22}
                cy={dot.cy - dot.ry * 0.24}
                rx={dot.rx * 0.36}
                ry={dot.ry * 0.30}
                fill="#ffffff"
                opacity={dot.opacity * 0.42}
                style={{ pointerEvents: 'none' }}
              />
            </g>
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
            {/* Dynamic Isometric Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-28px',
                left: '20px',
                width: '110px',
                height: '35px',
                borderRadius: '50%',
                backgroundColor: 'rgba(95, 37, 159, 0.22)',
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
                  filter: activeDevice === 'pod' ? 'drop-shadow(0 14px 30px rgba(95, 37, 159, 0.45))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 160 240" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Stand Base & Side Thickness (Isometric 3D) */}
                  <path d="M40 200 L120 200 L140 215 L20 215 Z" fill="#ede9fe" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M20 215 L140 215 L135 224 L15 224 Z" fill="#a78bfa" />
                  <path d="M38 180 L48 200 L112 200 L122 180 Z" fill="#e2e8f0" />

                  {/* Main Pod Terminal Angled Body - White with Royal Purple Border */}
                  <rect x="25" y="25" width="110" height="170" rx="16" fill="#ffffff" stroke="#5f259f" strokeWidth="3.5" />
                  <rect x="30" y="30" width="100" height="160" rx="12" fill="#faf5ff" />

                  {/* Top PhonePe Logo & Brand Header */}
                  <circle cx="54" cy="45" r="6" fill="#5f259f" />
                  <text x="54" y="48" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif">पे</text>
                  <text x="66" y="47.5" fontSize="7.5" fontWeight="800" fill="#5f259f" fontFamily="sans-serif">PhonePe</text>

                  {/* Purple NFC Contactless Wave Rings */}
                  <g transform="translate(80, 95)">
                    <circle cx="0" cy="0" r="16" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="2" />
                    <path d="M-7 5 C-10 0, -10 -5, -7 -10" stroke="#5f259f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M-2 9 C-6 2, -6 -6, -2 -13" stroke="#5f259f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M3 13 C-2 3, -2 -7, 3 -17" stroke="#5f259f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </g>

                  {/* Display Text Label */}
                  <text x="80" y="130" textAnchor="middle" fontSize="7" fontWeight="700" fill="#1c1917" fontFamily="sans-serif">
                    Cards Accepted
                  </text>
                  <text x="80" y="139" textAnchor="middle" fontSize="5.5" fontWeight="500" fill="#6b7280" fontFamily="sans-serif">
                    Tap or Insert to Pay
                  </text>

                  {/* Bottom Chip Insert Slot */}
                  <rect x="42" y="152" width="76" height="20" rx="4" fill="#1c1917" />
                  <rect x="52" y="161" width="56" height="3.5" rx="1.75" fill="#a78bfa" />
                </svg>
              </div>

              {/* Purple Hotspot Button */}
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
                  backgroundColor: '#5f259f',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 14px rgba(95, 37, 159, 0.5), 0 2px 6px rgba(0,0,0,0.18)',
                  cursor: 'pointer',
                  marginTop: '-10px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '5px', fontSize: '0.8rem', fontWeight: 800, color: '#1c1917', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                SMART POD
              </div>
            </div>
          </div>

          {/* ========================================================
              DEVICE 2: SMARTSPEAKER 2nd GEN (Top Center) - PhonePe Purple
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
            {/* Dynamic Isometric Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '15px',
                width: '120px',
                height: '35px',
                borderRadius: '50%',
                backgroundColor: 'rgba(95, 37, 159, 0.18)',
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
                  width: '145px',
                  height: '155px',
                  position: 'relative',
                  filter: activeDevice === 'soundbox' ? 'drop-shadow(0 14px 30px rgba(95, 37, 159, 0.45))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 170 170" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Isometric Side Extrusions - White & Purple */}
                  <path d="M30 40 L45 20 L145 20 L130 40 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M130 40 L145 20 L145 120 L130 140 Z" fill="#ede9fe" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M25 45 L130 40 L130 140 L25 145 Z" fill="#ffffff" stroke="#5f259f" strokeWidth="3" />

                  {/* Soundbox Front Face - Rich Royal Purple Screen */}
                  <rect x="32" y="46" width="92" height="92" rx="14" fill="#5f259f" />

                  {/* Top PhonePe Logo */}
                  <circle cx="78" cy="60" r="5" fill="#ffffff" />
                  <text x="78" y="62.5" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#5f259f" fontFamily="sans-serif">पे</text>

                  {/* Stylized QR / Audio Face (o:r o:r pattern) */}
                  <g transform="translate(46, 70)">
                    <rect x="4" y="4" width="22" height="22" rx="4" fill="none" stroke="#ffffff" strokeWidth="3" />
                    <circle cx="15" cy="15" r="4" fill="#ffffff" />

                    <rect x="36" y="4" width="22" height="22" rx="4" fill="none" stroke="#ffffff" strokeWidth="3" />
                    <circle cx="47" cy="15" r="4" fill="#ffffff" />

                    <rect x="4" y="34" width="22" height="22" rx="4" fill="none" stroke="#ffffff" strokeWidth="3" />
                    <circle cx="15" cy="45" r="4" fill="#ffffff" />

                    <path d="M38 36 L56 36 L56 54" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              {/* Purple Hotspot Button */}
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
                  backgroundColor: '#5f259f',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 14px rgba(95, 37, 159, 0.5), 0 2px 6px rgba(0,0,0,0.18)',
                  cursor: 'pointer',
                  marginTop: '-12px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '5px', fontSize: '0.8rem', fontWeight: 800, color: '#1c1917', letterSpacing: '0.02em' }}>
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
            {/* Dynamic Isometric Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-28px',
                left: '20px',
                width: '130px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(95, 37, 159, 0.20)',
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
                  filter: activeDevice === 'pos' ? 'drop-shadow(0 14px 30px rgba(95, 37, 159, 0.45))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 180 230" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Isometric Side Extrusion - Purple Ergonomic Grip */}
                  <path d="M30 40 L50 20 L150 20 L130 40 Z" fill="#ede9fe" stroke="#cbd5e1" strokeWidth="1" />
                  <path d="M130 40 L150 20 L160 170 L140 190 Z" fill="#5f259f" />
                  
                  {/* Top Paper Roll Cover */}
                  <path d="M35 30 L145 30 L140 52 L30 52 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
                  <rect x="50" y="24" width="75" height="12" rx="2" fill="#ffffff" stroke="#e2e8f0" />

                  {/* Main POS White Body */}
                  <rect x="25" y="45" width="118" height="150" rx="18" fill="#ffffff" stroke="#5f259f" strokeWidth="3" />
                  
                  {/* Vivid Touchscreen */}
                  <rect x="35" y="58" width="98" height="126" rx="12" fill="url(#posScreenGrad)" />
                  <defs>
                    <linearGradient id="posScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e1b4b" />
                      <stop offset="60%" stopColor="#4c1d95" />
                      <stop offset="100%" stopColor="#5f259f" />
                    </linearGradient>
                  </defs>

                  {/* PhonePe Logo on Screen Header */}
                  <circle cx="84" cy="74" r="5" fill="#ffffff" />
                  <text x="84" y="76.5" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#5f259f" fontFamily="sans-serif">पे</text>

                  {/* Verified Checkmark Badge on Screen */}
                  <circle cx="84" cy="106" r="20" fill="#ffffff" />
                  <circle cx="84" cy="106" r="17" fill="#10b981" />
                  <path d="M77 106 L82 111 L92 101" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Screen Text */}
                  <text x="84" y="140" textAnchor="middle" fontSize="7" fontWeight="800" fill="#ffffff" fontFamily="sans-serif">
                    Payment Successful
                  </text>
                  <text x="84" y="152" textAnchor="middle" fontSize="6" fontWeight="600" fill="#ddd6fe" fontFamily="sans-serif">
                    ₹ 1,450.00
                  </text>
                </svg>
              </div>

              {/* Purple Hotspot Button */}
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
                  backgroundColor: '#5f259f',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 14px rgba(95, 37, 159, 0.5), 0 2px 6px rgba(0,0,0,0.18)',
                  cursor: 'pointer',
                  marginTop: '-10px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '5px', fontSize: '0.8rem', fontWeight: 800, color: '#1c1917', letterSpacing: '0.02em' }}>
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
            {/* Dynamic Isometric Contact Shadow */}
            <div 
              className="device-contact-shadow"
              style={{
                position: 'absolute',
                bottom: '-18px',
                left: '10px',
                width: '100px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(95, 37, 159, 0.20)',
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
                  width: '125px',
                  height: '135px',
                  position: 'relative',
                  filter: activeDevice === 'qr' ? 'drop-shadow(0 14px 28px rgba(95, 37, 159, 0.45))' : 'drop-shadow(0 8px 18px rgba(0,0,0,0.12))',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              >
                <svg viewBox="0 0 140 150" fill="none" style={{ width: '100%', height: '100%' }}>
                  {/* Stand Base Flat Isometric Floor */}
                  <polygon points="15,130 125,130 115,142 5,142" fill="#ede9fe" stroke="#cbd5e1" strokeWidth="1.5" />
                  
                  {/* Angled Acrylic Board with Purple Rim */}
                  <polygon points="20,30 120,30 110,130 10,130" fill="#ffffff" stroke="#5f259f" strokeWidth="3.5" />
                  <polygon points="25,35 115,35 106,125 16,125" fill="#faf5ff" />

                  {/* Top PhonePe Brand Header Pill */}
                  <rect x="42" y="40" width="56" height="16" rx="8" fill="#5f259f" />
                  <circle cx="52" cy="48" r="5" fill="#ffffff" />
                  <text x="52" y="50.5" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#5f259f" fontFamily="sans-serif">पे</text>
                  <text x="63" y="50" fontSize="7" fontWeight="800" fill="#ffffff" fontFamily="sans-serif">PhonePe</text>

                  {/* Stylized QR Pattern in Purple */}
                  <g transform="translate(42, 62)">
                    <rect x="0" y="0" width="56" height="56" fill="#ffffff" rx="6" stroke="#e9d5ff" strokeWidth="1" />
                    
                    {/* Top-Left Corner */}
                    <rect x="4" y="4" width="16" height="16" rx="3" fill="#5f259f" />
                    <rect x="7" y="7" width="10" height="10" rx="1.5" fill="#ffffff" />
                    <rect x="9" y="9" width="6" height="6" rx="1" fill="#5f259f" />

                    {/* Top-Right Corner */}
                    <rect x="36" y="4" width="16" height="16" rx="3" fill="#5f259f" />
                    <rect x="39" y="7" width="10" height="10" rx="1.5" fill="#ffffff" />
                    <rect x="41" y="9" width="6" height="6" rx="1" fill="#5f259f" />

                    {/* Bottom-Left Corner */}
                    <rect x="4" y="36" width="16" height="16" rx="3" fill="#5f259f" />
                    <rect x="7" y="39" width="10" height="10" rx="1.5" fill="#ffffff" />
                    <rect x="9" y="41" width="6" height="6" rx="1" fill="#5f259f" />

                    {/* Matrix Center Grid */}
                    <rect x="24" y="8" width="8" height="8" rx="2" fill="#5f259f" />
                    <rect x="24" y="24" width="8" height="8" rx="2" fill="#5f259f" />
                    <rect x="36" y="24" width="8" height="8" rx="2" fill="#5f259f" />
                    <rect x="24" y="40" width="8" height="8" rx="2" fill="#5f259f" />
                    <rect x="40" y="40" width="8" height="8" rx="2" fill="#5f259f" />
                  </g>
                </svg>
              </div>

              {/* Purple Hotspot Button */}
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
                  backgroundColor: '#5f259f',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 14px rgba(95, 37, 159, 0.5), 0 2px 6px rgba(0,0,0,0.18)',
                  cursor: 'pointer',
                  marginTop: '-10px',
                  transition: 'transform 0.2s ease'
                }}
              >
                <Plus size={14} strokeWidth={3} />
              </button>

              <div style={{ marginTop: '5px', fontSize: '0.8rem', fontWeight: 800, color: '#1c1917', letterSpacing: '0.02em' }}>
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
