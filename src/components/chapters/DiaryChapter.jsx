import { motion } from 'framer-motion';
import Mountains from '../magazine/Mountains';

const easeOut = [0.16, 1, 0.3, 1];

// Same toolbox content as before — grouping and items unchanged — but
// each group now carries a color from the site's new palette instead
// of the previous all-brown card treatment.
const objects = [
  { id: 'notebook', label: 'Notebook', rotate: -2, color: '#7FA8C9', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'PHP', 'HTML5', 'CSS3'] },
  { id: 'laptop', label: 'Laptop', rotate: 1.5, color: '#DDA53F', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap 5', 'Responsive UI'] },
  { id: 'server', label: 'Server', rotate: -1, color: '#3F6B52', items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'WebSockets', 'Authentication', 'Role-based Access'] },
  { id: 'database', label: 'Database', rotate: 2, color: '#D97E63', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { id: 'small-notebook', label: 'Small Notebook', rotate: -1.5, color: '#9184A8', items: ['LLM APIs', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'Matplotlib'] },
  { id: 'tools', label: 'Tools', rotate: 1, color: '#6B4A34', items: ['Git', 'GitHub', 'Docker', 'VTK', 'Figma'] },
];

const statements = [
  { text: 'Build for users.', rotate: -2, align: 'self-start', pin: '#D97E63' },
  { text: 'Keep things simple.', rotate: 1.5, align: 'self-end', pin: '#DDA53F' },
  { text: 'Learn by making.', rotate: -1, align: 'self-start', pin: '#7FA8C9' },
  { text: 'Good software should feel clear.', rotate: 2, align: 'self-end', pin: '#3F6B52' },
];

// The former Toolbox and Notes chapters, combined into one spread —
// an actual open spiral notebook lying on the café table. Left page
// is the toolbox, right page is a few notes; same content as before,
// just no longer presented as click-to-expand desk objects.
const DiaryChapter = () => {
  return (
    <section id="diary" className="relative py-28 md:py-36 px-6 md:px-14 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="eyebrow mb-6"
      >
        Chapter 05
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-16 md:mb-20"
      >
        The Owner&rsquo;s Diary
      </motion.h2>

      {/* the notebook itself */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        style={{ rotate: '-0.3deg' }}
        className="relative max-w-6xl mx-auto rounded-[24px] border border-[var(--dark)]/10 bg-[var(--cream)] grain shadow-[0_40px_70px_-40px_rgba(45,33,28,0.4)] overflow-hidden"
      >
        <PaperClip className="pointer-events-none absolute -top-5 left-[46%] sm:left-1/2 -translate-x-1/2 z-20 w-9 h-14 sm:w-10 sm:h-16" />

        <div
          className="pointer-events-none absolute top-5 right-5 sm:top-6 sm:right-6 z-10 w-14 h-14 rounded-full border-2 border-dashed flex items-center justify-center rotate-[8deg]"
          style={{ borderColor: 'var(--coral)', opacity: 0.55 }}
        >
          <span className="text-[7.5px] font-bold tracking-widest uppercase text-center leading-tight" style={{ color: 'var(--coral)' }}>
            Café
            <br />
            Notes
          </span>
        </div>

        <SpiralBinding />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* left page — toolbox */}
          <div className="p-6 sm:p-8 md:p-10 md:pr-16">
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--dark)] mb-1">Toolbox</h3>
            <p className="text-sm text-[var(--dark)]/50 mb-8 max-w-md">A desk of the things I build with.</p>

            <div className="flex flex-col gap-5">
              {objects.map((obj, i) => (
                <ToolboxGroup key={obj.id} obj={obj} index={i} />
              ))}
            </div>

            <p className="mt-10 text-[10px] tracking-widest uppercase text-[var(--dark)]/30">Pg. 05</p>
          </div>

          {/* mobile-only spiral, between stacked pages */}
          <div className="flex md:hidden items-center justify-center gap-2.5 py-4 border-y border-dashed border-[var(--dark)]/12" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => (
              <SpiralRing key={i} />
            ))}
          </div>

          {/* right page — notes */}
          <div className="p-6 sm:p-8 md:p-10 md:pl-16 relative">
            <Mountains className="pointer-events-none absolute bottom-6 right-6 w-20 h-9 opacity-25" />

            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--dark)] mb-1">Notes</h3>
            <p className="text-sm text-[var(--dark)]/50 mb-8 max-w-md">A few things I keep coming back to.</p>

            <div className="flex flex-col gap-8">
              {statements.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, ease: easeOut, delay: i * 0.08 }}
                  style={{ rotate: `${s.rotate}deg` }}
                  className={`relative max-w-[240px] bg-[var(--bg)] border border-[var(--dark)]/8 rounded-lg px-5 py-5 shadow-[0_10px_22px_-16px_rgba(45,33,28,0.35)] ${s.align}`}
                >
                  <span
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border border-[var(--dark)]/10 shadow-sm"
                    style={{ background: s.pin }}
                    aria-hidden="true"
                  />
                  <p className="text-xl sm:text-2xl leading-tight text-[var(--dark)]" style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}>
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-[10px] tracking-widest uppercase text-[var(--dark)]/30 text-right">Pg. 06</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// A vertical column of small ring "holes" running down the notebook's
// spine, marking the fold between the two pages. Desktop only — on
// mobile the pages stack, and a horizontal row does the same job.
const SpiralBinding = () => (
  <div
    className="hidden md:flex absolute inset-y-6 left-1/2 -translate-x-1/2 flex-col items-center justify-between z-10"
    aria-hidden="true"
  >
    <span className="absolute inset-y-0 w-px bg-[var(--dark)]/10" />
    {Array.from({ length: 16 }).map((_, i) => (
      <SpiralRing key={i} />
    ))}
  </div>
);

const SpiralRing = () => (
  <span
    className="relative w-3.5 h-3.5 rounded-full border-2 shrink-0"
    style={{
      borderColor: 'var(--dark)',
      opacity: 0.3,
      background: 'var(--bg)',
      boxShadow: 'inset 0 1px 1px rgba(45,33,28,0.2)',
    }}
  />
);

const PaperClip = ({ className = '' }) => (
  <svg viewBox="0 0 40 60" className={className} role="presentation">
    <path
      d="M20 6 C10 6 6 14 6 22 L6 44 C6 50 11 54 16 54 C21 54 25 50 25 44 L25 18 C25 15 23 13 20 13 C17 13 15 15 15 18 L15 40"
      fill="none"
      stroke="var(--dark)"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.32"
    />
  </svg>
);

const ToolboxGroup = ({ obj, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, ease: easeOut, delay: index * 0.05 }}
  >
    <p
      className="inline-block text-lg sm:text-xl mb-2"
      style={{ fontFamily: 'var(--font-hand)', fontWeight: 600, color: obj.color, transform: `rotate(${obj.rotate * 0.7}deg)` }}
    >
      {obj.label}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {obj.items.map((item, i) => (
        <span
          key={item}
          className="px-2.5 py-1 rounded-md text-[11.5px] font-medium text-[var(--dark)]/75 border"
          style={{
            background: `${obj.color}16`,
            borderColor: `${obj.color}40`,
            transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)`,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default DiaryChapter;
