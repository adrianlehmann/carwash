import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import ctaImg from '@assets/generated_images/cta.jpg';

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaImg} 
          alt="Water droplets on vehicle" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Ready for a Crystal Clean Shine?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Stop by anytime — day or night — and experience one of Joplin's favorite car washes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <MapPin size={20} />
              Get Directions
            </a>
            <a
              href="tel:4176248717"
              className="flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
