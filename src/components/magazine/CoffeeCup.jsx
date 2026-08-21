// Oversized, editorial coffee-cup illustration — the website's core
// recurring visual object. Built as flat layered SVG (no photography,
// no 3D) so it stays fast and crops cleanly behind typography.
const uid = () => Math.random().toString(36).slice(2, 9);

const TopCup = ({ id, accent }) => (
  <svg viewBox="0 0 400 400" className="w-full h-full" role="presentation">
    <defs>
      <radialGradient id={`coffee-${id}`} cx="42%" cy="38%" r="65%">
        <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
        <stop offset="55%" stopColor="#3A2C24" />
        <stop offset="100%" stopColor="#2D211C" />
      </radialGradient>
      <linearGradient id={`rim-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFF9F3" />
        <stop offset="100%" stopColor="#EADFD0" />
      </linearGradient>
    </defs>
    {/* saucer */}
    <circle cx="200" cy="210" r="192" fill="#FFF9F3" opacity="0.5" />
    <circle cx="200" cy="210" r="192" fill="none" stroke="#2D211C" strokeOpacity="0.06" strokeWidth="1.5" />
    {/* cup rim */}
    <circle cx="200" cy="200" r="168" fill={`url(#rim-${id})`} />
    <circle cx="200" cy="200" r="168" fill="none" stroke="#2D211C" strokeOpacity="0.08" strokeWidth="2" />
    {/* coffee surface */}
    <circle cx="200" cy="200" r="142" fill={`url(#coffee-${id})`} />
    {/* crema swirl */}
    <path
      d="M120 190 Q200 150 280 190 Q220 210 200 250 Q180 210 120 190 Z"
      fill={accent}
      opacity="0.22"
    />
    <circle cx="200" cy="200" r="142" fill="none" stroke="#FFF9F3" strokeOpacity="0.08" strokeWidth="1.5" />
  </svg>
);

const SideCup = ({ id, accent }) => (
  <svg viewBox="0 0 320 360" className="w-full h-full" role="presentation">
    <defs>
      <linearGradient id={`side-coffee-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={accent} />
        <stop offset="100%" stopColor="#3A2C24" />
      </linearGradient>
    </defs>
    <ellipse cx="150" cy="330" rx="120" ry="16" fill="#2D211C" opacity="0.08" />
    {/* body */}
    <path d="M40 90 L58 300 Q60 320 82 320 L218 320 Q240 320 242 300 L260 90 Z" fill="#FFF9F3" stroke="#2D211C" strokeOpacity="0.1" strokeWidth="2" />
    {/* handle */}
    <path d="M258 140 Q320 140 316 200 Q312 250 258 240" fill="none" stroke="#FFF9F3" strokeWidth="22" strokeLinecap="round" />
    <path d="M258 140 Q320 140 316 200 Q312 250 258 240" fill="none" stroke="#2D211C" strokeOpacity="0.1" strokeWidth="2" />
    {/* coffee surface */}
    <ellipse cx="150" cy="92" rx="112" ry="30" fill={`url(#side-coffee-${id})`} />
    <ellipse cx="150" cy="92" rx="112" ry="30" fill="none" stroke="#2D211C" strokeOpacity="0.1" strokeWidth="2" />
  </svg>
);

const Steam = ({ accent = '#C9A27E' }) => (
  <svg viewBox="0 0 200 140" className="absolute -top-[18%] left-1/2 -translate-x-1/2 w-[46%] h-auto pointer-events-none" role="presentation">
    <g stroke={accent} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7">
      <path className="steam-path" d="M60 130 Q40 90 60 60 Q80 30 60 0" />
      <path className="steam-path" style={{ animationDelay: '0.7s' }} d="M100 130 Q80 90 100 60 Q120 30 100 0" />
      <path className="steam-path" style={{ animationDelay: '1.3s' }} d="M140 130 Q120 90 140 60 Q160 30 140 0" />
    </g>
  </svg>
);

const CoffeeCup = ({ view = 'top', accent = 'var(--brown)', steam = true, className = '' }) => {
  const id = uid();
  return (
    <div className={`relative ${className}`}>
      {steam && <Steam accent={accent} />}
      {view === 'top' ? <TopCup id={id} accent={accent} /> : <SideCup id={id} accent={accent} />}
    </div>
  );
};

export default CoffeeCup;
