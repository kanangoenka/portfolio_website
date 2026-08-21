// Project content sourced strictly from Kanan's resume. No invented
// metrics, clients, or outcomes — copy explains what each project is
// and does, framed as short magazine-article sections.
export const projects = [
  {
    id: 'medilink',
    index: '01',
    name: 'MediLink',
    category: 'Healthcare / Full Stack',
    tagline: 'Centralized Hospital Management System',
    tags: ['MERN', 'AI', 'Healthcare'],
    pattern: 'medical',
    accent: '#B8753A',
    idea:
      'Hospitals often coordinate patient records, staff, and administrative workflows across disconnected, paper-heavy systems — making information slow to find and easy to lose.',
    build:
      'A centralized hospital management system built on the MERN stack that brings patient records, appointments, and administrative workflows into one place, with AI-assisted features layered on top for faster, smarter use.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI integration'],
    features: [
      'Centralized patient record management',
      'Role-based access for different staff types',
      'Appointment and administrative workflows',
      'AI-assisted features for faster data handling',
    ],
    result: 'A working hospital management system that consolidates records, roles, and workflows into one place.',
    github: 'https://github.com/kanangoenka',
    demo: null,
  },
  {
    id: 'electrohub',
    index: '02',
    name: 'ElectroHub',
    category: 'E-Commerce / Full Stack',
    tagline: 'Electronics E-Commerce Platform',
    tags: ['MERN', 'E-Commerce'],
    pattern: 'circuit',
    accent: '#6F4E37',
    idea:
      'Shopping for electronics online means comparing specs, managing a cart, and trusting the checkout flow — all of which need to feel fast and dependable.',
    build:
      'A full-stack e-commerce web application for electronics, covering product browsing, cart management, and the order flow end-to-end.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Product catalog with search and filtering',
      'Cart and checkout flow',
      'User accounts and order history',
      'Responsive, mobile-friendly interface',
    ],
    result: 'A complete electronics storefront — from product discovery to checkout — built and functioning end-to-end.',
    github: 'https://github.com/kanangoenka',
    demo: null,
  },
  {
    id: 'ai-travel-agent',
    index: '03',
    name: 'AI Travel Planner',
    category: 'AI / Product',
    tagline: 'AI-Powered Itinerary Generation',
    tags: ['Python', 'AI', 'NLP'],
    pattern: 'route',
    accent: '#68735C',
    idea:
      'Planning a trip means turning loose preferences — destinations, dates, interests — into a concrete, day-by-day plan, usually across too many disconnected tools.',
    build:
      'An AI agent that takes travel preferences in natural language and generates a structured itinerary, using NLP to interpret requests and shape recommendations.',
    stack: ['Python', 'NLTK', 'Pandas', 'AI / LLM integration'],
    features: [
      'Natural-language preference input',
      'Structured, day-by-day itinerary output',
      'Preference-based recommendations',
      'Reusable planning logic for different trip types',
    ],
    result: 'A working agent that turns a short prompt into a usable day-by-day travel plan.',
    github: 'https://github.com/kanangoenka',
    demo: null,
  },
  {
    id: 'realtime-chat',
    index: '04',
    name: 'Real-Time Chat',
    category: 'WebSockets / Backend',
    tagline: 'Instant Messaging with Live Presence',
    tags: ['MERN', 'Socket.io', 'Real-Time'],
    pattern: 'chat',
    accent: '#C9A27E',
    idea:
      'Most web apps rely on request-response cycles that feel too slow for real conversation — messaging needs to feel instant.',
    build:
      'A real-time messaging application built with Socket.io for instant, low-latency communication between users, backed by a MERN stack.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    features: [
      'Real-time messaging over WebSockets',
      'Live online presence indicators',
      'Persistent conversation history',
      'Responsive chat interface',
    ],
    result: 'A working real-time chat app with instant delivery and live presence.',
    github: 'https://github.com/kanangoenka',
    demo: null,
  },
];
