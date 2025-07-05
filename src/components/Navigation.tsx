
import React from 'react';
import useScroll from '@/hooks/use-scroll';

const Navigation = () => {
  const isScrolled = useScroll(50);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-lg py-3' 
        : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-32 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">DOCABYTE</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Inicio
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Nosotros
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Servicios
              </a>
              <a href="#proyectos" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Proyectos
              </a>
            </div>
          </div>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-gray-600">
              <span className="text-cyan-600 font-semibold">ES</span>
              <span>|</span>
              <span className="hover:text-cyan-600 cursor-pointer transition-colors duration-200">EN</span>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600">
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
  );
};

export default Navigation;
