import React from 'react';
import { motion } from 'framer-motion';

const SectionContactCTA = () => (
  <section className="relative py-20 bg-black text-gray-300">
    {/* glow */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-secondary/20 to-transparent blur-xl"
    />
    <div className="container mx-auto px-4 text-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 text-secondary"
      >
        Need help with your application?
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-xl mb-8"
      >
        <p>
          Call us at <span className="font-bold text-secondary">0438 762 492</span> or email{' '}
          <span className="font-bold text-secondary">info@auzwideloans.com.au</span>
        </p>
      </motion.div>

      <motion.a 
        href="/contact-us"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-secondary text-white font-bold py-3 px-8 rounded-lg text-xl shadow-lg hover:brightness-110 transition-all duration-300 inline-block"
      >
        Contact Us
      </motion.a>

      <div className="mt-6 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-left">
        <p className="text-sm text-gray-400">
          Our team is available Monday–Friday, 9am–5pm AEST. We aim to respond within one business day.
        </p>
      </div>
    </div>
  </section>
);

export default SectionContactCTA;
