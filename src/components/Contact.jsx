import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'painting',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        phone: '',
        email: '',
        service: 'painting',
        message: ''
      });
      // Clear success alert after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-navy relative">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
            Request A Free Site Inspection
          </h2>
          <p className="text-beige-light/70 font-light">
            Contact Murugan and team today. We provide free site measurements and detailed cost estimation in Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          {/* Left Column: Business Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="glass-card rounded-2xl p-8 text-left border border-gold/10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                  SDM Work Office
                </h3>
                
                {/* Contact Items */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-beige-dark font-semibold">Address</p>
                      <p className="text-sm text-beige-light/80 mt-1 leading-relaxed font-light">
                        No 2 Jeevanahalli Bus Stop, <br />
                        Near Jeevanahalli Circle, <br />
                        Bangalore - 560005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-beige-dark font-semibold">Phone Numbers</p>
                      <p className="text-sm text-beige-light/80 mt-1 font-semibold flex flex-col space-y-1">
                        <a href="tel:9739988032" className="hover:text-gold transition-colors duration-300">9739988032 (Primary)</a>
                        <a href="tel:7019820571" className="hover:text-gold transition-colors duration-300">7019820571 (Alternative)</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-beige-dark font-semibold">Email Address</p>
                      <p className="text-sm text-beige-light/80 mt-1 font-light">
                        <a href="mailto:muruganmuruga@gmail.com" className="hover:text-gold transition-colors duration-300">muruganmuruga@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-beige-dark font-semibold">Business Hours</p>
                      <p className="text-sm text-beige-light/80 mt-1 font-light">
                        Monday - Sunday: 7:00 AM - 9:00 PM <br />
                        <span className="text-gold font-medium text-xs">Emergency Leakage Services: 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA Button */}
              <div className="pt-8 border-t border-gold/10 mt-8">
                <a
                  href="https://wa.me/919739988032?text=Hi%20SDM%20Work,%20I%20want%20to%20schedule%20a%20free%20site%20inspection."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-8 text-left border border-gold/10 h-full relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-beige-dark font-semibold">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Rajesh Nair"
                          className="bg-navy-dark/60 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors duration-300 font-light placeholder-beige-light/35"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="phone" className="text-xs uppercase tracking-widest text-beige-dark font-semibold">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="9876543210"
                          className="bg-navy-dark/60 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors duration-300 font-light placeholder-beige-light/35"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="text-xs uppercase tracking-widest text-beige-dark font-semibold">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="rajesh@gmail.com"
                          className="bg-navy-dark/60 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors duration-300 font-light placeholder-beige-light/35"
                        />
                      </div>

                      {/* Service Choice */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="service" className="text-xs uppercase tracking-widest text-beige-dark font-semibold">Required Service</label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="bg-navy-dark/60 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors duration-300 font-light"
                        >
                          <option value="painting">House Painting</option>
                          <option value="waterproofing">Water Proofing</option>
                          <option value="whitewash">White Wash</option>
                          <option value="sump-cleaning">Sump Cleaning</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="message" className="text-xs uppercase tracking-widest text-beige-dark font-semibold">Project Details / Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Describe your project, wall dimensions, or dampness issues..."
                        className="bg-navy-dark/60 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors duration-300 font-light placeholder-beige-light/35 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="gold-button w-full flex items-center justify-center space-x-2 py-4 font-bold text-sm tracking-wider uppercase disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-gold mb-6 animate-bounce" />
                    <h3 className="text-3xl font-playfair font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gold font-semibold uppercase tracking-wider text-xs mb-4">
                      Message Sent Successfully
                    </p>
                    <p className="text-sm text-beige-light/70 font-light max-w-sm">
                      Murugan and the SDM Work team will review your request and contact you within 2 hours to schedule your free inspection.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Google Map IFrame Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden border border-gold/15 h-96 shadow-xl relative group"
        >
          {/* Overlay to give a premium dark navy tint */}
          <div className="absolute inset-0 bg-navy/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
          
          <iframe
            title="SDM Work Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6436440283084!2d77.6186985!3d12.9946487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1684c3ea0e7b%3A0xe5567302484ab971!2sJeevanahalli%20Circle!5e0!3m2!1sen!2sin!4v1716892543029!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
