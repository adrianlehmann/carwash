import { Droplets, Facebook, Instagram } from 'lucide-react';
import { SiGoogle } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b111a] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg text-white">
                <Droplets size={24} />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Crystal Clean
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Spotless Every Time. Joplin's premier 24/7 destination for touchless, soft-touch, and self-service car washing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <SiGoogle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#wash-options" className="hover:text-primary transition-colors">Wash Options</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Amenities</h4>
            <ul className="space-y-3 text-white/70">
              <li>Automatic Bays</li>
              <li>Self-Service Bays</li>
              <li>Vacuum Stations</li>
              <li>Floor Mat Cleaning</li>
              <li>Spot-Free Rinse</li>
              <li>Hot Water Wash</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <div className="text-white font-medium mb-1">Address</div>
                2202 S Main St<br/>Joplin, MO 64804
              </li>
              <li>
                <div className="text-white font-medium mb-1">Phone</div>
                (417) 624-8717
              </li>
              <li>
                <div className="text-white font-medium mb-1">Hours</div>
                <span className="text-accent font-medium">Open 24/7</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {currentYear} Crystal Clean Car Wash. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
