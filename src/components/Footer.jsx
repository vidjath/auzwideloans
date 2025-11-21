import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <motion.img 
                  src={logo}
                  alt="Auzwide Loans Logo" 
                  className="h-16 md:h-20 drop-shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
              <p className="text-sm md:text-base mb-4 text-gray-400">
                We provide personal loans designed to help you meet your financial needs with flexible terms and competitive rates.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-secondary transition duration-300">Home</a>
                </li>
                <li>
                  <a href="/apply-now" className="text-gray-400 hover:text-secondary transition duration-300">Apply Now</a>
                </li>
                <li>
                  <a href="/costs" className="text-gray-400 hover:text-secondary transition duration-300">Costs</a>
                </li>
                <li>
                  <a href="/contact-us" className="text-gray-400 hover:text-secondary transition duration-300">Contact Us</a>
                </li> 
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block text-white">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/legal/privacy-and-credit" className="text-gray-400 hover:text-secondary transition duration-300">
                    Complaints Management Policy
                  </a>
                </li>
                <li>
                  <a href="/legal/credit-information" className="text-gray-400 hover:text-secondary transition duration-300">
                    Credit Reporting Statement
                  </a>
                </li>
                <li>
                  <a href="/legal/website-privacy" className="text-gray-400 hover:text-secondary transition duration-300">
                    Privacy Statement
                  </a>
                </li>
                <li>
                  <a href="/legal/target-market" className="text-gray-400 hover:text-secondary transition duration-300">
                    Target Market Determination
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Us */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2 inline-block text-white">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaPhone className="text-secondary mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:0438762492" className="text-gray-400 hover:text-secondary transition duration-300">0438 762 492</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-secondary mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:info@auzwideloans.com.au" className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm md:text-base break-all">info@auzwideloans.com.au</a>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA band */}
        <div className="mt-12 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl p-6 md:p-8 bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-center md:text-left">
              <h4 className="text-lg md:text-xl font-semibold text-white">Ready to start your application?</h4>
              <p className="text-sm text-gray-400">Talk to our team or apply online in minutes.</p>
            </div>
            <a href="/apply-now" className="bg-secondary text-black px-6 py-3 rounded-lg font-semibold shadow hover:brightness-110 transition">Apply Now</a>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left mb-4 md:mb-0 text-gray-400">
              © {new Date().getFullYear()} Authorized Credit Representative (No. 574043) for Strawberry Loans Pty Ltd (Australian Credit Licence Number 519253)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
