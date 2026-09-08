import React from 'react';
import { 
  Sparkles, 
  Star, 
  Quote, 
  ArrowRight, 
  Code2, 
  Layout, 
  Smartphone, 
  Cpu, 
  Search, 
  Palette, 
  MessageSquare, 
  ShieldCheck, 
  Target 
} from 'lucide-react';
import { navigate } from '../utils/navigation';

interface TrustCard {
  theme: string;
  headline: string;
  statement: string;
  pillar: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TRUST_CARDS: TrustCard[] = [
  {
    theme: 'Web Development',
    headline: 'Scalable & Resilient Web Applications',
    statement: 'We engineer resilient, high-speed web platforms using modern architectures that scale effortlessly with transaction volume. Our web solutions deliver lightning-fast load times, ironclad security, and seamless API integrations tailored to your business operations.',
    pillar: 'High-Performance Architecture',
    icon: Code2
  },
  {
    theme: 'UI/UX Design',
    headline: 'Intuitive Interfaces & Modern Design Systems',
    statement: 'We craft clean, accessible design systems that convert complex user workflows into effortless digital journeys. Every interface is backed by rigorous usability testing, intuitive interaction patterns, and strict WCAG AA accessibility standards.',
    pillar: 'Human-Centered Usability',
    icon: Layout
  },
  {
    theme: 'Mobile App Development',
    headline: 'Native-Grade Mobile Engineering',
    statement: 'We build responsive, native-performance iOS and Android applications engineered for daily operational reliability. From fluid animations to offline data synchronization and biometric security, our mobile apps deliver uncompromising quality.',
    pillar: 'Cross-Platform Reliability',
    icon: Smartphone
  },
  {
    theme: 'AI Solutions',
    headline: 'Purposeful Artificial Intelligence & Automation',
    statement: 'We integrate purposeful artificial intelligence and automated workflows that eliminate operational friction and enhance decision-making. Our practical AI implementations focus on tangible productivity gains, secure data handling, and measurable business efficiency.',
    pillar: 'Intelligent Automation',
    icon: Cpu
  },
  {
    theme: 'SEO Marketing',
    headline: 'Technical Discoverability & Organic Reach',
    statement: 'We implement comprehensive technical SEO frameworks, structured data schemas, and Core Web Vitals optimizations that elevate organic search ranking. Our structured approach builds sustainable search authority and attracts high-intent qualified traffic.',
    pillar: 'Sustainable Organic Growth',
    icon: Search
  },
  {
    theme: 'Brand Identity',
    headline: 'Authoritative & Cohesive Visual Identity',
    statement: 'We shape distinctive, cohesive visual identities that establish authority and trust across all digital touchpoints. From precise typographic standards to bespoke design guidelines, we position your business to stand out with consistency.',
    pillar: 'Strategic Positioning',
    icon: Palette
  },
  {
    theme: 'Communication',
    headline: 'Transparent & Structured Project Delivery',
    statement: 'We maintain total transparency through dedicated technical lead channels, weekly milestone sprints, and live staging previews. You work directly with senior software architects who listen closely, understand requirements, and communicate with absolute clarity.',
    pillar: 'Direct Architect Access',
    icon: MessageSquare
  },
  {
    theme: 'Technical Excellence',
    headline: 'Modern Architecture & Security Hardening',
    statement: 'We apply rigorous software engineering standards with clean modular codebases, proactive security hardening, and high-performance infrastructure. Every architecture is documented, thoroughly typed, and prepared for frictionless long-term maintainability and scalability.',
    pillar: 'Maintainable Codebases',
    icon: ShieldCheck
  },
  {
    theme: 'Business-Focused Approach',
    headline: 'Commercial Alignment & Measurable Outcomes',
    statement: 'We prioritize features that move the needle commercially, eliminating wasteful complexity and focusing on real commercial value. Every sprint deliverable is aligned with your key business metrics, conversion goals, and user acquisition targets.',
    pillar: 'Measurable ROI',
    icon: Target
  }
];

const ClientTrustSection: React.FC = () => {
  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate('/contact');
    }
  };

  return (
    <section 
      id="client-trust-section" 
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-labelledby="trust-section-heading"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Why Businesses Choose Novexa Solutions</span>
          </span>
          <h2 
            id="trust-section-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display"
          >
            Trusted by Ambitious Businesses
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Professional digital solutions built around clarity, performance, innovation, and long-term business value.
          </p>
        </header>

        {/* 9 Cards Grid: 3 per row on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRUST_CARDS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <article
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:bg-[#F8FBFF]/60 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 shadow-2xs hover:shadow-md hover:shadow-blue-500/5"
              >
                <div>
                  {/* Top Bar with Theme Pill, Icon, and Quotation Marker */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-blue-700 text-xs font-semibold tracking-wide">
                      <IconComponent className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                      <span>{card.theme}</span>
                    </span>
                    <Quote className="w-5 h-5 text-sky-400/40 group-hover:text-blue-500 transition-colors" aria-hidden="true" />
                  </div>

                  {/* 5-Star Visual Treatment */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3.5" aria-label="Five-star quality benchmark">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star 
                        key={starIdx} 
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400" 
                        aria-hidden="true" 
                      />
                    ))}
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight font-display group-hover:text-blue-600 transition-colors">
                    {card.headline}
                  </h3>

                  {/* Professional Value Statement */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {card.statement}
                  </p>
                </div>

                {/* Card Sub-footer Pillar */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-blue-600 font-semibold">{card.pillar}</span>
                  <span className="text-slate-400">Novexa Standard</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Post-Cards Call to Action & Trust Line */}
        <div className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-sky-50/80 to-white border border-sky-100 shadow-2xs">
          <p className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-6">
            Ready to build your next digital project?
          </p>

          <a
            href="https://www.novexasolutions.uk/contact"
            onClick={handleConsultationClick}
            id="client-trust-consultation-btn"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] uppercase tracking-wider"
          >
            <span>GET A FREE CONSULTATION</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <p className="mt-6 text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
            Web Development • UI/UX • Mobile Apps • AI Solutions • SEO • Brand Identity
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClientTrustSection;
