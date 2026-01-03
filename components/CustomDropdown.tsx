import React, { useState, useRef, useEffect } from 'react';

interface CustomDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ label, options, value, onChange, error, placeholder = "Select one" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const isSelected = value && value !== placeholder;

  return (
    <div className="mb-8 relative" ref={dropdownRef}>
      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 px-1">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-slate-950/80 border ${error ? 'border-red-500/50' : 'border-slate-800'} rounded-2xl px-6 py-4 md:py-5 text-left flex justify-between items-center hover:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 shadow-inner group`}
        >
          <span className={`font-medium ${!isSelected ? "text-slate-700" : "text-slate-200"}`}>
            {isSelected ? value : placeholder}
          </span>
          <i className={`fa-solid fa-chevron-down text-slate-700 text-xs transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-500' : 'group-hover:text-slate-500'}`}></i>
        </button>

        {isOpen && (
          <div className="absolute z-[110] w-full mt-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl animate-fade-in animate-scale-up duration-200">
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  role="option"
                  aria-selected={option === value}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left px-6 py-4 text-sm font-bold transition-all duration-200 ${
                    option === value 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && <p className="mt-3 text-[10px] text-red-400 font-bold px-1 flex items-center animate-fade-in"><i className="fa-solid fa-circle-exclamation mr-2"></i>{error}</p>}
    </div>
  );
};

export default CustomDropdown;