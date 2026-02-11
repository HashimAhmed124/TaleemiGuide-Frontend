// Class-10-Guidance.jsx

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  User,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Layers,
  CheckCircle,
  ArrowRight,
  Users,
  Lightbulb,
  Wrench,
  BookOpen as BookIcon,
  Globe2,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import Logo from "./../../assets/logo-bg-less.png";

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
// 1) TOP HERO STRIP
// --------------------------------------------------------------------
const OverviewStrip = () => (
  <section className="pb-8 border-b border-gray-200 mb-8">
    <div
      className="p-6 sm:p-8 rounded-3xl"
      style={{
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.borderSoft}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <BookOpen size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Stage
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Matric / O-Levels Transition
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <User size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Ideal For
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Class 9–10 &amp; O-Level Students
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <GraduationCap size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Outcome
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Clear, confident stream selection
            </p>
          </div>
        </div>
      </div>

      <p
        className="text-base sm:text-lg leading-relaxed"
        style={{ color: COLORS.textGray }}
      >
        The decision after{" "}
        <strong className="font-semibold">Matriculation or O-Levels</strong> is
        your first major academic choice. It decides what you can study in
        Intermediate and which university or career options stay open for you.
        This page uses a{" "}
        <strong className="font-semibold">mind-map style roadmap</strong> to
        show how each choice connects to degrees and careers.
      </p>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 2) INTRO COPY
// --------------------------------------------------------------------
const InitialContent = () => (
  <section className="pb-8 border-b border-gray-200 mb-8 space-y-4">
    <div
      className="mt-3 p-4 sm:p-5 rounded-2xl flex items-start gap-3"
      style={{
        background:
          "linear-gradient(135deg, rgba(37,99,235,0.05), rgba(249,115,22,0.04))",
      }}
    >
      <div
        className="flex items-center justify-center w-9 h-9 rounded-xl mt-0.5 flex-shrink-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Lightbulb size={20} style={{ color: COLORS.secondary }} />
      </div>
      <div>
        <p
          className="text-sm sm:text-base font-semibold mb-1"
          style={{ color: COLORS.primaryDark }}
        >
          Our role in this decision
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          We help students avoid trial-and-error decisions. Instead of guessing
          after Matric, you can see how{" "}
          <strong>each stream flows into degrees and careers</strong>, and then
          match it with your strengths using guidance sessions and assessment
          tools.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) MIND MAP DATA (Path → Degrees / Courses → Careers)
// --------------------------------------------------------------------

// NOTE: labels are intentionally short so they fit inside the circles;
// full descriptions for each path are still shown below / in panels.

const MINDMAP_PATHS = [
  {
    id: "general",
    icon: GraduationCap,
    name: "General Education (HSSC)",
    label: "HSSC (F.Sc/FA/ICS/I.Com)",
    color: "#1E3A8A",
    bg: "#E0ECFF",
    description:
      "For students who like academic study and want many university options in Pakistan.",
    degrees: [
      {
        id: "pre_med",
        name: "Pre-Medical (F.Sc)",
        note: "Biology, Chemistry, Physics",
        careers: [
          "MBBS, BDS and other medical degrees",
          "DPT, Pharmacy, Nursing, Allied Health",
          "BS Biology / Biochemistry / Life Sciences",
          "Research & healthcare administration",
        ],
      },
      {
        id: "pre_eng",
        name: "Pre-Engineering (F.Sc)",
        note: "Mathematics, Physics, Chemistry",
        careers: [
          "BE / BS Engineering (Electrical, Mechanical, Civil, etc.)",
          "BS Mathematics, Physics & other STEM programs",
          "Architecture, Industrial Design (with required subjects)",
          "Engineering management and technical leadership roles",
        ],
      },
      {
        id: "ics",
        name: "ICS (Computer Science)",
        note: "Maths + Computer Science + Physics / Stats",
        careers: [
          "BS Computer Science / Software Engineering / IT",
          "AI, Data Science, Cyber Security specializations",
          "Software development & tech startups",
          "IT management and product roles",
        ],
      },
      {
        id: "icom",
        name: "I.Com / Commerce",
        note: "Accounting, Economics, Business Studies",
        careers: [
          "BBA, BS Accounting & Finance, BS Economics",
          "ACCA / CA and professional accountancy",
          "Banking, corporate finance & taxation",
          "Business ownership & entrepreneurship",
        ],
      },
      {
        id: "fa",
        name: "FA / Humanities & Social Sciences",
        note: "Social sciences, languages, arts, media",
        careers: [
          "BS in Psychology, Sociology, Education, IR, etc.",
          "Law (LLB) and Civil Service preparation (CSS/PMS)",
          "Media, journalism, languages and design",
          "Teaching and training careers",
        ],
      },
    ],
  },
  {
    id: "technical",
    icon: Wrench,
    name: "Technical Education (HSSC-Tech & DAE)",
    label: "Tech (HSSC-Tech / DAE)",
    color: "#0D9488",
    bg: "#D1FAE5",
    description:
      "For students who like machines, tools and labs and want strong technical skills.",
    degrees: [
      {
        id: "hssc_tech",
        name: "HSSC-Tech (Technical Intermediate)",
        note: "Electrical, Mechanical, Civil, HVACR, IT & Networking, Hospitality, Media Production, Livestock, etc.",
        careers: [
          "Entry-level technical and support roles",
          "Further diplomas and certificates in specific trades",
          "Progression to BS Technology programs",
        ],
      },
      {
        id: "dae_elect",
        name: "Diploma of Associate Engineering (DAE)",
        note: "3-year post-Matric diploma in Electrical/Mechanical/Civil/Electronics, etc.",
        careers: [
          "Engineering technologist and technician roles",
          "Industry jobs in plants, factories and construction",
          "BS Tech and Engineering Technology degrees",
          "Overseas technical employment opportunities",
        ],
      },
    ],
  },
  {
    id: "vocational",
    icon: Briefcase,
    name: "Vocational & Skill-Based Training",
    label: "Skills (NAVTTC/TEVTA)",
    color: "#F97316",
    bg: "#FFE7D3",
    description:
      "For students who want short skill courses, quick earning, or support for family business.",
    degrees: [
      {
        id: "it_digital",
        name: "IT & Digital Skills",
        note: "Graphic Design, Web basics, IoT fundamentals, Office & digital tools",
        careers: [
          "Freelancing in design & digital services",
          "Office & support roles in IT-enabled companies",
          "Starting small online businesses",
        ],
      },
      {
        id: "trades",
        name: "Technical Trades",
        note: "HVACR, Auto Electrician, Welding, Plumbing, Agri Tech, etc.",
        careers: [
          "Technician & skilled worker roles (local & overseas)",
          "Self-employment as a service provider",
          "Stepping stone to further technical education",
        ],
      },
      {
        id: "creative_service",
        name: "Creative & Service Skills",
        note: "Beautician, Fashion Design, Culinary / Baking, Tourism & Hospitality",
        careers: [
          "Work in salons, hotels, restaurants and boutiques",
          "Small ventures (home kitchen, salon, boutique)",
          "Opportunities in tourism and hospitality industry",
        ],
      },
    ],
  },
  {
    id: "madaris",
    icon: BookIcon,
    name: "Dars-e-Nizami / Madaris Pathway",
    label: "Dars-e-Nizami / Madaris",
    color: "#D97706",
    bg: "#FEF3C7",
    description:
      "For students studying in madaris who want structured Islamic learning with HSSC equivalence options.",
    degrees: [
      {
        id: "sanvia",
        name: "Sanvia Aama & Khaasa + Equivalence",
        note: "Core Dars-e-Nizami plus English, Urdu, Pak Studies and electives for IBCC equivalence.",
        careers: [
          "Entry to universities for Islamic Studies, Arabic and Education",
          "Teaching in schools and madaris",
          "Islamic guidance and community roles",
        ],
      },
      {
        id: "advanced_dars",
        name: "Advanced Dars-e-Nizami / Alimiyyah",
        note: "Higher studies in Tafseer, Hadith, Fiqh, Arabic and Islamic history.",
        careers: [
          "Scholarship and research roles",
          "Imamat, khateeb and counseling positions",
          "Islamic finance and advisory positions (with additional training)",
        ],
      },
    ],
  },
  {
    id: "international",
    icon: Globe2,
    name: "International / Foreign Systems",
    label: "International (O/A Levels, IB, etc.)",
    color: "#7C3AED",
    bg: "#EDE9FE",
    description:
      "For students in international schools aiming at top local and global universities.",
    degrees: [
      {
        id: "alevels",
        name: "O-Levels → A-Levels",
        note: "Subject combinations chosen for Medicine, Engineering, Business, Social Sciences, etc.",
        careers: [
          "Admissions to competitive universities in Pakistan & abroad",
          "Professional degrees (Medicine, Engineering, CS, Law, Business) with right subjects",
          "Scholarships and exchange programs",
        ],
      },
      {
        id: "ib",
        name: "IB Diploma / Career-related Program",
        note: "IB groups with extended essay, CAS and internal assessments.",
        careers: [
          "International-standard academic profile",
          "Admissions to IB-friendly universities worldwide",
          "Strong preparation for research-heavy degrees",
        ],
      },
      {
        id: "american",
        name: "American High School Diploma",
        note: "Grade 9-12 with required credits and standardized tests.",
        careers: [
          "Direct entry to many international universities",
          "IBCC equivalence and access to Pakistani universities",
          "Pathway to SAT-based scholarships abroad",
        ],
      },
    ],
  },
];

// --------------------------------------------------------------------
// 4) MIND MAP ROADMAP COMPONENT (updated design)
// --------------------------------------------------------------------

const MindMapRoadmapClass10 = () => {
  // Start empty so only Step 1 shows initially
  const [selectedPathId, setSelectedPathId] = useState(null);
  const [selectedDegreeId, setSelectedDegreeId] = useState(null);

  const selectedPath = selectedPathId
    ? MINDMAP_PATHS.find((p) => p.id === selectedPathId) || null
    : null;

  useEffect(() => {
    if (selectedPath?.degrees?.length) {
      setSelectedDegreeId(selectedPath.degrees[0].id);
    } else {
      setSelectedDegreeId(null);
    }
  }, [selectedPathId, selectedPath]);

  const selectedDegree =
    selectedPath?.degrees?.find((d) => d.id === selectedDegreeId) || null;

  const step2Visible = !!selectedPath;
  const step3Visible = !!selectedDegree;

  const breadcrumbPathLabel = selectedPath
    ? selectedPath.label
    : "Select a path";
  const breadcrumbDegreeLabel = selectedDegree
    ? selectedDegree.name
    : "Select a degree";

  return (
    <section
      className="py-10 mb-10 select-none"
      style={{
        userSelect: "none",
        backgroundColor: COLORS.lightBackground,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ---------- MOBILE VERSION ---------- */}
        <div className="md:hidden space-y-6 px-3">
          {/* Header + root (mobile) */}
          <div className="mb-2">
            <p
              className="text-[11px] font-semibold uppercase tracking-wide mb-1"
              style={{ color: COLORS.secondary }}
            >
              Class 10 Roadmap
            </p>
            <h2
              className="text-xl font-extrabold"
              style={{ color: COLORS.primaryDark }}
            >
              From Class 10 to Career
            </h2>
            <p className="text-xs mt-1" style={{ color: COLORS.textGray }}>
              Follow: <strong>Path → Degree → Careers</strong>. Swipe boxes to
              explore options.
            </p>

            <div className="mt-3 flex flex-col items-start gap-2">
              <div
                className="rounded-2xl px-4 py-3 text-center shadow-sm"
                style={{
                  backgroundColor: COLORS.primaryDark,
                  color: "white",
                }}
              >
                <p className="text-[10px] uppercase tracking-wide opacity-90">
                  Starting Point
                </p>
                <p className="text-sm font-bold">Class 10 / Matric</p>
                <p className="text-[10px] opacity-90">
                  (or O-Levels Completed)
                </p>
              </div>

              <div
                className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  border: `1px solid ${COLORS.primary}22`,
                  color: COLORS.textGray,
                }}
              >
                <span
                  className="font-semibold"
                  style={{ color: COLORS.primaryDark }}
                >
                  You are exploring:&nbsp;
                </span>
                Class 10 → {breadcrumbPathLabel} → {breadcrumbDegreeLabel}
              </div>
            </div>
          </div>

          {/* STEP 1 - MOBILE (always visible) */}
          <details open className="bg-white rounded-2xl shadow-md p-4">
            <summary className="font-bold text-base text-[#1E3A8A] mb-3 outline-none">
              Step 1 • Choose Your Main Path
            </summary>

            <div className="flex space-x-3 overflow-x-auto pb-2">
              {MINDMAP_PATHS.map((path) => {
                const Icon = path.icon;
                const active = path.id === selectedPathId;
                return (
                  <button
                    key={path.id}
                    onClick={() => setSelectedPathId(path.id)}
                    className={`flex-shrink-0 w-40 h-32 rounded-2xl flex flex-col items-center justify-center
                               transition-all duration-200 ease-out
                               ${active ? "roadmap-node-active" : ""}`}
                    style={{
                      backgroundColor: active
                        ? COLORS.secondary
                        : COLORS.primary,
                      color: "#FFFFFF",
                      boxShadow: active
                        ? "0 10px 26px rgba(17,37,62,0.32)"
                        : "0 4px 14px rgba(17,37,62,0.16)",
                    }}
                  >
                    <div className="mb-1">
                      <Icon size={22} />
                    </div>
                    <p className="text-[11px] font-semibold uppercase">
                      {path.label}
                    </p>
                    <p className="text-[10px] mt-1 opacity-90 line-clamp-2">
                      {path.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <p
              className="text-[11px] bg-[#EFF6FF] border p-3 mt-3 rounded-xl"
              style={{
                borderColor: `${COLORS.primary}33`,
                color: COLORS.textGray,
              }}
            >
              💡 Don&apos;t just copy friends. Pick the path that matches your
              interests and marks.
            </p>
          </details>

          {/* STEP 2 - MOBILE (only after path selected) */}
          {step2Visible && (
            <details
              className="bg-white rounded-2xl shadow-md p-4"
              open
              style={{ animation: "fadeInUp 0.35s ease-out" }}
            >
              {/* small connector */}
              <div className="flex justify-center mb-2">
                <div
                  className="w-[2px] h-4"
                  style={{
                    backgroundColor: "#CBD5F5",
                  }}
                />
              </div>

              <summary className="font-bold text-base text-[#1E3A8A] mb-3 outline-none">
                Step 2 • Degrees / Courses
              </summary>

              <div className="flex overflow-x-auto space-x-3 pb-2">
                {(selectedPath?.degrees || []).map((deg) => {
                  const active = deg.id === selectedDegreeId;
                  return (
                    <button
                      key={deg.id}
                      onClick={() => setSelectedDegreeId(deg.id)}
                      className={`flex-shrink-0 w-56 h-28 rounded-2xl p-3 text-left transition-all duration-200
                                  ${active ? "roadmap-node-active" : ""}`}
                      style={{
                        backgroundColor: active
                          ? COLORS.secondary
                          : COLORS.primary,
                        color: "white",
                        boxShadow: active
                          ? "0 10px 24px rgba(17,37,62,0.32)"
                          : "0 4px 12px rgba(17,37,62,0.18)",
                      }}
                    >
                      <p className="text-sm font-semibold line-clamp-2">
                        {deg.name}
                      </p>
                      <p className="text-[11px] opacity-90 mt-1 line-clamp-2">
                        {deg.note}
                      </p>
                    </button>
                  );
                })}
              </div>

              <p
                className="text-[11px] bg-[#EFF6FF] border p-3 mt-3 rounded-xl"
                style={{
                  borderColor: `${COLORS.primary}33`,
                  color: COLORS.textGray,
                }}
              >
                💡 Shortlist 2–3 degrees. You can refine later with tests and
                guidance.
              </p>
            </details>
          )}

          {/* STEP 3 - MOBILE (only after degree selected) */}
          {step3Visible && (
            <details
              className="bg-white rounded-2xl shadow-md p-4"
              open
              style={{ animation: "fadeInUp 0.45s ease-out" }}
            >
              {/* small connector */}
              <div className="flex justify-center mb-2">
                <div
                  className="w-[2px] h-4"
                  style={{
                    backgroundColor: "#CBD5F5",
                  }}
                />
              </div>

              <summary className="font-bold text-base text-[#1E3A8A] mb-3 outline-none">
                Step 3 • Career Outcomes
              </summary>

              <div
                className="rounded-2xl p-4 mt-1"
                style={{
                  backgroundColor: COLORS.primaryDark,
                  color: "white",
                }}
              >
                <p className="text-sm font-semibold">
                  {selectedPath?.label} → {selectedDegree?.name}
                </p>
                <p className="text-[11px] opacity-90 mb-3 mt-1">
                  {selectedDegree?.note}
                </p>

                <p className="text-[11px] uppercase font-semibold mb-1">
                  Typical Careers
                </p>
                <ul className="ml-3 text-[11px] space-y-1">
                  {(selectedDegree?.careers || []).slice(0, 3).map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>

                <p className="text-[11px] uppercase font-semibold mt-3 mb-1">
                  Further Options
                </p>
                <ul className="ml-3 text-[11px] space-y-1">
                  {(selectedDegree?.careers || []).slice(3).length > 0 ? (
                    selectedDegree.careers
                      .slice(3)
                      .map((c, i) => <li key={i}>→ {c}</li>)
                  ) : (
                    <li className="opacity-85">
                      Higher studies, specializations &amp; certifications.
                    </li>
                  )}
                </ul>

                <p className="text-[11px] opacity-90 mt-3 leading-snug">
                  Start in a path that fits you — you can still change direction
                  later, but this makes the journey smoother.
                </p>
              </div>

              <p
                className="text-[11px] bg-[#EFF6FF] border p-3 mt-3 rounded-xl"
                style={{
                  borderColor: `${COLORS.primary}33`,
                  color: COLORS.textGray,
                }}
              >
                💡 Show these careers to your parents and discuss which ones
                feel realistic and exciting.
              </p>
            </details>
          )}
        </div>

        {/* ---------- DESKTOP VERSION ---------- */}
        <div className="hidden md:block">
          <div
            className="relative rounded-[32px] p-6 sm:p-8 overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft || "#E5E7EB"}`,
              boxShadow: "0 20px 45px rgba(17,37,62,0.18)",
            }}
          >
            {/* Soft decorations */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-40 w-80 h-80 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(30,58,138,0.3), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -left-40 w-80 h-80 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.3), transparent 70%)",
              }}
            />

            {/* HEADER + ROOT */}
            <div className="relative z-10 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-wide mb-1"
                    style={{ color: COLORS.secondary }}
                  >
                    Class 10 Roadmap
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl font-extrabold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    From Class 10 Choice to Future Career
                  </h2>
                  <p
                    className="text-sm sm:text-base max-w-xl mt-2"
                    style={{ color: COLORS.textGray }}
                  >
                    See how your decision after Matric / O-Levels moves forward:
                    <strong> Path → Degree / Course → Career Outcomes</strong>.
                    Tap a box to reveal the next step.
                  </p>
                </div>

                {/* Logo block */}
                <div className="flex flex-col items-end gap-1">
                  <img
                    src={Logo}
                    className="h-25 w-auto object-contain"
                    draggable="false"
                    alt="TaleemiGuide"
                  />
                  <span
                    className="text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: COLORS.lightBackground,
                      border: `1px solid ${COLORS.primaryDark}22`,
                      color: COLORS.textGray,
                    }}
                  >
                    © TaleemiGuide Roadmap
                  </span>
                </div>
              </div>

              {/* ROOT + breadcrumb */}
              <div className="flex flex-col items-center">
                <div
                  className="rounded-[26px] px-7 py-4 w-full max-w-xs text-center shadow-md"
                  style={{
                    backgroundColor: COLORS.primaryDark,
                    color: "white",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-wide opacity-90">
                    Starting Point
                  </p>
                  <p className="text-lg font-bold">Class 10 / Matric</p>
                  <p className="text-[11px] opacity-90">
                    (or O-Levels Completed)
                  </p>
                </div>

                {/* connecting line from root to Step 1 */}
                <div className="w-full flex justify-center mt-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-[2px] w-32 rounded-full roadmap-line"
                      style={{ backgroundColor: "#CBD5F5" }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: COLORS.secondary }}
                    />
                  </div>
                </div>

                <div
                  className="mt-3 inline-flex items-center text-xs sm:text-sm px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: COLORS.lightBackground,
                    border: `1px solid ${COLORS.primary}22`,
                    color: COLORS.textGray,
                  }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    You are exploring:&nbsp;
                  </span>
                  Class 10 → {breadcrumbPathLabel} → {breadcrumbDegreeLabel}
                </div>
              </div>
            </div>

            {/* STEP 1 — DESKTOP (always visible) */}
            <div className="relative z-10 mb-10">
              <div className="grid lg:grid-cols-[2.1fr,1fr] gap-6">
                {/* PATH BOXES */}
                <div>
                  <div className="text-center mb-4">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: COLORS.lightBackground,
                        border: `1px dashed ${COLORS.primaryDark}33`,
                        color: COLORS.textGray,
                      }}
                    >
                      Step 1 • Choose Your Main Path
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-center gap-5">
                    {MINDMAP_PATHS.map((path) => {
                      const Icon = path.icon;
                      const active = path.id === selectedPathId;

                      return (
                        <button
                          onClick={() => setSelectedPathId(path.id)}
                          key={path.id}
                          className="focus:outline-none"
                          style={{ userSelect: "none" }}
                        >
                          <div
                            className={`rounded-[22px] w-44 h-36 flex flex-col items-center justify-center text-center 
                                       transition-all duration-200 ease-out px-3 hover:scale-[1.03] hover:shadow-xl cursor-pointer
                                       ${active ? "roadmap-node-active" : ""}`}
                            style={{
                              backgroundColor: active
                                ? COLORS.secondary
                                : COLORS.primary,
                              border: active
                                ? `2px solid ${COLORS.secondary}`
                                : `1px solid ${COLORS.primaryDark}55`,
                              boxShadow: active
                                ? "0 14px 34px rgba(17,37,62,0.38)"
                                : "0 6px 16px rgba(17,37,62,0.16)",
                            }}
                          >
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center mb-1"
                              style={{
                                backgroundColor: "#FFFFFF",
                                border: `1px solid rgba(255,255,255,0.3)`,
                              }}
                            >
                              <Icon
                                size={20}
                                style={{ color: COLORS.primaryDark }}
                              />
                            </div>

                            <p
                              className="text-[10px] uppercase font-semibold"
                              style={{ color: "#FFFFFF" }}
                            >
                              {path.label}
                            </p>
                          </div>

                          <p
                            className="mt-1 text-[11px] text-center font-medium leading-snug max-w-[10rem]"
                            style={{ color: COLORS.textGray }}
                          >
                            {path.name}
                          </p>

                          {active && (
                            <p
                              className="text-[10px] text-center font-semibold mt-0.5"
                              style={{ color: COLORS.secondary }}
                            >
                              Selected
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 1 Tip */}
                <div className="flex lg:justify-end">
                  <div
                    className="max-w-xs rounded-2xl px-4 py-3 shadow-md relative"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${COLORS.primary}22`,
                    }}
                  >
                    <div
                      className="absolute -left-3 top-5 w-3 h-3 rotate-45"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderLeft: `1px solid ${COLORS.primary}22`,
                        borderBottom: `1px solid ${COLORS.primary}22`,
                      }}
                    />
                    <p
                      className="text-[11px] uppercase font-semibold flex items-center gap-1 mb-1"
                      style={{ color: COLORS.secondary }}
                    >
                      <Lightbulb size={14} /> Step 1 Tip
                    </p>
                    <p
                      className="text-[11px] leading-snug"
                      style={{ color: COLORS.textGray }}
                    >
                      Don&apos;t just copy friends. Explore each path and ask:
                      &quot;Does this match my strengths and interests?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2 — DESKTOP (visible after path) */}
            {step2Visible && (
              <div
                className="relative z-10 mb-10"
                style={{ animation: "fadeInUp 0.35s ease-out" }}
              >
                {/* connector line between Step 1 and Step 2 */}
                <div className="w-full flex justify-center mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-[2px] w-24 rounded-full roadmap-line"
                      style={{ backgroundColor: "#E5E7EB" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: COLORS.primary }}
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="text-[11px] uppercase font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: COLORS.primary,
                          color: "white",
                        }}
                      >
                        Step 2 • Degrees / Courses
                      </span>
                      <span
                        className="text-[11px]"
                        style={{ color: COLORS.textGray }}
                      >
                        under {selectedPath?.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {(selectedPath?.degrees || []).map((deg) => {
                        const active = deg.id === selectedDegreeId;
                        return (
                          <button
                            key={deg.id}
                            onClick={() => setSelectedDegreeId(deg.id)}
                            className="focus:outline-none"
                            style={{ userSelect: "none" }}
                          >
                            <div
                              className={`rounded-[20px] w-56 h-28 p-3 flex flex-col justify-between 
                                         transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-lg cursor-pointer
                                         ${
                                           active ? "roadmap-node-active" : ""
                                         }`}
                              style={{
                                backgroundColor: active
                                  ? COLORS.secondary
                                  : COLORS.primary,
                                border: active
                                  ? `2px solid ${COLORS.secondary}`
                                  : `1px solid ${COLORS.primaryDark}55`,
                                boxShadow: active
                                  ? "0 10px 28px rgba(17,37,62,0.32)"
                                  : "0 3px 10px rgba(17,37,62,0.12)",
                              }}
                            >
                              <p
                                className="text-sm font-semibold line-clamp-2"
                                style={{ color: "#FFFFFF" }}
                              >
                                {deg.name}
                              </p>
                              <p
                                className="text-[11px] leading-snug line-clamp-2"
                                style={{ color: "#F9FAFB" }}
                              >
                                {deg.note}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2 Tip */}
                  <div className="flex lg:justify-end">
                    <div
                      className="max-w-xs rounded-2xl px-4 py-3 shadow-md relative"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: `1px solid ${COLORS.primary}22`,
                      }}
                    >
                      <div
                        className="absolute -left-3 top-5 w-3 h-3 rotate-45"
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderLeft: `1px solid ${COLORS.primary}22`,
                          borderBottom: `1px solid ${COLORS.primary}22`,
                        }}
                      />
                      <p
                        className="text-[11px] uppercase font-semibold flex items-center gap-1 mb-1"
                        style={{ color: COLORS.secondary }}
                      >
                        <BookOpen size={14} /> Step 2 Tip
                      </p>
                      <p
                        className="text-[11px] leading-snug"
                        style={{ color: COLORS.textGray }}
                      >
                        Shortlist 2–3 degrees. You can refine later with a
                        Career Assessment Test or 1:1 Guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — DESKTOP (visible after degree) */}
            {step3Visible && (
              <div
                className="relative z-10"
                style={{ animation: "fadeInUp 0.45s ease-out" }}
              >
                {/* connector line between Step 2 and Step 3 */}
                <div className="w-full flex justify-center mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-[2px] w-24 rounded-full roadmap-line"
                      style={{ backgroundColor: "#E5E7EB" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: COLORS.secondary }}
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="text-[11px] uppercase font-semibold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: COLORS.secondary,
                          color: "white",
                        }}
                      >
                        Step 3 • Career Outcomes
                      </span>
                    </div>

                    <div
                      className="rounded-[24px] p-5 sm:p-6 relative overflow-hidden shadow-xl 
                                 transition-all duration-300 ease-out hover:shadow-[0_0_32px_rgba(17,37,62,0.45)] hover:scale-[1.01]"
                      style={{
                        backgroundColor: COLORS.primaryDark,
                        color: "white",
                      }}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-[24px] pointer-events-none"
                        style={{
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      />

                      <div className="relative z-10">
                        <p className="text-[11px] uppercase font-semibold opacity-85">
                          Based on your choice
                        </p>
                        <p className="text-base font-bold mt-1">
                          {selectedPath?.label} → {selectedDegree?.name}
                        </p>
                        <p className="text-[11px] opacity-90 mb-4">
                          {selectedDegree?.note}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div
                            className="rounded-2xl p-3 backdrop-blur-sm transition-all duration-200 
                                       hover:bg-white/12 hover:scale-[1.02]"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                          >
                            <p className="text-[11px] uppercase font-semibold mb-1">
                              Typical Careers
                            </p>
                            <ul className="space-y-1 text-[11px]">
                              {(selectedDegree?.careers || [])
                                .slice(0, 3)
                                .map((c, i) => (
                                  <li key={i} className="flex gap-1.5">
                                    <span className="text-orange-300">●</span>{" "}
                                    {c}
                                  </li>
                                ))}
                            </ul>
                          </div>

                          <div
                            className="rounded-2xl p-3 backdrop-blur-sm transition-all duration-200 
                                       hover:bg_white/12 hover:scale-[1.02]"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                          >
                            <p className="text-[11px] uppercase font-semibold mb-1">
                              Further Options
                            </p>
                            <ul className="space-y-1 text-[11px]">
                              {(selectedDegree?.careers || []).slice(3).length >
                              0 ? (
                                selectedDegree.careers.slice(3).map((c, i) => (
                                  <li key={i} className="flex gap-1.5">
                                    <span className="text-orange-300">→</span>{" "}
                                    {c}
                                  </li>
                                ))
                              ) : (
                                <li className="opacity-85">
                                  Related specializations, professional
                                  certifications &amp; advanced degrees.
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>

                        <p className="text-[11px] opacity-90 mt-4 leading-snug">
                          No decision is permanent, but starting in a{" "}
                          <strong>good-fit path</strong> makes your journey
                          through Class 11–12, university and jobs much
                          smoother.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 Tip */}
                  <div className="flex lg:justify-end">
                    <div
                      className="max-w-xs rounded-2xl px-4 py-3 shadow-md relative"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: `1px solid ${COLORS.primary}22`,
                      }}
                    >
                      <div
                        className="absolute -left-3 top-5 w-3 h-3 rotate-45"
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderLeft: `1px solid ${COLORS.primary}22`,
                          borderBottom: `1px solid ${COLORS.primary}22`,
                        }}
                      />
                      <p
                        className="text-[11px] uppercase font-semibold flex items-center gap-1 mb-1"
                        style={{ color: COLORS.secondary }}
                      >
                        <Briefcase size={14} /> Step 3 Tip
                      </p>
                      <p
                        className="text-[11px] leading-snug"
                        style={{ color: COLORS.textGray }}
                      >
                        Discuss these careers with your parents/guardians. Focus
                        on the whole cluster, not just one job title like
                        &quot;doctor&quot; or &quot;engineer&quot;.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 5) CHALLENGE SECTION
// --------------------------------------------------------------------
const ChallengeSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      The Challenge: Why Students Choose Wrong
    </h2>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* LEFT CARD */}
      <div
        className="p-5 sm:p-6 rounded-2xl h-full"
        style={{ backgroundColor: COLORS.lightBackground }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-4 flex items-center"
          style={{ color: COLORS.secondary }}
        >
          <Layers size={24} className="mr-3" />
          Common Decision Traps
        </h3>

        <ul
          className="space-y-3 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="flex-shrink-0 mt-1 mr-3"
              style={{ color: COLORS.primary }}
            />
            <span>
              Following friends or trends without considering personal aptitude
              or long-term goals.
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="flex-shrink-0 mt-1 mr-3"
              style={{ color: COLORS.primary }}
            />
            <span>
              Family or societal pressure to choose “prestigious” streams like
              Pre-Medical or Pre-Engineering, even when they don&apos;t fit.
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="flex-shrink-0 mt-1 mr-3"
              style={{ color: COLORS.primary }}
            />
            <span>
              Very little awareness of{" "}
              <strong className="font-semibold">
                technical, vocational and international
              </strong>{" "}
              routes that may suit the student better.
            </span>
          </li>
        </ul>
      </div>

      {/* RIGHT CARD */}
      <div
        className="p-5 sm:p-6 rounded-2xl"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 flex items-center"
          style={{ color: COLORS.secondary }}
        >
          <Users size={24} className="mr-3" />
          The Stakes Are High
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          A wrong choice can mean:
        </p>

        <ul
          className="mt-3 space-y-2 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          <li>• Two years of struggle in mismatched subjects.</li>
          <li>• Lower grades and loss of confidence.</li>
          <li>• Closed doors to preferred universities later on.</li>
        </ul>

        <p
          className="mt-3 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          Making an informed decision here is an{" "}
          <strong className="font-semibold">
            investment in your education and career.
          </strong>
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 6) OPTIONS SECTION
// --------------------------------------------------------------------
const OptionsSection = () => (
  <section className="py-12 border-b border-gray-200 mb-12">
    <div className="text-center mb-10">
      <h2
        className="text-3xl font-extrabold mb-2"
        style={{ color: COLORS.primaryDark }}
      >
        Three Paths to the Right Decision
      </h2>

      <p
        className="text-sm sm:text-base max-w-2xl mx-auto"
        style={{ color: COLORS.textGray }}
      >
        Choose the support that fits your needs — whether you want deep
        guidance, scientific testing, or quick subject-level clarity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          title: "Expert Guidance Session",
          icon: User,
          tag: "1:1 Deep Guidance",
          description:
            "A one-on-one session to evaluate your marks, interests, learning style, and future direction.",
          idealFor: "Students & parents seeking a deep understanding.",
          link: "/service/online-session",
          cta: "Book a Session",
        },
        {
          id: 2,
          title: "Career Assessment Test",
          icon: Briefcase,
          tag: "Psychometric",
          description:
            "A science-based test that evaluates aptitude, interests, personality, and strengths to suggest best-fit streams.",
          idealFor: "Students who want reliable, data-backed results.",
          link: "/service/career-assessment",
          cta: "Take the Test",
        },
        {
          id: 3,
          title: "Taleemi Advice (Quick Query)",
          icon: MessageCircle,
          tag: "Fast Response",
          description:
            "Ask a specific question related to subjects, combinations, boards or confusion — get a clear quick answer.",
          idealFor: "Students with a single, specific confusion.",
          link: "/service/taleemi-advice",
          cta: "Ask a Question",
        },
      ].map((option) => (
        <div
          key={option.id}
          className="rounded-3xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E7FF",
            boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
            }}
          />

          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.secondary}30`,
            }}
          >
            <option.icon size={30} style={{ color: COLORS.secondary }} />
          </div>

          <h3
            className="text-lg sm:text-xl font-bold mb-2"
            style={{ color: COLORS.primaryDark }}
          >
            {option.title}
          </h3>

          <span
            className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4"
            style={{
              backgroundColor: `${COLORS.secondary}15`,
              color: COLORS.secondary,
            }}
          >
            {option.tag}
          </span>

          <p
            className="text-sm mb-4 leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            {option.description}
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
            <p
              className="text-xs sm:text-sm leading-snug"
              style={{ color: COLORS.grayText }}
            >
              {option.idealFor}
            </p>
          </div>

          <NavLink
            to={option.link}
            className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            {option.cta}
            <ArrowRight size={16} className="ml-2" />
          </NavLink>
        </div>
      ))}
    </div>
  </section>
);

// --------------------------------------------------------------------
// 7) NEXT STEP SECTION
// --------------------------------------------------------------------
const NextStepSection = () => (
  <section className="pt-6">
    <div
      className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #FFFFFF 100%)",
        border: "1px solid rgba(0,0,0,0.04)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 w-52 h-52 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(30,58,138,0.15), transparent 70%)",
        }}
      />

      <div className="relative">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Your Next Step in the Journey
        </h2>

        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          Once you choose the right stream after Class 10, the next decision in
          Class 11–12 is selecting a{" "}
          <strong className="font-semibold">
            specialization and preparing for university admissions
          </strong>
          . TaleemiGuide continues supporting you at each stage through
          structured guidance.
        </p>

        <NavLink
          to="/service/class-12-guidance"
          className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Explore Class 12 Guidance
          <ArrowRight size={18} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 8) MAIN COMPONENT
// --------------------------------------------------------------------
export default function Class10Guidance() {
  return (
    <ServiceLayout>
      <OverviewStrip />
      <InitialContent />
      <ChallengeSection />
      <MindMapRoadmapClass10 />
      <OptionsSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
