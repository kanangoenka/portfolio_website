import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    label: 'Programming',
    icon: '💻',
    color: '#6366f1',
    skills: ['JavaScript', 'Python', 'Java', 'C/C++'],
  },
  {
    label: 'Frameworks & Libraries',
    icon: '⚛️',
    color: '#22d3ee',
    skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap'],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    color: '#10b981',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'AI / ML',
    icon: '🤖',
    color: '#f59e0b',
    skills: ['scikit-learn', 'Pandas / NumPy', 'Matplotlib', 'NLP Basics'],
  },
];

const tools = ['Git & GitHub', 'Figma', 'REST APIs', 'Agile / Scrum', 'VS Code', 'Postman', 'Linux'];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="section-tag" style={{ display: 'inline-flex' }}>Skills &amp; Tools</div>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 480, margin: '12px auto 0', fontSize: 16, lineHeight: 1.7 }}>
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Unified Skills + Tools block — no visual gap between them */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card"
          style={{ padding: '36px 32px' }}
        >
          {/* Skill categories in pill grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28, marginBottom: 32 }}>
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + ci * 0.1 }}
              >
                {/* Category label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: `${cat.color}15`, border: `1px solid ${cat.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, flexShrink: 0,
                  }}>
                    {cat.icon}
                  </div>
                  <span style={{
                    fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 13,
                    color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {cat.label}
                  </span>
                </div>

                {/* Skill pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + ci * 0.1 + si * 0.05 }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 50,
                        background: `${cat.color}10`,
                        border: `1px solid ${cat.color}25`,
                        fontSize: 13,
                        fontWeight: 600,
                        color: cat.color,
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: 1, background: 'var(--glass-border)', marginBottom: 24 }} />

          {/* Tools — continuous, no separate box */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <span style={{
                fontSize: 13, fontWeight: 700, color: 'var(--text-muted)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                🔧 Tools &amp; Workflows
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.04 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  style={{
                    padding: '6px 16px',
                    borderRadius: 50,
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.15)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#a5b4fc',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
