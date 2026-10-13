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
  MessageSquare
} from 'lucide-react';
import JobModal from '../components/JobModal';

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

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        <div className="lattice-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div className="container-custom" style={{ position: 'relative', maxWidth: '48rem', textAlign: 'center' }}>
          <span className="badge-tag" style={{ justifyContent: 'center', color: 'var(--sky)' }}>
            <span className="badge-dot" style={{ backgroundColor: 'var(--gold)' }} />
            Careers at Rhizobee
          </span>

          <h1 style={{ fontSize: '3.15rem', fontWeight: 600, letterSpacing: '-0.02em', marginTop: '1.25rem', lineHeight: 1.15 }}>
            Deliver payment solutions <span className="text-gradient">businesses truly rely on.</span>
          </h1>

          <p style={{ marginTop: '1.25rem', fontSize: '1.125rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)' }}>
            We provide trusted solutions and strategic partnerships powering India's next wave of digital payments. Join a team focused on real execution and sustainable impact.
          </p>

          <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#openings" className="btn-royal" style={{ padding: '0.85rem 1.75rem' }}>
              View Open Roles <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IT'S LIKE ON THE TEAM */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid var(--line)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto 4rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Work Culture
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              What it's like on the team
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)', marginTop: '0.75rem' }}>
              We build meaningful products without unnecessary corporate friction.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, idx) => (
              <div key={idx} className="feature-card">
                <div style={{ marginBottom: '1rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.8875rem', lineHeight: 1.6, color: 'var(--slate)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section id="openings" style={{ backgroundColor: 'var(--paper)', paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-custom">
          <div style={{ maxWidth: '42rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
            <span className="badge-tag" style={{ justifyContent: 'center' }}>
              <span className="badge-dot" />
              Join Our Mission
            </span>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
              Current openings
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate)', marginTop: '0.75rem' }}>
              If you're passionate about helping small businesses and enterprises embrace digital payment transformation, we'd love to connect with you.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '58rem', margin: '0 auto' }}>
            {(dbJobs.length > 0 ? dbJobs : defaultJobs).map((job, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '1.25rem',
                  padding: '2rem',
                  border: '1px solid var(--line)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div>
                    <span className="font-data" style={{ fontSize: '0.75rem', color: 'var(--royal)', fontWeight: 600 }}>
                      {job.department}
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.25rem' }}>
                      {job.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => handleApply(job)}
                    className="btn-royal"
                    style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
                  >
                    Apply Now <ArrowRight size={15} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--slate)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--royal)', fontWeight: 600 }}>
                    <Users size={15} /> {job.openings}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={15} color="var(--gold)" /> {job.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-data)', fontWeight: 600, color: 'var(--ink)' }}>
                    <IndianRupee size={15} color="var(--royal)" /> {job.ctc}
                  </span>
                </div>

                <p style={{ fontSize: '0.925rem', lineHeight: 1.65, color: 'var(--slate)', borderTop: '1px solid var(--paper-dim)', paddingTop: '1rem' }}>
                  {job.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Fallback box */}
          <div 
            style={{
              maxWidth: '58rem',
              margin: '3rem auto 0',
              padding: '2rem',
              borderRadius: '1.25rem',
              border: '1px dashed var(--royal)',
              backgroundColor: 'rgba(22, 86, 214, 0.03)',
              textAlign: 'center'
            }}
          >
            <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)' }}>
              Don't see a role that fits?
            </h4>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--slate)' }}>
              Send your resume and a note about what you'd want to build to{' '}
              <a href="mailto:info@rhizobee.com" style={{ color: 'var(--royal)', fontWeight: 600, textDecoration: 'none' }}>
                info@rhizobee.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* JOB APPLICATION MODAL (CONNECTS TO MONGODB) */}
      <JobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedJob={selectedJob} 
      />
    </div>
  );
}
