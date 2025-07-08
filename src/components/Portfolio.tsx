import React, { useEffect, useRef, useState } from 'react';
import { Laptop } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '@/components/ui/SectionHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  image: string;
}

const Portfolio = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      name: 'Vitalis',
      type: 'Clínica de atención médica',
      description: 'Plataforma web integral para gestión de citas, historiales médicos y comunicación paciente-doctor. Incluye sistema de recordatorios automáticos y portal del paciente.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      image: '/placeholder.svg' // Will be replaced with actual image
    },
    {
      id: '2',
      name: 'MediApp',
      type: 'Panel de control médico',
      description: 'Dashboard administrativo para monitoreo de pacientes, gestión de inventario médico y análisis de datos clínicos con reportes en tiempo real.',
      technologies: ['React', 'TypeScript', 'MongoDB', 'Chart.js'],
      image: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Endoscopy Morelia',
      type: 'Clínica de atención médica',
      description: 'Sitio web especializado para clínica de endoscopia con sistema de agendamiento en línea, galería de procedimientos y información educativa para pacientes.',
      technologies: ['React', 'Supabase', 'Stripe', 'GSAP'],
      image: '/placeholder.svg'
    },
    {
      id: '4',
      name: 'Dentista',
      type: 'Clínica dental',
      description: 'Plataforma completa para clínica dental que incluye gestión de tratamientos, seguimiento de ortodoncias y sistema de fotografías clínicas.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
      image: '/placeholder.svg'
    },
    {
      id: '5',
      name: 'Dra. Alma Monroy',
      type: 'Consultorio privado',
      description: 'Sitio web profesional con sistema de citas en línea, blog médico y área privada para comunicación con pacientes. Diseño elegante y funcional.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: '/placeholder.svg'
    },
    {
      id: '6',
      name: 'Dra. Daniela Ramírez',
      type: 'Dashboard administrativo',
      description: 'Sistema de gestión integral para consultorio médico con análisis de métricas, control de inventario y seguimiento de tratamientos especializados.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts'],
      image: '/placeholder.svg'
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    // GSAP animations for cards
    gsap.from(".portfolio-card", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards,
        start: "top 85%",
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    
    // GSAP animation for modal
    gsap.from(".dialog-content", {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          smallTitle="NUESTRO TRABAJO"
          mainTitle="Proyectos que hemos desarrollado"
          icon={Laptop}
        />
        
        {/* Portfolio Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="portfolio-card group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/20"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm"
                    >
                      Ver proyecto
                    </Button>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl" />
                    <div className="absolute inset-0 shadow-[0_0_30px_rgba(6,182,212,0.3)] rounded-2xl" />
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="dialog-content max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-foreground">
                    {project.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Project Type */}
                  <div>
                    <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">
                      Tipo de Cliente
                    </h4>
                    <p className="text-foreground font-medium">
                      {project.type}
                    </p>
                  </div>
                  
                  {/* Project Description */}
                  <div>
                    <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-2">
                      Descripción
                    </h4>
                    <p className="text-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-3">
                      Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;