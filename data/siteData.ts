import { ServiceItem, ProcessStep, ProjectShowcase, ValueProp, TechCapability } from '../types';

export const SITE_INFO = {
  name: 'Novexa Solutions',
  legalName: 'Novexa Solutions',
  tagline: 'Engineering the Next Generation of Digital Realities',
  domain: 'novexasolutions.uk',
  url: 'https://www.novexasolutions.uk',
  email: 'contact@novexasolutions.uk',
  headquarters: 'United Kingdom',
  operatingHours: 'Monday – Friday, 09:00 – 18:00 GMT',
  status: 'Accepting New Enterprise & Scale-Up Engagements'
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDesc: 'User-centric interfaces engineered for effortless clarity, high conversion psychology, and seamless digital flow.',
    fullDesc: 'We craft comprehensive digital product experiences from foundational user research through high-fidelity interactive design systems. Every interaction is designed with mathematical precision to maximize engagement, lower churn, and elevate brand prestige.',
    businessValue: 'Elevates conversion rates, reduces user friction, and establishes immediate digital authority with intuitive, accessible workflows.',
    problemSolved: 'Converts complex technical operations into intuitive, friction-free customer interfaces that users love adopting.',
    deliverables: [
      'User Research & Customer Journey Mapping',
      'Information Architecture & Wireframing',
      'Interactive Design Systems & Component Libraries',
      'High-Fidelity Clickable Prototypes',
      'WCAG AA Accessibility Compliance Audits',
      'Micro-Interactions & Motion Design Specifications'
    ],
    technologies: ['Figma', 'Design Systems', 'Design Tokens', 'Prototyping', 'Accessibility (WCAG)'],
    iconName: 'Layout'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'High-performance, secure web applications architected for lightning-fast speeds, rock-solid stability, and global scale.',
    fullDesc: 'We build modern, scalable web applications utilizing battle-tested frameworks like React, TypeScript, Next.js, and Node.js. From responsive corporate platforms to complex real-time enterprise dashboards, our architectures prioritize microsecond performance and bulletproof security.',
    businessValue: 'Delivers sub-second load times, superior search indexability, modular code maintainability, and seamless cloud elasticity.',
    problemSolved: 'Replaces sluggish, legacy monoliths with modern, maintainable web systems that scale effortlessly with transaction surges.',
    deliverables: [
      'Single Page Applications (SPAs) & Server-Side Rendering (SSR)',
      'Enterprise SaaS Platforms & Customer Portals',
      'Headless CMS & Content Workflows',
      'RESTful & GraphQL API Engineering',
      'Performance Optimization & Core Web Vitals Tuning',
      'Cloud CI/CD Deployment Pipelines'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Vite', 'PostgreSQL'],
    iconName: 'Code'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile apps delivering uncompromising performance, offline capabilities, and fluid interactions.',
    fullDesc: 'We engineer intuitive mobile experiences for iOS and Android that feel native, responsive, and tactile. By combining modern cross-platform frameworks with native optimization, we reduce time-to-market while guaranteeing 60fps performance and robust offline capabilities.',
    businessValue: 'Engages customers directly on their primary personal devices with push messaging, biometric security, and responsive offline handling.',
    problemSolved: 'Eliminates platform disparity and fragmented codebases by delivering unified, pristine mobile products across all devices.',
    deliverables: [
      'iOS & Android Cross-Platform Development',
      'React Native Application Architecture',
      'Offline-First Data Storage & Background Sync',
      'Biometric Security & Secure Enclave Integration',
      'Push Notification & Real-Time Messaging Systems',
      'App Store & Google Play Submission & Compliance'
    ],
    technologies: ['React Native', 'TypeScript', 'iOS', 'Android', 'Redux / Zustand', 'SQLite'],
    iconName: 'Smartphone'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    shortDesc: 'Strategic visual identities, bespoke logomarks, typography rules, and design guidelines that command market distinction.',
    fullDesc: 'A brand is your company’s foremost strategic asset. Novexa Solutions develops comprehensive identity systems that synthesize positioning strategy, custom typography, visual motifs, and brand guidelines into an unmistakable digital and physical presence.',
    businessValue: 'Differentiates your organization from commoditized competitors, commanding higher trust and premium pricing power.',
    problemSolved: 'Transforms inconsistent, fragmented visuals into a cohesive, memorable identity that builds enduring stakeholder confidence.',
    deliverables: [
      'Visual Identity Strategy & Brand Positioning',
      'Bespoke Logomark & Monogram Creation',
      'Typography Hierarchy & Color Palettes',
      'Comprehensive Brand Guideline Documentation',
      'Digital Asset Kits & Marketing Templates',
      'Iconography & Vector Illustration Systems'
    ],
    technologies: ['Vector Engineering', 'Color Theory', 'Typography Systems', 'Asset Bundling', 'Style Guides'],
    iconName: 'Sparkles'
  },
  {
    id: 'seo-marketing',
    title: 'SEO Marketing',
    shortDesc: 'Data-driven technical SEO, search engine visibility audits, and high-intent content architecture for sustained organic growth.',
    fullDesc: 'We treat search engine optimization as an exact technical discipline. By pairing Core Web Vitals optimization, semantic structured schema, and programmatic crawl architecture with high-intent keyword positioning, we earn durable, qualified organic search traffic.',
    businessValue: 'Lowers customer acquisition costs (CAC) by building a compounding organic pipeline of qualified, high-intent prospective buyers.',
    problemSolved: 'Resolves indexing bottlenecks, slow site speeds, and algorithmic penalties that conceal your high-value digital solutions.',
    deliverables: [
      'Comprehensive Technical SEO Architecture Audits',
      'Core Web Vitals & Page Experience Optimization',
      'Keyword Research & Intent Mapping',
      'Schema.org Semantic Structured Data Implementation',
      'Information Architecture & Internal Linking Strategies',
      'Analytics, Conversion Tracking & Search Console Configuration'
    ],
    technologies: ['Technical SEO', 'Schema Markup', 'Search Console', 'Core Web Vitals', 'Analytics'],
    iconName: 'TrendingUp'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDesc: 'Generative AI integration, automated intelligent workflows, custom LLM pipelines, and smart automation systems.',
    fullDesc: 'We guide modern enterprises through pragmatic artificial intelligence adoption. From integrating cutting-edge LLMs and custom retrieval-augmented generation (RAG) pipelines to automated data processing and conversational agents, we turn AI into measurable operating efficiency.',
    businessValue: 'Automates labor-intensive cognitive tasks, shortens response latencies, unlocks proprietary data insights, and protects competitive advantage.',
    problemSolved: 'Bridges the gap between theoretical AI hype and secure, production-ready enterprise workflows that generate actual business ROI.',
    deliverables: [
      'Custom LLM API Integration & Fine-Tuning Workflows',
      'Retrieval-Augmented Generation (RAG) Systems',
      'Intelligent Automation & Business Process Pipelines',
      'Conversational AI & Context-Aware Assistant Systems',
      'Data Extraction, Categorization & Vector Embeddings',
      'Secure AI Governance & Hallucination Mitigation Architecture'
    ],
    technologies: ['LLM APIs', 'Vector Databases', 'Python', 'Node.js', 'Embeddings', 'Prompt Engineering'],
    iconName: 'Bot'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    name: 'Discover',
    summary: 'Deep-dive alignment on business goals, constraints, technical requirements, and target user journeys.',
    details: 'We begin every partnership with structured stakeholder discovery sessions to unpack commercial objectives, competitive landscape, existing infrastructure, and success criteria.'
  },
  {
    step: '02',
    name: 'Strategy',
    summary: 'Architecting the roadmap, system specifications, technical milestones, and measurable outcomes.',
    details: 'Our technical directors and product strategists translate business requirements into concrete system blueprints, technology stacks, data models, and sprint release schedules.'
  },
  {
    step: '03',
    name: 'Design',
    summary: 'Crafting user flows, accessible wireframes, high-fidelity UI, and clickable interaction prototypes.',
    details: 'We build polished, mathematically consistent design systems with Figma tokens, iterating rapidly through interactive prototypes to validate ergonomic friction and visual identity.'
  },
  {
    step: '04',
    name: 'Development',
    summary: 'Writing clean, typed, modular code with automated testing, CI/CD validation, and security reviews.',
    details: 'Our engineers implement frontends and backends with strict TypeScript safety, component modularity, API contract enforcement, and sub-second performance benchmarking.'
  },
  {
    step: '05',
    name: 'Launch',
    summary: 'Orchestrating production deployment, DNS cutovers, security hardening, and monitoring hooks.',
    details: 'We execute structured zero-downtime deployment runs, verify Core Web Vitals, establish telemetry dashboards, and test all edge caching and SSL routing.'
  },
  {
    step: '06',
    name: 'Growth',
    summary: 'Continuous optimization, technical monitoring, feature iteration, and scalable platform evolution.',
    details: 'Following release, we assist with data analytics analysis, search optimization tracking, infrastructure scaling, and proactive technical maintenance.'
  }
];

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    title: 'Technical Rigor & Quality',
    description: 'We adhere to uncompromising standards in clean code, type safety, modular architecture, and unit testing.',
    detail: 'No shortcuts or fragile quick-fixes. Every codebase is built to be maintainable, audit-ready, and resilient under high enterprise traffic.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Commercial & Strategic Focus',
    description: 'Technology is a vehicle for commercial impact. We design every feature to support measurable business outcomes.',
    detail: 'Whether driving user conversion, lowering operational friction, or automating manual workflows, our focus remains on concrete ROI.',
    iconName: 'Target'
  },
  {
    title: 'Modern, Scalable Architecture',
    description: 'Cloud-native, decoupled, and microservice-friendly engineering built on proven, modern stacks.',
    detail: 'We leverage modern frameworks like React, TypeScript, Next.js, Node.js, and cloud ecosystems to ensure zero vendor lock-in.',
    iconName: 'Cpu'
  },
  {
    title: 'Transparent Collaboration',
    description: 'Direct communication with seasoned engineers and designers, with regular milestone reviews and zero jargon.',
    detail: 'Clients receive direct visibility into repository progress, sprint boards, staging environments, and architectural decisions.',
    iconName: 'Users'
  }
];

export const PROJECT_SHOWCASES: ProjectShowcase[] = [
  {
    id: 'enterprise-saas-platform',
    title: 'Cloud Orchestration & Telemetry Dashboard',
    category: 'Enterprise SaaS & Web Engineering',
    servicesProvided: ['UI/UX Design', 'Web Development'],
    description: 'A mission-critical observability platform designed for operations teams to monitor distributed microservices, network latency, and billing metrics in real time.',
    outcomes: [
      'Sub-50ms data streaming via WebSocket protocols',
      'Unified design system supporting dense operational monitoring',
      'WCAG AA compliant dark-mode visualization palette'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'WebSockets'],
    featuredImageGradient: 'from-blue-600/20 via-indigo-600/20 to-slate-900'
  },
  {
    id: 'fintech-mobile-application',
    title: 'Cross-Border Wealth & Treasury Suite',
    category: 'FinTech Mobile Application',
    servicesProvided: ['Mobile App Development', 'UI/UX Design'],
    description: 'A cross-platform mobile application providing instant multi-currency treasury management, real-time FX conversions, and biometrically secured approvals.',
    outcomes: [
      'Native 60fps interaction rendering on iOS & Android',
      'Encrypted offline transaction logging and background sync',
      'Biometric authentication with FaceID & fingerprint fallback'
    ],
    techStack: ['React Native', 'TypeScript', 'Biometric Enclave', 'Redux Toolkit'],
    featuredImageGradient: 'from-cyan-600/20 via-blue-600/20 to-slate-900'
  },
  {
    id: 'ai-knowledge-automation',
    title: 'Enterprise Knowledge Engine & AI Assistant',
    category: 'AI Solutions & Automation',
    servicesProvided: ['AI Solutions', 'Web Development'],
    description: 'A retrieval-augmented generation (RAG) assistant that indexes unstructured enterprise documentation, internal policies, and ticketing histories with automated source citation.',
    outcomes: [
      'Over 75% reduction in internal policy search latency',
      'Secure on-premise vector embeddings and access control',
      'Hallucination prevention through verified context citations'
    ],
    techStack: ['Python', 'Node.js', 'Vector DB', 'LLM Pipeline', 'React'],
    featuredImageGradient: 'from-indigo-600/20 via-purple-600/20 to-slate-900'
  },
  {
    id: 'global-commerce-system',
    title: 'Headless Commerce & Digital Brand Experience',
    category: 'Brand Identity & Web Engineering',
    servicesProvided: ['Brand Identity', 'Web Development', 'SEO Marketing'],
    description: 'A high-converting headless digital storefront built for a luxury goods manufacturer, featuring bespoke 3D product previews and localized multi-region checkout.',
    outcomes: [
      'Perfect 100/100 Core Web Vitals score on mobile and desktop',
      'Custom typography and editorial visual brand identity system',
      'Comprehensive Schema.org semantic search indexing'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS', 'Stripe'],
    featuredImageGradient: 'from-blue-500/20 via-teal-500/20 to-slate-900'
  }
];

export const TECH_CAPABILITIES: TechCapability[] = [
  {
    category: 'Frontend & Experience',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Figma', 'HTML5 / Semantic CSS', 'Motion']
  },
  {
    category: 'Mobile Engineering',
    technologies: ['React Native', 'iOS (Swift UI concepts)', 'Android (Kotlin concepts)', 'Expo', 'Offline Sync', 'Biometrics']
  },
  {
    category: 'Backend & Cloud Infrastructure',
    technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'REST & GraphQL', 'Docker', 'AWS / Cloud Run', 'Redis']
  },
  {
    category: 'AI & Data Optimization',
    technologies: ['LLM Orchestration', 'Vector Embeddings', 'RAG Pipelines', 'Technical SEO', 'Schema.org', 'Core Web Vitals']
  }
];
