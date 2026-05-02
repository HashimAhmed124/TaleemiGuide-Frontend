import React from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  MapPin,
  GraduationCap,
  SlidersHorizontal,
  ArrowRight,
  Database,
  Compass,
  BookAIcon,
  BookIcon,
  MessageCircleIcon,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import { SiFuturelearn } from "react-icons/si";

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
          src="/bg-7.jpeg"
          alt="Class 12 Guidance"
          className="w-full h-full object-center rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8 text-center">
        <span
          className="inline-block mb-4 px-4 py-1 
        text-sm font-semibold 
        tracking-wide text-orange-600 bg-orange-100
         rounded-full text-start"
        >
          Search. Compare. Decide — Every BS, MS & PhD Program in One Place.
        </span>

        <h1
          className="text-5xl md:text-5xl font-extrabold 
        leading-tight mb-6"
          style={{ color: COLORS.primaryDark }}
        >
          University Program Finder
        </h1>

        <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
          Welcome to Pakistan’s first comprehensive University Program Finder,
          powered by TaleemiGuide. Now, you can explore every BS, MS/MPhil, and
          PhD program offered across all universities — verified, updated,
          organized, and completely free. This national-level database
          consolidates all degree programs under one platform, enabling
          students, parents, counselors, and professionals to make informed
          academic decisions without confusion, guesswork, or unreliable
          sources. Whether you’re a Class 12 student searching for BS options, a
          graduate planning for MS/MPhil, or a professional considering doctoral
          studies — TaleemiGuide helps you find the right program in no time.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* <button
            onClick={onOpenRoadmap}
            className="px-6 py-2 rounded-xl bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 hover:scale-105 transition"
          >
            View Roadmap
          </button> */}

          {/* <NavLink
            to="/roadmap/class-12"
            className="px-6 py-2 rounded-xl border border-[#11253e] text-[#11253e] font-semibold hover:bg-[#11253e] hover:text-white transition"
          >
            Explore Options
          </NavLink> */}
        </div>
      </div>
    </section>
  );
};
// --------------------------------------------------------------------
// 2) WHY THIS MATTERS
// --------------------------------------------------------------------
const WhyThisMattersSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          Why This Matters
        </h2>
        <div
          className="w-66 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      <div
        className="rounded-2xl p-5 sm:p-6"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Every year, thousands of students struggle during admissions because
          of:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>incomplete information</li>
          <li>outdated websites</li>
          <li>unreliable recommendations</li>
          <li>no centralized database</li>
          <li>scattered and inconsistent program listings</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed font-semibold"
          style={{ color: COLORS.primaryDark }}
        >
          TaleemiGuide offers accurate, structured, searchable academic data.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) Pakistan’s Largest Verified Academic Database
// --------------------------------------------------------------------
const WhatYouCanDoSection = () => (
  <section className="py-14 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          Pakistan’s Largest Verified Academic Database
        </h2>
        <div
          className="w-195 h-1 rounded-full mb-5"
          style={{ backgroundColor: COLORS.secondary }}
        />

        <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
          Easily discover and compare academic programs using powerful search
          and filtering options.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl"
        style={baseCardStyle}
      >
        {/* Intro */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-none"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            <Search size={22} style={{ color: COLORS.secondary }} />
          </div>
          <p
            className="text-base sm:text-lg font-semibold"
            style={{ color: COLORS.primaryDark }}
          >
            Search, Filter & Explore Programs by:
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Item */}
          {[
            {
              icon: <GraduationCap size={22} />,
              title: "Degree Level",
              desc: "BS | MS/MPhil | PhD",
            },
            {
              icon: <Database size={22} />,
              title: "University Name",
              desc: "All Public & Private Universities",
            },
            {
              icon: <Compass size={22} />,
              title: "Field of Study / Discipline",
              desc: "Arts, Engineering, Health, IT & Emerging Fields",
            },
            {
              icon: <MapPin size={22} />,
              title: "Location",
              desc: "Province, City, or Region",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-none"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  border: `1px solid ${COLORS.borderSoft}`,
                }}
              >
                {React.cloneElement(item.icon, {
                  style: { color: COLORS.secondary },
                })}
              </div>

              <div>
                <p
                  className="text-sm sm:text-base font-semibold mb-1"
                  style={{ color: COLORS.primaryDark }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: COLORS.textGray }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) SEAMLESS INTEGRATION SECTION
// --------------------------------------------------------------------
const IntegrationSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          Seamless Integration With Other TaleemiGuide Services
        </h2>
        <div
          className="w-210 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      {/* TIMELINE STYLE LIST */}
      <div className="space-y-6 mb-8">
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          The Program Finder works perfectly with our broader guidance
          ecosystem:
        </p>

        {/* Item 1 – Career Assessment Test */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.secondary,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <SiFuturelearn size={28} />
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Career Assessment Test:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Find fields that suit your personality, then use Program Finder to
              explore universities offering them.
            </p>
          </div>
        </div>

        {/* Item 2 – Class 12 Guidance */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.secondary,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <BookIcon size={28} />
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Class 12 Guidance:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Plan admission timelines, understand specialization options, and
              compare institutions.
            </p>
          </div>
        </div>

        {/* Item 3 – University Graduates Guidance */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.secondary,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <GraduationCap size={28} />
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              University Graduates Guidance:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Learn about eligibility, credit transfer, degree equivalence, or
              postgraduate pathways.
            </p>
          </div>
        </div>

        {/* Item 4 – Book Online Session */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.secondary,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <MessageCircleIcon size={28} />
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Book Online Session:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Discuss your shortlisted programs with an expert for personalized
              advice.
            </p>
          </div>
        </div>
      </div>

      {/* CTA: Start Exploring Now */}
      <div className="space-y-3">
        <p
          className="text-xs sm:text-sm font-semibold uppercase tracking-wide"
          style={{ color: COLORS.secondary }}
        >
          Start Exploring Now!
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          Find your perfect degree from Pakistan’s largest verified database of
          university programs.
        </p>

        <NavLink
          // TODO: need to update it to actual page when completed
          to="/spreadsheet"
          className="inline-flex items-center justify-center mt-3 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Launch University Program Finder
          <ArrowRight size={18} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) NEXT STEP IN THE JOURNEY
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
          boxShadow: "0 20px 45px rgba(15,23,42,0.12)",
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
            Once students enter university, a new set of challenges begins — and
            TaleemiGuide continues supporting them through our University
            Graduates guidance service
          </p>



          <NavLink
            to="/service/university-graduates-guidance"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow: "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Go to University Graduates Guidance
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 6) MAIN COMPONENT
// --------------------------------------------------------------------
export default function UniversityProgramFinder() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyThisMattersSection />
      <WhatYouCanDoSection />
      <IntegrationSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
