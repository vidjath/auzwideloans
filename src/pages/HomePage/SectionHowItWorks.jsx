import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaClock } from 'react-icons/fa';

const features = [
  {
    title: 'Apply in minutes',
    desc: 'Start online and complete quickly with a simple, guided flow.',
    icon: FaBolt
  },
  {
    title: 'Responsible lending',
    desc: 'We assess carefully to match repayments to your situation.',
    icon: FaShieldAlt
  },
  {
    title: 'Fast outcomes',
    desc: 'Get a quick decision and funds after approval.',
    icon: FaClock
  }
];

const SectionHowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-black">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">How it works</h2>
        <p className="mt-3 text-gray-400">Three simple steps to get you funded.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {features.map(({ title, desc, icon: Icon }, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                <Icon />
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-gray-300 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectionHowItWorks;
