import { motion } from 'framer-motion';
import { Phone, CheckCircle, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="section-padding bg-navy relative">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Visual Card / Experience Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Main Visual Card */}
          <div className="relative glass-card rounded-3xl p-10 text-center max-w-[380px] w-full border border-gold/20 shadow-2xl shadow-gold/5">
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/10 rounded-3xl -z-10" />
            
            <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-playfair font-black text-gold">25</span>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white mb-2">
              Years of Trust
            </h3>
            <p className="text-xs uppercase tracking-widest text-gold mb-6 font-semibold">
              Serving Bangalore Since 2001
            </p>
            
            <div className="space-y-4 text-left border-t border-gold/10 pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-beige-light/80 font-light">100% On-Time Completion</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-beige-light/80 font-light">High-End Materials Only</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-beige-light/80 font-light">Clean and Tidy Cleanup</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gold text-navy text-xs font-bold uppercase py-1.5 px-3 rounded-lg shadow-lg">
              Est. 2001
            </div>
          </div>
        </motion.div>

        {/* Right Column: Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-7 text-left flex flex-col space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 w-fit">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">About SDM Work</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-playfair font-bold text-white">
            We Work, <span className="text-gold italic">You Relax</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-beige-light/80 leading-relaxed font-light">
            SDM Work has been delivering trusted home maintenance and painting solutions for over 25 years. We specialize in high-quality painting, waterproofing, white wash, and sump cleaning services with customer satisfaction as our priority.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-beige-light/60 leading-relaxed font-light">
            Founded in Bangalore, our journey has been built on a foundation of reliability, transparency, and top-tier craftsmanship. We understand that your home is your single greatest asset, which is why we handle every painting job or waterproofing repair with direct engineering oversight and highly skilled professionals.
          </motion.p>

          {/* Quick Credential badges */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold/10">
            <div className="flex items-center space-x-3 bg-navy-dark/40 border border-gold/5 rounded-xl p-4">
              <ShieldCheck className="w-8 h-8 text-gold shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-white">Verified Specialists</h4>
                <p className="text-xs text-beige-light/50 font-light">Experienced, vetted local crew.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-navy-dark/40 border border-gold/5 rounded-xl p-4">
              <Phone className="w-8 h-8 text-gold shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-white">24/7 Service Support</h4>
                <p className="text-xs text-beige-light/50 font-light">Direct line for queries and bookings.</p>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:9739988032" className="gold-button w-full sm:w-auto text-center flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 fill-current" />
              <span>Contact Murugan</span>
            </a>
            <div className="text-left">
              <p className="text-xs text-beige-dark font-semibold uppercase tracking-wider">Need a Custom Quote?</p>
              <p className="text-sm font-semibold text-white">Call: 9739988032 / 7019820571</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
