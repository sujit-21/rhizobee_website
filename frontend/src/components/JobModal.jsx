import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Briefcase, Send } from 'lucide-react';

export default function JobModal({ isOpen, onClose, selectedJob }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: selectedJob?.title || 'Enterprise Sales Manager',
    preferredLocation: selectedJob?.location || '',
    experienceYears: '',
    resumeLink: '',
    coverNote: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          position: selectedJob?.title || formData.position
        })
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(data);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error submitting application. Please try again or email info@rhizobee.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 26, 58, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1.25rem',
          maxWidth: '38rem',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--slate)',
            padding: '0.25rem'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {success ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(22, 86, 214, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <CheckCircle size={36} color="var(--royal)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)' }}>
              Application Submitted!
            </h3>
            <p style={{ marginTop: '0.75rem', color: 'var(--slate)', fontSize: '0.95rem' }}>
              Thank you for applying for <strong>{formData.position}</strong>.
            </p>
            <div
              style={{
                marginTop: '1.25rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'var(--paper)',
                borderRadius: '0.75rem',
                display: 'inline-block',
                fontFamily: 'var(--font-data)',
                fontSize: '0.85rem',
                color: 'var(--royal)'
              }}
            >
              Application ID: {success.data?.applicationId || 'APP-SAVED'}
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.825rem', color: 'var(--slate-dim)' }}>
              Our recruitment team will review your profile and reach out via email or phone.
            </p>
            <button
              onClick={onClose}
              className="btn-royal"
              style={{ marginTop: '1.75rem', width: '100%', justifyContent: 'center' }}
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span className="badge-tag">
                <Briefcase size={14} color="var(--royal)" /> Apply Now
              </span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--ink)' }}>
              {selectedJob?.title || 'Apply for Open Role'}
            </h3>
            {selectedJob && (
              <p style={{ fontSize: '0.85rem', color: 'var(--royal)', fontWeight: 500, marginTop: '0.25rem' }}>
                {selectedJob.openings} · {selectedJob.location} · {selectedJob.ctc}
              </p>
            )}

            {error && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#fee2e2',
                  color: '#b91c1c',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem'
                }}
              >
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    name="preferredLocation"
                    placeholder="e.g. Mumbai, Gurgaon, Pune"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                    Relevant Experience (Years)
                  </label>
                  <input
                    type="number"
                    name="experienceYears"
                    min="0"
                    max="40"
                    placeholder="e.g. 5"
                    value={formData.experienceYears}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                  Resume / LinkedIn Profile Link
                </label>
                <input
                  type="url"
                  name="resumeLink"
                  placeholder="https://drive.google.com/... or LinkedIn URL"
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
                  Brief Note / Why Rhizobee?
                </label>
                <textarea
                  name="coverNote"
                  rows="3"
                  placeholder="Share a short note about your fintech background or key achievements..."
                  value={formData.coverNote}
                  onChange={handleChange}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--line)',
                    backgroundColor: '#ffffff',
                    color: 'var(--ink)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-royal"
                  style={{ flex: 2, justifyContent: 'center' }}
                >
                  {loading ? 'Submitting to MongoDB...' : 'Submit Application'} <Send size={15} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
