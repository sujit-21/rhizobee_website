import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Mail, Phone, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenContactModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout, admin } = useAuth();
  const { theme, isDark, toggleTheme } = useTheme();

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
      className="navbar-sticky"
      style={{ 
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled 
          ? (isDark ? 'rgba(5, 12, 30, 0.95)' : 'rgba(255, 247, 237, 0.95)') 
          : (isDark ? 'rgba(5, 12, 30, 0.88)' : 'rgba(255, 247, 237, 0.88)'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'var(--line)'}`,
        boxShadow: scrolled ? '0 4px 20px -2px rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease'
      }}
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
                  color: active ? 'var(--royal)' : (isDark ? '#cbd5e1' : 'var(--ink-soft)'),
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = 'var(--royal)';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = isDark ? '#cbd5e1' : 'var(--ink-soft)';
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

        {/* Right Corner Wrapper: CTA Actions, Mobile Toggle & Dark Mode Circle Button at Totally Right Corner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
          {/* Desktop Right CTA Actions */}
          <div className="lg-nav-actions" style={{ display: 'none', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            <a 
              href="mailto:info@rhizobee.com" 
              className="nav-email-link"
              style={{ 
                fontSize: '0.925rem', 
                fontWeight: 500, 
                color: isDark ? '#cbd5e1' : 'var(--ink-soft)', 
                textDecoration: 'none',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--royal)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDark ? '#cbd5e1' : 'var(--ink-soft)';
              }}
            >
              info@rhizobee.com
            </a>

            <Link 
              to="/contact" 
              className="btn-royal btn-shimmer"
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
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(22, 86, 214, 0.06)',
                  border: isDark ? '1px solid rgba(59, 130, 246, 0.35)' : '1px solid rgba(22, 86, 214, 0.25)',
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
                  <span>Database</span>
                </Link>

                <span 
                  style={{ 
                    width: '1px', 
                    height: '14px', 
                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.35)' : 'rgba(22, 86, 214, 0.25)', 
                    margin: '0 0.15rem' 
                  }} 
                />

                <button
                  onClick={logout}
                  style={{
                    fontSize: '0.74rem',
                    color: '#f87171',
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
                height: '2.55rem',
                width: '2.55rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                border: `1px solid ${isDark ? '#334155' : 'var(--line)'}`,
                backgroundColor: isDark ? '#1e293b' : '#ffffff',
                color: isDark ? '#f8fafc' : 'var(--ink)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* DARK MODE CIRCLE DESIGN BUTTON (TOTALLY RIGHT CORNER) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              position: 'relative',
              width: '2.65rem',
              height: '2.65rem',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isDark ? '#1e293b' : '#ffffff',
              border: `1.5px solid ${isDark ? '#38bdf8' : '#cbd5e1'}`,
              color: isDark ? '#fbbf24' : '#0a1a3a',
              boxShadow: isDark 
                ? '0 0 16px rgba(56, 189, 248, 0.3), 0 2px 8px rgba(0,0,0,0.5)' 
                : '0 2px 8px rgba(10, 26, 58, 0.08)',
              cursor: 'pointer',
              flexShrink: 0,
              outline: 'none',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              if (isDark) {
                e.currentTarget.style.borderColor = '#fbbf24';
                e.currentTarget.style.boxShadow = '0 0 22px rgba(251, 191, 36, 0.45)';
              } else {
                e.currentTarget.style.borderColor = 'var(--royal)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(22, 86, 214, 0.22)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              if (isDark) {
                e.currentTarget.style.borderColor = '#38bdf8';
                e.currentTarget.style.boxShadow = '0 0 16px rgba(56, 189, 248, 0.3), 0 2px 8px rgba(0,0,0,0.5)';
              } else {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(10, 26, 58, 0.08)';
              }
            }}
          >
            {isDark ? (
              <Sun size={19} style={{ color: '#fbbf24', filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.7))' }} />
            ) : (
              <Moon size={19} style={{ color: '#0a1a3a' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div 
          style={{
            borderTop: `1px solid ${isDark ? '#1e293b' : 'var(--line)'}`,
            backgroundColor: isDark ? '#0f172a' : '#ffffff',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.25)',
            transition: 'background-color 0.2s ease'
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
                    backgroundColor: active ? (isDark ? '#1e293b' : 'var(--paper-dim)') : 'transparent',
                    color: active ? 'var(--royal)' : (isDark ? '#f8fafc' : 'var(--ink)'),
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

            <div style={{ borderTop: `1px solid ${isDark ? '#1e293b' : 'var(--line)'}`, marginTop: '0.75rem', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: isDark ? '#94a3b8' : 'var(--slate)' }}>
                <Phone size={15} color="var(--royal)" /> 022-4585 7049
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: isDark ? '#94a3b8' : 'var(--slate)' }}>
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
                    backgroundColor: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(22, 86, 214, 0.06)',
                    borderRadius: '0.6rem',
                    border: isDark ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(22, 86, 214, 0.2)'
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
                    <span>Database</span>
                    {admin?.name && (
                      <span style={{ fontSize: '0.7rem', color: isDark ? '#94a3b8' : 'var(--slate)', fontWeight: 500 }}>
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
                      color: '#f87171',
                      background: 'rgba(220, 38, 38, 0.12)',
                      border: '1px solid rgba(220, 38, 38, 0.25)',
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
