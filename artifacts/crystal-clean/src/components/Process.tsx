import { motion } from 'framer-motion';
import { Navigation, Play, SprayCan, Wind, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    icon: <Navigation size={24} />,
    title: "Choose Your Wash",
    desc: "Select automatic or self-serve."
  },
  {
    icon: <Play size={24} />,
    title: "Drive In",
    desc: "Pull into the available bay."
  },
  {
    icon: <SprayCan size={24} />,
    title: "Wash & Clean",
    desc: "Use premium soaps and hot water."
  },
  {
    icon: <Wind size={24} />,
    title: "Vacuum & Finish",
    desc: "Dry off and clean the interior."
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Drive Away",
    desc: "Leave with a spotless shine."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-[#001D3D] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-wider uppercase mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">Wash Your Way</h3>
          <p className="text-white/70 text-lg">
            A seamless experience from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-[#001D3D] border-2 border-primary text-secondary flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(0,153,229,0.3)]">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold font-heading mb-2">{step.title}</h4>
                <p className="text-white/60 text-sm max-w-[180px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
