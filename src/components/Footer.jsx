import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        borderTop: '1px solid var(--glass-border)',
        background: 'rgba(99,102,241,0.02)',
        padding: '40px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 13,
              color: 'white',
            }}>KG</div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>
                Kanan Goenka
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                Computer Engineering Student
              </div>
            </div>
          </div>

          {/* Right: Social + Scroll to top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {[
              { icon: <FaGithub size={16} />, href: 'https://github.com/kanangoenka', label: 'GitHub' },
              { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/kanan-goenka', label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: 'mailto:kanangoenka2@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={s.label}
                style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: 'var(--glass)', border: '1px solid var(--glass-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                  e.currentTarget.style.color = '#818cf8';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {s.icon}
              </motion.a>
            ))}

            {/* Scroll to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: 36, height: 36, borderRadius: 9,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(99,102,241,0.35)',
              }}
              title="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          marginTop: 24, paddingTop: 20,
          borderTop: '1px solid var(--glass-border)',
          textAlign: 'center',
          fontSize: 12,
          color: 'var(--text-muted)',
        }}>
          Kanan Goenka
        </div>
      </div>
    </footer>
  );
};

export default Footer;
