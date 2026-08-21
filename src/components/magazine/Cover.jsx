import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCornerDownLeft } from 'react-icons/fi';
import CoffeeBeans from './CoffeeBeans';
import MagneticButton from '../MagneticButton';

const easeOut = [0.16, 1, 0.3, 1];

// The front cover of the "issue" — a distinct, darker, hardcover-style
// title page rather than a preview of the (light, cream) interior. The
// visitor "opens" it via the stamp button or the Enter key; on exit it
// lifts away like a cover being lifted off the pages beneath it.
const Cover = ({ onEnter }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter') onEnter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEnter]);

  return (
    <motion.div
      exit={{ y: '-102%', scale: 0.97, transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } }}
      style={{ transformOrigin: 'top center' }}
      className="fixed inset-0 z-[100] bg-[var(--dark)] text-[var(--cream)] overflow-hidden grain"
    >
      {/* warm ambient glow, like light caught in a dark roast */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 12%, rgba(184,117,58,0.22), transparent 60%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 85% 90%, rgba(201,162,126,0.14), transparent 65%)' }}
      />

      {/* letterpress cover frame */}
      <div className="pointer-events-none absolute inset-3 sm:inset-6 md:inset-8 rounded-[20px] border border-[var(--cream)]/12" />

      {/* stamped ring, behind the title — the site's coffee-ring motif, reworked as a wax-seal-style emblem */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78vw] max-w-[520px] aspect-square rounded-full border border-[var(--light-coffee)]/25" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] w-[58vw] max-w-[380px] aspect-square rounded-full border border-[var(--accent)]/20" />

      <div className="absolute top-[14%] right-[10%] w-16 sm:w-20 opacity-40 hidden sm:block">
        <CoffeeBeans layout="scatter" />
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-[100svh] px-6 md:px-14 py-8 md:py-12">
        {/* masthead */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-start justify-between text-[var(--cream)]/55"
        >
          <span className="eyebrow !text-[var(--light-coffee)]">Field Notes</span>
          <span className="eyebrow !text-[var(--light-coffee)]">Vol. 01 · 2026</span>
        </motion.div>

        {/* title block */}
        <div className="flex flex-col items-center text-center -mt-10 md:-mt-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="text-2xl sm:text-3xl text-[var(--accent)] mb-2"
            style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
          >
            notes on things I've built —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: easeOut }}
            className="font-serif text-[13.5vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.02em] text-[var(--cream)]"
          >
            Kanan Goenka
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
            className="w-16 h-px bg-[var(--light-coffee)]/40 my-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[var(--cream)]/55"
          >
            Full-Stack Developer · Software Engineer · AI Applications
          </motion.p>
        </div>

        {/* entry interaction */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: easeOut }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <span className="hidden sm:block text-xs text-[var(--cream)]/40 max-w-[200px]">
            Mumbai, India — open the cover to read on.
          </span>

          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <span className="stamp-halo" aria-hidden="true" />
              <span className="stamp-ring" aria-hidden="true" />
              <MagneticButton
                as="button"
                onClick={onEnter}
                data-cursor="link"
                strength={0.25}
                className="stamp-btn"
                aria-label="Enter the portfolio"
              >
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">Enter</span>
                <FiCornerDownLeft className="w-3.5 h-3.5 mt-1 opacity-70" />
              </MagneticButton>
            </div>
            <span className="text-[11px] text-[var(--cream)]/40 tracking-wide">
              or press <kbd className="px-1.5 py-0.5 rounded border border-[var(--cream)]/20 text-[var(--cream)]/60 font-sans">Enter ↵</kbd>
            </span>
          </div>

          <span className="hidden sm:block text-xs text-[var(--cream)]/40 max-w-[200px] text-right">
            Issue 01 — building things with care.
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cover;
