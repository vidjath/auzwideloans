import React from 'react';
import { motion } from 'framer-motion';

const SectionHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0b0f14] to-black py-24">
    {/* gradient accents */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 1 }}
      className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl"
    />

    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">Borrow smart.</span>{' '}
          <span className="text-gray-200">Move fast.</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-300">
          Flexible personal loans with a simple application and transparent repayments.
        </p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0, transition: { delayChildren: 0.2, staggerChildren: 0.12 } }
          }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.a
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            href="/apply-now"
            className="px-8 py-3 rounded-lg text-base font-semibold bg-secondary text-white hover:brightness-110 transition-all shadow-lg shadow-secondary/20"
          >
            Apply now
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
            href="#how-it-works"
            className="px-8 py-3 rounded-lg text-base font-semibold bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all"
          >
            How it works
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SectionHero;
