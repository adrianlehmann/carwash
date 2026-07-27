import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: "Michael T.",
    text: "This was one of the cleanest and best-maintained car washes I've ever used. My BMW looked fantastic afterward.",
    rating: 5
  },
  {
    name: "Sarah K.",
    text: "The vacuums were incredibly powerful and the towels made it easy to finish every detail.",
    rating: 5
  },
  {
    name: "Josh R.",
    text: "My truck came out cleaner than expensive automatic washes that cost four times as much.",
    rating: 5
  },
  {
    name: "Amanda L.",
    text: "The spot-free rinse actually works. My truck dried without water spots.",
    rating: 5
  },
  {
    name: "The Henderson Family",
    text: "We stopped during a road trip and were impressed by the clean bays, hot water, and excellent equipment.",
    rating: 5
  },
  {
    name: "David M.",
    text: "The owner was responsive and genuinely cared about customer satisfaction.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">What Joplin Drivers Are Saying</h3>
          <div className="flex items-center justify-center gap-2 text-xl font-bold font-heading">
            <span className="text-4xl text-foreground">5.0</span>
            <div className="flex text-[#FFB800]">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-muted p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 rotate-180" size={48} />
              
              <div className="flex text-[#FFB800] mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6 italic relative z-10">
                "{review.text}"
              </p>
              
              <div className="font-bold text-foreground font-heading border-t border-border pt-4">
                — {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
