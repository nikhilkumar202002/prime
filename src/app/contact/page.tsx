import Banner from "../../../public/images/contact-slider.jpg"

export const metadata = { title: "Contact Us – Prime Promenade" };

export default function ContactPage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ height: "730px", minHeight: "60vh" }}>
        <img
          src={Banner.src}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 47%,rgba(0,0,0,0.9) 100%)" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-20 pt-32 px-8 text-center">
          <div className="flex items-center gap-5 text-white mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            <span className="text-xl capitalize">Contact Us</span>
          </div>
          <h1 className="text-5xl lg:text-[76px] font-normal leading-tight tracking-[-0.02em] text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl leading-[1.3] text-white max-w-[553px]">
            We&apos;re here to help. Reach out to us for any questions, support, or service enquiries.
          </p>
        </div>
      </section>

      {/* ═══ INFO CARDS ═══ */}
      <section className="py-16 lg:py-24 px-8 lg:px-16 xl:px-36">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div
            className="bg-white rounded-[30px] shadow-[0px_0px_81.6px_0px_rgba(0,0,0,0.1)] flex flex-col items-center text-center px-6 py-12 gap-5"
            style={{ minHeight: "383px" }}
          >
            <img
              src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
              alt="Address"
              style={{ width: "74px", height: "74px", objectFit: "contain" }}
            />
            <p className="text-2xl font-medium leading-[1.35]">Address</p>
            <p className="text-xl leading-[1.35] text-black">
              123 Business Street, Suite 100,<br />New York, NY 10001
            </p>
          </div>

          {/* Phone Number */}
          <div
            className="bg-white rounded-[30px] shadow-[0px_0px_81.6px_0px_rgba(0,0,0,0.1)] flex flex-col items-center text-center px-6 py-12 gap-5"
            style={{ minHeight: "383px" }}
          >
            <img
              src="/images/f6fb2c31b18414e31d310c19b37ab06e54fb0f38.png"
              alt="Phone"
              style={{ width: "64px", height: "64px", objectFit: "contain" }}
            />
            <p className="text-2xl font-medium leading-[1.35]">Phone Number</p>
            <div className="text-xl leading-[1.35]">
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Email Address */}
          <div
            className="bg-white rounded-[30px] shadow-[0px_0px_81.6px_0px_rgba(0,0,0,0.1)] flex flex-col items-center text-center px-6 py-12 gap-5"
            style={{ minHeight: "383px" }}
          >
            <img
              src="/images/f6fb2c31b18414e31d310c19b37ab06e54fb0f38.png"
              alt="Email"
              style={{ width: "66px", height: "66px", objectFit: "contain" }}
            />
            <p className="text-2xl font-medium leading-[1.35]">Email Address</p>
            <div className="text-xl leading-[1.35]">
              <p>contact@company.com</p>
              <p>contact@company01.com</p>
            </div>
          </div>

          {/* Working Hours */}
          <div
            className="bg-white rounded-[30px] shadow-[0px_0px_81.6px_0px_rgba(0,0,0,0.1)] flex flex-col items-center text-center px-6 py-12 gap-5"
            style={{ minHeight: "383px" }}
          >
            <img
              src="/images/6e0140cef7684a11193ac7db24eb03692cc11e5d.png"
              alt="Working Hours"
              style={{ width: "64px", height: "64px", objectFit: "contain" }}
            />
            <p className="text-2xl font-medium leading-[1.35]">Working Hours</p>
            <p className="text-xl leading-[1.35]">Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* ═══ SEND US A MESSAGE ═══ */}
      <section className="pb-16 lg:pb-24 px-8 lg:px-16 xl:px-36">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-normal leading-[1.2] mb-4">Send us a Message</h2>
          <p className="text-xl leading-[1.35]">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
        </div>
        <div className="bg-white rounded-[30px] shadow-[0px_0px_81.6px_0px_rgba(0,0,0,0.1)] p-8 lg:p-12 xl:p-16">
          <form className="flex flex-col gap-8">
            {/* Row 1: Full Name + Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">Full Name*</p>
                <div className="rounded-[33px] flex items-center px-6" style={{ height: "80px", background: "#f0f0f0" }}>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">Email Address*</p>
                <div className="rounded-[33px] flex items-center px-6" style={{ height: "80px", background: "#f0f0f0" }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Row 2: Phone + Subject */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">Phone Number*</p>
                <div className="rounded-[33px] flex items-center px-6" style={{ height: "80px", background: "#f0f0f0" }}>
                  <input
                    type="tel"
                    placeholder="Enter full phone number"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">Subject *</p>
                <div className="rounded-[33px] flex items-center px-6" style={{ height: "80px", background: "#f0f0f0" }}>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Row 3: Message */}
            <div>
              <p className="text-xl capitalize leading-[1.35] mb-3">Message</p>
              <div className="rounded-[33px] flex items-start px-6 py-6" style={{ minHeight: "159px", background: "#f0f0f0" }}>
                <textarea
                  rows={3}
                  placeholder="Any special requirements and needs"
                  className="w-full bg-transparent text-lg text-black/60 font-light outline-none resize-none capitalize placeholder:not-italic"
                ></textarea>
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="bg-black text-white rounded-[30px] w-full flex items-center justify-center capitalize font-medium text-2xl leading-[1.2]"
              style={{ height: "70px" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ═══ OUR LOCATION ═══ */}
      <section className="pb-16 lg:pb-24 px-8 lg:px-16 xl:px-36">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-normal leading-[1.2] mb-4">Our Location</h2>
          <p className="text-xl leading-[1.35]">Visit us at our office or find us on the map below.</p>
        </div>
        {/* Map with overlay card */}
        <div
          className="relative rounded-[30px] overflow-hidden shadow-[0px_0px_81.6px_0px_rgba(0,0,0,0.1)]"
          style={{ minHeight: "444px" }}
        >
          <div className="w-full h-full bg-sage flex items-center justify-center text-black/40 text-xl" style={{ minHeight: "444px", position: "absolute", inset: 0 }}>Map Placeholder</div>
          {/* Overlay card */}
          <div
            className="absolute right-6 top-6 bg-white rounded-[26px] px-6 py-5 flex flex-col gap-1 shadow-md"
            style={{ minWidth: "280px", maxWidth: "360px" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-xl font-semibold leading-[1.35] mb-1">Empire State Building</p>
                <p className="text-base leading-[1.35] text-black">20 W 34th St., New York, NY 10001</p>
                <p className="text-base text-black/60 mt-1">4.7 rating (124,819)</p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0 pt-1">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEGIN YOUR JOURNEY + FOOTER (ContactSection removed) ═══ */}
    </div>
  );
}
