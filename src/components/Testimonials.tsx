import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    quote: "Docabyte transformó la manera en que gestiono mi clínica.",
    name: "Dra. Laura Méndez",
    title: "Odontóloga General",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "El chatbot que nos implementaron ha reducido el tiempo que pasamos contestando mensajes.",
    name: "Dr. Rodrigo Sánchez",
    title: "Clínica de Medicina Familiar",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Mi página web no solo se ve profesional, sino que facilita que mis pacientes agenden en línea.",
    name: "Dra. Fernanda Gómez",
    title: "Dermatóloga",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "El sistema de recordatorios automáticos nos ha ayudado a reducir inasistencias.",
    name: "Dr. Carlos Ibáñez",
    title: "Clínica Integral de Especialidades",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "El equipo de Docabyte entendió mis necesidades y las resolvió con tecnología simple pero poderosa.",
    name: "Dra. Sofía Peña",
    title: "Ginecóloga",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    quote: "Desde que tengo mi plataforma con Docabyte, he ganado más visibilidad y pacientes.",
    name: "Dr. Mauricio Torres",
    title: "Cardiólogo",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  }
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-80 md:w-96 mx-4">
    <div className="bg-gradient-to-br from-[#F0F7FF] to-[#E4ECFB] border border-[#D4D4D8] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      {/* Quote */}
      <blockquote className="text-slate-700 font-medium text-lg mb-6 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      
      {/* Doctor Info */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <h4 className="font-semibold text-slate-800 text-base">
            {testimonial.name}
          </h4>
          <p className="text-slate-600 text-sm">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <SectionHeader
          smallTitle="TESTIMONIOS DE NUESTROS CLIENTES"
          mainTitle="Lo que dicen los profesionales de salud sobre Docabyte"
          icon={Handshake}
          className="mb-16"
        />
        
        {/* Infinite Scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -100 * testimonials.length + "%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60, // Slow and smooth
                ease: "linear",
              },
            }}
            whileHover={{
              animationPlayState: "paused"
            }}
            style={{
              width: `${duplicatedTestimonials.length * 400}px`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial} 
              />
            ))}
          </motion.div>
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Testimonials;