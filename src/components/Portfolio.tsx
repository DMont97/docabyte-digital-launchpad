import React, { useState } from 'react';
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
  image: string;
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
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      name: 'MediApp',
      type: 'Panel de control médico',
      description: 'Dashboard administrativo para monitoreo de pacientes, gestión de inventario médico y análisis de datos clínicos con reportes en tiempo real.',
      technologies: ['React', 'TypeScript', 'MongoDB', 'Chart.js'],
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Endoscopy Morelia',
      type: 'Clínica de atención médica',
      description: 'Sitio web especializado para clínica de endoscopia con sistema de agendamiento en línea, galería de procedimientos y información educativa para pacientes.',
      technologies: ['React', 'Supabase', 'Stripe', 'GSAP'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop'
    },
    {
      id: '4',
      name: 'Dentista',
      type: 'Clínica dental',
      description: 'Plataforma completa para clínica dental que incluye gestión de tratamientos, seguimiento de ortodoncias y sistema de fotografías clínicas.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop'
    },
    {
      id: '5',
      name: 'Dra. Alma Monroy',
      type: 'Consultorio privado',
      description: 'Sitio web profesional con sistema de citas en línea, blog médico y área privada para comunicación con pacientes. Diseño elegante y funcional.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      gradient: 'from-indigo-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop'
    },
    {
      id: '6',
      name: 'Dra. Daniela Ramírez',
      type: 'Consultorio privado',
      description: 'Sistema de gestión integral para consultorio médico con análisis de métricas, control de inventario y seguimiento de tratamientos especializados.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts'],
      gradient: 'from-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=400&fit=crop'
    }
  ];

  const getAnimationClass = (index: number) => {
    const animationClasses = [
      'animate-slide-in-left',           // Project 0
      'animate-slide-in-right-delay-400', // Project 1  
      'animate-slide-in-left-delay-600',  // Project 2
      'animate-slide-in-right-delay-800', // Project 3
      'animate-slide-in-left-delay-1000', // Project 4
      'animate-slide-in-right'           // Project 5
    ];
    return animationClasses[index] || 'animate-slide-in-left';
  };

  return (
    <>
      {/* Animated Portfolio Hero */}
      <PortfolioScrollDemo />
      
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Portfolio Projects */}
          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => {
              const isImageLeft = index % 2 === 0;
              
              return (
                <div 
                  key={project.id} 
                  className={`${getAnimationClass(index)} opacity-0 [animation-fill-mode:forwards]`}
                >
                  <Dialog>
                    <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                      
                      {/* Image Section */}
                      <div className="w-full lg:w-1/2">
                        <DialogTrigger asChild>
                          <div 
                            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                            onClick={() => setSelectedProject(project)}
                          >
                            {/* Background Image */}
                            <div className="relative aspect-[4/3]">
                              <img 
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Gradient Overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                              
                              {/* Content Overlay */}
                              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                                  {project.name}
                                </h3>
                                <p className="text-white/90 mb-4">
                                  {project.type}
                                </p>
                                <Button 
                                  variant="secondary" 
                                  size="sm"
                                  className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-gray-900 w-fit"
                                >
                                  Ver proyecto
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogTrigger>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 space-y-6">
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            {project.name}
                          </h3>
                          <p className="text-lg text-muted-foreground mb-6">
                            {project.type}
                          </p>
                          <p className="text-foreground leading-relaxed text-lg">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider mb-3">
                            Tecnologías Utilizadas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
                                variant="secondary"
                                className="bg-secondary text-secondary-foreground px-3 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <DialogTrigger asChild>
                          <Button 
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => setSelectedProject(project)}
                          >
                            Ver detalles del proyecto
                          </Button>
                        </DialogTrigger>
                      </div>

                    </div>

                    {/* Modal Dialog */}
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
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex}
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