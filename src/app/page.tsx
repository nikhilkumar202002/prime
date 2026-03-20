'use client'

import AnimatedText from "@/components/AnimatedText";
import { MotionSpan, MotionH2, MotionP, MotionDiv } from "@/components/MotionWrappers";
import StackCard from "@/components/UI/StackCard";
import ServiceCarousel from "@/components/UI/ServiceCarousel";

export default function HomePage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* Hero */}
      <section className="relative w-full h-screen min-h-[520px] md:min-h-[600px] overflow-hidden">
        <video autoPlay loop playsInline muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/0_Shopping_Mall_Luxury_3840x2160.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-end pb-12 md:pb-20 site-container">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <AnimatedText
              as="h1"
              lines={["Prime Promenade.", "Many Experiences."]}
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[84px] font-normal leading-[1.1] tracking-[-0.02em]"
              delay={0.15}
              stagger={0.06}
            />
            <MotionDiv
              className="flex flex-col gap-6 lg:items-end"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-white text-lg lg:text-xl leading-relaxed max-w-md lg:text-right">
                A premium four-floor lifestyle destination seamlessly blending fitness, wellness, business, and modern luxury experiences.
              </p>
                <div className="flex flex-wrap gap-4">
                <button className="glass rounded-full px-6 py-3 text-white text-base sm:text-lg capitalize hover:bg-white/30 transition-colors">Explore Amenities</button>
                <button className="glass rounded-full px-6 py-3 text-white text-base sm:text-lg capitalize hover:bg-white/30 transition-colors">Partner With Us</button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Four Floors of Unmatched Excellence */}
      <section className="py-20 lg:py-28 site-container">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <MotionSpan
            className="text-xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            The Destination
          </MotionSpan>
        </div>
        <MotionH2
          className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2] text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
        >
          Four Floors of<br />Unmatched Excellence
        </MotionH2>
        <MotionP
          className="text-center text-lg lg:text-xl max-w-3xl mx-auto text-black/80 mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.22, duration: 0.6, ease: "easeOut" }}
        >
          A contemporary architectural landmark uniting premium fitness, wellness, corporate spaces, and lifestyle retail into one world-class destination.
        </MotionP>

        {/* Image Grid: 3 columns (2:1:1) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5 items-start">
          {/* Col 1: Large tall image */}
          <MotionDiv
            className="relative rounded-[24px] overflow-hidden h-[480px] md:h-[600px] lg:h-[729px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <img src="/images/1bcc5c4d081472f10ce51878271b71a7182c1268.png" alt="Prime Promenade Interior" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center center" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 rounded-[24px]"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-[25px] font-medium leading-tight mb-3">Elevating Lifestyle, Under One Roof</p>
              <p className="hidden lg:block text-base opacity-90 leading-relaxed tracking-tight w-[70%]">A thoughtfully planned four-floor destination where luxury architecture meets purposeful design—crafted to elevate fitness, wellness, business, and lifestyle experiences under one iconic roof.</p>
            </div>
          </MotionDiv>

          {/* Col 2: Top image + bottom lime card */}
          <div className="flex flex-col gap-5 h-[480px] md:h-[600px] lg:h-[729px]">
            <MotionDiv
              className="relative rounded-[24px] overflow-hidden flex-1 min-h-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: 0.18, duration: 0.6 }}
            >
              <img src="/images/421fba8ad9be007925e28b68595dd1e9801206b0.png" alt="Designer Interiors" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[45%] to-black/70 rounded-[24px]"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[25px] font-medium leading-tight">Designer Interiors</p>
                <p className="text-sm mt-1 opacity-90">Curated by award-winning architects</p>
              </div>
            </MotionDiv>
            <MotionDiv
              className="bg-[#e1ff83] rounded-[24px] flex-1 min-h-0 p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: 0.22, duration: 0.6 }}
            >
              <div className="flex flex-col justify-end h-full items-start text-left">
                <img src="/images/4cd4de5e688bee548fb61776ab7a8d5c0ada1349.png" alt="" className="w-10 h-10 object-contain mb-3" />
                <div>
                  <p className="text-[25px] font-medium text-black leading-tight">Smart Access</p>
                  <p className="text-base text-black/80 leading-relaxed tracking-tight">Biometric &amp; card-based secure entry systems</p>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Col 3: Tall image full height */}
          <MotionDiv
            className="relative rounded-[24px] overflow-hidden h-[480px] md:h-[600px] lg:h-[729px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.24, duration: 0.6 }}
          >
            <img src="/images/31573c6eb4e2d6458be302ad6c5c8ef77abf46ce.png" alt="Premium Security" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center center" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[74%] to-black/20 rounded-[24px]"></div>
            <div className="absolute bottom-8 left-6 text-white">
              <p className="text-[25px] font-medium leading-tight mb-2">Premium Security</p>
              <p className="text-base opacity-90 tracking-tight">24/7 surveillance &amp; concierge services</p>
            </div>
          </MotionDiv>
        </div>
      </section>

      <StackCard/>

      <ServiceCarousel/>


      {/* Transform Your Body */}
      <section className="relative bg-black rounded-[20px] overflow-hidden pt-10 md:pt-14 pb-8 md:pb-10 site-container mb-6 ">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-10">
          <MotionDiv
            className=""
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
                <span className="text-xl">Fitness &amp; Wellness</span>
              </div>
              <MotionH2
                className="text-3xl sm:text-4xl lg:text-[60px] font-normal text-white leading-[1.15] lg:leading-[1.05]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ delay: 0.06, duration: 0.7, ease: "easeOut" }}
              >
                Transform Your Body.<br />Elevate Your Life.
              </MotionH2>
            </div>
          </MotionDiv>

          <MotionDiv
            className="lg:flex lg:items-end lg:pb-2 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <MotionP className="text-base md:text-lg text-white/70 leading-relaxed max-w-full md:max-w-md" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.6 }}>
              Our Platinum membership unlocks an unparalleled fitness journey — from world-class equipment and private pool sessions to curated nutrition and spa recovery.
            </MotionP>
          </MotionDiv>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Feature list */}
          <MotionDiv
            className="bg-[#161616] rounded-[20px] px-6 md:px-10 lg:px-14 py-8 md:py-12 flex items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-5 w-full">
              <li className="flex items-center gap-4 text-white text-base md:text-lg">
                <img src="/images/538e67c6c0ed7721511ee5942dd82a348b8901fe.svg" alt="" className="w-7 h-7 flex-shrink-0 object-contain" />
                Imported gym equipment from global brands
              </li>
              <li className="flex items-center gap-4 text-white text-lg">
                <img src="/images/538e67c6c0ed7721511ee5942dd82a348b8901fe.svg" alt="" className="w-7 h-7 flex-shrink-0 object-contain" />
                Private pool experiences with exclusive bookings
              </li>
              <li className="flex items-center gap-4 text-white text-lg">
                <img src="/images/538e67c6c0ed7721511ee5942dd82a348b8901fe.svg" alt="" className="w-7 h-7 flex-shrink-0 object-contain" />
                Platinum membership with premium perks
              </li>
              <li className="flex items-center gap-4 text-white text-lg">
                <img src="/images/538e67c6c0ed7721511ee5942dd82a348b8901fe.svg" alt="" className="w-7 h-7 flex-shrink-0 object-contain" />
                Diet products from international wellness brands
              </li>
              <li className="flex items-center gap-4 text-white text-lg">
                <img src="/images/538e67c6c0ed7721511ee5942dd82a348b8901fe.svg" alt="" className="w-7 h-7 flex-shrink-0 object-contain" />
                Wellness-focused breakfast &amp; fresh juice bar
              </li>
              <li className="flex items-center gap-4 text-white text-lg">
                <img src="/images/538e67c6c0ed7721511ee5942dd82a348b8901fe.svg" alt="" className="w-7 h-7 flex-shrink-0 object-contain" />
                Luxury spa &amp; holistic recovery zones
              </li>
            </ul>
          </MotionDiv>

          {/* Gym image with membership card */}
          <MotionDiv
            className="relative h-[480px] md:h-[480px] lg:h-[596px] rounded-[20px] overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.16, duration: 0.65, ease: "easeOut" }}
          >
            <img src="/images/060cc9853c06cfa47f94502c8517d564c50ff930.png" alt="Fitness" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="relative rounded-[20px] overflow-hidden w-full max-w-[380px]">
                <div className="absolute inset-0 bg-white/15 backdrop-blur-xl rounded-[20px]"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center">
                  <div className="glass-dark rounded-full px-5 py-2">
                    <span className="text-white text-sm">Membership</span>
                  </div>
                  <h3 className="text-4xl lg:text-[44px] text-white font-normal">Platinum</h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Unlimited access to all floors, priority pool bookings, personal trainer sessions, spa credits, and exclusive member events.
                  </p>
                  <button className="glass-dark rounded-full px-10 py-4 text-white text-base mt-2 hover:bg-white/20 transition-colors">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Built for Visionaries */}
      <section className="py-20 lg:py-28 site-container">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <MotionSpan
            className="text-xl"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            Who It&apos;s For
          </MotionSpan>
        </div>
        <MotionH2
          className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2] text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
        >
          Built for Visionaries
        </MotionH2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {/* Corporate Offices */}
          <MotionDiv
            className="bg-black/10 rounded-[20px] p-6 h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <img src="/images/bac6647dead1dcf8796d89548ad0d9030750c703.png" alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-xl font-medium text-black leading-tight mb-2">Corporate Offices</p>
              <p className="text-base text-black/70 leading-relaxed tracking-tight">Modern, secure, and scalable spaces designed for forward-thinking businesses and corporate leaders.</p>
            </div>
          </MotionDiv>

          {/* Wellness Brands */}
          <MotionDiv
            className="bg-[#e1ff83] rounded-[20px] p-6 h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.16, duration: 0.6 }}
          >
            <img src="/images/609ac97b47e7ccf533a83e1838d32ea943c24c1f.png" alt="" className="w-11 h-11 object-contain" />
            <div>
              <p className="text-xl font-medium text-black leading-tight mb-2">Wellness Brands</p>
              <p className="text-base text-black/70 leading-relaxed tracking-tight">A premium platform for wellness, fitness, nutrition, and healthcare brands to thrive and connect.</p>
            </div>
          </MotionDiv>

          {/* Event Organisers */}
          <MotionDiv
            className="bg-black rounded-[20px] p-6 h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="/images/e9d0d569b260a460f66a5cd0f6436acd3100e83d.png"
              alt=""
              className="w-12 h-12 object-contain"
              style={{ filter: 'invert(1) brightness(2) contrast(1.1)' }}
            />
            <div>
              <p className="text-xl font-medium text-white leading-tight mb-2">Event Organisers</p>
              <p className="text-base text-white/70 leading-relaxed tracking-tight">Fully equipped venues ideal for workshops, launches, seminars, and curated lifestyle events.</p>
            </div>
          </MotionDiv>

          {/* Health-Conscious Individuals */}
          <MotionDiv
            className="bg-[#e1ff83] rounded-[20px] p-6 h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.24, duration: 0.6 }}
          >
            <img src="/images/79d71fe981328cf24207baf0ab5d971401991dbc.png" alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-xl font-medium text-black leading-tight mb-2">Health-Conscious Individuals</p>
              <p className="text-base text-black/70 leading-relaxed tracking-tight">An elevated environment for fitness, balance, and holistic well-being.</p>
            </div>
          </MotionDiv>

          {/* Lifestyle Seekers */}
          <MotionDiv
            className="bg-black/10 rounded-[20px] p-6 h-[420px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.28, duration: 0.6 }}
          >
            <img src="/images/456f2242cc66315851ca48ea1151bed122a71508.png" alt="" className="w-12 h-12 object-contain" />
            <div>
              <p className="text-xl font-medium text-black leading-tight mb-2">Lifestyle Seekers</p>
              <p className="text-base text-black/70 leading-relaxed tracking-tight">For those who value premium experiences, modern amenities, and a refined way of living.</p>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Where Experiences Spark Connections */}
      <section className="py-12 lg:py-24 site-container">
        <MotionDiv
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
          <MotionSpan className="text-xl">Experiences</MotionSpan>
        </MotionDiv>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 mb-10 md:mb-14">
          <MotionH2
            className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.15] w-full md:w-[62%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
          >
            Where Experiences Spark Connections
          </MotionH2>
          <MotionP
            className="text-lg lg:text-xl leading-relaxed text-black/80 mt-4 md:mt-0 w-full md:w-[36%]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.14, duration: 0.7, ease: "easeOut" }}
          >
            A vibrant platform for meaningful connections—bringing together fitness, business, and lifestyle through curated events, workshops, and networking experiences.
          </MotionP>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left: sub-grid */}
          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-[1.46fr_1fr] gap-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          >
            <div className="relative rounded-[20px] overflow-hidden h-[260px] md:h-[643px]">
              <img src="/images/3fa0c2858a9883222e6043946c0974f99572a294.png" alt="Events" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              {/* Lime stat card */}
              <div className="bg-[#e1ff83] rounded-[20px] p-7 flex flex-col justify-between h-[200px] md:h-[243px]">
                <div>
                  <p className="text-[50px] font-normal leading-none tracking-[-0.04em]">1,000+</p>
                  <p className="text-xl font-semibold mt-1">Happy Clients</p>
                </div>
                <div className="flex -space-x-3">
                  <img src="/images/bccc84f152be39833770bb1625118a39508489ef.png" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="/images/29aa100af6d99d46902df7c09b2eead27d5d58d0.png" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="/images/78ad0655e47e0e880a4eab9e038c9fe72e2d3555.png" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  <img src="/images/cde7431ea7d5385827e0d5281f5ea19942faa61f.png" alt="" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
              </div>
              {/* Fitness woman image */}
              <div className="relative rounded-[20px] overflow-hidden flex-1">
                <img src="/images/a3ddcd321732f87c8a1ced84089f07f10544b498.png" alt="Networking" className="w-full h-full object-cover" />
              </div>
            </div>
          </MotionDiv>

          {/* Right: event list */}
          <MotionDiv
            className="flex flex-col justify-end"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.18, duration: 0.65, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between py-8 gap-6 border-t border-black/10 first:border-t-0">
              <div className="flex flex-col gap-3">
                <p className="text-2xl lg:text-[30px] font-medium leading-[1.2]">Launch Events</p>
                <p className="text-lg lg:text-xl text-black/70">Grand openings and product launches in premium venues</p>
              </div>
              <p className="text-4xl lg:text-[48px] font-normal leading-[1.2] text-black flex-shrink-0">01</p>
            </div>
            <div className="flex items-start justify-between py-8 gap-6 border-t border-black/10 first:border-t-0">
              <div className="flex flex-col gap-3">
                <p className="text-2xl lg:text-[30px] font-medium leading-[1.2]">Fitness Workshops</p>
                <p className="text-lg lg:text-xl text-black/70">Expert-led training sessions and wellness seminars</p>
              </div>
              <p className="text-4xl lg:text-[48px] font-normal leading-[1.2] text-black flex-shrink-0">02</p>
            </div>
            <div className="flex items-start justify-between py-8 gap-6 border-t border-black/10 first:border-t-0">
              <div className="flex flex-col gap-3">
                <p className="text-2xl lg:text-[30px] font-medium leading-[1.2]">Corporate Open Houses</p>
                <p className="text-lg lg:text-xl text-black/70">Networking events in world-class conference facilities</p>
              </div>
              <p className="text-4xl lg:text-[48px] font-normal leading-[1.2] text-black flex-shrink-0">03</p>
            </div>
            <div className="flex items-start justify-between py-8 gap-6 border-t border-black/10 first:border-t-0">
              <div className="flex flex-col gap-3">
                <p className="text-2xl lg:text-[30px] font-medium leading-[1.2]">Business Networking</p>
                <p className="text-lg lg:text-xl text-black/70">Curated connections between brands and professionals</p>
              </div>
              <p className="text-4xl lg:text-[48px] font-normal leading-[1.2] text-black flex-shrink-0">04</p>
            </div>
          </MotionDiv>
        </div>
      </section>

    </main>
  );
}
