import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="text-white font-serif text-2xl font-bold tracking-wide flex items-center gap-2">
              <span className="text-gold-500 text-3xl">§</span>
              <span>SILVA <span className="text-gold-500 font-light">ADVOCACIA</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-200 hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-6 py-2.5 rounded-sm font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Falar com Advogado
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none p-2"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 bg-navy-900 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-navy-800">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium text-center"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gold-500 text-navy-900 font-bold px-4 py-3 rounded-sm mt-4"
          >
            Falar com Advogado
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;