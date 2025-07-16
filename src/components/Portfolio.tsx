import React from 'react';
import PortfolioScrollDemo from '@/components/ui/portfolio-scroll-demo';
import { ProjectCard } from "./ProjectCard";
import docabyteImg from "../assets/docabyte-hero-image.jpg";
import vitalisDemoImg from "../assets/vitalis-demo.jpg";
import almaMonroyImg from "../assets/alma-monroy.png.png";
import danielaRamirezImg from "../assets/daniela-ramirez.png.png";
import dentistaImg from "../assets/dentista.png.png";
import vitalisImg from "../assets/vitalis.png.png";
import endoscopyImg from "../assets/endoscopy-morelia.png.png";
import mediappImg from "../assets/mediapp.png.png";
// import AppleCardsCarouselDemo from "./apple-cards-carousel-demo";

const projects = [
  {
    title: "Vitalis",
    subtitle: "Sitio web profesional con chatbot integrado",
    description: "Plataforma web integral para gestión de citas, historiales médicos y comunicación paciente-doctor. Incluye sistema de recordatorios automáticos y portal del paciente.",
    technologies: ["React", "Tailwind CSS"],
    images: [vitalisImg],
  },
  {
    title: "MediApp",
    subtitle: "Panel de control médico",
    description: "Dashboard administrativo para monitoreo de pacientes, gestión de inventario médico y análisis de datos clínicos con reportes en tiempo real.",
    technologies: ["React", "Tailwind CSS"],
    images: [mediappImg],
  },
  {
    title: "Endoscopy Morelia",
    subtitle: "Empresa de distribución de productos médicos",
    description: "Sitio web para venta de equipo médico especializado en Morelia.",
    technologies: ["React", "Tailwind CSS"],
    images: [endoscopyImg],
  },
  {
    title: "Dra. Alma Monroy",
    subtitle: "Consultorio privado",
    description: "Página web para consultorio privado.",
    technologies: ["React", "Tailwind CSS"],
    images: [almaMonroyImg],
  },
  {
    title: "Dra. Daniela Ramírez",
    subtitle: "Consultorio privado",
    description: "Página web para consultorio privado.",
    technologies: ["React", "TailwindCSS"],
    images: [danielaRamirezImg],
  },
  {
    title: "Dentista",
    subtitle: "Clínica Dental",
    description: "Plataforma completa para clínica dental que incluye gestión de tratamientos y seguimiento de citas",
    technologies: ["React", "TailwindCSS"],
    images: [dentistaImg],
  },
  
  
  
];

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-10">
      {/* Encabezado y animación original */}
      <PortfolioScrollDemo />

      {/* Cards modernas debajo */}
      <div className="max-w-6xl mx-auto px-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      {/* Carousel Apple Cards Demo debajo de las cards */}
      {/* <AppleCardsCarouselDemo /> */}
    </section>
  );
}