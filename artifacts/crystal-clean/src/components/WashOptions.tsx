import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import washImg from '@assets/generated_images/wash_options.jpg';

const OPTIONS = [
  {
    title: "Touchless Automatic",
    description: "Perfect for maintaining delicate paint finishes. High-pressure water jets clean without anything touching your vehicle.",
    features: ["No brushes touching paint", "High-pressure cleaning", "Premium soaps", "Spot-free rinse", "Air dry"],
    recommended: false
  },
  {
    title: "Soft-Touch Automatic",
    description: "Gentle yet thorough cleaning for everyday vehicles. Uses closed-cell foam media to safely lift off tough dirt.",
    features: ["Deep foam cleaning", "Safe on clear coats", "Wheel cleaning", "Triple foam polish", "Powerful air dry"],
    recommended: true
  },
  {
    title: "Self-Service Bays",
    description: "Take full control. Wash exactly how you want, targeting specific areas with professional-grade equipment.",
    features: ["Hot high-pressure wash", "Foaming brush", "Tire & engine cleaner", "Carnauba wax", "Handheld air dryer"],
    recommended: false
  }
];

export default function WashOptions() {
  return (
    <section id="wash-options" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Choose Your Wash</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you want the convenience of our state-of-the-art automatic bays or prefer to do it yourself, we have the right options to get your vehicle perfectly clean.
            </p>
            <p className="text-muted-foreground mb-8">
              We use only premium, industry-leading soaps, waxes, and spot-free water to ensure a flawless finish every time.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg font-heading">Vacuum Stations</h4>
                  <p className="text-sm text-muted-foreground">Professional-grade vacuums for a clean interior.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg font-heading">Floor Mat Cleaner</h4>
                  <p className="text-sm text-muted-foreground">Easy-to-use machine for fresh, clean floor mats.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img 
                src={washImg} 
                alt="Modern automatic car wash tunnel" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OPTIONS.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative rounded-2xl p-8 border ${
                option.recommended 
                  ? 'bg-[#001D3D] text-white border-primary shadow-xl shadow-primary/20' 
                  : 'bg-card text-card-foreground border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all'
              } flex flex-col h-full`}
            >
              {option.recommended && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h4 className={`text-2xl font-bold font-heading mb-4 ${option.recommended ? 'text-white' : 'text-foreground'}`}>
                {option.title}
              </h4>
              <p className={`mb-8 flex-grow ${option.recommended ? 'text-white/80' : 'text-muted-foreground'}`}>
                {option.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {option.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check size={18} className={`shrink-0 mt-0.5 ${option.recommended ? 'text-secondary' : 'text-primary'}`} />
                    <span className={`text-sm ${option.recommended ? 'text-white/90' : 'text-foreground'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
