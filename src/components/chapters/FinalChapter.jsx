import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import CoffeeCup from '../magazine/CoffeeCup';
import CoffeeBeans from '../magazine/CoffeeBeans';
import Mountains from '../magazine/Mountains';

const easeOut = [0.16, 1, 0.3, 1];

// Resume "download" opens Kanan's Google Drive folder directly — a
// plain external link, so updating the resume there needs no code or
// site change. See HeroChapter for the matching button.
const RESUME_DRIVE_URL = 'https://drive.google.com/drive/folders/1xdfQ0hFgEuTqJGr6OQyoEEAug2CRMT2k?usp=sharing';

const links = [
  { label: 'Email', value: 'kanangoenka2@gmail.com', href: 'mailto:kanangoenka2@gmail.com' },
  { label: 'GitHub', value: 'github.com/kanangoenka', href: 'https://github.com/kanangoenka' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kanan-goenka', href: 'https://www.linkedin.com/in/kanan-goenka/' },
  { label: 'Resume', value: 'View Resume', href: RESUME_DRIVE_URL },
];

const FinalChapter = () => {
  return (
    <section id="final" className="relative py-28 md:py-36 px-6 md:px-14 overflow-hidden min-h-[100svh] flex flex-col justify-between">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="eyebrow mb-6"
        >
          Chapter 06 — Customize Your Food
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="font-serif text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.02em] text-[var(--dark)]/40 mb-2"
        >
          Care for anything else?
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
          className="font-serif text-[16vw] sm:text-8xl md:text-9xl leading-[0.92] tracking-[-0.02em] text-[var(--dark)] mb-16 md:mb-24"
        >
          Customize
          <br />
          your order.
        </motion.h3>

        <p className="eyebrow mb-6">Your Order</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-2xl">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') || l.href.endsWith('.pdf') ? '_blank' : undefined}
              rel="noopener noreferrer"
              data-cursor="link"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: easeOut, delay: i * 0.06 }}
              className="group flex items-center justify-between border-b border-dashed border-[var(--dark)]/20 pb-4"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--dark)]/40 mb-1">{l.label}</p>
                <p className="font-serif text-xl sm:text-2xl text-[var(--dark)]">{l.value}</p>
              </div>
              <FiArrowUpRight className="w-5 h-5 text-[var(--dark)]/40 transition-all duration-300 group-hover:text-[var(--dark)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* bottom composition: cup, beans, mountains, handwritten note */}
      <div className="relative mt-24 flex items-end justify-between">
        <Mountains className="pointer-events-none absolute -bottom-2 left-0 w-full h-20 opacity-[0.18]" />
        <span
          className="text-2xl text-[var(--brown)] rotate-[-3deg]"
          style={{ fontFamily: 'var(--font-hand)', fontWeight: 600 }}
        >
          Thanks for stopping by.
        </span>

        <div className="absolute -bottom-10 right-0 w-[60vw] max-w-[420px] aspect-square opacity-90 pointer-events-none">
          <CoffeeCup accent="var(--brown)" />
        </div>

        <div className="hidden sm:block absolute bottom-0 left-1/3 w-20 opacity-60 pointer-events-none">
          <CoffeeBeans layout="line" />
        </div>
      </div>

      <p className="relative z-10 mt-20 text-xs text-[var(--dark)]/35">Designed and built with care.</p>
    </section>
  );
};

export default FinalChapter;
