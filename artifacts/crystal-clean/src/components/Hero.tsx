import { motion } from 'framer-motion';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import heroImg from '@assets/generated_images/hero.jpg';

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const trustBadges = [
    "Open 24 Hours",
    "Touchless & Soft-Touch Washes",
    "Self-Service Bays",
    "Vacuums Available",
    "Credit Cards Accepted"
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-zinc-900">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Luxury SUV fresh from car wash" 
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open 24 Hours in Joplin, MO
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Get a Spotless Shine — <br />
              <span className="text-secondary">Any Time, Day or Night</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Crystal Clean Car Wash offers both touchless and soft-touch automatic washes, self-service wash bays, powerful vacuums, and premium cleaning equipment — all available 24 hours a day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                <MapPin size={20} />
                Get Directions
              </a>
              <a
                href="tel:4176248717"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:border-white/50"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((badge, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.5 }}
                  className="flex items-center gap-2 text-white/80 text-sm font-medium"
                >
                  <CheckCircle2 size={16} className="text-accent" />
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
