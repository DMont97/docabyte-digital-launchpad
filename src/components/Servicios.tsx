
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

    // Set initial states for all cards (hidden)
    gsap.set(cards, {
      opacity: 0,
      scale: 0.8,
      yPercent: 20,
      willChange: 'transform, opacity'
    });

    // Create pinned scroll effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400%", // 4x viewport height for 4 cards
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        refreshPriority: 1
      }
    });

    // Animate each card to appear at different points in the timeline
    cards.forEach((card, index) => {
      const startTime = index * 0.25; // 0, 0.25, 0.5, 0.75
      const endTime = startTime + 0.25; // Duration of each card animation

      tl.to(card, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        duration: 0.25,
        ease: "power2.out"
      }, startTime);
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

        {/* Services Cards Container with Absolute Positioning */}
        <div 
          ref={containerRef}
          className="relative h-96 md:h-[500px] lg:h-[600px]"
        >
          {servicios.map((servicio, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="absolute inset-0 group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{
                willChange: 'transform, opacity',
                zIndex: servicios.length - index // Stack cards with highest index on top initially
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${servicio.image})`,
                }}
              />
              
              {/* Overlay for better text readability - lighter for first card */}
              <div className={`absolute inset-0 ${
                index === 0 
                  ? 'bg-gradient-to-r from-gray-900/40 to-gray-800/30' 
                  : 'bg-gradient-to-r from-gray-900/50 to-gray-900/40'
              }`} />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full max-w-2xl mx-auto px-8 md:px-12 text-center md:text-left">
                  <h3 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight drop-shadow-lg">
                    {servicio.title}
                  </h3>
                  <p className="font-inter text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow-md">
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
