"use client";
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Coming Soon Page
 * Maintains the "Floor by Floor" luxury aesthetic.
 * Uses Framer Motion for sophisticated reveal animations.
 */
const ComingSoonPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />

      <main className="relative z-10 text-center px-8">
        {/* Top Badge - Matches StackCard Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-10 justify-center"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-white/70 uppercase tracking-[0.4em] text-xs sm:text-sm font-light">
            Floor by Floor
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="text-white text-5xl sm:text-7xl lg:text-[90px] font-normal tracking-tight leading-[1.1] mb-8"
        >
          The Next Level <br /> 
          <span className="italic font-light opacity-80">is Ascending</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12"
        >
          We are currently handcrafting a new digital experience to match our 
          architectural vision. Something extraordinary is being built.
        </motion.p>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full w-full sm:w-80 focus:outline-none focus:border-white/40 transition-all placeholder:text-white/20"
          />
          <button className="bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 w-full sm:w-auto uppercase text-xs tracking-widest">
            Notify Me
          </button>
        </motion.div>
      </main>

      {/* Subtle Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 w-full text-center px-4"
      >
        <div className="h-[1px] w-12 bg-white/20 mx-auto mb-6"></div>
        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase">
          Curated Luxury — Coming 2024
        </p>
      </motion.footer>
    </div>
  );
};

export default ComingSoonPage;