import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2B65D9] to-[#66C7F4] p-16 md:p-20 shadow-2xl"
        >
          {/* Meteor Effect Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <Meteors number={25} className="opacity-90" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
            >
              La salud digital no es el futuro. Es el presente.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Da el siguiente paso en la transformación de tu clínica o consultorio.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-12 py-8 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
              >
                Agendar Llamada
              </Button>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;