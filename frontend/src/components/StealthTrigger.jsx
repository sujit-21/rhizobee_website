import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Terminal, X, ArrowRight, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function StealthTrigger() {
  const navigate = useNavigate();
  const { isAuthenticated, admin, logout } = useAuth();
  const [showStealthNotice, setShowStealthNotice] = useState(false);
  const [noticeText, setNoticeText] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl + Shift (or Cmd + Shift on Mac)
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;

      if (!isCtrlOrCmd || !isShift) return;

      // 1. Ctrl + Shift + A
      const isKeyA = e.key.toLowerCase() === 'a' || e.code === 'KeyA';

      // 2. Ctrl + Shift + ~ (tilde/backtick key)
      const isKeyTilde = 
        e.key === '~' || 
        e.key === '`' || 
        e.code === 'Backquote' || 
        e.keyCode === 192;

      if (isKeyA || isKeyTilde) {
        e.preventDefault();
        e.stopPropagation();

        const triggerName = isKeyA ? 'Ctrl + Shift + A' : 'Ctrl + Shift + ~';
        setNoticeText(`Stealth Admin Triggered (${triggerName})`);
        setShowStealthNotice(true);

        setTimeout(() => {
          if (isAuthenticated) {
            navigate('/admin');
          } else {
            navigate('/admin/login');
          }
        }, 600);

        setTimeout(() => {
          setShowStealthNotice(false);
        }, 3500);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, isAuthenticated]);

  if (!showStealthNotice) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: 9999,
        backgroundColor: '#0a1a3a',
        color: '#ffffff',
        border: '1px solid rgba(217, 164, 65, 0.4)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
        borderRadius: '0.85rem',
        padding: '0.85rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        fontFamily: 'var(--font-data)',
        fontSize: '0.85rem',
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <div
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(217, 164, 65, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--gold)'
        }}
      >
        <Terminal size={16} />
      </div>

      <div>
        <div style={{ fontWeight: 600, color: 'var(--gold-soft)', letterSpacing: '0.04em' }}>
          {noticeText}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.65)' }}>
          {isAuthenticated ? `Authenticated as ${admin?.name}. Opening Portal DB...` : 'Opening Stealth Authentication...'}
        </div>
      </div>

      <button
        onClick={() => setShowStealthNotice(false)}
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          padding: '0.2rem',
          marginLeft: '0.5rem'
        }}
      >
        <X size={15} />
      </button>

      <style>{`
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
