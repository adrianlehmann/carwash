import { useState, useEffect } from 'react';
import { Menu, X, Droplets, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#wash-options' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-2 z-50 group"
        >
          <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            <Droplets size={24} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            Crystal Clean
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground/80' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:4176248717"
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            <Phone size={16} />
            (417) 624-8717
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden z-50 p-2 rounded-md ${
            isMobileMenuOpen 
              ? 'text-foreground' 
              : isScrolled ? 'text-foreground' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl pt-24 pb-8 px-6 flex flex-col gap-6 lg:hidden border-b border-border z-40"
            >
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-4 pt-4">
                <a
                  href="tel:4176248717"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium w-full shadow-md"
                >
                  <Phone size={18} />
                  Call (417) 624-8717
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
