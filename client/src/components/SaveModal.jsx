import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DesignContext } from '../context/DesignContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const SaveModal = ({ isOpen, onClose }) => {
  const { designState } = useContext(DesignContext);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', instructions: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...designState,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      specialInstructions: formData.instructions
    };

    try {
      // Save to DB
      const res = await axios.post(`${API_URL}/api/designs`, payload);
      
      // Email Shop
      await axios.post(`${API_URL}/api/designs/send-email`, { design: res.data });
      
      toast.success('Design Saved! Shop has been notified.');
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit design. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="bg-dark border border-gold/30 rounded-2xl p-8 max-w-lg w-full relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
          
          <h2 className="text-2xl font-playfair font-bold text-gold mb-6 border-b border-white/10 pb-4">
            Finalize Your Order
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Full Name*</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange}
                className="w-full bg-black/60 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-gold" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email Space*</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full bg-black/60 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full bg-black/60 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-gold" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Special Instructions</label>
              <textarea name="instructions" rows="3" value={formData.instructions} onChange={handleChange}
                className="w-full bg-black/60 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-gold resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full mt-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gold text-black hover:bg-gold-light shadow-[0_0_15px_rgba(212,175,55,0.4)]'
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2"><span className="animate-spin text-xl block">💎</span> Processing...</span>
              ) : (
                <><span>📧</span> Send to Shop & Save Design</>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SaveModal;
