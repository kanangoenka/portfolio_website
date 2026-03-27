import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'ElectroHub',
    subtitle: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform featuring user authentication, dynamic cart management, smooth checkout flow, and a powerful admin dashboard for product & order management.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    icon: '🛒',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    github: '#',
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    subtitle: 'WebSocket Messaging',
    description:
      'Lightning-fast real-time messaging app built with WebSockets. Supports multiple chat rooms, live user status, and a fully responsive UI optimized for all devices.',
    tech: ['Node.js', 'Socket.io', 'Express', 'HTML/CSS'],
    icon: '💬',
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
    github: '#',
    live: null,
    featured: false,
  },
  {
    id: 3,
    title: 'MediLink',
    subtitle: 'AI Healthcare Platform · Ongoing',
    description:
      'Intelligent healthcare platform powered by an AI chatbot for personalized health insights, symptom analysis, and doctor recommendations. Built on the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'AI/ML'],
    icon: '🏥',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    github: '#',
    live: null,
    featured: true,
    badge: 'In Progress',
  },
  {
    id: 4,
    title: 'Student Performance Predictor',
    subtitle: 'Machine Learning Model',
    description:
      'ML model that predicts student academic performance using scikit-learn. Includes in-depth data analysis, feature engineering, and rich interactive visualizations.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    icon: '📈',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    github: '#',
    live: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Smart Task Manager',
    subtitle: 'Priority Optimizer',
    description:
      'Intelligent task management app with priority optimization algorithms. Features both a clean CLI interface and a Tkinter GUI for efficient task scheduling and deadline tracking.',
    tech: ['Python', 'Tkinter', 'Algorithms', 'CLI'],
    icon: '✅',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    github: '#',
    live: null,
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--glass)',
        border: `1px solid ${hovered ? `${project.color}40` : 'var(--glass-border)'}`,
        borderRadius: 24,
        padding: 28,
        backdropFilter: 'blur(20px)',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px ${project.color}20` : 'none',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      {/* Top glow bar on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: project.gradient,
          transformOrigin: 'left',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: `${project.color}15`,
            border: `1px solid ${project.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, flexShrink: 0,
            transition: 'all 0.3s ease',
            ...(hovered ? { background: `${project.color}25`, transform: 'scale(1.1)' } : {}),
          }}>
            {project.icon}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h3 style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: 17, color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              {project.badge && (
                <span style={{
                  fontSize: 11, fontWeight: 700, color: '#10b981',
                  background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: 6, padding: '2px 8px',
                }}>
                  {project.badge}
                </span>
              )}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginTop: 2 }}>
              {project.subtitle}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href={project.github}
            title="GitHub"
            style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'var(--glass)', border: '1px solid var(--glass-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)', textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.color}50`; e.currentTarget.style.color = project.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <FaGithub size={15} />
          </motion.a>
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              href={project.live}
              title="Live Demo"
              style={{
                width: 34, height: 34, borderRadius: 9,
                background: 'var(--glass)', border: '1px solid var(--glass-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', textDecoration: 'none',
              }}
            >
              <ExternalLink size={15} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1 }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tech.map((t) => (
          <span key={t} className="tech-badge">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section" style={{ background: 'rgba(99,102,241,0.02)' }}>
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
            <Zap size={12} />
            Featured Projects
          </div>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 12, maxWidth: 480, margin: '12px auto 0', fontSize: 16, lineHeight: 1.7 }}>
            A curated selection of projects showcasing full-stack development, machine learning, and system design skills.
          </p>
        </motion.div>

        {/* All 5 projects in a single responsive grid — no gaps/orphans */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
