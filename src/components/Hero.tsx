
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-cyan-50/30 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Spline 3D Model as Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/particleaibrain-lTDRAcFyjv4fzAnGcIXtE48x/' 
          frameBorder='0' 
          width='100%' 
          height='100%' 
          className="w-full h-full object-cover"
          title="3D Brain Model Background"
        />
      </div>

      {/* Content overlay */}
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Title and Subtitle */}
        <div className="space-y-6 my-[50px]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              IMPULSAMOS LA SALUD DIGITAL
            </span>
            <br />
            <span className="text-gray-800">CON TECNOLOGÍA</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creamos páginas web, apps, chatbots y automatizaciones para médicos y clínicas
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 min-w-48">
            Ver portafolio
          </button>
          <button className="bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-gray-200/50 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:border-cyan-300 hover:scale-105 transition-all duration-300 hover:bg-cyan-50/90 min-w-48">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
