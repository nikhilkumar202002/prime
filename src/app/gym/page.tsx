
import Gymabout from "../../../public/images/gym-about.png"

export const metadata = { title: "Gym & Fitness – Prime Promenade" };

function CheckIconGym() {
  return (
    <span className="inline-block flex-shrink-0 w-[33px] h-[33px] rounded-full bg-gym/20 flex items-center justify-center">
      <svg className="w-4 h-4 text-gym" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

function CheckIconSm() {
  return (
    <span className="inline-flex flex-shrink-0 w-[19px] h-[19px] items-center justify-center">
      <svg className="w-[19px] h-[19px] text-gym" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function GymPage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh", height: "1060px" }}>
        <img
          src="/images/gym-slider-innerpage.jpeg"
          alt="Gym"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 48%,rgba(0,0,0,0.9) 100%)" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-24 pt-40 px-8 text-center">
          <div className="flex items-center gap-5 text-white mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            <span className="text-xl capitalize">Fitness &amp; Sports</span>
          </div>
          <h1 className="text-5xl lg:text-[76px] font-normal leading-tight tracking-[-0.02em] text-white mb-8">
            Train Strong. Live Better.
          </h1>
          <p className="text-xl leading-[1.3] text-white max-w-[830px]">
            A state-of-the-art fitness facility designed to empower your wellness journey with world-class equipment and expert guidance.
          </p>
        </div>
      </section>

      {/* ═══ ABOUT OUR GYM ═══ */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image LEFT */}
          <div className="rounded-[26px] overflow-hidden" style={{ height: "554px" }}>
            <img
              src={Gymabout.src}
              alt="About Our Gym"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text RIGHT */}
          <div>
            <h2 className="text-[40px] font-normal leading-[1.2] mb-6">About Our Gym</h2>
            <p className="text-xl leading-[1.35] text-black mb-8">
              At our fitness center, we are dedicated to fostering an environment that inspires and empowers each person to achieve their personal fitness goals. Our state-of-the-art facility is equipped with the latest workout technology, designed to enhance your performance and keep you engaged. Beyond just equipment, we cultivate a vibrant and motivating atmosphere where you can connect with like-minded individuals, participate in dynamic classes, and receive support from our knowledgeable staff.
            </p>
            <div className="flex flex-col gap-[22px]">
              <div className="flex items-center gap-6">
                <CheckIconGym />
                <p className="text-xl leading-[1.35]">Modern strength and cardio equipment</p>
              </div>
              <div className="flex items-center gap-6">
                <CheckIconGym />
                <p className="text-xl leading-[1.35]">Clean and professional workout environment</p>
              </div>
              <div className="flex items-center gap-6">
                <CheckIconGym />
                <p className="text-xl leading-[1.35]">Designed for beginners and experienced fitness enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WORLD-CLASS EQUIPMENT ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <div className="rounded-[30px] py-16 px-8 lg:px-16" style={{ background: "rgba(108,190,70,0.2)" }}>
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-normal leading-[1.2] mb-4">World-Class Equipment</h2>
            <p className="text-xl leading-[1.35] max-w-[495px] mx-auto">Our facility features state-of-the-art equipment for all your fitness needs</p>
          </div>
          {/* 2x2 Equipment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Strength Training Machines */}
            <div className="relative rounded-[20px] overflow-hidden" style={{ height: "421px" }}>
              <img
                src="/images/b2a57f7160f31f9330b103083aeec6adf3fdda9d.png"
                alt="Strength Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)" }}></div>
              <p className="absolute bottom-6 left-6 text-white text-2xl font-medium leading-[1.35]">Strength Training Machines</p>
            </div>
            {/* Free Weight Area */}
            <div className="relative rounded-[20px] overflow-hidden" style={{ height: "421px" }}>
              <img
                src="/images/3fa0c2858a9883222e6043946c0974f99572a294.png"
                alt="Free Weight Area"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-6 left-6 text-white text-2xl font-medium leading-[1.35]">Free Weight Area</p>
            </div>
            {/* Cardio Equipment */}
            <div className="relative rounded-[20px] overflow-hidden" style={{ height: "421px" }}>
              <img
                src="/images/a3ddcd321732f87c8a1ced84089f07f10544b498.png"
                alt="Cardio Equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)" }}></div>
              <p className="absolute bottom-6 left-6 text-white text-2xl font-medium leading-[1.35]">Cardio Equipment</p>
            </div>
            {/* Functional Training Space */}
            <div className="relative rounded-[20px] overflow-hidden" style={{ height: "421px" }}>
              <img
                src="/images/060cc9853c06cfa47f94502c8517d564c50ff930.png"
                alt="Functional Training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)" }}></div>
              <p className="absolute bottom-6 left-6 text-white text-2xl font-medium leading-[1.35]">Functional Training Space</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MEMBERSHIP PACKAGES ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <h2 className="text-[40px] font-normal leading-[1.2] mb-3">Membership Packages</h2>
        <p className="text-xl leading-[1.35] mb-12">Choose the plan that fits your fitness journey</p>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Standard Membership */}
          <div className="rounded-[30px] p-8 lg:p-10 flex flex-col" style={{ background: "rgba(108,190,70,0.15)" }}>
            <h3 className="text-[30px] font-medium leading-[1.2] mb-2">Standard Membership</h3>
            <p className="text-xl leading-[1.35] mb-8">Perfect for getting started</p>
            <div className="flex flex-col gap-5 mb-10 flex-1">
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Access to gym equipment</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Standard workout hours</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Locker facility</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Monthly membership</p>
              </div>
            </div>
            <button
              className="mt-auto bg-black text-white rounded-[30px] w-full flex items-center justify-center capitalize font-medium text-2xl leading-[1.2]"
              style={{ height: "70px" }}
            >
              Get Started
            </button>
          </div>

          {/* Platinum Membership */}
          <div className="rounded-[30px] p-8 lg:p-10 relative flex flex-col" style={{ background: "rgba(108,190,70,0.25)" }}>
            {/* Premium badge */}
            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-[#6cbe46] rounded-[20px] px-5 py-2 flex items-center justify-center">
              <span className="text-white font-medium text-xl capitalize leading-[1.2]">premium</span>
            </div>
            <h3 className="text-[30px] font-medium leading-[1.2] mb-2">Platinum Membership</h3>
            <p className="text-xl leading-[1.35] mb-8">Experience the ultimate fitness lifestyle</p>
            <div className="flex flex-col gap-5 mb-10 flex-1">
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Full gym access</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Priority entry</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Extended hours access</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Personal locker</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Exclusive swimming pool access</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Priority booking</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIconSm />
                <p className="text-xl leading-[1.35]">Premium member recognition</p>
              </div>
            </div>
            <button
              className="mt-auto bg-black text-white rounded-[30px] w-full flex items-center justify-center capitalize font-medium text-2xl leading-[1.2]"
              style={{ height: "70px" }}
            >
              Join Premium
            </button>
          </div>
        </div>
      </section>

      {/* ═══ GYM TIMINGS ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <div className="rounded-[30px] py-16 px-8 lg:px-16" style={{ background: "#e2f2da" }}>
          <div className="text-center mb-10">
            <h2 className="text-[40px] font-normal leading-[1.2] mb-4">Gym Timings</h2>
            <p className="text-xl leading-[1.35]">We&apos;re open when you need us most</p>
          </div>
          {/* Session Cards */}
          <div className="flex flex-wrap justify-center gap-[60px] mb-8">
            {/* Morning Session */}
            <div className="bg-white rounded-[33px] flex items-center w-full" style={{ height: "197px", maxWidth: "589px" }}>
              {/* Icon box LEFT */}
              <div
                className="flex-shrink-0 rounded-[21px] flex items-center justify-center"
                style={{ width: "clamp(90px,25vw,152px)", height: "clamp(90px,25vw,155px)", margin: "clamp(10px,3vw,21px)", background: "#e2f2da" }}
              >
                <div className="rounded-full bg-[#6cbe46] flex items-center justify-center" style={{ width: "clamp(36px,8vw,60px)", height: "clamp(36px,8vw,60px)" }}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              {/* Text RIGHT */}
              <div className="flex flex-col gap-2 lg:gap-4 pr-3 lg:pr-4 min-w-0">
                <p className="text-base lg:text-[30px] font-medium leading-[1.2]">Morning Session</p>
                <p className="text-sm lg:text-2xl leading-[1.4]">6:00 AM – 11:00 AM</p>
                <p className="text-xs lg:text-lg leading-[1.4] text-black/60">Start your day with energy</p>
              </div>
            </div>

            {/* Evening Session */}
            <div className="bg-white rounded-[33px] flex items-center w-full" style={{ height: "197px", maxWidth: "589px" }}>
              {/* Icon box LEFT */}
              <div
                className="flex-shrink-0 rounded-[21px] flex items-center justify-center"
                style={{ width: "clamp(90px,25vw,152px)", height: "clamp(90px,25vw,155px)", margin: "clamp(10px,3vw,21px)", background: "#e2f2da" }}
              >
                <div className="rounded-full bg-[#6cbe46] flex items-center justify-center" style={{ width: "clamp(36px,8vw,60px)", height: "clamp(36px,8vw,60px)" }}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
              </div>
              {/* Text RIGHT */}
              <div className="flex flex-col gap-2 lg:gap-4 pr-3 lg:pr-4 min-w-0">
                <p className="text-base lg:text-[30px] font-medium leading-[1.2]">Evening Session</p>
                <p className="text-sm lg:text-2xl leading-[1.4]">4:00 PM – 9:00 PM</p>
                <p className="text-xs lg:text-lg leading-[1.4] text-black/60">Wind down after work</p>
              </div>
            </div>
          </div>
          <p className="text-xl leading-[1.35] text-center text-black">* Platinum members enjoy extended hours and flexible access</p>
        </div>
      </section>

      {/* ═══ JOIN US TODAY ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-normal leading-[1.2] mb-4">Join Us Today</h2>
          <p className="text-xl leading-[1.35]">Start your fitness journey by registering for membership</p>
        </div>

        {/* Important Notice Banner */}
        <div className="rounded-[30px] px-8 py-8 mb-10 flex flex-col gap-4" style={{ background: "rgba(226,242,218,0.3)" }}>
          <p className="text-[30px] font-medium leading-[1.2]">Important Notice</p>
          <p className="text-xl leading-[1.35]">Membership registration through the website is for initial application only. Payments and renewals are handled offline at the facility.</p>
        </div>

        {/* Form + Process Steps */}
        <div className="grid lg:grid-cols-[1fr_449px] gap-8">
          {/* Membership Registration Form */}
          <div className="rounded-[30px] p-8 lg:p-10" style={{ background: "#e2f2da" }}>
            <h3 className="text-[30px] font-medium leading-[1.2] mb-2">Membership Registration</h3>
            <p className="text-xl leading-[1.35] mb-8">Fill in your details to get started</p>
            <form className="flex flex-col gap-6">
              {/* Row 1: Full Name + Phone Number */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xl capitalize leading-[1.35] mb-3">full name*</p>
                  <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xl capitalize leading-[1.35] mb-3">phone number*</p>
                  <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                    />
                  </div>
                </div>
              </div>
              {/* Row 2: Email + Age */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xl capitalize leading-[1.35] mb-3">email address*</p>
                  <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent text-lg text-black/60 font-light outline-none"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xl capitalize leading-[1.35] mb-3">age*</p>
                  <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                    <input
                      type="number"
                      placeholder="Enter your age"
                      className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                    />
                  </div>
                </div>
              </div>
              {/* Row 3: Preferred Membership Plan */}
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">preferred membership plan</p>
                <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                  <input
                    type="text"
                    placeholder="eg: weight loss, muscle gain, general fitness"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                  />
                </div>
              </div>
              {/* Row 4: Message */}
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">message</p>
                <div className="bg-white rounded-[33px] flex items-start px-6 py-5" style={{ minHeight: "159px" }}>
                  <textarea
                    placeholder="any special requirements and needs"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none resize-none placeholder:capitalize"
                    rows={4}
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white rounded-[30px] w-full flex items-center justify-center capitalize font-medium text-2xl leading-[1.2]"
                style={{ height: "70px" }}
              >
                Submit Membership Request
              </button>
            </form>
          </div>

          {/* Registration Process Steps */}
          <div className="rounded-[30px] p-8 lg:p-10" style={{ background: "#e2f2da" }}>
            <h3 className="text-[30px] font-medium leading-[1.2] mb-8">Registration Process</h3>
            <div className="flex flex-col gap-8">
              {/* Step 01 */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-gym flex items-center justify-center text-lg font-normal">01</div>
                <p className="text-xl leading-[1.35] pt-2">Submit registration request</p>
              </div>
              {/* Step 02 */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-gym flex items-center justify-center text-lg font-normal">02</div>
                <p className="text-xl leading-[1.35] pt-2">Gym management reviews application</p>
              </div>
              {/* Step 03 */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-gym flex items-center justify-center text-lg font-normal">03</div>
                <p className="text-xl leading-[1.35] pt-2">Confirmation call from the gym team</p>
              </div>
              {/* Step 04 */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gym text-white flex items-center justify-center text-lg font-normal">04</div>
                <p className="text-xl leading-[1.35] pt-2">Membership activation completed offline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEGIN YOUR JOURNEY + FOOTER (ContactSection removed) ═══ */}
    </div>
  );
}
