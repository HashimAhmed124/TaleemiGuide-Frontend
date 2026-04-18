import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

//---------------------------------------------------------------------
// 1) HERO SECTION ----------------------------------------------------
//---------------------------------------------------------------------
const HeroSection = () => (


  <section className="relative bg-gradient-to-br from-blue-50 via-white to-white">

    {/* Full width small-height image */}
    <div className="w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden">
      <img
        src="/bg-12.jpg"
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
        Scholarships, Admissions, Internships & Opportunities — All in One Place.
      </span>

      <h1 className="text-5xl md:text-5xl font-extrabold 
          leading-tight mb-6" style={{ color: COLORS.primaryDark }}>
        Taleemi Announcements
      </h1>

      <p className="text-xm text-gray-600 max-w-3xl mx-auto mb-10">
        TaleemiGuide continuously scans national and international platforms
        to bring you the latest academic and career opportunities. Whether
        you are a Matric student planning your future, an intermediate
        student exploring next steps, a university student seeking
        advancement, or a professional looking for growth, this page keeps
        you updated with timely and verified opportunities. Stay connected
        for scholarships, internships, admissions, competitions, workshops,
        training programs, conferences, and skill-building events — all
        curated to help you grow academically and professionally.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* <button
          onClick={onOpenRoadmap}
          className="px-6 py-2 rounded-xl bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 hover:scale-105 transition"
        >
          View Roadmap
        </button> */}

        <NavLink
          to="/roadmap/class-12"
          className="px-6 py-2 rounded-xl border border-[#11253e] text-[#11253e] font-semibold hover:bg-[#11253e] hover:text-white transition"
        >
          Explore Options
        </NavLink>
      </div>

    </div>
  </section>


);

//---------------------------------------------------------------------
// 2) OPPORTUNITIES FOR MATRIC & INTERMEDIATE -------------------------
//---------------------------------------------------------------------
const OpportunitiesMatricIntermediateSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold "
        style={{ color: COLORS.primaryDark }}
      >
        Opportunities for Matric & Intermediate Students
      </h2>
      <div
        className="w-182 h-1 rounded-full"
        style={{ backgroundColor: COLORS.secondary }}
      />
      <div
        className="rounded-3xl p-6 sm:p-7 mb-5"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Stay informed about:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Scholarship programs</li>
          <li>College admission announcements</li>
          <li>Talent &amp; academic competitions</li>
          <li>Short courses &amp; youth development programs</li>
          <li>National testing schedules</li>
          <li>Skill-based opportunities</li>
          <li>Olympiads and learning events</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          These opportunities help Class 10–12 students discover pathways early
          and make informed decisions about their next academic steps.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Click Here
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 3) OPPORTUNITIES FOR COLLEGE & UNIVERSITY STUDENTS -----------------
//---------------------------------------------------------------------
const OpportunitiesCollegeUniversitySection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          Opportunities for College &amp; University Students
        </h2>
        <div
          className="w-178 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        /></div>

      <div
        className="rounded-3xl p-6 sm:p-7 mb-5"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Find updated opportunities related to:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>BS, MS &amp; PhD admissions</li>
          <li>International and national scholarships</li>
          <li>Research internships &amp; fellowships</li>
          <li>Conferences and seminars</li>
          <li>Skill development programs</li>
          <li>Entrepreneurship &amp; innovation challenges</li>
          <li>Final-year project competitions</li>
          <li>Part-time and full-time internship openings</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Perfect for students looking to enhance their academic profiles, build
          experience, or open doors for higher studies.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Click Here
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 4) GENERAL & OPEN OPPORTUNITIES ------------------------------------
//---------------------------------------------------------------------
const GeneralOpenOpportunitiesSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          General &amp; Open Opportunities
        </h2>
        <div
          className="w-112 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>
      <div
        className="rounded-3xl p-6 sm:p-7 mb-5"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          This category covers valuable opportunities for learners,
          professionals, educators, and researchers, including:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Government-funded scholarships</li>
          <li>International exchange programs</li>
          <li>Online certifications &amp; skill tracks</li>
          <li>Job fairs &amp; career expos</li>
          <li>Training workshops</li>
          <li>Volunteering &amp; leadership programs</li>
          <li>Nationwide calls for proposals, competitions, and grants</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          These announcements support lifelong learners and those seeking
          advancement in any stage of their journey.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Click Here
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 5) STAY CONNECTED --------------------------------------------------
//---------------------------------------------------------------------
const StayConnectedSection = () => (
  <section className="py-12 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2
          className="text-2xl sm:text-3xl font-extrabold "
          style={{ color: COLORS.primaryDark }}
        >
          Stay Connected
        </h2>
        <div
          className="w-60 h-1 rounded-full"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>
      <div
        className="rounded-3xl p-7 sm:p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(249,115,22,0.12))",
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-5 max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          Stay informed with the latest updates, expert guidance, and
          personalized advice to help you apply confidently and successfully.
        </p>

        {/* Info points */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
              01
            </span>
            <span className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
              Join our mailing list
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
              02
            </span>
            <span className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
              Follow us on social media
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
              03
            </span>
            <span className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
              Check this page for new opportunities
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition">
            Join Mailing List
          </button>

          <button className="px-6 py-2.5 rounded-full border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition">
            Follow Us
          </button>
        </div>

        <p
          className="text-xs sm:text-sm mt-6 max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          TaleemiGuide helps you stay one step ahead by ensuring you never miss
          opportunities that can elevate your academic or professional journey.
        </p>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 6) YOUR COMPLETE JOURNEY WITH TALEEMIGUIDE -------------------------
//---------------------------------------------------------------------
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
        className="p-8 rounded-3xl relative overflow-hidden"
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
          className="text-2xl sm:text-3xl font-extrabold mb-4 text-center"
          style={{ color: COLORS.primaryDark }}
        >
          Your Complete Journey With TaleemiGuide
        </h2>


        {/* Journey visualization */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 mb-6 p-4 rounded-2xl bg-white"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.7)",
          }}
        >
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <NavLink
                to={step.path}
                className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition duration-200 ${step.path === "/service/announcement" ? "shadow-md" : ""
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
          className="text-sm sm:text-base leading-relaxed mb-6 font-bold text-center"
          style={{ color: COLORS.primary }}
        >
          TaleemiGuide walks with you at every step of your academic and
          professional life.
        </p>

        <button
          className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
            boxShadow: `0 10px 15px -3px ${COLORS.secondary}70`,
          }}
          onClick={() => console.log("Navigate to Live Announcements Feed")}
        >
          View All Opportunities Live
          <ArrowRight size={20} className="ml-3" />
        </button>
      </div>
    </section>
  );
};

//---------------------------------------------------------------------
// MAIN PAGE ----------------------------------------------------------
//---------------------------------------------------------------------
export default function TaleemiAnnouncement() {
  return (
    <ServiceLayout>
      <HeroSection />
      <OpportunitiesMatricIntermediateSection />
      <OpportunitiesCollegeUniversitySection />
      <GeneralOpenOpportunitiesSection />
      <StayConnectedSection />
      <JourneyAndCTASection />
    </ServiceLayout>
  );
}
