import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Mail, Phone, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenContactModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout, admin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-white/75 backdrop-blur-sm'
      }`}
      style={{ borderBottom: '1px solid var(--line)' }}
    >
      <div 
        className="mx-auto flex items-center justify-between"
        style={{ 
          maxWidth: '88rem', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0.85rem 2rem' 
        }}
      >
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }} aria-label="Rhizobee Innovations home">
          <img 
            src="/images/rhizobee-logo-full.png" 
            alt="Rhizobee Innovations" 
            style={{ height: '2.85rem', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              // fallback if image not ready
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="lg-nav" style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }}>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  position: 'relative',
                  padding: '0.5rem 1.05rem',
                  fontSize: '0.975rem',
                  fontWeight: active ? 600 : 500,
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  color: active ? 'var(--royal)' : 'var(--ink-soft)',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--royal)';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--ink-soft)';
                }}
              >
                {link.label}
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      left: '0.85rem',
                      right: '0.85rem',
                      bottom: '-2px',
                      height: '2.5px',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--gold)'
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="lg-nav-actions" style={{ display: 'none', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
          <a 
            href="mailto:info@rhizobee.com" 
            className="nav-email-link"
            style={{ 
              fontSize: '0.925rem', 
              fontWeight: 500, 
              color: 'var(--ink-soft)', 
              textDecoration: 'none',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--royal)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--ink-soft)';
            }}
          >
            info@rhizobee.com
          </a>

          <Link 
            to="/contact" 
            className="btn-royal"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.925rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            Get in Touch
          </Link>

          {/* Stealth Admin Mode - only visible when logged in */}
          {isAuthenticated && (
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem',
                backgroundColor: 'rgba(22, 86, 214, 0.06)',
                border: '1px solid rgba(22, 86, 214, 0.25)',
                borderRadius: '9999px',
                padding: '0.28rem 0.35rem 0.28rem 0.65rem',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              <Link 
                to="/admin" 
                style={{ 
                  fontSize: '0.78rem', 
                  fontWeight: 600, 
                  color: 'var(--royal)', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  whiteSpace: 'nowrap'
                }}
                title={`Admin Portal: ${admin?.email || 'Logged in'}`}
              >
                <ShieldCheck size={14} color="var(--royal)" />
                <span>Portal DB</span>
              </Link>

              <span 
                style={{ 
                  width: '1px', 
                  height: '14px', 
                  backgroundColor: 'rgba(22, 86, 214, 0.25)', 
                  margin: '0 0.15rem' 
                }} 
              />

              <button
                onClick={logout}
                style={{
                  fontSize: '0.74rem',
                  color: '#dc2626',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  padding: '0.2rem 0.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                title="Log out from admin"
              >
                <LogOut size={12} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'inline-flex',
              height: '2.5rem',
              width: '2.5rem',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '9999px',
              border: '1px solid var(--line)',
              backgroundColor: '#ffffff',
              color: 'var(--ink)',
              cursor: 'pointer'
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div 
          style={{
            borderTop: '1px solid var(--line)',
            backgroundColor: '#ffffff',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '0.65rem 1rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    backgroundColor: active ? 'var(--paper-dim)' : 'transparent',
                    color: active ? 'var(--royal)' : 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {link.label}
                  {active && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--gold)' }} />}
                </Link>
              );
            })}

            <div style={{ borderTop: '1px solid var(--line)', marginTop: '0.75rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--slate)' }}>
                <Phone size={15} color="var(--royal)" /> 022-4585 7049
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--slate)' }}>
                <Mail size={15} color="var(--royal)" /> info@rhizobee.com
              </div>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="btn-royal" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>

              {isAuthenticated && (
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    gap: '0.5rem', 
                    marginTop: '0.5rem',
                    padding: '0.45rem 0.65rem',
                    backgroundColor: 'rgba(22, 86, 214, 0.06)',
                    borderRadius: '0.6rem',
                    border: '1px solid rgba(22, 86, 214, 0.2)'
                  }}
                >
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--royal)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <ShieldCheck size={15} color="var(--royal)" />
                    <span>Portal DB</span>
                    {admin?.name && (
                      <span style={{ fontSize: '0.7rem', color: 'var(--slate)', fontWeight: 500 }}>
                        ({admin.name.split(' ')[0]})
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    style={{
                      fontSize: '0.74rem',
                      color: '#dc2626',
                      background: 'rgba(220, 38, 38, 0.08)',
                      border: '1px solid rgba(220, 38, 38, 0.2)',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      padding: '0.25rem 0.6rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <LogOut size={12} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Responsive media style override */}
      <style>{`
        @media (min-width: 1024px) {
          .lg-nav {
            display: flex !important;
          }
          .lg-nav-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (min-width: 1024px) and (max-width: 1240px) {
          .nav-email-link {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
