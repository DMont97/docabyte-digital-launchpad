
import React, { useEffect, useRef } from 'react';
import { Hospital } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './ui/SectionHeader';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Servicios = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const servicios = [
    {
      title: "Páginas web médicas",
      description: "Diseñadas para mostrar tu experiencia, atraer pacientes y facilitar agendamiento.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Chatbots inteligentes", 
      description: "Responden dudas, agendan citas y captan pacientes mientras tú estás ocupado.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Automatización de procesos",
      description: "Digitaliza tu agenda, formularios y notificaciones para ahorrar tiempo.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Apps para gestión clínica",
      description: "Control total de tu consulta desde tu celular: pacientes, pagos y más.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    if (cards.length === 0) return;

    // Set initial states
    gsap.set(cards, {
      opacity: 0,
      y: 60,
      zIndex: 0
    });

    // Create scroll-triggered animation for each card
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        zIndex: index + 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
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
    <section 
      ref={sectionRef}
      id="servicios"
      className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader 
          smallTitle="SERVICIOS MÉDICOS"
          mainTitle="Servicios digitales enfocados en el sector salud"
          icon={Hospital}
        />

        {/* Services Cards */}
        <div className="space-y-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative group h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${servicio.image})`,
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full max-w-2xl mx-auto px-8 md:px-12 text-center md:text-left">
                  <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                    {servicio.title}
                  </h3>
                  <p className="font-inter text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                    {servicio.description}
                  </p>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
