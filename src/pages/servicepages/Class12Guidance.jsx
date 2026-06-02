import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  User,
  Briefcase,
  MessageCircle,
  ArrowRight,
  X,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
const class12Hero = "/bg-4.jpg";
import class12Roadmap from "../../assets/service-images/roadmap12.png";
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
const cardStyle = {
  backgroundColor: "#FFFFFF",
  border: `1px solid ${COLORS.border}`,
  borderRadius: "1.25rem",
  boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
  background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,

};
/* ------------------------------------------------------------------ */
/* HERO SECTION */
/* ------------------------------------------------------------------ */
const HeroSection = ({ onOpenRoadmap }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">

      {/* Full width small-height image */}
      <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src={class12Hero}
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
          Your Path After Class 12 — Clear, Informed, and Future-Ready.
        </span>

        <h1 className="text-5xl md:text-5xl font-extrabold 
        leading-tight mb-6" style={{ color: COLORS.primaryDark }}>
          Decide Your Future After Intermediate
        </h1>

        <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
          After completing Class 12, students reach one of the most important decision points of their academic and professional lives — choosing the right pathway, specialization, and institution for their next stage. Class 12 students in Pakistan now have multiple structured pathways, including professional and academic degrees, accounting and finance tracks, Associate Degree programs, technical/vocational skills, entrepreneurship routes, and direct entry into uniformed services routes.

Research shows that most students are aware of only 7–10% of actual career possibilities, leading to limited or misinformed choices. With hundreds of degree options, dozens of professional pathways, and an increasing demand for both digital and technical skills, Class 12 students today need clear, structured, and personalized guidance to choose the pathway that fits their goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenRoadmap}
            className="px-6 py-2 rounded-xl bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 hover:scale-105 transition"
          >
            View Roadmap
          </button>

          
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
    <div className="max-w-8xl mx-auto px-6">
      <div>
        {[
          {
            title: "How TaleemiGuide Helps Us ?",
            text: `TaleemiGuide supports you at this critical stage by helping you explore all possible degree options, understand their career outcomes, and identify what truly fits your profile. Through career assessment, subject exploration, and expert guidance, you can move beyond limited awareness and make informed decisions about your field, university choices, and long-term career direction with clarity and confidence.`,
          },
          
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-[#11253e]">
              {item.title}
            </h2>
            <div
              className="w-88 h-1 rounded-full mb-5"
              style={{ backgroundColor: COLORS.secondary }}
            />
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* DECISION OPTIONS */
/* ------------------------------------------------------------------ */
const TakingRightDecisionSection = ({ onSeekAdviceClick }) => (
  <section className="relative py-20 bg-center max-w-6xl rounded-xl my-8 bg-cover bg-no-repeat " style={{ backgroundImage: 'url(/bg-1.jpg)' }}>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />

    <div className="relative max-w-6xl mx-auto px-6" >

      <h2 className="text-4xl font-bold text-center" style={{ color: COLORS.primaryDark }}>
        Three Guidance Pathways for Class 12 Students
      </h2>
      <div
        className="w-125 h-1 rounded-full mb-8 items-center mx-auto"
        style={{ backgroundColor: COLORS.secondary }}
      />
      <div className="grid md:grid-cols-3 gap-8" >

        {/* Option 1 */}
        <div style={cardStyle} className="p-6 flex flex-col rounded-3xl" >

          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-orange-600 mb-5">
            <MessageCircle size={48} />
          </div>
          <h3 className="font-semibold mb-2 r">Quick Academic Advice</h3>

          <p className="text-sm mb-6" style={{ color: COLORS.textMuted }}>
            If you need quick, reliable answers to any question related to intermediate level study or about post-Intermediate pathways, university choices, entry test requirements, or future careers, we’re here to guide you.
          </p>
          <div
            className="rounded-xl p-3 mb-6"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: "1px solid #E0E7FF",
            }}
          >
            <p
              className="text-[11px] uppercase font-semibold mb-1"
              style={{ color: COLORS.grayText }}
            >
              Ideal For
            </p>
            <ul
              className="text-xs sm:text-sm leading-snug space-y-1"
              style={{ color: COLORS.grayText }}
            >
              <li>✔ Admission-related questions</li>
              <li>✔ Eligibility concerns</li>
              <li>✔ Program comparison</li>
              <li>✔ General academic queries</li>
            </ul>
          </div>
          <button
            onClick={onSeekAdviceClick}
            className="mt-auto px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: COLORS.secondary, color: "white" }}
          >
            Proceed
          </button>
        </div>

        {/* Option 2 */}
        <div style={cardStyle} className="p-6 flex flex-col">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-orange-600 mb-5">
            <Briefcase size={48} />
          </div>
          <h3 className="font-semibold mb-2">Career Assessment Test</h3>
          <p className="text-sm mb-6" style={{ color: COLORS.textMuted }}>
            If you want to choose a right post Class 12 – Pathway that truly matches your interests, aptitude, strengths, and values, this test is essential. Simply sit in a relaxed environment and attempt Career Assessment Test. Once completed, you will receive a detailed Personalized Report highlighting your interests, aptitude, personality strengths, top five most compatible career options, recommended undergraduate fields, and guidance through our structured Subject Classification covering more than 1,000 organized subjects. <p className="font-bold text-orange-500">(Recommended)</p>
          </p>
          <NavLink
            to="/service/career-assessment"
            className="mt-auto px-4 py-2 rounded-lg text-sm font-medium text-center"
            style={{ backgroundColor: COLORS.secondary, color: "white" }}
          >
            Take Test
          </NavLink>
        </div>

        {/* Option 3 */}
        <div style={cardStyle} className="p-6 flex flex-col">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-orange-600 mb-5">
            <User size={48} />
          </div>
          <h3 className="font-semibold mb-2">Online Counseling Session</h3>
          <p className="text-sm mb-6" style={{ color: COLORS.textMuted }}>
            One-to-one consultation with an expert counselor for deep clarity.
          </p>
           <div
            className="rounded-xl p-3 mb-6"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: "1px solid #E0E7FF",
            }}
          >
            <p
              className="text-[11px] uppercase font-semibold mb-1"
              style={{ color: COLORS.grayText }}
            >
              Ideal For
            </p>
            <ul
              className="text-xs sm:text-sm leading-snug space-y-1"
              style={{ color: COLORS.grayText }}
            >
              <li>✔ Detailed specialization selection</li>
              <li>✔ Planning university applications</li>
              <li>✔ Understanding admission tests</li>
              <li>✔ Discussing your Career Assessment Report</li>
            </ul>
          </div>
          <NavLink
            to="/service/online-session"
            className="mt-auto px-4 py-2 rounded-lg text-sm font-medium text-center"
            style={{ backgroundColor: COLORS.secondary, color: "white" }}
          >
            Book Session
          </NavLink>
        </div>
      </div>
    </div>
  </section >
);

/* ------------------------------------------------------------------ */
/* SEEK ADVICE FORM */
/* ------------------------------------------------------------------ */


// --------------------------------------------------------------------
// 4) TALEEMI ADVICE FORM SECTION (SCROLL TARGET)
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
              state={{
                scrollTo: "form",
                category: "class_12",
              }}
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
// 5) NEXT STEP SECTION (LAYOUT CONSISTENT)
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
            Once your field is finalized, the next stage is to explore ALL
            subjects available in Pakistan — including traditional and emerging
            disciplines.
          </p>

          <p
            className="text-base sm:text-sm leading-relaxed mb-8"
            style={{ color: COLORS.textGray }}
          >
            This leads directly to the Subject Classification page, which
            organizes more than 1000+ subjects into simple categories to help
            you understand all your options.
          </p>

          <NavLink
            to="/service/subject-classification"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow:
                "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Go to Subject Classification
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>

);
//--------------
const RoadmapModal = ({ open, onClose }) => {
  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl flex flex-col"
        style={{ maxHeight: '90vh' }}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-200 bg-slate-50 rounded-t-2xl flex-shrink-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Class 12 Roadmap
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              Complete academic and career roadmap after Intermediate
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200/70 transition-colors"
          >
            <X size={18} className="text-slate-600" />
          </button>
        </div>

        {/* Image */}
        <div className="overflow-y-auto flex-1 rounded-b-2xl bg-black">
          <img
            src={class12Roadmap}
            alt="Class 12 academic and career roadmap"
            className="w-full h-auto block"
          />
        </div>

      </div>
    </div>
  );
};
/* ------------------------------------------------------------------ */
/* MAIN COMPONENT */
/* ------------------------------------------------------------------ */
export default function Class12Guidance() {
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const adviceRef = useRef(null);

  return (
    <>
      <ServiceLayout>
        <HeroSection onOpenRoadmap={() => setRoadmapOpen(true)} />
        <HowTaleemiGuideHelpsSection />
        <TakingRightDecisionSection
          onSeekAdviceClick={() =>
            adviceRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <TaleemiAdviceFormSection sectionRef={adviceRef} />
        <NextStepSection />
      </ServiceLayout>

      {/* Outside ServiceLayout so fixed positioning works correctly */}
      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </>
  );
}