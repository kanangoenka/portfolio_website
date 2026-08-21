import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const BIG = new Set(['view', 'open']);

/**
 * Elegant custom cursor. Small dark dot by default; expands to a
 * labelled disc over projects ("VIEW") and images ("OPEN"), and
 * shows a small arrow over ordinary buttons and links.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const [label, setLabel] = useState('');
  const [variant, setVariant] = useState('default');
  // Client-only SPA, so reading matchMedia during init is safe — this
  // keeps the effect below free of a synchronous setState call.
  const [enabled] = useState(
    () =>
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add('has-custom-cursor');

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let renderedX = x;
    let renderedY = y;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      renderedX += (x - renderedX) * 0.22;
      renderedY += (y - renderedY) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${renderedX}px, ${renderedY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const handleOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setVariant(target.dataset.cursor);
        setLabel(target.dataset.cursorLabel || '');
      } else if (e.target.closest('a, button, input, textarea, [role="button"]')) {
        setVariant('link');
        setLabel('');
      } else {
        setVariant('default');
        setLabel('');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;

  const big = BIG.has(variant);
  const isLink = variant === 'link';

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[999] pointer-events-none flex items-center justify-center rounded-full"
      style={{
        width: big ? 68 : isLink ? 30 : 9,
        height: big ? 68 : isLink ? 30 : 9,
        background: 'var(--dark)',
        opacity: big ? 0.94 : isLink ? 0.9 : 0.85,
        transition: 'width 0.28s var(--ease-out), height 0.28s var(--ease-out), opacity 0.28s var(--ease-out)',
        willChange: 'transform',
      }}
    >
      {big && label && (
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--cream)] select-none">
          {label}
        </span>
      )}
      {isLink && <FiArrowUpRight className="w-3.5 h-3.5 text-[var(--cream)]" />}
    </div>
  );
};

export default CustomCursor;
