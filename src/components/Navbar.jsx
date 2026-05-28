import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy/85 backdrop-blur-md border-b border-gold/15 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex flex-col select-none">
            <span className="text-2xl font-playfair font-black tracking-widest text-gold text-shadow-gold">
              SDM WORK
            </span>
            <span className="text-[10px] tracking-[0.25em] text-beige-dark uppercase -mt-1 font-semibold">
              We Work, You Relax
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-beige-light/80 hover:text-gold transition-colors duration-300 text-sm tracking-wider uppercase font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:9739988032"
              className="gold-button inline-flex items-center space-x-2 text-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: 9739988032</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-beige-light hover:text-gold p-1 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-navy/95 backdrop-blur-lg z-40 border-t border-gold/10 md:hidden flex flex-col justify-between p-8"
          >
            <div className="flex flex-col space-y-6 text-center pt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-playfair font-semibold text-beige-light hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 items-center pb-12">
              <span className="text-xs uppercase tracking-widest text-beige-dark">
                Available 24/7 in Bangalore
              </span>
              <a
                href="tel:9739988032"
                className="gold-button w-full text-center flex items-center justify-center space-x-2 py-4"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call 9739988032</span>
              </a>
              <div className="flex flex-col text-center text-xs text-beige-light/60 space-y-1">
                <span>Alt: 7019820571</span>
                <span>muruganmuruga@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
