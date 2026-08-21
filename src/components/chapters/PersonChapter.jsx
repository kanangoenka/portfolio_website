import { motion } from 'framer-motion';
import CoffeeBeans from '../magazine/CoffeeBeans';

const easeOut = [0.16, 1, 0.3, 1];

const annotations = [
  { text: 'always experimenting', style: 'top-[6%] -left-6 sm:-left-10 -rotate-6' },
  { text: 'building things', style: 'top-[42%] -right-4 sm:-right-10 rotate-3' },
  { text: 'currently learning', style: 'bottom-[4%] left-[8%] -rotate-3' },
];

const PersonChapter = () => {
  return (
    <section id="person" className="relative py-28 md:py-36 px-6 md:px-14 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="eyebrow mb-6"
      >
        Chapter 02
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-16 md:mb-24"
      >
        The Person
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="md:col-span-5"
        >
          <h3 className="font-serif text-3xl sm:text-4xl text-[var(--dark)] mb-6">Kanan Goenka</h3>
          <p className="text-[15px] leading-relaxed text-[var(--dark)]/65 mb-10 max-w-sm">
            A Computer Engineering student interested in full-stack
            development, AI, and building real-world software — projects
            with a clear problem to solve, built with care.
          </p>

          <div className="border-t border-[var(--dark)]/10 pt-6 max-w-sm">
            <p className="eyebrow mb-3">Education</p>
            <p className="font-serif text-xl text-[var(--dark)] mb-1">K.J. Somaiya School of Engineering</p>
            <p className="text-sm text-[var(--dark)]/55 mb-2">B.Tech in Computer Engineering</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--dark)]/40 mb-1">2023 — 2027</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--dark)]/40">CGPA 8.58/10</p>
          </div>
        </motion.div>

        {/* editorial visual with handwritten annotations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          className="md:col-span-7 relative"
        >
          <div
            data-cursor="open"
            data-cursor-label="Open"
            className="relative aspect-[5/4] max-w-lg mx-auto rounded-[28px] overflow-hidden border border-[var(--dark)]/8 bg-gradient-to-br from-[var(--cream)] to-[var(--light-coffee)]/25 grain"
          >
            <PortraitMark />
          </div>

          {annotations.map((a) => (
            <span
              key={a.text}
              className={`absolute ${a.style} hidden sm:block text-xl text-[var(--brown)] select-none`}
              style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
            >
              {a.text}
            </span>
          ))}

          <div className="absolute -bottom-8 -left-6 w-20 opacity-70 hidden sm:block">
            <CoffeeBeans layout="line" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Abstract editorial mark standing in for a portrait — a warm,
// composition-first alternative to stock photography.
const PortraitMark = () => (
  <svg viewBox="0 0 400 320" className="w-full h-full">
    <circle cx="200" cy="120" r="80" fill="none" stroke="#6F4E37" strokeWidth="1.5" opacity="0.5" />
    <path d="M90 300 Q200 190 310 300" fill="none" stroke="#6F4E37" strokeWidth="1.5" opacity="0.5" />
    <path d="M60 300 Q200 150 340 300" fill="none" stroke="#B8753A" strokeWidth="1.5" opacity="0.35" />
    <circle cx="200" cy="120" r="4" fill="#B8753A" />
  </svg>
);

export default PersonChapter;
