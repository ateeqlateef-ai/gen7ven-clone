import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { navigate } from '../utils/navigation';

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  bestFor: string;
  originalPrice?: string;
  discountBadge?: string;
  discountedPrice: string;
  savings?: string;
  description?: string;
  features: string[];
  ctaText: string;
  packageParam: string;
  isPopular?: boolean;
}

interface PricingSectionProps {
  isFullPage?: boolean;
}

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'launch',
    name: 'LAUNCH',
    bestFor: 'Small businesses & new brands',
    originalPrice: '$399',
    discountBadge: '25% OFF',
    discountedPrice: '$299',
    savings: 'Save $100',
    features: [
      'Professional responsive website',
      'Up to 5 pages',
      'Custom modern UI',
      'Contact form',
      'WhatsApp integration',
      'Basic on-page SEO',
      'Mobile & tablet optimization',
      'Social media integration',
      'Basic performance optimization',
      '1 revision round'
    ],
    ctaText: 'GET STARTED',
    packageParam: 'launch',
    isPopular: false
  },
  {
    id: 'business',
    name: 'BUSINESS',
    badge: 'MOST POPULAR',
    bestFor: 'Growing & established businesses',
    originalPrice: '$799',
    discountBadge: '25% OFF',
    discountedPrice: '$599',
    savings: 'Save $200',
    features: [
      'Everything in Launch',
      'Up to 10 pages',
      'Custom UI/UX design',
      'Advanced contact & lead forms',
      'Blog / news section',
      'Technical SEO foundation',
      'Google Analytics & Search Console setup',
      'Speed & Core Web Vitals optimization',
      '2–3 revision rounds',
      'Post-launch support'
    ],
    ctaText: 'CHOOSE BUSINESS',
    packageParam: 'business',
    isPopular: true
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    bestFor: 'Businesses ready to scale',
    originalPrice: '$1,299',
    discountBadge: '23% OFF',
    discountedPrice: '$999',
    savings: 'Save $300',
    features: [
      'Everything in Business',
      'Up to 15 pages',
      'Advanced UI/UX',
      'CMS integration',
      'Booking / appointment functionality',
      'Payment gateway integration',
      'Advanced SEO setup',
      'Custom API / integration support',
      'Advanced performance optimization',
      'Priority support',
      '3 revision rounds'
    ],
    ctaText: 'CHOOSE PROFESSIONAL',
    packageParam: 'professional',
    isPopular: false
  },
  {
    id: 'custom',
    name: 'CUSTOM',
    bestFor: 'Advanced & enterprise requirements',
    discountedPrice: 'CUSTOM QUOTE',
    description: 'Build exactly what your business needs with a solution tailored to your goals, technology requirements, and project scope.',
    features: [
      'Custom web applications',
      'E-commerce platforms',
      'Mobile applications',
      'AI integrations',
      'Custom dashboards',
      'API integrations',
      'Advanced automation',
      'Enterprise SEO',
      'Bespoke UI/UX',
      'Custom development requirements',
      'Dedicated project planning',
      'Scalable architecture'
    ],
    ctaText: 'REQUEST A CUSTOM QUOTE',
    packageParam: 'custom',
    isPopular: false
  }
];

const PricingSection: React.FC<PricingSectionProps> = ({ isFullPage = false }) => {
  const handlePackageSelect = (packageParam: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate(`/contact?package=${encodeURIComponent(packageParam)}`);
    }
  };

  const handleGeneralConsultation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate('/contact');
    }
  };

  return (
    <section
      id="pricing-packages-section"
      className={`px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]/50 border-y border-slate-100 relative overflow-hidden ${
        isFullPage ? 'py-12 md:py-16' : 'py-20 md:py-28'
      }`}
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        {!isFullPage ? (
          <header className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
              <span>Transparent Pricing & Packages</span>
            </span>
            <h2
              id="pricing-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display"
            >
              Simple Packages. Powerful Digital Solutions.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Choose the package that fits your current goals, or let us create a custom solution around your requirements.
            </p>
          </header>
        ) : (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="pricing-heading" className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Select Your Preferred Digital Package
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              All plans include modern engineering standards, responsive design, and dedicated milestone delivery.
            </p>
          </div>
        )}

        {/* 4 Pricing Cards Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6 sm:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isCustom = pkg.id === 'custom';
            const isPopular = pkg.isPopular;

            return (
              <article
                key={pkg.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative bg-white ${
                  isPopular
                    ? 'border-2 border-blue-600 shadow-lg shadow-blue-600/10 ring-1 ring-blue-600/20 xl:-translate-y-2'
                    : 'border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      <Zap className="w-3 h-3 fill-white" aria-hidden="true" />
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                {/* Card Main Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Top Header: Label & Best For */}
                  <div className="mb-4">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight font-display">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 mt-1 font-medium">
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Pricing Block with Discount Visual Hierarchy */}
                  <div className="py-4 border-y border-slate-100 mb-5 min-h-[110px] flex flex-col justify-center">
                    {!isCustom ? (
                      <div>
                        {/* Strikethrough Original Price & Discount Badge */}
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-slate-400 line-through text-sm sm:text-base font-semibold">
                            {pkg.originalPrice}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 text-blue-700 border border-sky-200">
                            {pkg.discountBadge}
                          </span>
                        </div>

                        {/* Prominent Discounted Price */}
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl sm:text-[42px] font-black text-slate-900 font-display tracking-tight leading-none">
                            {pkg.discountedPrice}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">/ project</span>
                        </div>

                        {/* Savings Badge Directly Below Discounted Price */}
                        <div className="mt-2">
                          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                            {pkg.savings}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-2xl sm:text-[28px] font-black text-slate-900 font-display tracking-tight leading-tight">
                          {pkg.discountedPrice}
                        </div>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          {pkg.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Package Features List */}
                  <div className="flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Package Includes:
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center shrink-0 border border-sky-100">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer with CTA Button */}
                <div className="p-6 sm:p-7 pt-0">
                  <a
                    href={`https://www.novexasolutions.uk/contact?package=${pkg.packageParam}`}
                    onClick={(e) => handlePackageSelect(pkg.packageParam, e)}
                    id={`pricing-cta-${pkg.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow-md hover:shadow-blue-600/25 active:scale-[0.98]'
                        : 'bg-slate-900 hover:bg-blue-600 text-white shadow-2xs hover:shadow-sm active:scale-[0.98]'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pricing Notes & Consultation Callout */}
        <div className="mt-14 sm:mt-16 max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Starting prices shown above. Final pricing depends on project scope, functionality, integrations, content requirements, and customization.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                Need something different?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We can create a custom solution tailored to your business, technology stack, and timeline.
              </p>
            </div>

            <a
              href="https://www.novexasolutions.uk/contact"
              onClick={handleGeneralConsultation}
              id="pricing-discuss-project-btn"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-sky-200 hover:border-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-2xs hover:shadow-sm"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
