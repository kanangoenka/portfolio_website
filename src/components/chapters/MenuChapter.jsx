import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectVisual from '../ProjectVisual';
import Mountains from '../magazine/Mountains';

const easeOut = [0.16, 1, 0.3, 1];
const total = projects.length;

const navBtnClass =
  'group inline-flex items-center gap-2 rounded-full border border-[var(--dark)]/15 px-5 py-2.5 text-sm font-semibold text-[var(--dark)] transition-colors duration-300 hover:bg-[var(--dark)] hover:text-[var(--cream)] hover:border-[var(--dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]';

// The Work section, reimagined as a physical café menu: one project
// ("dish") visible at a time, turned like a paper page rather than
// scrolled past as a grid. Content is unchanged — idea+build, stack,
// result — only reframed as Recipe / Ingredients / Outcome.
const MenuChapter = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();

  // [page, direction] — direction drives which way the page flips.
  const [[page, direction], setPage] = useState([0, 0]);
  const index = ((page % total) + total) % total;
  const project = projects[index];

  const paginate = (dir) => setPage(([p]) => [p + dir, dir]);
  const goTo = (i) => setPage(() => [i, i > index ? 1 : -1]);

  // Arrow-key paging, only while the Menu is actually the section in
  // view — a global listener would otherwise hijack arrow keys while
  // the visitor is reading a different part of the page.
  useEffect(() => {
    if (!inView) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inView]);

  const flipVariants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1, transition: { duration: 0.3, ease: easeOut } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }
    : {
        enter: (dir) => ({ rotateY: dir >= 0 ? 78 : -78, opacity: 0 }),
        center: { rotateY: 0, opacity: 1, transition: { duration: 0.55, ease: easeOut } },
        exit: (dir) => ({ rotateY: dir >= 0 ? -78 : 78, opacity: 0, transition: { duration: 0.4, ease: [0.7, 0, 0.2, 1] } }),
      };

  return (
    <section ref={sectionRef} id="work" className="relative py-28 md:py-36 px-6 md:px-14 overflow-x-hidden">
      <div className="coffee-ring absolute top-10 left-[6%] w-28 h-28 pointer-events-none hidden md:block" />
      <Mountains className="pointer-events-none absolute bottom-0 left-0 w-full h-24 opacity-40 hidden md:block" />

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
        Menu
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        className="mb-16 md:mb-20 text-sm text-[var(--dark)]/50 max-w-md"
      >
        Four dishes, one at a time. Turn the page to see the next.
      </motion.p>

      <div className="relative max-w-3xl mx-auto">
        <p className="eyebrow text-center mb-6">Mountain Café — Menu</p>

        <div style={{ perspective: 1800 }} className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              variants={flipVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                transformOrigin: direction >= 0 ? 'left center' : 'right center',
                transformStyle: 'preserve-3d',
              }}
              drag={prefersReducedMotion ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_e, info) => {
                if (info.offset.x < -80) paginate(1);
                else if (info.offset.x > 80) paginate(-1);
              }}
              data-lenis-prevent-touch
              className="relative rounded-[28px] border border-[var(--dark)]/10 bg-[var(--cream)] grain shadow-[0_30px_60px_-30px_rgba(45,33,28,0.35)] px-6 sm:px-10 md:px-14 py-10 md:py-14"
            >
              <div className="flex items-start gap-5 mb-8">
                <DishStamp project={project} />
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                    <p className="eyebrow">{project.category}</p>
                    {project.year && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[var(--dark)]/25" aria-hidden="true" />
                        <span className="text-[11px] font-semibold tracking-wide text-[var(--dark)]/40">{project.year}</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--dark)] tracking-[-0.01em]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-[var(--dark)]/60 leading-relaxed">{project.tagline}</p>
                </div>
              </div>

              <MenuSection number="01" label="Recipe">
                <p>{project.idea}</p>
                <p className="mt-3">{project.build}</p>
              </MenuSection>

              <MenuSection number="02" label="Ingredients">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="tag-pill"
                      style={{ background: `${project.accent}14`, borderColor: `${project.accent}45` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="text-[14px] text-[var(--dark)]/65 leading-relaxed flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </MenuSection>

              <MenuSection number="03" label="Outcome">
                <p className="font-serif text-xl sm:text-2xl leading-snug text-[var(--dark)]">{project.result}</p>
              </MenuSection>

              <div className="mt-10 pt-8 border-t border-dashed border-[var(--dark)]/15 flex flex-wrap gap-4">
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
            </motion.article>
          </AnimatePresence>
        </div>

        {/* controls — clearly a booklet: previous/next, page count, index dots */}
        <div className="flex items-center justify-between mt-8">
          <button onClick={() => paginate(-1)} data-cursor="link" className={navBtnClass} aria-label="Previous dish">
            <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-lg text-[var(--dark)] tabular-nums">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-[10px] tracking-widest uppercase text-[var(--dark)]/40">of {String(total).padStart(2, '0')}</span>
          </div>

          <button onClick={() => paginate(1)} data-cursor="link" className={navBtnClass} aria-label="Next dish">
            <span className="hidden sm:inline">Next</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6" role="group" aria-label="Menu index">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-current={i === index ? 'true' : undefined}
              aria-label={`Go to ${p.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                i === index ? 'w-6 bg-[var(--accent)]' : 'w-1.5 bg-[var(--dark)]/15 hover:bg-[var(--dark)]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = ({ number, label, children }) => (
  <div className="mb-8 md:mb-10 last:mb-0">
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-xs font-semibold tabular-nums text-[var(--dark)]/35">{number}</span>
      <span className="eyebrow">{label}</span>
    </div>
    <div className="text-[15px] sm:text-base text-[var(--dark)]/70 leading-relaxed">{children}</div>
  </div>
);

// The "pattern" element, kept as a small coffee/dish-stamp medallion —
// the per-project line art, cropped into a warm ringed circle with a
// tiny bean charm, sized to sit beside the title rather than dominate.
const DishStamp = ({ project }) => (
  <div
    className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 grain shadow-[0_10px_20px_-14px_rgba(45,33,28,0.4)]"
    style={{
      background: `radial-gradient(circle at 35% 30%, ${project.accent}26, var(--cream) 72%)`,
      borderColor: `${project.accent}40`,
    }}
  >
    <ProjectVisual pattern={project.pattern} accent={project.accent} className="absolute inset-0 w-full h-full scale-[1.8]" />
    <div className="pointer-events-none absolute inset-1.5 rounded-full border" style={{ borderColor: `${project.accent}30` }} />
    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[var(--cream)] border border-[var(--dark)]/10 shadow-sm flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" role="presentation">
        <ellipse cx="12" cy="12" rx="8" ry="5" fill="var(--brown)" />
        <path d="M5 12 Q12 8 19 12" stroke="var(--dark)" strokeWidth="1.3" fill="none" opacity="0.5" />
      </svg>
    </span>
  </div>
);

export default MenuChapter;
