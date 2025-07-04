
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/95 backdrop-blur-md border-b border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold">
                <span className="text-orange-500">&lt;B&gt;</span>
                <span className="text-white ml-1">Docabyte</span>
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Inicio
              </a>
              <a href="#nosotros" className="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Nosotros
              </a>
              <a href="#servicios" className="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Servicios
              </a>
              <a href="#proyectos" className="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Proyectos
              </a>
            </div>
          </div>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-gray-400">
              <span className="text-orange-400 font-semibold">ES</span>
              <span>|</span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors duration-200">EN</span>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-red-600">
              Contáctanos
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-orange-400 p-2">
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
