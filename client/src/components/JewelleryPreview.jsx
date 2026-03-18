import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DesignContext } from '../context/DesignContext';
import { FiShare2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const typeIcons = {
  ring: '💍',
  necklace: '📿',
  bracelet: '💫',
  earrings: '👂'
};

const materialColors = {
  gold: 'linear-gradient(135deg, rgba(255,215,0,0.3) 0%, rgba(184,134,11,0.3) 100%)',
  silver: 'linear-gradient(135deg, rgba(192,192,192,0.3) 0%, rgba(128,128,128,0.3) 100%)',
  platinum: 'linear-gradient(135deg, rgba(229,228,226,0.3) 0%, rgba(169,169,169,0.3) 100%)',
  'rose-gold': 'linear-gradient(135deg, rgba(183,110,121,0.3) 0%, rgba(255,153,153,0.3) 100%)',
};

const stoneIcons = {
  diamond: '💎', ruby: '❤️', emerald: '💚', sapphire: '💙',
  amethyst: '💜', pearl: '🤍', citrine: '🧡', none: '✖️'
};

const JewelleryPreview = () => {
  const { designState } = useContext(DesignContext);
  const { jewelleryType, material, stone, stoneSize, engraving, ringSize, quantity, estimatedPrice } = designState;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Design link copied to clipboard!');
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 overflow-y-auto no-scrollbar">
      
      {/* 3D-like rendering area */}
      <motion.div 
        key={`${jewelleryType}-${material}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex items-center justify-center rounded-2xl mb-8 relative overflow-hidden"
        style={{ background: materialColors[material] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]"></div>
        
        <div className="relative z-10 text-center">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="text-9xl mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            {typeIcons[jewelleryType]}
          </motion.div>
          {stone !== 'none' && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 text-3xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{
                transform: `scale(${stoneSize === 'small' ? 0.7 : stoneSize === 'large' ? 1.3 : 1})`
              }}
            >
              {stoneIcons[stone]}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Summary Card */}
      <div className="glass-card p-6 border-gold/40 relative">
        <button 
          onClick={handleShare}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors"
          title="Share Design"
        >
          <FiShare2 size={24} />
        </button>

        <h3 className="text-2xl font-playfair font-bold text-gold mb-4 border-b border-white/10 pb-2">
          Design Summary
        </h3>
        
        <div className="grid grid-cols-2 gap-y-4 text-sm md:text-base text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-xl">{typeIcons[jewelleryType]}</span> 
            <span className="capitalize font-semibold text-white">{jewelleryType}</span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase">Material</span>
            <span className="capitalize text-white font-semibold">{material.replace('-', ' ')}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase">Stone Selection</span>
            <div className="flex items-center gap-1">
              <span>{stoneIcons[stone]}</span> 
              <span className="capitalize text-white font-semibold">{stone !== 'none' ? `${stone} (${stoneSize})` : 'None'}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase">Quantity & Size</span>
            <span className="text-white font-semibold">Qty: {quantity} {jewelleryType === 'ring' && `| Size: ${ringSize}`}</span>
          </div>

          {engraving && (
            <div className="col-span-2 mt-2 p-3 bg-black/40 rounded-lg border border-gold/20">
              <span className="text-xs text-gray-500 uppercase block mb-1">Engraving</span>
              <span className={`text-white italic ${designState.engravingFont === 'Script' ? 'font-serif' : 'font-sans'}`}>
                "{engraving}"
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-end">
          <span className="text-gray-400 font-semibold">Estimated Price</span>
          <motion.div 
            key={estimatedPrice}
            initial={{ scale: 1.5, color: '#FFD700' }}
            animate={{ scale: 1, color: '#D4AF37' }}
            className="text-3xl font-bold"
          >
            ₹{estimatedPrice.toLocaleString('en-IN')}
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default JewelleryPreview;
