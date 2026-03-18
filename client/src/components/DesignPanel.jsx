import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { DesignContext } from '../context/DesignContext';

const typeIcons = [
  { id: 'ring', icon: '💍', label: 'Ring' },
  { id: 'necklace', icon: '📿', label: 'Necklace' },
  { id: 'bracelet', icon: '💫', label: 'Bracelet' },
  { id: 'earrings', icon: '👂', label: 'Earrings' }
];

const materials = [
  { id: 'gold', label: 'Gold', gradient: 'bg-gradient-to-r from-[#FFD700] to-[#B8860B]' },
  { id: 'silver', label: 'Silver', gradient: 'bg-gradient-to-r from-[#C0C0C0] to-[#808080]' },
  { id: 'platinum', label: 'Platinum', gradient: 'bg-gradient-to-r from-[#E5E4E2] to-[#A9A9A9]' },
  { id: 'rose-gold', label: 'Rose Gold', gradient: 'bg-gradient-to-r from-[#B76E79] to-[#FF9999]' }
];

const stones = [
  { id: 'diamond', icon: '💎', label: 'Diamond', color: '#FFF' },
  { id: 'ruby', icon: '❤️', label: 'Ruby', color: '#FF0000' },
  { id: 'emerald', icon: '💚', label: 'Emerald', color: '#00FF00' },
  { id: 'sapphire', icon: '💙', label: 'Sapphire', color: '#0000FF' },
  { id: 'amethyst', icon: '💜', label: 'Amethyst', color: '#800080' },
  { id: 'pearl', icon: '🤍', label: 'Pearl', color: '#FDF5E6' },
  { id: 'citrine', icon: '🧡', label: 'Citrine', color: '#FFA500' },
  { id: 'none', icon: '✖️', label: 'None', color: 'transparent' }
];

const DesignPanel = ({ onSaveOpen }) => {
  const { designState, setField, resetDesign } = useContext(DesignContext);
  const { jewelleryType, material, stone, stoneSize, engraving, engravingFont, ringSize, quantity } = designState;

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 p-6 glass border-r border-gold/20">
      <h2 className="text-3xl font-playfair font-bold text-white mb-8 border-b border-gold/30 pb-4">
        Design Studio
      </h2>

      {/* STEP 1: Type */}
      <div className="mb-10">
        <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Step 1: Type</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {typeIcons.map((t) => (
            <button
              key={t.id}
              onClick={() => setField('jewelleryType', t.id)}
              className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all ${
                jewelleryType === t.id 
                  ? 'bg-gold/20 border-2 border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)] transform scale-105' 
                  : 'bg-dark border border-white/10 hover:border-gold/50 hover:bg-white/5'
              }`}
            >
              <span className="text-4xl mb-2">{t.icon}</span>
              <span className="text-sm font-medium">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* STEP 2: Material */}
      <div className="mb-10">
        <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Step 2: Material</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {materials.map((m) => (
            <button
              key={m.id}
              onClick={() => setField('material', m.id)}
              className={`relative overflow-hidden p-3 rounded-lg text-sm font-bold border-2 transition-all ${
                material === m.id 
                  ? 'border-white text-black drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] scale-105' 
                  : 'border-transparent text-white/80 hover:text-white'
              } ${m.gradient}`}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></div>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* STEP 3: Stone */}
      <div className="mb-10">
        <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Step 3: Stone</h3>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3 mb-4">
          {stones.map((s) => (
            <button
              key={s.id}
              onClick={() => setField('stone', s.id)}
              className={`p-2 rounded-lg flex flex-col flex-wrap items-center justify-center transition-all ${
                stone === s.id 
                  ? 'bg-gold/20 border border-gold scale-110' 
                  : 'bg-black/50 border border-transparent hover:border-gold/30'
              }`}
              title={s.label}
            >
              <span className="text-2xl">{s.icon}</span>
            </button>
          ))}
        </div>
        
        {stone !== 'none' && (
          <div className="flex bg-black/50 rounded-lg p-1 border border-white/10">
            {['small', 'medium', 'large'].map((size) => (
              <button
                key={size}
                onClick={() => setField('stoneSize', size)}
                className={`flex-1 py-2 text-sm capitalize rounded-md transition-colors ${
                  stoneSize === size ? 'bg-gold text-black font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* STEP 4: Engraving */}
      <div className="mb-10">
        <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Step 4: Engraving</h3>
        <div className="space-y-4">
          <input
            type="text"
            maxLength={20}
            value={engraving}
            onChange={(e) => setField('engraving', e.target.value)}
            placeholder="Add personal message (max 20 chars)"
            className="w-full bg-black/60 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          />
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{engraving.length}/20 characters</span>
            <select
              value={engravingFont}
              onChange={(e) => setField('engravingFont', e.target.value)}
              className="bg-black/60 border border-white/20 text-white rounded px-2 py-1 outline-none"
            >
              <option value="Classic">Classic</option>
              <option value="Script">Script</option>
              <option value="Modern">Modern</option>
              <option value="Bold">Bold</option>
            </select>
          </div>
        </div>
      </div>

      {/* STEP 5: Sizing & Quantity */}
      <div className="mb-12">
        <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Step 5: Quantity & Size</h3>
        <div className="flex gap-6">
          {jewelleryType === 'ring' && (
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">US Size (5-13)</label>
              <select
                value={ringSize}
                onChange={(e) => setField('ringSize', Number(e.target.value))}
                className="w-full bg-black/60 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
              >
                {[5,6,7,8,9,10,11,12,13].map(sz => (
                  <option key={sz} value={sz}>{sz}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1">Quantity</label>
            <div className="flex items-center bg-black/60 border border-white/20 rounded-lg overflow-hidden">
              <button 
                onClick={() => setField('quantity', Math.max(1, quantity - 1))}
                className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >-</button>
              <div className="flex-1 text-center font-bold">{quantity}</div>
              <button 
                onClick={() => setField('quantity', quantity + 1)}
                className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/10">
        <button
          onClick={onSaveOpen}
          className="flex-1 bg-gold text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gold-light transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)] btn-hover-fx"
        >
          <span>💾</span> Complete Order
        </button>
        <button
          onClick={resetDesign}
          className="sm:w-1/3 bg-dark border border-gray-600 text-white rounded-xl py-4 font-semibold hover:border-gray-400 hover:bg-gray-800 transition-colors"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default DesignPanel;
