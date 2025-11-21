import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const WarningModal = ({ isOpen, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <motion.div
            className="w-full max-w-3xl my-8 md:my-0 bg-white/5 border border-white/10 text-gray-200 rounded-xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center bg-white/10 border-b border-white/10 p-4 sm:p-6">
              <div className="flex items-center font-bold text-base sm:text-lg text-white">
                <FaExclamationTriangle className="text-yellow-400 mr-2" size={20} />
                ALERT
              </div>
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-start">
                <FaExclamationTriangle className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <span>Do you really need a loan today?</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p className="font-medium">
                  This statement is an Australian Government requirement under the National Consumer Credit Protection Act 2009.
                </p>

                <p>
                  It can be expensive to borrow small amounts of money and borrowing may not solve your money problems. Check your options before borrowing:
                </p>

                <ul className="list-disc pl-4 sm:pl-8 space-y-3">
                  <li>
                    For information about other options for managing bills and debts, ring{' '}
                    <a href="tel:1800007007" className="text-secondary font-semibold hover:brightness-125">
                      1800 007 007
                    </a>{' '}
                    from anywhere in Australia to talk to a free and independent financial counsellor.
                  </li>

                  <li>
                    Talk to your electricity, gas, phone, or water provider to see if you can work out a payment plan.
                  </li>

                  <li className="break-words">
                    If you are on government benefits, ask if you can receive an advance from Centrelink:{' '}
                    <a
                      href="http://www.humanservices.gov.au/advancepayments"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:brightness-125"
                    >
                      http://www.humanservices.gov.au/advancepayments
                    </a>
                  </li>

                  <li>
                    The government's MoneySmart website shows you how small amount loans work and suggests other options that may help you.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 border-t border-white/10 p-4 sm:p-6 flex justify-end">
              <motion.button
                onClick={onClose}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-black rounded-lg font-medium shadow-md text-sm sm:text-base hover:brightness-110"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                I Understand
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WarningModal;
