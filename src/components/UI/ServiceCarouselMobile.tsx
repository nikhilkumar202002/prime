"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    image: "/images/luxury-gym.png",
    title: "Luxury Gym",
    description: "World-class imported equipment & personal trainers",
  },
  {
    image: "/images/swim-sub.jpeg",
    title: "Private Pools",
    description: "Exclusive hourly bookings for ultimate privacy",
  },
  {
    image: "/images/wellness-cusine.png",
    title: "Wellness Cuisine",
    description: "Diet products & juice outlets from global brands",
  },
  {
    image: "/images/conference-hall.png",
    title: "Conference Hall",
    description: "Multimedia-ready corporate event spaces",
  },
  {
    image: "/images/ev-charging.png",
    title: "EV Charging",
    description: "Future-ready electric vehicle charging stations",
  },
];

const ServiceCarouselMobile = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="lg:hidden">
      <div className="relative">
        <div ref={containerRef} className="-mx-4 px-4 overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 no-scrollbar">
        {services.map((service, i) => (
          <div key={i} className="snap-center flex-none w-[82%] sm:w-[68%] rounded-[18px] overflow-hidden group/card relative h-[360px] sm:h-[420px]">
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
            />

            {/* Permanent Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

            {/* Glassmorphic Hover Overlay (on top) - mobile won't hover but keeps design parity */}
            <div className="absolute inset-0 z-30 bg-white/5 opacity-0 group-hover/card:opacity-100 backdrop-blur-md transition-all duration-300 flex flex-col justify-end p-6 border border-white/10 rounded-[18px]">
              <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.35 }} className="text-xl font-semibold text-white mb-1 transform translate-y-3 group-hover/card:translate-y-0 transition-transform duration-400">
                {service.title}
              </motion.h3>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.35, delay: 0.04 }} className="text-white/80 text-sm leading-relaxed transform translate-y-3 group-hover/card:translate-y-0 transition-transform duration-400">
                {service.description}
              </motion.p>
            </div>

            {/* Static Text Layer (visible by default) */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="text-sm opacity-70 mt-1 line-clamp-2">{service.description}</p>
            </div>
          </div>
        ))}
        </div>

        {/* Floating navigation centered vertically over cards */}
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="absolute top-1/2 -translate-y-1/2 left-4 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-2xl z-50"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="absolute top-1/2 -translate-y-1/2 right-4 w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-2xl z-50"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCarouselMobile;
