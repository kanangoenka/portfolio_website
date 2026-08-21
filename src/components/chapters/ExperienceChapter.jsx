import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1];

const notes = [
  { tag: 'Medical Imaging', text: 'Built a browser-based medical-imaging viewer with VTK to visualize patient scan data.', rotate: -2 },
  { tag: 'Full-Stack Development', text: 'Built and deployed the platform on React.js and TypeScript, with Node.js, Express.js, and REST APIs on the backend.', rotate: 1.5 },
  { tag: 'Patient Workflows', text: 'Integrated upload, processing, visualization, and report-delivery flows for patient case files.', rotate: -1 },
  { tag: 'Role-Based Worklists', text: 'Powered multi-tier user workflows with role-based worklists across the platform.', rotate: 2 },
];

const ExperienceChapter = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-14 overflow-hidden">
      <div className="coffee-ring absolute top-16 right-[10%] w-32 h-32 pointer-events-none hidden md:block" />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="eyebrow mb-6"
      >
        Chapter 04
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-16 md:mb-20"
      >
        The Owner&rsquo;s Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-20 md:mb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="md:col-span-4 font-serif text-[9rem] sm:text-[11rem] leading-none text-[var(--dark)] tracking-[-0.02em]"
        >
          2026
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="md:col-span-8"
        >
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--dark)] leading-tight mb-4">
            Software Engineer Intern
          </h3>
          <p className="text-[15px] text-[var(--brown)] font-semibold mb-1">MedMarvel Software Solutions Pvt. Ltd.</p>
          <p className="text-sm text-[var(--dark)]/50 mb-1">Pune/Pimpri-Chinchwad · On-site</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--dark)]/40">May 2026 — July 2026</p>
        </motion.div>
      </div>

      {/* annotation notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {notes.map((n, i) => (
          <motion.div
            key={n.tag}
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: easeOut, delay: i * 0.08 }}
            className="paper-edge bg-[var(--cream)] border border-[var(--dark)]/8 rounded-2xl p-6 shadow-[0_10px_30px_-18px_rgba(45,33,28,0.3)]"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brown)] mb-3">{n.tag}</p>
            <p className="text-[14.5px] text-[var(--dark)]/70 leading-relaxed">{n.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceChapter;
