
// TODO: Remove this comment after deployment
import React from 'react';
import useScroll from '@/hooks/use-scroll';
import { openWhatsApp } from '@/lib/utils';

const Navigation = () => {
  const isScrolled = useScroll(50);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Ajuste para el header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
      isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'
    }`}>
      <nav className={`transition-all duration-300 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-lg shadow-2xl py-3 rounded-2xl w-[90%] mx-auto border border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-md shadow-sm py-5 w-full border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo placeholder */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.docabyte.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-32 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">DOCABYTE</span>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')} 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')} 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => scrollToSection('proyectos')} 
                  className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Proyectos
                </button>
              </div>
            </div>

            {/* Right side - Language toggle and CTA */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-gray-600">
                <span className="text-cyan-600 font-semibold">ES</span>
                <span>|</span>
                <span className="hover:text-cyan-600 cursor-pointer transition-colors duration-200">EN</span>
              </div>
              <button 
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600"
              >
                Contáctanos
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden py-[10px]">
              <button className="text-gray-700 hover:text-cyan-600 p-2">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-[#13b5e6]">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
