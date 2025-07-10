
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Benefits from '@/components/Benefits';
import Servicios from '@/components/Servicios';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

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
      <CTA />
    </div>
  );
};

export default Index;
