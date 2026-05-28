import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-navy-deep">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Soft Gold Blur */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px]" />
        {/* Navy Blue Highlight */}
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-navy-light/10 rounded-full blur-[120px]" />
        {/* Luxury Soft Beige Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Text Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-8 text-left"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-light">
              25 Years of Trusted Craftsmanship
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white leading-[1.1] tracking-tight"
          >
            Professional <span className="text-gold text-shadow-gold italic">Painting</span> & <span className="text-gold text-shadow-gold">Waterproofing</span> Services in Bangalore
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-beige-light/80 leading-relaxed font-light max-w-xl"
          >
            Trusted experts in house painting, white wash, waterproofing, and sump cleaning. Experience premium finish, durable materials, and flawless execution.
            <br />
            <span className="text-gold-light font-medium mt-2 block">Your Home, Our Responsibility.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="tel:9739988032"
              className="gold-button flex items-center justify-center space-x-2 text-center"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call Now: 9739988032</span>
            </a>
            
            <a
              href="https://wa.me/919739988032?text=Hi%20SDM%20Work,%20I%20am%20interested%20in%20your%20home%20services.%20Please%20contact%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="outline-gold-button flex items-center justify-center space-x-2 text-center border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 hover:text-white"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Stats Overlay for desktop */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/10"
          >
            <div>
              <p className="text-3xl font-playfair font-bold text-gold">25+</p>
              <p className="text-xs uppercase tracking-wider text-beige-dark font-medium">Years Active</p>
            </div>
            <div>
              <p className="text-3xl font-playfair font-bold text-gold">1000+</p>
              <p className="text-xs uppercase tracking-wider text-beige-dark font-medium">Happy Homes</p>
            </div>
            <div>
              <p className="text-3xl font-playfair font-bold text-gold">100%</p>
              <p className="text-xs uppercase tracking-wider text-beige-dark font-medium">Quality Guarantee</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Decorative backdrop glow */}
          <div className="absolute inset-0 bg-gold/10 rounded-3xl blur-3xl transform rotate-3 scale-95" />
          
          {/* Main Image Frame */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-gold/20 shadow-2xl shadow-gold/10 group">
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent z-10" />
            <img
              src="/hero.png"
              alt="Premium Living Room by SDM Work"
              className="w-full max-w-[450px] lg:max-w-none h-auto object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Gold Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gold/80 z-20" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gold/80 z-20" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gold/80 z-20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gold/80 z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
