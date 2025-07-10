import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2B65D9] to-[#66C7F4] p-12 shadow-2xl"
        >
          {/* Meteor Effect Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <Meteors number={15} className="opacity-70" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-semibold mb-6 leading-tight"
            >
              La salud digital no es el futuro. Es el presente.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
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
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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