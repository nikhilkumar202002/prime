"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]" />

      <main className="relative z-10 text-center px-6">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-8 justify-center"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-white/60 uppercase tracking-[0.3em] text-xs sm:text-sm">
            Coming Soon
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-6"
        >
          Refining the <br /> 
          <span className="italic">Experience</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/40 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed font-light"
        >
          We are currently crafting a digital sanctuary for luxury living. 
          Stay tuned for the grand unveiling.
        </motion.p>

        {/* Input/Notify Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-full w-full sm:w-80 focus:outline-none focus:border-white/30 transition-all"
          />
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all w-full sm:w-auto">
            Notify Me
          </button>
        </motion.div>
      </main>

      {/* Footer / Socials */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 w-full text-center"
      >
        <p className="text-white/20 text-sm tracking-widest uppercase">
          © 2024 Luxury Estate — Floor by Floor
        </p>
      </motion.footer>
    </div>
  );
};

export default ComingSoon;