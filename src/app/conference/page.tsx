// Header and ContactSection removed
import Banner from "../../../public/images/hall-banner.jpg";

export const metadata = { title: "Premium Conference & Event Hall – Prime Promenade" };

export default function ConferencePage() {
  const bookedDates = [10, 12];

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* header removed */}

      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh", height: "1060px" }}>
        <img
          src={Banner.src}
          alt="Conference Hall"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 48%,rgba(0,0,0,0.9) 100%)" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-24 pt-40 px-8 text-center">
          <div className="flex items-center gap-5 text-white mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            <span className="text-xl capitalize">retail &amp; corporate</span>
          </div>
          <h1 className="text-5xl lg:text-[76px] font-normal leading-tight tracking-[-0.02em] text-white mb-8">
            The Regal at the Promenade
          </h1>
          <p className="text-xl leading-[1.3] text-white max-w-[830px]">
            A timeless event destination crafted for elegant gatherings, and unforgettable moments.
          </p>
        </div>
      </section>

      {/* ═══ HALL OVERVIEW ═══ */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-36">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="rounded-[26px] overflow-hidden h-[400px] lg:h-[554px]">
            <img
              src="/images/about-sec.jpg"
              alt="Conference Hall Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-[40px] font-normal leading-[1.2]">Hall Overview</h2>
            <p className="text-xl leading-[1.35] text-black/80">
              Our premium conference hall provides an elegant and sophisticated environment for all your corporate events. With meticulous attention to detail, we have designed the space to enhance your gatherings, ensuring that every aspect—from the lighting to the seating arrangements—contributes to a productive and memorable experience. Whether you&apos;re hosting a small meeting or a large conference, our hall is equipped to meet your needs and exceed your expectations.
            </p>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-6 text-xl text-black">
                <span className="inline-flex items-center justify-center w-[33px] h-[33px] flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Spacious seating arrangement for up to 100 people
              </li>
              <li className="flex items-center gap-6 text-xl text-black">
                <span className="inline-flex items-center justify-center w-[33px] h-[33px] flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Ideal for seminars, corporate meetings, workshops, and training sessions
              </li>
              <li className="flex items-center gap-6 text-xl text-black">
                <span className="inline-flex items-center justify-center w-[33px] h-[33px] flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                Elegant interior with professional ambience
              </li>
              <li className="flex items-center gap-6 text-xl text-black">
                <span className="inline-flex items-center justify-center w-[33px] h-[33px] flex-shrink-0">
                  <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                State-of-the-art facilities and modern infrastructure
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ SEATING LAYOUT & GALLERY ═══ */}
      <section className="py-10 lg:py-16 px-8 lg:px-16 xl:px-36">
        <div className="bg-[rgba(0,55,47,0.15)] rounded-[30px] p-10 lg:p-14">
          <h2 className="text-4xl lg:text-[40px] font-normal leading-[1.2] text-center mb-3">Seating Layout &amp; Gallery</h2>
          <p className="text-xl text-center text-black/70 mb-12">Explore our versatile conference hall through various setups and configurations</p>

          {/* Mobile: 2 images per row */}
          <div className="grid grid-cols-2 gap-5 lg:hidden">
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub.jpg" alt="Seating arrangement" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub-2.jpg" alt="Event hall" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub-4.jpg" alt="Seminar room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub-6.jpg" alt="Conference setup" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub-7.jpg" alt="Meeting room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub-8.jpg" alt="Training room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[20px] overflow-hidden h-52">
              <img src="/images/sub-1.jpg" alt="Workshop space" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Desktop: 3-col complex grid */}
          <div className="hidden lg:grid gap-5" style={{ gridTemplateColumns: "367fr 794fr 367fr" }}>
            {/* Col 1 */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[20px] overflow-hidden" style={{ height: "279px" }}>
                <img src="/images/64529bb58258cc694b1f96a9d9f9e55d3e030e44.png" alt="Seating arrangement" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[20px] overflow-hidden" style={{ height: "488px" }}>
                <img src="/images/1d73410bc06b9b8166405e5e0b27ddc97270d4c9.png" alt="Conference setup" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[20px] overflow-hidden" style={{ height: "488px" }}>
                <img src="/images/fb4ef2b919d8bb8c205a47f5252483b56b6ce6e1.png" alt="Event hall" className="w-full h-full object-cover" />
              </div>
              <div className="grid gap-5" style={{ gridTemplateColumns: "382fr 392fr", height: "279px" }}>
                <div className="rounded-[20px] overflow-hidden h-full">
                  <img src="/images/83e6c84811d77c1268d1c1d5fe95d55347566c5f.png" alt="Meeting room" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-[20px] overflow-hidden h-full">
                  <img src="/images/421fba8ad9be007925e28b68595dd1e9801206b0.png" alt="Training room" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Col 3 */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[20px] overflow-hidden" style={{ height: "488px" }}>
                <img src="/images/45c60a476b7e05d569576ad9a14d5730bd5707ab.png" alt="Seminar room" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[20px] overflow-hidden" style={{ height: "279px" }}>
                <img src="/images/31573c6eb4e2d6458be302ad6c5c8ef77abf46ce.png" alt="Workshop space" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AMENITIES & MULTIMEDIA SETUP ═══ */}
      <section className="py-16 lg:py-24 px-8 lg:px-16 xl:px-36">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
          <h2 className="text-4xl lg:text-[40px] font-normal leading-[1.2]">Amenities &amp; Multimedia Setup</h2>
          <p className="text-xl text-black/70 max-w-sm">World-class facilities designed to ensure your event runs smoothly</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* LED Projector */}
          <div className="bg-[#d9e1e0] rounded-[30px] p-8 flex flex-col justify-between" style={{ height: "369px" }}>
            <div className="w-11 h-11 rounded-lg bg-forest" style={{ WebkitMaskImage: "url('/images/2ae6c2af007228dc4eb285aeab85b2b4486f2a23.png')", maskImage: "url('/images/2ae6c2af007228dc4eb285aeab85b2b4486f2a23.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            <div>
              <p className="text-[22px] font-medium leading-[1.35] mb-2">LED Projector</p>
              <p className="text-xl text-black/70 leading-[1.35]">High-definition presentation screens</p>
            </div>
          </div>

          {/* Sound System */}
          <div className="bg-[#d9e1e0] rounded-[30px] p-8 flex flex-col justify-between" style={{ height: "369px" }}>
            <div className="w-11 h-11 rounded-lg bg-forest" style={{ WebkitMaskImage: "url('/images/2861b0c34c3410250020c4612c82303ea596805e.png')", maskImage: "url('/images/2861b0c34c3410250020c4612c82303ea596805e.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            <div>
              <p className="text-[22px] font-medium leading-[1.35] mb-2">Sound System</p>
              <p className="text-xl text-black/70 leading-[1.35]">Professional audio setup for perfect acoustics</p>
            </div>
          </div>

          {/* Wireless Microphones */}
          <div className="bg-[#d9e1e0] rounded-[30px] p-8 flex flex-col justify-between" style={{ height: "369px" }}>
            <div className="w-11 h-11 rounded-lg bg-forest" style={{ WebkitMaskImage: "url('/images/a659ab390fded6eabe67c5f87c8d616d63fbc509.png')", maskImage: "url('/images/a659ab390fded6eabe67c5f87c8d616d63fbc509.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            <div>
              <p className="text-[22px] font-medium leading-[1.35] mb-2">Wireless Microphones</p>
              <p className="text-xl text-black/70 leading-[1.35]">Multiple wireless mics for seamless presentations</p>
            </div>
          </div>

          {/* High-Speed Internet */}
          <div className="bg-[#d9e1e0] rounded-[30px] p-8 flex flex-col justify-between" style={{ height: "369px" }}>
            <div className="w-11 h-11 rounded-lg bg-forest" style={{ WebkitMaskImage: "url('/images/25629f1b7b6e16e0e65332793e86ed9d3c77ae24.png')", maskImage: "url('/images/25629f1b7b6e16e0e65332793e86ed9d3c77ae24.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            <div>
              <p className="text-[22px] font-medium leading-[1.35] mb-2">High-Speed Internet</p>
              <p className="text-xl text-black/70 leading-[1.35]">Reliable WiFi connectivity throughout the venue</p>
            </div>
          </div>

          {/* Comfortable Seating */}
          <div className="bg-[#d9e1e0] rounded-[30px] p-8 flex flex-col justify-between" style={{ height: "369px" }}>
            <div className="w-11 h-11 rounded-lg bg-forest" style={{ WebkitMaskImage: "url('/images/b9467664ba9af25abe820918f01a9412c8159de2.png')", maskImage: "url('/images/b9467664ba9af25abe820918f01a9412c8159de2.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            <div>
              <p className="text-[22px] font-medium leading-[1.35] mb-2">Comfortable Seating</p>
              <p className="text-xl text-black/70 leading-[1.35]">Ergonomic chairs for extended sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOKING TIME SLOTS ═══ */}
      <section className="bg-[#d9e1e0] py-16 px-8 lg:px-16 xl:px-36">
        <h2 className="text-4xl lg:text-[40px] font-normal leading-[1.2] text-center mb-3">Booking Time Slots</h2>
        <p className="text-xl text-center text-black/70 mb-12">Choose your preferred time slot for the event</p>

        <div className="flex flex-wrap justify-center gap-[60px]">
          {/* Morning Slot card */}
          <div className="bg-white rounded-[33px] flex items-center w-full" style={{ height: "197px", maxWidth: "589px" }}>
            <div className="flex-shrink-0 bg-[#d9e1e0] rounded-[21px] flex items-center justify-center" style={{ width: "152px", height: "155px", margin: "21px" }}>
              <div className="bg-forest" style={{ width: "60px", height: "60px", WebkitMaskImage: "url('/images/c6350e34489311333893884a10f560b0fea69342.png')", maskImage: "url('/images/c6350e34489311333893884a10f560b0fea69342.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            </div>
            <div className="flex flex-col gap-3 pr-4 min-w-0">
              <div className="flex items-center gap-3">
                <img src="/images/fd6edea15f6bb4149ba9aaee9dc611c6ed578e0a.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="text-lg lg:text-[30px] font-medium leading-[1.2] text-black whitespace-nowrap">Morning Slot</p>
              </div>
              <div>
                <p className="text-base lg:text-xl text-black leading-[1.4] whitespace-nowrap">9:00 AM – 1:00 PM</p>
                <p className="text-sm lg:text-lg text-black/60">(4 hours)</p>
              </div>
            </div>
          </div>

          {/* Evening Slot card */}
          <div className="bg-white rounded-[33px] flex items-center w-full" style={{ height: "197px", maxWidth: "589px" }}>
            <div className="flex-shrink-0 bg-[#d9e1e0] rounded-[21px] flex items-center justify-center" style={{ width: "152px", height: "155px", margin: "21px" }}>
              <div className="bg-forest" style={{ width: "60px", height: "60px", WebkitMaskImage: "url('/images/0506bc12ef651d4a8e441123cdbeb65c156aecbb.png')", maskImage: "url('/images/0506bc12ef651d4a8e441123cdbeb65c156aecbb.png')", WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" }}></div>
            </div>
            <div className="flex flex-col gap-3 pr-4 min-w-0">
              <div className="flex items-center gap-3">
                <img src="/images/fd6edea15f6bb4149ba9aaee9dc611c6ed578e0a.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="text-lg lg:text-[30px] font-medium leading-[1.2] text-black whitespace-nowrap">Evening Slot</p>
              </div>
              <div>
                <p className="text-base lg:text-xl text-black leading-[1.4] whitespace-nowrap">2:00 PM – 6:00 PM</p>
                <p className="text-sm lg:text-lg text-black/60">(4 hours)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AVAILABILITY CALENDAR ═══ */}
      <section className="py-16 px-8 lg:px-16 xl:px-36">
        <h2 className="text-4xl lg:text-[40px] font-normal leading-[1.2] text-center mb-3">Availability Calendar</h2>
        <p className="text-xl text-center text-black/70 mb-12">Select your preferred date to check availability</p>

        <div className="max-w-[700px] mx-auto">
          {/* Month nav */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <button className="w-10 h-10 rounded-full bg-[#d9e1e0] flex items-center justify-center text-[#00372f] hover:bg-[#c5d3d1] transition-colors">
              <svg className="w-3 h-4" fill="none" viewBox="0 0 8 14" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 1L1 7l6 6" /></svg>
            </button>
            <span className="text-[22px] font-medium capitalize" style={{ fontFamily: "'Euclid Circular A',Poppins,sans-serif" }}>march 2026</span>
            <button className="w-10 h-10 rounded-full bg-[#d9e1e0] flex items-center justify-center text-[#00372f] hover:bg-[#c5d3d1] transition-colors">
              <svg className="w-3 h-4" fill="none" viewBox="0 0 8 14" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M1 1l6 6-6 6" /></svg>
            </button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
              <div key={i} className="text-center text-[22px] font-medium text-[#909190] py-2 capitalize">{day}</div>
            ))}
          </div>

          {/* Calendar grid — March 2026 starts on Sunday */}
          <div className="grid grid-cols-7 gap-y-1 text-center mb-10">
            {calendarDays.map((day) => (
              <div
                key={day}
                className={
                  bookedDates.includes(day)
                    ? "flex items-center justify-center h-12 rounded-full text-[22px] bg-forest text-white font-medium cursor-pointer"
                    : "flex items-center justify-center h-12 rounded-full text-[22px] cursor-pointer hover:bg-[#d9e1e0] transition-colors"
                }
              >
                {day}
              </div>
            ))}
          </div>

          {/* Legend pill */}
          <div className="flex items-center justify-center mx-auto w-full" style={{ background: "#d9e1e0", borderRadius: "49px", minHeight: "88px", maxWidth: "690px", padding: "16px 24px" }}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:gap-x-[82px]">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-forest inline-block" />
                <span className="text-xl text-black capitalize" style={{ fontFamily: "'Euclid Circular A',Poppins,sans-serif", fontWeight: 500 }}>Selected</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500 inline-block" />
                <span className="text-xl text-black capitalize" style={{ fontFamily: "'Euclid Circular A',Poppins,sans-serif", fontWeight: 500 }}>Booked</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/images/fd6edea15f6bb4149ba9aaee9dc611c6ed578e0a.svg" alt="" className="w-6 h-6" />
                <span className="text-xl text-black capitalize" style={{ fontFamily: "'Euclid Circular A',Poppins,sans-serif", fontWeight: 500 }}>Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BOOKING ENQUIRY FORM ═══ */}
      <section className="py-16 px-8 lg:px-16 xl:px-36">
        <h2 className="text-4xl lg:text-[40px] font-normal leading-[1.2] text-center mb-3">Booking Enquiry Form</h2>
        <p className="text-xl text-center text-black/70 mb-12">Fill in your details to submit a booking request</p>

        <div className="bg-[#d9e1e0] rounded-[30px] p-8 lg:p-14">
          <form className="flex flex-col gap-8">
            {/* Row 1: Full Name + Phone Number */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">full name*</label>
                <input type="text" placeholder="Enter full name" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black placeholder-black/40 outline-none w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">phone number*</label>
                <input type="tel" placeholder="Enter phone number" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black placeholder-black/40 outline-none w-full" />
              </div>
            </div>

            {/* Row 2: Email + Organisation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">email address*</label>
                <input type="email" placeholder="your@email.com" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black placeholder-black/40 outline-none w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">organisation name*</label>
                <input type="text" placeholder="Enter organisation name" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black placeholder-black/40 outline-none w-full" />
              </div>
            </div>

            {/* Row 3: Event Type + Expected Attendance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">event type*</label>
                <div className="relative">
                  <select className="bg-white rounded-[33px] h-20 px-8 text-lg text-black/60 outline-none w-full appearance-none cursor-pointer">
                    <option value="" disabled>Select event type</option>
                    <option>Corporate Meeting</option>
                    <option>Seminar</option>
                    <option>Workshop</option>
                    <option>Training Session</option>
                    <option>Product Launch</option>
                    <option>Conference</option>
                  </select>
                  <svg className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none" width="13" height="7" viewBox="0 0 13 7" fill="none">
                    <path d="M1 1L6.5 6L12 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">expected number of attendance*</label>
                <input type="number" placeholder="100" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black placeholder-black/40 outline-none w-full" />
              </div>
            </div>

            {/* Row 4: Date + Time Slot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">date*</label>
                <div className="relative">
                  <input type="text" defaultValue="10/10/2026" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black/60 outline-none w-full appearance-none cursor-pointer" />
                  <svg className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none" width="13" height="7" viewBox="0 0 13 7" fill="none">
                    <path d="M1 1L6.5 6L12 1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="capitalize text-xl text-black tracking-[-0.02em]">time slot</label>
                <div className="relative">
                  <input type="text" defaultValue="Evening Slot" className="bg-white rounded-[33px] h-20 px-8 text-lg text-black/60 outline-none w-full appearance-none cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Row 5: Additional Requirements */}
            <div className="flex flex-col gap-3">
              <label className="capitalize text-xl text-black tracking-[-0.02em]">additional requirements</label>
              <div className="bg-white rounded-[33px] px-8 py-6 w-full" style={{ minHeight: "175px" }}>
                <input type="text" placeholder="Any special requirements and needs" className="bg-transparent text-lg text-black/40 outline-none w-full" />
              </div>
            </div>

            {/* Upload Permission Certificate */}
            <div className="flex flex-col gap-3">
              <label className="text-xl text-black">upload permission certificate <span className="text-black/60">(optional)</span></label>
              <div className="bg-white rounded-[25px] flex items-center justify-center gap-5 cursor-pointer hover:bg-white/80 transition-colors" style={{ height: "87px" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                <span className="text-[22px] text-black capitalize">Upload pdf or image</span>
              </div>
            </div>

            {/* Dividers + Compliance */}
            <div className="h-px bg-black/20"></div>
            <div className="flex items-center gap-3">
              <img src="/images/fd6edea15f6bb4149ba9aaee9dc611c6ed578e0a.svg" alt="" className="w-6 h-6 flex-shrink-0" />
              <span className="text-xl text-black capitalize" style={{ fontFamily: "'Euclid Circular A',Poppins,sans-serif", fontWeight: 500 }}>I agree to the venue booking terms and conditions*</span>
            </div>
            <div className="h-px bg-black/20"></div>
            <p className="text-lg text-black">booking will be confirmed only after admin approved</p>

            {/* Send button */}
            <button
              type="submit"
              className="bg-black text-white rounded-[30px] w-full capitalize text-center hover:bg-[#222] transition-colors font-medium"
              style={{ height: "70px", fontSize: "24px" }}
            >
              send booking request
            </button>
          </form>
        </div>
      </section>

      {/* contact section removed */}
    </div>
  );
}
