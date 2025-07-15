import React, { useEffect, useRef } from 'react';
import { Heart, Laptop, BadgeCheck, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import docabyteHeroImage from '@/assets/docabyte-hero-image.jpg';
import SectionHeader from '@/components/ui/SectionHeader';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const keyPoints = [
    {
      icon: Heart,
      title: "Especialistas en salud digital",
      description: "Entendemos los desafíos únicos del sector médico y desarrollamos soluciones tecnológicas específicamente diseñadas para profesionales de la salud."
    },
    {
      icon: Laptop,
      title: "Tecnología intuitiva y accesible",
      description: "Nuestras interfaces están diseñadas pensando en médicos ocupados, con flujos de trabajo optimizados y navegación simplificada."
    },
    {
      icon: BadgeCheck,
      title: "Resultados comprobados",
      description: "Más de 150 clínicas han mejorado su eficiencia operativa y aumentado su visibilidad online con nuestras soluciones."
    },
    {
      icon: Users,
      title: "Acompañamiento integral",
      description: "Te guiamos en cada paso del proceso, desde la implementación hasta el crecimiento sostenible de tu práctica médica."
    }
  ];

  useEffect(() => {
    const content = contentRef.current;
    const image = imageRef.current;
    
    if (!content || !image) return;

    // GSAP animations with stagger
    gsap.from(content.children, {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: content,
        start: "top 85%",
      }
    });

    gsap.from(image, {
      opacity: 0,
      x: 60,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 85%",
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          smallTitle="¿POR QUÉ ELEGIRNOS?"
          mainTitle="Lo que hace a Docabyte tu compañero tecnológico ideal"
          icon={Heart}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div ref={contentRef} className="space-y-8">
            {/* Key Points */}
            <div className="space-y-6">
              {keyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-heading font-semibold text-xl text-gray-800">
                        {point.title}
                      </h3>
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="relative">
              {/* Main Image */}
              <img 
                src={docabyteHeroImage} 
                alt="Docabyte - Soluciones tecnológicas para el sector médico"
                className="w-full h-auto rounded-2xl shadow-2xl shadow-cyan-500/20"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-3xl blur-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-15 blur-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;