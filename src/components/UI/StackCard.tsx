import { MotionH2 } from "@/components/MotionWrappers";
import GsapStack from "@/components/GsapStack";
export default function StackCard() {
  return (
    <section className="py-16 lg:py-24 px-8">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
        <span className="text-xl">Floor by Floor</span>
      </div>
      <MotionH2
        className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2] text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
      >
        Every Level, a New<br />Experience
      </MotionH2>

      {/*
        Container is exactly h-screen with overflow-hidden.
        GSAP pins it here while cards slide up from below one by one.
        Panel 1 is visible; panels 2 & 3 start translated 100% off-screen below.
      */}
      <div id="stack-panels" className="relative h-screen overflow-hidden">
        <GsapStack selector="#stack-panels .stack-panel" />

        {/* Panel 1: Aqua & Wellness — visible from start */}
        <div className="stack-panel absolute inset-0 rounded-[30px] overflow-hidden">
          <img src="/images/swim.webp" alt="Aqua & Wellness" className="absolute inset-0 w-full h-screen object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(211.6deg, rgba(0,0,0,0) 59.5%, rgba(0,0,0,0.8) 83.3%)" }}></div>
          <div className="absolute bottom-14 left-10 right-10 lg:left-14 lg:right-14 lg:bottom-25 text-white px-10 lg:px-20 py-8">
            <div className="flex items-center gap-3 mb-4 text-lg opacity-90">
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
              Ground Floor
            </div>
            <h3 className="text-4xl lg:text-[60px] font-normal leading-[1.2] mb-4">Hideaway Swisuites </h3>
            <p className="text-lg lg:text-xl max-w-md leading-relaxed opacity-90">
              Enjoy Indoor pool with the Comfort.
            </p>
          </div>
        </div>

        {/* Panel 2: Retail & Corporate — starts below, slides up on scroll */}
        <div className="stack-panel absolute inset-0 rounded-[20px] overflow-hidden">
          <img src="/images/hall.webp" alt="Retail & Corporate" className="absolute inset-0 w-full h-screen object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(130.7deg, rgba(0,0,0,0) 50.5%, rgba(0,0,0,0.357) 60.5%, rgba(0,0,0,0.8) 93.1%)" }}></div>
          <div className="absolute bottom-14 right-10 lg:right-14 text-white text-right px-10 lg:px-20">
            <div className="flex items-center justify-end gap-3 mb-4 text-lg opacity-90">
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
              First &amp; Second Floor
            </div>
            <h3 className="text-4xl lg:text-[60px] font-normal leading-[1.2] mb-4 w-[60%] ml-auto text-right">The Regal at the Promenade</h3>
            <p className="text-lg lg:text-xl max-w-md ml-auto leading-relaxed opacity-90">
              A timeless event destination crafted for elegant gatherings, and unforgettable moments.
            </p>
          </div>
        </div>

        {/* Panel 3: Fitness & Sports — starts below, slides up on scroll */}
        <div className="stack-panel absolute inset-0 rounded-[20px] overflow-hidden">
          <img src="/images/gym.webp" alt="Fitness & Sports" className="absolute inset-0 w-full h-screen object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(43.5deg, rgba(0,0,0,0.8) 6.5%, rgba(0,0,0,0.49) 24.6%, rgba(0,0,0,0) 40.5%)" }}></div>
          <div className="absolute bottom-14 left-10 lg:left-14 text-white px-10 lg:px-20 py-8">
            <div className="flex items-center gap-3 mb-4 text-lg opacity-90">
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
              Third &amp; Fourth Floor
            </div>
            <h3 className="text-4xl lg:text-[60px] font-normal leading-[1.2] mb-4">Oxy Gym</h3>
            <p className="text-lg lg:text-xl max-w-md leading-relaxed opacity-90">
              Your comeback starts here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
