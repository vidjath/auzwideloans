import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { sendContactForm } from '../../services/emailService';

const ContactUs = () => {
  const pageRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactForm(formData);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("There was a problem sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' },
    tap: { scale: 0.95 }
  };

  // Optional GSAP entrance animations with safe dynamic import
  useEffect(() => {
    let ctx;
    (async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        ctx = gsap.context(() => {
          gsap.from('.reveal-y', { y: 24, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' });
        }, pageRef);
      } catch (_) { /* skip */ }
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Page Header - "Get in Touch" */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4 reveal-y">
            We respond within 24 hours
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative inline-block reveal-y">
            Get in Touch
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></span> */}
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about our loans or services? We're here to help. Reach out to 
            us through any of the channels below.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:space-x-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/5 bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden shadow-xl mb-8 md:mb-0"
          >
            <div className="p-8 text-white h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-8 text-gray-300">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-8 mb-auto">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mr-4">
                    <FaPhone className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Phone</p>
                    <a href="tel:0438762492" className="text-white hover:text-green-400 transition-colors duration-300">
                      0438 762 492
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <a href="mailto:info@auzwideloans.com.au" className="text-white hover:text-green-400 transition-colors duration-300 break-all">
                      info@auzwideloans.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mr-4">
                    <FaClock className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Business Hours</p>
                    <p className="text-gray-200">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-200">Weekends: By Appoinments</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-12">
                <p className="text-lg font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" target="_blank" rel="noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors duration-300"
                  >
                    <FaFacebookF className="text-white" />
                  </a>
                  <a 
                    href="https://twitter.com" target="_blank" rel="noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors duration-300"
                  >
                    <FaTwitter className="text-white" />
                  </a>
                  <a 
                    href="https://instagram.com" target="_blank" rel="noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors duration-300"
                  >
                    <FaInstagram className="text-white" />
                  </a>
                  <a 
                    href="https://linkedin.com" target="_blank" rel="noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors duration-300"
                  >
                    <FaLinkedinIn className="text-white" />
                  </a>
                </div>
              </div> */}
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-3/5 bg-white/5 backdrop-blur border border-white/10 rounded-xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-secondary/70 pb-2 inline-block">
              Send Us a Message
            </h2>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-16 h-16 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-8">Thank you for contacting us. We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-secondary text-black rounded-lg hover:brightness-110 transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-5 text-gray-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 rounded-lg border bg-white/5 placeholder-gray-400 ${
                          activeField === 'name' ? 'border-secondary' : 'border-white/20'
                        } focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-300`}
                        placeholder="Your name"
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 rounded-lg border bg-white/5 placeholder-gray-400 ${
                          activeField === 'email' ? 'border-secondary' : 'border-white/20'
                        } focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-300`}
                        placeholder="your@email.com"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-300 font-medium mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setActiveField('phone')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 rounded-lg border bg-white/5 placeholder-gray-400 ${
                          activeField === 'phone' ? 'border-secondary' : 'border-white/20'
                        } focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-300`}
                        placeholder="0400 000 000"
                      />
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-300 font-medium mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-3 rounded-lg border bg-white/5 ${
                          activeField === 'subject' ? 'border-secondary' : 'border-white/20'
                        } focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-300`}
                        required
                      >
                        <option value="" disabled>Please select a subject</option>
                        <option value="loan-inquiry">Loan Inquiry</option>
                        <option value="application-status">Application Status</option>
                        <option value="general-question">General Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border bg-white/5 placeholder-gray-400 ${
                        activeField === 'message' ? 'border-secondary' : 'border-white/20'
                      } focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all duration-300`}
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.div className="text-right mt-6" variants={itemVariants}>
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-secondary text-black font-medium rounded-lg transition-all duration-300 shadow-md flex items-center justify-center space-x-2 ml-auto hover:brightness-110"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <FaPaperPlane />
                    </motion.button>
                    {submitError && (
                      <p className="text-red-400 mt-2 text-sm">{submitError}</p>
                    )}
                    <p className="text-gray-400 mt-2 text-sm italic text-right">Your information is secure and encrypted</p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Quick contact strip */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">
            Prefer email?&nbsp;
            <a href="mailto:info@auzwideloans.com.au" className="text-secondary hover:brightness-125">info@auzwideloans.com.au</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 