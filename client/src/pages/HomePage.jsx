import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--glass)_0%,_var(--black)_70%)] opacity-80" />
      
      {/* Floating particles/dots approximation using CSS/Framer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Floating emojis */}
        <div className="flex justify-center gap-6 mb-8 text-3xl float-anim">
          <span>💍</span><span>💎</span><span>✨</span><span>👑</span><span>🌟</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
          <span className="typewriter inline-block border-r-4 border-gold pr-2">
            Craft Your Perfect Jewellery
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-10 font-lato">
          Design. Personalize. Own It Forever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/dashboard" className="btn-hover-fx bg-gradient-to-r from-gold to-gold-dark text-black px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto text-center shadow-lg shadow-gold/20">
            🛠️ Start Designing
          </Link>
          <a href="#collections" className="btn-hover-fx glass text-white px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto text-center border-gold/50 hover:bg-gold/10 transition-colors">
            💼 View Collections
          </a>
        </div>
      </div>
    </section>
  );
};

const FeaturesStrip = () => {
  const features = [
    { icon: '💍', text: 'Custom Rings' },
    { icon: '📿', text: 'Necklace Design' },
    { icon: '💛', text: 'Gold & Silver' },
    { icon: '💎', text: 'Diamond Setting' },
    { icon: '🎁', text: 'Gift Packaging' },
    { icon: '🚚', text: 'Free Delivery' },
  ];

  return (
    <section className="py-8 bg-dark border-y border-gold/20">
      <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex justify-between items-center min-w-max gap-8 px-4">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(212,175,55,0.8)" }}
              className="flex items-center gap-3 text-gray-300 hover:text-gold cursor-pointer transition-colors"
            >
              <span className="text-2xl">{f.icon}</span>
              <span className="font-semibold">{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdBanner = () => {
  return (
    <div className="relative overflow-hidden py-4 text-center group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 animate-[pulse_3s_ease-in-out_infinite] opacity-60"></div>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
      
      <div className="relative z-10 flex items-center justify-center gap-4 text-xl font-bold text-white whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-4 items-center"
        >
          <span>🎉🔥 MEGA SALE — Up to 40% OFF on Custom Designs! 🥳💰💍✨</span>
          <span>🎉🔥 MEGA SALE — Up to 40% OFF on Custom Designs! 🥳💰💍✨</span>
        </motion.div>
      </div>
    </div>
  );
};

const CollectionsGrid = () => {
  const collections = [
    { name: 'Engagement Rings', icon: '💍', desc: 'Seal the promise with a custom design.', price: 'Starts ₹25,000' },
    { name: 'Wedding Bands', icon: '💒', desc: 'Bands that signify eternal love.', price: 'Starts ₹15,000' },
    { name: 'Pendants', icon: '💎', desc: 'Close to the heart luxury.', price: 'Starts ₹18,000' },
    { name: 'Earrings', icon: '👂', desc: 'Dazzling pieces for every occasion.', price: 'Starts ₹12,000' },
    { name: 'Bracelets', icon: '💫', desc: 'Elegance around your wrist.', price: 'Starts ₹20,000' },
    { name: 'Anklets', icon: '✨', desc: 'Subtle grace in every step.', price: 'Starts ₹8,000' },
  ];

  return (
    <section id="collections" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-center text-gold mb-16">Curated Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center relative overflow-hidden group"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-playfair font-semibold text-white mb-3">{item.name}</h3>
              <p className="text-gray-400 mb-6">{item.desc}</p>
              <p className="text-gold font-bold mb-6">{item.price}</p>
              
              <Link to="/dashboard" className="inline-block border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-black transition-colors btn-hover-fx">
                Customize &rarr;
              </Link>

              {/* Hover overlay glow */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { label: 'Premium Quality', icon: '🏆', val: '100% Guaranteed' },
    { label: 'Custom Designs', icon: '🎨', val: 'Endless Options' },
    { label: 'Secure Payments', icon: '🔒', val: '256-bit Encrypted' },
    { label: 'Happy Customers', icon: '⭐', val: '5000+' },
  ];

  return (
    <section className="py-20 bg-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold text-center text-white mb-16">Why Choose SG LuxeJewels</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h4 className="text-xl font-semibold text-gold mb-2">{stat.label}</h4>
              <p className="text-gray-400 font-bold">{stat.val}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsCarousel = () => {
  const reviews = [
    { name: 'Sarah J.', text: '"Absolutely stunning! My custom engagement ring exceeded all expectations."', rating: 5 },
    { name: 'Michael T.', text: '"The design process was so intuitive. Delivered on time and perfectly crafted."', rating: 5 },
    { name: 'Priya M.', text: '"A wonderful experience. The 3D preview matched the real necklace perfectly."', rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.1)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-playfair font-bold text-gold mb-16">Stories of Love</h2>
        
        <div className="max-w-4xl mx-auto h-64 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 glass-card p-10 flex flex-col items-center justify-center text-center"
            >
              <div className="flex text-gold mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="text-2xl text-gray-300 italic mb-6">{reviews[currentIndex].text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {reviews[currentIndex].name.charAt(0)}
                </div>
                <h4 className="font-semibold text-white">{reviews[currentIndex].name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-gold' : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-gold-dark opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-playfair font-bold text-white mb-6">
          <span className="mr-3">💌</span>Get Exclusive Offers in Your Inbox<span className="ml-3">✨</span>
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Join our VIP list to receive early access to new collections, personalized design tips, and special discounts.
        </p>

        <form className="max-w-md mx-auto flex" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-6 py-4 rounded-l-full bg-dark/80 border border-gold/30 text-white focus:outline-none input-glow"
            required
          />
          <button 
            type="submit"
            className="bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-r-full font-bold transition-colors btn-hover-fx"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gold/20 transform rotate-6 rounded-2xl"></div>
          <img src="https://images.unsplash.com/photo-1599643478524-fb66f70d00f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Making Jewellery" className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-playfair font-bold text-gold mb-6">Our Legacy of Craftsmanship</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Founded with a passion for eternal beauty, SG LuxeJewels has been turning dreams into reality for over two decades. We believe that true luxury lies in personalization.
          </p>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Every piece crafted in our studio is uniquely yours. From hand-picking the finest conflict-free diamonds to shaping the gold exactly to your contour, our master artisans pour their hearts into making sure your jewellery tells your story.
          </p>
          <div className="flex gap-6 border-l-4 border-gold pl-6">
            <div>
              <h4 className="text-2xl font-bold text-white">20+</h4>
              <p className="text-gold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">50k+</h4>
              <p className="text-gold">Designs Crafted</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(212,175,55,0.1)_0%,_transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gold mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-lg">Have a specific design in mind? Or just want to say hello? Our consultants are ready to assist you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Our Studio</h3>
            <p className="text-gray-400">242 main road<br/>Chennai</p>
          </div>
          
          <div className="glass-card p-8 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-gray-400">Mon-Fri from 9am to 6pm</p>
            <p className="text-gold font-bold mt-2">+91 6385218882</p>
          </div>
          
          <div className="glass-card p-8 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-400">We usually reply within 24 hours.</p>
            <p className="text-gold font-bold mt-2">sgjewels@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="HomePage text-text-primary">
      <HeroSection />
      <FeaturesStrip />
      <AdBanner />
      <CollectionsGrid />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <ContactSection />
      <Newsletter />
    </div>
  );
};

export default HomePage;
