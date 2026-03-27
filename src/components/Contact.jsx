import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'kanangoenka2@gmail.com',
    href: 'mailto:kanangoenka2@gmail.com',
    color: '#6366f1',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/kanangoenka',
    href: 'https://github.com/kanangoenka',
    color: '#8b5cf6',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kanan-goenka',
    href: 'https://www.linkedin.com/in/kanan-goenka',
    color: '#22d3ee',
  },
];

// ─── Toast component ─────────────────────────────────────────────────
const Toast = ({ type, message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -10, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    style={{
      position: 'fixed',
      bottom: 28,
      right: 24,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 20px',
      borderRadius: 14,
      background: type === 'success'
        ? 'rgba(16,185,129,0.12)'
        : 'rgba(239,68,68,0.12)',
      border: `1px solid ${type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
      backdropFilter: 'blur(20px)',
      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
      maxWidth: 340,
    }}
  >
    {type === 'success'
      ? <CheckCircle size={20} style={{ color: '#10b981', flexShrink: 0 }} />
      : <AlertCircle size={20} style={{ color: '#ef4444', flexShrink: 0 }} />
    }
    <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
      {message}
    </span>
    <button
      onClick={onClose}
      style={{
        marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer',
        color: 'var(--text-muted)', fontSize: 18, lineHeight: 1, flexShrink: 0,
      }}
    >×</button>
  </motion.div>
);

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', message }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);
    try {
      const formData = new FormData(formRef.current);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        showToast('success', "✅ Message sent! I'll get back to you soon.");
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      showToast('error', '❌ Failed to send. Please email me directly at kanangoenka2@gmail.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <div className="section-tag" style={{ display: 'inline-flex' }}>
              <Mail size={12} />
              Get In Touch
            </div>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 500, margin: '12px auto 0', fontSize: 16, lineHeight: 1.7 }}>
              Have a project idea, internship opportunity, or just want to chat? My inbox is always open!
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, maxWidth: 960, margin: '0 auto' }}>
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {/* Availability card */}
              <div className="glass-card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#10b981' }}>Available for Opportunities</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Currently seeking internships and part-time roles in full-stack development or AI/ML. Open to collaborations and freelance projects.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 12 }}>
                  <MapPin size={14} style={{ color: 'var(--text-muted)' }} />
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {/* Contact links */}
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-card"
                  style={{
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: `${link.color}15`, border: `1px solid ${link.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: link.color, flexShrink: 0,
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 2 }}>{link.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>

        <style>{`
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
          @keyframes spin { to{transform:rotate(360deg)} }
        `}</style>
      </section>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            key="toast"
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
