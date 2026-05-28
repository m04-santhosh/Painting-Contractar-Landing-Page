import { motion } from 'framer-motion';
import { Paintbrush, Sparkles, Droplet, Waves, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "painting",
      title: "House Painting",
      icon: <Paintbrush className="w-6 h-6" />,
      image: "/painting.png",
      desc: "Premium interior & exterior wall coatings with professional surface preparation, high-quality finishes, and royal textures. Includes customized color consultations.",
      features: ["Interior Wall Painting", "Exterior Wall Coating", "Decorative Textures & Metallic", "Wood & Metal Polishing"]
    },
    {
      id: "waterproofing",
      title: "Water Proofing",
      icon: <Droplet className="w-6 h-6" />,
      image: "/waterproofing.png",
      desc: "Comprehensive structure dampness protection for roofs, bathrooms, basements, and external walls. We locate leakages and apply premium structural barriers.",
      features: ["Terrace Waterproofing", "Wall Dampness Treatment", "Bathroom Leakage Fixes", "Basement Injection Grouting"]
    },
    {
      id: "whitewash",
      title: "White Wash",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/whitewash.png",
      desc: "Cost-effective, uniform, and speedy whitewash solutions ideal for refreshing rental houses, offices, compounds, or commercial buildings with premium lime/distemper.",
      features: ["Rental Home Refresh", "Commercial Whitewashing", "Lime Wash Finishing", "Wall Primer Undercoats"]
    },
    {
      id: "sump-cleaning",
      title: "Sump Cleaning",
      icon: <Waves className="w-6 h-6" />,
      image: "/sump.png",
      desc: "Hygienic, high-pressure mechanized water tank and sump cleaning using state-of-the-art tools, sludge extraction, wall scrubbing, and antibacterial sanitization.",
      features: ["Mechanized Sump Cleaning", "Overhead Water Tank Wash", "Sludge & Dirt Vacuuming", "Antibacterial Spray Treatment"]
    }
  ];

  const handleBookClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
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
    <section id="services" className="section-padding bg-navy-deep relative">
      {/* Background decorations */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-navy-light/5 rounded-full blur-[100px] z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">Our Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4"
          >
            Luxury Home Maintenance & Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-beige-light/70 font-light"
          >
            We combine 25 years of engineering experience with high-end tools to deliver flawless home finishes.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-gold/10 transition-all duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transform hover:-translate-y-2"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-navy/80 border border-gold/30 flex items-center justify-center text-gold backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-beige-light/75 text-sm leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-xs text-beige-light/60 font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-8 pb-8 pt-4 flex justify-between items-center border-t border-gold/5 bg-navy-dark/30">
                <span className="text-xs text-gold/80 tracking-widest font-semibold uppercase">Premium Quality Guaranteed</span>
                <a
                  href="#contact"
                  onClick={handleBookClick}
                  className="flex items-center space-x-1 text-sm font-semibold text-gold hover:text-white transition-colors duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
