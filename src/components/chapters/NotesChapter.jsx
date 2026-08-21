import { motion } from 'framer-motion';
import CoffeeBeans from '../magazine/CoffeeBeans';

const easeOut = [0.16, 1, 0.3, 1];

const statements = [
  { text: 'Build for users.', rotate: -2, align: 'items-start' },
  { text: 'Keep things simple.', rotate: 1.5, align: 'items-end' },
  { text: 'Learn by making.', rotate: -1, align: 'items-start' },
  { text: 'Good software should feel clear.', rotate: 2, align: 'items-end' },
];

const NotesChapter = () => {
  return (
    <section id="notes" className="relative py-28 md:py-36 px-6 md:px-14 bg-[var(--cream)] grain overflow-hidden">
      <div className="coffee-ring absolute bottom-16 left-[8%] w-36 h-36 pointer-events-none hidden md:block" />
      <div className="absolute top-[14%] right-[10%] w-24 opacity-60 hidden sm:block">
        <CoffeeBeans layout="scatter" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="eyebrow mb-6"
      >
        Chapter 06
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.9] tracking-[-0.02em] text-[var(--dark)] mb-20 md:mb-28"
      >
        The Notes
      </motion.h2>

      <div className="flex flex-col gap-10 md:gap-14 max-w-3xl mx-auto">
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
              className="text-4xl sm:text-6xl text-[var(--brown)] leading-none"
              style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
            >
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NotesChapter;
