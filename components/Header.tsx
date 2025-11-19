import React, { useState } from 'react';
import type { NavLink } from '../types';

interface HeaderProps {
  navLinks: NavLink[];
  onNavLinkClick: (id: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, onNavLinkClick, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNavLinkClick(id);
    setIsMenuOpen(false);
  };

  const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
       <svg className="w-8 h-8 text-brand-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125A2.25 2.25 0 014.5 4.875h15a2.25 2.25 0 012.25 2.25v9.75a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-9.75z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125v.001M2.25 10.125v.001M5.25 7.125v.001M5.25 10.125v.001M8.25 7.125v.001M8.25 10.125v.001M11.25 7.125v.001M11.25 10.125v.001M14.25 7.125v.001M14.25 10.125v.001M17.25 7.125v.001M17.25 10.125v.001" />
       </svg>
      <span className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">Cabinet Masters Pro</span>
    </div>
  );

  return (
    <header className="bg-brand-primary/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="flex-shrink-0">
            <Logo />
          </a>
          <nav className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                className={`text-sm font-medium transition-colors duration-200 relative whitespace-nowrap ${
                  activeSection === link.id ? 'text-brand-secondary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.title}
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-secondary rounded-full"></span>
                )}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 text-sm font-semibold text-brand-primary bg-brand-secondary rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
            >
              Request a Quote
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-primary">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.id ? 'bg-brand-secondary text-brand-primary' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div className="p-4">
             <button
              onClick={() => handleLinkClick('contact')}
              className="w-full px-5 py-3 text-sm font-semibold text-brand-primary bg-brand-secondary rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
