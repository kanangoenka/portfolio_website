import { motion, useScroll } from 'framer-motion';

// A thin "coffee fill" bar tracking scroll progress — a single
// GPU-cheap transform (scaleX) driven directly by scroll position, no
// extra scroll listeners. Ties the whole page together as one
// continuous read rather than a stack of unrelated sections.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
};

export default ScrollProgress;
