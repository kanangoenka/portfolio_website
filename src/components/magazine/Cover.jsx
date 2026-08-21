import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import CoffeeCup from './CoffeeCup';
import CoffeeBeans from './CoffeeBeans';
import MagneticButton from '../MagneticButton';

const easeOut = [0.16, 1, 0.3, 1];

const Cover = ({ onEnter }) => {
  return (
    <motion.div
      exit={{ y: '-102%', scale: 0.98, transition: { duration: 0.75, ease: [0.7, 0, 0.2, 1] } }}
      style={{ transformOrigin: 'top center' }}
      className="fixed inset-0 z-[100] bg-[var(--cream)] text-[var(--dark)] overflow-hidden"
    >
      {/* huge cup, bottom-right, cropped */}
      <div className="absolute -bottom-24 -right-24 w-[70vw] max-w-[640px] aspect-square opacity-90">
        <CoffeeCup accent="var(--brown)" />
      </div>

      <div className="absolute top-[18%] left-[8%] w-24 opacity-70">
        <CoffeeBeans layout="scatter" />
      </div>

      {/* coffee stain, decorative */}
      <div className="coffee-ring absolute top-10 right-[18%] w-40 h-40 hidden md:block" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between px-6 md:px-14 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-start justify-between"
        >
          <span className="eyebrow">Issue 01</span>
          <span className="eyebrow">2026</span>
        </motion.div>

        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            className="eyebrow mb-4"
          >
            Kanan Goenka
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: easeOut }}
            className="font-serif text-[15vw] sm:text-8xl md:text-9xl leading-[0.92] tracking-[-0.02em]"
          >
            Building
            <br />
            digital things
            <br />
            <span className="italic text-[var(--brown)]">with care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            className="mt-6 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[var(--dark)]/55"
          >
            Software / AI / Web
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: easeOut }}
          className="flex items-center justify-between"
        >
          <span className="hidden sm:block text-xs text-[var(--dark)]/45 max-w-[220px]">
            A journal of what Kanan builds — read on to explore.
          </span>

          <MagneticButton
            as="button"
            onClick={onEnter}
            data-cursor="link"
            className="btn-primary"
          >
            Enter
            <FiArrowRight className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cover;
