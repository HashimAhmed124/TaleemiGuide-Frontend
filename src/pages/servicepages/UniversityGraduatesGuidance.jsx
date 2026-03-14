import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { BookOpenCheck, Users, HeartHandshake, ArrowRight } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

// --- BRAND COLORS ----------------------------------------------------
const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  grayText: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

const baseCardStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E0E7FF",
  boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
};

// --------------------------------------------------------------------
// 1) HERO SECTION
// --------------------------------------------------------------------
const HeroSection = ({ onOpenRoadmap }) => {

  return (

    <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">

      {/* Full width small-height image */}
      <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src="/bg-8.jpeg"
          alt="Class 12 Guidance"
          className="w-full h-full object-center rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-6 text-center">

        <span className="inline-block mb-4 px-4 py-1 
        text-sm font-semibold 
        tracking-wide text-orange-600 bg-orange-100
         rounded-full text-start">
          Your Partner for Every Academic Challenge
        </span>

        <h1 className="text-4xl md:text-4xl font-extrabold 
        leading-tight mb-6" style={{ color: COLORS.primaryDark }}>
          University Graduate Guidance
        </h1>

        <p className="text-xm text-justify text-gray-600 max-w-3xl mx-auto mb-2">
          The journey through college and university is transformative —
          filled with opportunities, responsibilities, and challenges.
          Whether you are pursuing an Associate Degree, BS, MS/MPhil, or PhD,
          academic pressure, course requirements, administrative hurdles, and
          personal challenges often overlap. That’s exactly where
          TaleemiGuide helps — enabling students to move beyond confusion and
          excel in their higher education path.
          Our team quickly understands your case, identifies the exact issue,
          and provides the precise guidance you need to move forward with
          clarity and confidence.
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
}
// --------------------------------------------------------------------
// 2) COMMON CHALLENGES SECTION
// --------------------------------------------------------------------
const CommonChallengesSection = () => (
  <section className="py-14 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-2xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          From academic decisions to research hurdles, students often face
          complex policies and unclear pathways.
        </h2>
        <div
          className="w-249 h-1 rounded-full mb-6"
          style={{ backgroundColor: COLORS.secondary }}
        /> 
        {/* underline div */}
        
      </div>

      {/* Main Card */}
      <div
        className="rounded-3xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-xl"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-6"
          style={{ color: COLORS.textGray }}
        >
          University students encounter a wide range of academic,
          administrative, and research-related issues, including:
        </p>

        {/* Challenges Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">

          {/* Academic & Administrative */}
          <div
            className="p-5 rounded-2xl"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            <p
              className="text-sm sm:text-base font-semibold mb-3"
              style={{ color: COLORS.primaryDark }}
            >
              Academic & Administrative Challenges
            </p>

            <ul className="space-y-2 text-sm sm:text-base" style={{ color: COLORS.textGray }}>
              {[
                "Course and Major Selection",
                "Switching between Programs",
                "Migration & Transfer Issues",
                "Maximum Study Period Limitations",
                "Degree Completion Requirements",
                "Lateral Entry into BS Programs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Evaluation */}
          <div
            className="p-5 rounded-2xl"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            <p
              className="text-sm sm:text-base font-semibold mb-3"
              style={{ color: COLORS.primaryDark }}
            >
              Research, Evaluation & Policy Issues
            </p>

            <ul className="space-y-2 text-sm sm:text-base" style={{ color: COLORS.textGray }}>
              {[
                "Certification Programs in Lieu of Degrees",
                "CGPA vs Division Confusion",
                "Improvement & Repetition Policies",
                "Research Supervision Matters",
                "Research Publications",
                "Thesis / Project-Related Issues",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Message */}
        {/* <div
          className="p-4 rounded-xl"
          style={{
            backgroundColor: "#FFF7ED",
            border: "1px solid #FED7AA",
          }}
        >
          <p
            className="text-sm sm:text-base leading-relaxed font-medium"
            style={{ color: COLORS.primaryDark }}
          >
            Without proper guidance, students often waste valuable time, miss
            opportunities, and face unnecessary academic stress.
            <br />
            <span className="font-semibold text-orange-600">
              TaleemiGuide provides a One-Window Guidance solution for all such
              challenges.
            </span>
          </p>
        </div> */}
      </div>
    </div>
  </section>
);


// --------------------------------------------------------------------
// 3) HOW TALEEMIGUIDE SUPPORTS
// --------------------------------------------------------------------
const HowSupportsSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          How TaleemiGuide Supports
        </h2>
        <div
          className="w-117 h-1 rounded-full mb-6"
          style={{ backgroundColor: COLORS.secondary }}
        />
        <p
          className="text-sm sm:text-base leading-relaxed max-w-5xl"
          style={{ color: COLORS.textGray }}
        >
          Our approach is comprehensive and student-centered, focusing not only
          on academic solutions but also on personal and emotional support.
        </p>
      </div>

      {/* 3-STEP VERTICAL FLOW */}
      <div className="space-y-6">
        {/* Academic Advisement */}
        <div
          className="flex gap-4 items-start rounded-2xl p-5 sm:p-6"
          style={baseCardStyle}
        >
          <div className="flex flex-col items-center flex-none pt-4">
            <div
              className="w-18 h-18 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <BookOpenCheck size={38} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Academic Advisement
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              We offer expert academic guidance to all undergraduate and
              graduate students. TaleemiGuide works like 1122 for academic
              emergencies — accessible, fast, and reliable.
            </p>
          </div>
        </div>

        {/* Career Counseling */}
        <div
          className="flex gap-4 items-start rounded-2xl p-5 sm:p-6"
          style={baseCardStyle}
        >
          <div className="flex flex-col items-center flex-none pt-4">
            <div
              className="w-18 h-18 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Users size={38} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Career Counseling
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              We guide students in exploring career options, understanding the
              pros and cons of various specializations, identifying suitable
              MS/MPhil or PhD pathways, preparing for internships and job
              placements, and strengthening their interview readiness — all in
              one place.
            </p>
          </div>
        </div>

        {/* EQ Support */}
        <div
          className="flex gap-4 items-start rounded-2xl p-5 sm:p-6"
          style={baseCardStyle}
        >
          <div className="flex flex-col items-center flex-none pt-1">
            <div
              className="w-18 h-18 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <HeartHandshake size={38} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Emotional Intelligence (EQ) Support
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              A strong EQ is vital for success in university and professional
              life, and our counselors help students build self-awareness,
              manage stress, strengthen motivation and resilience, maintain
              work-life balance, and develop confident problem-solving skills —
              with a safe space to discuss concerns and receive practical
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) OUR EXPERT TEAM
// --------------------------------------------------------------------
const ExpertTeamSection = () => (
  <section className="py-14 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          Our Expert Team
        </h2>
        <div
          className="w-63 h-1 rounded-full mb-6"
          style={{ backgroundColor: COLORS.secondary }}
        />

        <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
          A multidisciplinary team dedicated to guiding students with clarity,
          accuracy, and confidence.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="rounded-3xl p-6 sm:p-8 transition-shadow duration-300 hover:shadow-xl"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-6"
          style={{ color: COLORS.textGray }}
        >
          TaleemiGuide’s team includes:
        </p>

        {/* Expert Roles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            "Educationists",
            "Academicians",
            "Industry Professionals",
            "Career Advisors",
            "Psychologists",
            "Certified Counselors",
          ].map((role, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-none font-bold"
                style={{
                  backgroundColor: "#FFF7ED",
                  color: COLORS.secondary,
                  border: "1px solid #FED7AA",
                }}
              >
                ✓
              </div>
              <p
                className="text-sm sm:text-base font-medium"
                style={{ color: COLORS.primaryDark }}
              >
                {role}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Trust Message */}
        {/* <div
          className="p-4 rounded-xl"
          style={{
            backgroundColor: "#EFF6FF",
            border: "1px solid #DBEAFE",
          }}
        >
          <p
            className="text-sm sm:text-base leading-relaxed font-semibold"
            style={{ color: COLORS.primaryDark }}
          >
            Their combined expertise ensures every student receives
            <span className="text-orange-600"> accurate</span>,
            <span className="text-orange-600"> practical</span>, and
            <span className="text-orange-600"> reliable</span> academic and
            career guidance.
          </p>
        </div> */}
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) TALEEMI ADVICE FORM SECTION (GIVEN CODE, JUST WRAPPED)
// --------------------------------------------------------------------
const TaleemiAdviceFormSection = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 border-a border-gray"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Title & Description Header */}
          <div className="text-center space-y-3">

            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
              style={{ color: COLORS.primaryDark }}>
              Need Quick Help? (Seek Taleemi Advice)
            </h2>

            <p
              className="text-center max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              <span
                className="font-semibold"
                style={{ color: COLORS.primary }}
              >
                Taleemi Advice
              </span>
              {" "}
              is your academic emergency service. Whether you're choosing
              subjects, facing confusion, stuck in academic challenges, or
              planning a career transition — get expert guidance in time.
            </p>
            <NavLink
              to="/service"
              className="mt-auto px-4 py-2 rounded-lg text-sm font-medium text-center"
              style={{ backgroundColor: COLORS.secondary, color: "white" }}
            >

              Get help

            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 6) ONLINE SESSION SECTION
// --------------------------------------------------------------------
const OnlineSessionSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-3xl p-6 sm:p-7"
        style={baseCardStyle}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-4"
          style={{ color: COLORS.textGray }}
        >
          Most academic issues are resolved through the portal. However, if you
          want deeper discussion or personalized conversation, you may book an
          online counseling session with our experts.
        </p>

        <NavLink
          to="/service/online-session"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Book Online Session
          <ArrowRight size={18} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 7) NEXT STEP IN THE JOURNEY
// --------------------------------------------------------------------
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
            As students graduate and enter the professional world, new
            challenges emerge — and TaleemiGuide continues helping through our
            next service: for working professionals.
          </p>

          

          <NavLink
            to="/service/working-professional-guidance"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow:
                "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Go to Working Professionals Guidance
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>

);

// --------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------
export default function UniversityGraduatesGuidance() {
  const adviceSectionRef = useRef(null);

  return (
    <ServiceLayout>
      <HeroSection />
      <CommonChallengesSection />
      <HowSupportsSection />
      {/* <ExpertTeamSection /> */}
      {/* <TaleemiAdviceFormSection sectionRef={adviceSectionRef} /> */}
      <OnlineSessionSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
