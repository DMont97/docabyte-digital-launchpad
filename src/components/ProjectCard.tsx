import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 1;

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""} items-center bg-white bg-blue-50 rounded-2xl shadow-md p-6 gap-6 md:gap-10 mb-10`}
      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Slider de imágenes */}
      <motion.div className="w-full md:w-1/2">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="rounded-xl"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={project.title} className="w-full h-64 object-cover rounded-xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Columna informativa */}
      <motion.div className="w-full md:w-1/2 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-blue-900">{project.title}</h3>
        <h4 className="text-lg text-blue-600">{project.subtitle}</h4>
        <p className="text-gray-700">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}; 