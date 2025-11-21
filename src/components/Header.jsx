import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 text-gray-200 relative md:sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between md:justify-start mb-4 md:mb-0"
          >
            <div className="flex items-center">
              <motion.img 
                src={logo}  
                alt="Auzwide Loans Logo" 
                className="h-14 md:h-24 object-contain drop-shadow"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-secondary transition-colors duration-300"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </motion.div>

          {/* Main Navigation - Desktop */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center justify-center md:justify-end space-x-2 font-medium"
          >
            <a href="/" className={`${isActive('/') ? 'text-white' : 'text-gray-300'} hover:text-secondary transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5`}> 
              Home
              <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a href="/costs" className={`${isActive('/costs') ? 'text-white' : 'text-gray-300'} hover:text-secondary transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5`}>
              Costs
              <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a href="/apply-now" className={`${isActive('/apply-now') ? 'text-white' : 'text-gray-300'} hover:text-secondary transition-colors duration-300 relative group px-3 py-2 rounded-lg hover:bg-white/5`}>
              Apply Now
              <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-3/4"></span>
            </a>
            <a href="/contact-us" className="bg-secondary hover:brightness-110 text-black px-4 py-2 rounded-lg transition-colors duration-300 shadow">
              Contact Us
            </a>
          </motion.nav>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden w-full"
            >
              <div className="flex flex-col space-y-2 py-3">
                <a href="/" className={`${isActive('/') ? 'bg-white/10 text-white' : 'text-gray-300'} hover:text-white hover:bg-white/10 transition-colors duration-200 font-medium px-3 py-2 rounded-lg`}>
                  Home
                </a>
                <a href="/costs" className={`${isActive('/costs') ? 'bg-white/10 text-white' : 'text-gray-300'} hover:text-white hover:bg-white/10 transition-colors duration-200 font-medium px-3 py-2 rounded-lg`}>
                  Costs
                </a>
                <a href="/apply-now" className={`${isActive('/apply-now') ? 'bg-white/10 text-white' : 'text-gray-300'} hover:text-white hover:bg-white/10 transition-colors duration-200 font-medium px-3 py-2 rounded-lg`}>
                  Apply Now
                </a>
                <a href="/contact-us" className="bg-secondary hover:brightness-110 text-black px-4 py-2 rounded-lg transition-colors duration-200 text-center shadow">
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Contact Information and License Text - Desktop */}
        <div className="hidden md:block">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-end mt-2 text-gray-300 items-center"
          >
            <span className="mr-2">Need help?</span>
            <a href="tel:0438762492" className="flex items-center text-secondary font-medium hover:text-white transition-colors duration-200 mx-2">
              <FaPhone className="mr-1" size={14} /> 0438 762 492
            </a> 
            <span className="mx-1 text-gray-500">|</span>
            <a href="mailto:info@auzwideloans.com.au" className="flex items-center text-secondary hover:text-white transition-colors duration-200 mx-2">
              <FaEnvelope className="mr-1" size={14} /> info@auzwideloans.com.au
            </a>
          </motion.div>
        </div>

        {/* Contact Information and License Text - Mobile */}
        <div className="md:hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center mt-2 text-gray-300 items-center"
          >
            <span className="mr-2">Need help?</span>
            <a href="tel:0438762492" className="flex items-center text-secondary font-medium hover:text-white transition-colors duration-200 mx-2">
              <FaPhone className="mr-1" size={14} /> 0438 762 492
            </a> 
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center mt-1 text-gray-300 items-center"
          >
            <a href="info@auzwideloans.com.au" className="flex items-center text-secondary hover:text-white transition-colors duration-200">
              <FaEnvelope className="mr-1" size={14} /> info@auzwideloans.com.au
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
