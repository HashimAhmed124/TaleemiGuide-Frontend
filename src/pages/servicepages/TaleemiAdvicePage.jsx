import React from "react";
import { NavLink } from "react-router-dom";
import {
  Zap,

  Users,
  CheckCircle2,
  MonitorSmartphone,
  ArrowRight,
} from "lucide-react";

import ServiceLayout from "../../components/ServiceLayout";
import TaleemiAdviseForm from "../../components/ContactUs";

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


// --------------------------------------------------------------------
// 1) HERO SECTION
// --------------------------------------------------------------------
const HeroSection = ({ onOpenRoadmap }) => {
  return (

    <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">

      {/* Full width small-height image */}
      <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src="/bg-10.jpg"
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
          Fast-Track Help for Academic & Career Challenges — Your 1122 for Education.
        </span>

        <h1 className="text-5xl md:text-5xl font-extrabold 
          leading-tight mb-6" style={{ color: COLORS.primaryDark }}>
          Taleemi Advice
        </h1>

        <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
          In the fast-moving world of education and careers, timely guidance
          can make all the difference. Whether you are a student facing an
          urgent academic issue or a professional seeking immediate clarity,
          Taleemi Advice provides fast, accurate, and personalized solutions —
          exactly when you need them. As Pakistan’s first tech-based
          educational solution provider, TaleemiGuide offers quick-response
          support for all academic and professional matters, ensuring clarity,
          relief, and direction within hours.
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
// 2) WHAT MAKES TALEEMI ADVICE UNIQUE?
// --------------------------------------------------------------------
const WhatMakesUniqueSection = () => (
  <section className="py-14 border-b border-gray-200"
    style={{
      background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #FFFFFF 100%)",
      border: "1px solid rgba(0,0,0,0.04)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    }} >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Heading */}
      <div className="mb-10">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          What Makes Taleemi Advice Unique?
        </h2>
        <div
          className="w-137 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      {/* Qualities List */}
      <div className="space-y-10">

        {/* Item */}
        {[
          {
            icon: <Zap size={20} style={{ color: COLORS.secondary }} />,
            title: "Immediate Assistance — Quick Response Like 1122",
            content: (
              <>
                <p>
                  Some decisions can’t wait. Taleemi Advice works like <strong>1122 in the academic world</strong>, giving you urgent access to expert advice, reliable information, and clear answers — fast.
                </p>
                <p className="mt-2">
                  Whenever you face uncertainty, confusion, or a time-sensitive issue, we are here with instant, expert-backed support.
                </p>
              </>
            ),
          },
          {
            icon: <Users size={20} style={{ color: COLORS.secondary }} />,
            title: "Comprehensive Expertise — For All Levels",
            content: (
              <>
                <p className="mb-2">Our advisory team includes:</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>Educationists</li>
                  <li>Academicians</li>
                  <li>Industry experts</li>
                  <li>Career coaches</li>
                  <li>Psychologists</li>
                  <li>Certified counselors</li>
                </ul>
                <p>
                  We cover academic and professional issues from <strong>Matric to Post-Graduation</strong> and for <strong>working professionals</strong>, across every field and specialization.
                </p>
              </>
            ),
          },
          {
            icon: <CheckCircle2 size={20} style={{ color: COLORS.secondary }} />,
            title: "Personalized, Practical Solutions",
            content: (
              <p>
                Every individual and situation is different — so our guidance is tailored to your specific needs, ensuring advice that is accurate, relevant, and immediately actionable.
              </p>
            ),
          },
          {
            icon: <MonitorSmartphone size={20} style={{ color: COLORS.secondary }} />,
            title: "Easy & User-Friendly Platform",
            content: (
              <>
                <p>
                  The TaleemiGuide interface is designed for simplicity.
                </p>
                <p className="mt-2">
                  Connect with experts, upload documents, and receive guidance quickly and conveniently — anytime, anywhere.
                </p>
              </>
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex gap-5 p-5 rounded-3xl transition-all duration-300 hover:shadow-md"
            style={{
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            {/* Icon */}
            <div className="mt-1">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  border: `1px solid ${COLORS.borderSoft}`,
                }}
              >
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
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

// --------------------------------------------------------------------
// 3) TALEEMI ADVICE FORM (REUSABLE COMPONENT)
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
// 4) NEXT STEP IN THE JOURNEY
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
            If you want personalized guidance or need to discuss your case in
            detail, your next step is to Book an Online Session with our expert
            counselors.
          </p>

          <NavLink
            to="/service/online-session"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow:
                "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Book Online Session
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
export default function TaleemiAdvice() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhatMakesUniqueSection />
      <TaleemiAdviceFormSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
