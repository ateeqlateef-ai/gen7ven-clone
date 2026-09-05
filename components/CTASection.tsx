import React from 'react';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

const CTASection: React.FC = () => {
  return (
    <section 
      id="cta-section"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-sky-50/80 via-white to-blue-50/80 border border-sky-200 text-center relative shadow-sm">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ready for Production</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-2xl mx-auto font-display">
            Have a Technical Challenge or New Product in Mind?
          </h2>

          <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Connect directly with Novexa Solutions. We review technical specifications, evaluate project scope, and provide actionable architecture roadmaps within 24 hours.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#/contact"
              id="cta-discuss-button"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm md:text-base rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Schedule Initial Scoping Session</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${SITE_INFO.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-sm md:text-base rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xs"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{SITE_INFO.email}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-sky-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span>Direct Architect Reviews</span>
            <span>•</span>
            <span>Comprehensive NDA Available</span>
            <span>•</span>
            <span>UK Company Standards</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
