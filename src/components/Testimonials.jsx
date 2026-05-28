import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner, Indiranagar",
      review: "Very professional painting work and clean finishing. The crew masked everything and left our house completely clean. Highly recommend their texture work!",
      rating: 5
    },
    {
      name: "Sunitha M.",
      role: "Villa Owner, Whitefield",
      review: "Best waterproofing service in Bangalore. We had serious terrace leakage problems for two winters. SDM Work fixed it completely. Professional and efficient team.",
      rating: 5
    },
    {
      name: "Anthony D.",
      role: "Apartment Secretary, Koramangala",
      review: "Highly trusted and affordable service. We contracted them for complete whitewashing and overhead sump cleaning. Fast execution, direct accountability.",
      rating: 5
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-navy-deep relative overflow-hidden border-t border-gold/10">
      {/* Background flare */}
      <div className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
            Loved By Homeowners
          </h2>
          <p className="text-beige-light/70 font-light">
            Read real feedback from homeowners and commercial property managers in Bangalore who choose SDM Work.
          </p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 text-left flex flex-col justify-between relative border border-gold/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors duration-300">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(rev.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-beige-light/80 text-sm leading-relaxed mb-8 italic font-light">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-playfair font-bold text-gold text-sm uppercase">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-beige-light/50 font-light mt-0.5">
                    {rev.role}
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
