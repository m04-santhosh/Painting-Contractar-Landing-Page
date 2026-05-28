import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paintbrush, Droplet, Waves, Sparkles, Plus, X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'painting', name: 'Painting', icon: <Paintbrush className="w-3.5 h-3.5" /> },
    { id: 'waterproofing', name: 'Waterproofing', icon: <Droplet className="w-3.5 h-3.5" /> },
    { id: 'sump', name: 'Sump Cleaning', icon: <Waves className="w-3.5 h-3.5" /> },
    { id: 'before-after', name: 'Before / After', icon: <Sparkles className="w-3.5 h-3.5" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'painting',
      title: 'Luxury Living Room Painting',
      subtitle: 'Premium navy finish with gold trims',
      image: '/gallery_painting.png',
      location: 'Koramangala, Bangalore'
    },
    {
      id: 2,
      category: 'waterproofing',
      title: 'Terrace Slab Waterproofing',
      subtitle: 'Elastomeric multi-layer protective coating',
      image: '/gallery_waterproofing.png',
      location: 'Indiranagar, Bangalore'
    },
    {
      id: 3,
      category: 'sump',
      title: 'Underground Sump Deep Clean',
      subtitle: 'Mechanized pressure wash & antibacterial spray',
      image: '/gallery_sump.png',
      location: 'HSR Layout, Bangalore'
    },
    {
      id: 4,
      category: 'before-after',
      title: 'Bedroom Wall Transformation',
      subtitle: 'Faded plaster to luxury textured finish',
      image: '/gallery_before_after.png',
      location: 'Whitefield, Bangalore'
    },
    {
      id: 5,
      category: 'painting',
      title: 'Modern House Exterior Painting',
      subtitle: 'Weather-resistant acrylic protective coating',
      image: '/painting.png',
      location: 'Jayanagar, Bangalore'
    },
    {
      id: 6,
      category: 'waterproofing',
      title: 'Wet Area Dampness Injection Treatment',
      subtitle: 'Basement leakage protection barrier',
      image: '/waterproofing.png',
      location: 'Hebbal, Bangalore'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section-padding bg-navy relative">
      {/* Decorative details */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-navy-light/5 rounded-full blur-[100px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
            Our Work Speaks For Itself
          </h2>
          <p className="text-beige-light/70 font-light">
            Browse through some of our premium projects completed recently across Bangalore houses and commercial buildings.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat.id
                  ? 'bg-gold border-gold text-navy shadow-lg shadow-gold/25'
                  : 'bg-navy-dark/45 border-gold/10 text-beige-light hover:border-gold/30 hover:text-gold'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-gold/10 bg-navy-dark/40"
                onClick={() => setActivePhoto(item)}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 text-left z-10">
                  <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                        {item.category.replace('-', ' ')}
                      </span>
                      <h4 className="text-lg font-playfair font-bold text-white mt-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-beige-light/70 font-light mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-[10px] text-beige-light/40 uppercase mt-2 tracking-wider">
                        {item.location}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-gold border border-gold-light/40 flex items-center justify-center text-navy shadow-lg shadow-gold/20">
                      <Plus className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Soft border accent */}
                <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/25 rounded-xl pointer-events-none transition-all duration-500 z-20" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActivePhoto(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-navy/85 border border-gold/20 flex items-center justify-center text-beige-light hover:text-gold transition-colors duration-300"
              onClick={() => setActivePhoto(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full bg-navy border border-gold/25 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col md:flex-row cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Area */}
              <div className="md:w-2/3 h-[50vh] md:h-[65vh]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text / Stats Area */}
              <div className="md:w-1/3 p-8 flex flex-col justify-between text-left bg-navy-deep relative border-t md:border-t-0 md:border-l border-gold/15">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold px-2 py-1 rounded bg-gold/10 border border-gold/20 w-fit block">
                    {activePhoto.category.replace('-', ' ')}
                  </span>
                  
                  <h3 className="text-2xl font-playfair font-bold text-white mt-6">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-beige-light/80 mt-2 font-light">
                    {activePhoto.subtitle}
                  </p>
                  
                  <div className="mt-8 space-y-4 border-t border-gold/10 pt-6 text-sm">
                    <div>
                      <p className="text-xs text-beige-dark uppercase tracking-wider font-semibold">Location</p>
                      <p className="text-white mt-0.5 font-light">{activePhoto.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-beige-dark uppercase tracking-wider font-semibold">Scope of Work</p>
                      <p className="text-white mt-0.5 font-light">Premium Surface Prep + Luxury Coatings</p>
                    </div>
                    <div>
                      <p className="text-xs text-beige-dark uppercase tracking-wider font-semibold">Guarantee</p>
                      <p className="text-gold font-medium mt-0.5">5-Year Quality Warranty</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gold/10 mt-6 flex justify-between items-center">
                  <a
                    href="tel:9739988032"
                    className="gold-button w-full text-center flex items-center justify-center space-x-2 py-3.5"
                  >
                    <span>Get Similar Quote</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
