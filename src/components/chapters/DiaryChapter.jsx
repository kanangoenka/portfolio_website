import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiMonitor, FiServer, FiDatabase, FiBookOpen, FiTool, FiPlus } from 'react-icons/fi';
import CoffeeBeans from '../magazine/CoffeeBeans';

const easeOut = [0.16, 1, 0.3, 1];

const objects = [
  { id: 'notebook', label: 'Notebook', icon: FiBook, rotate: -2, items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'PHP', 'HTML5', 'CSS3'] },
  { id: 'laptop', label: 'Laptop', icon: FiMonitor, rotate: 1.5, items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap 5', 'Responsive UI'] },
  { id: 'server', label: 'Server', icon: FiServer, rotate: -1, items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'WebSockets', 'Authentication', 'Role-based Access'] },
  { id: 'database', label: 'Database', icon: FiDatabase, rotate: 2, items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { id: 'small-notebook', label: 'Small Notebook', icon: FiBookOpen, rotate: -1.5, items: ['LLM APIs', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'Matplotlib'] },
  { id: 'tools', label: 'Tools', icon: FiTool, rotate: 1, items: ['Git', 'GitHub', 'Docker', 'VTK', 'Figma'] },
];

const statements = [
  { text: 'Build for users.', rotate: -2, align: 'items-start' },
  { text: 'Keep things simple.', rotate: 1.5, align: 'items-end' },
  { text: 'Learn by making.', rotate: -1, align: 'items-start' },
  { text: 'Good software should feel clear.', rotate: 2, align: 'items-end' },
];

// The former Toolbox and Notes chapters, combined into one spread —
// like an open notebook with a left page (the toolbox) and a right
// page (a few notes). Same two sets of content as before, presented
// as one journal kept behind the counter.
const DiaryChapter = () => {
  const [open, setOpen] = useState('notebook');

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
        {/* the notebook's spine, desktop only */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--dark)]/15" aria-hidden="true" />

        {/* left page — the toolbox */}
        <div className="md:pr-12">
          <p className="eyebrow mb-3">The Toolbox</p>
          <p className="text-sm text-[var(--dark)]/50 mb-10 max-w-md">
            A desk of the things I build with. Tap an object to see what&rsquo;s inside.
          </p>
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {objects.map((obj, i) => (
              <DeskObject key={obj.id} obj={obj} index={i} isOpen={open === obj.id} onToggle={() => setOpen(open === obj.id ? null : obj.id)} />
            ))}
          </div>
        </div>

        {/* right page — the notes */}
        <div className="md:pl-12 relative">
          <div className="coffee-ring absolute -top-4 right-[6%] w-24 h-24 pointer-events-none hidden lg:block" />
          <div className="absolute top-[2%] right-[2%] w-16 opacity-40 pointer-events-none hidden sm:block">
            <CoffeeBeans layout="scatter" />
          </div>

          <p className="eyebrow mb-3">Notes from the Counter</p>
          <p className="text-sm text-[var(--dark)]/50 mb-10 max-w-md">A few things I keep coming back to.</p>

          <div className="flex flex-col gap-8 md:gap-10">
            {statements.map((s, i) => (
              <motion.div
                key={s.text}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.08 }}
                className={`flex flex-col ${s.align}`}
              >
                <p
                  className="text-3xl sm:text-4xl text-[var(--brown)] leading-none"
                  style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
                >
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DeskObject = ({ obj, index, isOpen, onToggle }) => {
  const Icon = obj.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0, rotate: obj.rotate }}
      whileHover={{ y: -6, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: easeOut, delay: index * 0.05 }}
      className="relative"
    >
      <button
        onClick={onToggle}
        data-cursor="link"
        className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-[color,background-color,border-color,box-shadow] duration-300 ${
          isOpen
            ? 'bg-[var(--dark)] border-[var(--dark)] text-[var(--cream)]'
            : 'bg-[var(--cream)] border-[var(--dark)]/10 text-[var(--dark)] hover:border-[var(--brown)] hover:shadow-[0_18px_34px_-20px_rgba(45,33,28,0.35)]'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-[var(--accent)] text-[var(--dark)]' : 'bg-[var(--dark)]/6 text-[var(--brown)]'}`}>
            <Icon className="w-3.5 h-3.5" />
          </span>
          <FiPlus className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? 'rotate-45 opacity-70' : 'opacity-40'}`} />
        </div>
        <p className="font-serif text-base sm:text-lg">{obj.label}</p>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-1.5 pt-3 pb-1">
              {obj.items.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-full bg-[var(--bg)] border border-[var(--dark)]/10 text-[11px] font-medium text-[var(--dark)]/75">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DiaryChapter;
