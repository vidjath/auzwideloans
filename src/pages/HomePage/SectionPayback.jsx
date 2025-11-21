import React from 'react';
import { motion } from 'framer-motion';

const SectionPayback = () => (
  <section className="py-20 bg-black">
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-secondary mb-4">How much will I pay back?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Get a transparent repayment schedule before you commit.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-[#121212] rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto border border-white/10"
      >
        <p className="text-lg mb-6 text-gray-200">Example: Borrow $2,500 over 24 months. Indicative costs:</p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-center text-gray-300"><CheckIcon />Statutory fee: $400</li>
          <li className="flex items-center text-gray-300"><CheckIcon />Annual Cost Rate (Interest): 47.6158%</li>
          <li className="flex items-center text-gray-300"><CheckIcon />Comparison rate: 65.6597% pa*</li>
        </ul>
        {/* visual schedule progress */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Month 0</span>
            <span>Month 24</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-secondary to-white"
            />
          </div>
        </div>
        <div className="bg-black/40 border-l-4 border-yellow-500 p-4 text-yellow-300 rounded-md mt-6">
          <p className="font-bold">WARNING:</p>
          <p>This comparison rate is true only for the example...</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a href="/apply-now" className="bg-secondary text-white font-bold py-3 px-8 rounded-lg text-xl hover:brightness-110 shadow-lg transition-all duration-300 uppercase">
          Apply Now!
        </a>
      </motion.div>
    </div>
  </section>
);

const CheckIcon = () => (
  <svg className="h-5 w-5 mr-2 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default SectionPayback;
