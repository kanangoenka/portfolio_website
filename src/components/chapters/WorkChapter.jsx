import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { Coffee } from 'lucide-react';
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
  const layout = index % 4;

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
          and (per the brief) it needs to read as clickable even before
          any hover/focus happens, not just on interaction. */}
      <button
        onClick={() => onSelect(project)}
        data-cursor="view"
        data-cursor-label="View"
        className="group relative w-full text-left rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      >
        {/* giant faint index number */}
        <span
          className={`pointer-events-none select-none font-serif absolute z-0 text-[22vw] sm:text-[13rem] leading-none text-[var(--dark)]/[0.05] transition-colors duration-500 group-hover:text-[var(--dark)]/[0.08] ${
            layout === 1 || layout === 3 ? 'top-[-10%] right-0' : 'top-[-8%] left-0'
          }`}
        >
          {project.index}
        </span>

        {layout === 0 && (
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-14">
            <Visual project={project} className="w-full md:w-[58%] aspect-[16/10]" />
            <div className="w-full md:w-[42%] pt-4">
              <Meta project={project} />
            </div>
          </div>
        )}

        {layout === 1 && (
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-start gap-8 md:gap-14">
            <Visual project={project} className="w-full md:w-[54%] aspect-[4/3] md:mt-10" />
            <div className="w-full md:w-[46%] pt-4">
              <Meta project={project} />
            </div>
          </div>
        )}

        {layout === 2 && (
          <div className="relative z-10">
            <Visual project={project} className="w-full aspect-[21/9] mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
              <span className="font-serif text-lg text-[var(--dark)]/30">{project.index}</span>
              <Meta project={project} span />
            </div>
          </div>
        )}

        {layout === 3 && (
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-8 md:gap-14">
            <div className="w-full md:w-[38%] pt-4">
              <Meta project={project} />
            </div>
            <Visual project={project} className="w-full md:w-[62%] aspect-[16/11] md:-mt-6" />
          </div>
        )}
      </button>
    </motion.div>
  );
};

const Visual = ({ project, className }) => (
  <div
    className={`relative rounded-3xl overflow-hidden border border-[var(--dark)]/10 grain shadow-[0_14px_30px_-22px_rgba(45,33,28,0.35)] transition-[transform,box-shadow] duration-500 group-hover:scale-[1.015] group-hover:shadow-[0_24px_46px_-20px_rgba(45,33,28,0.4)] ${className}`}
    style={{ background: `linear-gradient(150deg, var(--cream) 0%, ${project.accent}16 100%)` }}
  >
    <ProjectVisual
      pattern={project.pattern}
      accent={project.accent}
      className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1"
    />

    {/* faint accent ring, tucked in the corner — echoes the site's
        coffee-ring motif without competing with the line art */}
    <div
      className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full border-[3px] opacity-[0.09]"
      style={{ borderColor: project.accent }}
    />

    {/* ticket-stub tag — small, real metadata (year/category), with a
        tiny steam wisp that only appears on hover */}
    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 flex items-center gap-1.5 rounded-full bg-[var(--cream)]/90 backdrop-blur-sm border border-[var(--dark)]/10 pl-2 pr-3 py-1.5 shadow-sm transition-transform duration-400 group-hover:-translate-y-0.5">
      <span
        className="relative w-5 h-5 rounded-full flex items-center justify-center shrink-0"
        style={{ background: `${project.accent}22` }}
      >
        <Coffee className="w-3 h-3" style={{ color: project.accent }} />
        {/* opacity is gated on this wrapper, not on .steam-wisp itself —
            that class runs its own infinite keyframe animation, which
            would otherwise fight a group-hover opacity toggle placed
            directly on it */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="steam-wisp" />
        </span>
      </span>
      <span className="text-[11px] font-semibold tracking-wide text-[var(--dark)]/70 whitespace-nowrap">
        {project.year || project.category.split(' / ')[0]}
      </span>
    </div>

    {/* persistent "this opens" affordance — visible at rest (not just on
        hover/focus), so it reads as tappable on touch devices too, and
        brightens on hover for desktop feedback */}
    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-10 w-9 h-9 rounded-full bg-[var(--cream)]/90 backdrop-blur-sm border border-[var(--dark)]/15 flex items-center justify-center shadow-sm transition-all duration-400 group-hover:bg-[var(--dark)] group-hover:border-[var(--dark)] group-hover:scale-110 group-hover:rotate-45">
      <FiArrowUpRight className="w-4 h-4 text-[var(--dark)]/70 transition-colors duration-400 group-hover:text-[var(--cream)]" />
    </div>
  </div>
);

const Meta = ({ project, span }) => (
  <div className={span ? 'sm:col-span-2' : ''}>
    <p className="eyebrow mb-3">{project.category}</p>
    <h3 className="font-serif text-4xl sm:text-5xl text-[var(--dark)] tracking-[-0.01em] transition-transform duration-400 group-hover:translate-x-2">
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
    <div className="mt-6 flex items-center gap-2">
      <span
        className="text-[15px] text-[var(--brown)] transition-transform duration-400 group-hover:translate-x-1"
        style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
      >
        brew this one →
      </span>
    </div>
  </div>
);

export default WorkChapter;
