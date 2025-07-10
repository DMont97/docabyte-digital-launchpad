import React, { useState } from 'react';
import { Laptop } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PortfolioScrollDemo from '@/components/ui/portfolio-scroll-demo';

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  gradient: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      name: 'Vitalis',
      type: 'Sitio web profesional con chatbot integrado',
      description: 'Plataforma web integral para gestión de citas, historiales médicos y comunicación paciente-doctor. Incluye sistema de recordatorios automáticos y portal del paciente.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2',
      name: 'MediApp',
      type: 'Panel de control médico',
      description: 'Dashboard administrativo para monitoreo de pacientes, gestión de inventario médico y análisis de datos clínicos con reportes en tiempo real.',
      technologies: ['React', 'TypeScript', 'MongoDB', 'Chart.js'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: '3',
      name: 'Endoscopy Morelia',
      type: 'Clínica de atención médica',
      description: 'Sitio web especializado para clínica de endoscopia con sistema de agendamiento en línea, galería de procedimientos y información educativa para pacientes.',
      technologies: ['React', 'Supabase', 'Stripe', 'GSAP'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: '4',
      name: 'Dentista',
      type: 'Clínica dental',
      description: 'Plataforma completa para clínica dental que incluye gestión de tratamientos, seguimiento de ortodoncias y sistema de fotografías clínicas.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: '5',
      name: 'Dra. Alma Monroy',
      type: 'Consultorio privado',
      description: 'Sitio web profesional con sistema de citas en línea, blog médico y área privada para comunicación con pacientes. Diseño elegante y funcional.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: '6',
      name: 'Dra. Daniela Ramírez',
      type: 'Consultorio privado',
      description: 'Sistema de gestión integral para consultorio médico con análisis de métricas, control de inventario y seguimiento de tratamientos especializados.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts'],
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  console.log('Portfolio component rendering with', projects.length, 'projects');

  return (
    <>
      {/* Animated Portfolio Hero */}
      <PortfolioScrollDemo />
      
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => {
            // Define grid positioning for specific bento layout from reference
            const getGridClass = (index: number) => {
              switch(index) {
                case 0: // Vitalis - Top left large
                  return "lg:col-span-2 lg:row-span-1";
                case 1: // MediApp - Middle right large  
                  return "lg:col-span-2 lg:row-span-1";
                case 2: // Endoscopy - Top right medium
                  return "lg:col-span-1 lg:row-span-1";
                case 3: // Dentista - Bottom left large
                  return "lg:col-span-2 lg:row-span-1";
                case 4: // Dra. Alma - Bottom right medium
                  return "lg:col-span-1 lg:row-span-1";
                case 5: // Dra. Daniela - Middle left small
                  return "lg:col-span-1 lg:row-span-1";
                default:
                  return "lg:col-span-1 lg:row-span-1";
              }
            };

            const getHeightClass = (index: number) => {
              switch(index) {
                case 0: // Vitalis - Large
                  return "h-64 lg:h-48";
                case 1: // MediApp - Large
                  return "h-64 lg:h-48";
                case 2: // Endoscopy - Medium
                  return "h-64 lg:h-48";
                case 3: // Dentista - Large
                  return "h-64 lg:h-48";
                case 4: // Dra. Alma - Medium
                  return "h-64 lg:h-48";
                case 5: // Dra. Daniela - Small
                  return "h-64 lg:h-48";
                default:
                  return "h-64";
              }
            };

            const getOrder = (index: number) => {
              // Reorder projects to match the reference layout
              switch(index) {
                case 0: return "order-1"; // Vitalis - Top left
                case 2: return "order-2"; // Endoscopy - Top right
                case 5: return "order-3"; // Dra. Daniela - Middle left
                case 1: return "order-4"; // MediApp - Middle right
                case 3: return "order-5"; // Dentista - Bottom left
                case 4: return "order-6"; // Dra. Alma - Bottom right
                default: return "";
              }
            };

            const getTextSize = (index: number) => {
              const isFeatured = index === 0 || index === 3; // Vitalis and Dentista
              return {
                title: isFeatured ? "text-2xl lg:text-3xl" : "text-xl",
                type: isFeatured ? "text-base" : "text-sm",
                padding: isFeatured ? "p-8" : "p-6"
              };
            };

            const textStyles = getTextSize(index);

            return (
              <div key={project.id} className={`group ${getGridClass(index)} ${getOrder(index)}`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className={`relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border ${getHeightClass(index)}`}
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Project Background */}
                      <div className={`h-full bg-gradient-to-br ${project.gradient} relative`}>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />
                        
                        {/* Content */}
                        <div className={`absolute bottom-0 left-0 right-0 ${textStyles.padding} text-white`}>
                          <h3 className={`font-sans font-bold ${textStyles.title} mb-3`}>
                            {project.name}
                          </h3>
                          <p className={`text-white/80 ${textStyles.type} mb-4`}>
                            {project.type}
                          </p>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-gray-900"
                          >
                            Ver proyecto
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-foreground">
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
                            className="bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          );
          })}
        </div>
        
      </div>
    </section>
    </>
  );
};

export default Portfolio;