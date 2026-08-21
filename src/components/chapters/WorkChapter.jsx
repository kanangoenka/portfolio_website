import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectVisual from '../ProjectVisual';
import CoffeeBeans from '../magazine/CoffeeBeans';

const easeOut = [0.16, 1, 0.3, 1];

const WorkChapter = ({ onSelect }) => {
  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-14 overflow-hidden">
      {/* the section's own coffee marks — every other chapter carries at
          least one; The Work previously had none, which is a big part
          of why it read as flat/empty next to its neighbors */}
      <div className="coffee-ring absolute top-10 left-[6%] w-28 h-28 pointer-events-none hidden md:block" />
      <div className="absolute bottom-[8%] right-[6%] w-16 opacity-30 pointer-events-none hidden md:block">
        <CoffeeBeans layout="scatter" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="eyebrow mb-6"
      >
        Chapter 03
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-4"
      >
        The Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        className="mb-20 md:mb-28 text-sm text-[var(--dark)]/50 max-w-md"
      >
        Four projects, each a short read. Tap one to open the full story.
      </motion.p>

      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, i) => (
          <Fragment key={project.id}>
            {i > 0 && <ProjectDivider />}
            <ProjectEntry project={project} index={i} onSelect={onSelect} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

// A small editorial break between entries — a torn-ticket-style rule
// with a single bean at its center — so the space between projects
// reads as a deliberate pause rather than a blank gap.
const ProjectDivider = () => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0.7 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, ease: easeOut }}
    className="flex items-center justify-center gap-4 sm:gap-6"
    aria-hidden="true"
  >
    <span className="h-px flex-1 max-w-[140px] bg-[var(--dark)]/10" />
    <div className="w-9 opacity-45 -rotate-6">
      <CoffeeBeans layout="line" />
    </div>
    <span className="h-px flex-1 max-w-[140px] bg-[var(--dark)]/10" />
  </motion.div>
);

const ProjectEntry = ({ project, index, onSelect }) => {
  const alignRight = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative"
    >
      {/* The whole entry is one button — semantic, keyboard-focusable,
          and it needs to read as clickable even before any hover/focus
          happens, not just on interaction. */}
      <button
        onClick={() => onSelect(project)}
        data-cursor="view"
        data-cursor-label="View"
        className="group relative w-full text-left rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        {/* giant faint index number, alternating side for rhythm */}
        <span
          className={`pointer-events-none select-none font-serif absolute z-0 text-[22vw] sm:text-[10rem] leading-none text-[var(--dark)]/[0.05] transition-colors duration-500 group-hover:text-[var(--dark)]/[0.08] ${
            alignRight ? 'top-[-10%] right-0' : 'top-[-8%] left-0'
          }`}
        >
          {project.index}
        </span>

        <div className="relative z-10 flex items-start gap-5 sm:gap-7">
          <PatternStamp project={project} />
          <div className="flex-1 min-w-0 pt-1">
            <Meta project={project} />
          </div>
        </div>
      </button>
    </motion.div>
  );
};

// The "pattern" element — previously a large rectangular block (up to
// ~60% of the entry's width) carrying a mostly-empty gradient behind
// sparse line art. Redesigned as a small coffee-stamp medallion: the
// same per-project ProjectVisual line art, cropped into a warm ringed
// circle with a tiny bean charm, sized to sit beside the title rather
// than compete with it.
const PatternStamp = ({ project }) => (
  <div
    className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 grain shadow-[0_10px_20px_-14px_rgba(45,33,28,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6"
    style={{
      background: `radial-gradient(circle at 35% 30%, ${project.accent}26, var(--cream) 72%)`,
      borderColor: `${project.accent}40`,
    }}
  >
    <ProjectVisual
      pattern={project.pattern}
      accent={project.accent}
      className="absolute inset-0 w-full h-full scale-[1.8] transition-transform duration-700 group-hover:scale-[1.95]"
    />

    {/* inner rim, like a pressed/stamped edge */}
    <div
      className="pointer-events-none absolute inset-1.5 rounded-full border"
      style={{ borderColor: `${project.accent}30` }}
    />

    {/* a single coffee bean, like a wax-seal charm on the stamp */}
    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--cream)] border border-[var(--dark)]/10 shadow-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" role="presentation">
        <ellipse cx="12" cy="12" rx="8" ry="5" fill="var(--brown)" />
        <path d="M5 12 Q12 8 19 12" stroke="var(--dark)" strokeWidth="1.3" fill="none" opacity="0.5" />
      </svg>
    </span>
  </div>
);

const Meta = ({ project }) => (
  <div>
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
      <p className="eyebrow">{project.category}</p>
      {project.year && (
        <>
          <span className="w-1 h-1 rounded-full bg-[var(--dark)]/25" aria-hidden="true" />
          <span className="text-[11px] font-semibold tracking-wide text-[var(--dark)]/40">{project.year}</span>
        </>
      )}
    </div>

    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--dark)] tracking-[-0.01em] transition-transform duration-400 group-hover:translate-x-2">
      {project.name}
    </h3>
    <p className="mt-3 text-[15px] text-[var(--dark)]/60 leading-relaxed max-w-sm">{project.tagline}</p>

    <div className="mt-5 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="tag-pill"
          style={{ background: `${project.accent}14`, borderColor: `${project.accent}45` }}
        >
          {tag}
        </span>
      ))}
    </div>

    {/* always-visible call to open — not hover-gated, so mobile/touch
        visitors get the same "this is clickable" cue as desktop */}
    <div className="mt-6 flex items-center gap-2.5">
      <span
        className="text-[15px] text-[var(--brown)] transition-transform duration-400 group-hover:translate-x-1"
        style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
      >
        brew this one
      </span>
      <span className="w-7 h-7 rounded-full border border-[var(--dark)]/20 flex items-center justify-center transition-all duration-400 group-hover:bg-[var(--dark)] group-hover:border-[var(--dark)] group-hover:rotate-45">
        <FiArrowUpRight className="w-3.5 h-3.5 text-[var(--dark)]/70 transition-colors duration-400 group-hover:text-[var(--cream)]" />
      </span>
    </div>
  </div>
);

export default WorkChapter;
