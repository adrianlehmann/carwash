import { Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import WashOptions from './components/WashOptions';
import Amenities from './components/Amenities';
import About from './components/About';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import CTABanner from './components/CTABanner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-foreground bg-background">
      <Header />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <WashOptions />
        <Amenities />
        <About />
        <Process />
        <Gallery />
        <Reviews />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating Mobile Action Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:4176248717"
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 transition-colors"
          aria-label="Call Now"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;
