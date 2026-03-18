import Eduimage from "../../../public/images/edu-sub-sec.jpg"

export const metadata = { title: "Study Centre – Prime Promenade" };

export default function StudyCentrePage() {
  return (
    <div className="bg-white text-black overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <img
          src="/images/edu-banner.jpg"
          alt="Study Centre"
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
            <span className="text-xl capitalize">Study Centre</span>
          </div>
          <h1 className="text-white text-5xl lg:text-[76px] font-normal leading-[1.18] tracking-[-0.02em] mb-5 max-w-4xl">
            Professional Learning Center
          </h1>
          <p className="text-white/90 text-lg lg:text-[20px] leading-[1.3] max-w-2xl">
            Welcome to our institute focused on empowering students through
            skill development. We use innovative methods to prepare you for a
            successful career.
          </p>
        </div>
      </section>

      {/* ═══ ABOUT THE STUDY CENTRE ═══ */}
      <section className="py-16 lg:py-24 px-8 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-6">
            About the Study Centre
          </h2>
          <p className="text-lg lg:text-[20px] leading-[1.35] max-w-4xl mx-auto">
            Our study centre is dedicated to providing world-class education
            that bridges the gap between academic knowledge and industry
            requirements. We believe in nurturing talent through practical,
            hands-on training and comprehensive support systems.
          </p>
        </div>

        {/* 4 feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
          {/* Industry-Focused Training */}
          <div
            className="card-grey rounded-[30px] p-8 flex flex-col"
            style={{ minHeight: "433px" }}
          >
            <img
              src="/images/08ca8fb454dd332f6f5991147c07a54f384a1975.png"
              alt=""
              className="w-[62px] h-[62px] object-contain mb-auto"
            />
            <div className="mt-auto pt-12">
              <p className="text-[22px] font-medium leading-[1.35] mb-3">
                Industry-Focused Training
              </p>
              <p className="text-[18px] leading-[1.35]">
                Our curriculum is designed in collaboration with industry experts
                to ensure relevance and practical applicability.
              </p>
            </div>
          </div>

          {/* Expert Instructors */}
          <div
            className="card-grey rounded-[30px] p-8 flex flex-col"
            style={{ minHeight: "433px" }}
          >
            <img
              src="/images/98f57086e303183f162bda631928f480a3761d46.png"
              alt=""
              className="w-[62px] h-[62px] object-contain mb-auto"
            />
            <div className="mt-auto pt-12">
              <p className="text-[22px] font-medium leading-[1.35] mb-3">
                Expert Instructors
              </p>
              <p className="text-[18px] leading-[1.35]">
                Learn from experienced professionals who bring real-world
                insights and expertise to the classroom.
              </p>
            </div>
          </div>

          {/* Modern Learning Methods */}
          <div
            className="card-grey rounded-[30px] p-8 flex flex-col"
            style={{ minHeight: "433px" }}
          >
            <img
              src="/images/b18ec09abb761a2b938ffe68723fd8d508c23212.png"
              alt=""
              className="w-[62px] h-[62px] object-contain mb-auto"
            />
            <div className="mt-auto pt-12">
              <p className="text-[22px] font-medium leading-[1.35] mb-3">
                Modern Learning Methods
              </p>
              <p className="text-[18px] leading-[1.35]">
                We employ cutting-edge teaching techniques, interactive
                sessions, and hands-on projects for effective learning.
              </p>
            </div>
          </div>

          {/* Career Success */}
          <div
            className="card-grey rounded-[30px] p-8 flex flex-col"
            style={{ minHeight: "433px" }}
          >
            <img
              src="/images/b074c4b776b6d23820f12c08ea5dfc8099b30362.png"
              alt=""
              className="w-[62px] h-[62px] object-contain mb-auto"
            />
            <div className="mt-auto pt-12">
              <p className="text-[22px] font-medium leading-[1.35] mb-3">
                Career Success
              </p>
              <p className="text-[18px] leading-[1.35]">
                We focus on building practical skills and knowledge that
                translate directly into successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COURSES OFFERED ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2]">
            Courses Offered
          </h2>
          <p className="text-lg lg:text-[20px] leading-[1.35] lg:max-w-sm text-left lg:text-right">
            Discover our comprehensive range of professional courses designed to
            elevate your career
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Course 1: Facade Design Engineering -- Image LEFT, details RIGHT */}
          <div className="card-grey rounded-[30px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
            {/* Image */}
            <div
              className="w-full lg:w-[40%] flex-shrink-0 rounded-[24px] overflow-hidden"
              style={{ minHeight: "320px" }}
            >
              <img
                src="/images/edu-sub.jpg"
                alt="Facade Design"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px" }}
              />
            </div>
            {/* Details */}
            <div className="flex flex-col gap-5 flex-1">
              <h3 className="text-[24px] lg:text-[28px] font-medium leading-[1.2]">
                Facade Design Engineering
              </h3>
              <p className="text-lg lg:text-[20px] leading-[1.35]">
                The building facade plays a crucial role in ensuring
                sustainability, energy efficiency, and comfort, serving as the
                interface between external conditions and indoor environments.
                SMEClabs offers a comprehensive Facade Design course that covers
                essential topics including design principles, construction
                systems, materials, tolerances, sustainability, and on-site
                processes.
              </p>
              {/* Meta */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-4">
                  <img
                    src={Eduimage.src}
                    alt=""
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <p className="text-[20px]">
                    <span className="font-medium">Eligibility:</span> Any
                    Degree, Diploma, Graduates
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <img
                    src="/images/8ddd8d911cc97e2ecefd462df76e4d4c91246a97.png"
                    alt=""
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <span className="text-[20px] font-medium">Mode:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      Online
                    </span>
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      Offline
                    </span>
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      OnDemand
                    </span>
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      Hybrid
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/6e0140cef7684a11193ac7db24eb03692cc11e5d.png"
                    alt=""
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <p className="text-[20px]">
                    <span className="font-medium">Duration:</span> 4 Months
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="bg-black text-white text-[20px] lg:text-[24px] font-medium capitalize rounded-[30px] px-10 py-4 hover:bg-black/80 transition-colors">
                  View Details
                </button>
                <button className="bg-black text-white text-[20px] lg:text-[24px] font-medium capitalize rounded-[30px] px-10 py-4 hover:bg-black/80 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Course 2: Advanced BIM Technology -- Details LEFT, Image RIGHT */}
          <div className="card-grey rounded-[30px] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
            {/* Details */}
            <div className="flex flex-col gap-5 flex-1">
              <h3 className="text-[24px] lg:text-[28px] font-medium leading-[1.2]">
                Advanced BIM Technology
              </h3>
              <p className="text-lg lg:text-[20px] leading-[1.35]">
                The building facade plays a crucial role in ensuring
                sustainability, energy efficiency, and comfort, serving as the
                interface between external conditions and indoor environments.
                SMEClabs offers a comprehensive Facade Design course that covers
                essential topics including design principles, construction
                systems, materials, tolerances, sustainability, and on-site
                processes.
              </p>
              {/* Meta */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/1721680ec8a6614bc471f803eb78b289b514ecec.png"
                    alt=""
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <p className="text-[20px]">
                    <span className="font-medium">Eligibility:</span> Any
                    Degree, Diploma, Graduates
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <img
                    src="/images/8ddd8d911cc97e2ecefd462df76e4d4c91246a97.png"
                    alt=""
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <span className="text-[20px] font-medium">Mode:</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      Online
                    </span>
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      Offline
                    </span>
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      OnDemand
                    </span>
                    <span className="bg-white rounded-full px-5 py-2 text-[18px]">
                      Hybrid
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/6e0140cef7684a11193ac7db24eb03692cc11e5d.png"
                    alt=""
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <p className="text-[20px]">
                    <span className="font-medium">Duration:</span> 4 Months
                  </p>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="bg-black text-white text-[20px] lg:text-[24px] font-medium capitalize rounded-[30px] px-10 py-4 hover:bg-black/80 transition-colors">
                  View Details
                </button>
                <button className="bg-black text-white text-[20px] lg:text-[24px] font-medium capitalize rounded-[30px] px-10 py-4 hover:bg-black/80 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
            {/* Image */}
            <div
              className="w-full lg:w-[40%] flex-shrink-0 rounded-[24px] overflow-hidden"
              style={{ minHeight: "320px" }}
            >
              <img
                src="/images/83e6c84811d77c1268d1c1d5fe95d55347566c5f.png"
                alt="BIM Technology"
                className="w-full h-full object-cover"
                style={{ minHeight: "320px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS & RECOGNITION ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-5">
            Certifications &amp; Recognition
          </h2>
          <p className="text-lg lg:text-[20px] leading-[1.35] max-w-3xl mx-auto">
            Upon successful completion of your course, you&apos;ll receive
            industry-recognized certifications that validate your skills and
            enhance your professional credentials.
          </p>
        </div>

        <div className="card-grey rounded-[30px] px-8 lg:px-20 py-12 lg:py-16">
          {/* 2x2 grid */}
          <div className="flex flex-wrap justify-between gap-y-10 mb-10">
            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="text-[22px] leading-none flex-shrink-0 mt-1">
                ✦
              </span>
              <div>
                <p className="text-[22px] lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Industry-Recognised Certificates
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  Receive certificates that are valued and recognized by leading
                  companies across various industries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="text-[22px] leading-none flex-shrink-0 mt-1">
                ✦
              </span>
              <div>
                <p className="text-[22px] lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Verified Credentials
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  All certifications are digitally verified and can be shared on
                  professional networks like LinkedIn.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="text-[22px] leading-none flex-shrink-0 mt-1">
                ✦
              </span>
              <div>
                <p className="text-[22px] lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Career Advancement
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  Boost your career prospects with credentials that demonstrate
                  your expertise and commitment to professional growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 w-full sm:w-[45%]">
              <span className="text-[22px] leading-none flex-shrink-0 mt-1">
                ✦
              </span>
              <div>
                <p className="text-[22px] lg:text-[25px] font-medium leading-[1.2] mb-4">
                  Global Recognition
                </p>
                <p className="text-base lg:text-[20px] leading-[1.35]">
                  Our certifications are accepted worldwide, opening doors to
                  international career opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* What You'll Receive -- white card */}
          <div className="bg-white rounded-[33px] px-8 lg:px-12 py-8 lg:py-10">
            <p className="text-xl lg:text-[25px] font-medium leading-[1.2] mb-6">
              What You&apos;ll Receive
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              <p className="text-base lg:text-[18px] leading-[1.35] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                Official course completion certificate
              </p>
              <p className="text-base lg:text-[18px] leading-[1.35] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                Digital badge for professional profiles
              </p>
              <p className="text-base lg:text-[18px] leading-[1.35] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                Access to alumni network and resources
              </p>
              <p className="text-base lg:text-[18px] leading-[1.35] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                Career support and job placement assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLASSROOM FACILITIES ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-5">
            Classroom Facilities
          </h2>
          <p className="text-lg lg:text-[20px] leading-[1.35] max-w-2xl mx-auto">
            Experience world-class learning infrastructure designed to foster
            innovation, collaboration, and practical skill development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-3">
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ height: "448px" }}
            >
              <img
                src="/images/64529bb58258cc694b1f96a9d9f9e55d3e030e44.png"
                alt="Modern Classrooms"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[18px] lg:text-[20px] font-medium text-center leading-[1.35]">
              Modern Classrooms
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ height: "448px" }}
            >
              <img
                src="/images/fb4ef2b919d8bb8c205a47f5252483b56b6ce6e1.png"
                alt="Advanced Training Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[18px] lg:text-[20px] font-medium text-center leading-[1.35]">
              Advanced Training Equipment
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ height: "448px" }}
            >
              <img
                src="/images/45c60a476b7e05d569576ad9a14d5730bd5707ab.png"
                alt="Practical Lab Sessions"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[18px] lg:text-[20px] font-medium text-center leading-[1.35]">
              Practical Lab Sessions
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ height: "448px" }}
            >
              <img
                src="/images/1d73410bc06b9b8166405e5e0b27ddc97270d4c9.png"
                alt="Interactive Learning Environment"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[18px] lg:text-[20px] font-medium text-center leading-[1.35]">
              Interactive Learning Environment
            </p>
          </div>
        </div>
      </section>

      {/* ═══ COURSE REGISTRATION ═══ */}
      <section className="px-8 lg:px-16 pb-16 lg:pb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-[40px] font-normal leading-[1.2] mb-5">
            Course Registration
          </h2>
          <p className="text-lg lg:text-[20px] leading-[1.35] max-w-md mx-auto">
            Take the first step towards your professional growth. Fill out the
            form below to register.
          </p>
        </div>

        <div className="card-grey rounded-[30px] px-8 lg:px-20 py-12 lg:py-16">
          <div className="mb-8">
            <p className="text-[20px] lg:text-[25px] font-medium leading-[1.2] mb-2">
              Register for a Course
            </p>
            <p className="text-lg lg:text-[20px] leading-[1.35]">
              Please provide your details and we&apos;ll get back to you within
              24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-6">
            {/* Row 1: Full Name + Email */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[20px] capitalize">Full Name*</label>
                <div className="bg-white rounded-[33px] px-6 py-5">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full bg-transparent text-[18px] text-black/60 placeholder-black/40"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[20px] capitalize">
                  Email Address*
                </label>
                <div className="bg-white rounded-[33px] px-6 py-5">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-[18px] text-black/60 placeholder-black/40"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone + Course Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[20px] capitalize">Phone Number*</label>
                <div className="bg-white rounded-[33px] px-6 py-5">
                  <input
                    type="tel"
                    placeholder="Enter full phone number"
                    className="w-full bg-transparent text-[18px] text-black/60 placeholder-black/40"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[20px] capitalize">
                  Course Selection*
                </label>
                <div className="bg-white rounded-[33px] px-6 py-5 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Select a course"
                    className="w-full bg-transparent text-[18px] text-black/60 placeholder-black/40"
                  />
                  <svg
                    className="flex-shrink-0 ml-2"
                    width="19"
                    height="10"
                    viewBox="0 0 19 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L9.5 9L18 1"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3: Mode of Learning + Message */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[20px] capitalize">
                  Mode of Learning*
                </label>
                <div className="bg-white rounded-[33px] px-6 py-5 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Select learning mode"
                    className="w-full bg-transparent text-[18px] text-black/60 placeholder-black/40"
                  />
                  <svg
                    className="flex-shrink-0 ml-2"
                    width="19"
                    height="10"
                    viewBox="0 0 19 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L9.5 9L18 1"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[20px] capitalize">
                  Message (Optional)
                </label>
                <div className="bg-white rounded-[33px] px-6 py-5">
                  <input
                    type="text"
                    placeholder="Tell us about your goals and interest"
                    className="w-full bg-transparent text-[18px] text-black/60 placeholder-black/40"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button className="w-full bg-black text-white text-[20px] lg:text-[24px] font-medium capitalize rounded-[30px] py-5 hover:bg-black/80 transition-colors">
                Register for the Course
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT SECTION (removed) ═══ */}
    </div>
  );
}
