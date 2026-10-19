import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-down', 'scale', 'slide-left', 'slide-right'
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = false,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const elementRef = useRef(null);
  const prevScrollY = useRef(0);

  // Monitor scroll direction (up vs down) so animations glide naturally in the direction of scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY.current) {
        setScrollDirection('up');
      }
      prevScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else {
          // Re-arm animation when scrolled away so it animates again when scrolling back (up or down)
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      { 
        threshold: threshold,
        rootMargin: '0px 0px -25px 0px'
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, once]);

  const getInitialTransform = () => {
    const isUp = scrollDirection === 'up';
    switch (animation) {
      case 'fade-up':
        return isUp ? 'translateY(-28px)' : 'translateY(28px)';
      case 'fade-down':
        return isUp ? 'translateY(28px)' : 'translateY(-28px)';
      case 'scale':
        return 'scale(0.92)';
      case 'slide-left':
        return isUp ? 'translateX(32px) translateY(-12px)' : 'translateX(32px) translateY(12px)';
      case 'slide-right':
        return isUp ? 'translateX(-32px) translateY(-12px)' : 'translateX(-32px) translateY(12px)';
      default:
        return isUp ? 'translateY(-24px)' : 'translateY(24px)';
    }
  };

  const dynamicStyles = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transition: isVisible 
      ? `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      : 'opacity 200ms ease, transform 200ms ease',
    willChange: 'opacity, transform'
  };

  return (
    <div ref={elementRef} className={className} style={dynamicStyles}>
      {children}
    </div>
  );
}
