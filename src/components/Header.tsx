"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

    const navLinks = [
      { label: "About us", href: "/about" },
    ];

    const dotLinks = [
      { label: "Wellness & Fitness", hasMega: true },
      { label: "Lifestyle & Fun", href: "/vendor", hasMega: true },
      { label: "Education", href: "/study-centre" },
      { label: "Multipurpose Hall ", href: "/conference" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ];

    const wellnessItems = [
      { title: "Oxy Gym", img: "/images/gym.webp", href: "/gym" },
      { title: "Swimming Pool", img: "/images/swim.webp", href: "/pool-booking" },
      { title: "Spa & Salon", img: "/images/gim_slider.jpg.jpeg", href: "/spa" },
      { title: "Pharmacy", img: "/images/hall.webp", href: "/pharmacy" },
      { title: "Diet & Diabetic..", img: "/images/7adf76efdedce63095cbc41318e882376e7b15ba.png", href: "/pharmacy" },
    ];

    const lifestyleItems = [
      { title: "Multi-Brand Retail Store", img: "/images/forever-innerpage-slider.jpeg", href: "/vendor" },
      { title: "Café", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b5/ea/50/je-bent-jezelf-niet-als.jpg?w=900&h=500&s=1", href: "/vendor#cafe" },
      { title: "Gaming Arcade", img: "https://i.etsystatic.com/23665971/r/il/4bcce4/3445693810/il_fullxfull.3445693810_m4vj.jpg", href: "/vendor#arcade" },
    ];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-8">
      <Link href="/" className="z-[60]">
        <Image src="/images/logosvg.svg" alt="Prime Promenade" width={200} height={50} />
      </Link>

      <div className="relative">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-3 px-6 py-2.5 rounded-full transition-all duration-300 z-[70] relative ${
            open ? "bg-transparent" : "bg-white/20 backdrop-blur-md border border-white/30"
          } text-white font-light text-[22px]`}
        >
          <span>Menu</span>
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <>
              {/* Overlay Background */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/10"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.nav
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 28, layout: { duration: 0.25 } }}
                className="absolute top-[-10px] right-[-10px] z-50 rounded-[30px] pt-24 pb-16 px-12 flex flex-row items-start gap-12 border border-white/20 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                }}
                // This ensures if the mouse leaves the entire glass panel, we reset the hover state
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* --- Left Side: Mega Menu Content --- */}
                <motion.div className="relative flex items-start" layout>
                  <AnimatePresence mode="wait">
                    {hoveredLink === "Wellness & Fitness" && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ layout: { duration: 0.22 }, type: "spring", stiffness: 300, damping: 28 }}
                        className="flex flex-col gap-8 pr-12 border-r border-white/30 min-w-[600px] justify-start self-start mb-[-50px]"
                      >
                        <h2 className="text-white text-[32px] font-semi mb-[-20px]">Wellness & Fitness</h2>
                        <div className="grid grid-cols-3 gap-5">
                          {wellnessItems.map((item) => (
                            <Link key={item.title} href={item.href} className="group block">
                              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-white/10">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                              <p className="text-white font-light text-[18px]">{item.title}</p>
                            </Link>
                          ))}
                        </div>

                      </motion.div>
                    )}

                    {hoveredLink === "Lifestyle & Fun" && (
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ layout: { duration: 0.22 }, type: "spring", stiffness: 300, damping: 28 }}
                        className="flex flex-col gap-8 pr-12 border-r border-white/30 min-w-[600px] justify-start self-start mb-[-50px]"
                      >
                        <h2 className="text-white text-[32px] font-semi mb-[-20px]">Lifestyle & Fun</h2>
                        <div className="grid grid-cols-3 gap-5">
                          {lifestyleItems.map((item) => (
                            <Link key={item.title} href={item.href} className="group block">
                              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-white/10">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                              <p className="text-white font-light text-[18px]">{item.title}</p>
                            </Link>
                          ))}
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* --- Right Side: Main Links --- */}
                <motion.div layout className="flex flex-col items-end gap-8 min-w-[260px]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-white text-[25px] font-light hover:opacity-60 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {dotLinks.map((link) => (
                    <div
                      key={link.label}
                      onMouseEnter={link.hasMega ? () => setHoveredLink(link.label) : undefined}
                      className="w-full"
                    >
                      {link.href ? (
                        <Link
                          href={link.href}
                          className="group flex items-center gap-4 justify-end w-full text-white text-[25px] font-light hover:opacity-60 transition-opacity"
                        >
                          {link.hasMega && (
                            <span className={`w-2.5 h-2.5 rounded-full bg-white transition-all ${
                              hoveredLink === link.label ? "bg-green-400 shadow-[0_0_10px_#4ade80]" : ""
                            }`} />
                          )}
                          {link.label}
                        </Link>
                      ) : (
                        <div
                          role="button"
                          tabIndex={0}
                          className="group flex items-center gap-4 justify-end w-full text-white text-[25px] font-light hover:opacity-60 transition-opacity cursor-default"
                        >
                          {link.hasMega && (
                            <span className={`w-2.5 h-2.5 rounded-full bg-white transition-all ${
                              hoveredLink === link.label ? "bg-green-400 shadow-[0_0_10px_#4ade80]" : ""
                            }`} />
                          )}
                          {link.label}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}