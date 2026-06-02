import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import ServiceLayout from "../../components/ServiceLayout";
import { ArrowRight } from "lucide-react";

const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

// 1) HERO SECTION ----------------------------------------------------
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">

    {/* Full width small-height image */}
    <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
      <img
        src="/bg-11.jpg"
        alt="Class 12 Guidance"
        className="w-full h-full object-center rounded-3xl"
      />
    </div>

    {/* Content */}
    <div className="max-w-5xl mx-auto px-6 py-8 text-center">

      <span className="inline-block mb-4 px-4 py-1 
        text-sm font-semibold 
        tracking-wide text-orange-600 bg-orange-100
         rounded-full text-start">
        Personalized One-on-One Guidance for Students, Parents & Professionals.
      </span>

      <h1 className="text-5xl md:text-5xl font-extrabold 
        leading-tight mb-6" style={{ color: COLORS.primaryDark }}>
        Book Online Session
      </h1>

      <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
        Whether you’re a student choosing a specialization, a parent seeking
        clarity, a college/university graduate facing academic challenges,
        or a working professional navigating career transitions, our expert
        counselors are here to provide clear, precise, and personalized
        guidance. An online session gives you the chance to discuss your
        concerns in detail and receive expert-led strategies tailored
        specifically to your goals.
      </p>

      {/* <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={onOpenRoadmap}
          className="px-6 py-2 rounded-xl bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 hover:scale-105 transition"
        >
          View Roadmap
        </button>

        <NavLink
          to="/roadmap/class-12"
          className="px-6 py-2 rounded-xl border border-[#11253e] text-[#11253e] font-semibold hover:bg-[#11253e] hover:text-white transition"
        >
          Explore Options
        </NavLink>
      </div> */}

    </div>
  </section>
);
//---------------------------------------------------------------------
// 2) WHY CHOOSE TALEEMIGUIDE ONLINE SESSIONS -------------------------
//---------------------------------------------------------------------
const WhyChooseSection = () => (
  <section className="py-14 border-b border-gray-200 bg-white"
    style={{
      background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
    }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-10">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          Why Choose TaleemiGuide Online Sessions?
        </h2>
        <div
          className="w-168 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      {/* Cards */}
      <div className="space-y-6 sm:space-y-8">

        {[
          {
            no: "01",
            title: "Expert Guidance",
            content: (
              <>
                <p className="mb-2">Our team includes highly experienced:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>Educationists</li>
                  <li>Academicians</li>
                  <li>Industry professionals</li>
                  <li>Domain specialists</li>
                  <li>Psychologists</li>
                  <li>Certified counselors</li>
                </ul>
                <p>
                  Customized to your concerns, they provide deep insights,
                  accurate information, and practical strategies for academic
                  and professional success.
                </p>
              </>
            ),
          },
          {
            no: "02",
            title: "Total Convenience",
            content: (
              <p>
                No travel, no waiting, no scheduling stress. Book a session at
                a time that suits you — from the comfort of your home, office,
                or anywhere.
              </p>
            ),
          },
          {
            no: "03",
            title: "Personalized Support",
            content: (
              <>
                <p className="mb-2">
                  Every student and professional has unique circumstances.
                  We offer guidance tailored to your:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Goals</li>
                  <li>Strengths</li>
                  <li>Academic background</li>
                  <li>Career aspirations</li>
                  <li>Personal challenges</li>
                </ul>
              </>
            ),
          },
          {
            no: "04",
            title: "Confidentiality Guaranteed",
            content: (
              <p>
                Your privacy is our top priority. All sessions are conducted
                through secure and encrypted channels to ensure that your
                information and discussions remain strictly confidential.
              </p>
            ),
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-5 p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            {/* Number badge */}
            <div className="flex-shrink-0">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: COLORS.secondary,
                  border: `1px solid ${COLORS.borderSoft}`,
                  color: COLORS.primaryDark,
                }}
              >
                {item.no}
              </div>
            </div>

            {/* Content */}
            <div>
              <p
                className="text-sm sm:text-base font-semibold mb-2"
                style={{ color: COLORS.primaryDark }}
              >
                {item.title}
              </p>

              <div
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

);

//---------------------------------------------------------------------
// 3) WHAT TO EXPECT IN THE SESSION -----------------------------------
//---------------------------------------------------------------------
const WhatToExpectSection = () => (
  <section
    className="py-14 border-b border-gray-200"
    style={{
      background:
        "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #FFFFFF 100%)",
    }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          What to Expect in the Session
        </h2>
        <div
          className="w-112 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      {/* Card */}
      <div
        className="relative rounded-3xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-xl"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        {/* Accent bar */}
        <span
          className="absolute left-0 top-3 h-107 w-1 rounded-l-3xl"
          style={{ backgroundColor: COLORS.secondary }}
        />

        <p
          className="text-sm sm:text-base leading-relaxed mb-5"
          style={{ color: COLORS.textGray }}
        >
          During your session, you will have the opportunity to discuss:
        </p>

        {/* List */}
        <ul className="space-y-3 mb-5">
          {[
            "Academic choices (at your desired level of study)",
            "Career direction and planning",
            "University admission concerns",
            "Program and specialization selection",
            "Workplace challenges and transitions",
            "Stress, motivation, confidence, or work-life balance",
            "Any academic or career-related issue",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  color: COLORS.primary,
                  border: `1px solid ${COLORS.borderSoft}`,
                }}
              >
                ✓
              </span>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed font-medium"
          style={{ color: COLORS.primaryDark }}
        >
          Our counselors listen attentively, analyze your situation, and provide
          realistic, actionable strategies that move you confidently toward
          your goals.
        </p>
      </div>
    </div>
  </section>

);

//---------------------------------------------------------------------
// 4) HOW TO BOOK YOUR SESSION ----------------------------------------
//---------------------------------------------------------------------
const HowToBookSection = () => (
  <section className="py-12 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          How to Book Your Session
        </h2>
        <div
          className="w-97 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        /></div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Step 1 */}
        <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            01
          </div>
          <p className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
            Click <strong>“Book an Appointment”</strong> on the Home Page.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            02
          </div>
          <p className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
            Select your preferred date and time from available slots.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            03
          </div>
          <p className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
            Fill out the booking form and attach any documents for review.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex gap-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
            04
          </div>
          <p className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
            Receive a confirmation email with a secure session link.
          </p>
        </div>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 5) INVEST IN YOUR FUTURE -------------------------------------------
//---------------------------------------------------------------------
const InvestInYourFutureSection = () => {
  return (
    <>
      <section className="py-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-1">
            <h2
              className="text-2xl sm:text-3xl font-extrabold "
              style={{ color: COLORS.primaryDark }}
            >
              Invest in Your Future
            </h2>
            <div
              className="w-77 h-1 rounded-full"
              style={{ backgroundColor: COLORS.secondary }}
            />
          </div>

          <h2
            className="text-xl sm:text-2xl font-bold mb-3"
            style={{ color: COLORS.primaryDark }}
          >
            Most Student Book after Using Assessmengt
          </h2>

          <p
            className="text-sm sm:text-base leading-relaxed mb-6 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            A single conversation with the right expert can change your direction —
            and your future.
            <br />
            Take the next step toward clarity, confidence, and achievement.
          </p>

          <button
            type="button"
            className="w-full sm:w-auto text-left sm:text-center rounded-3xl px-6 py-5 sm:px-8 sm:py-6 font-semibold text-sm sm:text-base transition-transform duration-200 hover:scale-[1.02]"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(249,115,22,0.12))",
              color: COLORS.primaryDark,
              boxShadow: "0 14px 35px rgba(15,23,42,0.18)",
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            Book your online session today and receive personalized guidance from
            the experts at TaleemiGuide.
          </button>
        </div>
      </section>

      {/* FORM (MOVED + INTEGRATED BELOW SECTION) */}
      <TaleemiAdviceForm selectedCategory="" />
    </>
  );
};

const TaleemiAdviceForm = ({ selectedCategory }) => {
  const [category, setCategory] = useState(selectedCategory || "");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const openDatePicker = () => {
    const el = document.getElementById("sessionDate");
    if (el) el.showPicker?.() || el.focus();
  };

  return (
    <section
      id="form"
      className="relative w-full py-16 px-6"
      style={{
        backgroundImage: "url(/image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#0B1C3C]/80" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}
        <div
          className="hidden md:flex items-end p-10 relative"
          style={{
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />

          <div className="relative z-10 text-white">
            <span className="px-3 py-1 text-xs rounded-full bg-orange-500/20 border border-orange-500/30">
              TaleemiGuide • Session Booking
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              Book an{" "}
              <span style={{ color: COLORS.secondary }}>Online Session</span>
            </h2>

            <p className="mt-3 text-sm text-slate-200">
              Mark the Calender and Get the Confirmataion.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 md:p-12">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: COLORS.primary }}
          >
            Book Your Online Session
          </h3>

          <form className="space-y-5">

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Name", "Email", "Phone"].map((item) => (
                <input
                  key={item}
                  type={
                    item === "Email"
                      ? "email"
                      : item === "Phone"
                      ? "tel"
                      : "text"
                  }
                  placeholder={item}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                />
              ))}
            </div>

            {/* Category */}
            <select
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="class_10">Class 10</option>
              <option value="class_12">Class 12</option>
              <option value="university">University</option>
              <option value="working_pro">Working Professional</option>
            </select>

            {/* Query */}
            <textarea
              rows="4"
              placeholder="Describe your concern..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
            />

            {/* DATE PICKER (FIXED) */}
            <div className="flex items-center gap-4">
              <label
                onClick={openDatePicker}
                className="px-5 py-2 rounded-md cursor-pointer font-medium"
                style={{ background: COLORS.secondary, color: "white" }}
              >
                Select Date
              </label>

              <span className="text-sm text-gray-500">
                {selectedDate || "No date selected"}
              </span>

              <input
                id="sessionDate"
                type="date"
                className="absolute opacity-0 pointer-events-none"
                onChange={handleDateChange}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white"
              style={{ background: COLORS.primary }}
            >
              Submit
            </button>

            <p className="text-xs text-gray-400">
              By submitting, you agree to be contacted by TaleemiGuide.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
//---------------------------------------------------------------------
// 6) NEXT STEP IN THE JOURNEY ----------------------------------------
//---------------------------------------------------------------------

const NextStepSection = () => (
  <section className="py-10 md:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="relative rounded-3xl p-8 sm:p-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 60%, #FFFFFF 100%)",
          border: "1px solid rgba(30,58,138,0.08)",
          boxShadow:
            "0 20px 45px rgba(15,23,42,0.12)",
        }}
      >
        {/* Accent Bar */}
        <span
          className="absolute left-0 top-0 h-full w-1"
          style={{ backgroundColor: COLORS.primary }}
        />

        {/* Soft Highlight */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-72 h-72 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254, 110, 7, 0.25), transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl">
          <h2
            className="text-3xl sm:text-2xl font-extrabold tracking-tight mb-4"
            style={{ color: COLORS.primaryDark }}
          >
            Next Step in Your Academic Journey
          </h2>

          <p
            className="text-base sm:text-sm leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            After your session, stay connected with new scholarships,
            admissions, opportunities, and career updates through our section:
            Taleemi Announcements.
          </p>



          <NavLink
            to="/service/announcement"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow:
                "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Go to Taleemi Announcements
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>

);
//---------------------------------------------------------------------
// MAIN PAGE ----------------------------------------------------------
//---------------------------------------------------------------------
export default function BookOnlineSession() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyChooseSection />
      <WhatToExpectSection />
      <HowToBookSection />
      <InvestInYourFutureSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
