const uid = () => Math.random().toString(36).slice(2, 9);

// Layered mountain-ridge silhouette — the site's landscape motif. Each
// ridge fades from its own color at the peak to fully transparent at
// its base (atmospheric-perspective gradients, not flat opacity
// fills), so it dissolves into whatever sits behind or below it —
// the page background, a card, another section — instead of reading
// as a separate rectangle pasted on top.
const Mountains = ({ className = '', mist = 'var(--sky)', mid = 'var(--pine)', near = 'var(--sage)', cap = 'var(--cream)' }) => {
  const id = uid();
  return (
    <svg viewBox="0 0 400 160" className={className} preserveAspectRatio="xMidYMax slice" role="presentation">
      <defs>
        <linearGradient id={`far-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={mist} stopOpacity="0.5" />
          <stop offset="100%" stopColor={mist} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`mid-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={mid} stopOpacity="0.65" />
          <stop offset="100%" stopColor={mid} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`near-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={near} stopOpacity="0.8" />
          <stop offset="100%" stopColor={near} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* far ridge — hazy, atmospheric */}
      <path d="M0 100 L60 55 L115 85 L175 40 L235 88 L295 50 L345 90 L400 62 L400 160 L0 160 Z" fill={`url(#far-${id})`} />

      {/* mid ridge, with two snow-capped peaks */}
      <path d="M0 122 L55 82 L105 112 L160 68 L220 108 L270 78 L330 118 L400 92 L400 160 L0 160 Z" fill={`url(#mid-${id})`} />
      <path d="M160 68 L172 79 L160 87 L148 79 Z" fill={cap} opacity="0.7" />
      <path d="M270 78 L280 87 L270 94 L260 87 Z" fill={cap} opacity="0.55" />

      {/* near ridge — richest color, feathering to transparent at its own base */}
      <path d="M0 140 L50 104 L100 130 L150 88 L210 126 L262 94 L322 136 L400 110 L400 160 L0 160 Z" fill={`url(#near-${id})`} />
    </svg>
  );
};

export default Mountains;
