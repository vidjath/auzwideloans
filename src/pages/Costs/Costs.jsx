import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaCalculator, FaMoneyBillWave, FaCalendarAlt, FaPercentage, FaBolt, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const LoanCosts = () => {
  const [isLoanDetailsHovered, setIsLoanDetailsHovered] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const pageRef = useRef(null);

  // Optional GSAP entrance animations with safe dynamic import
  useEffect(() => {
    let ctx;
    (async () => {
      try {
        const gsapModule = await import('gsap');
        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        ctx = gsap.context(() => {
          gsap.from('.reveal-y', { y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' });
          gsap.from('.reveal-fade', { opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });
        }, pageRef);
      } catch (_) {
        // GSAP not installed; silently skip
      }
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4 reveal-fade">
            Transparent costs, no surprises
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 reveal-y">
            Understand Your Repayments Clearly
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-3xl mx-auto reveal-fade">
            We keep things simple and clear so you always know what you’ll pay and when.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start space-x-3 reveal-fade">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <FaBolt className="text-secondary" />
            </div>
            <div>
              <div className="text-white font-semibold">Quick assessment</div>
              <div className="text-gray-400 text-sm">Fast, easy, and stress‑free.</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start space-x-3 reveal-fade">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <FaShieldAlt className="text-secondary" />
            </div>
            <div>
              <div className="text-white font-semibold">No hidden fees</div>
              <div className="text-gray-400 text-sm">Clear breakdown every step.</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start space-x-3 reveal-fade">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <FaCalendarAlt className="text-secondary" />
            </div>
            <div>
              <div className="text-white font-semibold">Flexible terms</div>
              <div className="text-gray-400 text-sm">Repayments that suit you.</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start space-x-3 reveal-fade">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <FaCheckCircle className="text-secondary" />
            </div>
            <div>
              <div className="text-white font-semibold">Transparent example</div>
              <div className="text-gray-400 text-sm">See an estimate below.</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Loan Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="md:col-span-3 bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow-lg overflow-hidden"
          >
            <div className="bg-white/10 text-white p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold flex items-center">
                <FaCalculator className="mr-3 text-secondary" /> Loan Example
              </h2>
              <p className="mt-2 text-gray-300">Sample repayment calculation</p>
            </div>

            <motion.div 
              className="p-6"
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setIsLoanDetailsHovered(true)}
              onHoverEnd={() => setIsLoanDetailsHovered(false)}
              transition={{ duration: 0.3 }}
            >
              <div className="text-lg font-medium text-gray-200 mb-6">
                When you borrow an amount of $2,500 over 2 years, you will pay:
              </div>

              <div className="space-y-5">
                <div className="flex items-start p-4 border-l-4 border-secondary/70 bg-white/5 rounded-r-lg">
                  <FaMoneyBillWave className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-300">Statutory fee</div>
                    <div className="text-2xl font-bold text-white">$400</div>
                  </div>
                </div>

                <div className="flex items-start p-4 border-l-4 border-green-500/70 bg-white/5 rounded-r-lg">
                  <FaPercentage className="text-green-400 text-xl mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-300">Annual Cost Rate (Interest)</div>
                    <div className="text-2xl font-bold text-white">47.6158%</div>
                  </div>
                </div>

                <div className="flex items-start p-4 border-l-4 border-yellow-500/70 bg-white/5 rounded-r-lg">
                  <FaInfoCircle className="text-yellow-400 text-xl mt-1 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-300">Comparison rate</div>
                    <div className="text-2xl font-bold text-white">65.6597% pa*</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Repayment Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="md:col-span-2 flex flex-col"
          >
            <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 shadow-lg p-6 mb-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-green-400" /> Repayment Summary
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium text-gray-300">Loan amount</span>
                  <span className="font-bold text-white">$2,500</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium text-gray-300">Loan term</span>
                  <span className="font-bold text-white">24 months</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium text-gray-300">Fees</span>
                  <span className="font-bold text-white">$400</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="font-medium text-gray-300">Interest charges</span>
                  <motion.span 
                    className="font-bold text-white"
                    animate={{ scale: isLoanDetailsHovered ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    ~$1,243
                  </motion.span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold text-gray-200">Total repayable</span>
                  <motion.span 
                    className="font-bold text-xl text-white"
                    animate={{ scale: isLoanDetailsHovered ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    ~$4,143
                  </motion.span>
                </div>
              </div>
            </div>

            <a 
              href="/apply-now" 
              className="block"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-secondary hover:brightness-110 text-black font-bold rounded-lg shadow-lg transition duration-300 text-center"
              >
                APPLY NOW!
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Timeline strip */}
        <div className="mt-12 mb-6">
          <div className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { label: 'Apply', desc: '2–3 minutes' },
                { label: 'Assessment', desc: 'Same day' },
                { label: 'Offer', desc: 'Clear breakdown' },
                { label: 'Payout', desc: 'Fast transfer' },
              ].map((step, idx) => (
                <div key={idx} className="p-5 text-center">
                  <div className="text-white font-semibold">{step.label}</div>
                  <div className="text-gray-400 text-sm">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-12 p-6 border border-yellow-500/30 rounded-lg bg-yellow-500/10 text-yellow-200"
        >
          <div className="flex items-start">
            <FaInfoCircle className="text-yellow-400 text-xl mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white mb-2">WARNING:</h3>
              <p className="text-gray-200">
                This comparison rate is true only for the example given and may not include all fees and charges. Different terms, fees or other loan amounts might result in a different comparison rate.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Calculator (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 italic">
            The above is just an example. For personalized loan calculations, please <a href="/contact-us" className="text-secondary hover:underline">contact our team</a>.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-3">
            {[
              { q: 'Will my repayments change over time?', a: 'Your schedule outlines the due dates and amounts clearly in advance. Any change would be communicated and agreed first.' },
              { q: 'Are there any hidden fees?', a: 'No. We provide a transparent breakdown before you proceed—including fees and interest.' },
              { q: 'Can I repay early?', a: 'Yes, you can make extra repayments or repay early. Contact us to confirm details for your offer.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between"
                >
                  <span className="text-white font-medium">{item.q}</span>
                  <span className="text-gray-400 text-xl">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-gray-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCosts; 