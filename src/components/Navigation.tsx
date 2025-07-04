
import React from 'react';
import useScroll from '@/hooks/use-scroll';

const Navigation = () => {
  const isScrolled = useScroll(50);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-slate-800/95 backdrop-blur-lg shadow-lg mt-4 mx-auto w-[90%] rounded-2xl border border-slate-700/50' 
        : 'bg-slate-800/95 backdrop-blur-md border-b border-slate-700 shadow-sm w-full'
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        isScrolled ? 'h-15' : 'h-20'
      }`}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className={`font-bold transition-all duration-500 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                <span className="text-white">&lt;B&gt;</span>
                <span className="text-white ml-1">Docabyte</span>
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Inicio
              </a>
              <a href="#nosotros" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Nosotros
              </a>
              <a href="#servicios" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Servicios
              </a>
              <a href="#proyectos" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Proyectos
              </a>
            </div>
          </div>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-gray-400">
              <span className="text-white font-semibold">ES</span>
              <span>|</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors duration-200">EN</span>
            </div>
            <button className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium shadow-md hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 ${
              isScrolled ? 'px-4 py-1.5 text-sm' : 'px-6 py-2 text-sm'
            }`}>
              Contáctanos
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-cyan-400 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
