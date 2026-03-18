"use client";

import React, { useState, useRef, useEffect } from "react";
import { MotionH2, MotionP } from "@/components/MotionWrappers";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
    <section className="py-16 lg:py-24 pl-8 lg:pl-16 xl:pl-32 overflow-hidden bg-white select-none">
      <div className="grid lg:grid-cols-2 gap-10 mb-14 pr-8 lg:pr-16 xl:pr-32">
        <MotionH2 className="text-4xl lg:text-[56px] font-medium leading-[1.1] tracking-tight text-black">
          Amenities Crafted for <br /> an Elevated Lifestyle
        </MotionH2>
        <MotionP className="text-lg text-black/60 max-w-md lg:pt-4">
          An expertly curated collection of fitness, wellness, corporate, and lifestyle amenities.
        </MotionP>
      </div>

      <div className="relative group">
        <motion.div
          className="flex gap-5"
          animate={{ x: -(scrollIndex * cardWidth) }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Tripling the array to ensure no "white space" during transitions */}
          {[...services, ...services, ...services].map((service, index) => (
            <div
              key={index}
              className="relative flex-none w-[380px] h-[480px] rounded-[24px] overflow-hidden group/card"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />
              
              {/* Permanent Bottom Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              {/* Glassmorphic Hover Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/card:opacity-100 backdrop-blur-md transition-all duration-500 flex flex-col justify-end p-8 border border-white/10 rounded-[24px]">
                <h3 className="text-2xl font-semibold text-white mb-2 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-75">
                  {service.description}
                </p>
              </div>

              {/* Static Text Layer */}
              <div className="absolute bottom-8 left-8 right-8 text-white group-hover/card:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-sm opacity-70 mt-1 line-clamp-1">{service.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating Glass Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 right-10 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-2xl"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 shadow-2xl"
          >
            <ChevronRight size={28} />
          </button>
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