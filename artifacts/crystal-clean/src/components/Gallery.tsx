import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

import gal1Before from '@assets/generated_images/gallery_1_before.jpg';
import gal1After from '@assets/generated_images/gallery_1.jpg';
import gal2Before from '@assets/generated_images/gallery_2_before.jpg';
import gal2After from '@assets/generated_images/gallery_2.jpg';
import gal3 from '@assets/generated_images/gallery_3.jpg';
import gal4 from '@assets/generated_images/gallery_4.jpg';
import gal5 from '@assets/generated_images/gallery_5.jpg';
import gal6 from '@assets/generated_images/gallery_6.jpg';
import gal7Before from '@assets/generated_images/gallery_7_before.jpg';
import gal7After from '@assets/generated_images/gallery_7_after.jpg';
import gal8Before from '@assets/generated_images/gallery_8_before.jpg';
import gal8After from '@assets/generated_images/gallery_8.jpg';

type GalleryImage = {
  id: number;
  type: 'image';
  src: string;
  alt: string;
  category: string;
};

type GalleryBeforeAfter = {
  id: number;
  type: 'beforeAfter';
  before: string;
  after: string;
  alt: string;
  category: 'Results';
};

type GalleryItem = GalleryImage | GalleryBeforeAfter;

const IMAGES: GalleryItem[] = [
  {
    id: 1,
    type: 'beforeAfter',
    before: gal1Before,
    after: gal1After,
    alt: 'Water beading on freshly washed paint',
    category: 'Results',
  },
  {
    id: 2,
    type: 'beforeAfter',
    before: gal2Before,
    after: gal2After,
    alt: 'White pickup truck wash transformation',
    category: 'Results',
  },
  {
    id: 7,
    type: 'beforeAfter',
    before: gal7Before,
    after: gal7After,
    alt: 'Black sedan before and after wash',
    category: 'Results',
  },
  {
    id: 8,
    type: 'beforeAfter',
    before: gal8Before,
    after: gal8After,
    alt: 'Blue car door hydrophobic finish',
    category: 'Results',
  },
  { id: 3, type: 'image', src: gal3, alt: 'Red sports car just out of a car wash tunnel', category: 'Automatic' },
  { id: 4, type: 'image', src: gal4, alt: 'Interior of a car wash bay', category: 'Automatic' },
  { id: 6, type: 'image', src: gal6, alt: 'Silver luxury SUV at a self-service bay', category: 'Self-Service' },
  { id: 5, type: 'image', src: gal5, alt: 'Aerial view of a clean car wash facility exterior at night', category: 'Facility' },
];

const CATEGORIES = ['All', 'Results', 'Automatic', 'Self-Service', 'Facility'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    filter === 'All' ? IMAGES : IMAGES.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">See the Results</h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {CATEGORIES.map((cat) => (
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
                className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group shadow-sm"
              >
                {img.type === 'beforeAfter' ? (
                  <BeforeAfterSlider
                    beforeImage={img.before}
                    afterImage={img.after}
                  />
                ) : (
                  <button
                    type="button"
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setSelectedImage(img.src)}
                    aria-label={`View larger: ${img.alt}`}
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
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
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
