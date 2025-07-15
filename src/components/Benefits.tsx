import React from 'react';
import { Stethoscope, Clock, CalendarCheck, Activity } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const Benefits = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Aumenta tu presencia profesional",
      description: "Con una página web bien diseñada, tus pacientes podrán encontrarte fácilmente y confiar en tu trabajo desde el primer clic."
    },
    {
      icon: Clock,
      title: "Atiende incluso cuando no estás disponible",
      description: "Con chatbots personalizados, tus pacientes reciben respuestas rápidas las 24 horas, sin que tú estés frente al teléfono."
    },
    {
      icon: CalendarCheck,
      title: "Adiós al papeleo agotador",
      description: "Automatizamos tu agenda, tus registros y los procesos administrativos, para que puedas enfocarte en lo más importante: tus pacientes."
    },
    {
      icon: Activity,
      title: "Tecnología que trabaja por ti",
      description: "Diseñamos sistemas inteligentes que optimizan tu consulta y mejoran la experiencia del paciente desde el primer contacto."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Section Header */}
        <SectionHeader 
          smallTitle="BENEFICIOS MÉDICOS"
          mainTitle="Beneficios para el doctor"
          icon={Stethoscope}
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="benefit-card group relative bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105 transition-all duration-300 hover:bg-white/80"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
