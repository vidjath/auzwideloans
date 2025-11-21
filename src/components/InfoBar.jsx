import React from 'react';
import { motion } from 'framer-motion';

const InfoBar = () => {
  return (
    <div className="bg-gray-500 text-gray-200 py-2 border-b border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.8,
            duration: 0.5,
            type: "spring", 
            stiffness: 100
          }}
          className="text-center text-sm"
        >
          Auzwide Loans Pty Ltd ACN 688-716-841, facilitating loans provided by Strawberry Loans Pty Ltd ACN 621 474 655 Australian Credit Licence Number 519253. AFCA's membership number: 119086.
        </motion.div>
      </div>
    </div>
  );
};

export default InfoBar;
