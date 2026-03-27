import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'JavaScript', icon: '⚡', category: 'Programming' },
  { name: 'Python', icon: '🐍', category: 'Programming' },
  { name: 'Java', icon: '☕', category: 'Programming' },
  { name: 'React', icon: '⚛️', category: 'Frameworks' },
  { name: 'Node.js', icon: '🟢', category: 'Frameworks' },
  { name: 'Machine Learning', icon: '🤖', category: 'AI/ML' },
  { name: 'Data Science', icon: '📊', category: 'AI/ML' },
  { name: 'Git', icon: '🔧', category: 'Tools' },
  { name: 'Figma', icon: '🎨', category: 'Tools' },
  { name: 'REST APIs', icon: '🔗', category: 'Tools' },
  { name: 'MySQL', icon: '🗄️', category: 'Databases' },
  { name: 'MongoDB', icon: '🍃', category: 'Databases' },
];

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Years Coding' },
  { value: '3rd', label: 'Year B.Tech' },
  { value: '∞', label: 'Passion' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Left: Bio */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">About Me</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
              I'm a third-year Computer Engineering student at{' '}
              <strong style={{ color: 'var(--text-primary)' }}>KJ Somaiya School of Engineering, Mumbai</strong>,
              deeply passionate about the intersection of software development and artificial intelligence.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
              When I'm not writing code, you'll find me exploring new technologies, contributing to open-source
              projects, or diving deep into machine learning research. I thrive on building{' '}
              <strong style={{ color: 'var(--text-primary)' }}>scalable, user-centric applications</strong>{' '}
              that make a real difference.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card"
                  style={{ padding: '16px 12px', textAlign: 'center' }}
                >
                  <div style={{ fontFamily: "'Space Grotesk'", fontSize: 28, fontWeight: 800 }} className="gradient-text">
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skill Pills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>
                Tech Stack
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card"
                  style={{
                    padding: '10px 16px',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'default',
                  }}
                >
                  <span style={{ fontSize: 18 }}>{skill.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
                      {skill.name}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                      {skill.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Profile badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card"
              style={{ marginTop: 24, padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 800, color: 'white',
                fontFamily: "'Space Grotesk'",
                flexShrink: 0,
              }}>KG</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>Kanan Goenka</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>B.Tech Computer Engineering · 2023–2027</div>
                <div style={{ fontSize: 12, color: '#818cf8', fontWeight: 600, marginTop: 4 }}>📍 KJ Somaiya, Mumbai</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
