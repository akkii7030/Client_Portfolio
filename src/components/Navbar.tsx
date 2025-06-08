import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'Services', href: '#services' },
    { name: 'Principles', href: '#principles' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-amber-500/20' 
        : 'bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* <div className="relative w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-7 w-7 text-white" />
              </div> */}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                Manish Varma
              </span>
              {/* <span className="text-xs text-amber-400 font-medium tracking-wider">GROWTH ENGINEER</span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-amber-400 font-medium transition-all duration-300 group py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            ))}
            <a
              href="#contact"
              className="relative bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:from-amber-600 hover:to-orange-700 hover:shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Let's Grow Together</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:from-amber-600 hover:to-orange-700 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl mt-4 border border-amber-500/20 shadow-2xl">
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block relative group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-gray-300 group-hover:text-amber-400 font-medium transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                </a>
              ))}
              
              <div className="pt-4 border-t border-amber-500/20">
                <a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-4 rounded-xl font-semibold transition-all duration-300 hover:from-amber-600 hover:to-orange-700 hover:shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-1"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">Let's Grow Together</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;