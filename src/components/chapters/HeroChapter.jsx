import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import CoffeeCup from '../magazine/CoffeeCup';
import CoffeeBeans from '../magazine/CoffeeBeans';
import Mountains from '../magazine/Mountains';
import Bird from '../magazine/Bird';
import MagneticButton from '../MagneticButton';
import { scrollToId, useLenis } from '../../lib/LenisContext';

const easeOut = [0.16, 1, 0.3, 1];

// Resume "download" opens Kanan's Google Drive folder directly — a
// plain external link, so updating the resume there needs no code or
// site change. See FinalChapter for the matching link.
const RESUME_DRIVE_URL = 'https://drive.google.com/drive/folders/1xdfQ0hFgEuTqJGr6OQyoEEAug2CRMT2k?usp=sharing';

const HeroChapter = () => {
  const ref = useRef(null);
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const cupY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const beansY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden px-6 md:px-14 pt-24 pb-16">
      {/* the same sky as the café entrance, continuing overhead */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[45vh]"
        style={{ background: 'linear-gradient(180deg, var(--sky) 0%, transparent 100%)', opacity: 0.16 }}
      />
      <div
        className="pointer-events-none absolute top-[6%] left-[8%] w-20 h-20 sm:w-28 sm:h-28 rounded-full"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent 72%)', opacity: 0.35 }}
      />
      {!prefersReducedMotion && (
        <>
          <Bird top="14%" delay={1} duration={20} />
          <Bird top="19%" delay={9} duration={24} />
        </>
      )}

      {/* window view: mountains on the horizon, cup on the table in front */}
      <Mountains className="pointer-events-none absolute bottom-0 left-0 w-full h-[22vh] opacity-60" />

      {/* background layer: oversized cup, cropped bottom-right */}
      <motion.div
        style={{ y: cupY }}
        className="pointer-events-none absolute -bottom-[18%] -right-[10%] w-[85vw] sm:w-[60vw] max-w-[720px] aspect-square opacity-[0.9]"
      >
        <CoffeeCup accent="var(--brown)" />
      </motion.div>

      <motion.div style={{ y: beansY }} className="pointer-events-none absolute top-[22%] left-[4%] w-28 opacity-70 hidden sm:block">
        <CoffeeBeans layout="scatter" />
      </motion.div>

      {/* foreground: typography */}
      <motion.div style={{ y: textY }} className="relative z-10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="eyebrow mb-5"
        >
          Kanan Goenka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
          className="font-serif text-[15vw] sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.02em] text-[var(--dark)]"
        >
          Building things
          <br />
          with <span className="italic text-[var(--coral)]">care.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="mt-6 text-sm font-semibold tracking-wide uppercase text-[var(--dark)]/65"
        >
          Full-Stack Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: easeOut }}
          className="mt-3 max-w-sm text-[15px] leading-relaxed text-[var(--dark)]/60"
        >
          Computer Engineering student focused on building full-stack
          applications, healthcare software, and AI-powered products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease: easeOut }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="button"
            onClick={() => scrollToId(lenis, 'work')}
            data-cursor="link"
            className="btn-primary"
          >
            See the Menu
            <FiArrowRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton
            href={RESUME_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="btn-outline"
          >
            Download Resume
            <FiDownload className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* location tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 mt-14 inline-flex w-fit items-center gap-2 bg-[var(--dark)] text-[var(--cream)] rounded-full pl-2 pr-4 py-2"
      >
        <span className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-[10px] font-bold">
          KG
        </span>
        <span className="text-[11px] font-medium tracking-wide">Mumbai, India</span>
      </motion.div>
    </section>
  );
};

export default HeroChapter;
