import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import gal1 from '@assets/generated_images/gallery_1.jpg';
import gal2 from '@assets/generated_images/gallery_2.jpg';
import gal3 from '@assets/generated_images/gallery_3.jpg';
import gal4 from '@assets/generated_images/gallery_4.jpg';
import gal5 from '@assets/generated_images/gallery_5.jpg';
import gal6 from '@assets/generated_images/gallery_6.jpg';
import gal7 from '@assets/generated_images/gallery_7.jpg';
import gal8 from '@assets/generated_images/gallery_8.jpg';

const IMAGES = [
  { id: 1, src: gal1, alt: "Close-up of water droplets on a freshly washed black car hood", category: "Results" },
  { id: 2, src: gal2, alt: "White pickup truck gleaming clean", category: "Results" },
  { id: 3, src: gal3, alt: "Red sports car just out of a car wash tunnel", category: "Automatic" },
  { id: 4, src: gal4, alt: "Interior of a car wash bay", category: "Automatic" },
  { id: 5, src: gal5, alt: "Aerial view of a clean car wash facility exterior at night", category: "Facility" },
  { id: 6, src: gal6, alt: "Silver luxury SUV at a self-service bay", category: "Self-Service" },
  { id: 7, src: gal7, alt: "Before and after style clean car", category: "Results" },
  { id: 8, src: gal8, alt: "Blue car with gleaming water droplets", category: "Results" },
];

const CATEGORIES = ["All", "Automatic", "Self-Service", "Results", "Facility"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "All" 
    ? IMAGES 
    : IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">See the Results</h3>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-foreground hover:bg-white/80 border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
