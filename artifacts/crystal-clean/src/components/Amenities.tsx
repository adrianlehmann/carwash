import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const AMENITIES = [
  "Self-Service Wash Bays",
  "Automatic Wash Bays",
  "Spot-Free Rinse",
  "Vacuum Stations",
  "Floor Mat Cleaning Machine",
  "Air Dryers",
  "Foaming Brush",
  "Hot Water",
  "Trash Stations",
  "Credit Card Payments",
  "Coin Payments",
  "Well-Lit Facility",
  "Open 24 Hours"
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Everything You Need, All in One Place</h2>
          <p className="text-muted-foreground text-lg">
            We've stocked our facility with the best equipment so you never have to compromise on your clean.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {AMENITIES.map((amenity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm border border-border text-foreground font-medium"
            >
              <ShieldCheck size={18} className="text-accent" />
              {amenity}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
