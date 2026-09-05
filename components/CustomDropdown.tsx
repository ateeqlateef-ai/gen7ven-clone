import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';

interface CustomDropdownProps {
  id?: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ 
  id,
  label, 
  options, 
  value, 
  onChange, 
  error, 
  placeholder = "Select an option" 
}) => {
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

  const isSelected = Boolean(value && value !== placeholder);

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      <label 
        htmlFor={id}
        className="block text-xs font-bold text-slate-700 mb-2 px-1 text-left"
      >
        {label}
      </label>
      <div className="relative">
        <button
          id={id}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-white border ${
            error 
              ? 'border-rose-500 ring-2 ring-rose-500/10' 
              : 'border-slate-200 hover:border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20'
          } rounded-xl px-4 py-3 text-left flex justify-between items-center focus:outline-none transition-all duration-200 shadow-2xs group`}
        >
          <span className={`text-sm ${!isSelected ? "text-slate-400" : "text-slate-900 font-medium"}`}>
            {isSelected ? value : placeholder}
          </span>
          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-slate-600'}`} />
        </button>

        {isOpen && (
          <div className="absolute z-[110] w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden animate-fade-in duration-150">
            <div className="max-h-60 overflow-y-auto p-1.5 space-y-1">
              {options.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  role="option"
                  aria-selected={option === value}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors duration-150 ${
                    option === value 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'hover:bg-sky-50 text-slate-700 hover:text-blue-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-rose-600 font-medium px-1 flex items-center gap-1.5 animate-fade-in">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
