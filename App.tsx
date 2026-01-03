import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomDropdown from './components/CustomDropdown';

// --- Shared Components ---

const CTASection = () => (
  <section className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="max-w-6xl mx-auto p-10 md:p-24 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 rounded-[2.5rem] md:rounded-[4rem] text-center relative shadow-2xl shadow-blue-900/30 overflow-hidden group">
      <div className="absolute top-0 right-0 p-10 opacity-10 scale-150 rotate-12 select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-45 group-hover:scale-[2]">
        <i className="fa-solid fa-rocket text-[250px] text-white"></i>
      </div>
      
      <div className="relative z-10 space-y-8 animate-fade-up">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Ready to scale your business?</h2>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Join the 150+ global brands that have accelerated their digital growth with Gen7ven's high-performance engineering.
        </p>
        <div className="pt-4">
          <a 
            href="contact.html" 
            className="inline-flex items-center px-10 py-5 bg-white text-blue-700 font-extrabold text-lg rounded-full hover:bg-slate-100 hover:scale-105 transition-all shadow-xl active:scale-95 group/btn"
          >
            Get Your Free Consultation
            <i className="fa-solid fa-calendar-check ml-3 group-hover/btn:rotate-12 transition-transform"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ badge, title, subtitle, centered = true }: { badge: string, title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl text-left'}`}>
    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-6 animate-fade-in">
      {badge}
    </span>
    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1] animate-fade-up">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-base md:text-xl leading-relaxed font-light animate-fade-up stagger-1">
        {subtitle}
      </p>
    )}
  </div>
);

// --- Home Page Components ---

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
    <div className="max-w-6xl mx-auto space-y-10 relative z-10">
      <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest animate-fade-in shadow-xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
        </span>
        <span>Premium Digital Engineering</span>
      </div>
      
      <h1 className="hero-title font-black text-white tracking-tighter animate-fade-up stagger-1">
        Building the <span className="text-gradient">Next Gen</span> of Digital Products
      </h1>
      
      <p className="text-slate-400 text-base md:text-2xl max-w-3xl mx-auto leading-relaxed font-light animate-fade-up stagger-2 px-4">
        We architect high-performance digital experiences that merge cutting-edge technology with world-class design standards.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-fade-up stagger-3">
        <a 
          href="contact.html" 
          className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-full transition-all flex items-center justify-center shadow-2xl shadow-blue-600/25 hover:scale-105 active:scale-95 group"
        >
          Start a Project
          <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1.5 transition-transform"></i>
        </a>
        <a 
          href="services.html" 
          className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-lg rounded-full transition-all hover:border-white/20 active:scale-95"
        >
          Explore Services
        </a>
      </div>
    </div>
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30 select-none">
      <i className="fa-solid fa-chevron-down text-white text-2xl"></i>
    </div>
  </section>
);

const ServicesPreview = () => {
  const services = [
    { title: "UI/UX Design", desc: "User-centric designs that focus on flow, aesthetics, and high conversion psychology.", icon: "fa-bezier-curve", color: "from-purple-500/20 to-indigo-500/20" },
    { title: "Full-Stack Dev", desc: "Industrial-grade architectures optimized for extreme speed and global scalability.", icon: "fa-code", color: "from-blue-500/20 to-cyan-500/20" },
    { title: "AI Integration", desc: "Powering your applications with the latest LLM capabilities and machine learning.", icon: "fa-brain", color: "from-emerald-500/20 to-teal-500/20" }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
        <SectionHeader 
          badge="Expertise" 
          title="World-class services for ambitious brands." 
          centered={false}
        />
        <a href="services.html" className="text-blue-500 hover:text-blue-400 font-extrabold flex items-center group text-lg pb-4 transition-colors">
          View All Services <i className="fa-solid fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group relative p-10 md:p-12 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-2">
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`}></div>
            <div className="w-16 md:w-20 h-16 md:h-20 bg-slate-800/50 text-blue-500 rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg">
              <i className={`fa-solid ${s.icon} text-2xl md:text-3xl`}></i>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{s.title}</h4>
            <p className="text-slate-400 leading-relaxed mb-10 font-medium text-sm md:text-base">{s.desc}</p>
            <div className="pt-8 border-t border-slate-800/50 flex items-center text-[10px] font-black text-slate-500 group-hover:text-white tracking-[0.2em] transition-colors uppercase">
              Learn More <i className="fa-solid fa-plus ml-auto"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Home Page Assembler (Fixing missing component error) ---
const Home = () => (
  <>
    <Hero />
    <ServicesPreview />
    <CTASection />
  </>
);

// --- Services Page ---

const ServicesHeader = () => (
  <section className="relative pt-48 pb-24 bg-slate-950 border-b border-slate-900 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_75%)]"></div>
    <div className="max-w-7xl mx-auto px-6 relative">
      <nav className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-10">
        <a href="index.html" className="hover:text-blue-400 transition-colors">Home</a>
        <i className="fa-solid fa-chevron-right text-[8px] text-slate-700"></i>
        <span className="text-blue-500">Services</span>
      </nav>
      <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
        Our <span className="text-blue-500">Solutions</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-2xl max-w-3xl leading-relaxed font-light">
        End-to-end digital expertise tailored for modern enterprises. We solve complex problems through elegant engineering.
      </p>
    </div>
  </section>
);

const ServicesGrid = () => {
  const serviceList = [
    { title: "UI/UX Design", icon: "fa-pencil-ruler", desc: "User research and interface designs that prioritize engagement and retention.", features: ["User Psychology", "Interactive Prototyping", "Design Systems", "Accessibility"] },
    { title: "Web Development", icon: "fa-laptop-code", desc: "High-performance React & Node.js applications with pixel-perfect precision.", features: ["Single Page Apps", "API Development", "Real-time Systems", "Performance Tuning"] },
    { title: "Mobile App Dev", icon: "fa-mobile-screen", desc: "Cross-platform mobile apps that deliver native-level performance and feel.", features: ["iOS & Android", "React Native", "Offline-First", "Push Notifications"] },
    { title: "Brand Identity", icon: "fa-gem", desc: "Crafting digital-first brands that resonate across every visual touchpoint.", features: ["Visual Strategy", "Logo & Assets", "Typography", "Motion Identity"] },
    { title: "SEO & Marketing", icon: "fa-magnifying-glass-chart", desc: "Data-driven SEO strategies that dominate rankings and drive high-intent traffic.", features: ["Technical SEO", "Content Strategy", "Performance Audit", "Backlink Strategy"] },
    { title: "AI Solutions", icon: "fa-brain", desc: "Integrating Generative AI and predictive analytics to future-proof your product.", features: ["LLM Integration", "Data Visualization", "ML Workflows", "Custom Chatbots"] }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, i) => (
          <div key={i} className="group p-10 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] hover:border-blue-500/40 hover:bg-slate-900/50 transition-all duration-500 flex flex-col h-full shadow-lg hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
              <i className={`fa-solid ${service.icon} text-xl`}></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-10 flex-grow font-medium text-sm md:text-base">
              {service.desc}
            </p>
            <ul className="space-y-4 mb-10">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center text-xs font-bold text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-slate-800/50">
              <a href="contact.html" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                Enquire Now <i className="fa-solid fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- About Page ---

const AboutContent = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
      <div className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] aspect-square bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl">
        <i className="fa-solid fa-layer-group text-8xl md:text-[150px] text-slate-800/40 group-hover:scale-110 transition-transform duration-1000"></i>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
        <div className="absolute bottom-10 left-10">
          <div className="text-4xl md:text-5xl font-black text-white mb-2">Since 2024</div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Premium Standard</div>
        </div>
      </div>
      <div className="space-y-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">Our Story</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Extreme technical excellence from the ground up.</h2>
        <p className="text-slate-400 text-base md:text-xl leading-relaxed font-light">
          At Gen7ven, we believe that the best digital products are born from the intersection of rigorous engineering standards and unbridled creative vision. 
        </p>
        <div className="grid grid-cols-2 gap-10 pt-4">
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">150+</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Projects Launched</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">98%</div>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Contact Page ---

const ContactContent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    industry: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const services = ["UI/UX Design", "Web Development", "Mobile App Dev", "Brand Identity", "SEO & Marketing", "AI Solutions"];
  const industries = ["Technology", "Healthcare", "Finance", "E-commerce", "Real Estate", "Education", "Entertainment", "Other"];

  const validate = () => {
    let newErrors: any = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.industry) newErrors.industry = "Please select an industry";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('SUBMITTING');
    try {
      const response = await fetch("https://formsubmit.co/ajax/mason.liam1122@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Gen7ven Contact: ${formData.fullName}`,
          _template: "table"
        })
      });
      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ fullName: '', email: '', service: '', industry: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
          <div>
            <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-10">Direct Contact</h3>
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-base mb-1 text-left">Email Our Team</h4>
                  <p className="text-slate-400 font-medium text-sm">hello@gen7ven.agency</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-base mb-1 text-left">Innovation Tower</h4>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed text-left">Level 24, Tech District<br/>London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
             <h4 className="text-white font-black mb-4 relative z-10 uppercase text-xs tracking-widest text-left">24h Response Policy</h4>
             <p className="text-slate-400 text-sm leading-relaxed font-medium relative z-10 text-left">
               Our lead engineers review every proposal personally to ensure technical alignment from the first touch.
             </p>
          </div>
        </div>

        <div className="lg:col-span-8 order-1 lg:order-2">
          {status === 'SUCCESS' ? (
            <div className="bg-slate-900/40 border border-slate-800 p-12 md:p-20 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl text-center animate-scale-up">
              <div className="w-20 md:w-24 h-20 md:h-24 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-10 animate-bounce">
                <i className="fa-solid fa-check text-4xl"></i>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Proposal Received!</h2>
              <p className="text-slate-400 mb-12 text-lg md:text-xl font-light">Thank you. Check your email shortly for our initial project assessment.</p>
              <button 
                onClick={() => setStatus('IDLE')}
                className="px-12 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all"
              >
                Return to Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-900/40 border border-slate-800/80 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl backdrop-blur-md animate-fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div className="mb-8">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 px-1 text-left">Full Name</label>
                  <input 
                    type="text"
                    placeholder="e.g. Alexander Pierce"
                    className={`w-full bg-slate-950/80 border ${errors.fullName ? 'border-red-500/50' : 'border-slate-800'} rounded-2xl px-6 py-4 md:py-5 text-slate-200 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-700 font-medium`}
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                  {errors.fullName && <p className="mt-3 text-[10px] text-red-400 font-bold px-1 flex items-center animate-fade-in"><i className="fa-solid fa-circle-exclamation mr-2"></i>{errors.fullName}</p>}
                </div>
                <div className="mb-8">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 px-1 text-left">Email Address</label>
                  <input 
                    type="email"
                    placeholder="alex@enterprise.com"
                    className={`w-full bg-slate-950/80 border ${errors.email ? 'border-red-500/50' : 'border-slate-800'} rounded-2xl px-6 py-4 md:py-5 text-slate-200 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-700 font-medium`}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  {errors.email && <p className="mt-3 text-[10px] text-red-400 font-bold px-1 flex items-center animate-fade-in"><i className="fa-solid fa-circle-exclamation mr-2"></i>{errors.email}</p>}
                </div>
                <CustomDropdown label="Which Service you want ?" options={services} value={formData.service} onChange={(val) => setFormData({...formData, service: val})} error={errors.service} placeholder="Select Service" />
                <CustomDropdown label="What industry are you in?" options={industries} value={formData.industry} onChange={(val) => setFormData({...formData, industry: val})} error={errors.industry} placeholder="Select Industry" />
              </div>
              <div className="mb-12">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 px-1 text-left">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Describe your vision, goals, and timeline..."
                  className={`w-full bg-slate-950/80 border ${errors.message ? 'border-red-500/50' : 'border-slate-800'} rounded-2xl px-6 py-4 md:py-5 text-slate-200 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-700 resize-none font-medium leading-relaxed`}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                {errors.message && <p className="mt-3 text-[10px] text-red-400 font-bold px-1 flex items-center animate-fade-in"><i className="fa-solid fa-circle-exclamation mr-2"></i>{errors.message}</p>}
              </div>
              <button type="submit" disabled={status === 'SUBMITTING'} className="w-full py-5 md:py-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-black rounded-2xl transition-all shadow-2xl shadow-blue-600/30 active:scale-[0.98] flex items-center justify-center gap-4 text-lg md:text-xl group">
                {status === 'SUBMITTING' ? "Submitting..." : "Submit Request"}
                {status !== 'SUBMITTING' && <i className="fa-solid fa-paper-plane text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// --- Page Assembler ---

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    const p = currentPath.toLowerCase();
    if (p.includes('services.html')) return (
      <div className="bg-slate-950">
        <section className="relative pt-48 pb-24 border-b border-slate-900 overflow-hidden"><div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader badge="Services" title="Our Solutions" subtitle="End-to-end digital expertise tailored for modern enterprises." centered={false} />
        </div></section>
        <ServicesGrid /><CTASection />
      </div>
    );
    if (p.includes('about.html')) return (
      <div className="bg-slate-950">
        <section className="relative pt-48 pb-24 border-b border-slate-900 overflow-hidden"><div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader badge="About Us" title="Architects of Innovation" subtitle="We are a multidisciplinary team dedicated to pushing digital boundaries." centered={false} />
        </div></section>
        <AboutContent /><CTASection />
      </div>
    );
    if (p.includes('contact.html')) return (
      <div className="bg-slate-950">
        <section className="relative pt-48 pb-20 overflow-hidden"><div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeader badge="Contact" title="Start a Conversation" subtitle="Ready to build something extraordinary? Our team is standing by." centered={false} />
        </div></section>
        <ContactContent /><CTASection />
      </div>
    );
    return <Home />;
  };

  return (
    <div className="relative min-h-screen selection:bg-blue-500/40 text-slate-200 bg-slate-950 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;