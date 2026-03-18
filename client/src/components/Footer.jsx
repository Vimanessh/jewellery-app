import React from 'react';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] border-t border-gold/30 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gradient mb-4">💎 SG LuxeJewels</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Crafting memories with bespoke, luxury jewellery designed perfectly for you. Own it forever.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
              <FaPinterestP size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
              <FiYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-playfair text-white mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">About Us</a></li>
            <li><a href="/dashboard" className="text-gray-400 hover:text-gold transition-colors">Design Studio</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Track Order</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h3 className="text-lg font-playfair text-white mb-6">Collections</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Engagement Rings 💍</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Wedding Bands 💒</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Luxury Necklaces 📿</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Diamond Settings 💎</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-playfair text-white mb-6">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-gold mt-1">📍</span>
              242 main road, Chennai
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gold">📞</span>
              +91 6385218882
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gold">✉️</span>
              sgjewels@gmail.com
            </li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SG LuxeJewels Custom Design. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
          <span>💳</span>
          <span>💲</span>
          <span>🏦</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
