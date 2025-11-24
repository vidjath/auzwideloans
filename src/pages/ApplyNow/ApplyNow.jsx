import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaHome,
  FaMoneyBillWave,
  FaInfoCircle,
  FaShieldAlt,
} from "react-icons/fa";
import WarningModal from "../../components/WarningModal"; // ✅ default import
import { sendApplicationForm } from "../../services/emailService";

const ApplyNow = () => {
  const pageRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    loanPurpose: "",
    loanAmount: "",
    mainReason: "",
    priority: "",
    securityWilling: false,
    firstName: "",
    lastName: "",
    dob: {
      day: "",
      month: "",
      year: "",
    },
    citizenship: "",
    incomeSource: "",
    creditScore: "",
    phone: "",
    email: "",
    address: {
      unitNumber: "",
      street: "",
      suburb: "",
      state: "",
      postcode: "",
    },
    agreeTerms: false,
    understandOffer: false,
    security: "",
    vehicleDetails: "",
    assetDescription: "",
    guarantorRelationship: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Show warning modal when component mounts
  useEffect(() => {
    setShowWarning(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    let fieldValue;
    if (type === "select-one") {
      const selectedOption = e.target.options[e.target.selectedIndex];
      fieldValue = selectedOption.text;
    } else {
      fieldValue = type === "checkbox" ? checked : value;
    }

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: fieldValue,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: fieldValue,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await sendApplicationForm(formData);

      // Reset form or redirect after successful submission
      setTimeout(() => {
        // Reset form or redirect
      }, 5000);
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
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
      } catch (_) { /* skip if gsap not available */ }
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Warning Modal */}
      <WarningModal
        isOpen={showWarning}
        onClose={() => setShowWarning(false)}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 reveal-y">
            Apply for a Loan
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Complete the form below to apply for your personal loan. Our team
            will review your application and get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/5 backdrop-blur border border-white/10 shadow-xl rounded-xl overflow-hidden"
        >
          <div className="bg-white/10 border-b border-white/10 py-6 px-8">
            <h2 className="text-xl text-white font-semibold">
              Loan Application Form
            </h2>
            <p className="text-gray-300 text-sm">
              Please complete all required fields
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 text-gray-200">
            {/* Loan Details Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FaMoneyBillWave className="mr-2 text-secondary" /> Loan Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What are you looking for?
                  </label>
                  <input
                    type="text"
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 transition duration-300"
                    placeholder="e.g., Home renovation, Car purchase..."
                    required
                  />
                </div> */}

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    How much would you like to borrow?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-400">
                      $
                    </span>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    What is your main reason for borrowing?
                  </label>
                  <select
                    name="mainReason"
                    value={formData.mainReason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Please choose an option</option>
                    <option value="debt_consolidation" className="bg-gray-900 text-white">
                      Debt Consolidation
                    </option>
                    <option value="home_improvement" className="bg-gray-900 text-white">Home Improvement</option>
                    <option value="major_purchase" className="bg-gray-900 text-white">Major Purchase</option>
                    <option value="education" className="bg-gray-900 text-white">Education</option>
                    <option value="business" className="bg-gray-900 text-white">Business</option>
                    <option value="medical" className="bg-gray-900 text-white">Medical Expenses</option>
                    <option value="other" className="bg-gray-900 text-white">Other</option>
                  </select>
                </div>

                {/* <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What is most important to you?
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50 transition duration-300"
                    required
                  >
                    <option value="">Please choose an option</option>
                    <option value="low_interest">Low Interest Rate</option>
                    <option value="low_repayment">Low Repayment</option>
                    <option value="quick_funding">Quick Funding</option>
                    <option value="flexible_terms">Flexible Terms</option>
                    <option value="customer_service">Customer Service</option>
                  </select>
                </div> */}
              </div>

            </div>

            {/* Personal Details Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FaUser className="mr-2 text-secondary" /> About You
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-gray-300 font-medium mb-2">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <select
                    name="dob.day"
                    value={formData.dob.day}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      paddingRight: '2rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-gray-900 text-white">
                        {i + 1}
                      </option>
                    ))}
                  </select>

                  <select
                    name="dob.month"
                    value={formData.dob.month}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      paddingRight: '2rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month, i) => (
                      <option key={i} value={i + 1} className="bg-gray-900 text-white">
                        {month}
                      </option>
                    ))}
                  </select>

                  <select
                    name="dob.year"
                    value={formData.dob.year}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      paddingRight: '2rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Year</option>
                    {[...Array(80)].map((_, i) => {
                      const year = new Date().getFullYear() - 18 - i;
                      return (
                        <option key={year} value={year} className="bg-gray-900 text-white">
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            {/* More About You Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FaInfoCircle className="mr-2 text-secondary" /> More About You
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    What is your residency status?
                  </label>
                  <select
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Please choose an option</option>
                    <option value="citizen" className="bg-gray-900 text-white">Australian Citizen</option>
                    <option value="permanent_resident" className="bg-gray-900 text-white">
                      Permanent Resident
                    </option>
                    <option value="temporary_resident" className="bg-gray-900 text-white">
                      Temporary Resident
                    </option>
                    <option value="other" className="bg-gray-900 text-white">International Student</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    What is your main source of income?
                  </label>
                  <select
                    name="incomeSource"
                    value={formData.incomeSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Please choose an option</option>
                    <option value="full_time" className="bg-gray-900 text-white">Full-time Employment</option>
                    <option value="part_time" className="bg-gray-900 text-white">Part-time Employment</option>
                    <option value="self_employed" className="bg-gray-900 text-white">Casual Employment</option>
                    <option value="other" className="bg-gray-900 text-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    What is your marital status?
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Please choose an option</option>
                    <option value="single" className="bg-gray-900 text-white">Single</option>
                    <option value="defacto" className="bg-gray-900 text-white">De Facto</option>
                    <option value="married" className="bg-gray-900 text-white">Married</option>
                    <option value="separated" className="bg-gray-900 text-white">Separated</option>
                    <option value="others" className="bg-gray-900 text-white">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    How many dependents do you have?
                  </label>
                  <input
                    type="number"
                    name="dependents"
                    value={formData.dependents}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    placeholder="Enter number of dependents"
                    min="0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    How would you describe your current credit score?
                  </label>
                  <select
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                    required
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Please choose an option</option>
                    <option value="excellent" className="bg-gray-900 text-white">Excellent (800+)</option>
                    <option value="very_good" className="bg-gray-900 text-white">Very Good (700-799)</option>
                    <option value="good" className="bg-gray-900 text-white">Good (650-699)</option>
                    <option value="fair" className="bg-gray-900 text-white">Fair (550-649)</option>
                    <option value="poor" className="bg-gray-900 text-white">Poor (below 550)</option>
                    <option value="not_sure" className="bg-gray-900 text-white">Not Sure</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Details Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FaPhoneAlt className="mr-2 text-secondary" /> Your Contact
                Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    placeholder="0400 000 000"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FaHome className="mr-2 text-secondary" /> Your Address
              </h3>

              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Unit/Suite Number
                    </label>
                    <input
                      type="text"
                      name="address.unitNumber"
                      value={formData.address.unitNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Suburb
                    </label>
                    <input
                      type="text"
                      name="address.suburb"
                      value={formData.address.suburb}
                      onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      State
                    </label>
                    <select
                      name="address.state"
                      value={formData.address.state}
                      onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                    style={{ 
                      WebkitAppearance: 'none', 
                      MozAppearance: 'none', 
                      height: '48px',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem'
                    }}
                      required
                    >
                      <option value="" className="bg-gray-900 text-gray-400">Please Select</option>
                      <option value="NSW" className="bg-gray-900 text-white">New South Wales</option>
                      <option value="VIC" className="bg-gray-900 text-white">Victoria</option>
                      <option value="QLD" className="bg-gray-900 text-white">Queensland</option>
                      <option value="WA" className="bg-gray-900 text-white">Western Australia</option>
                      <option value="SA" className="bg-gray-900 text-white">South Australia</option>
                      <option value="TAS" className="bg-gray-900 text-white">Tasmania</option>
                      <option value="ACT" className="bg-gray-900 text-white">Australian Capital Territory</option>
                      <option value="NT" className="bg-gray-900 text-white">Northern Territory</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Postcode
                    </label>
                    <input
                      type="text"
                      name="address.postcode"
                      value={formData.address.postcode}
                      onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                      maxLength="4"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Information Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <FaShieldAlt className="mr-2 text-secondary" /> Security
                Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                  Proving security may increase chance of funding and improve offers from lenders. Are you willing and able to provide some form of security as part of your application?
                  </label>
                  <div className="relative">
                    <select
                      name="security"
                      value={formData.security || ""}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300 appearance-none"
                      style={{ 
                        WebkitAppearance: 'none', 
                        MozAppearance: 'none', 
                        height: '48px',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239CA3AF' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        paddingRight: '2.5rem'
                      }}
                      required
                    >
                      <option value="" disabled className="bg-gray-900 text-gray-400">Please choose an option</option>
                      <option value="yes" className="bg-gray-900 text-white">Yes</option>
                      <option value="no" className="bg-gray-900 text-white">No</option>
                    </select>
                    {(formData.security === "yes" || formData.security === "no") && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 text-xl">✔️</span>
                    )}
                  </div>
                </div>

                

                {formData.security === "vehicle" && (
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Vehicle Details
                    </label>
                    <input
                      type="text"
                      name="vehicleDetails"
                      value={formData.vehicleDetails || ""}
                      onChange={handleInputChange}
                      placeholder="Year, Make, Model"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    />
                  </div>
                )}

                {formData.security === "other_asset" && (
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Asset Description
                    </label>
                    <input
                      type="text"
                      name="assetDescription"
                      value={formData.assetDescription || ""}
                      onChange={handleInputChange}
                      placeholder="Describe your asset"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    />
                  </div>
                )}

                {formData.security === "guarantor" && (
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Guarantor Relationship
                    </label>
                    <input
                      type="text"
                      name="guarantorRelationship"
                      value={formData.guarantorRelationship || ""}
                      onChange={handleInputChange}
                      placeholder="e.g. Parent, Sibling, Friend"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-gray-200 placeholder-gray-400 focus:border-secondary focus:ring focus:ring-secondary/40 focus:ring-opacity-50 transition duration-300"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-8 bg-white/5 text-gray-200 p-6 rounded-lg border border-white/10">
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-secondary focus:ring-secondary border-white/20 bg-white/5 rounded"
                    required
                  />
                  <span className="ml-2 text-gray-200">
                    By clicking submit you acknowledge that this service is
                    provided by and subject to Auzwide Loans's{" "}
                    <a
                      href="/terms-conditions"
                      className="text-secondary underline hover:brightness-125"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="text-secondary underline hover:brightness-125"
                    >
                      Privacy Policy
                    </a>{" "}
                    that you have already agreed to.
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="understandOffer"
                    checked={formData.understandOffer}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-secondary focus:ring-secondary border-white/20 bg-white/5 rounded"
                    required
                  />
                  <span className="ml-2 text-gray-200">
                    I also understand I may be offered a financial product from
                    another lender, and based on their credit assessment of my
                    application, it may not be the exact same type or amount I
                    applied for.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-secondary text-black hover:brightness-110 font-medium text-lg rounded-lg transition duration-300 shadow-md"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </motion.button>
              <p className="text-gray-400 mt-4 text-sm">
                Your information is secure and encrypted
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyNow;
