import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowLeft, ChevronRight, Zap } from "lucide-react";

// THEME
const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
};

// SERVICE LIST
const serviceData = [
  {
    id: "service-1",
    title: "Class 10 Guidance",
    path: "/service/class-10-guidance",
    subtitle: "Your First Major Academic Decision Starts Here.",
  },
  {
    id: "service-2",
    title: "Class 12 Guidance",
    path: "/service/class-12-guidance",
    subtitle: "Your Path After Class 12 — Clear, Informed, and Future-Ready.",
  },
  {
    id: "service-3",
    title: "Career Assessment Test",
    path: "/service/career-assessment",
    subtitle: "Know Yourself Before Choosing a Degree.",
  },
  {
    id: "service-4",
    title: "Subject Classification ( 1000+ Subjects Classified )",
    path: "/service/subject-classification",
    subtitle: "Understand Hierarchy of the Fileds — Clearly and Accurately.",
  },
  {
    id: "service-5",
    title: "University Program Finder",
    path: "/service/university-program-finder",
    subtitle:
      "Search. Compare. Decide — Every BS, MS & PhD Program in One Place.",
  },
  {
    id: "service-6",
    title: "University Graduates Guidance",
    path: "/service/university-graduates-guidance",
    subtitle:
      "Your Partner for Every Academic Challenge.",
  },
  {
    id: "service-7",
    title: "Working Professionals Guidance",
    path: "/service/working-professional-guidance",
    subtitle: "Align Your Education, Skills & Career Goals.",
  },
  {
    id: "service-8",
    title: "Taleemi Advice",
    path: "/service/taleemi-advice",
    subtitle:
      "Fast-Track Help for Academic & Career Challenges — Your 1122 for Education.",
  },
  {
    id: "service-9",
    title: "Book Online Session",
    path: "/service/online-session",
    subtitle:
      "Personalized One-on-One Guidance for Students, Parents & Professionals.",
  },
  {
    id: "service-10",
    title: "Taleemi Announcements",
    path: "/service/announcement",
    subtitle:
      "Scholarships, Admissions, Internships & Opportunities — All in One Place.",
  },
];

// AUTO SCROLL
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

// SIDEBAR
const ServiceSidebar = () => {
  const location = useLocation();

  return (
    <nav
      className="sticky top-[6rem] hidden lg:block rounded-3xl overflow-hidden"
      style={{
        backgroundColor: "white",
        border: `1px solid ${COLORS.softBorder}`,
        boxShadow: "0 24px 60px rgba(15,23,42,0.08)",
      }}
    >
      {/* HEADER */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.35))",
            }}
          >
            <Zap size={18} color={COLORS.secondary} />
          </div>

          <div>
            <h3
              className="text-base font-extrabold"
              style={{ color: COLORS.primaryDark }}
            >
              Guidance Navigator
            </h3>
            <p className="text-xs" style={{ color: COLORS.textGray }}>
              All guidance, one place
            </p>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <ul className="px-3 py-4 space-y-1.5">
        {serviceData.map((service) => {
          const isActive = location.pathname === service.path;

          return (
            <li key={service.id}>
              <NavLink
                to={service.path}
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all"
                style={{
                  backgroundColor: isActive
                    ? COLORS.lightBackground
                    : "transparent",
                  color: isActive ? COLORS.primaryDark : COLORS.textGray,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? COLORS.primary : "transparent",
                  }}
                />
                <span className="flex-1 truncate">{service.title}</span>
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                  color={isActive ? COLORS.primary : COLORS.secondary}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// MOBILE TABS
const ServiceMobileTabs = () => {
  const location = useLocation();

  return (
    <div className="lg:hidden mt-4">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6">
        {serviceData.map((service) => {
          const isActive = location.pathname === service.path;
          return (
            <NavLink
              key={service.id}
              to={service.path}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap"
              style={{
                backgroundColor: isActive ? COLORS.primary : "white",
                color: isActive ? "white" : COLORS.textGray,
                borderColor: COLORS.softBorder,
              }}
            >
              {service.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

// CURRENT SERVICE
const useCurrentService = () => {
  const location = useLocation();
  return serviceData.find((s) => s.path === location.pathname) || null;
};

// MAIN LAYOUT
const ServiceLayout = ({ children }) => {
  const currentService = useCurrentService();

  return (
    <div className="min-h-screen">
      <ScrollToTop />

      {/* responsive padding (same design) */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6">
        {/* header: stack nicely on small screens, same look */}
        <div className="flex gap-4 items-start">
          <NavLink to="/service" aria-label="Back to services">
            <ArrowLeft size={32} />
          </NavLink>

          <div className="min-w-0">
            <h1
              className="text-2xl sm:text-3xl font-extrabold"
              style={{ color: COLORS.primaryDark }}
            >
              {currentService?.title || "Our Guidance Services"}
            </h1>
            <p className="text-gray-500 max-w-2xl">
              {currentService?.subtitle}
            </p>
          </div>
        </div>

        <ServiceMobileTabs />

        {/* layout: preserve same sidebar/main ratio but prevent collapse */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          {/* Sidebar column */}
          <div className="hidden lg:block flex-[0_0_18%] min-w-[240px] max-w-[320px]">
            <ServiceSidebar />
          </div>

          {/* Main column */}
          <main className="flex-1 bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
