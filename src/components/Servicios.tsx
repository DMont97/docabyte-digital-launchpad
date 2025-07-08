import React, { useEffect, useRef } from 'react';
import { Hospital } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './ui/SectionHeader';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Servicios = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
    const container = containerRef.current;
    const cards = cardsRef.current;
    
    if (!section || !container || cards.length === 0) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial states
    cards.forEach((card, index) => {
      if (index === 0) {
        // First card starts in its final position
        gsap.set(card, {
          y: 0,
          opacity: 1,
          zIndex: 1
        });
      } else {
        // Other cards start from bottom, off-screen
        gsap.set(card, {
          y: window.innerHeight,
          opacity: 1,
          zIndex: index + 1
        });
      }
    });

    // Create main timeline with pinning
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Animate each card sliding up to its final position
    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first card as it's already positioned
      
      const animationStart = (index - 1) * 0.3; // Stagger animations
      
      mainTL.to(card, {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, animationStart);
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

        {/* Services Cards Container */}
        <div 
          ref={containerRef}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] mx-auto max-w-4xl"
        >
          {servicios.map((servicio, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="absolute left-0 right-0 h-full group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                bottom: `${index * 20}px`,
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
              
              {/* Consistent solid overlay */}
              <div className="absolute inset-0 bg-gray-900/30" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full max-w-2xl mx-auto px-8 md:px-12 text-center md:text-left">
                  <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-2xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    {servicio.title}
                  </h3>
                  <p className="font-inter text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl drop-shadow-xl" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                    {servicio.description}
                  </p>
                </div>
              </div>

              {/* Enhanced hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-300" />
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
