
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/50 to-cyan-50/30 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-24 relative overflow-hidden">
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
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-20 mt-8 sm:mt-12">
        {/* Title and Subtitle */}
        <div className="space-y-6">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl block">
              IMPULSAMOS LA SALUD
            </span>
            <span className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl block mt-2">
              CON TECNOLOGÍA
            </span>
          </h1>
          
          <p className="font-inter text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creamos soluciones digitales que optimizan la gestión clínica, mejoran la atención al paciente y automatizan procesos clave.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="font-inter font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 min-w-48">
            Ver portafolio
          </button>
          <button className="font-inter font-semibold bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-gray-200/50 px-8 py-4 rounded-full text-lg shadow-md hover:shadow-lg hover:border-cyan-300 hover:scale-105 transition-all duration-300 hover:bg-cyan-50/90 min-w-48">
            Contáctanos
          </button>
        </div>

        {/* Stacked Client Avatars */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          <div className="flex -space-x-3">
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium">
                JM
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium">
                AS
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarFallback className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium">
                DR
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium">
                MC
              </AvatarFallback>
            </Avatar>
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
                +
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="font-inter font-medium text-gray-700 ml-4">+50 Clientes</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
