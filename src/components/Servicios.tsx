
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
      image: "https://www.freepik.es/foto-gratis/pagina-inicio-vista-pantalla-portatil_26538634.htm#fromView=search&page=1&position=3&uuid=5709e275-e1b1-43fb-9246-4d1d04c1bd43&query=medical+website"
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

    // Set initial states for layered stacking
    gsap.set(cards, {
      opacity: 0,
      scale: 0.95,
      zIndex: (index) => index + 1,
      willChange: 'transform, opacity'
    });

    // Create layered transition animations for each card
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          // Fade in current card with zoom effect
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            zIndex: index + 10,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onLeave: () => {
          // Fade out and scale down current card (moves backward)
          gsap.to(card, {
            opacity: 0.3,
            scale: 0.9,
            zIndex: index,
            duration: 0.6,
            ease: "power2.in"
          });
        },
        onEnterBack: () => {
          // Reverse animation when scrolling back up
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            zIndex: index + 10,
            duration: 0.8,
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          // Hide card when scrolling back up past it
          gsap.to(card, {
            opacity: 0,
            scale: 0.95,
            zIndex: index,
            duration: 0.6,
            ease: "power2.in"
          });
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

        {/* Services Cards with Layered Animation */}
        <div className="relative space-y-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative group h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                willChange: 'transform, opacity'
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${servicio.image})`,
                }}
              />
              
              {/* Overlay for better text readability */}
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

              {/* Enhanced hover effect border with depth */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-300" />
              
              {/* Subtle shadow for depth effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
