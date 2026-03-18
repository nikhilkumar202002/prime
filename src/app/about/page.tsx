import Image from "next/image";

export const metadata = { title: "About – Prime Promenade" };

export default function AboutPage() {
  return (
    <main className="bg-white text-black overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <img src="/images/46204a9c7d9bd2c9b2cf9782ea41edd1ffb1e90a.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 47.9%,rgba(0,0,0,0.8) 100%)" }}></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-20 px-8 text-center">
          <div className="flex items-center gap-4 mb-5 text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            <span className="text-xl capitalize">About us</span>
          </div>
          <h1 className="text-white text-5xl lg:text-[76px] font-normal leading-[1.18] tracking-[-0.02em] mb-5">
            Prime destination.<br />Multiple experiences.
          </h1>
          <p className="text-white/90 text-lg lg:text-[20px] leading-[1.3] max-w-xl">
            A landmark destination where architectural excellence meets intelligent design — crafted for the modern enterprise.
          </p>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-32">
        <div className="flex items-center gap-4 justify-center mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-black inline-block"></span>
          <span className="text-xl">Our Foundation</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2] text-center mb-8 max-w-3xl mx-auto">
          Shaping the Future of Modern Commercial Living
        </h2>
        <p className="text-center text-lg lg:text-[20px] leading-[1.3] text-black/80 max-w-3xl mx-auto mb-14">
          Guided by a clear vision and a purpose-driven mission, we are creating a next-generation commercial destination where innovation, design, and community come together to redefine how businesses and people experience modern spaces.
        </p>

        {/* Large image with Mission/Vision overlay */}
        <div className="relative rounded-[24px] overflow-hidden h-[500px] lg:h-[830px]">
          <img src="/images/ae7ffe2f8a33bf9205450acc17a92db4c6d8ad6e.png" alt="Foundation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[40%] to-black/80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-6 px-8 text-center pb-16 lg:pb-24">
            <div className="flex gap-5">
              <button className="glass-border rounded-full px-10 py-3.5 text-white text-lg lg:text-[22px] font-medium whitespace-nowrap">Mission</button>
              <button className="glass rounded-full px-10 py-3.5 text-white text-lg lg:text-[22px] whitespace-nowrap">Vision</button>
            </div>
            <p className="text-white text-xl lg:text-[32px] font-medium leading-[1.3] max-w-2xl">
              Delivering world-class infrastructure with a human-centric approach.
            </p>
            <p className="text-white/90 text-base lg:text-[20px] leading-[1.3] max-w-2xl">
              Our mission is to create an environment that seamlessly integrates cutting-edge smart building technology with elegant design, providing tenants and visitors with an experience that is as functional as it is inspiring — bridging the gap between online and offline commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Architectural Concept */}
      <section className="pb-0">
        <div className="px-8 lg:px-16 xl:px-32 mb-14 text-center">
          <div className="flex items-center gap-4 justify-center mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-black inline-block"></span>
            <span className="text-xl">Architectural Concept</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2]">Where Form Meets Function</h2>
        </div>

        {/* Building image */}
        <div className="relative mx-2 lg:mx-2.5 overflow-hidden" style={{ borderRadius: "24px 24px 0 0", height: "clamp(300px,50vw,922px)" }}>
          <img src="/images/33e06ad3334ece3ec28d4b5893213878c3925359.png" alt="Prime Promenade Building" className="w-full h-full object-cover" />
        </div>

        {/* 3-column features dark */}
        <div className="bg-black mx-2 lg:mx-2.5 px-10 lg:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            <div className="flex flex-col gap-5">
              <p className="text-white/50 text-xl leading-[1.2]">01</p>
              <p className="text-white text-3xl lg:text-[35px] font-normal leading-[1.2]">Glass &amp; Steel Fa&ccedil;ade</p>
              <p className="text-white/70 text-base lg:text-lg leading-[1.4]">Floor-to-ceiling glazing maximizes natural light while creating a striking visual identity.</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-white/50 text-xl leading-[1.2]">02</p>
              <p className="text-white text-3xl lg:text-[35px] font-normal leading-[1.2]">Hybrid Retail Spaces</p>
              <p className="text-white/70 text-base lg:text-lg leading-[1.4]">Designed for seamless online-offline operations with integrated logistics support.</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-white/50 text-xl leading-[1.2]">03</p>
              <p className="text-white text-3xl lg:text-[35px] font-normal leading-[1.2]">Curated Interiors</p>
              <p className="text-white/70 text-base lg:text-lg leading-[1.4]">Italian marble, bespoke lighting, and designer furnishings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prime Group of Companies */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-32">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-black inline-block"></span>
          <span className="text-xl">Ownership</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2]">Prime Group of Companies</h2>
          <p className="text-lg lg:text-[20px] leading-[1.3] text-black/80 lg:pt-4">
            With over two decades of excellence in real estate development, hospitality, and commercial ventures, Prime Group of Companies has established itself as a trusted name synonymous with quality, innovation, and unwavering commitment to its stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Black stats card */}
          <div className="bg-black rounded-[20px] p-10 h-[522px] flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-start">
                  <span className="text-white text-[80px] font-normal leading-[1]">20</span>
                  <span className="text-white text-[30px] font-normal leading-none mt-2">+</span>
                </div>
                <p className="text-white text-[22px] leading-[1.2] mt-2">Years</p>
              </div>
              <div>
                <div className="flex items-start">
                  <span className="text-white text-[80px] font-normal leading-[1]">50</span>
                  <span className="text-white text-[30px] font-normal leading-none mt-2">+</span>
                </div>
                <p className="text-white text-[22px] leading-[1.2] mt-2">Projects</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/a6b17ddcc50bd7242cb5c404f0dc08dd6d27c20f.svg" alt="" style={{ width: 130, height: 130, objectFit: "contain" }} />
            </div>
            <div className="flex justify-end">
              <div>
                <div className="flex items-start">
                  <span className="text-white text-[80px] font-normal leading-[1]">1M</span>
                  <span className="text-white text-[30px] font-normal leading-none mt-2">+</span>
                </div>
                <p className="text-white text-[22px] leading-[1.2] mt-2">Sq. Ft.</p>
              </div>
            </div>
          </div>

          {/* Photo card */}
          <div className="rounded-[20px] overflow-hidden h-[522px]">
            <img src="/images/2f256ed5d96aa0260515556d7dedb97db43db8fe.png" alt="Prime Group" className="w-full h-full object-cover" />
          </div>

          {/* Lime card */}
          <div className="bg-[#e1ff83] rounded-[20px] p-8 lg:p-10 h-[522px] flex flex-col justify-center overflow-hidden">
            <p className="text-black/20 font-medium leading-[1.3]" style={{ fontSize: "clamp(22px,2.4vw,45px)" }}>Built on</p>
            <p className="text-black font-medium leading-[1.2] tracking-[-0.03em]" style={{ fontSize: "clamp(42px,4.4vw,80px)" }}>Legacy.</p>
            <p className="text-black/20 font-medium leading-[1.3] mt-2" style={{ fontSize: "clamp(22px,2.4vw,45px)" }}>Driven by</p>
            <p className="text-black font-medium leading-[1.2] tracking-[-0.03em]" style={{ fontSize: "clamp(42px,4.4vw,80px)" }}>Excellence.</p>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-32">
        <div className="grid lg:grid-cols-[465px_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: photo floating above black rounded base */}
          <div className="relative flex-shrink-0" style={{ height: 641 }}>
            <div className="absolute left-0 right-0 bottom-0 bg-black rounded-[27px]" style={{ height: 498 }}></div>
            <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "20px 20px 20px 20px" }}>
              <img src="/images/a0ac9737b4247448746c91e43d476dfc1c16c0fb.png" alt="Chairman" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Right: label + quote + description */}
          <div className="flex flex-col gap-8 lg:pt-[133px]">
            <div className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-black inline-block flex-shrink-0"></span>
              <span className="text-xl">Chairman&apos;s Message</span>
            </div>
            <blockquote className="text-3xl lg:text-[50px] font-normal leading-[1.2] text-black">
              &ldquo;We don&apos;t just build structures — we create ecosystems where ambition meets opportunity, where every detail speaks to an uncompromising standard of excellence.&rdquo;
            </blockquote>
            <p className="text-lg lg:text-[20px] leading-[1.3] text-black/80">
              Under the visionary leadership of our Chairman, Prime Group has consistently pushed the boundaries of what commercial spaces can achieve. This project represents the culmination of our expertise — a space that will set new benchmarks in luxury commercial development for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </main>
  );
}
