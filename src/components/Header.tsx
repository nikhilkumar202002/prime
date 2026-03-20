"use client";

import { useState, useEffect } from "react";
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
      { title: "Café", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b5/ea/50/je-bent-jezelf-niet-als.jpg?w=900&h=500&s=1", href: "/cafe" },
      { title: "Gaming Arcade", img: "https://i.etsystatic.com/23665971/r/il/4bcce4/3445693810/il_fullxfull.3445693810_m4vj.jpg", href: "/vendor#arcade" },
    ];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    // Prevent background scroll when menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const logoClass = `block w-[160px] sm:w-[200px] transition-opacity duration-200 ${open ? "opacity-0 pointer-events-none z-40" : "opacity-100 z-[60]"} lg:opacity-100 lg:pointer-events-auto lg:z-[60]`;
  const menuBtnClass = `flex items-center gap-3 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full transition-all duration-300 z-[70] relative ${open ? "bg-transparent" : "bg-white/20 backdrop-blur-md border border-white/30"} text-white font-light text-[16px] sm:text-[22px] ${open ? "opacity-0 pointer-events-none" : "opacity-100"} lg:opacity-100 lg:pointer-events-auto`;

  // Framer-motion variants for mobile menu open animation
  const mobileNavVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.32 },
    },
    exit: { opacity: 0, y: 12, transition: { when: "afterChildren", duration: 0.2 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.24 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.26 } },
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between site-container py-8">
      <Link href="/" className={logoClass}>
        <Image src="/images/logosvg.svg" alt="Prime Promenade" width={200} height={50} className="w-full h-auto" />
      </Link>

      <div className="relative">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={menuBtnClass}
        >
          <span>Menu</span>
          <div className="grid grid-cols-2 gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full" />
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

              {/* Desktop / large screens (unchanged) */}
              <motion.nav
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 28, layout: { duration: 0.25 } }}
                className="hidden lg:flex absolute top-[-10px] right-[-10px] z-50 rounded-[30px] pt-24 pb-16 px-12 flex-row items-start gap-12 border border-white/20 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                }}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* --- Left Side: Mega Menu Content (desktop) --- */}
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

                {/* --- Right Side: Main Links (desktop) --- */}
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

              {/* Mobile / small screens: full-screen drawer with accordions */}
              <motion.nav
                variants={mobileNavVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden fixed inset-0 z-50 bg-black p-6 overflow-hidden"
              >
                <motion.div variants={headerVariants} className="flex items-center justify-between mb-6">
                  <Link href="/" onClick={() => setOpen(false)} className="z-60">
                    <Image src="/images/logosvg.svg" alt="Prime Promenade" width={160} height={40} />
                  </Link>
                  <button
                    onClick={() => { setOpen(false); setExpanded(null); }}
                    aria-label="Close menu"
                    className="text-white text-3xl font-light"
                  >
                    ×
                  </button>
                </motion.div>

                <motion.ul className="flex flex-col gap-6 overflow-auto" style={{ paddingRight: 8 }}>
                  {navLinks.map((link) => (
                    <motion.li key={link.label} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl font-medium block"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}

                  {dotLinks.map((link) => (
                    <motion.li key={link.label} variants={itemVariants} className="w-full">
                      {link.hasMega ? (
                        <div>
                          <button
                            onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                            className="w-full flex items-center justify-between text-white text-2xl font-medium py-3"
                          >
                            <span>{link.label}</span>
                            <span className={`transform transition-transform ${expanded === link.label ? "rotate-45" : "rotate-0"}`}>+</span>
                          </button>

                          <AnimatePresence>
                            {expanded === link.label && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {(link.label === "Wellness & Fitness" ? wellnessItems : lifestyleItems).map((item) => (
                                  <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => { setOpen(false); setExpanded(null); }}
                                    className="group flex items-center gap-4"
                                  >
                                    <div className="w-28 h-20 relative rounded-lg overflow-hidden border border-white/10">
                                      <Image src={item.img} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <span className="text-white text-lg">{item.title}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href ?? '#'}
                          onClick={() => setOpen(false)}
                          className="text-white text-2xl font-medium py-3 block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}