// OnlineSessionPage.jsx — Unified & Upgraded
// Source: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Users,
  Briefcase,
  Zap,
  CheckCircle,
  Smartphone,
  ArrowRight,
  Calendar,
  Lock,
  Globe,
  Video,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

// --- UNIFIED COLOR PALETTE (aligned with other service pages) ---
const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#0F172A",
  secondary: "#F97316",
  textGray: "#4B5563",
  grayText: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

// ===================================================================
// 1) HERO / INTRO SECTION
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
      {/* Top mini strip */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Video size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Mode
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              1:1 Online Session
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
            <Users size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Ideal For
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Complex &amp; detailed cases
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
            <Briefcase size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Format
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Live video / audio session
            </p>
          </div>
        </div>
      </div>

      {/* Main copy */}
      <p
        className="text-base sm:text-lg leading-relaxed mb-3"
        style={{ color: COLORS.textGray }}
      >
        Our Online Session service provides dedicated, one-on-one time with a
        professional counselor to discuss complex cases, review documents, and
        create detailed academic or professional action plans. This is the
        premium level of personalized guidance.
      </p>
      <p
        className="text-base sm:text-lg font-semibold"
        style={{ color: COLORS.primaryDark }}
      >
        Whether you need help with subject selection, university admission
        strategy, or career pivots, our experts are here to guide you live.
      </p>
    </div>
  </section>
);

// ===================================================================
// 2) BENEFITS SECTION (premium cards)
// ===================================================================
const BenefitsSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      Key Benefits of a Live Session
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Personalized Review",
          icon: Users,
          desc: "Your specific grades, personal statement, and documents are reviewed in real-time.",
          color: COLORS.primary,
        },
        {
          title: "Career Mapping",
          icon: Briefcase,
          desc: "We map your profile to specific degree programs and professional paths.",
          color: COLORS.primary,
        },
        {
          title: "Instant Clarification",
          icon: Zap,
          desc: "Get immediate answers and feedback on all your doubts without back-and-forth delays.",
          color: COLORS.secondary,
        },
        {
          title: "Secure & Private",
          icon: Lock,
          desc: "Sessions are conducted securely and your information remains confidential.",
          color: COLORS.secondary,
        },
      ].map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div
            key={index}
            className="rounded-3xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
            style={{
              backgroundColor: "#FFFFFF",
              borderLeft: `4px solid ${benefit.color}`,
              borderTop: `1px solid ${COLORS.borderSoft}`,
              borderRight: `1px solid ${COLORS.borderSoft}`,
              borderBottom: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
              }}
            />
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md mb-4"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${benefit.color}40`,
              }}
            >
              <Icon size={26} style={{ color: benefit.color }} />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              {benefit.title}
            </h3>
            <p className="text-sm" style={{ color: COLORS.textGray }}>
              {benefit.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 3) BOOKING PROCESS SECTION
// ===================================================================
const BookingProcessSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      The Seamless Booking Process
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        {
          num: 1,
          title: "Select Service",
          desc: "Choose the relevant service on the main page.",
          icon: Globe,
        },
        {
          num: 2,
          title: "Select Time",
          desc: "Choose your preferred date and time from available expert slots.",
          icon: Calendar,
        },
        {
          num: 3,
          title: "Payment",
          desc: "Complete the booking via our secure payment gateway.",
          icon: Lock,
        },
        {
          num: 4,
          title: "Connect Live",
          desc: "Join the session on Zoom/Google Meet at the scheduled time.",
          icon: Smartphone,
        },
      ].map((step, index) => {
        const Icon = step.icon;
        return (
          <div
            key={index}
            className="text-center p-5 rounded-2xl border-2 h-full"
            style={{ borderColor: COLORS.primary + "30", backgroundColor: "#FFFFFF" }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full mx-auto mb-3 text-sm font-bold"
              style={{ backgroundColor: COLORS.primary, color: "white" }}
            >
              {step.num}
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 rounded-2xl mx-auto mb-3"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.secondary}30`,
              }}
            >
              <Icon size={22} style={{ color: COLORS.secondary }} />
            </div>
            <h4
              className="text-lg font-bold mb-1"
              style={{ color: COLORS.primaryDark }}
            >
              {step.title}
            </h4>
            <p className="text-sm mt-1" style={{ color: COLORS.textGray }}>
              {step.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 4) NEXT STEP SECTION (CTA → Taleemi Announcements)
// ===================================================================
const NextStepSection = () => (
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
        Your Next Step in the Journey
      </h2>

      <p
        className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6"
        style={{ color: COLORS.textGray }}
      >
        After your session, stay connected with new scholarships, admissions,
        opportunities, and career updates through our{" "}
        <strong>Taleemi Announcements</strong>.
      </p>

      <NavLink
        to="/service/announcement"
        className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.primary,
          color: "white",
        }}
      >
        Explore Taleemi Announcements
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
export default function OnlineSessionPage() {
  return (
    <ServiceLayout
      title="Book Online Session"
      subtitle="Personalized Guidance"
    >
      <HeroSection />
      <BenefitsSection />
      <BookingProcessSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
