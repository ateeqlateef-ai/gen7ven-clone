import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Globe, 
  Layout, 
  Layers, 
  Cpu, 
  TrendingUp, 
  CalendarCheck, 
  Target 
} from 'lucide-react';
import { navigate } from '../utils/navigation';

interface ValueCard {
  title: string;
  description: string;
  highlight: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CLIENT_VALUES: ValueCard[] = [
  {
    title: 'Clear Communication',
    description: 'Clear communication keeps every project moving in the right direction. We focus on understanding requirements, explaining technical decisions, and keeping every stage of delivery transparent.',
    highlight: 'Transparent Updates',
    icon: MessageSquare
  },
  {
    title: 'Professional Execution',
    description: 'Strong ideas need strong execution. Our approach combines thoughtful planning, modern technology, and careful attention to detail to create digital experiences built for real-world use.',
    highlight: 'Precision Engineering',
    icon: CheckCircle2
  },
  {
    title: 'Modern Web Experiences',
    description: 'Businesses need websites that are fast, responsive, secure, and easy to use. We build modern web experiences designed to perform across devices and support long-term growth.',
    highlight: 'Performance & Security',
    icon: Globe
  },
  {
    title: 'User-Centered Design',
    description: 'Great digital products should feel simple to use. We focus on intuitive interfaces, clear user journeys, accessibility, and design systems that make every interaction purposeful.',
    highlight: 'Intuitive Usability',
    icon: Layout
  },
  {
    title: 'Scalable Technology',
    description: 'Technology should grow with the business. Our engineering approach prioritizes maintainable architecture, reliable performance, and flexibility for future requirements.',
    highlight: 'Future-Ready Architecture',
    icon: Layers
  },
  {
    title: 'Practical AI Solutions',
    description: 'AI should solve real problems rather than simply follow a trend. We focus on practical automation, intelligent workflows, and solutions that can create meaningful operational value.',
    highlight: 'Meaningful Automation',
    icon: Cpu
  },
  {
    title: 'Long-Term SEO Growth',
    description: 'Search visibility is built through consistency. Our SEO approach combines technical foundations, useful content, structured data, and sustainable organic growth strategies.',
    highlight: 'Organic Authority',
    icon: TrendingUp
  },
  {
    title: 'Reliable Project Delivery',
    description: 'Every project benefits from structure and accountability. We maintain clear milestones, organized development processes, and a strong focus on delivering what the business actually needs.',
    highlight: 'Structured Milestones',
    icon: CalendarCheck
  },
  {
    title: 'Business-Focused Thinking',
    description: 'Digital technology should support commercial objectives. We prioritize solutions that improve user experience, efficiency, visibility, conversions, and long-term business potential.',
    highlight: 'Commercial Outcomes',
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
      id="client-values-section" 
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-labelledby="client-values-heading"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>What Clients Value</span>
          </span>
          <h2 
            id="client-values-heading" 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display"
          >
            Built Around What Matters Most
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            From first conversation to final delivery, we focus on clarity, quality, performance, and measurable business value.
          </p>
        </header>

        {/* 9 Cards Grid: 3 per row on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_VALUES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <article
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:bg-[#F8FBFF]/60 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 shadow-2xs hover:shadow-md hover:shadow-blue-500/5"
              >
                <div>
                  {/* Card Header with Icon and Highlight Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5 transition-colors" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100/80">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight font-display group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Professional Value Statement */}
                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Sub-footer Standard Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-blue-600 font-semibold">Novexa Standard</span>
                  <span className="text-slate-400">0{idx + 1}</span>
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
            id="client-values-consultation-btn"
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
