import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-border">
          
          <div className="lg:w-2/5 p-10 md:p-16 bg-[#001D3D] text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Get in Touch</h2>
            <p className="text-white/70 mb-12 text-lg">
              We're located in the heart of Joplin, Missouri. Stop by any time, day or night, for a premium wash.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-white">Location</h4>
                  <p className="text-white/80 leading-relaxed">
                    2202 S Main St<br />
                    Joplin, MO 64804
                  </p>
                  <a 
                    href="https://maps.google.com/?q=2202+S+Main+St,+Joplin,+MO+64804" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-secondary hover:text-white transition-colors text-sm font-medium mt-2 inline-block uppercase tracking-wider"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-white">Phone</h4>
                  <a href="tel:4176248717" className="text-white/80 hover:text-secondary transition-colors text-xl">
                    (417) 624-8717
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading mb-1 text-white">Hours</h4>
                  <p className="text-white/80 text-lg">
                    Open 24 Hours, Monday–Sunday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 h-[400px] lg:h-auto lg:min-h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.1!2d-94.5009!3d37.0509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzcuMDUwOew-OTQuNTAw!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, display: 'block', height: '100%' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Crystal Clean Car Wash Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
