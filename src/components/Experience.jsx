import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const timeline = [
  {
    type: 'education',
    icon: <GraduationCap size={20} />,
    color: '#6366f1',
    title: 'B.Tech — Computer Engineering',
    org: 'KJ Somaiya School of Engineering',
    location: 'Mumbai, Maharashtra',
    period: '2023 – 2027',
    description:
      'Currently in my 3rd year, pursuing a degree in Computer Engineering with a focus on software development, algorithms, and artificial intelligence. Active member of the coding club and hackathon teams.',
    highlights: ['Data Structures & Algorithms', 'Operating Systems', 'Machine Learning', 'Web Technologies', 'Database Management'],
  },
  {
    type: 'achievement',
    icon: <Award size={20} />,
    color: '#f59e0b',
    title: 'Hackathon Participant',
    org: 'Multiple Inter-college Events',
    location: 'Mumbai',
    period: '2025 – 2025',
    description:
      'Actively participated in inter-college hackathons, building real-world solutions under time constraints and collaborating with cross-functional teams.',
    highlights: ['Team Collaboration', 'Rapid Prototyping', 'Problem Solving', 'Pitching & Presentation'],
  },
  {
    type: 'learning',
    icon: <BookOpen size={20} />,
    color: '#10b981',
    title: 'Self-Learning & Certifications',
    org: 'Coursera · Udemy · freeCodeCamp',
    location: 'Online',
    period: '2025 – 2025',
    description:
      'Continuously expanding my skill set through online courses and hands-on projects in full-stack development, machine learning, and system design.',
    highlights: ['Responsive Web Design', 'Machine Learning A-Z', 'Node.js & MongoDB', 'Python for Data Science'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section" style={{ background: 'rgba(99,102,241,0.02)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div className="section-tag" style={{ display: 'inline-flex' }}>
            <GraduationCap size={12} />
            Education & Experience
          </div>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            My <span className="gradient-text">Journey</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 480, margin: '12px auto 0', fontSize: 16, lineHeight: 1.7 }}>
            Academic milestones, learning experiences and achievements that have shaped my path.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                style={{ display: 'flex', gap: 20 }}
              >
                {/* Icon dot */}
                <div style={{ position: 'relative', flexShrink: 0, zIndex: 1 }}>
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    style={{
                      width: 56, height: 56, borderRadius: 16,
                      background: `${item.color}15`,
                      border: `2px solid ${item.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className="glass-card"
                  style={{ flex: 1, padding: '24px 28px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 17, color: 'var(--text-primary)', marginBottom: 2 }}>
                        {item.title}
                      </h3>
                      <div style={{ fontSize: 14, fontWeight: 600, color: item.color }}>{item.org}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>📍 {item.location}</div>
                    </div>
                    <span style={{
                      fontSize: 12, fontWeight: 700, color: 'var(--text-muted)',
                      background: 'var(--glass)', border: '1px solid var(--glass-border)',
                      borderRadius: 8, padding: '4px 12px', flexShrink: 0,
                    }}>
                      {item.period}
                    </span>
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 14 }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.highlights.map((h) => (
                      <span key={h} className="tech-badge">{h}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
