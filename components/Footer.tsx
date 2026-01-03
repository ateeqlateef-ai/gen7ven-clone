import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="index.html" className="text-3xl font-black tracking-tighter text-white block">
              GEN<span className="text-blue-500">7</span>VEN
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Architecting high-performance digital ecosystems for global enterprises. Built for speed, scale, and creative impact.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-lg">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.25em] text-left">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold tracking-tight text-left">
              <li><a href="services.html" className="hover:text-blue-500 transition-colors">Web Engineering</a></li>
              <li><a href="services.html" className="hover:text-blue-500 transition-colors">Experience Design</a></li>
              <li><a href="services.html" className="hover:text-blue-500 transition-colors">Brand Identity</a></li>
              <li><a href="services.html" className="hover:text-blue-500 transition-colors">AI & Data Strategy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.25em] text-left">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold tracking-tight text-left">
              <li><a href="about.html" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="services.html" className="hover:text-blue-500 transition-colors">Our Process</a></li>
              <li><a href="contact.html" className="hover:text-blue-500 transition-colors">Join Team</a></li>
              <li><a href="contact.html" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl relative overflow-hidden shadow-inner">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-2xl rounded-full"></div>
             <h4 className="text-white font-black mb-4 text-xs tracking-widest uppercase text-left">Office</h4>
             <p className="text-slate-400 text-sm leading-relaxed font-medium text-left">
               24th Floor, Tech Hub<br/>Silicon Row, London<br/>EC1A 2BN
             </p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-slate-500 text-[10px] font-black uppercase tracking-widest">
          <p>© 2024 Gen7ven Digital. Premium Engineering Standard.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;