import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppBubble() {
  return (
    <motion.a
      href="https://wa.me/919739988032?text=Hi%20SDM%20Work,%20I%20have%20a%20requirement%20for%20home%20services.%20Please%20connect%20with%20me."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-emerald-400 border border-white/10 group transition-all duration-300 mb-16 md:mb-0"
      style={{
        boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)'
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none -z-10" />
      
      <MessageCircle className="w-6 h-6 fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-[115%] bg-navy border border-gold/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none hidden md:block">
        Need Help? Chat on WhatsApp
      </span>
    </motion.a>
  );
}
