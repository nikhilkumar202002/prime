import Footer from "./Footer";

export default function ContactSection() {
  return (
    <section className="bg-[#0e0e0e] pt-20 lg:pt-28 pb-0">
      <div className="px-8 lg:px-16 xl:px-32">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
          <span className="text-xl text-white">Get in Touch</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-normal leading-[1.2] text-white text-center mb-16">
          Begin Your Journey
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visit Us */}
          <div className="bg-[#181818] rounded-[20px] p-8 lg:p-10 flex flex-col gap-7">
            <div>
              <p className="text-2xl font-medium text-white mb-3">Visit Us</p>
              <p className="text-lg text-white/80 leading-relaxed">
                Schedule a private tour of our 4-floor lifestyle destination. Experience the space firsthand and discover your perfect fit.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-white">
              <div>
                <p className="text-lg capitalize tracking-tight mb-1">Location:</p>
                <p className="text-base text-white/60 font-light leading-relaxed">Premium Commercial District, City Center</p>
              </div>
              <div className="h-px bg-white/20"></div>
              <div>
                <p className="text-lg capitalize tracking-tight mb-1">Phone:</p>
                <p className="text-base text-white/60 font-light">+1 (555) 000-0000</p>
              </div>
              <div className="h-px bg-white/20"></div>
              <div>
                <p className="text-lg capitalize tracking-tight mb-1">Email:</p>
                <p className="text-base text-white/60 font-light">info@elevate-wellness.com</p>
              </div>
              <div className="h-px bg-white/20"></div>
              <div>
                <p className="text-xl capitalize mb-4">Inquire About</p>
                <div className="flex flex-wrap gap-2">
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Memberships</button>
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Leasing</button>
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Partnerships</button>
                  <button className="border border-white/30 rounded-full px-5 py-2.5 text-base text-white font-light hover:bg-white/10 transition-colors">Events</button>
                </div>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <form className="flex flex-col gap-10 pt-2">
            <div className="flex flex-col gap-3 border-b border-white/30 pb-6">
              <label className="text-xl capitalize text-white/80 tracking-tight">Full Name</label>
              <input type="text" className="bg-transparent text-white text-lg outline-none pb-1" />
            </div>
            <div className="flex flex-col gap-3 border-b border-white/30 pb-6">
              <label className="text-xl capitalize text-white/80 tracking-tight">Email Address</label>
              <input type="email" className="bg-transparent text-white text-lg outline-none pb-1" />
            </div>
            <div className="flex flex-col gap-3 border-b border-white/30 pb-6">
              <label className="text-xl capitalize text-white/80 tracking-tight">I&apos;m Interested In...</label>
              <div className="flex items-center justify-between">
                <input type="text" className="bg-transparent text-white text-lg outline-none pb-1 flex-1" />
                <svg className="w-4 h-3 text-white/60 flex-shrink-0" viewBox="0 0 13 7" fill="none"><path d="M1 1L6.5 6L12 1" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
            </div>
            <div className="flex flex-col gap-10 border-b border-white/30 pb-16">
              <label className="text-xl capitalize text-white/80 tracking-tight">Your Message</label>
              <textarea rows={1} className="bg-transparent text-white text-lg outline-none resize-none pb-1"></textarea>
            </div>
            <button type="submit" className="bg-[#0e0e0e] border border-white/20 rounded-full py-5 text-xl text-white capitalize hover:bg-white/10 transition-colors">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <div className="h-8"></div>
    </section>
  );
}
