// TaleemiAnnouncementsPage.jsx — Unified & Upgraded
// Source: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Megaphone,
  GraduationCap,
  School,
  Globe,
  Mail,
  ArrowRight,
  CheckCircle,
  Zap,
  MessageCircle,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

// --- UNIFIED COLOR PALETTE (aligned with other service pages) ---
const COLORS = {
  primary: "#1E3A8A", // Dark Blue
  primaryDark: "#0F172A",
  secondary: "#F97316", // Bright Orange
  textGray: "#4B5563",
  grayText: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

// ===================================================================
// 1) HERO SECTION
// ===================================================================
const HeroSection = () => (
  <section className="pb-10 border-b border-gray-200 mb-10">
    <div
      className="p-6 sm:p-8 rounded-3xl"
      style={{
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.borderSoft}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* Top strip */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Megaphone size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Focus
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Scholarships &amp; Opportunities
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <GraduationCap size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              For Whom
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Students &amp; Professionals
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Globe size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Coverage
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              National &amp; International
            </p>
          </div>
        </div>
      </div>

      {/* Main copy (from original) */}
      <p
        className="text-xl font-extrabold leading-tight mb-3"
        style={{ color: COLORS.primaryDark }}
      >
        Scholarships, Admissions, Internships &amp; Opportunities — All in One Place
      </p>
      <p
        className="text-base sm:text-lg leading-relaxed mb-3"
        style={{ color: COLORS.textGray }}
      >
        TaleemiGuide continuously scans national and international platforms to
        bring you the latest academic and career opportunities. Whether you are
        a Matric student planning your future, an intermediate student exploring
        next steps, a university student seeking advancement, or a professional
        looking for growth, this page keeps you updated with timely and verified
        opportunities.
      </p>
      <p
        className="text-base sm:text-lg font-semibold"
        style={{ color: COLORS.secondary }}
      >
        Stay connected for scholarships, internships, admissions, competitions,
        workshops, training programs, conferences, and skill-building events —
        all curated to help you grow academically and professionally.
      </p>
    </div>
  </section>
);

// ===================================================================
// 2) OPPORTUNITIES SECTION (Matric / University / General)
// ===================================================================
const OpportunitiesSection = () => {
  const opportunitiesData = [
    {
      title: "Opportunities for Matric & Intermediate Students",
      icon: School,
      color: COLORS.primary,
      list: [
        "Scholarship programs",
        "College admission announcements",
        "Talent & academic competitions",
        "Short courses & youth development programs",
        "National testing schedules",
        "Skill-based opportunities",
        "Olympiads and learning events",
      ],
      footer:
        "These opportunities help Class 10–12 students discover pathways early and make informed decisions about their next academic steps.",
    },
    {
      title: "Opportunities for College & University Students",
      icon: GraduationCap,
      color: COLORS.secondary,
      list: [
        "BS, MS & PhD admissions",
        "International and national scholarships",
        "Research internships & fellowships",
        "Conferences and seminars",
        "Skill development programs",
        "Entrepreneurship & innovation challenges",
        "Final-year project competitions",
        "Part-time and full-time internship openings",
      ],
      footer:
        "Perfect for students looking to enhance their academic profiles, build experience, or open doors for higher studies.",
    },
    {
      title: "General & Open Opportunities",
      icon: Globe,
      color: COLORS.primaryDark,
      list: [
        "Government-funded scholarships",
        "International exchange programs",
        "Online certifications & skill tracks",
        "Job fairs & career expos",
        "Training workshops",
        "Volunteering & leadership programs",
        "Nationwide calls for proposals, competitions, and grants",
      ],
      footer:
        "These announcements support lifelong learners and those seeking advancement in any stage of their journey.",
    },
  ];

  return (
    <section className="py-10 border-b border-gray-200 mb-10">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-8 text-center"
        style={{ color: COLORS.primaryDark }}
      >
        Find Your Next Big Break
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {opportunitiesData.map((data, index) => {
          const Icon = data.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-3xl transition duration-300 relative overflow-hidden h-full"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${COLORS.borderSoft}`,
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              }}
            >
              {/* Accent blob */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
                }}
              />

              {/* Icon + title */}
              <div className="flex items-center mb-4 relative">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mr-3 shadow-md"
                  style={{
                    backgroundColor: COLORS.lightBackground,
                    border: `1px solid ${data.color}35`,
                  }}
                >
                  <Icon size={24} style={{ color: data.color }} />
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: data.color }}
                >
                  {data.title}
                </h3>
              </div>

              {/* List */}
              <ul
                className="space-y-2 text-sm sm:text-base ml-1"
                style={{ color: COLORS.textGray }}
              >
                {data.list.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle
                      size={18}
                      className="flex-shrink-0 mt-1 mr-2"
                      style={{ color: data.color }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <p
                className="mt-4 pt-4 text-xs sm:text-sm font-semibold border-t"
                style={{
                  borderColor: "#E5E7EB",
                  color: COLORS.textGray,
                }}
              >
                {data.footer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ===================================================================
// 3) STAY CONNECTED SECTION
// ===================================================================
const StayConnectedSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-4"
      style={{ color: COLORS.primaryDark }}
    >
      Stay Connected
    </h2>
    <p
      className="text-sm sm:text-base leading-relaxed mb-6"
      style={{ color: COLORS.textGray }}
    >
      For detailed updates, guidance, personalized advice, and tips on applying
      successfully:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: Mail,
          label: "Join our mailing list",
        },
        {
          icon: Zap,
          label: "Follow us on social media",
        },
        {
          icon: MessageCircle,
          label: "Visit this page regularly for new opportunities",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="p-5 rounded-2xl text-center shadow-md"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            <Icon
              size={30}
              className="mx-auto mb-3"
              style={{ color: COLORS.secondary }}
            />
            <p
              className="font-bold text-sm sm:text-base"
              style={{ color: COLORS.primaryDark }}
            >
              👉 {item.label}
            </p>
          </div>
        );
      })}
    </div>

    <p
      className="mt-8 text-sm sm:text-base font-semibold text-center"
      style={{ color: COLORS.textGray }}
    >
      TaleemiGuide ensures that you never miss an opportunity that can uplift
      your academic or professional journey.
    </p>
  </section>
);

// ===================================================================
// 4) JOURNEY + CTA SECTION (gradient, unified)
// ===================================================================
const JourneyAndCTASection = () => {
  const journeySteps = [
    { path: "/service/class-10-guidance", title: "Class 10" },
    { path: "/service/class-12-guidance", title: "Class 12" },
    { path: "/service/career-assessment", title: "Career Assessment" },
    { path: "/service/subject-classification", title: "Subject Classification" },
    { path: "/service/university-program-finder", title: "Program Finder" },
    { path: "/service/university-graduates-guidance", title: "University Support" },
    { path: "/service/working-professional-guidance", title: "Professional Guidance" },
    { path: "/service/taleemi-advice", title: "Fast-Track Help" },
    { path: "/service/online-session", title: "Online Sessions" },
    { path: "/service/announcement", title: "Opportunity Hub" },
  ];

  return (
    <section className="pt-4 pb-14">
      <div
        className="p-8 rounded-3xl text-center relative overflow-hidden"
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

        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-4"
          style={{ color: COLORS.primaryDark }}
        >
          Your Complete Journey With TaleemiGuide
        </h2>

        {/* Journey visualization */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6 p-4 rounded-2xl bg-white shadow-inner">
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <NavLink
                to={step.path}
                className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition duration-200 ${
                  step.path === "/service/announcement"
                    ? "shadow-md"
                    : ""
                }`}
                style={
                  step.path === "/service/announcement"
                    ? {
                        backgroundColor: COLORS.secondary,
                        color: "white",
                      }
                    : {
                        backgroundColor: "#E5E7EB",
                        color: "#374151",
                      }
                }
              >
                {step.title}
              </NavLink>
              {index < journeySteps.length - 1 && (
                <ArrowRight size={14} className="text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed mb-6 font-bold"
          style={{ color: COLORS.primary }}
        >
          TaleemiGuide walks with you at every step of your academic and
          professional life.
        </p>

        {/* CTA — keep hook, implementation up to you */}
        <button
          className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
            boxShadow: `0 10px 15px -3px ${COLORS.secondary}70`,
          }}
          // Placeholder: replace with navigation to the actual live feed route
          onClick={() =>
            console.log("Navigate to Live Announcements Feed")
          }
        >
          View All Opportunities Live
          <ArrowRight size={20} className="ml-3" />
        </button>
      </div>
    </section>
  );
};

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
export default function TaleemiAnnouncementsPage() {
  return (
    <ServiceLayout title="Taleemi Announcements" subtitle="Opportunity Hub">
      <HeroSection />
      <OpportunitiesSection />
      <StayConnectedSection />
      <JourneyAndCTASection />
    </ServiceLayout>
  );
}
