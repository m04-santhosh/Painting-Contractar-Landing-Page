import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Trust() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "25+ Years Experience",
      desc: "Delivering exceptional home painting and maintenance services across Bangalore since 2001."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: "Quality Workmanship",
      desc: "Committed to flawless finishes using premium quality paints and durable waterproofing solutions."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      title: "Trusted Service",
      desc: "A registered, professional team focused on honest communication, timelines, and neat execution."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "Customer Satisfaction",
      desc: "Highly rated local team in Bangalore with customer happiness as our absolute top priority."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="bg-navy border-y border-gold/10 relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 text-left flex flex-col justify-between group transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transform hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                  {feat.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-playfair font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {feat.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-beige-light/70 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
              
              {/* Decorative base line */}
              <div className="w-12 h-0.5 bg-gold/20 mt-6 group-hover:w-full group-hover:bg-gold transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
