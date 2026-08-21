import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp, FiChevronDown, FiGrid, FiX } from 'react-icons/fi';
import { chapters } from '../../data/chapters';
import { useLenis, scrollToId } from '../../lib/LenisContext';

const MagazineNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIndex, setShowIndex] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + window.innerHeight * 0.4;
      let idx = 0;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.offsetTop <= pos) idx = i;
      });
      setActiveIndex(idx);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (dir) => {
    const next = Math.min(Math.max(activeIndex + dir, 0), chapters.length - 1);
    scrollToId(lenis, chapters[next].id);
  };

  const jump = (id) => {
    setShowIndex(false);
    scrollToId(lenis, id);
  };

  const current = chapters[activeIndex];

  return (
    <>
      {/* Logo mark, top-left */}
      <a
        href="#hero"
        onClick={(e) => { e.preventDefault(); jump('hero'); }}
        data-cursor="link"
        className="fixed top-6 left-6 md:top-8 md:left-8 z-40 text-xl select-none text-[var(--dark)]"
        style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
      >
        Kanan
      </a>

      {/* Desktop: fixed chapter dial, right edge */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
        <button
          onClick={() => go(-1)}
          data-cursor="link"
          aria-label="Previous chapter"
          disabled={activeIndex === 0}
          className="w-9 h-9 rounded-full border border-[var(--dark)]/15 flex items-center justify-center text-[var(--dark)]/60 hover:text-[var(--dark)] hover:border-[var(--dark)] transition-colors disabled:opacity-25"
        >
          <FiChevronUp className="w-4 h-4" />
        </button>

        <button
          onClick={() => setShowIndex((v) => !v)}
          data-cursor="link"
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-full border border-[var(--dark)]/12 bg-[var(--cream)]/80 backdrop-blur-sm"
        >
          <span className="text-[11px] font-semibold tabular-nums text-[var(--dark)]">{current.number}</span>
          <span className="w-3.5 h-px bg-[var(--dark)]/25" />
          <span className="text-[11px] font-semibold tabular-nums text-[var(--dark)]/35">
            {chapters[chapters.length - 1].number}
          </span>
        </button>

        <button
          onClick={() => go(1)}
          data-cursor="link"
          aria-label="Next chapter"
          disabled={activeIndex === chapters.length - 1}
          className="w-9 h-9 rounded-full border border-[var(--dark)]/15 flex items-center justify-center text-[var(--dark)]/60 hover:text-[var(--dark)] hover:border-[var(--dark)] transition-colors disabled:opacity-25"
        >
          <FiChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile: compact bottom bar */}
      <div className="md:hidden fixed bottom-5 left-5 right-5 z-40 flex items-center justify-between px-4 py-2.5 rounded-full border border-[var(--dark)]/12 bg-[var(--cream)]/90 backdrop-blur-md shadow-lg">
        <button onClick={() => go(-1)} aria-label="Previous chapter" className="p-1.5 text-[var(--dark)]/60 disabled:opacity-25" disabled={activeIndex === 0}>
          <FiChevronUp className="w-4 h-4 rotate-[-90deg]" />
        </button>
        <button onClick={() => setShowIndex((v) => !v)} className="flex items-center gap-2 text-xs font-semibold text-[var(--dark)]">
          <FiGrid className="w-3.5 h-3.5" />
          {current.number} / {chapters[chapters.length - 1].number}
        </button>
        <button onClick={() => go(1)} aria-label="Next chapter" className="p-1.5 text-[var(--dark)]/60 disabled:opacity-25" disabled={activeIndex === chapters.length - 1}>
          <FiChevronDown className="w-4 h-4 rotate-[-90deg]" />
        </button>
      </div>

      {/* Chapter index overlay */}
      <AnimatePresence>
        {showIndex && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--dark)]/95 backdrop-blur-sm flex items-center justify-center px-6"
            onClick={() => setShowIndex(false)}
          >
            <button
              onClick={() => setShowIndex(false)}
              aria-label="Close"
              className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full border border-[var(--cream)]/25 text-[var(--cream)] flex items-center justify-center"
            >
              <FiX className="w-4.5 h-4.5" />
            </button>
            <nav className="flex flex-col items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {chapters.map((c, i) => (
                <motion.button
                  key={c.id}
                  onClick={() => jump(c.id)}
                  data-cursor="link"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`group flex items-baseline gap-4 py-2 transition-colors ${
                    i === activeIndex ? 'text-[var(--accent)]' : 'text-[var(--cream)]/60 hover:text-[var(--cream)]'
                  }`}
                >
                  <span className="text-sm tabular-nums font-medium">{c.number}</span>
                  <span className="font-serif text-3xl sm:text-5xl">{c.label}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MagazineNav;
