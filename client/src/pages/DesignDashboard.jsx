import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DesignPanel from '../components/DesignPanel';
import JewelleryPreview from '../components/JewelleryPreview';
import SaveModal from '../components/SaveModal';

const DesignDashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 min-h-screen bg-black flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Panel - Controls */}
      <div className="w-full md:w-5/12 lg:w-4/12 h-[calc(100vh-6rem)] relative z-20 shadow-[10px_0_20px_rgba(0,0,0,0.5)]">
        <DesignPanel onSaveOpen={() => setModalOpen(true)} />
      </div>

      {/* Right Panel - Preview */}
      <div className="w-full md:w-7/12 lg:w-8/12 h-[calc(100vh-6rem)] relative bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.15),_transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.05),_transparent_50%)] pointer-events-none"></div>
        <JewelleryPreview />
      </div>

      {/* Save & Order Modal */}
      {isModalOpen && <SaveModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}
    </motion.div>
  );
};

export default DesignDashboard;
