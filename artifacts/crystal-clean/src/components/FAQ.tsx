import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "What is the difference between touchless and soft-touch?",
    a: "Touchless uses high-pressure water jets and premium detergents with no physical contact, ideal for protecting delicate paint. Soft-touch uses gentle, closed-cell foam media that physically contacts the surface for a deeper, more thorough clean."
  },
  {
    q: "Are you open 24 hours?",
    a: "Yes! Crystal Clean Car Wash is fully operational and open 24 hours a day, 7 days a week, 365 days a year."
  },
  {
    q: "Do you accept credit cards?",
    a: "Yes, we accept all major credit cards as well as coin payments in all our bays and at the vacuums."
  },
  {
    q: "Do you have self-service wash bays?",
    a: "Yes! Our self-service bays include high-pressure wash, foaming brush, tire/engine soap, wax, spot-free rinse, and an in-bay air dryer."
  },
  {
    q: "Do you offer vacuums?",
    a: "Yes, we have professional-grade vacuum stations available with high suction power to clean your interior."
  },
  {
    q: "Do you have a spot-free rinse?",
    a: "Absolutely — it's one of our most popular features. Our spot-free water goes through a reverse osmosis filtration system, leaving your vehicle streak-free without towel drying."
  },
  {
    q: "Can I wash large trucks or SUVs?",
    a: "Yes, our large self-service bays and automatic tunnels accommodate standard trucks, SUVs, and most large passenger vehicles easily."
  },
  {
    q: "Do you offer waxing?",
    a: "Yes, premium car wax is available as part of our automatic wash packages, and Carnauba wax is available in all self-service bays."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Got Questions?</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-heading font-bold text-lg text-foreground pr-8">{faq.q}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed border-t border-border mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
