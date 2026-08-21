import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBook, FiMonitor, FiServer, FiDatabase, FiBookOpen, FiTool, FiPlus } from 'react-icons/fi';

const easeOut = [0.16, 1, 0.3, 1];

const objects = [
  { id: 'notebook', label: 'Notebook', icon: FiBook, rotate: -2, items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'PHP', 'HTML5', 'CSS3'] },
  { id: 'laptop', label: 'Laptop', icon: FiMonitor, rotate: 1.5, items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap 5', 'Responsive UI'] },
  { id: 'server', label: 'Server', icon: FiServer, rotate: -1, items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO', 'WebSockets', 'Authentication', 'Role-based Access'] },
  { id: 'database', label: 'Database', icon: FiDatabase, rotate: 2, items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { id: 'small-notebook', label: 'Small Notebook', icon: FiBookOpen, rotate: -1.5, items: ['LLM APIs', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'Matplotlib'] },
  { id: 'tools', label: 'Tools', icon: FiTool, rotate: 1, items: ['Git', 'GitHub', 'Docker', 'VTK', 'Figma'] },
];

const ToolboxChapter = () => {
  const [open, setOpen] = useState('notebook');

  return (
    <section id="toolbox" className="relative py-28 md:py-36 px-6 md:px-14">
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
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-6"
      >
        The Toolbox
      </motion.h2>
      <p className="text-sm text-[var(--dark)]/50 mb-16 md:mb-20 max-w-md">
        A desk of the things I build with. Tap an object to see what's inside.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-7">
        {objects.map((obj, i) => (
          <DeskObject key={obj.id} obj={obj} index={i} isOpen={open === obj.id} onToggle={() => setOpen(open === obj.id ? null : obj.id)} />
        ))}
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
        className={`w-full text-left rounded-2xl border p-5 sm:p-6 transition-[color,background-color,border-color,box-shadow] duration-300 ${
          isOpen
            ? 'bg-[var(--dark)] border-[var(--dark)] text-[var(--cream)]'
            : 'bg-[var(--cream)] border-[var(--dark)]/10 text-[var(--dark)] hover:border-[var(--brown)] hover:shadow-[0_18px_34px_-20px_rgba(45,33,28,0.35)]'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className={`w-9 h-9 rounded-full flex items-center justify-center ${isOpen ? 'bg-[var(--accent)] text-[var(--dark)]' : 'bg-[var(--dark)]/6 text-[var(--brown)]'}`}>
            <Icon className="w-4 h-4" />
          </span>
          <FiPlus className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-45 opacity-70' : 'opacity-40'}`} />
        </div>
        <p className="font-serif text-lg sm:text-xl">{obj.label}</p>
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
            <div className="flex flex-wrap gap-2 pt-4 pb-1">
              {obj.items.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--dark)]/10 text-[12px] font-medium text-[var(--dark)]/75">
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

export default ToolboxChapter;
