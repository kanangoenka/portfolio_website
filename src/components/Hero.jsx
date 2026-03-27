import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '99,102,241' : '139,92,246';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectParticles();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Gradient Orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(99,102,241,0.15)', top: '-10%', right: '-10%', animationDuration: '10s' }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(139,92,246,0.1)', bottom: '10%', left: '-5%', animationDuration: '13s', animationDelay: '-4s' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(34,211,238,0.08)', top: '40%', left: '40%', animationDuration: '9s', animationDelay: '-2s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '40px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: 800 }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-tag">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginTop: 16,
              marginBottom: 8,
              letterSpacing: '-0.02em',
            }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Kanan</span>
            <br />Goenka
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: 20,
            }}
          >
            Computer Engineering Student <span style={{ color: 'rgba(99,102,241,0.6)' }}>·</span> Full Stack Developer <span style={{ color: 'rgba(99,102,241,0.6)' }}>·</span> AI/ML Enthusiast <span style={{ color: 'rgba(99,102,241,0.6)' }}>·</span> Web Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{
              fontSize: 17,
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: 560,
              marginBottom: 40,
            }}
          >
            Passionate about building <strong style={{ color: 'var(--text-secondary)' }}>scalable web applications</strong> and{' '}
            <strong style={{ color: 'var(--text-secondary)' }}>intelligent systems</strong> that solve real-world problems.
            Currently pursuing B.Tech at KJ Somaiya, Mumbai.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}
          >
            <button className="btn-primary" onClick={scrollToProjects}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                View Projects
                <ArrowDown size={16} />
              </span>
            </button>
            <button className="btn-outline" onClick={scrollToContact}>
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Find me on</span>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <FaGithub size={18} />, label: 'GitHub', href: 'https://github.com/kanangoenka' },
                { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanan-goenka' },
                { icon: <Mail size={18} />, label: 'Email', href: 'mailto:kanan@example.com' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'var(--glass)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                    e.currentTarget.style.color = '#818cf8';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'var(--glass)';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
        <div style={{ width: 24, height: 38, border: '2px solid var(--glass-border)', borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: 4, height: 4, borderRadius: '50%', background: '#6366f1' }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
