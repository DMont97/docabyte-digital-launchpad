import React, { useEffect, useRef } from 'react';
import { Heart, Laptop, BadgeCheck, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './ui/SectionHeader';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const reasons = [
    {
      icon: Heart,
      title: "Especialistas en salud",
      description: "Conocemos los retos de doctores, clínicas y consultorios. Creamos tecnología que se adapta a tu ritmo."
    },
    {
      icon: Laptop,
      title: "Enfoque 100% digital y automatizado",
      description: "Desde la web hasta tu agenda, conectamos todo para que trabajes mejor."
    },
    {
      icon: BadgeCheck,
      title: "Resultados reales",
      description: "Nuestros clientes han mejorado su visibilidad, agendado más citas y reducido su carga operativa."
    },
    {
      icon: Users,
      title: "Acompañamiento personalizado",
      description: "No solo entregamos el proyecto, te guiamos para sacarle el máximo provecho."
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    if (cards.length === 0) return;

    // GSAP fade-up animation with stagger
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 85%",
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader 
          smallTitle="NUESTRA PROPUESTA"
          mainTitle="¿Por qué elegir a Docabyte?"
          icon={BadgeCheck}
        />

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                ref={addToRefs}
                className="docabyte-reason group relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300 hover:bg-white/90"
              >
                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {/* Floating Icon with Glow */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:animate-pulse">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="font-heading font-bold text-xl text-gray-800 mb-4 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed text-sm">
                    {reason.description}
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

export default WhyChooseUs;