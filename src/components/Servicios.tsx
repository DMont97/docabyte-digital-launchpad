
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
      image: "/lovable-uploads/a789ff6e-be97-40fe-b2bf-0cc14d0e8081.png"
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
    const section = sectionRef.current;
    const cards = cardsRef.current;
    
    if (!section || cards.length === 0) return;

    // Set initial states - all cards hidden except setup
    gsap.set(cards, {
      opacity: 0,
      scale: 0.9,
      zIndex: 1,
      willChange: 'transform, opacity'
    });

    // Create the main scroll trigger that pins the section
    const mainTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * 4}`, // 4 cards = 4x viewport height
      pin: true,
      scrub: 1,
      refreshPriority: -1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const cardCount = cards.length;
        const cardProgress = progress * cardCount;
        
        cards.forEach((card, index) => {
          // Calculate when this card should be active
          const cardStart = index;
          const cardEnd = index + 1;
          
          if (cardProgress >= cardStart && cardProgress < cardEnd) {
            // This card is currently active
            const localProgress = cardProgress - cardStart;
            gsap.to(card, {
              opacity: 1,
              scale: 1,
              zIndex: index + 10,
              duration: 0.3,
              ease: "power2.out"
            });
          } else if (cardProgress >= cardEnd) {
            // This card should fade out
            gsap.to(card, {
              opacity: 0,
              scale: 0.85,
              zIndex: index,
              duration: 0.3,
              ease: "power2.in"
            });
          } else {
            // This card hasn't appeared yet
            gsap.to(card, {
              opacity: 0,
              scale: 0.9,
              zIndex: index,
              duration: 0.3,
              ease: "power2.in"
            });
          }
        });
      }
    });

    // Cleanup function
    return () => {
      mainTrigger.kill();
      ScrollTrigger.refresh();
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

        {/* Services Cards Container */}
        <div className="relative h-64 md:h-80">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="absolute inset-0 group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
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
              
              {/* Enhanced Overlay for better contrast - especially for first card */}
              <div className={`absolute inset-0 ${
                index === 0 
                  ? 'bg-gradient-to-r from-gray-900/90 to-gray-800/80' 
                  : 'bg-gradient-to-r from-gray-900/80 to-gray-900/60'
              }`} />
              
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
