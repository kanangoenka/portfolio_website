import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import ProjectVisual from './ProjectVisual';

const easeOut = [0.16, 1, 0.3, 1];

const ProjectStory = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    // data-lenis-prevent: the site runs a global Lenis smooth-scroll
    // instance that hijacks wheel/touch events on the whole page and
    // redirects them to its own scroll target. Without this attribute,
    // every scroll gesture over this modal was eaten by Lenis and
    // applied to the (locked) page behind it instead of this panel —
    // Lenis checks for this attribute on an event's ancestor chain and,
    // when present, leaves that subtree to native scrolling.
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[90] bg-[var(--bg)] overflow-y-auto"
      data-lenis-prevent
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-14 py-5 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--dark)]/8">
          <span className="eyebrow">{project.index} — {project.category}</span>
          <button
            onClick={onClose}
            data-cursor="link"
            aria-label="Close story"
            className="w-10 h-10 rounded-full border border-[var(--dark)]/15 flex items-center justify-center hover:bg-[var(--dark)] hover:text-[var(--cream)] hover:border-[var(--dark)] transition-colors"
          >
            <FiX className="w-4.5 h-4.5" />
          </button>
        </div>

        <article className="max-w-5xl mx-auto px-6 md:px-14 py-16 md:py-24">
          {/* masthead */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full border border-[var(--dark)]/12 text-[11px] font-semibold uppercase tracking-wider text-[var(--dark)]/60">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[16vw] sm:text-7xl md:text-8xl leading-[0.92] tracking-[-0.02em] text-[var(--dark)] mb-6">
            {project.name}
          </h1>
          <p className="text-lg text-[var(--dark)]/55 max-w-xl mb-10">{project.tagline}</p>

          <div className="flex flex-wrap gap-4 mb-20">
            <a href={project.github} target="_blank" rel="noopener noreferrer" data-cursor="link" className="btn-outline">
              <FiGithub className="w-4 h-4" />
              GitHub
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" data-cursor="link" className="btn-primary">
                Live Demo
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* full-width visual */}
          <div
            className="relative aspect-[16/8] rounded-3xl overflow-hidden border border-[var(--dark)]/8 mb-24"
            style={{ background: `linear-gradient(150deg, var(--cream) 0%, ${project.accent}18 100%)` }}
          >
            <ProjectVisual pattern={project.pattern} accent={project.accent} className="absolute inset-0 w-full h-full" />
          </div>

          {/* THE IDEA — narrow column, offset right */}
          <StorySection number="01" label="The Idea" className="md:ml-[38%]">
            {project.idea}
          </StorySection>

          {/* THE BUILD — narrow column, offset left */}
          <StorySection number="02" label="The Build" className="md:mr-[38%]">
            {project.build}
          </StorySection>

          {/* THE STACK — tag cloud, full width */}
          <div className="my-20 md:my-28">
            <SectionLabel number="03" label="The Stack" />
            <div className="flex flex-wrap gap-3 mt-6">
              {project.stack.map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-[var(--cream)] border border-[var(--dark)]/10 text-[13px] font-medium text-[var(--dark)]/75">
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {project.features.map((f) => (
                <li key={f} className="text-[14.5px] text-[var(--dark)]/65 leading-relaxed flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* THE RESULT — large closing statement */}
          <div className="pt-16 border-t border-[var(--dark)]/10">
            <SectionLabel number="04" label="The Result" />
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug text-[var(--dark)] max-w-2xl mt-6">
              {project.result}
            </p>
          </div>
        </article>
      </motion.div>
    </motion.div>
  );
};

const SectionLabel = ({ number, label }) => (
  <div className="flex items-baseline gap-3">
    <span className="text-xs font-semibold tabular-nums text-[var(--dark)]/35">{number}</span>
    <span className="eyebrow">{label}</span>
  </div>
);

const StorySection = ({ number, label, children, className = '' }) => (
  <div className={`my-16 md:my-24 max-w-lg ${className}`}>
    <SectionLabel number={number} label={label} />
    <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[var(--dark)]/75 font-serif">{children}</p>
  </div>
);

export default ProjectStory;
