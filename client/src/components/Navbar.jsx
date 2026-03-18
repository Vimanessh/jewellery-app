import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-gradient flex items-center gap-2">
          💎 SG LuxeJewels
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link>
          <a href="/#collections" className="text-gray-300 hover:text-gold transition-colors">Collections</a>
          <Link to="/dashboard" className="text-gray-300 hover:text-gold transition-colors">Design Studio</Link>
          <a href="/#about" className="text-gray-300 hover:text-gold transition-colors">About</a>
          <a href="/#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a>
          
          <Link 
            to="/dashboard" 
            className="btn-hover-fx bg-gradient-to-r from-gold to-gold-dark text-black px-6 py-2 rounded-full font-semibold shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">✨ Create Your Design</span>
            <div className="absolute inset-0 h-full w-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4"
        >
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-gold">Home</Link>
          <a href="/#collections" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-gold">Collections</a>
          <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-gold">Design Studio</Link>
          <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-gold">About</a>
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-gold">Contact</a>
          <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="bg-gold text-black px-6 py-2 rounded-full font-semibold mt-4">
            ✨ Create Your Design
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
