import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, ClipboardList, Brain, FileText } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
const careerHero = "/bg-5.jpg";

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
const HeroSection = ({ onOpenRoadmap }) => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">
    {/* Full width small-height image */}
    <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
      <img
        src={careerHero}
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
        Know Yourself Before Choosing a Degree.
      </span>

      <h1
        className="text-5xl md:text-5xl font-extrabold 
          leading-tight mb-6"
        style={{ color: COLORS.primaryDark }}
      >
        Discover the Career That Truly Fits You
      </h1>

      <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
        In today’s world of thousands of colleges, hundreds of universities and
        thousands of programs, along with rapidly emerging fields, choosing the
        right specialization is one of the hardest decisions students and
        parents face. <br />
        <span className="font-bold">
          The good news? TaleemiGuide has made it easier, clearer, and
          scientific.
        </span>{" "}
        <br />
        Our Career Assessment Test is based on internationally recognized
        models, validated methodologies, and years of experience in psychology,
        counseling, and academic advising. The test helps you understand who you
        are, what career paths match your personality, interests, values, and
        strengths, and which academic direction fits your future. <br />
        Whether you are a Matric student choosing a stream, an intermediate
        student selecting a BS degree, a university student reconsidering your
        field, or a professional exploring career transitions — this test gives
        you the clarity you need.
      </p>
      <div className="flex flex-wrap justify-center gap-4"></div>

      <NavLink
        to="#"
        className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
          color: "white",
          boxShadow: "0 12px 25px rgba(253, 153, 2, 0.45)",
        }}
      >
        Click Here to Start
      </NavLink>
    </div>
  </section>
);
// --------------------------------------------------------------------
// 2) WHY TAKE TALEEMIGUIDE’S CAREER ASSESSMENT TEST?
// --------------------------------------------------------------------
const WhyTakeSection = () => (
  <section className="py-14 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-6 ">
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          Why Take TaleemiGuide’s Career Assessment Test?
        </h2>
        <div
          className="w-193 h-1 rounded-full mb-5"
          style={{ backgroundColor: COLORS.secondary }}
        />
        <p
          className="text-sm sm:text-base max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          A scientifically designed assessment that helps you make confident,
          informed academic and career decisions.
        </p>
      </div>

      {/* CONTENT CARDS */}
      <div className="space-y-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-lg transition">
          <h3
            className="text-base sm:text-lg font-semibold mb-2 flex items-start gap-2"
            style={{ color: COLORS.primaryDark }}
          >
            <span className="text-lg">✔</span>
            In-Depth Personality & Interest Analysis
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Understand your personality type, work preferences, motivations, and
            natural strengths — and match them with real career options.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-lg transition">
          <h3
            className="text-base sm:text-lg font-semibold mb-2 flex items-start gap-2"
            style={{ color: COLORS.primaryDark }}
          >
            <span className="text-lg">✔</span>
            Scientifically Designed & Expert-Backed
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Created by psychologists, career counselors, educationists, and
            industry experts using internationally recognized career frameworks.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-lg transition">
          <h3
            className="text-base sm:text-lg font-semibold mb-3 flex items-start gap-2"
            style={{ color: COLORS.primaryDark }}
          >
            <span className="text-lg">✔</span>
            Personalized Career Report
          </h3>

          <p
            className="text-sm sm:text-base leading-relaxed mb-3"
            style={{ color: COLORS.textGray }}
          >
            Receive a comprehensive, easy-to-understand report including:
          </p>

          <ul
            className="list-disc list-inside space-y-1 text-sm sm:text-base"
            style={{ color: COLORS.textGray }}
          >
            <li>Your top interests</li>
            <li>Strengths & aptitude</li>
            <li>Personality traits</li>
            <li>Best-fit career paths</li>
            <li>Recommended academic fields</li>
            <li>Suitable degree programs</li>
            <li>
              Guidance through TaleemiGuide’s Subject Classification (1000+
              subjects)
            </li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-lg transition">
          <h3
            className="text-base sm:text-lg font-semibold mb-2 flex items-start gap-2"
            style={{ color: COLORS.primaryDark }}
          >
            <span className="text-lg">✔</span>
            Easy for All Levels
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Written in simple language — ideal for students from Matric to
            Post-Graduation and early-career professionals.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) HOW IT WORKS SECTION
// --------------------------------------------------------------------
const HowItWorksSection = () => (
  <section className="py-10 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-12 ">
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          How It Works
        </h2>
        <div
          className="w-50 h-1 rounded-full mb-5"
          style={{ backgroundColor: COLORS.secondary }}
        />
        <p
          className="text-sm sm:text-base max-w-2xl"
          style={{ color: COLORS.textGray }}
        >
          A simple, step-by-step process designed for clarity and ease.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mb-14">
        {/* Vertical line */}
        <div
          className="absolute left-4 sm:left-5 top-0 bottom-0"
          style={{
            borderLeft: `2px dashed ${COLORS.borderSoft}`,
          }}
        />

        <div className="space-y-8">
          {/* STEP CARD */}
          {[
            {
              step: 1,
              title: "Sign Up",
              text: "Login at TaleemiGuide.com to get started.",
            },
            {
              step: 2,
              title: "Complete the Test",
              content: (
                <>
                  <p className="mb-2">
                    Click Career Assessment Test and begin.
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Takes 30–45 minutes</li>
                    <li>You may pause anytime</li>
                    <li>Your responses auto-save</li>
                  </ul>
                </>
              ),
            },
            {
              step: 3,
              title: "Receive Your Report",
              text: "Your personalized career report will be available on your dashboard within 24 hours.",
            },
            {
              step: 4,
              title: "Discuss Your Results (Optional)",
              text: "If you want deeper insight, book an online session with our expert counselors who will walk you through your results and guide your next steps.",
            },
          ].map((item, i) => (
            <div key={i} className="relative flex gap-5 sm:gap-6">
              {/* Step Number */}
              <div className="flex flex-col items-center flex-none">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold z-10"
                  style={{
                    backgroundColor: COLORS.secondary,
                    color: "white",
                    border: `1px solid ${COLORS.borderSoft}`,
                    boxShadow: "0 6px 14px rgba(15,23,42,0.12)",
                  }}
                >
                  {item.step}
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl px-5 py-4 sm:px-6 sm:py-5 shadow-md hover:shadow-lg transition"
                style={{
                  backgroundColor: COLORS.surface,
                }}
              >
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
                  {item.text || item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="w-full py-6 md:py-10 flex justify-center">
  <div class="w-full max-w-5xl px-4 mx-auto flex justify-center">
    <NavLink
      to="#"
      className="flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
        color: "white",
        boxShadow: "0 12px 25px rgba(253, 153, 2, 0.45)",
      }}
    >
      Click Here to Start
    </NavLink>
  </div>
</div>

      {/* CTA */}
      <div className="rounded-3xl px-8 py-8 text-center bg-white shadow-xl">
        <p
          className="text-sm sm:text-lg font-semibold leading-relaxed max-w-3xl mx-auto"
          style={{ color: COLORS.primaryDark }}
        >
          Take the Career Assessment Test, unlock your strengths, discover your
          ideal field,
          <br className="hidden sm:block" />
          and choose your future with confidence.
        </p>
      </div>
    </div>
  </section>
);

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
            Once you know your best-fit fields, the next step is to explore all
            subjects available in Pakistan — traditional and emerging — through
            our Subject Classification system.
          </p>

          <NavLink
            to="/service/subject-classification"
            className="inline-flex items-center gap-3 px-7 py-3 text-base sm:text-sm font-semibold rounded-xl transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #f68003ff 0%, #f75307ff 100%)",
              color: "white",
              boxShadow: "0 12px 25px rgba(253, 153, 2, 0.45)",
            }}
          >
            Explore Subject Classification
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);
// --------------------------------------------------------------------
// MAIN PAGE COMPONENT
// --------------------------------------------------------------------
export default function CareerAssessmentTestPage() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyTakeSection />
      <HowItWorksSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
