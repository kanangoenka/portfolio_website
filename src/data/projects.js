// Project content sourced strictly from Kanan's resume. No invented
// metrics, clients, or outcomes — copy explains what each project is
// and does, framed as short magazine-article sections.
export const projects = [
  {
    id: 'medilink',
    index: '01',
    name: 'MediLink',
    category: 'Healthcare / Full Stack',
    tagline: 'Centralized Healthcare Management System',
    tags: ['MERN', 'Healthcare'],
    year: '2025–2026',
    pattern: 'medical',
    accent: '#B8753A',
    idea:
      'Staying on top of preventive health and getting a straight answer to a health question usually means juggling disconnected records, apps, and advice — with no single place that actually knows your history.',
    build:
      'A MERN healthcare platform with secure authentication, patient profile management, and preventive-health tracking, with a responsive React interface connected to REST APIs for chatbot assistance and real-time health insights.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Secure authentication and patient profile management',
      'Preventive-health tracking and personalized recommendations',
      'Chatbot assistance for real-time health insights',
      'Responsive React interface backed by REST APIs',
    ],
    result: 'A healthcare platform that brings profiles, preventive tracking, and AI-assisted health insights into one place.',
    github: 'https://github.com/kanangoenka/medilink2',
    demo: 'https://medilink2.vercel.app/',
  },
  {
    id: 'electrohub',
    index: '02',
    name: 'ElectroHub',
    category: 'E-Commerce / Full Stack',
    tagline: 'Electronics E-Commerce Platform',
    tags: ['PHP', 'MySQL', 'E-Commerce'],
    year: '2025',
    pattern: 'circuit',
    accent: '#6F4E37',
    idea:
      'Shopping for electronics online means comparing specs, managing a cart, and trusting the checkout flow — all of which need to feel fast and dependable.',
    build:
      'A database-driven e-commerce application built with PHP and MySQL, covering authentication, product search and filtering, shopping-cart state, and an end-to-end checkout flow, with an admin dashboard for managing the catalog.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5'],
    features: [
      'Authentication and account management',
      'Product search and filtering',
      'Shopping-cart state and end-to-end checkout',
      'Admin dashboard managing 100+ product records',
    ],
    result: 'A complete electronics storefront — from product discovery to checkout — with an admin dashboard behind it.',
    github: 'https://github.com/kanangoenka/Electro_Hub',
    demo: null,
  },
  {
    id: 'ai-travel-agent',
    index: '03',
    name: 'AI Travel Planner',
    category: 'AI / Product',
    tagline: 'AI-Powered Itinerary Generation',
    tags: ['Python', 'AI', 'LLM'],
    year: '2026',
    pattern: 'route',
    accent: '#68735C',
    idea:
      'Planning a trip means turning loose preferences — destination, budget, interests, constraints — into a concrete, day-by-day plan, usually across too many disconnected tools.',
    build:
      'An AI-powered planning agent, built in Python, that generates personalized itineraries from destination, budget, preference, and trip-constraint inputs, using an LLM-driven reasoning pipeline to convert natural-language requirements into structured recommendations.',
    stack: ['Python', 'LLM APIs'],
    features: [
      'Personalized itineraries from destination, budget, and preference inputs',
      'LLM-driven reasoning pipeline',
      'Converts natural-language requirements into structured plans',
      'Actionable, day-by-day travel recommendations',
    ],
    result: 'A working agent that turns a short, natural-language brief into a structured day-by-day travel plan.',
    github: 'https://github.com/kanangoenka/travel_planning-agent',
    demo: null,
  },
  {
    id: 'realtime-chat',
    index: '04',
    name: 'Real-Time Chat',
    category: 'WebSockets / Backend',
    tagline: 'Low-Latency Messaging Application',
    tags: ['Node.js', 'Socket.io', 'Real-Time'],
    pattern: 'chat',
    accent: '#C9A27E',
    idea:
      'Most web apps rely on request-response cycles that feel too slow for real conversation — messaging needs to feel instant.',
    build:
      'A responsive real-time messaging application with a Node.js backend, using Socket.IO and WebSocket event handling for low-latency communication across devices.',
    stack: ['Node.js', 'Socket.IO', 'WebSockets', 'JavaScript'],
    features: [
      'Real-time messaging over WebSockets',
      'Node.js backend with Socket.IO event handling',
      'Low-latency communication across devices',
      'Responsive chat interface',
    ],
    result: 'A working real-time chat app with instant, low-latency delivery.',
    github: 'https://github.com/kanangoenka',
    demo: null,
  },
];
