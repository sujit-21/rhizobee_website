import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 1600, className = '', style = {} }) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If element is not in view or already animated, return
    const el = elementRef.current;
    if (!el) return;

    // Parse the value: e.g. "99.9%", "10,000+", "500,000+", "24/7", "12+", "100%", "7"
    const strVal = String(value).trim();

    // Special handling for non-standard counters like "24/7"
    if (strVal === '24/7') {
      setDisplayValue('24/7');
      return;
    }

    // Extract numbers, decimals, and prefix/suffix
    const match = strVal.match(/^([^0-9.]*)([0-9,.]+)([^0-9.]*)$/);
    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1] || '';
    const rawNumberStr = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNum = parseFloat(rawNumberStr);

    if (isNaN(targetNum)) {
      setDisplayValue(strVal);
      return;
    }

    const isDecimal = rawNumberStr.includes('.');
    const decimalPlaces = isDecimal ? rawNumberStr.split('.')[1].length : 0;
    const hasCommas = match[2].includes(',');

    const formatNumber = (num) => {
      let formatted = num.toFixed(decimalPlaces);
      if (hasCommas) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formatted = parts.join('.');
      }
      return `${prefix}${formatted}${suffix}`;
    };

    // Initialize with 0
    setDisplayValue(formatNumber(0));

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            let startTime = null;

            const step = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease out quart
              const easeProgress = 1 - Math.pow(1 - progress, 4);
              const currentNum = easeProgress * targetNum;
              setDisplayValue(formatNumber(currentNum));

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(strVal); // Ensure exact final value
              }
            };

            requestAnimationFrame(step);
          }
        } else {
          // Reset when scrolled out of view so it can animate again when scrolled back
          hasAnimated.current = false;
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className={className} style={style}>
      {displayValue}
    </span>
  );
}
