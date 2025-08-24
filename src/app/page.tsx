import Hero from '@/components/Hero';
import About from '@/components/About';
import HopeHospital from '@/components/HopeHospital';
import Services from '@/components/Services';
import NewsInsights from '@/components/NewsInsights';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <HopeHospital />
      <Services />
      <NewsInsights />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
