import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../../data/projects';
import ProjectVisual from '../ProjectVisual';

const easeOut = [0.16, 1, 0.3, 1];

const WorkChapter = ({ onSelect }) => {
  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-14">
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
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-20 md:mb-28"
      >
        The Work
      </motion.h2>

      <div className="flex flex-col gap-28 md:gap-40">
        {projects.map((project, i) => (
          <ProjectEntry key={project.id} project={project} index={i} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
};

const ProjectEntry = ({ project, index, onSelect }) => {
  const layout = index % 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="relative"
    >
      <button
        onClick={() => onSelect(project)}
        data-cursor="view"
        data-cursor-label="View"
        className="group relative w-full text-left focus:outline-none"
      >
        {/* giant faint index number */}
        <span
          className={`pointer-events-none select-none font-serif absolute z-0 text-[22vw] sm:text-[13rem] leading-none text-[var(--dark)]/[0.05] ${
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
    className={`relative rounded-3xl overflow-hidden border border-[var(--dark)]/8 transition-transform duration-500 group-hover:scale-[1.015] ${className}`}
    style={{ background: `linear-gradient(150deg, var(--cream) 0%, ${project.accent}16 100%)` }}
  >
    <ProjectVisual
      pattern={project.pattern}
      accent={project.accent}
      className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1"
    />
  </div>
);

const Meta = ({ project, span }) => (
  <div className={span ? 'sm:col-span-2' : ''}>
    <p className="eyebrow mb-3">{project.category}</p>
    <h3 className="font-serif text-4xl sm:text-5xl text-[var(--dark)] tracking-[-0.01em] transition-transform duration-400 group-hover:translate-x-2">
      {project.name}
    </h3>
    <p className="mt-3 text-[15px] text-[var(--dark)]/60 leading-relaxed max-w-sm">{project.tagline}</p>
    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--dark)]">
      <span className="opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
        Read the story
      </span>
      <span className="w-9 h-9 rounded-full border border-[var(--dark)]/15 flex items-center justify-center transition-all duration-400 group-hover:bg-[var(--dark)] group-hover:border-[var(--dark)] group-hover:rotate-45">
        <FiArrowUpRight className="w-4 h-4 transition-colors duration-400 group-hover:text-[var(--cream)]" />
      </span>
    </div>
  </div>
);

export default WorkChapter;
