import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  IndianRupee, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Clock,
  MessageSquare,
  Heart,
  Zap,
  Coffee
} from 'lucide-react';
import JobModal from '../components/JobModal';
import ScrollReveal from '../components/ScrollReveal';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dbJobs, setDbJobs] = useState([]);

  useEffect(() => {
    fetch('/api/content?tab=careers&status=active')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          const mapped = data.data.map(item => ({
            title: item.title,
            department: item.subtitle || item.category || 'Fintech',
            openings: item.extraData?.openingsCount ? `${item.extraData.openingsCount} openings` : 'Active Opening',
            location: item.extraData?.location || 'Mumbai / Hybrid',
            ctc: item.extraData?.salary ? `${item.extraData.salary}` : 'Competitive CTC in ₹',
            desc: item.description
          }));
          setDbJobs(mapped);
        }
      })
      .catch(err => console.log('Using default jobs', err));
  }, []);

  const values = [
    {
      title: 'Ownership over oversight',
      desc: 'We hire people we trust to make good decisions, then get out of their way. You will own your accounts, code, and relationships end-to-end.',
      icon: <Users size={22} color="var(--royal)" />
    },
    {
      title: 'Compliance as craft',
      desc: 'In fintech, getting compliance and security right is part of doing the job well, not a separate concern. We take immense pride in bulletproof operations.',
      icon: <Shield size={22} color="var(--gold)" />
    },
    {
      title: 'Direct communication',
      desc: 'Feedback is specific, timely, and given with the intent of helping you do better work. No office politics or convoluted hierarchies.',
      icon: <MessageSquare size={22} color="var(--royal)" />
    },
    {
      title: 'Sustainable pace',
      desc: 'Good engineering and durable banking partnerships happen over years, not through repeated all-night crunch. We build for longevity.',
      icon: <Clock size={22} color="var(--gold)" />
    }
  ];

  const defaultJobs = [
    {
      title: 'Enterprise Sales Manager',
      department: 'Sales & Merchant Acquiring',
      openings: '7 openings',
      location: 'Gurgaon, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad',
      ctc: 'CTC ₹7–12L',
      desc: 'Lead merchant acquisition across metro and tier-2 cities, driving growth in digital payment adoption. The role involves building and managing relationships with enterprise merchants, SMEs, and cooperative banks, achieving sales targets through structured pipelines, and promoting co-branded solutions such as QR codes, soundboxes, payment gateways, and POS devices. Ideal candidate has 5–8 years of experience in fintech, payments, or banking with a strong merchant network.'
    },
    {
      title: 'Reception cum Admin and HR',
      department: 'Corporate Administration',
      openings: '1 opening',
      location: 'Marol, Andheri East, Mumbai',
      ctc: 'CTC ₹2–4L',
      desc: 'Manage front-desk operations, provide administrative support, and assist in HR functions. The role includes handling calls and visitor management, coordinating office activities, maintaining records, supporting recruitment and onboarding processes, managing employee documentation, and ensuring smooth day-to-day operations.'
    },
    {
      title: 'Business Development Manager – Corporate Tie-ups (MICE)',
      department: 'Corporate Partnerships',
      openings: '2 openings',
      location: 'Mumbai',
      ctc: 'CTC ₹3–7L',
      desc: 'Drive partnerships with corporates for Meetings, Incentives, Conferences, and Exhibitions (MICE). Identifying and engaging corporate clients, building long-term relationships, and creating customized corporate payment and travel allowance solutions. 4–7 years in corporate sales or business development.'
    },
    {
      title: 'Business Development Manager – Travel & Agency Tie-ups',
      department: 'Alliances & Distribution',
      openings: '2 openings',
      location: 'Mumbai & Goa',
      ctc: 'CTC ₹3–7L',
      desc: 'Drive alliances with travel agencies and tourism stakeholders for integrated payment acceptance and tour packages. Negotiating commercial terms, building long-term merchant relationships, and maximizing bookings via our fintech distribution rails.'
    }
  ];

  const jobsToDisplay = dbJobs.length > 0 ? dbJobs : defaultJobs;

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* HERO SECTION WITH WORKSPACE CULTURE PHOTO */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6.5rem', paddingBottom: '7rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div 
          className="animate-glow-pulse"
          style={{
            position: 'absolute',
            right: '-6rem',
            top: '-6rem',
            height: '28rem',
            width: '28rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(22, 86, 214, 0.35)',
            filter: 'blur(90px)',
            pointerEvents: 'none'
          }} 
        />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Copy */}
            <ScrollReveal animation="fade-up">
              <span className="badge-tag" style={{ color: 'var(--sky)' }}>
                <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
                Careers at Rhizobee
              </span>

              <h1 style={{ fontSize: '3.25rem', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '1rem', lineHeight: 1.15 }}>
                Build India's digital payment rails <span className="text-gradient">with us</span>
              </h1>

              <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.78)' }}>
                We're a team of payment operators, engineers, and merchant champions building the financial distribution infrastructure behind India's fastest-growing storefronts.
              </p>

              <div style={{ marginTop: '2.25rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="#open-positions" className="btn-royal btn-shimmer" style={{ padding: '0.875rem 1.85rem' }}>
                  View Open Roles <ArrowRight size={16} />
                </a>
              </div>

              {/* Culture Perks Strip */}
              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Heart size={16} color="#fb7185" /> Comprehensive Health Coverage
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Zap size={16} color="var(--gold-soft)" /> Performance Incentives
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Coffee size={16} color="var(--sky)" /> Collaborative Culture
                </span>
              </div>
            </ScrollReveal>

            {/* Right Photo */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ position: 'relative' }}>
                <div 
                  className="animate-float"
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    right: '12px',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(10, 26, 58, 0.92)',
                    border: '1px solid rgba(63, 169, 245, 0.4)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <span className="beacon-pulse-green" />
                  <span>We're Hiring Across India</span>
                </div>

                <div 
                  style={{
                    borderRadius: '1.75rem',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    background: 'linear-gradient(145deg, rgba(20, 42, 82, 0.8) 0%, rgba(10, 26, 58, 0.95) 100%)',
                    boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                    padding: '10px'
                  }}
                >
                  <div style={{ borderRadius: '1.25rem', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src="/images/careers/careers-culture.jpg" 
                      alt="Rhizobee Innovations fintech workspace and team collaboration" 
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        maxHeight: '360px'
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10, 26, 58, 0.85) 0%, transparent 60%)',
                        pointerEvents: 'none'
                      }}
                    />
                    <div style={{ position: 'absolute', bottom: '14px', left: '16px', color: '#ffffff' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Rhizobee Culture</div>
                      <div style={{ fontSize: '0.725rem', color: 'rgba(255, 255, 255, 0.75)' }}>Innovate • Collaborate • Scale</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '68rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ justifyContent: 'center' }}>
                <span className="badge-dot" />
                HOW WE OPERATE
              </span>
              <h2 
                className="heading-single-line"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.35rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}
              >
                Values that guide how we build and scale
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {values.map((v, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="fintech-card-interactive" style={{ height: '100%' }}>
                  <div className="icon-box-hover" style={{ marginBottom: '1rem', width: '42px', height: '42px', borderRadius: '8px', backgroundColor: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--slate)' }}>
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '68rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
              <span className="badge-tag" style={{ justifyContent: 'center' }}>
                <span className="badge-dot" />
                CURRENT OPPORTUNITIES
              </span>
              <h2 
                className="heading-single-line"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.35rem)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}
              >
                Join our growing team
              </h2>
              <p 
                className="subheading-balanced subheading-single-line-desktop"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', color: 'var(--slate)', lineHeight: 1.6, marginTop: '0.5rem', maxWidth: '68rem', margin: '0.5rem auto 0' }}
              >
                We're always looking for ambitious individuals eager to make an impact in India's digital payments journey.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {jobsToDisplay.map((job, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div 
                  className="fintech-card-interactive"
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(22, 86, 214, 0.08)',
                          color: 'var(--royal)'
                        }}
                      >
                        {job.department}
                      </span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--gold)' }}>
                        {job.openings}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                      {job.title}
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--slate-dim)', marginBottom: '1.25rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} color="var(--slate)" /> {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <IndianRupee size={14} color="var(--slate)" /> {job.ctc}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.8875rem', lineHeight: 1.6, color: 'var(--slate)', marginBottom: '1.5rem' }}>
                      {job.desc.length > 175 ? `${job.desc.substring(0, 175)}...` : job.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleApply(job)}
                    className="btn-royal btn-shimmer"
                    style={{ width: '100%', padding: '0.75rem', fontSize: '0.875rem' }}
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOB APPLICATION MODAL */}
      <JobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        job={selectedJob} 
      />
    </div>
  );
}
