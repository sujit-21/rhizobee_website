import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-down', 'scale', 'slide-left', 'slide-right'
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    switch (animation) {
      case 'fade-up':
        return 'translateY(28px)';
      case 'fade-down':
        return 'translateY(-28px)';
      case 'scale':
        return 'scale(0.94)';
      case 'slide-left':
        return 'translateX(32px)';
      case 'slide-right':
        return 'translateX(-32px)';
      default:
        return 'translateY(24px)';
    }
  };

  const dynamicStyles = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform'
  };

  return (
    <div ref={elementRef} className={className} style={dynamicStyles}>
      {children}
    </div>
  );
}
