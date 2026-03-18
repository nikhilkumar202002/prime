import Banner from "../../../public/images/forever-innerpage-slider.jpeg";
import Icon1 from "../../../public/images/icon-1.png";
import Icon2 from "../../../public/images/icon-2.png";
import Icon3 from "../../../public/images/icon-3.png";

export const metadata = { title: "Multi-Brand Vendor Zone – Prime Promenade" };

export default function VendorPage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* header removed */}

      {/* ═══ HERO ═══ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100vh", height: "1060px" }}
      >
        <img
          src={Banner.src}
          alt="Vendor Zone"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 100%),linear-gradient(rgba(0,0,0,0) 48%,rgba(0,0,0,0.9) 100%)",
          }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-end pb-24 pt-40 px-8 text-center">
          <div className="flex items-center gap-5 text-white mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block"></span>
            <span className="text-xl capitalize">Vendor Zone</span>
          </div>
          <h1 className="text-5xl lg:text-[76px] font-normal leading-tight tracking-[-0.02em] text-white mb-8">
            Multi-Brand Vendor Zone
          </h1>
          <p className="text-xl leading-[1.3] text-white max-w-[821px]">
            The first floor features a space for brands and vendors to showcase
            their products. Join our marketplace to reach new customers.
          </p>
        </div>
      </section>

      {/* ═══ ABOUT THE VENDOR ZONE ═══ */}
      <section className="py-20 lg:py-28 px-8 lg:px-16 xl:px-36">
        <h2 className="text-[40px] font-normal leading-[1.2] text-center mb-6">
          About the Vendor Zone
        </h2>
        <p className="text-xl leading-[1.35] text-center max-w-[1067px] mx-auto mb-16">
          Our vendor zone provides retail counters for multiple brands, creating
          a dynamic shopping environment where businesses can promote their
          products and reach new customers. Whether you&apos;re an established
          brand or an emerging entrepreneur, we offer the perfect platform to
          showcase your offerings.
        </p>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Retail Counters */}
          <div
            className="rounded-[30px] p-8 pt-10 flex flex-col gap-6"
            style={{ background: "rgba(236,104,36,0.1)", minHeight: "433px" }}
          >
            <img
              src={Icon3.src}
              alt="Grow Your Business"
              className="w-[60px] h-auto self-start"
            />
            <div className="mt-auto">
              <p className="text-[30px] font-medium leading-[1.2] mb-4">
                Retail Counters
              </p>
              <p className="text-xl leading-[1.35]">
                Premium retail counter space designed for product showcase and
                sales
              </p>
            </div>
          </div>

          {/* High Foot Traffic */}
          <div
            className="rounded-[30px] p-8 pt-10 flex flex-col gap-6"
            style={{ background: "rgba(236,104,36,0.1)", minHeight: "433px" }}
          >
            <img
              src={Icon1.src}
              alt="Retail Counters"
              className="w-[60px] h-auto self-start"
            />

            <div className="mt-auto">
              <p className="text-[30px] font-medium leading-[1.2] mb-4">
                High Foot Traffic
              </p>
              <p className="text-xl leading-[1.35]">
                Access to a diverse customer base in a strategic first-floor
                location
              </p>
            </div>
          </div>

          {/* Grow Your Business */}
          <div
            className="rounded-[30px] p-8 pt-10 flex flex-col gap-6"
            style={{ background: "rgba(236,104,36,0.1)", minHeight: "433px" }}
          >
            <img
              src={Icon2.src}
              alt="High Foot Traffic"
              className="w-[60px] h-auto self-start"
            />

            <div className="mt-auto">
              <p className="text-[30px] font-medium leading-[1.2] mb-4">
                Grow Your Business
              </p>
              <p className="text-xl leading-[1.35]">
                Flexible terms to help your brand scale and reach new markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AVAILABLE VENDOR COUNTERS ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <h2 className="text-[40px] font-normal leading-[1.2] text-center mb-4">
          Available Vendor Counters
        </h2>
        <p className="text-xl leading-[1.35] text-center mb-12">
          Choose from our selection of strategically located retail counters
        </p>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {/* Counter A1 — available */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter A1
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-black leading-[1.35]">
                available
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">12 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Enquire Now
            </button>
          </div>

          {/* Counter A2 — available */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter A2
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-black leading-[1.35]">
                available
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">14 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Enquire Now
            </button>
          </div>

          {/* Counter B1 — occupied */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter B1
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-red-500 leading-[1.35]">
                occupied
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">12 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-white text-black rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Not Available
            </button>
          </div>

          {/* Counter B2 — available */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter B2
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-black leading-[1.35]">
                available
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">12 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Counter B1 — occupied */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter B1
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-red-500 leading-[1.35]">
                occupied
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">12 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-white text-black rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Not Available
            </button>
          </div>

          {/* Counter A2 — available */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter A2
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-black leading-[1.35]">
                available
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">14 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Enquire Now
            </button>
          </div>

          {/* Counter A1 — available */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter A1
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-black leading-[1.35]">
                available
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">12 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Enquire Now
            </button>
          </div>

          {/* Counter B2 — available */}
          <div
            className="rounded-[20px] p-5 flex flex-col gap-5"
            style={{ background: "#fdf0e9" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-[22px] font-medium leading-[1.35]">
                Counter B2
              </p>
              <span className="bg-white rounded-[19px] px-3 py-1 text-[18px] text-black leading-[1.35]">
                available
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-1">
                <svg
                  className="w-8 h-8 text-vendor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <p className="text-xl leading-[1.35]">12 sq.m</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/39fec67a1908a27ca15aa1e18c7dd81e1bd0db84.png"
                  alt=""
                  className="w-7 h-7 object-contain flex-shrink-0"
                />
                <p className="text-xl leading-[1.35]">Main Entrance Area</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-[54px] w-full flex items-center justify-center font-medium text-[22px] capitalize h-[64px]">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FLEXIBLE BOOKING OPTIONS ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <h2 className="text-[40px] font-normal leading-[1.2] text-center mb-4">
          Flexible Booking Options
        </h2>
        <p className="text-xl leading-[1.35] text-center mb-12">
          Choose the rental duration that best suits your business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 Day */}
          <div
            className="rounded-[30px] flex flex-col items-center gap-10 px-11 py-[103px]"
            style={{ background: "#fdf0e9", minHeight: "417px" }}
          >
            <p className="text-[26px] font-semibold leading-[1.35] text-center">
              1 Day
            </p>
            <p className="text-[22px] font-medium leading-[1.35] text-center">
              Ideal for product launches or short promotions
            </p>
            <div
              className="bg-white rounded-[30px] w-full flex items-center justify-center"
              style={{ minHeight: "108px", maxWidth: "350px" }}
            >
              <ul
                className="list-disc text-xl leading-[1.35] text-center space-y-0"
                style={{ paddingLeft: "30px" }}
              >
                <li>Quick setup</li>
                <li>Event-based selling</li>
                <li>Flexible timing</li>
              </ul>
            </div>
          </div>

          {/* 1 Week */}
          <div
            className="rounded-[30px] flex flex-col items-center gap-10 px-11 py-[103px]"
            style={{ background: "#fdf0e9", minHeight: "417px" }}
          >
            <p className="text-[26px] font-semibold leading-[1.35] text-center">
              1 Week
            </p>
            <p className="text-[22px] font-medium leading-[1.35] text-center">
              Suitable for seasonal sales or campaigns
            </p>
            <div
              className="bg-white rounded-[30px] w-full flex items-center justify-center"
              style={{ minHeight: "108px", maxWidth: "350px" }}
            >
              <ul
                className="list-disc text-xl leading-[1.35] text-center space-y-0"
                style={{ paddingLeft: "30px" }}
              >
                <li>Weekly rotations</li>
                <li>Campaign flexibility</li>
                <li>Market testing</li>
              </ul>
            </div>
          </div>

          {/* 1 Year */}
          <div
            className="rounded-[30px] flex flex-col items-center gap-10 px-11 py-[103px]"
            style={{ background: "#fdf0e9", minHeight: "417px" }}
          >
            <p className="text-[26px] font-semibold leading-[1.35] text-center">
              1 Year
            </p>
            <p className="text-[22px] font-medium leading-[1.35] text-center">
              Long-term retail presence for brands
            </p>
            <div
              className="bg-white rounded-[30px] w-full flex items-center justify-center"
              style={{ minHeight: "108px", maxWidth: "350px" }}
            >
              <ul
                className="list-disc text-xl leading-[1.35] text-center space-y-0"
                style={{ paddingLeft: "30px" }}
              >
                <li>Permanent location</li>
                <li>Brand establishment</li>
                <li>Best rates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REGISTER YOUR INTEREST ═══ */}
      <section className="pb-20 lg:pb-28 px-8 lg:px-16 xl:px-36">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-normal leading-[1.2] mb-4">
            Register Your Interest
          </h2>
          <p className="text-xl leading-[1.35]">
            Fill out the form below and our team will get back to you within 24
            hours
          </p>
        </div>
        <div
          className="rounded-[30px] p-8 lg:p-12"
          style={{ background: "#fdf0e9" }}
        >
          <form className="flex flex-col gap-6">
            {/* Row 1: Business/Brand Name + Contact Person */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">
                  business/brand name*
                </p>
                <div
                  className="bg-white rounded-[33px] flex items-center px-6"
                  style={{ height: "80px" }}
                >
                  <input
                    type="text"
                    placeholder="Enter business/brand name"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">
                  contact person*
                </p>
                <div
                  className="bg-white rounded-[33px] flex items-center px-6"
                  style={{ height: "80px" }}
                >
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone Number + Email Address */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">
                  phone number*
                </p>
                <div
                  className="bg-white rounded-[33px] flex items-center px-6"
                  style={{ height: "80px" }}
                >
                  <input
                    type="tel"
                    placeholder="Enter full phone number"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                  />
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">
                  email address*
                </p>
                <div
                  className="bg-white rounded-[33px] flex items-center px-6"
                  style={{ height: "80px" }}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Preferred Booking Duration + Message */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">
                  preferred booking duration*
                </p>
                <div
                  className="bg-white rounded-[33px] flex items-center px-6 relative"
                  style={{ height: "80px" }}
                >
                  <select className="w-full bg-transparent text-lg text-black font-light outline-none capitalize appearance-none cursor-pointer">
                    <option value="" disabled>
                      select booking duration
                    </option>
                    <option>1 Day</option>
                    <option>1 Week</option>
                    <option>1 Year</option>
                  </select>
                  <svg
                    className="absolute right-6 w-3 h-5 pointer-events-none"
                    viewBox="0 0 13 7"
                    fill="none"
                  >
                    <path
                      d="M1 1L6.5 6L12 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl capitalize leading-[1.35] mb-3">
                  message (optional)
                </p>
                <div
                  className="bg-white rounded-[33px] flex items-center px-6"
                  style={{ height: "80px" }}
                >
                  <input
                    type="text"
                    placeholder="Tell us about your goals and interest"
                    className="w-full bg-transparent text-lg text-black/60 font-light outline-none placeholder:capitalize"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white rounded-[30px] w-full flex items-center justify-center capitalize font-medium text-2xl leading-[1.2] mt-2"
              style={{ height: "70px" }}
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* contact section removed */}
    </div>
  );
}
