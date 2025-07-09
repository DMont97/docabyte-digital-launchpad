import React, { useState } from 'react';
import { Laptop } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chatbot con IA'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: '6',
      name: 'Dra. Daniela Ramírez',
      type: 'Sitio web profesional con chatbot',
      description: 'Página web para consultorio odontológico enfocada en mostrar los servicios de la doctora, facilitar la solicitud de citas de forma intuitiva y automatizar respuestas frecuentes mediante un chatbot integrado que mejora la experiencia de los pacientes.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chatbot con IA'],
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  console.log('Portfolio component rendering with', projects.length, 'projects');

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          smallTitle="NUESTRO TRABAJO"
          mainTitle="Proyectos que hemos desarrollado"
          icon={Laptop}
        />
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div 
                    className="relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border h-80"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Background */}
                    <div className={`h-full bg-gradient-to-br ${project.gradient} relative`}>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40" />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-sans font-bold text-xl mb-3">
                          {project.name}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
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
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;