"use client";

import React, { useState, useRef, useEffect } from "react";
import { MotionH2, MotionP } from "@/components/MotionWrappers";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ServiceCarouselMobile from "./ServiceCarouselMobile";

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

const ServiceCarousel = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardWidth = 340; // Card width (320px) + Gap (20px)

  const nextSlide = () => {
    setScrollIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setScrollIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-16 lg:py-24 overflow-hidden bg-white select-none">
      <div className="relative site-container">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-14">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-black/80 inline-block" />
              <span className="text-sm text-black/70">World-Class</span>
            </div>
            <MotionH2 className="w-[100%] lg:w-[60%] text-4xl lg:text-[56px] font-medium leading-[1.1] tracking-tight text-black">
              Amenities Crafted for an Elevated Lifestyle
            </MotionH2>
          </div>
          <MotionP className="text-lg text-black/60 max-w-md lg:pt-4">
            An expertly curated collection of fitness, wellness, corporate, and lifestyle amenities—designed to inspire performance, relaxation, and meaningful experiences in one seamless destination.
          </MotionP>
        </div>

      {/* Mobile: show simple horizontal carousel with the same card design */}
      <div className="lg:hidden">
        <ServiceCarouselMobile />
      </div>

      {/* Desktop: original animated carousel */}
      <div className="hidden lg:block">
        <div className="group">
          <div className="relative">
            <motion.div
              className="flex gap-5"
              animate={{ x: -(scrollIndex * cardWidth) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Tripling the array to ensure no "white space" during transitions */}
              {[...services, ...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className="relative flex-none w-[380px] h-[520px] rounded-[24px] overflow-hidden group/card"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  
                  {/* Permanent Bottom Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  {/* Glassmorphic Hover Overlay (on top) */}
                  <div className="absolute inset-0 z-30 bg-white/5 opacity-0 group-hover/card:opacity-100 backdrop-blur-md transition-all duration-300 flex flex-col justify-end p-8 border border-white/10 rounded-[24px]">
                    <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.45 }} className="text-2xl font-semibold text-white mb-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                      {service.title}
                    </motion.h3>
                    <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.45, delay: 0.06 }} className="text-white/80 text-sm leading-relaxed transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Static Text Layer (below overlay) */}
                  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.45 }} className="absolute bottom-8 left-8 right-8 text-white group-hover/card:opacity-0 transition-opacity duration-200 z-10">
                    <h3 className="text-xl font-medium">{service.title}</h3>
                    <p className="text-sm opacity-70 mt-1 line-clamp-1">{service.description}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Floating Glass Navigation - left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-8 lg:left-16 xl:left-32 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-50">
            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-2xl"
            >
              <ChevronLeft size={28} />
            </button>
          </div>

          {/* Floating Glass Navigation - right */}
          <div className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-16 xl:right-32 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 z-50">
            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-2xl"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ServiceCarousel;