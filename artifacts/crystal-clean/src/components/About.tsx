import { motion } from 'framer-motion';
import aboutImg from '@assets/generated_images/about.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] transform rotate-3" />
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] transform -rotate-2" />
              <img 
                src={aboutImg} 
                alt="Crystal Clean Car Wash Facility" 
                className="relative rounded-[1.5rem] shadow-xl w-full aspect-square object-cover"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-border">
                <div className="text-4xl font-heading font-bold text-primary mb-1">24/7</div>
                <div className="text-sm font-medium text-foreground">Clean, well-lit, and always open.</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              A Better Car Wash Experience in Joplin
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Crystal Clean Car Wash has earned a reputation for providing a cleaner vehicle at a better value. Whether you're looking for the convenience of an automatic wash or prefer the control of a self-service bay, our facility is designed to help you achieve professional-quality results.
              </p>
              <p>
                Drivers appreciate our well-maintained equipment, powerful vacuums, hot water, spot-free rinse, and clean facility. We believe that taking care of your car shouldn't be a chore—it should be satisfying.
              </p>
              <p>
                Open 24 hours a day, every day, we're here whenever your vehicle needs attention. Stop by and experience the difference of a car wash that truly cares about the details.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-bold mb-1">Location</span>
                <span className="text-foreground font-medium font-heading">2202 S Main St, Joplin, MO</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
