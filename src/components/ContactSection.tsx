"use client"

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

export default function ContactSection() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const selectRef = useRef<HTMLDivElement | null>(null);

  const services = [
    "Memberships",
    "Leasing",
    "Partnerships",
    "Events",
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsSelectOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-[black] pt-20 lg:pt-28 pb-0">
      <div className="px-8 lg:px-16 xl:px-32">
        <motion.div
          className="flex items-center gap-3 mb-6 justify-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
          <span className="text-xl text-white">Get in Touch</span>
        </motion.div>
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2] text-white text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.06, duration: 0.7, ease: "easeOut" }}
        >
          Begin Your Journey
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visit Us */}
          <motion.div
            className="bg-[#181818] rounded-[20px] p-8 lg:p-10 flex flex-col gap-7"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.08, duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <p className="text-2xl font-medium text-white mb-3">Visit Us</p>
              <p className="text-lg text-white/80 leading-relaxed">
                Schedule a private tour of our 4-floor lifestyle destination. Experience the space firsthand and discover your perfect fit.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-white">
              <div>
                <p className="text-lg capitalize tracking-tight mb-1">Location:</p>
                <p className="text-base text-white/60 font-light leading-relaxed">Premium Commercial District, City Center</p>
              </div>
            
              <div>
                <p className="text-lg capitalize tracking-tight mb-1">Phone:</p>
                <p className="text-base text-white/60 font-light">+1 (555) 000-0000</p>
              </div>
         
              <div>
                <p className="text-lg capitalize tracking-tight mb-1">Email:</p>
                <p className="text-base text-white/60 font-light">info@elevate-wellness.com</p>
              </div>
          
            </div>
                <div className="h-px bg-white/20"></div>
              <div>
                <p className="text-white text-xl capitalize mb-4">Inquire About</p>
                <div className="flex flex-wrap gap-2">
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Memberships</button>
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Leasing</button>
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Partnerships</button>
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Events</button>
                </div>
              </div>
          </motion.div>
          {/* Contact form */}
          <form className="flex flex-col gap-8 pt-2" onSubmit={(e) => e.preventDefault()}>
            <motion.div
              className="flex flex-col border-b border-white/30 pb-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
            >
              <input type="text" className="bg-transparent text-white text-lg outline-none pb-1" placeholder="Full Name" />
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 border-b border-white/30 pb-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.16, duration: 0.55, ease: "easeOut" }}
            >
              <input type="email" className="bg-transparent text-white text-lg outline-none pb-1" placeholder="Email Address" />
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 border-b border-white/30 pb-4 relative"
              ref={selectRef}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => setIsSelectOpen((s) => !s)}
                className="w-full flex items-center justify-between bg-transparent text-white text-lg outline-none pb-1"
                aria-haspopup="listbox"
                aria-expanded={isSelectOpen}
              >
                <span className={`truncate ${selectedInterest ? 'text-white' : 'text-white/60'}`}>
                  {selectedInterest || "Select an option"}
                </span>
                <svg className={`w-4 h-3 text-white/60 transition-transform ${isSelectOpen ? 'rotate-180' : ''}`} viewBox="0 0 13 7" fill="none"><path d="M1 1L6.5 6L12 1" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>

              {isSelectOpen && (
                <ul className="absolute left-0 right-0 mt-10 bg-[#111] border border-[#333] rounded-lg overflow-hidden z-30">
                  {services.map((svc) => (
                    <li
                      key={svc}
                      className="px-4 py-3 text-[15px] text-white/80 hover:bg-[#222] hover:text-white cursor-pointer"
                      onClick={() => { setSelectedInterest(svc); setIsSelectOpen(false); }}
                      role="option"
                      aria-selected={selectedInterest === svc}
                    >
                      {svc}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 border-b border-white/30 pb-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.24, duration: 0.55, ease: "easeOut" }}
            >
              <textarea rows={4} className="bg-transparent text-white text-lg outline-none resize-none pb-1" placeholder="Write your message" />
            </motion.div>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.28, duration: 0.55, ease: "easeOut" }}
            >
              <button type="submit" className="w-full bg-[#0e0e0e] border border-white/20 rounded-full py-4 text-lg text-white capitalize hover:bg-white/10 transition-colors">
                Send Enquiry
              </button>
            </motion.div>
          </form>
        </div>
      </div>
      <Footer />
      <div className="h-8"></div>
    </section>
  );
}
