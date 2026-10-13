import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Database, 
  Search, 
  Filter, 
  RefreshCw, 
  CheckCircle, 
  Clock, 
  Briefcase, 
  Mail, 
  Phone, 
  Building, 
  User, 
  Eye, 
  Activity,
  Layers,
  ArrowUpRight,
  LogOut,
  ShieldAlert,
  ShieldCheck,
  Plus,
  Trash2,
  Edit3,
  X,
  Check,
  Home,
  Info,
  Zap,
  Globe,
  QrCode,
  Volume2,
  CreditCard,
  Building2,
  ShoppingBag,
  IndianRupee,
  Cpu,
  Headphones,
  Calendar,
  AlertCircle,
  Users,
  FileText,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AdminInquiriesPage() {
  const navigate = useNavigate();
  const { isAuthenticated, admin, logout } = useAuth();

  // Active Management Tab:
  // 'home' | 'about' | 'services' | 'solutions' | 'industries' | 'careers' | 'contacts' | 'admins'
  const [activeTab, setActiveTab] = useState('home');
  const [aboutSubSection, setAboutSubSection] = useState('all'); // 'all' | 'stats' | 'values'
  const [careersSubSection, setCareersSubSection] = useState('applications'); // 'applications' | 'openings'

  // Content Items from MongoDB
  const [contentItems, setContentItems] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Modals state
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const [editingContentItem, setEditingContentItem] = useState(null);

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [editingInquiry, setEditingInquiry] = useState(null);

  // Detail drawer / modal
  const [viewingRecord, setViewingRecord] = useState(null);

  // Toast notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Fetch all data
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [contentRes, inqRes, appRes, statRes] = await Promise.all([
        fetch('/api/content').then(r => r.json()),
        fetch('/api/inquiries').then(r => r.json()),
        fetch('/api/careers/applications').then(r => r.json()),
        fetch('/api/stats').then(r => r.json())
      ]);

      if (contentRes.success) setContentItems(contentRes.data || []);
      if (inqRes.success) setInquiries(inqRes.data || []);
      if (appRes.success) setApplications(appRes.data || []);
      if (statRes.success) setStats(statRes.data || null);
    } catch (err) {
      console.error('Failed to load DB records:', err);
      showToast('Error connecting to MongoDB', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  // CONTENT CRUD HANDLERS
  const handleSaveContent = async (formData) => {
    try {
      const isEdit = !!editingContentItem;
      const url = isEdit ? `/api/content/${editingContentItem._id}` : '/api/content';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-email': admin?.email || 'admin@rhizobee.com'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        showToast(isEdit ? 'Item updated successfully!' : 'New item created successfully!');
        setIsContentModalOpen(false);
        setEditingContentItem(null);
        fetchAllData();
      } else {
        showToast(data.message || 'Operation failed', 'error');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleDeleteContent = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const res = await fetch(`/api/content/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showToast('Item deleted successfully!');
        setContentItems(prev => prev.filter(item => item._id !== id));
      } else {
        showToast(data.message || 'Failed to delete', 'error');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // INQUIRY CRUD HANDLERS
  const handleSaveInquiry = async (formData) => {
    try {
      const isEdit = !!editingInquiry;
      const url = isEdit ? `/api/inquiries/${editingInquiry._id}` : '/api/inquiries/admin-create';
      const method = isEdit ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        showToast(isEdit ? 'Inquiry status updated!' : 'Inquiry added successfully!');
        setIsInquiryModalOpen(false);
        setEditingInquiry(null);
        fetchAllData();
      } else {
        showToast(data.message || 'Failed to save inquiry', 'error');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleDeleteInquiry = async (id, inquiryId) => {
    if (!window.confirm(`Delete inquiry ${inquiryId}?`)) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showToast('Inquiry deleted successfully!');
        setInquiries(prev => prev.filter(item => item._id !== id));
        if (viewingRecord?._id === id) setViewingRecord(null);
      } else {
        showToast(data.message || 'Failed to delete', 'error');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // JOB APPLICATION CRUD HANDLERS
  const handleUpdateApplicationStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/careers/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Application status updated to "${newStatus}"`);
        setApplications(prev => prev.map(app => app._id === id ? { ...app, status: newStatus } : app));
        if (viewingRecord?._id === id) {
          setViewingRecord(prev => ({ ...prev, status: newStatus }));
        }
      } else {
        showToast(data.message || 'Failed to update status', 'error');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleDeleteApplication = async (id, applicationId) => {
    if (!window.confirm(`Are you sure you want to delete application ${applicationId || ''}?`)) return;
    try {
      const res = await fetch(`/api/careers/applications/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        showToast('Application deleted successfully!');
        setApplications(prev => prev.filter(app => app._id !== id));
        if (viewingRecord?._id === id) setViewingRecord(null);
      } else {
        showToast(data.message || 'Failed to delete application', 'error');
      }
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  const handleResetDefaults = async () => {
    if (!window.confirm('Reset all content tabs to default templates? This will repopulate initial items across Home, About, Services, Solutions, Industries, and Careers.')) return;
    try {
      const res = await fetch('/api/content/reset-seed', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        showToast('Reset all tabs to default templates!');
        fetchAllData();
      }
    } catch (err) {
      showToast('Error resetting templates', 'error');
    }
  };

  // Filter content items for current active tab
  const currentTabItems = contentItems.filter(item => {
    if (item.tab !== activeTab) return false;
    if (activeTab === 'about' && aboutSubSection !== 'all' && item.section !== aboutSubSection) return false;
    const matchesSearch = 
      (item.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.subtitle || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.category || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Filter inquiries for contacts tab
  const filteredInquiries = inquiries.filter(item => {
    const matchesSearch = 
      (item.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.company || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.inquiryId || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Filter job applications for careers tab
  const filteredApplications = applications.filter(item => {
    const matchesSearch = 
      (item.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.phone || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.position || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.location || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.applicationId || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // The 4 authorized admins
  const authorizedAdmins = [
    { email: 'rhizobeeadmin@gmail.com', name: 'Master Super Admin', role: 'superadmin', access: 'All Privileges' },
    { email: 'shamayel@gmail.com', name: 'Shamayel (Admin)', role: 'admin', access: 'Full CRUD' },
    { email: 'amirkhan@gmail.com', name: 'Amir Khan (Admin)', role: 'admin', access: 'Full CRUD' },
    { email: 'sujitkumargupta@gmail.com', name: 'Sujit Kumar Gupta (Admin)', role: 'admin', access: 'Full CRUD' }
  ];

  // Tab definitions
  const tabs = [
    { id: 'home', label: 'Home', icon: Home, count: contentItems.filter(i => i.tab === 'home').length },
    { id: 'about', label: 'About Us', icon: Info, count: contentItems.filter(i => i.tab === 'about').length },
    { id: 'services', label: 'Services', icon: Zap, count: contentItems.filter(i => i.tab === 'services').length },
    { id: 'solutions', label: 'Solutions', icon: Building2, count: contentItems.filter(i => i.tab === 'solutions').length },
    { id: 'industries', label: 'Industries', icon: ShoppingBag, count: contentItems.filter(i => i.tab === 'industries').length },
    { id: 'careers', label: 'Careers', icon: Briefcase, count: applications.length },
    { id: 'contacts', label: 'Contacts', icon: Mail, count: inquiries.length },
    { id: 'admins', label: 'Admins', icon: Users, count: authorizedAdmins.length }
  ];

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--ink)', color: '#ffffff', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '30rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '2.5rem', borderRadius: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
          <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#fca5a5' }}>
            <ShieldAlert size={28} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700 }}>Stealth Mode Restricted</h2>
          <p style={{ marginTop: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.925rem', lineHeight: 1.6 }}>
            The Portal DB is hidden and protected. Please authenticate using the stealth login terminal to manage website content and merchant data.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button onClick={() => navigate('/admin/login')} className="btn-royal">
              Admin Sign In <ArrowUpRight size={15} />
            </button>
            <Link to="/" className="btn-outline-white">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '90vh', padding: '3rem 1.25rem' }}>
      <div className="container-custom" style={{ maxWidth: '92rem', margin: '0 auto' }}>
        
        {/* TOAST ALERT */}
        {toast && (
          <div 
            style={{ 
              position: 'fixed', 
              top: '1.5rem', 
              right: '1.5rem', 
              zIndex: 9999,
              padding: '0.85rem 1.35rem', 
              borderRadius: '0.75rem',
              backgroundColor: toast.type === 'error' ? '#ef4444' : '#10b981',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9rem',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              animation: 'fadeIn 0.2s ease-in'
            }}
          >
            {toast.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
            {toast.message}
          </div>
        )}

        {/* TOP HEADER */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {/*an className="badge-tag" style={{ backgroundColor: 'rgba(22, 86, 214, 0.08)', color: 'var(--royal)' }}>
                <Database size={15} color="var(--royal)" />
                MongoDB Live Portal DB
              </span>
              <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem', borderRadius: '0.35rem', backgroundColor: '#dcfce7', color: '#15803d', fontWeight: 600 }}>
                MongoDB Port 27017 Online
              </span>*/}
              <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.55rem', borderRadius: '0.35rem', backgroundColor: 'rgba(22, 86, 214, 0.1)', color: 'var(--royal)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={13} /> {admin?.name || 'Administrator'} ({admin?.role || 'admin'})
              </span>
            </div>
            <h1 style={{ fontSize: '2.15rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.5rem', letterSpacing: '-0.02em' }}>
              Rhizobee Database
            </h1>
            <p style={{ fontSize: '0.925rem', color: 'var(--slate)', marginTop: '0.25rem' }}>
              Manage dynamic content of website.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              onClick={fetchAllData}
              className="btn-outline-white"
              style={{
                color: 'var(--ink)',
                borderColor: '#cbd5e1',
                padding: '0.6rem 1rem',
                fontSize: '0.875rem',
                backgroundColor: '#ffffff'
              }}
              title="Refresh database records"
            >
              <RefreshCw size={15} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
            <button
              onClick={handleResetDefaults}
              style={{
                color: '#475569',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                padding: '0.6rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Reset all tabs to default template records"
            >
              Reset Templates
            </button>
            <button
              onClick={logout}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#dc2626',
                border: '1px solid rgba(220, 38, 38, 0.25)',
                borderRadius: '9999px',
                backgroundColor: 'rgba(220, 38, 38, 0.05)',
                cursor: 'pointer'
              }}
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>TOTAL CMS ITEMS</span>
              <Layers size={17} color="var(--royal)" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.35rem' }}>
              {contentItems.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 500 }}>Live Across 6 Tabs</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>MERCHANT INQUIRIES</span>
              <Mail size={17} color="#0284c7" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.35rem' }}>
              {inquiries.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Contacts Tab</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>JOB CANDIDATES</span>
              <Briefcase size={17} color="#d97706" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.35rem' }}>
              {applications.length}
            </div>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Careers Tab Applications</span>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
              <span>ACTIVE ADMINS</span>
              <ShieldCheck size={17} color="#16a34a" />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.35rem' }}>
              4
            </div>
            <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 500 }}>Full CRUD Authorized</span>
          </div>
        </div>

        {/* 8-TAB NAVIGATION BAR */}
        <div 
          style={{ 
            display: 'flex', 
            overflowX: 'auto', 
            gap: '0.5rem', 
            backgroundColor: '#ffffff', 
            padding: '0.5rem', 
            borderRadius: '1rem', 
            border: '1px solid #e2e8f0',
            marginBottom: '1.5rem'
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm('');
                  setFilterStatus('All');
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.65rem 1.15rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#ffffff' : '#475569',
                  backgroundColor: active ? 'var(--royal)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                <span 
                  style={{ 
                    fontSize: '0.7rem', 
                    padding: '0.1rem 0.45rem', 
                    borderRadius: '9999px',
                    backgroundColor: active ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                    color: active ? '#ffffff' : '#64748b'
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* SEARCH, FILTER & CREATE ACTION TOOLBAR */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: '1rem', 
            backgroundColor: '#ffffff', 
            padding: '1rem 1.25rem', 
            borderRadius: '1rem', 
            border: '1px solid #e2e8f0',
            marginBottom: '1.5rem'
          }}
        >
          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1', minWidth: '220px', maxWidth: '380px' }}>
            <Search size={16} color="#64748b" />
            <input 
              id="admin-search-input"
              name="adminSearch"
              aria-label="Search records"
              type="text"
              placeholder={
                activeTab === 'careers' && careersSubSection === 'applications'
                  ? 'Search applicant name, email, role, ID...'
                  : `Search in ${activeTab.toUpperCase()} tab...`
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.45rem 0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #cbd5e1',
                fontSize: '0.85rem'
              }}
            />
          </div>

          {/* Right Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Status filter */}
            {activeTab !== 'admins' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Filter size={15} color="#64748b" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{
                    padding: '0.45rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    backgroundColor: '#ffffff',
                    color: '#334155'
                  }}
                >
                  <option value="All">All Statuses</option>
                  {activeTab === 'careers' && careersSubSection === 'applications' ? (
                    <>
                      <option value="Submitted">Submitted</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Selected">Selected</option>
                      <option value="Rejected">Rejected</option>
                    </>
                  ) : activeTab === 'contacts' ? (
                    <>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </>
                  ) : (
                    <>
                      <option value="active">Active</option>
                      <option value="draft">Draft</option>
                      <option value="archived">Archived</option>
                    </>
                  )}
                </select>
              </div>
            )}

            {/* CREATE BUTTON */}
            {activeTab !== 'admins' && (
              <button
                onClick={() => {
                  if (activeTab === 'contacts') {
                    setEditingInquiry(null);
                    setIsInquiryModalOpen(true);
                  } else if (activeTab === 'careers') {
                    setCareersSubSection('openings');
                    setEditingContentItem({
                      tab: 'careers',
                      section: 'openings',
                      category: 'Engineering',
                      title: '',
                      subtitle: '',
                      description: '',
                      status: 'active',
                      order: contentItems.filter(i => i.tab === 'careers').length + 1
                    });
                    setIsContentModalOpen(true);
                  } else {
                    setEditingContentItem(null);
                    setIsContentModalOpen(true);
                  }
                }}
                className="btn-royal"
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  gap: '0.35rem'
                }}
              >
                <Plus size={16} />
                <span>
                  {activeTab === 'contacts' 
                    ? 'Create New Inquiry' 
                    : activeTab === 'careers'
                    ? 'Post Job Opening'
                    : `Add New ${tabs.find(t => t.id === activeTab)?.label} Item`}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* TAB CONTENT SECTION */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: '#64748b' }}>
            <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 1rem', color: 'var(--royal)' }} />
            <p>Loading records from MongoDB...</p>
          </div>
        ) : (
          <div>
            {/* CONTENT TABS: HOME, ABOUT, SERVICES, SOLUTIONS, INDUSTRIES */}
            {['home', 'about', 'services', 'solutions', 'industries'].includes(activeTab) && (
              <div>
                {/* ABOUT TAB SECTION SUB-SELECTOR & QUICK ACTIONS */}
                {activeTab === 'about' && (
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      flexWrap: 'wrap', 
                      gap: '1rem', 
                      marginBottom: '1.5rem', 
                      backgroundColor: '#ffffff', 
                      padding: '0.85rem 1.25rem', 
                      borderRadius: '0.85rem', 
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)' }}>
                        About Us Sections:
                      </span>
                      <button
                        type="button"
                        onClick={() => setAboutSubSection('all')}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '9999px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: 'none',
                          backgroundColor: aboutSubSection === 'all' ? 'var(--royal)' : '#f1f5f9',
                          color: aboutSubSection === 'all' ? '#ffffff' : '#64748b',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        All Items ({contentItems.filter(i => i.tab === 'about').length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setAboutSubSection('stats')}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '9999px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: 'none',
                          backgroundColor: aboutSubSection === 'stats' ? 'var(--royal)' : '#f1f5f9',
                          color: aboutSubSection === 'stats' ? '#ffffff' : '#64748b',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        📊 Key Metrics Bar ({contentItems.filter(i => i.tab === 'about' && i.section === 'stats').length})
                      </button>
                      <button
                        type="button"
                        onClick={() => setAboutSubSection('values')}
                        style={{
                          padding: '0.4rem 0.9rem',
                          borderRadius: '9999px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: 'none',
                          backgroundColor: aboutSubSection === 'values' ? 'var(--royal)' : '#f1f5f9',
                          color: aboutSubSection === 'values' ? '#ffffff' : '#64748b',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        🛡️ Company Values ({contentItems.filter(i => i.tab === 'about' && i.section === 'values').length})
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingContentItem({
                            tab: 'about',
                            section: 'stats',
                            category: 'Key Metric',
                            title: '',
                            subtitle: '',
                            description: '',
                            status: 'active',
                            order: contentItems.filter(i => i.tab === 'about' && i.section === 'stats').length + 1
                          });
                          setIsContentModalOpen(true);
                        }}
                        className="btn-royal"
                        style={{
                          padding: '0.45rem 0.85rem',
                          fontSize: '0.825rem',
                          gap: '0.35rem'
                        }}
                      >
                        <Plus size={14} /> Add Metric / Stat
                      </button>
                    </div>
                  </div>
                )}

                {currentTabItems.length === 0 ? (
                  <div style={{ backgroundColor: '#ffffff', padding: '3.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px dashed #cbd5e1' }}>
                    <Layers size={36} color="#94a3b8" style={{ margin: '0 auto 0.75rem' }} />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)' }}>No items found in {activeTab.toUpperCase()}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      Click "Add New {tabs.find(t => t.id === activeTab)?.label} Item" above to create one.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
                    {currentTabItems.map((item) => (
                      <div
                        key={item._id}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '1rem',
                          border: '1px solid #e2e8f0',
                          padding: '1.35rem',
                          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                        }}
                      >
                        <div>
                          {/* Top Badges & Status */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                            <span 
                              style={{ 
                                fontSize: '0.725rem', 
                                fontWeight: 600, 
                                padding: '0.2rem 0.55rem', 
                                borderRadius: '9999px',
                                backgroundColor: item.section === 'stats' ? '#eff6ff' : 'rgba(22, 86, 214, 0.08)',
                                color: item.section === 'stats' ? '#1d4ed8' : 'var(--royal)'
                              }}
                            >
                              {item.section === 'stats' ? '📊 Key Metric Bar' : (item.category || item.section)}
                            </span>
                            <span 
                              style={{ 
                                fontSize: '0.725rem', 
                                fontWeight: 600, 
                                padding: '0.2rem 0.55rem', 
                                borderRadius: '9999px',
                                textTransform: 'capitalize',
                                backgroundColor: item.status === 'active' ? '#dcfce7' : item.status === 'draft' ? '#fef3c7' : '#f1f5f9',
                                color: item.status === 'active' ? '#15803d' : item.status === 'draft' ? '#b45309' : '#64748b'
                              }}
                            >
                              {item.status}
                            </span>
                          </div>

                          {/* Stat Metric visual preview box */}
                          {item.section === 'stats' ? (
                            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '1rem', textAlign: 'center' }}>
                              <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--royal)', display: 'block', marginBottom: '0.35rem' }}>
                                Live Metric Preview
                              </span>
                              <div style={{ fontSize: '2.65rem', fontWeight: 700, color: 'var(--royal)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                                {item.title}
                              </div>
                              <div style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--ink)', marginTop: '0.45rem' }}>
                                {item.subtitle}
                              </div>
                              {item.description && (
                                <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.35rem', lineHeight: 1.4 }}>
                                  {item.description}
                                </p>
                              )}
                            </div>
                          ) : (
                            <>
                              {/* Title & Subtitle */}
                              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.25rem' }}>
                                {item.title}
                              </h3>
                              {item.subtitle && (
                                <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--royal)', marginBottom: '0.5rem' }}>
                                  {item.subtitle}
                                </p>
                              )}
                              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
                                {item.description}
                              </p>
                            </>
                          )}

                          {/* Extra Data preview (Careers salary, Features, etc.) */}
                          {item.extraData && Object.keys(item.extraData).length > 0 && (
                            <div style={{ backgroundColor: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.78rem', color: '#475569' }}>
                              {item.extraData.salary && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: '#15803d' }}>
                                  <IndianRupee size={13} /> {item.extraData.salary}
                                </div>
                              )}
                              {item.extraData.location && (
                                <div style={{ marginTop: '0.2rem' }}>📍 {item.extraData.location} ({item.extraData.type || 'Full-time'})</div>
                              )}
                              {item.extraData.pricing && (
                                <div style={{ fontWeight: 600, color: 'var(--royal)' }}>{item.extraData.pricing}</div>
                              )}
                              {item.extraData.highlight && (
                                <div style={{ fontWeight: 600, color: 'var(--royal)' }}>✨ {item.extraData.highlight}</div>
                              )}
                              {Array.isArray(item.extraData.features) && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.3rem' }}>
                                  {item.extraData.features.map((f, i) => (
                                    <span key={i} style={{ backgroundColor: '#e2e8f0', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.72rem' }}>
                                      {f}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Card Footer: Metadata & Actions */}
                        <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                            Updated by: {item.updatedBy?.split('@')[0] || 'Admin'}
                          </span>
                          <div style={{ display: 'flex', gap: '0.35rem' }}>
                            <button
                              onClick={() => {
                                setEditingContentItem(item);
                                setIsContentModalOpen(true);
                              }}
                              style={{
                                border: '1px solid #cbd5e1',
                                backgroundColor: '#ffffff',
                                borderRadius: '0.375rem',
                                padding: '0.35rem 0.6rem',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                color: 'var(--royal)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}
                            >
                              <Edit3 size={12} /> Edit
                            </button>
                            <button
                              onClick={() => handleDeleteContent(item._id, item.title)}
                              style={{
                                border: '1px solid rgba(220, 38, 38, 0.25)',
                                backgroundColor: 'rgba(220, 38, 38, 0.05)',
                                borderRadius: '0.375rem',
                                padding: '0.35rem 0.6rem',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                color: '#dc2626',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}
                            >
                              <Trash2 size={12} /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* CAREERS TAB: DEDICATED JOB APPLICATIONS & JOB POSTINGS */}
            {activeTab === 'careers' && (
              <div>
                {/* CAREERS SUB-SELECTOR */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    flexWrap: 'wrap', 
                    gap: '1rem', 
                    marginBottom: '1.5rem', 
                    backgroundColor: '#ffffff', 
                    padding: '0.85rem 1.25rem', 
                    borderRadius: '0.85rem', 
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--ink)' }}>
                      Careers Management:
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setCareersSubSection('applications');
                        setFilterStatus('All');
                        setSearchTerm('');
                      }}
                      style={{
                        padding: '0.45rem 1.05rem',
                        borderRadius: '9999px',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: 'none',
                        backgroundColor: careersSubSection === 'applications' ? 'var(--royal)' : '#f1f5f9',
                        color: careersSubSection === 'applications' ? '#ffffff' : '#64748b',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Briefcase size={15} />
                      <span>Job Applications</span>
                      <span 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '0.1rem 0.5rem', 
                          borderRadius: '9999px', 
                          backgroundColor: careersSubSection === 'applications' ? 'rgba(255,255,255,0.25)' : '#e2e8f0',
                          color: careersSubSection === 'applications' ? '#ffffff' : '#475569',
                          fontWeight: 700
                        }}
                      >
                        {applications.length}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCareersSubSection('openings');
                        setFilterStatus('All');
                        setSearchTerm('');
                      }}
                      style={{
                        padding: '0.45rem 1.05rem',
                        borderRadius: '9999px',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: 'none',
                        backgroundColor: careersSubSection === 'openings' ? 'var(--royal)' : '#f1f5f9',
                        color: careersSubSection === 'openings' ? '#ffffff' : '#64748b',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Layers size={15} />
                      <span>Job Postings / Openings</span>
                      <span 
                        style={{ 
                          fontSize: '0.72rem', 
                          padding: '0.1rem 0.5rem', 
                          borderRadius: '9999px', 
                          backgroundColor: careersSubSection === 'openings' ? 'rgba(255,255,255,0.25)' : '#e2e8f0',
                          color: careersSubSection === 'openings' ? '#ffffff' : '#475569',
                          fontWeight: 700
                        }}
                      >
                        {contentItems.filter(i => i.tab === 'careers').length}
                      </span>
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => {
                        setCareersSubSection('openings');
                        setEditingContentItem({
                          tab: 'careers',
                          section: 'openings',
                          category: 'Engineering',
                          title: '',
                          subtitle: '',
                          description: '',
                          status: 'active',
                          order: contentItems.filter(i => i.tab === 'careers').length + 1
                        });
                        setIsContentModalOpen(true);
                      }}
                      className="btn-royal"
                      style={{
                        padding: '0.45rem 0.95rem',
                        fontSize: '0.825rem',
                        gap: '0.35rem'
                      }}
                    >
                      <Plus size={14} /> Post New Job Opening
                    </button>
                  </div>
                </div>

                {/* VIEW 1: JOB APPLICATIONS */}
                {careersSubSection === 'applications' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Status filter quick pills / summary bar */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.85rem' }}>
                      <div 
                        onClick={() => setFilterStatus('All')}
                        style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.85rem 1rem', 
                          borderRadius: '0.75rem', 
                          border: filterStatus === 'All' ? '2px solid var(--royal)' : '1px solid #e2e8f0', 
                          cursor: 'pointer',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>ALL APPLICANTS</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.2rem' }}>
                          {applications.length}
                        </div>
                      </div>
                      <div 
                        onClick={() => setFilterStatus('Submitted')}
                        style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.85rem 1rem', 
                          borderRadius: '0.75rem', 
                          border: filterStatus === 'Submitted' ? '2px solid #2563eb' : '1px solid #e2e8f0', 
                          cursor: 'pointer',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', color: '#2563eb', fontWeight: 600 }}>SUBMITTED</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1d4ed8', marginTop: '0.2rem' }}>
                          {applications.filter(a => a.status === 'Submitted').length}
                        </div>
                      </div>
                      <div 
                        onClick={() => setFilterStatus('Under Review')}
                        style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.85rem 1rem', 
                          borderRadius: '0.75rem', 
                          border: filterStatus === 'Under Review' ? '2px solid #d97706' : '1px solid #e2e8f0', 
                          cursor: 'pointer',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', color: '#d97706', fontWeight: 600 }}>UNDER REVIEW</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#b45309', marginTop: '0.2rem' }}>
                          {applications.filter(a => a.status === 'Under Review').length}
                        </div>
                      </div>
                      <div 
                        onClick={() => setFilterStatus('Interview Scheduled')}
                        style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.85rem 1rem', 
                          borderRadius: '0.75rem', 
                          border: filterStatus === 'Interview Scheduled' ? '2px solid #9333ea' : '1px solid #e2e8f0', 
                          cursor: 'pointer',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', color: '#9333ea', fontWeight: 600 }}>INTERVIEW</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#7e22ce', marginTop: '0.2rem' }}>
                          {applications.filter(a => a.status === 'Interview Scheduled').length}
                        </div>
                      </div>
                      <div 
                        onClick={() => setFilterStatus('Selected')}
                        style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.85rem 1rem', 
                          borderRadius: '0.75rem', 
                          border: filterStatus === 'Selected' ? '2px solid #16a34a' : '1px solid #e2e8f0', 
                          cursor: 'pointer',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 600 }}>SELECTED</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#15803d', marginTop: '0.2rem' }}>
                          {applications.filter(a => a.status === 'Selected').length}
                        </div>
                      </div>
                    </div>

                    {/* Applications Table */}
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                          <thead>
                            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 600 }}>
                              <th style={{ padding: '0.85rem 1rem' }}>APPLICATION ID &amp; DATE</th>
                              <th style={{ padding: '0.85rem 1rem' }}>CANDIDATE INFO</th>
                              <th style={{ padding: '0.85rem 1rem' }}>POSITION &amp; EXP</th>
                              <th style={{ padding: '0.85rem 1rem' }}>RESUME &amp; COVER NOTE</th>
                              <th style={{ padding: '0.85rem 1rem' }}>STATUS</th>
                              <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredApplications.length === 0 ? (
                              <tr>
                                <td colSpan="6" style={{ padding: '3.5rem', textAlign: 'center', color: '#94a3b8' }}>
                                  <Briefcase size={36} color="#cbd5e1" style={{ margin: '0 auto 0.75rem' }} />
                                  <div style={{ fontWeight: 600, color: '#475569', fontSize: '1rem' }}>No job applications found</div>
                                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                                    Applications submitted through the Careers page will appear here.
                                  </p>
                                </td>
                              </tr>
                            ) : (
                              filteredApplications.map((app) => {
                                const getStatusStyle = (st) => {
                                  switch (st) {
                                    case 'Selected':
                                      return { bg: '#dcfce7', text: '#15803d', border: '#bbf7d0' };
                                    case 'Interview Scheduled':
                                      return { bg: '#f3e8ff', text: '#7e22ce', border: '#e9d5ff' };
                                    case 'Under Review':
                                      return { bg: '#fef3c7', text: '#b45309', border: '#fde68a' };
                                    case 'Rejected':
                                      return { bg: '#fee2e2', text: '#b91c1c', border: '#fecaca' };
                                    default:
                                      return { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' };
                                  }
                                };
                                const stStyle = getStatusStyle(app.status);

                                return (
                                  <tr key={app._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '0.85rem 1rem', verticalAlign: 'top' }}>
                                      <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--royal)', fontSize: '0.825rem', backgroundColor: 'rgba(22, 86, 214, 0.08)', padding: '0.15rem 0.45rem', borderRadius: '0.35rem' }}>
                                        {app.applicationId || 'APP-' + app._id.slice(-6).toUpperCase()}
                                      </span>
                                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Clock size={12} />
                                        {new Date(app.createdAt).toLocaleDateString()}
                                      </div>
                                    </td>
                                    <td style={{ padding: '0.85rem 1rem', verticalAlign: 'top' }}>
                                      <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.9rem' }}>
                                        {app.fullName}
                                      </div>
                                      <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                        <Mail size={12} />
                                        <a href={`mailto:${app.email}`} style={{ color: 'var(--royal)', textDecoration: 'none' }}>
                                          {app.email}
                                        </a>
                                      </div>
                                      {app.phone && (
                                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                          <Phone size={12} />
                                          <a href={`tel:${app.phone}`} style={{ color: '#475569', textDecoration: 'none' }}>
                                            {app.phone}
                                          </a>
                                        </div>
                                      )}
                                    </td>
                                    <td style={{ padding: '0.85rem 1rem', verticalAlign: 'top' }}>
                                      <div style={{ fontWeight: 600, color: '#0f172a' }}>
                                        {app.position}
                                      </div>
                                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                                        ⚡ Exp: <strong>{app.experience || 'Not specified'}</strong>
                                      </div>
                                      {app.location && (
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.15rem' }}>
                                          📍 {app.location}
                                        </div>
                                      )}
                                    </td>
                                    <td style={{ padding: '0.85rem 1rem', verticalAlign: 'top' }}>
                                      {app.resumeLink ? (
                                        <a
                                          href={app.resumeLink}
                                          target="_blank"
                                          rel="noreferrer"
                                          style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.3rem',
                                            backgroundColor: '#eff6ff',
                                            color: '#1d4ed8',
                                            padding: '0.3rem 0.65rem',
                                            borderRadius: '0.375rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            border: '1px solid #bfdbfe'
                                          }}
                                        >
                                          <FileText size={13} /> View Resume <ExternalLink size={11} />
                                        </a>
                                      ) : (
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>No link provided</span>
                                      )}
                                      {app.coverNote && (
                                        <div 
                                          style={{ 
                                            fontSize: '0.75rem', 
                                            color: '#475569', 
                                            marginTop: '0.4rem', 
                                            maxWidth: '220px', 
                                            overflow: 'hidden', 
                                            textOverflow: 'ellipsis', 
                                            whiteSpace: 'nowrap' 
                                          }}
                                          title={app.coverNote}
                                        >
                                          "{app.coverNote}"
                                        </div>
                                      )}
                                    </td>
                                    <td style={{ padding: '0.85rem 1rem', verticalAlign: 'top' }}>
                                      <select
                                        value={app.status || 'Submitted'}
                                        onChange={(e) => handleUpdateApplicationStatus(app._id, e.target.value)}
                                        style={{
                                          backgroundColor: stStyle.bg,
                                          color: stStyle.text,
                                          border: `1px solid ${stStyle.border}`,
                                          padding: '0.35rem 0.65rem',
                                          borderRadius: '9999px',
                                          fontSize: '0.78rem',
                                          fontWeight: 600,
                                          cursor: 'pointer',
                                          outline: 'none'
                                        }}
                                      >
                                        <option value="Submitted">Submitted</option>
                                        <option value="Under Review">Under Review</option>
                                        <option value="Interview Scheduled">Interview Scheduled</option>
                                        <option value="Selected">Selected</option>
                                        <option value="Rejected">Rejected</option>
                                      </select>
                                    </td>
                                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right', verticalAlign: 'top' }}>
                                      <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                                        <button
                                          onClick={() => setViewingRecord(app)}
                                          style={{
                                            border: '1px solid #cbd5e1',
                                            backgroundColor: '#ffffff',
                                            borderRadius: '0.375rem',
                                            padding: '0.35rem 0.55rem',
                                            cursor: 'pointer',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: 'var(--royal)',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.25rem'
                                          }}
                                          title="View Candidate Details"
                                        >
                                          <Eye size={13} /> View
                                        </button>
                                        <button
                                          onClick={() => handleDeleteApplication(app._id, app.applicationId)}
                                          style={{
                                            border: '1px solid rgba(220, 38, 38, 0.25)',
                                            backgroundColor: 'rgba(220, 38, 38, 0.05)',
                                            borderRadius: '0.375rem',
                                            padding: '0.35rem 0.55rem',
                                            cursor: 'pointer',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: '#dc2626',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.25rem'
                                          }}
                                          title="Delete Application"
                                        >
                                          <Trash2 size={13} /> Delete
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 2: JOB OPENINGS / POSTINGS (CMS) */}
                {careersSubSection === 'openings' && (
                  <div>
                    {currentTabItems.length === 0 ? (
                      <div style={{ backgroundColor: '#ffffff', padding: '3.5rem', textAlign: 'center', borderRadius: '1rem', border: '1px dashed #cbd5e1' }}>
                        <Briefcase size={36} color="#94a3b8" style={{ margin: '0 auto 0.75rem' }} />
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)' }}>No job openings posted yet</h3>
                        <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          Click "Post New Job Opening" above to create open roles for candidates.
                        </p>
                      </div>
                    ) : (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
                        {currentTabItems.map((item) => (
                          <div
                            key={item._id}
                            style={{
                              backgroundColor: '#ffffff',
                              borderRadius: '1rem',
                              border: '1px solid #e2e8f0',
                              padding: '1.35rem',
                              boxShadow: '0 1px 3px 0 rgba(0,0,0,0.05)',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                            }}
                          >
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                <span 
                                  style={{ 
                                    fontSize: '0.725rem', 
                                    fontWeight: 600, 
                                    padding: '0.2rem 0.55rem', 
                                    borderRadius: '9999px',
                                    backgroundColor: 'rgba(22, 86, 214, 0.08)',
                                    color: 'var(--royal)'
                                  }}
                                >
                                  {item.category || 'Engineering'}
                                </span>
                                <span 
                                  style={{ 
                                    fontSize: '0.725rem', 
                                    fontWeight: 600, 
                                    padding: '0.2rem 0.55rem', 
                                    borderRadius: '9999px',
                                    textTransform: 'capitalize',
                                    backgroundColor: item.status === 'active' ? '#dcfce7' : item.status === 'draft' ? '#fef3c7' : '#f1f5f9',
                                    color: item.status === 'active' ? '#15803d' : item.status === 'draft' ? '#b45309' : '#64748b'
                                  }}
                                >
                                  {item.status}
                                </span>
                              </div>

                              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.25rem' }}>
                                {item.title}
                              </h3>
                              {item.subtitle && (
                                <p style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--royal)', marginBottom: '0.5rem' }}>
                                  {item.subtitle}
                                </p>
                              )}
                              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
                                {item.description}
                              </p>

                              {item.extraData && Object.keys(item.extraData).length > 0 && (
                                <div style={{ backgroundColor: '#f8fafc', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', marginBottom: '1rem', fontSize: '0.78rem', color: '#475569' }}>
                                  {item.extraData.salary && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: '#15803d' }}>
                                      <IndianRupee size={13} /> {item.extraData.salary}
                                    </div>
                                  )}
                                  {item.extraData.location && (
                                    <div style={{ marginTop: '0.2rem' }}>📍 {item.extraData.location} ({item.extraData.type || 'Full-time'})</div>
                                  )}
                                  {Array.isArray(item.extraData.features) && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.3rem' }}>
                                      {item.extraData.features.map((f, i) => (
                                        <span key={i} style={{ backgroundColor: '#e2e8f0', padding: '0.1rem 0.4rem', borderRadius: '0.25rem', fontSize: '0.72rem' }}>
                                          {f}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                                Updated by: {item.updatedBy?.split('@')[0] || 'Admin'}
                              </span>
                              <div style={{ display: 'flex', gap: '0.35rem' }}>
                                <button
                                  onClick={() => {
                                    setEditingContentItem(item);
                                    setIsContentModalOpen(true);
                                  }}
                                  style={{
                                    border: '1px solid #cbd5e1',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '0.375rem',
                                    padding: '0.35rem 0.6rem',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--royal)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                  }}
                                >
                                  <Edit3 size={12} /> Edit
                                </button>
                                <button
                                  onClick={() => handleDeleteContent(item._id, item.title)}
                                  style={{
                                    border: '1px solid rgba(220, 38, 38, 0.25)',
                                    backgroundColor: 'rgba(220, 38, 38, 0.05)',
                                    borderRadius: '0.375rem',
                                    padding: '0.35rem 0.6rem',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: '#dc2626',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                  }}
                                >
                                  <Trash2 size={12} /> Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* CONTACTS TAB: FULL INQUIRY CRUD */}
            {activeTab === 'contacts' && (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 600 }}>
                        <th style={{ padding: '0.85rem 1rem' }}>ID &amp; SENDER</th>
                        <th style={{ padding: '0.85rem 1rem' }}>COMPANY &amp; SERVICE</th>
                        <th style={{ padding: '0.85rem 1rem' }}>STATUS</th>
                        <th style={{ padding: '0.85rem 1rem' }}>DATE</th>
                        <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInquiries.length === 0 ? (
                        <tr>
                          <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                            No inquiries match the current search filter.
                          </td>
                        </tr>
                      ) : (
                        filteredInquiries.map((inq) => (
                          <tr key={inq._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '0.85rem 1rem' }}>
                              <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{inq.fullName}</div>
                              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{inq.email} • {inq.phone}</div>
                              <span style={{ fontSize: '0.68rem', backgroundColor: '#e2e8f0', padding: '0.1rem 0.35rem', borderRadius: '0.25rem', color: '#475569' }}>
                                {inq.inquiryId}
                              </span>
                            </td>
                            <td style={{ padding: '0.85rem 1rem' }}>
                              <div style={{ fontWeight: 500, color: '#334155' }}>{inq.company || 'Direct Client'}</div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--royal)' }}>{inq.serviceOfInterest || 'General Inquiry'}</div>
                            </td>
                            <td style={{ padding: '0.85rem 1rem' }}>
                              <select
                                value={inq.status}
                                onChange={(e) => handleSaveInquiry({ ...inq, status: e.target.value })}
                                style={{
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                  padding: '0.25rem 0.55rem',
                                  borderRadius: '9999px',
                                  border: '1px solid #cbd5e1',
                                  backgroundColor: inq.status === 'Resolved' ? '#dcfce7' : inq.status === 'New' ? '#dbeafe' : '#fef3c7',
                                  color: inq.status === 'Resolved' ? '#15803d' : inq.status === 'New' ? '#1d4ed8' : '#b45309'
                                }}
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                            <td style={{ padding: '0.85rem 1rem', fontSize: '0.78rem', color: '#64748b' }}>
                              {new Date(inq.createdAt).toLocaleDateString()}
                            </td>
                            <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                              <div style={{ display: 'inline-flex', gap: '0.35rem' }}>
                                <button
                                  onClick={() => setViewingRecord(inq)}
                                  style={{
                                    border: '1px solid #cbd5e1',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '0.375rem',
                                    padding: '0.3rem 0.55rem',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: 'var(--royal)'
                                  }}
                                  title="View message & notes"
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => handleDeleteInquiry(inq._id, inq.inquiryId)}
                                  style={{
                                    border: '1px solid rgba(220, 38, 38, 0.25)',
                                    backgroundColor: 'rgba(220, 38, 38, 0.05)',
                                    borderRadius: '0.375rem',
                                    padding: '0.3rem 0.55rem',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: '#dc2626'
                                  }}
                                  title="Delete inquiry"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ADMINS TAB: THE 4 AUTHORIZED ADMINS */}
            {activeTab === 'admins' && (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>
                    Fixed 4 Authorized Administrators
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.25rem' }}>
                    These 4 fixed accounts are provisioned with bcrypt credentials in MongoDB and have complete CRUD privileges across all website tabs.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {authorizedAdmins.map((adm, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1.25rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #e2e8f0',
                        backgroundColor: '#f8fafc',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}
                    >
                      <div 
                        style={{ 
                          width: '2.5rem', 
                          height: '2.5rem', 
                          borderRadius: '50%', 
                          backgroundColor: idx === 0 ? 'rgba(22, 86, 214, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                          color: idx === 0 ? 'var(--royal)' : '#10b981',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700
                        }}
                      >
                        {idx + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.95rem' }}>{adm.name}</span>
                          <span style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem', borderRadius: '9999px', backgroundColor: idx === 0 ? '#dbeafe' : '#e2e8f0', color: idx === 0 ? '#1d4ed8' : '#475569', fontWeight: 600 }}>
                            {adm.role}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.825rem', color: '#64748b', marginTop: '0.2rem' }}>
                          ✉ {adm.email}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#15803d', fontWeight: 600, marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <CheckCircle size={12} /> {adm.access} Active
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODAL 1: CREATE / EDIT CONTENT ITEM */}
        {isContentModalOpen && (
          <ContentItemModal
            activeTab={activeTab}
            initialData={editingContentItem}
            onClose={() => {
              setIsContentModalOpen(false);
              setEditingContentItem(null);
            }}
            onSave={handleSaveContent}
          />
        )}

        {/* MODAL 2: CREATE / EDIT INQUIRY (CONTACTS) */}
        {isInquiryModalOpen && (
          <InquiryModal
            initialData={editingInquiry}
            onClose={() => {
              setIsInquiryModalOpen(false);
              setEditingInquiry(null);
            }}
            onSave={handleSaveInquiry}
          />
        )}

        {/* MODAL 3: VIEW RECORD DETAILS */}
        {viewingRecord && (
          <ViewRecordModal
            record={viewingRecord}
            onClose={() => setViewingRecord(null)}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
          />
        )}

      </div>
    </div>
  );
}

// ----------------------------------------------------
// SUB-COMPONENT: CONTENT ITEM CREATE/EDIT MODAL
// ----------------------------------------------------
function ContentItemModal({ activeTab, initialData, onClose, onSave }) {
  const [formData, setFormData] = useState(() => ({
    tab: initialData?.tab || activeTab,
    section: initialData?.section || 'general',
    title: initialData?.title || '',
    subtitle: initialData?.subtitle || '',
    category: initialData?.category || 'General',
    description: initialData?.description || '',
    order: initialData?.order || 0,
    status: initialData?.status || 'active',
    extraSalary: initialData?.extraData?.salary || '',
    extraLocation: initialData?.extraData?.location || '',
    extraFeatures: Array.isArray(initialData?.extraData?.features) ? initialData.extraData.features.join(', ') : '',
    extraHighlight: initialData?.extraData?.highlight || initialData?.extraData?.pricing || ''
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return alert('Please enter a title');

    const extraData = {};
    if (formData.extraSalary) extraData.salary = formData.extraSalary;
    if (formData.extraLocation) extraData.location = formData.extraLocation;
    if (formData.extraFeatures) {
      extraData.features = formData.extraFeatures.split(',').map(s => s.trim()).filter(Boolean);
    }
    if (formData.extraHighlight) {
      extraData.highlight = formData.extraHighlight;
      extraData.pricing = formData.extraHighlight;
    }
    if (formData.tab === 'about' && formData.section === 'stats') {
      extraData.statValue = formData.title;
      extraData.statLabel = formData.subtitle;
    }

    onSave({
      tab: formData.tab,
      section: formData.section,
      title: formData.title,
      subtitle: formData.subtitle,
      category: formData.category,
      description: formData.description,
      order: Number(formData.order) || 0,
      status: formData.status,
      extraData
    });
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', width: '100%', maxWidth: '38rem', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)' }}>
              {initialData ? 'Edit Content Item' : `Add New ${formData.tab.toUpperCase()} Item`}
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
              Tab: <strong style={{ color: 'var(--royal)' }}>{formData.tab}</strong> • Instant MongoDB CRUD
            </p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* ABOUT SECTION TYPE PICKER */}
          {formData.tab === 'about' && (
            <div style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '0.65rem', padding: '0.85rem 1rem' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#0369a1', marginBottom: '0.4rem' }}>
                About Us Section Type:
              </span>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="aboutSectionType"
                    checked={formData.section === 'stats'}
                    onChange={() => setFormData({ ...formData, section: 'stats', category: 'Key Metric' })}
                  />
                  📊 Key Metric Bar (7, 99.9%, 24/7, 100%)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="aboutSectionType"
                    checked={formData.section !== 'stats'}
                    onChange={() => setFormData({ ...formData, section: 'values', category: 'Values' })}
                  />
                  🛡️ Company Values
                </label>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="modal-item-title" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              {formData.tab === 'about' && formData.section === 'stats'
                ? 'Metric Value / Number * (e.g. 7, 99.9%, 24/7, 100%)'
                : 'Title *'}
            </label>
            <input
              id="modal-item-title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder={formData.tab === 'about' && formData.section === 'stats' ? 'e.g. 99.9% or 24/7' : 'e.g. Payment Gateway or Job Title'}
              style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label htmlFor="modal-item-subtitle" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                {formData.tab === 'about' && formData.section === 'stats'
                  ? 'Metric Label / Description *'
                  : 'Subtitle / Tagline'}
              </label>
              <input
                id="modal-item-subtitle"
                name="subtitle"
                type="text"
                required={formData.tab === 'about' && formData.section === 'stats'}
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder={formData.tab === 'about' && formData.section === 'stats' ? 'e.g. Transaction platform uptime' : 'e.g. Online Checkout Suite'}
                style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>
            <div>
              <label htmlFor="modal-item-category" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Category / Section
              </label>
              <input
                id="modal-item-category"
                name="category"
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Key Metric or Engineering"
                style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-item-description" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Description
            </label>
            <textarea
              id="modal-item-description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Detailed description for this item..."
              style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
            />
          </div>

          {/* TAB SPECIFIC EXTRA FIELDS */}
          {formData.tab === 'careers' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', backgroundColor: '#f8fafc', padding: '0.85rem', borderRadius: '0.5rem' }}>
              <div>
                <label htmlFor="modal-item-salary" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>
                  Salary in ₹ (Indian Rupee)
                </label>
                <input
                  id="modal-item-salary"
                  name="extraSalary"
                  type="text"
                  value={formData.extraSalary}
                  onChange={(e) => setFormData({ ...formData, extraSalary: e.target.value })}
                  placeholder="e.g. ₹12,00,000 - ₹18,00,000 / year"
                  style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </div>
              <div>
                <label htmlFor="modal-item-location" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>
                  Location &amp; Type
                </label>
                <input
                  id="modal-item-location"
                  name="extraLocation"
                  type="text"
                  value={formData.extraLocation}
                  onChange={(e) => setFormData({ ...formData, extraLocation: e.target.value })}
                  placeholder="e.g. Mumbai / Hybrid"
                  style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </div>
            </div>
          )}

          {formData.tab === 'services' && (
            <div style={{ backgroundColor: '#f8fafc', padding: '0.85rem', borderRadius: '0.5rem' }}>
              <label htmlFor="modal-item-features" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#334155', marginBottom: '0.3rem' }}>
                Key Features (comma-separated)
              </label>
              <input
                id="modal-item-features"
                name="extraFeatures"
                type="text"
                value={formData.extraFeatures}
                onChange={(e) => setFormData({ ...formData, extraFeatures: e.target.value })}
                placeholder="e.g. UPI Intent, Card Tokenization, Instant Settlement"
                style={{ width: '100%', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
              />
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label htmlFor="modal-item-status" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Status
              </label>
              <select
                id="modal-item-status"
                name="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem', backgroundColor: '#ffffff' }}
              >
                <option value="active">Active (Visible)</option>
                <option value="draft">Draft (Hidden)</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div>
              <label htmlFor="modal-item-order" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Display Order
              </label>
              <input
                id="modal-item-order"
                name="order"
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: '0.65rem 1.25rem', borderRadius: '9999px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-royal"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.875rem' }}
            >
              Save to MongoDB
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// SUB-COMPONENT: INQUIRY CREATE/EDIT MODAL
// ----------------------------------------------------
function InquiryModal({ initialData, onClose, onSave }) {
  const [formData, setFormData] = useState(() => ({
    fullName: initialData?.fullName || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    company: initialData?.company || '',
    serviceOfInterest: initialData?.serviceOfInterest || 'General Inquiry',
    status: initialData?.status || 'New',
    notes: initialData?.notes || ''
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return alert('Full name and email are required');
    onSave(formData);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', width: '100%', maxWidth: '34rem', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)' }}>
            {initialData ? 'Edit Inquiry Status' : 'Create New Inquiry / Lead'}
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label htmlFor="inquiry-modal-name" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Full Name *
            </label>
            <input
              id="inquiry-modal-name"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rajesh Kumar"
              style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label htmlFor="inquiry-modal-email" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Email Address *
              </label>
              <input
                id="inquiry-modal-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@company.com"
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>
            <div>
              <label htmlFor="inquiry-modal-phone" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Phone Number
              </label>
              <input
                id="inquiry-modal-phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label htmlFor="inquiry-modal-company" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Company Name
              </label>
              <input
                id="inquiry-modal-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Retail Store Ltd"
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
              />
            </div>
            <div>
              <label htmlFor="inquiry-modal-status" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                Status
              </label>
              <select
                id="inquiry-modal-status"
                name="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem', backgroundColor: '#ffffff' }}
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="inquiry-modal-service" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Service of Interest
            </label>
            <input
              id="inquiry-modal-service"
              name="serviceOfInterest"
              type="text"
              value={formData.serviceOfInterest}
              onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
              placeholder="Payment Gateway / Soundbox / POS"
              style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
            />
          </div>

          <div>
            <label htmlFor="inquiry-modal-notes" style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
              Admin Internal Notes
            </label>
            <textarea
              id="inquiry-modal-notes"
              name="notes"
              rows="2"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Client called for pricing in Mumbai..."
              style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{ padding: '0.55rem 1.15rem', borderRadius: '9999px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-royal"
              style={{ padding: '0.55rem 1.35rem', fontSize: '0.85rem' }}
            >
              Save Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// SUB-COMPONENT: VIEW RECORD DETAILS MODAL
// ----------------------------------------------------
function ViewRecordModal({ record, onClose, onUpdateApplicationStatus }) {
  const isJobApp = !!(record.applicationId || record.position);

  if (isJobApp) {
    const getStatusStyle = (st) => {
      switch (st) {
        case 'Selected':
          return { bg: '#dcfce7', text: '#15803d', border: '#bbf7d0' };
        case 'Interview Scheduled':
          return { bg: '#f3e8ff', text: '#7e22ce', border: '#e9d5ff' };
        case 'Under Review':
          return { bg: '#fef3c7', text: '#b45309', border: '#fde68a' };
        case 'Rejected':
          return { bg: '#fee2e2', text: '#b91c1c', border: '#fecaca' };
        default:
          return { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' };
      }
    };
    const stStyle = getStatusStyle(record.status);

    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', width: '100%', maxWidth: '38rem', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', maxHeight: '90vh', overflowY: 'auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.85rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '0.35rem', backgroundColor: 'rgba(22, 86, 214, 0.1)', color: 'var(--royal)' }}>
                  {record.applicationId || 'JOB APPLICATION'}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.55rem', borderRadius: '9999px', backgroundColor: stStyle.bg, color: stStyle.text, border: `1px solid ${stStyle.border}` }}>
                  {record.status || 'Submitted'}
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--ink)', marginTop: '0.35rem' }}>
                {record.fullName}
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                Applied on {new Date(record.createdAt).toLocaleString()}
              </span>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
              <X size={22} />
            </button>
          </div>

          {/* Candidate Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', backgroundColor: '#f8fafc', padding: '1.15rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Applied Position</span>
                <strong style={{ color: 'var(--ink)', fontSize: '0.95rem' }}>{record.position}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Relevant Experience</span>
                <strong style={{ color: '#0f172a' }}>{record.experience || 'Not specified'}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Email Address</span>
                <a href={`mailto:${record.email}`} style={{ color: 'var(--royal)', fontWeight: 600, textDecoration: 'none' }}>
                  {record.email}
                </a>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Phone Number</span>
                <a href={`tel:${record.phone}`} style={{ color: '#334155', fontWeight: 600, textDecoration: 'none' }}>
                  {record.phone || 'N/A'}
                </a>
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Candidate Location</span>
                <strong style={{ color: '#334155' }}>{record.location || 'Not specified'}</strong>
              </div>
            </div>

            {/* Resume Link Callout */}
            {record.resumeLink && (
              <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '1rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <FileText size={22} color="var(--royal)" />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: 'var(--ink)', display: 'block' }}>Candidate Resume / CV Document</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Submitted document link</span>
                  </div>
                </div>
                <a
                  href={record.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-royal"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem', gap: '0.35rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                >
                  Open Resume <ExternalLink size={13} />
                </a>
              </div>
            )}

            {/* Cover Note */}
            <div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'block', fontWeight: 600, marginBottom: '0.35rem' }}>
                Cover Letter / Candidate Statement
              </span>
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '0.5rem', lineHeight: 1.6, color: '#334155', whiteSpace: 'pre-wrap', maxHeight: '180px', overflowY: 'auto' }}>
                {record.coverNote || 'No cover note was submitted with this application.'}
              </div>
            </div>

            {/* Change Status Inside Modal */}
            {onUpdateApplicationStatus && (
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.85rem 1rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <span style={{ fontSize: '0.825rem', fontWeight: 600, color: '#334155' }}>Update Status:</span>
                <select
                  value={record.status || 'Submitted'}
                  onChange={(e) => onUpdateApplicationStatus(record._id, e.target.value)}
                  style={{
                    backgroundColor: stStyle.bg,
                    color: stStyle.text,
                    border: `1px solid ${stStyle.border}`,
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <option value="Submitted">Submitted</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Interview Scheduled">Interview Scheduled</option>
                  <option value="Selected">Selected</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            )}
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'right', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
            <button
              onClick={onClose}
              className="btn-royal"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '1.25rem', width: '100%', maxWidth: '34rem', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>
              Inquiry: {record.inquiryId}
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              Received on {new Date(record.createdAt).toLocaleString()}
            </span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.75rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Sender Name</span>
              <strong style={{ color: 'var(--ink)' }}>{record.fullName}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Email</span>
              <strong style={{ color: 'var(--royal)' }}>{record.email}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Phone</span>
              <strong>{record.phone || 'N/A'}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Company</span>
              <strong>{record.company || 'N/A'}</strong>
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginBottom: '0.25rem' }}>Message</span>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '0.85rem', borderRadius: '0.5rem', lineHeight: 1.6, color: '#334155' }}>
              {record.message || 'No message provided.'}
            </div>
          </div>

          {record.notes && (
            <div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block', marginBottom: '0.25rem' }}>Admin Notes</span>
              <div style={{ backgroundColor: '#fef3c7', padding: '0.65rem 0.85rem', borderRadius: '0.5rem', color: '#92400e', fontSize: '0.825rem' }}>
                {record.notes}
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button
            onClick={onClose}
            className="btn-royal"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
