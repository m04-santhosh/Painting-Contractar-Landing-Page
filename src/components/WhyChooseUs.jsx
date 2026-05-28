import { motion } from 'framer-motion';
import { Check, Shield, Wallet, Zap, Users, Sparkles, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Experienced Professionals",
      desc: "Our painters and waterproofing specialists have 25+ years of active field experience in Bangalore."
    },
    {
      icon: <Wallet className="w-6 h-6 text-gold" />,
      title: "Affordable Pricing",
      desc: "Get premium luxury finishes without the high-end design agency markups. Genuine, transparent quotes."
    },
    {
      icon: <Shield className="w-6 h-6 text-gold" />,
      title: "Premium Quality Materials",
      desc: "We exclusively use authorized, top-brand waterproofing materials and Asian Paints/Berger paint ranges."
    },
    {
      icon: <Zap className="w-6 h-6 text-gold" />,
      title: "Fast Service",
      desc: "Efficient project management and a large crew allow us to complete jobs quickly without compromising on quality."
    },
    {
      icon: <Check className="w-6 h-6 text-gold" />,
      title: "Reliable Team",
      desc: "Highly disciplined local crew that respects your home, keeps schedules, and communicates proactively."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Clean Finishing",
      desc: "Comprehensive cleaning post-work. No paint spots or debris left behind; your home is delivered spotless."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="section-padding bg-navy-deep relative">
      {/* Decorative Blur */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[90px] z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-gold/5 rounded-full blur-[90px] z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4"
          >
            <Star className="w-3 h-3 text-gold fill-current" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">Why Choose Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4"
          >
            The SDM Work Standard
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-beige-light/70 font-light"
          >
            With 25 years of local reputation in Bangalore, here is why hundreds of families trust us with their homes.
          </motion.p>
        </div>

        {/* Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 text-left border border-gold/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/15 group-hover:border-gold/25 transition-all duration-300">
                  {point.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-lg font-playfair font-bold text-white group-hover:text-gold transition-colors duration-300 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-beige-light/70 leading-relaxed font-light">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
