import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsAppBubble';

function App() {
  return (
    <div className="relative min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
      {/* Floating Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Banner Area */}
        <Hero />

        {/* Brand Value & Trust Cards */}
        <Trust />

        {/* Service Offerings */}
        <Services />

        {/* Detailed About Narrative */}
        <About />

        {/* Quality Standards & Advantages */}
        <WhyChooseUs />

        {/* Portfolio Gallery Showcase */}
        <Gallery />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Inquiry Form & Map Details */}
        <Contact />
      </main>

      {/* Footer Navigation & Mobile Bar */}
      <Footer />

      {/* Floating Assist Bubble */}
      <WhatsAppBubble />
    </div>
  );
}

export default App;
