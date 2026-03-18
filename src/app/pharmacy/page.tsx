

export const metadata = { title: "Pharmacy – Prime Promenade" };

export default function PharmacyPage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <img
          src="/images/915ccc60817da2d2ac3ba8f1210f0d402cf02139.png"
          alt="Pharmacy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 47.9%,rgba(0,0,0,0.9) 100%)",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-end pb-20 px-8 text-center">
          <div className="flex items-center gap-5 mb-5 text-white">
            <img
              src="/images/9f6d2d76d1781ca18596c7b6eab1c23e95a5ba2b.svg"
              alt=""
              className="w-2.5 h-2.5"
            />
            <span className="text-xl capitalize">Pharmacy</span>
          </div>
          <h1 className="text-white text-5xl lg:text-[76px] font-normal leading-[1.18] tracking-[-0.02em] mb-5 max-w-4xl">
            Your Trusted Everyday Pharmacy
          </h1>
          <p className="text-white/90 text-lg lg:text-[20px] leading-[1.3] max-w-2xl">
            Your reliable partner in healthcare, providing essential medicines,
            wellness products, and professional pharmaceutical guidance to
            support your health journey.
          </p>
        </div>
      </section>

      {/* ═══ YOUR HEALTH, OUR COMMITMENT ═══ */}
      <section className="py-16 lg:py-24 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[5%] items-start">
          {/* Left: Image mosaic */}
          <div className="w-full lg:w-[53%] flex-shrink-0">
            {/* Desktop mosaic */}
            <div className="img-mosaic hidden lg:block">
              <img
                src="/images/f63b74be14f75eea651f8c760ad4abb2e1c7628f.png"
                alt=""
                className="main-img"
              />
              <div className="top-right">
                <img
                  src="/images/5032064da35357705047a5a8d5cb76eead681913.png"
                  alt=""
                />
              </div>
              <div className="bottom-right">
                <img
                  src="/images/51ca2782bc20b6034d9593e5c29c0934ded664e7.png"
                  alt=""
                />
              </div>
            </div>
            {/* Mobile: stacked */}
            <div className="lg:hidden flex flex-col gap-4">
              <img
                src="/images/f63b74be14f75eea651f8c760ad4abb2e1c7628f.png"
                alt=""
                className="w-full object-cover rounded-[20px]"
                style={{ aspectRatio: "585/539" }}
              />
              <div className="flex gap-4">
                <img
                  src="/images/5032064da35357705047a5a8d5cb76eead681913.png"
                  alt=""
                  className="w-1/2 object-cover rounded-[20px]"
                  style={{ aspectRatio: "283/270" }}
                />
                <img
                  src="/images/51ca2782bc20b6034d9593e5c29c0934ded664e7.png"
                  alt=""
                  className="w-1/2 object-cover rounded-[20px]"
                  style={{ aspectRatio: "381/256" }}
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2]">
              Your Health, Our Commitment
            </h2>
            <p className="text-lg lg:text-[20px] leading-[1.35] text-black">
              Our pharmacy is dedicated to providing safe, reliable, and
              professional healthcare services. With licensed pharmacists and a
              comprehensive range of genuine medicines, we&apos;re here to
              support your wellness needs every day.
            </p>

            <div className="flex flex-col gap-10 mt-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <span className="star-icon text-[28px] mt-0.5 flex-shrink-0">
                  ✦
                </span>
                <div>
                  <p className="text-xl lg:text-[24px] font-medium leading-[1.35] mb-1">
                    Licensed Pharmacists
                  </p>
                  <p className="text-lg lg:text-[20px] text-black/60 leading-[1.35]">
                    Expert guidance from qualified healthcare professionals
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <span className="star-icon text-[28px] mt-0.5 flex-shrink-0">
                  ✦
                </span>
                <div>
                  <p className="text-xl lg:text-[24px] font-medium leading-[1.35] mb-1">
                    Genuine Medicines
                  </p>
                  <p className="text-lg lg:text-[20px] text-black/60 leading-[1.35]">
                    100% authentic products from authorised distributors
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <span className="star-icon text-[28px] mt-0.5 flex-shrink-0">
                  ✦
                </span>
                <div>
                  <p className="text-xl lg:text-[24px] font-medium leading-[1.35] mb-1">
                    Professional Support
                  </p>
                  <p className="text-lg lg:text-[20px] text-black/60 leading-[1.35]">
                    Personalised care and consultation services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPLETE PHARMACY & WELLNESS SOLUTIONS ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div
          className="rounded-[30px] px-10 lg:px-16 py-10 lg:py-14"
          style={{ background: "rgba(96,75,158,0.15)" }}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            <div className="flex flex-col gap-8 lg:w-[40%] flex-shrink-0">
              <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2]">
                Complete Pharmacy &amp; Wellness Solutions
              </h2>
              <p className="text-lg lg:text-[20px] leading-[1.35] text-black">
                We provide a comprehensive range of pharmacy and healthcare
                essentials to support your everyday well-being. From
                prescription and over-the-counter medicines to vitamins,
                supplements, first aid supplies, and personal care products, our
                pharmacy ensures trusted access to quality health solutions. We
                also offer reliable health monitoring devices and wellness
                products to help you manage and maintain a healthier lifestyle
                with confidence.
              </p>
            </div>
            <div className="w-full lg:flex-1">
              <img
                src="/images/b81103fea2e5e8d5ceef4709e81b4c72b67924ed.png"
                alt="Pharmacy products"
                className="w-full h-auto object-cover rounded-[36px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPLIANCE & SAFETY ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div
          className="rounded-[30px] px-8 lg:px-20 py-12 lg:py-16"
          style={{ background: "#e7e4f0" }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-5">
              Compliance &amp; Safety
            </h2>
            <p className="text-lg lg:text-[20px] leading-[1.35] max-w-lg mx-auto">
              Your safety is our priority. We adhere to the highest standards of
              pharmaceutical regulations
            </p>
          </div>

          {/* 2x2 grid */}
          <div className="flex flex-wrap justify-between gap-y-12 mb-12">
            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="star-icon text-[22px] mt-0.5 flex-shrink-0">
                ✦
              </span>
              <div>
                <p className="text-xl lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Regulated Dispensing:
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  All medicines dispensed strictly as per healthcare regulations
                  and guidelines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="star-icon text-[22px] mt-0.5 flex-shrink-0">
                ✦
              </span>
              <div>
                <p className="text-xl lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Prescription Required:
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  Prescription medicines require valid doctor&apos;s
                  prescription
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="star-icon text-[22px] mt-0.5 flex-shrink-0">
                ✦
              </span>
              <div>
                <p className="text-xl lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Authorised Sources:
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  All medicines sourced exclusively from authorised distributors
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="star-icon text-[22px] mt-0.5 flex-shrink-0">
                ✦
              </span>
              <div>
                <p className="text-xl lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Quality Assurance:
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  Rigorous quality checks and proper storage conditions
                  maintained
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice white card */}
          <div className="bg-white rounded-[33px] px-8 lg:px-12 py-8 lg:py-10">
            <p className="text-xl lg:text-[25px] font-medium leading-[1.2] mb-5">
              Important Notice
            </p>
            <p className="text-base lg:text-[20px] leading-[1.35]">
              This pharmacy page is provided for informational purposes only.
              Online ordering or medicine delivery services are not available
              through this website. For purchasing medicines, consultations, or
              any healthcare needs, please visit our pharmacy directly.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ VISIT OUR PHARMACY ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-4">
            Visit Our Pharmacy
          </h2>
          <p className="text-lg lg:text-[20px] leading-[1.35]">
            Find us conveniently located within the building
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Location */}
          <div
            className="rounded-[30px] flex flex-col items-center text-center"
            style={{ background: "#e7e4f0", minHeight: "433px" }}
          >
            <div className="flex-1 flex flex-col items-center justify-start pt-20 px-8 pb-8">
              <img
                src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                alt=""
                className="w-[70px] h-[70px] object-contain mb-10"
              />
              <p className="text-xl lg:text-[26px] font-medium leading-[1.2] mb-4">
                Location
              </p>
              <p className="text-base lg:text-[20px] leading-[1.35]">
                Ground Floor, West Wing Easily accessible from the main entrance
                for your convenience.
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div
            className="rounded-[30px] flex flex-col items-center text-center"
            style={{ background: "#e7e4f0", minHeight: "433px" }}
          >
            <div className="flex-1 flex flex-col items-center justify-start pt-20 px-8 pb-8">
              <img
                src="/images/c5bbfee7340330b40950b2d63617597d628d9c3d.png"
                alt=""
                className="w-[64px] h-[64px] object-contain mb-10"
              />
              <p className="text-xl lg:text-[26px] font-medium leading-[1.2] mb-4">
                Opening Hours
              </p>
              <p className="text-base lg:text-[20px] leading-[1.35]">
                Mon-Sat: 8:00 AM – 9:00 PM
              </p>
              <p className="text-base lg:text-[20px] leading-[1.35]">
                Sun: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact */}
          <div
            className="rounded-[30px] flex flex-col items-center text-center"
            style={{ background: "#e7e4f0", minHeight: "433px" }}
          >
            <div className="flex-1 flex flex-col items-center justify-start pt-20 px-8 pb-8">
              <img
                src="/images/f6fb2c31b18414e31d310c19b37ab06e54fb0f38.png"
                alt=""
                className="w-[60px] h-[60px] object-contain mb-10"
              />
              <p className="text-xl lg:text-[26px] font-medium leading-[1.2] mb-4">
                Contact
              </p>
              <p className="text-base lg:text-[20px] leading-[1.35]">
                +1 (555) 123-4567
              </p>
              <p className="text-base lg:text-[20px] leading-[1.35]">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT SECTION (removed) ═══ */}
    </div>
  );
}
