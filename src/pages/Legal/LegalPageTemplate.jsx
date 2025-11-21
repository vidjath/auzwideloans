import React from 'react';
import { motion } from 'framer-motion';

const LegalPageTemplate = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Banner Title */}
      <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#0b0f14] to-black py-20 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-secondary/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="pointer-events-none absolute -bottom-36 -left-20 h-[26rem] w-[26rem] rounded-full bg-secondary/10 blur-3xl"
        />

        <h1 className="relative text-3xl md:text-5xl font-extrabold text-center text-white tracking-tight">
          {title}
        </h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-10 text-center">
              {subtitle}
            </h2>
          )}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-12 shadow-2xl">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPageTemplate; 