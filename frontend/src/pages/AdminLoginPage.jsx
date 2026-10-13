  import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Mail, 
  User, 
  Key, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Terminal,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  const isSignupDefault = location.pathname.includes('signup');
  const [isSignup, setIsSignup] = useState(isSignupDefault);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'superadmin'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // If already authenticated, allow direct access to Portal DB
  if (isAuthenticated) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--ink)', color: '#ffffff', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '28rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
          <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: 'rgba(22, 86, 214, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: 'var(--sky)' }}>
            <Shield size={28} />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Admin Session Active</h2>
          <p style={{ marginTop: '0.5rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
            You are already authenticated with administrative privileges.
          </p>
          <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button onClick={() => navigate('/admin')} className="btn-royal">
              Go to Database <ArrowRight size={15} />
            </button>
            <Link to="/" className="btn-outline-white">
              Public Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const FIXED_ADMIN_PRESETS = [
    {
      title: 'Super Admin',
      email: 'rhizobeeadmin@gmail.com',
      password: 'rhizobeeadmin@2026',
      badge: 'Superadmin'
    },
    {
      title: 'Shamayel',
      email: 'shamayel@gmail.com',
      password: 'shamayel@2026',
      badge: 'Admin 1'
    },
    {
      title: 'Amir Khan',
      email: 'amirkhan@gmail.com',
      password: 'amirkhan@2026',
      badge: 'Admin 2'
    },
    {
      title: 'Sujit Kumar Gupta',
      email: 'sujitkumargupta@gmail.com',
      password: 'sujtgupta.tech@2026',
      badge: 'Admin 3'
    }
  ];

  const handleSelectAdmin = (preset) => {
    setFormData({
      name: preset.title,
      email: preset.email,
      password: preset.password,
      role: preset.badge === 'Superadmin' ? 'superadmin' : 'admin'
    });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    const endpoint = isSignup ? '/api/admin/signup' : '/api/admin/login';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        login(data.token, data.admin);
        setSuccessMsg(data.message || 'Access granted.');
        setTimeout(() => {
          navigate('/admin');
        }, 800);
      } else {
        setError(data.message || 'Authentication failed. Please check credentials.');
      }
    } catch (err) {
      setError('Cannot connect to backend service. Please check server status.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      style={{
        minHeight: '85vh',
        backgroundColor: 'var(--ink)',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.25rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} aria-hidden="true" />
      <div 
        style={{
          position: 'absolute',
          top: '-10rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '35rem',
          height: '35rem',
          borderRadius: '50%',
          backgroundColor: 'rgba(22, 86, 214, 0.2)',
          filter: 'blur(100px)'
        }} 
      />

      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '26.5rem',
          backgroundColor: 'rgba(10, 26, 58, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '1.25rem',
          padding: '1.75rem 1.85rem',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Stealth Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(217, 164, 65, 0.15)',
              border: '1px solid rgba(217, 164, 65, 0.3)',
              color: 'var(--gold-soft)',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-data)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.65rem'
            }}
          >
            <Terminal size={10}/> Admin Panel
          </div>

          <h1 style={{ fontSize: '1.55rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#ffffff' }}>
            {isSignup ? 'Create Admin Account' : 'Admin Authentication'}
          </h1>
          {/*<p style={{ marginTop: '0.45rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)' }}>
            Adminstrator Only
          </p>*/}
        </div>

        {/* Tab switch */}
        <div 
          style={{
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '0.25rem',
            borderRadius: '0.65rem',
            marginBottom: '1.15rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <button
            type="button"
            onClick={() => { setIsSignup(false); setError(null); }}
            style={{
              flex: 1,
              padding: '0.42rem',
              borderRadius: '0.45rem',
              border: 'none',
              backgroundColor: !isSignup ? 'var(--royal)' : 'transparent',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setIsSignup(true); setError(null); }}
            style={{
              flex: 1,
              padding: '0.42rem',
              borderRadius: '0.45rem',
              border: 'none',
              backgroundColor: isSignup ? 'var(--royal)' : 'transparent',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div 
            style={{
              marginBottom: '1.25rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              color: '#fca5a5',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {successMsg && (
          <div 
            style={{
              marginBottom: '1.25rem',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.35)',
              color: '#86efac',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <CheckCircle2 size={16} /> {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {isSignup && (
            <div>
              <label htmlFor="admin-name-input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.25rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                Admin Name
              </label>
              <div style={{ position: 'relative' }}>
                <User size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.4)' }} />
                <input
                  id="admin-name-input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder=" Administrator"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  style={{
                    padding: '0.62rem 0.85rem 0.62rem 2.35rem',
                    fontSize: '0.875rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#ffffff'
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="admin-email-input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.25rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              Email ID
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.4)' }} />
              <input
                id="admin-email-input"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="admin@rhizobee.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                style={{
                  padding: '0.62rem 0.85rem 0.62rem 2.35rem',
                  fontSize: '0.875rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff'
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-password-input" style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.25rem', color: 'rgba(255, 255, 255, 0.85)' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255, 255, 255, 0.4)' }} />
              <input
                id="admin-password-input"
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                required
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                style={{
                  padding: '0.62rem 2.35rem 0.62rem 2.35rem',
                  fontSize: '0.875rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.8rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-royal"
            style={{ width: '100%', padding: '0.72rem', justifyContent: 'center', marginTop: '0.35rem', fontSize: '0.9rem' }}
          >
            {loading ? 'Authenticating...' : isSignup ? 'SIGNUP' : 'LOGIN'} <ArrowRight size={15} />
          </button>

          {/* Fixed 4 Authorized Admins Selector */}
          <div style={{ marginTop: '0.65rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Authorized Fixed Admins (Quick Fill):</span>
              <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-data)' }}>4 Fixed Accounts</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
              {FIXED_ADMIN_PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectAdmin(p)}
                  style={{
                    backgroundColor: formData.email === p.email ? 'rgba(22, 86, 214, 0.35)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${formData.email === p.email ? 'var(--royal)' : 'rgba(255, 255, 255, 0.12)'}`,
                    borderRadius: '0.55rem',
                    padding: '0.45rem 0.55rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#ffffff' }}>
                      {p.title}
                    </span>
                    <span style={{ fontSize: '0.62rem', padding: '0.1rem 0.3rem', borderRadius: '0.2rem', backgroundColor: p.badge === 'Superadmin' ? 'rgba(217, 164, 65, 0.2)' : 'rgba(22, 86, 214, 0.2)', color: p.badge === 'Superadmin' ? 'var(--gold-soft)' : 'var(--sky)', fontFamily: 'var(--font-data)' }}>
                      {p.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.15rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {p.email}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </form>

        <div style={{ marginTop: '1.35rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)' }}>
          <span>Shortcuts: Ctrl+Shift+A · Ctrl+Shift+~</span>
          <Link to="/" style={{ color: 'var(--sky)', textDecoration: 'none' }}>
            Return to Client Site
          </Link>
        </div>
      </div>
    </div>
  );
}
