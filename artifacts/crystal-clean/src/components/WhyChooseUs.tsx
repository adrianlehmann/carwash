import { motion } from 'framer-motion';
import { Clock, Droplet, Waves, Sparkles, Wind, Coins, BadgeCheck, Thermometer } from 'lucide-react';

const FEATURES = [
  {
    icon: <Clock size={28} />,
    title: "Open 24/7",
    description: "Wash your vehicle whenever it's convenient for you, day or night."
  },
  {
    icon: <Droplet size={28} />,
    title: "Touchless Wash",
    description: "Protect your delicate paint with a gentle touch-free cleaning option."
  },
  {
    icon: <Waves size={28} />,
    title: "Soft-Touch Wash",
    description: "Deep cleaning using modern soft-touch technology for everyday vehicles."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Self-Service Bays",
    description: "Take your time and clean every detail with our professional equipment."
  },
  {
    icon: <Wind size={28} />,
    title: "Powerful Vacuums",
    description: "Strong suction to leave your interior spotless and crumb-free."
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Spot-Free Rinse",
    description: "Our purified water leaves no water spots. No streaks. Just shine."
  },
  {
    icon: <Thermometer size={28} />,
    title: "Hot Water Wash",
    description: "Better cleaning performance that cuts through tough road grime."
  },
  {
    icon: <Coins size={28} />,
    title: "Credit & Coin",
    description: "Convenient payment options for everyone, including tap-to-pay."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">The Crystal Clean Difference</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">Why Drivers Choose Crystal Clean</h3>
          <p className="text-lg text-muted-foreground">
            We're not just another car wash. We provide top-tier equipment, reliable service, and premium cleaning products to ensure your vehicle looks its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow hover:border-primary/20 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3 font-heading">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
