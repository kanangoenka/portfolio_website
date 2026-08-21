import { useRef } from 'react';
import { motion } from 'framer-motion';

// Predefine motion-wrapped tags at module scope — creating a motion
// component inside render would reset its internals on every re-render.
const MotionTag = {
  a: motion.a,
  button: motion.button,
  div: motion.div,
};

/**
 * Wraps its child in a gentle magnetic-pull effect that follows the
 * cursor within the button's bounds, inspired by Uiverse-style
 * interactive buttons. Falls back to a static element on touch.
 */
const MagneticButton = ({ as = 'a', className = '', children, strength = 0.35, ...props }) => {
  const ref = useRef(null);
  const MotionComponent = MotionTag[as] || MotionTag.a;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty('--mx', `${relX * strength}px`);
    el.style.setProperty('--my', `${relY * strength}px`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--mx', '0px');
    el.style.setProperty('--my', '0px');
  };

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform: 'translate(var(--mx, 0), var(--my, 0))',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default MagneticButton;
