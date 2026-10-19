// Complete dataset of particle dots matching the PhonePe hardware ecosystem reference
// Concentric radiating fans on left and right, glowing aqua/cyan arc at bottom, faded cream at top

const leftCenter = { x: 235, y: 260 };
const rightCenter = { x: 745, y: 260 };

const dots = [];

// ============================================================================
// 1. LEFT WING: 5 Concentric Radiating Arcs of Peach Oval Discs around Smart Pod
// ============================================================================
const leftArcs = [
  { R: 215, count: 10, rx: 26, ry: 13.5, startDeg: 72, endDeg: 288 },
  { R: 175, count: 9,  rx: 23, ry: 12,   startDeg: 78, endDeg: 282 },
  { R: 140, count: 8,  rx: 20, ry: 10.5, startDeg: 84, endDeg: 276 },
  { R: 108, count: 7,  rx: 17, ry: 9,    startDeg: 90, endDeg: 270 },
  { R: 78,  count: 6,  rx: 14, ry: 7.5,  startDeg: 95, endDeg: 265 }
];

for (const arc of leftArcs) {
  for (let i = 0; i < arc.count; i++) {
    const frac = i / (arc.count - 1);
    const deg = arc.startDeg + frac * (arc.endDeg - arc.startDeg);
    const rad = deg * Math.PI / 180;
    const x = Math.round(leftCenter.x - arc.R * Math.cos(rad));
    const y = Math.round(leftCenter.y + arc.R * Math.sin(rad) * 0.95);
    
    // Staggered breathing animation
    const delay = ((dots.length * 0.13) % 2.4).toFixed(1) + 's';
    const dur = (2.6 + ((dots.length * 0.21) % 1.2)).toFixed(1) + 's';
    
    dots.push({
      cx: x,
      cy: y,
      rx: arc.rx,
      ry: arc.ry,
      color: '#f6b17a',
      grad: 'url(#peachDotGrad)',
      opacity: 0.92,
      delay,
      dur
    });
  }
}

// ============================================================================
// 2. RIGHT WING: 5 Concentric Radiating Arcs of Peach Oval Discs around EDC Machine
// ============================================================================
const rightArcs = [
  { R: 215, count: 10, rx: 26, ry: 13.5, startDeg: -72, endDeg: 108 },
  { R: 175, count: 9,  rx: 23, ry: 12,   startDeg: -68, endDeg: 102 },
  { R: 140, count: 8,  rx: 20, ry: 10.5, startDeg: -64, endDeg: 96 },
  { R: 108, count: 7,  rx: 17, ry: 9,    startDeg: -60, endDeg: 90 },
  { R: 78,  count: 6,  rx: 14, ry: 7.5,  startDeg: -55, endDeg: 85 }
];

for (const arc of rightArcs) {
  for (let i = 0; i < arc.count; i++) {
    const frac = i / (arc.count - 1);
    const deg = arc.startDeg + frac * (arc.endDeg - arc.startDeg);
    const rad = deg * Math.PI / 180;
    const x = Math.round(rightCenter.x + arc.R * Math.cos(rad));
    const y = Math.round(rightCenter.y + arc.R * Math.sin(rad) * 0.95);
    
    const delay = ((dots.length * 0.13) % 2.4).toFixed(1) + 's';
    const dur = (2.6 + ((dots.length * 0.21) % 1.2)).toFixed(1) + 's';
    
    dots.push({
      cx: x,
      cy: y,
      rx: arc.rx,
      ry: arc.ry,
      color: '#f6b17a',
      grad: 'url(#peachDotGrad)',
      opacity: 0.92,
      delay,
      dur
    });
  }
}

// ============================================================================
// 3. BOTTOM ACCENT ARCS: Glowing Luminous Aqua/Cyan/Mint Oval Discs under QR Code
// ============================================================================
// Inner glowing aqua arc (directly below QR stand)
const bottomInnerAqua = [
  { cx: 395, cy: 468, rx: 19, ry: 10, color: '#fed7aa', grad: 'url(#peachDotGrad)', opacity: 0.88 },
  { cx: 432, cy: 486, rx: 20, ry: 10.5, color: '#7fe5db', grad: 'url(#aquaDotGrad)', opacity: 0.95 },
  { cx: 472, cy: 496, rx: 21, ry: 11, color: '#5eead4', grad: 'url(#aquaDotGrad)', opacity: 0.98 },
  { cx: 512, cy: 496, rx: 21, ry: 11, color: '#5eead4', grad: 'url(#aquaDotGrad)', opacity: 0.98 },
  { cx: 552, cy: 486, rx: 20, ry: 10.5, color: '#7fe5db', grad: 'url(#aquaDotGrad)', opacity: 0.95 },
  { cx: 588, cy: 468, rx: 19, ry: 10, color: '#fed7aa', grad: 'url(#peachDotGrad)', opacity: 0.88 }
];

// Outer glowing cyan/mint arc
const bottomOuterAqua = [
  { cx: 372, cy: 502, rx: 23, ry: 12, color: '#f5af76', grad: 'url(#peachDotGrad)', opacity: 0.90 },
  { cx: 412, cy: 522, rx: 24, ry: 12.5, color: '#9bf2e9', grad: 'url(#aquaDotGrad)', opacity: 0.95 },
  { cx: 456, cy: 536, rx: 25, ry: 13, color: '#6ee7b7', grad: 'url(#aquaDotGrad)', opacity: 0.98 },
  { cx: 492, cy: 540, rx: 25, ry: 13, color: '#38bdf8', grad: 'url(#cyanDotGrad)', opacity: 0.98 },
  { cx: 528, cy: 536, rx: 25, ry: 13, color: '#6ee7b7', grad: 'url(#aquaDotGrad)', opacity: 0.98 },
  { cx: 572, cy: 522, rx: 24, ry: 12.5, color: '#9bf2e9', grad: 'url(#aquaDotGrad)', opacity: 0.95 },
  { cx: 612, cy: 502, rx: 23, ry: 12, color: '#f5af76', grad: 'url(#peachDotGrad)', opacity: 0.90 }
];

for (const d of [...bottomInnerAqua, ...bottomOuterAqua]) {
  const delay = ((dots.length * 0.15) % 2.4).toFixed(1) + 's';
  const dur = (2.8 + ((dots.length * 0.19) % 1.0)).toFixed(1) + 's';
  dots.push({ ...d, delay, dur });
}

// ============================================================================
// 4. TOP ACCENT ARC: Faded Soft Pastel Cream/Apricot Discs above SmartSpeaker
// ============================================================================
const topFadedDots = [
  { cx: 395, cy: 75, rx: 16, ry: 8.5, color: '#fef3c7', grad: 'url(#fadedCreamGrad)', opacity: 0.48 },
  { cx: 432, cy: 58, rx: 17, ry: 9,   color: '#fed7aa', grad: 'url(#fadedCreamGrad)', opacity: 0.42 },
  { cx: 472, cy: 48, rx: 18, ry: 9.5, color: '#fef3c7', grad: 'url(#fadedCreamGrad)', opacity: 0.38 },
  { cx: 512, cy: 48, rx: 18, ry: 9.5, color: '#fef3c7', grad: 'url(#fadedCreamGrad)', opacity: 0.38 },
  { cx: 552, cy: 58, rx: 17, ry: 9,   color: '#fed7aa', grad: 'url(#fadedCreamGrad)', opacity: 0.42 },
  { cx: 588, cy: 75, rx: 16, ry: 8.5, color: '#fef3c7', grad: 'url(#fadedCreamGrad)', opacity: 0.48 }
];

for (const d of topFadedDots) {
  const delay = ((dots.length * 0.17) % 2.5).toFixed(1) + 's';
  const dur = (3.0 + ((dots.length * 0.23) % 1.0)).toFixed(1) + 's';
  dots.push({ ...d, delay, dur });
}

export const particleDots = dots;
