import SpaTimeSlots from "@/components/SpaTimeSlots";
import Banner from "../../../public/SPA/spa-inner-page.jpeg"
import Facialtreatment from "../../../public/SPA/spa-1.png"
import Manicure from "../../../public/SPA/spa-2.png"
import Luxurymessage from "../../../public/SPA/spa-3.png"
import Wellnesstherapy from "../../../public/SPA/spa-3.png"
import Hairtherapy from "../../../public/SPA/spa-3.png"
import Aromatherapy from "../../../public/SPA/spa-4.png"

export const metadata = { title: "Salon & Spa Booking – Prime Promenade" };

export default function SpaPage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* header removed */}

      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh", height: "1060px" }}>
        <img
          src={Banner.src}
          alt="Salon &amp; Spa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 48%,rgba(0,0,0,0.9) 100%)" }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-24 pt-40 px-8 text-center">
          <div className="flex items-center gap-5 text-white mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            <span className="text-xl capitalize">Salon &amp; Spa Booking</span>
          </div>
          <h1 className="text-5xl lg:text-[76px] font-normal leading-tight tracking-[-0.02em] text-white mb-8">
            Relax, Refresh &amp; Rejuvenate
          </h1>
          <p className="text-xl leading-[1.3] text-white max-w-[825px]">
            Experience beauty and relaxation. Our team offers premium salon and spa services to rejuvenate your body and mind in a luxurious setting.
          </p>
        </div>
      </section>

      {/* ═══ OUR SERVICES ═══ */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-36">
        <h2 className="text-[40px] font-normal leading-[1.2] mb-3">Our Services</h2>
        <p className="text-xl leading-[1.35] mb-10 max-w-[495px]">Choose from our curated selection of premium salon and spa treatments</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {[
            { name: "Luxury Spa Massage", desc: "Unwind with our signature full-body massage.", img: Luxurymessage.src },
            { name: "Hair Styling & Cut", desc: "Professional hair styling, cutting, and color services", img: Hairtherapy.src },
            { name: "Facial Treatment", desc: "Rejuvenating facial care with premium skincare products", img: Facialtreatment.src },
            { name: "Manicure & Pedicure", desc: "Complete nail care with polish, gel, or natural finish", img: Manicure.src },
          ].map((s) => (
            <div key={s.name} className="rounded-[21px] overflow-hidden flex flex-col" style={{ background: "rgba(120,44,139,0.1)" }}>
              <div className="rounded-[21px] overflow-hidden mx-2 mt-2 h-[272px]">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-4 pt-4 pb-3 flex-1 flex flex-col">
                <p className="text-[22px] font-medium leading-[1.35] mb-1">{s.name}</p>
                <p className="text-[18px] leading-[1.35] text-black mb-4 flex-1">{s.desc}</p>
                <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize mb-2 h-[74px]">book now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: "Wellness Therapy", desc: "Holistic wellness treatments for mind and body balance", img: Wellnesstherapy.src, faded: false },
            { name: "Aromatherapy", desc: "Essential oil therapy for relaxation and stress relief", img: Aromatherapy.src, faded: false },
            { name: "Aromatherapy", desc: "Essential oil therapy for relaxation and stress relief", img: Aromatherapy.src, faded: true },
            { name: "Aromatherapy", desc: "Essential oil therapy for relaxation and stress relief", img: Aromatherapy.src, faded: true },
          ].map((s, i) => (
            <div key={i} className={`rounded-[21px] overflow-hidden flex flex-col ${s.faded ? "opacity-40" : ""}`} style={{ background: "rgba(120,44,139,0.1)" }}>
              <div className="rounded-[21px] overflow-hidden mx-2 mt-2 h-[272px]">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-4 pt-4 pb-3 flex-1 flex flex-col">
                <p className="text-[22px] font-medium leading-[1.35] mb-1">{s.name}</p>
                <p className="text-[18px] leading-[1.35] text-black mb-4 flex-1">{s.desc}</p>
                <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize mb-2 h-[74px]">book now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CHOOSE YOUR TIME SLOT ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <h2 className="text-[40px] font-normal leading-[1.2] mb-8">Choose Your Time Slot</h2>
        <div className="rounded-[30px] py-10 px-8 lg:px-12" style={{ background: "#f1eaf3" }}>
          <p className="text-[22px] capitalize leading-[1.2] mb-4">Date</p>
          <div className="bg-white rounded-[20px] flex items-center gap-4 px-6 mb-8 border border-[#77f4ff]" style={{ height: "80px", maxWidth: "445px" }}>
            <input type="date" className="bg-transparent text-xl text-black/60 outline-none flex-1 capitalize" placeholder="Pick a Date" />
          </div>
          <SpaTimeSlots />
        </div>
      </section>

      {/* ═══ COMPLETE YOUR BOOKING ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-normal leading-[1.2] mb-4">Complete Your Booking</h2>
          <p className="text-xl leading-[1.35] max-w-[550px] mx-auto">Fill in your details to confirm the appointment</p>
        </div>
        <div className="rounded-[30px] p-8 lg:p-12" style={{ background: "#f1eaf3" }}>
          <form className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">full name*</p>
                <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                  <input type="text" placeholder="Enter full name" className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize" />
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">email address*</p>
                <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                  <input type="email" placeholder="your@email.com" className="w-full bg-transparent text-lg text-black/60 font-light outline-none" />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">phone number*</p>
                <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                  <input type="tel" placeholder="Enter full phone number" className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize" />
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">selected service*</p>
                <div className="bg-white rounded-[33px] flex items-center px-6 relative" style={{ height: "80px" }}>
                  <select className="w-full bg-transparent text-lg text-black font-light outline-none capitalize appearance-none cursor-pointer">
                    <option>Hair Styling &amp; Cut</option>
                    <option>Luxury Spa Massage</option>
                    <option>Facial Treatment</option>
                    <option>Manicure &amp; Pedicure</option>
                    <option>Wellness Therapy</option>
                    <option>Aromatherapy</option>
                  </select>
                  <svg className="absolute right-6 w-3 h-5 pointer-events-none" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">preferred time*</p>
                <div className="bg-white rounded-[33px] flex items-center px-6 relative" style={{ height: "80px" }}>
                  <select className="w-full bg-transparent text-lg text-black font-light outline-none capitalize appearance-none cursor-pointer">
                    <option>9:00 am</option>
                    <option>8:00 am</option>
                    <option>10:00 am</option>
                    <option>11:00 am</option>
                    <option>12:00 am</option>
                    <option>1:00 pm</option>
                    <option>2:00 pm</option>
                    <option>3:00 pm</option>
                    <option>4:00 pm</option>
                    <option>5:00 pm</option>
                  </select>
                  <svg className="absolute right-6 w-3 h-5 pointer-events-none" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">message (optional)</p>
                <div className="bg-white rounded-[33px] flex items-center px-6" style={{ height: "80px" }}>
                  <input type="text" placeholder="Tell us about your goals and interest" className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize" />
                </div>
              </div>
            </div>
            <button type="submit" className="bg-black text-white rounded-[30px] w-full flex items-center justify-center capitalize font-medium text-2xl leading-[1.2] mt-2" style={{ height: "70px" }}>
              confirm booking
            </button>
          </form>
        </div>
      </section>

      {/* contact section removed */}
    </div>
  );
}
