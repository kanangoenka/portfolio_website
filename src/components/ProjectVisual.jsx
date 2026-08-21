// Abstract, editorial line-art per project — keeps every project
// visually distinct without relying on stock photography.
const patterns = {
  medical: (accent) => (
    <g stroke={accent} strokeWidth="1.4" fill="none" opacity="0.55">
      <rect x="60" y="40" width="40" height="40" rx="4" />
      <path d="M80 50 L80 70 M70 60 L90 60" />
      <circle cx="200" cy="90" r="34" />
      <path d="M200 74 L200 106 M184 90 L216 90" />
      <path d="M40 160 Q120 120 200 160 T360 160" />
      <rect x="260" y="30" width="60" height="60" rx="8" />
      <path d="M290 48 L290 72 M278 60 L302 60" />
    </g>
  ),
  circuit: (accent) => (
    <g stroke={accent} strokeWidth="1.4" fill="none" opacity="0.55">
      <path d="M30 60 H120 V110 H210" />
      <path d="M30 140 H90 V180" />
      <path d="M330 50 H250 V130 H180" />
      <circle cx="120" cy="60" r="5" />
      <circle cx="210" cy="110" r="5" />
      <circle cx="90" cy="180" r="5" />
      <circle cx="250" cy="50" r="5" />
      <circle cx="180" cy="130" r="5" />
      <rect x="150" y="150" width="34" height="34" rx="3" />
    </g>
  ),
  route: (accent) => (
    <g stroke={accent} strokeWidth="1.4" fill="none" opacity="0.55">
      <path d="M30 170 C 90 60, 160 200, 220 90 S 340 40, 360 100" strokeDasharray="2 8" strokeLinecap="round" />
      <circle cx="30" cy="170" r="6" fill={accent} stroke="none" />
      <circle cx="220" cy="90" r="4" />
      <circle cx="360" cy="100" r="6" fill={accent} stroke="none" />
    </g>
  ),
  chat: (accent) => (
    <g stroke={accent} strokeWidth="1.4" fill="none" opacity="0.55">
      <path d="M40 40 h140 a10 10 0 0 1 10 10 v60 a10 10 0 0 1 -10 10 H90 l-25 22 v-22 H40 a10 10 0 0 1 -10 -10 V50 a10 10 0 0 1 10 -10 Z" />
      <path d="M200 90 h130 a10 10 0 0 1 10 10 v50 a10 10 0 0 1 -10 10 h-20 v20 l-22 -20 H200 a10 10 0 0 1 -10 -10 v-50 a10 10 0 0 1 10 -10 Z" />
      <line x1="60" y1="65" x2="150" y2="65" />
      <line x1="60" y1="82" x2="120" y2="82" />
    </g>
  ),
};

const ProjectVisual = ({ pattern, accent, className = '' }) => {
  const draw = patterns[pattern] || patterns.medical;
  return (
    <svg viewBox="0 0 400 220" className={className} preserveAspectRatio="xMidYMid meet" role="presentation">
      <rect width="400" height="220" fill="none" />
      {draw(accent)}
    </svg>
  );
};

export default ProjectVisual;
