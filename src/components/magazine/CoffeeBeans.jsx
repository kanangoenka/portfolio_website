const Bean = ({ x, y, rotate, scale, opacity }) => (
  <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
    <ellipse cx="0" cy="0" rx="13" ry="8" fill="#6F4E37" />
    <path d="M-9 0 Q0 -6 9 0" stroke="#2D211C" strokeWidth="1.4" fill="none" opacity="0.5" />
  </g>
);

// A small deterministic scatter of coffee beans — used sparingly as a
// compositional element near headings and cups, not as wallpaper.
const layouts = {
  scatter: [
    { x: 20, y: 30, rotate: -20, scale: 1 },
    { x: 70, y: 10, rotate: 40, scale: 0.8 },
    { x: 10, y: 80, rotate: 80, scale: 0.9 },
    { x: 90, y: 60, rotate: -50, scale: 1.1 },
    { x: 50, y: 100, rotate: 10, scale: 0.75 },
    { x: 120, y: 20, rotate: -35, scale: 0.85 },
  ],
  line: [
    { x: 10, y: 20, rotate: -10, scale: 0.9 },
    { x: 45, y: 12, rotate: 25, scale: 1 },
    { x: 82, y: 22, rotate: -30, scale: 0.85 },
    { x: 118, y: 10, rotate: 15, scale: 0.95 },
  ],
};

const CoffeeBeans = ({ layout = 'scatter', className = '', opacity = 1 }) => {
  const beans = layouts[layout] || layouts.scatter;
  const maxX = Math.max(...beans.map((b) => b.x)) + 30;
  const maxY = Math.max(...beans.map((b) => b.y)) + 30;
  return (
    <svg viewBox={`0 0 ${maxX} ${maxY}`} className={className} style={{ opacity }} role="presentation">
      {beans.map((b, i) => (
        <Bean key={i} {...b} opacity={b.opacity ?? 1} />
      ))}
    </svg>
  );
};

export default CoffeeBeans;
