import { motion } from 'framer-motion';

// A bird drifts across in the distance, occasionally — a tiny touch
// of ambient life in the sky, not a loop that draws attention.
const Bird = ({ top, delay, duration = 22 }) => (
  <motion.svg
    viewBox="0 0 24 12"
    className="pointer-events-none absolute w-4 h-2 sm:w-5 sm:h-2.5"
    style={{ top }}
    initial={{ x: '-8vw', opacity: 0 }}
    animate={{ x: '30vw', opacity: [0, 0.5, 0.5, 0] }}
    transition={{ duration, delay, repeat: Infinity, repeatDelay: 14, ease: 'linear' }}
  >
    <path d="M0 8 Q6 0 12 6 Q18 0 24 8" fill="none" stroke="var(--dark)" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
  </motion.svg>
);

export default Bird;
