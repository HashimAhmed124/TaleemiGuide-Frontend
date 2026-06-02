import React from "react";
import { NavLink } from "react-router-dom";
import { Layers, Target, Compass, ArrowRight } from "lucide-react";
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

// --------------------------------------------------------------------
// 1) HERO SECTION
// --------------------------------------------------------------------

const HeroSection = ({ onOpenRoadmap }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">
      {/* Full width small-height image */}
      <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src="/bg-3.jpg"
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
          Understand Where Your Field Falls — Clearly and Accurately.
        </span>

        <h1
          className="text-4xl md:text-4xl font-extrabold 
        leading-tight mb-6"
          style={{ color: COLORS.primaryDark }}
        >
          Understand Every Field Before Choosing Your Direction
        </h1>

        <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
          Choosing the right academic field or career is difficult when students
          know only a handful of traditional subjects — while in actual 1000+
          subjects exist across dozens of disciplines, which leads to different
          careers. Going through this huge list becomes confusing without proper
          structure or categorization. TaleemiGuide is the first platform that
          removes this confusion for students / working professionals by
          introducing Pakistan’s first comprehensive Subject / Field
          Classification System, built using leading international models and
          refined by experts. This system helps you understand exactly where
          your field belongs, how different subjects connect, and what your
          academic and career pathways look like. Whether you’re a student,
          educator, or working professional, this service brings clarity to your
          academic direction.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
      
          
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* HOW TALEEMIGUIDE HELPS */
/* ------------------------------------------------------------------ */
const HowTaleemiGuideHelpsSection = () => (
  <section className="py-20 border-b">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "How TaleemiGuide Helps",
            text: `TaleemiGuide is Pakistan’s first high-tech educational guidance
            platform designed to help students make informed academic and
            professional decisions after Intermediate.`,
          },
          {
            title: "Turning Confusion into Clarity",
            text: `We analyze your interests, aptitude, strengths, and academic
            background to recommend the most suitable pathways, universities,
            and future career options.`,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#11253e] mb-4">
              {item.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 2) WHY UNDERSTANDING YOUR FIELD MATTERS
// --------------------------------------------------------------------
const WhyUnderstandingSection = () => {
  const items = [
    {
      icon: <Layers size={48} />,
      title: "Clarity & Focus",
      desc: "Know where your field stands, what subjects are related to it, and what you should focus on — helping you stay aligned with your long-term career goals.",
    },
    {
      icon: <Target size={48} />,
      title: "Smarter Academic Planning",
      desc: "Choose the right subjects, find the right direction, and select future programs (BS, MS, PhD) with confidence.",
    },
    {
      icon: <Compass size={48} />,
      title: "Career-Ready Direction",
      desc: "Understanding your field ensures that your education aligns with market demand, helping you prepare for internships, jobs, and future opportunities.",
    },
  ];

  return (
    <section className="py-14 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-10">
          <h2
            className="text-2xl sm:text-4xl font-extrabold leading-tight"
            style={{ color: COLORS.primaryDark }}
          >
            Why Understanding Your Field Matters
          </h2>
          <div
            className="w-173 h-1 rounded-full mb-5"
            style={{ backgroundColor: COLORS.secondary }}
          />
          <p
            className="text-sm sm:text-base"
            style={{ color: COLORS.textGray }}
          >
            A clear understanding today leads to smarter academic choices and
            stronger career outcomes tomorrow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.borderSoft}`,
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    color: COLORS.secondary,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-base sm:text-lg font-semibold"
                  style={{ color: COLORS.primaryDark }}
                >
                  {item.title}
                </h3>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 3) TWO CORE INSTRUMENTS SECTION
// --------------------------------------------------------------------
const TwoInstrumentsSection = () => {
  const instruments = [
    {
      number: "01",
      title: "Subject & Field Classification",
      desc: "A structured map of 1000+ subjects divided into main categories and sub-disciplines, giving you a complete view of the academic landscape.",
    },
    {
      number: "02",
      title: "Career Assessment Test",
      desc: "Matches your interests, aptitude, and personality with the fields that suit you best and identifies where those fields fall in our classification system.",
    },
  ];

  return (
    <section className="py-16 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-4xl mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold  leading-tight"
            style={{ color: COLORS.primaryDark }}
          >
            Two Core Instruments for Maximum Clarity
          </h2>
          <div
            className="w-213 h-1 rounded-full mb-5"
            style={{ backgroundColor: COLORS.secondary }}
          />
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            TaleemiGuide offers two tools that complement each other:
          </p>
        </div>

        {/* Instruments */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {instruments.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(249,115,22,0.10))",
                border: `1px solid ${COLORS.borderSoft}`,
                boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: COLORS.lightBackground,
                    color: COLORS.primaryDark,
                    border: `1px solid ${COLORS.borderSoft}`,
                  }}
                >
                  {item.number}
                </div>

                <h3
                  className="text-base sm:text-lg font-semibold"
                  style={{ color: COLORS.primaryDark }}
                >
                  {item.title}
                </h3>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <p
          className="text-sm sm:text-base leading-relaxed max-w-3xl mb-10"
          style={{ color: COLORS.textGray }}
        >
          Together, these instruments give students and professionals a complete
          understanding of what suits them and where it belongs.
        </p>

        {/* CTA */}
        <div
          className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(249,115,22,0.10))",
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
          }}
        >
          <div>
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1"
              style={{ color: COLORS.secondary }}
            >
              Start With Confidence
            </p>
            <p
              className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed max-w-3xl"
              style={{ color: COLORS.primaryDark }}
            >
              Explore subject classification and take your first step toward a
              focused academic and professional future.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: COLORS.primary,
              color: "#fff",
            }}
          >
            Explore Now
          </button>
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
            After understanding your field and related disciplines, the next
            step is to explore where these subjects are offered.
          </p>

          <p
            className="text-base sm:text-sm leading-relaxed mb-8"
            style={{ color: COLORS.textGray }}
          >
            This leads directly to our next service:
            <br />
            University Program Finder — Pakistan’s largest database of BS, MS
            &amp; PhD programs across all universities.
          </p>

          <NavLink
            to="/service/university-program-finder"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow: "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Go to University Program Finder
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) MAIN COMPONENT
// --------------------------------------------------------------------
export default function SubjectClassification() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyUnderstandingSection />
      <TwoInstrumentsSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
