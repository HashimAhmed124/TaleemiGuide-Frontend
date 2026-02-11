import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { User, Briefcase, MessageCircle, ArrowRight, X } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
const class10Hero = "/bg-6.jpg";
import class10Roadmap from "../../assets/service-images/10-grade.jpg";

// --- BRAND COLORS ----------------------------------------------------
const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  grayText: "#4B5563",
  textMuted: "#4B5563", // ✅ FIX (was referenced but missing)
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
  border: "#E5E7EB", // ✅ FIX (was referenced but missing)
};

const ROADMAP_LINK = "/roadmap/class-10";

const cardStyle = {
  backgroundColor: "#FFFFFF",
  border: `1px solid ${COLORS.border}`,
  borderRadius: "1.25rem",
  boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
  background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
};

// --------------------------------------------------------------------
// 1) MERGED HERO + INTRO + QUESTIONS
// --------------------------------------------------------------------
const HeroIntroSection = ({ onOpenRoadmap }) => {
  const questions = [
    "What options are available after Matric?",
    "Which career does each option lead to?",
    "Which options are most suitable for me?",
    "What is included in each track?",
    "Which career opportunities close upon selecting some choice?",
    "How to know if some choice is most suitable for me?",
  ];

  const mid = Math.ceil(questions.length / 2);
  const leftQuestions = questions.slice(0, mid);
  const rightQuestions = questions.slice(mid);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">
      {/* Full width small-height image */}
      <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <img
          src={class10Hero}
          alt="Class 10 academic guidance overview"
          className="w-full h-full object-center rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 text-center">
        <span
          className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wide text-orange-600 bg-orange-100 rounded-full text-start"
        >
          Your First Major Academic Decision Starts Here.
        </span>

        <h1
          className="text-5xl md:text-5xl font-extrabold leading-tight mb-6"
          style={{ color: COLORS.primaryDark }}
        >
          Choosing the Right Path After Matric
        </h1>

        <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
          After completing Grade 10, students enter one of the most important
          phases of their academic life. This is the point where they must
          choose a stream — a choice that shapes their future studies,
          university options, and eventually the careers they qualify for.
          However, most students and parents face the same challenge: minimum
          reliable information and maximum confusion. At this stage, students
          often make decisions based on family expectations, friends’ choices,
          trends and “scope” discussions, and incomplete or outdated guidance.
        </p>

        {/* <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
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

        {/* 🔹 Key Questions Section */}
        <div
          className="mt-10 md:mt-12 max-w-4xl mx-auto text-left rounded-2xl p-5 md:p-7"
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 12px 32px rgba(15,23,42,0.06)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-4"
            style={{ color: COLORS.secondary }}
          >
            Key Questions at This Stage
          </p>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            <ul
              className="space-y-1.5 text-sm md:text-base"
              style={{ color: COLORS.textMuted }}
            >
              {leftQuestions.map((q, idx) => (
                <li key={idx}>• {q}</li>
              ))}
            </ul>

            <ul
              className="space-y-1.5 text-sm md:text-base"
              style={{ color: COLORS.textMuted }}
            >
              {rightQuestions.map((q, idx) => (
                <li key={idx}>• {q}</li>
              ))}
            </ul>
          </div>

          <p
            className="text-sm leading-relaxed mt-5"
            style={{ color: COLORS.textMuted }}
          >
            For both students and parents, this is one of the most stressful and
            uncertain decision points due to lack of structured, verified
            information — now made easy by <strong>TaleemiGuide!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 2) HOW TALEEMIGUIDE HELPS – SINGLE COLUMN
// --------------------------------------------------------------------
const HowTaleemiGuideHelpsSection = ({ onOpenRoadmap }) => (
  <section className="py-16 md:py-20">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-6 md:p-8" style={cardStyle}>
        <h2 className="text-2xl font-bold" style={{ color: COLORS.primaryDark }}>
          How TaleemiGuide Helps
        </h2>

        {/* FIX: w-74 is not a Tailwind class */}
        <div
          className="h-1 rounded-full mb-5"
          style={{ width: "74px", backgroundColor: COLORS.secondary }}
        />

        <p
          className="text-base text-sm leading-relaxed mb-4"
          style={{ color: COLORS.textMuted }}
        >
          TaleemiGuide is Pakistan’s tech-enabled educational guidance platform,
          developed by educationists, counselors, and industry professionals.
        </p>

        <p
          className="text-base text-sm leading-relaxed mb-6"
          style={{ color: COLORS.textMuted }}
        >
          We ensure students understand every option, its requirements, and
          future implications before making a decision.
        </p>

        <button
          type="button"
          onClick={onOpenRoadmap}
          className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold"
          style={{ backgroundColor: COLORS.secondary, color: "white" }}
        >
          View Complete Roadmap
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) OPTIONS SECTION – 3 OPTIONS, OPTION 1 SCROLLS TO FORM
// --------------------------------------------------------------------
const OptionsSection = ({ onSeekAdviceClick }) => (
  <section
    className="relative py-16 md:py-20 bg-center max-w-6xl rounded-xl my-8 bg-cover bg-no-repeat mx-auto"
    style={{ backgroundImage: "url(/bg-1.jpg)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent rounded-xl" />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl font-bold text-center"
        style={{ color: COLORS.primaryDark }}
      >
        Three Paths to the Right Decision
      </h2>

      {/* FIX: w-122 is not a Tailwind class */}
      <div
        className="h-1 rounded-full mb-6 mx-auto"
        style={{ width: "122px", backgroundColor: COLORS.secondary }}
      />

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Option 1 */}
        <div style={cardStyle} className="p-6 flex flex-col rounded-3xl">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-orange-600 mb-5">
            <MessageCircle size={48} />
          </div>
          <h3 className="font-semibold mb-2">Quick Academic Advice</h3>

          <p className="text-sm mb-6" style={{ color: COLORS.textMuted }}>
            If you need fast answers to any educational query related to
            Post-Matric subjects, options, or entry test requirements:
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
              <li>✔ Immediate questions</li>
              <li>✔ Clarification on streams</li>
              <li>✔ Subject combination queries</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={onSeekAdviceClick}
            className="mt-auto px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: COLORS.secondary, color: "white" }}
          >
            Proceed
          </button>
        </div>

        {/* Option 2 */}
        <div style={cardStyle} className="p-6 flex flex-col rounded-3xl">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-orange-600 mb-5">
            <Briefcase size={48} />
          </div>
          <h3 className="font-semibold mb-2">Career Assessment Test</h3>
          <p className="text-sm mb-6" style={{ color: COLORS.textMuted }}>
            If you want to choose your Post-Matric stream based on your
            interests, strengths, and aptitude, this test is for you. Attempt it
            in a relaxed environment and receive a concise Personalized Career
            Profile with your top interests, strengths, best-fit fields, and
            recommended stream after Matric. For Career Assessment Test;
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
        <div style={cardStyle} className="p-6 flex flex-col rounded-3xl">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-orange-600 mb-5">
            <User size={48} />
          </div>
          <h3 className="font-semibold mb-2">Online Counseling Session</h3>
          <p className="text-sm mb-6" style={{ color: COLORS.textMuted }}>
            For one-on-one guidance with our expert counselors:
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
              <li>✔ Students needing deep clarity</li>
              <li>✔ Parents wanting expert advice</li>
              <li>✔ Discussing the Career Assessment Report</li>
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
  </section>
);

// --------------------------------------------------------------------
// 4) TALEEMI ADVICE FORM SECTION (SCROLL TARGET)
// --------------------------------------------------------------------
const TaleemiAdviceFormSection = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 border-t border-gray-200"
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
              style={{ color: COLORS.primaryDark }}
            >
              Need Quick Help? (Seek Taleemi Advice)
            </h2>

            <p
              className="text-center max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              <span className="font-semibold" style={{ color: COLORS.primary }}>
                Taleemi Advice
              </span>{" "}
              is your academic emergency service. Whether you're choosing
              subjects, facing confusion, stuck in academic challenges, or
              planning a career transition — get expert guidance in time.
            </p>

            <NavLink
              to="/service"
              className="inline-block mt-2 px-4 py-2 rounded-lg text-sm font-medium text-center"
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
        className="relative rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden"
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
            After choosing the right stream, students move into{" "}
            <span className="font-semibold text-gray-900">Class 11–12</span>,
            where decisions become more focused — specialization selection,
            university planning, and career direction.
          </p>

          <p
            className="text-base sm:text-sm leading-relaxed mb-8"
            style={{ color: COLORS.textGray }}
          >
            This is where strategic guidance matters most. Your next step starts
            with Class 12 Guidance.
          </p>

          <NavLink
            to="/service/class-12-guidance"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow: "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Explore Class 11-12 Guidance
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 6) ROADMAP MODAL
// --------------------------------------------------------------------
const RoadmapModal = ({ open, onClose }) => {
  // ✅ UX polish: prevent background scroll when modal open (no design change)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-200 bg-slate-50">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Class 10 Roadmap
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              Complete academic and career roadmap after Matric
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200/70 transition-colors"
            aria-label="Close roadmap modal"
          >
            <X size={18} className="text-slate-600" />
          </button>
        </div>

        {/* Image area */}
        <div className="bg-black flex items-center justify-center max-h-[75vh]">
          <img
            src={class10Roadmap}
            alt="Class 10 academic and career roadmap"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------
// 7) MAIN COMPONENT
// --------------------------------------------------------------------
export default function Class10Guidance() {
  const [roadmapOpen, setRoadmapOpen] = useState(false);
  const adviceRef = useRef(null);

  const handleSeekAdviceClick = () => {
    if (adviceRef.current) {
      adviceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ServiceLayout>
      {/* ✅ FIX: pass onOpenRoadmap so button works */}
      <HeroIntroSection onOpenRoadmap={() => setRoadmapOpen(true)} />

      <HowTaleemiGuideHelpsSection onOpenRoadmap={() => setRoadmapOpen(true)} />
      <OptionsSection onSeekAdviceClick={handleSeekAdviceClick} />
      <TaleemiAdviceFormSection sectionRef={adviceRef} />
      <NextStepSection />
      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </ServiceLayout>
  );
}
