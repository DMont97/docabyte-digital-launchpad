
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Benefits from '@/components/Benefits';
import Servicios from '@/components/Servicios';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import bgGradient from '@/assets/bg-gradient.png';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <Servicios />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      {/* CONTENEDOR CON FONDO */}
      <section
        style={{
          backgroundImage: `url(${bgGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="rounded-t-[48px] overflow-visible"
      >
        <CTA />
        <Footer />
      </section>
    </div>
  );
};

export default Index;
