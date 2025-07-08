
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Benefits from '@/components/Benefits';
import Servicios from '@/components/Servicios';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhyChooseUs />
      <Benefits />
      <Servicios />
    </div>
  );
};

export default Index;
