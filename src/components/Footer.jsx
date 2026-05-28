import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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
      <footer className="bg-navy-deep border-t border-gold/15 pt-16 pb-24 md:pb-12 relative z-20 text-left">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <span className="text-2xl font-playfair font-black tracking-widest text-gold text-shadow-gold select-none">
              SDM WORK
            </span>
            <p className="text-sm text-beige-light/60 font-light leading-relaxed">
              We Work, You Relax. Your home's safety, aesthetics, and structural durability are our direct responsibility. Providing premium services across Bangalore for 25 years.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-navy hover:bg-gold/10 border border-gold/15 hover:border-gold/40 flex items-center justify-center text-gold transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy hover:bg-gold/10 border border-gold/15 hover:border-gold/40 flex items-center justify-center text-gold transition-all duration-300">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-navy hover:bg-gold/10 border border-gold/15 hover:border-gold/40 flex items-center justify-center text-gold transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-gold font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-beige-light/70 font-light">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-gold transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-gold transition-colors duration-200">About Company</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-gold transition-colors duration-200">Project Gallery</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-gold transition-colors duration-200">Request inspection</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-gold font-bold">Our Services</h4>
            <ul className="space-y-2 text-sm text-beige-light/70 font-light">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-gold transition-colors duration-200">House Painting</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-gold transition-colors duration-200">Water Proofing</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-gold transition-colors duration-200">White Wash Finish</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-gold transition-colors duration-200">Sump & Tank Cleaning</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-gold font-bold">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-beige-light/70 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>No 2 Jeevanahalli Bus Stop, Near Jeevanahalli Circle, Bangalore - 560005</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9739988032" className="hover:text-gold transition-colors">9739988032</a>
                  <a href="tel:7019820571" className="hover:text-gold transition-colors">7019820571</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:muruganmuruga@gmail.com" className="hover:text-gold transition-colors">muruganmuruga@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center text-xs text-beige-light/40 font-light space-y-4 md:space-y-0">
          <span>&copy; {currentYear} SDM WORK. All rights reserved.</span>
          <span>Designed for luxury home services. Serving Bangalore region.</span>
        </div>
      </footer>

      {/* Sticky Mobile Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy/95 backdrop-blur-md border-t border-gold/25 grid grid-cols-2 shadow-2xl overflow-hidden">
        {/* Left Side: Call Now */}
        <a
          href="tel:9739988032"
          className="flex items-center justify-center space-x-2 py-4 bg-navy hover:bg-navy-light text-gold font-semibold text-sm border-r border-gold/15 active:bg-navy-deep transition-all"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call Now</span>
        </a>
        
        {/* Right Side: WhatsApp */}
        <a
          href="https://wa.me/919739988032?text=Hi%20SDM%20Work,%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-4 bg-gold hover:bg-gold-light text-navy font-bold text-sm active:bg-gold-dark transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
