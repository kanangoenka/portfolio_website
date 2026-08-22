import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiCornerDownLeft } from 'react-icons/fi';
import CoffeeBeans from './CoffeeBeans';
import Mountains from './Mountains';
import Bird from './Bird';
import MagneticButton from '../MagneticButton';

const easeOut = [0.16, 1, 0.3, 1];

// A cloud drifts slowly and independently — cheap (transform/opacity
// only), and each one gets its own duration/delay so the sky doesn't
// move in visible unison.
const Cloud = ({ top, left, width, duration, delay, opacity = 0.8 }) => (
  <motion.div
    className="pointer-events-none absolute rounded-full"
    style={{
      top,
      left,
      width,
      height: width * 0.42,
      background: 'var(--cream)',
      opacity,
      filter: 'blur(1px)',
    }}
    animate={{ x: [0, 24, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// The front cover — a colorful mountain-café entrance at sunrise
// rather than a dark hardcover page. The visitor "opens" it via the
// stamp button or the Enter key; on exit, warm light floods in as it
// lifts away, like a shutter opening onto the café beyond.
const Cover = ({ onEnter }) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter') onEnter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onEnter]);

  return (
    <motion.div
      exit={
        prefersReducedMotion
          ? { opacity: 0, transition: { duration: 0.4, ease: easeOut } }
          : { y: '-100%', rotateX: -6, scale: 0.98, transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } }
      }
      style={{ transformOrigin: 'top center', transformPerspective: 1400 }}
      className="fixed inset-0 z-[100] overflow-hidden grain"
    >
      {/* one continuous sky, sunrise to horizon — mountains and haze
          fade into this same gradient rather than sitting on their
          own separate band, so the whole scene reads as one painting */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, var(--sky) 0%, #F4DCB4 48%, var(--bg) 88%)' }}
      />
      <div
        className="pointer-events-none absolute top-[8%] right-[12%] w-28 h-28 sm:w-40 sm:h-40 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent 72%)' }}
      />

      {!prefersReducedMotion && (
        <>
          <Cloud top="16%" left="8%" width={110} duration={14} delay={0} />
          <Cloud top="24%" left="62%" width={80} duration={18} delay={2} opacity={0.65} />
          <Cloud top="10%" left="40%" width={60} duration={16} delay={1} opacity={0.55} />
          <Bird top="20%" delay={2} duration={20} />
          <Bird top="26%" delay={11} duration={24} />
        </>
      )}

      {/* mountains — each ridge fades to transparent at its own base
          (see Mountains.jsx), so they dissolve straight into the sky
          gradient behind them instead of sitting on a separate band */}
      <Mountains className="pointer-events-none absolute bottom-0 left-0 w-full h-[42vh] sm:h-[40vh]" />

      <div className="absolute top-[16%] right-[10%] w-16 sm:w-20 opacity-40 hidden sm:block">
        <CoffeeBeans layout="scatter" />
      </div>

      {/* letterpress card frame */}
      <div className="pointer-events-none absolute inset-3 sm:inset-6 md:inset-8 rounded-[20px] border border-[var(--dark)]/12" />

      <div className="relative z-10 flex flex-col justify-between min-h-[100svh] px-6 md:px-14 py-8 md:py-12">
        {/* masthead */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-start justify-end"
        >
          <span className="eyebrow !text-[var(--pine)]">Open Daily · 2026</span>
        </motion.div>

        {/* title block */}
        <div className="flex flex-col items-center text-center -mt-6 md:-mt-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="text-2xl sm:text-3xl text-[var(--coral)] mb-2"
            style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
          >
            pull up a chair, look around —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease: easeOut }}
            className="font-serif text-[13.5vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.02em] text-[var(--dark)]"
          >
            Kanan Goenka
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeOut }}
            className="w-16 h-px bg-[var(--dark)]/25 my-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[var(--dark)]/55"
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
          <span className="hidden sm:block text-xs text-[var(--dark)]/45 max-w-[200px]">
            Mumbai, India — step inside for a look around.
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
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase">Come in</span>
                <FiCornerDownLeft className="w-3.5 h-3.5 mt-1 opacity-70" />
              </MagneticButton>
            </div>
            <span className="text-[11px] text-[var(--dark)]/45 tracking-wide">
              or press <kbd className="px-1.5 py-0.5 rounded border border-[var(--dark)]/20 text-[var(--dark)]/60 font-sans">Enter ↵</kbd>
            </span>
          </div>

          <span className="hidden sm:block text-xs text-[var(--dark)]/45 max-w-[200px] text-right">
            Table for one — building things with care.
          </span>
        </motion.div>
      </div>

      {/* warm light flooding in as the cover lifts away */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
        style={{ background: 'radial-gradient(circle at 50% 75%, rgba(255,253,248,0.95), transparent 70%)' }}
        initial={{ opacity: 0 }}
        exit={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: [0, 1, 0], transition: { duration: 0.7, times: [0, 0.4, 1], ease: 'easeOut' } }
        }
      />
    </motion.div>
  );
};

export default Cover;
