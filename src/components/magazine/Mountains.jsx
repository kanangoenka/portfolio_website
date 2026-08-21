// Layered mountain-ridge silhouette — the site's new landscape motif,
// standing alongside the existing coffee-cup mark rather than
// replacing it. Flat, two-layer SVG (no photography), cheap to
// render, crops cleanly behind typography like CoffeeCup does.
const Mountains = ({ className = '', mist = 'var(--sky)', near = 'var(--pine)', cap = 'var(--cream)' }) => (
  <svg viewBox="0 0 400 160" className={className} preserveAspectRatio="xMidYMax slice" role="presentation">
    {/* far ridge */}
    <path
      d="M0 118 L58 68 L108 100 L168 48 L228 96 L288 58 L338 100 L400 74 L400 160 L0 160 Z"
      fill={mist}
      opacity="0.4"
    />
    {/* near ridge, darker and lower, with a single snow-capped peak */}
    <path
      d="M0 140 L50 104 L100 130 L150 88 L210 126 L262 94 L322 136 L400 110 L400 160 L0 160 Z"
      fill={near}
      opacity="0.55"
    />
    <path d="M150 88 L163 99 L150 108 L137 99 Z" fill={cap} opacity="0.75" />
  </svg>
);

export default Mountains;
