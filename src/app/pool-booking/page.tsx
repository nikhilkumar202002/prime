import PoolTimeSlots from "@/components/PoolTimeSlots";

export const metadata = { title: "Aqua & Wellness – Prime Promenade" };

export default function PoolBookingPage() {

  return (
    <div className="bg-white text-black overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <img
          src="/images/0cce7ec7399a58cf00e27971a184a541e59c5e59.png"
          alt="Pool"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 47.9%,rgba(0,0,0,0.8) 100%)" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-20 px-8 text-center">
          <div className="flex items-center gap-4 mb-5 text-white">
            <img src="/images/9f6d2d76d1781ca18596c7b6eab1c23e95a5ba2b.svg" alt="" className="w-2.5 h-2.5" />
            <span className="text-xl">Aqua &amp; Wellness</span>
          </div>
          <h1 className="text-white text-5xl lg:text-[76px] font-normal leading-[1.18] tracking-[-0.02em] mb-5">
            Dive Into Luxury
          </h1>
          <p className="text-white/90 text-lg lg:text-[20px] leading-[1.3] max-w-xl">
            Reserve your private sanctuary. Crystal waters, golden hours, and an experience crafted for the extraordinary.
          </p>
        </div>
      </section>

      {/* ═══ CHOOSE YOUR POOL ═══ */}
      <section className="py-16 lg:py-20 px-8 lg:px-16">
        <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-8 lg:mb-10">Choose Your Pool</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Private Pool Card (selected) */}
          <div className="relative rounded-[30px] p-6 lg:p-10 flex flex-col justify-between" style={{ minHeight: "520px", backgroundColor: "#9BF7FF", border: "3px solid #9EF6FD" }}>
            <div className="absolute top-5 right-5 lg:top-8 lg:right-8 bg-white rounded-[20px] px-4 py-2 text-[15px] lg:text-[17px] text-black whitespace-nowrap">
              Up to 2 Person
            </div>
            <div className="flex items-center gap-4 mb-8 pr-32">
              <div className="relative w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] flex-shrink-0">
                <img src="/images/d44ee2ded83af194d3ce4ea50f1f037a72a94d71.svg" alt="" className="w-full h-full" />
                <img
                  src="/images/2c8585f2477b0a6730269e624e4c7bac1b39cc4a.png"
                  alt=""
                  className="absolute w-[38px] h-[38px] lg:w-[42px] lg:h-[42px] object-contain"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "invert(1)" }}
                />
              </div>
              <div>
                <p className="text-[18px] lg:text-[20px] leading-[1.2] text-black">Intimate</p>
                <p className="text-[22px] lg:text-[26px] font-medium leading-[1.2] text-black">Private Pool</p>
              </div>
            </div>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Temperature controlled</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Private cabana</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Complimentary refreshments</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Premium towel service</span>
              </li>
            </ul>
            <div className="border-t border-black/10 pt-6 flex items-center justify-between">
              <div className="whitespace-nowrap">
                <span className="text-[26px] lg:text-[30px] font-medium leading-[1.2]">&#x20B9; 5000/</span>
                <span className="text-[16px] lg:text-[18px] capitalize text-black/70">Session</span>
              </div>
              <button className="bg-black text-white text-[16px] lg:text-[18px] font-medium capitalize rounded-full px-6 lg:px-8 py-3 hover:bg-black/80 transition-colors flex-shrink-0">
                Selected
              </button>
            </div>
          </div>

          {/* Group Pool Card */}
          <div className="relative rounded-[30px] bg-[#e3fdff] p-6 lg:p-10 flex flex-col justify-between" style={{ minHeight: "520px" }}>
            <div className="absolute top-5 right-5 lg:top-8 lg:right-8 bg-white rounded-[20px] px-4 py-2 text-[15px] lg:text-[17px] text-black whitespace-nowrap">
              5 &ndash; 10 Persons
            </div>
            <div className="flex items-center gap-4 mb-8 pr-28 lg:pr-36">
              <div className="relative w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] flex-shrink-0">
                <img src="/images/d44ee2ded83af194d3ce4ea50f1f037a72a94d71.svg" alt="" className="w-full h-full" />
                <img
                  src="/images/1a5804af0c9e8dae9094509b3ccfe73c26e24c12.png"
                  alt=""
                  className="absolute w-[38px] h-[38px] lg:w-[42px] lg:h-[42px] object-contain"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "invert(1)" }}
                />
              </div>
              <div>
                <p className="text-[18px] lg:text-[20px] leading-[1.2] capitalize text-black">Social</p>
                <p className="text-[22px] lg:text-[26px] font-medium leading-[1.2] text-black">Group Pool</p>
              </div>
            </div>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Heated infinity pool</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Poolside bar access</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">DJ lounge area</span>
              </li>
              <li className="flex items-center gap-3">
                <img src="/images/ebb603ce3968477d5506e38d6d3e4c6781dcd328.svg" alt="" className="w-8 h-8 flex-shrink-0" />
                <span className="text-[18px] text-black">Group seating pods</span>
              </li>
            </ul>
            <div className="border-t border-black/10 pt-6 flex items-center justify-between">
              <div className="whitespace-nowrap">
                <span className="text-[26px] lg:text-[30px] font-medium leading-[1.2]">&#x20B9;2500/</span>
                <span className="text-[16px] lg:text-[18px] capitalize text-black/70">Session</span>
              </div>
              <button className="bg-black/40 text-white text-[16px] lg:text-[18px] font-medium capitalize rounded-full px-6 lg:px-8 py-3 hover:bg-black/60 transition-colors flex-shrink-0">
                Select
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SELECT DATE & TIME ═══ */}
      <section className="py-4 px-8 lg:px-16">
        <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-8">Select Date &amp; Time</h2>
        <div className="bg-[#e3fdff] border border-[#77f4ff] rounded-[30px] px-8 lg:px-12 py-10 flex flex-col gap-8">
          {/* Date */}
          <div>
            <p className="text-[20px] capitalize text-black mb-3">Date</p>
            <div className="bg-white border border-[#77f4ff] rounded-[20px] flex items-center gap-3 px-5 py-4 w-full max-w-xs">
              <img src="/images/3d67e0f08b93c0c943967f05fc48dd1c75186d22.png" alt="" className="w-5 h-5 object-contain flex-shrink-0 opacity-60" />
              <span className="text-[18px] text-black/50 capitalize">Pic a date</span>
            </div>
          </div>
          {/* Time Slots */}
          <div>
            <p className="text-[20px] capitalize text-black mb-4">Available Slots</p>
            <PoolTimeSlots />
          </div>
        </div>
      </section>

      {/* ═══ ENHANCE YOUR EXPERIENCE ═══ */}
      <section className="py-16 lg:py-20 px-8 lg:px-16">
        <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-8">Enhance Your Experience</h2>
        <div className="flex flex-col gap-4">
          {/* Row 1: Sauna Bath + Jacuzzi */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Sauna Bath */}
            <div className="bg-[#e3fdff] rounded-[30px] flex items-stretch p-4" style={{ minHeight: "162px" }}>
              <div className="bg-white rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ width: "130px", minHeight: "130px" }}>
                <img src="/images/d16779e8ee3d6e7c5922fa09b43b809c8196a046.png" alt="Sauna" className="w-[70px] h-[70px] object-contain" />
              </div>
              <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between pl-4 pr-2 py-1 gap-3">
                <div>
                  <p className="text-[20px] lg:text-[22px] font-medium leading-[1.2] text-black">Sauna Bath</p>
                  <p className="text-[15px] capitalize text-black/70 leading-[1.3] mt-1">Finnish Dry Sauna With Cold Plunge</p>
                  <p className="text-[20px] font-medium text-black mt-2">&#x20B9; 500</p>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-black text-white text-[18px] font-medium capitalize rounded-full px-6 py-2.5 hover:bg-black/80 transition-colors">Add</button>
                </div>
              </div>
            </div>

            {/* Jacuzzi */}
            <div className="bg-[#e3fdff] rounded-[30px] flex items-stretch p-4" style={{ minHeight: "162px" }}>
              <div className="bg-white rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ width: "130px", minHeight: "130px" }}>
                <img src="/images/5ef18394b4dd93a0bd0329730f3fac17a65c0961.png" alt="Jacuzzi" className="w-[70px] h-[70px] object-contain" />
              </div>
              <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between pl-4 pr-2 py-1 gap-3">
                <div>
                  <p className="text-[20px] lg:text-[22px] font-medium leading-[1.2] text-black">Jacuzzi</p>
                  <p className="text-[15px] capitalize text-black/70 leading-[1.3] mt-1">Hydrotherapy Jets With Aromatherapy</p>
                  <p className="text-[20px] font-medium text-black mt-2">&#x20B9; 500</p>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-black text-white text-[18px] font-medium capitalize rounded-full px-6 py-2.5 hover:bg-black/80 transition-colors">Add</button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Poolside Dining (full width) */}
          <div className="bg-[#e3fdff] rounded-[30px] flex items-stretch p-4" style={{ minHeight: "162px" }}>
            <div className="bg-white rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ width: "130px", minHeight: "130px" }}>
              <img src="/images/4b1fdfade85dc282a143ddc08ea68f4952ab8f44.png" alt="Dining" className="w-[70px] h-[70px] object-contain" />
            </div>
            <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between pl-4 pr-2 py-1 gap-3">
              <div>
                <p className="text-[20px] lg:text-[22px] font-medium leading-[1.2] text-black">Poolside Dining</p>
                <p className="text-[15px] capitalize text-black/70 leading-[1.3] mt-1">Add A Curated Dining Experience</p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-black text-white text-[18px] font-medium capitalize rounded-full px-6 py-2.5 hover:bg-black/80 transition-colors whitespace-nowrap">View Menu</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POLICIES & CONFIRMATION ═══ */}
      <section className="py-4 pb-16 px-8 lg:px-16">
        <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-8">Policies &amp; Confirmation</h2>
        <div className="bg-[#e3fdff] rounded-[30px] px-8 lg:px-12 py-10 flex flex-col gap-8">
          {/* Policy 1: Dress Code */}
          <div className="flex items-start gap-5">
            <img src="/images/fd6edea15f6bb4149ba9aaee9dc611c6ed578e0a.svg" alt="" className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[24px] font-medium leading-[1.2] text-black mb-2">Dress Code Acceptance</p>
              <p className="text-[18px] text-black/80 leading-[1.3]">Appropriate swimwear is required. No denim, shoes, or street clothing in pool areas.</p>
            </div>
          </div>
          {/* Policy 2: Age Restriction */}
          <div className="flex items-start gap-5">
            <img src="/images/113810d2d2478ac3cc648bc6ff4c1e0d21b2b5f0.svg" alt="" className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <p className="text-[24px] font-medium leading-[1.2] text-black mb-2">Age Restriction</p>
              <p className="text-[18px] text-black/80 leading-[1.3]">I confirm all guests are 16 years or older. Children under 16 require guardian supervision.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-black text-white text-[22px] font-medium capitalize rounded-full px-16 py-5 hover:bg-black/80 transition-colors">
            Confirm Booking
          </button>
        </div>
      </section>

      {/* ═══ A SANCTUARY OF SERENITY ═══ */}
      <section className="py-16 lg:py-20 px-8 lg:px-16">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-3">
            <img src="/images/da4d45190e2637003c0d5f7afc82ad284288b554.svg" alt="" className="w-2.5 h-2.5" />
            <span className="text-[20px] capitalize">Lifestyle Amenities</span>
          </div>
          <h2 className="text-4xl lg:text-[60px] font-normal leading-[1.2]">A Sanctuary of Serenity</h2>
        </div>
        {/* Gallery Row 1: large left + smaller right */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-4 mb-4">
          <div className="rounded-[20px] overflow-hidden" style={{ height: "clamp(260px,35vw,484px)" }}>
            <img src="/images/b74d38b509b135dfc2991ec1a6bb6b0ae84ee261.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden" style={{ height: "clamp(260px,35vw,484px)" }}>
            <img src="/images/524f21e64027dd559993312efffc2d798817cea7.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Gallery Row 2: 4 equal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-[20px] overflow-hidden" style={{ height: "clamp(180px,20vw,484px)" }}>
            <img src="/images/13b6bcb80565de8c91d810eed096c7985b4ba287.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden" style={{ height: "clamp(180px,20vw,484px)" }}>
            <img src="/images/bf147758b9b62dc7221ca828e3bf84c480cdaf3b.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden" style={{ height: "clamp(180px,20vw,484px)" }}>
            <img src="/images/1397cb5ae897b16401e936cfef9e3daa5acf856d.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden" style={{ height: "clamp(180px,20vw,484px)" }}>
            <img src="/images/40875f226bc6b281ed989c8c9dd353cd10326106.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══ CONTACT SECTION (removed) ═══ */}
    </div>
  );
}
