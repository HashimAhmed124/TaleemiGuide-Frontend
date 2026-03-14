import React, { useState } from "react";
import {
  BookOpen,
  User,
  Briefcase,
  GraduationCap,
  Grid,
  Search,
  Zap,
  MessageCircle,
  Bell,
  ChevronRight,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Info } from "lucide-react";
import {
  FaBook,
  FaGraduationCap,
  FaArrowCircleRight,
  FaGlobe,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

// --- UNIFIED COLOR PALETTE ---
const COLORS = {
  primary: "#0B1C3C",
  secondary: "#F97316",
  color: "#ff9c55ff",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#11253e",
  Dark: "#000",
};

// --- FILTER CATEGORIES ---
const FILTERS = [
  { id: "all", label: "All services" },
  { id: "school", label: "Class 10 & 12" },
  { id: "career", label: "Subject Suitability" },
  { id: "university", label: "University Journey" },
  { id: "professional", label: "Working Professional" },
  { id: "support", label: "Quick Support" },
];

// --- Service Data (now with categories + clean titles) ---
const serviceData = [
  {
    id: "service-1",
    title: "Class 10 Guidance",
    img: "/bg-6.jpg",
    description:
      "Your first major academic decision — choose the right stream after Matric.",
    icon: User,
    path: "/service/class-10-guidance",
    category: "school",
  },
  {
    id: "service-2",
    title: "Class 12 Guidance",
    img: "/bg-4.jpg",
    description: "Select the right specialization before entering university.",
    icon: GraduationCap,
    path: "/service/class-12-guidance",
    category: "school",
  },
  {
    id: "service-3",
    title: "Career Assessment Test",
    img: "/bg-5.jpg",
    description:
      "Discover your best-fit fields through a psychometric evaluation.",
    icon: Briefcase,
    path: "/service/career-assessment",
    category: "career",
  },
  {
    id: "service-4",
    title: "Subject Classification",
    img: "/bg-3.jpg",
    description: "Explore 1,000+ categorized subjects.",
    icon: Grid,
    path: "/service/subject-classification",
    category: "career",
  },
  {
    id: "service-5",
    title: "University Program Finder",
    img: "/bg-7.jpeg",
    description: "Search BS/MS/PhD programs in all Pakistani universities.",
    icon: Search,
    path: "/service/university-program-finder",
    category: "university",
  },
  {
    id: "service-6",
    title: "University Graduates Guidance",
    img: "/bg-8.jpeg",
    description:
      "Resolve academic and research challenges during university life.",
    icon: BookOpen,
    path: "/service/university-graduates-guidance",
    category: "university",
  },
  {
    id: "service-7",
    title: "Working Professionals Guidance",
    img: "/bg-9.jpg",
    description: "Align skills, education, and career growth.",
    icon: Briefcase,
    path: "/service/working-professional-guidance",
    category: "professional",
  },
  {
    id: "service-8",
    title: "Taleemi Advice",
    img: "/bg-10.jpg",
    description: "Fast-track help for any academic issue.",
    icon: Zap,
    path: "/service/taleemi-advice",
    category: "support",
  },
  {
    id: "service-9",
    title: "Book Online Session",
    img: "/bg-11.jpg",
    description: "1-on-1 counseling with expert advisors.",
    icon: MessageCircle,
    path: "/service/online-session",
    category: "support",
  },
  {
    id: "service-10",
    title: "Taleemi Announcements",
    img: "/bg-12.jpg",
    description: "Latest scholarships, admissions, and opportunities.",
    icon: Bell,
    path: "/service/announcement", // align with announcement page
    category: "support",
  },
];

// --- Subtle Background Pattern ---
const BackgroundPattern = ({ color }) => (
  <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <circle cx="10" cy="10" r="3" fill={color} opacity="0.1" />
          <circle cx="60" cy="60" r="3" fill={color} opacity="0.1" />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#pattern-circles)"
      />
    </svg>
  </div>
);

// --------------------------------------------------------------------------------------------------
// 1. Hero Section
// --------------------------------------------------------------------------------------------------

const ServiceHero = ({ onNavigate }) => {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      {/* DARK GRADIENT OVERLAY */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${COLORS.Dark}100, transparent)`,
        }}
      />

      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 group z-40">
          <button
            type="button"
            aria-label="More info"
            className="
        absolute top-4 right-4 z-30
        grid h-11 w-11 place-items-center
        rounded-full shadow-lg
        transition-transform duration-300
        hover:scale-110
      "
            style={{ backgroundColor: COLORS.secondary }}
          >
            <Info className="h-5 w-5 text-white" />
          </button>

          <div
            className="
        absolute -top-20 -right-24
        w-64 h-64 rounded-full
        scale-0
        transition-transform duration-700 ease-out
        group-hover:scale-[4] backdrop-blur-md
        z-10
      "
            style={{
              background: `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.color})`,
              boxShadow: `0 10px 20px -5px ${COLORS.secondary}100`,
            }}
          />
          <div
            className="
                pointer-events-none
                absolute top-5 right-24 z-20
                w-[90%] sm:w-[420px]
                translate-y-4 opacity-0
                transition-all duration-50   /* FAST EXIT */
                ease-out
                group-hover:translate-y-0
                group-hover:opacity-100
                group-hover:duration-700     /* SLOW ENTER */
                rounded-full"
          >
            <div
              className="rounded-full  top-10 
        w-128 h-120  p-4  z-10 bg-transparent"
              // style={{
              //   background:
              //     "linear-gradient(135deg, rgba(247, 132, 9, 0.96), rgba(15,23,42,0.96))",
              // }}
            >
              <div className="text-sm leading-relaxed space-y-3 text-white/85">
                <p className="font-bold text-2xl text-white -ml-5 ">
                  TaleemiGuide stands with you at every academic and career
                  decision.
                </p>
                <p className="font-medium">
                  Whether you’re choosing a subject, a degree program, seeking
                  admission, facing an academic challenge, planning a career
                  shift, or exploring national opportunities —
                  <strong> TaleemiGuide stands with you at every step.</strong>
                </p>

                <p
                  className=" ml-2 -mt-2 font-medium"
                  style={{ color: "white" }}
                >
                  Our services are backed by the combined expertise of
                  <strong>
                    educationists, senior academicians, industry specialists,
                    psychologists, and certified career coaches,{" "}
                  </strong>
                  ensuring guidance that is
                  <strong> personalized, accurate, and timely.</strong>
                </p>

                <p className="ml-7 -mt-2 font-medium">
                  {" "}
                  <strong>Unlock your potential with TaleemiGuide —</strong>
                </p>
                <p className="ml-15 -mt-2 font-medium">
                  <strong>your academic and career companion for life.</strong>
                </p>
                {/* <p className="font-medium ml-30 -mt-2" >
                  Whether you&apos;re choosing subjects, selecting a university degree,
                  dealing with academic challenges,
                </p>
                <p className="font-medium ml-40 -mt-2" >
                  planning a career shift, or exploring
                  national
                  <p className="font-medium ml-10 -mt-2" > opportunities,
                    TaleemiGuide stands with you at every step.</p>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="h-180 bg-transparent w-2 " />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="max-w-7xl mx-auto px-6 pb-10">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: COLORS.secondary }}
          >
            Our Comprehensive Services
          </p>

          <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight max-w-5xl">
            Your One-Window Platform for Academic & Career Guidance
          </h1>

          <button
            onClick={() => onNavigate("/service/taleemi-advice")}
            className="px-4 py-2.5 mt-6 text-sm font-semibold rounded-xl shadow-2xl
                     transition duration-300 ease-in-out transform hover:scale-[1.03]
                     flex items-center gap-2"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
              boxShadow: `0 10px 20px -5px ${COLORS.secondary}50`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.primary)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.secondary)
            }
          >
            Get Expert Guidance Now <Zap size={18} />
          </button>
        </div>
      </div>

      {/* <div
              className="text-lg leading-relaxed space-y-4 mb-8"
              style={{ color: COLORS.textGray }}
            >
              <p className="font-medium" style={{ color: COLORS.primaryDark }}>
                Whether you&apos;re choosing subjects, selecting a university degree,
                dealing with academic challenges, planning a career shift, or exploring
                national opportunities,&nbsp;
                <strong>TaleemiGuide stands with you at every step.</strong>
              </p>

              <p>
                Our services are backed by the combined expertise of educationists,
                senior academicians, industry specialists, psychologists, and certified
                career coaches, ensuring guidance that is&nbsp;
                <strong>personalized, accurate, and timely.</strong>
              </p>
            </div> */}

      {/* RIGHT: Icon Cluster Visual */}
      {/* <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center relative shadow-2xl"
              style={{
                backgroundColor: COLORS.primary + '10',
                border: `4px solid ${COLORS.primary + '20'}`,
              }}
            >
              <MessageCircle
                size={80}
                className="z-10 absolute transition-all duration-500 hover:scale-105"
                style={{ color: COLORS.primary }}
              />

              <GraduationCap
                size={48}
                className="absolute top-8 left-10 md:top-12 md:left-12 z-20 p-2 rounded-full shadow-lg"
                style={{ backgroundColor: 'white', color: COLORS.secondary }}
              />
              <Briefcase
                size={48}
                className="absolute bottom-8 right-10 md:bottom-12 md:right-12 z-20 p-2 rounded-full shadow-lg"
                style={{ backgroundColor: 'white', color: COLORS.secondary }}
              />
              <Layers
                size={48}
                className="absolute bottom-8 left-10 md:bottom-12 md:left-12 z-20 p-2 rounded-full shadow-lg"
                style={{ backgroundColor: 'white', color: COLORS.secondary }}
              />
              <User
                size={48}
                className="absolute top-8 right-10 md:top-12 md:right-12 z-20 p-2 rounded-full shadow-lg"
                style={{ backgroundColor: 'white', color: COLORS.secondary }}
              />
            </div>
          </div>*/}
    </section>
  );
};

// --------------------------------------------------------------------------------------------------
// 2. Service Card
// --------------------------------------------------------------------------------------------------

const ServiceCard = ({ service, onNavigate }) => {
  const IconComponent = service.icon;
  const isSpecial = service.id === "service-8" || service.id === "service-9";
  const accentColor = isSpecial ? COLORS.secondary : COLORS.primary;
  const accentColorLight = isSpecial
    ? COLORS.secondary + "20"
    : COLORS.primary + "20";

  return (
    <div
      onClick={() => onNavigate(service.path)}
      className="
    relative overflow-hidden group cursor-pointer
    bg-white p-6 rounded-3xl
    transition-all duration-500
    transform hover:-translate-y-2
    shadow-xl hover:shadow-2xl
    flex flex-col
  "
      style={{
        minHeight: "270px",
        borderColor: accentColorLight,
        borderWidth: isSpecial ? "3px" : "1px",
        boxShadow: isSpecial
          ? `0 20px 40px -15px rgba(0,0,0,0.2)`
          : `0 10px 20px -8px rgba(0,0,0,0.08)`,
        "--tw-ring-color": accentColorLight,
      }}
    >
      <div
        className="
      absolute -top-3 -right-3
      w-10 h-10 rounded-full
      transition-transform duration-500 ease-out
      group-hover:scale-[28]
      z-0 
    "
        style={{
          background: `linear-gradient(295deg, ${COLORS.secondary}, ${accentColorLight})`,
        }}
      />

      {/* 🔹 Card Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4">
          <img
            src={service.img}
            className="relative w-full max-h-34 object-cover 
              transition-transform 
            duration-500 group-hover/image:scale-120 rounded-xl"
            alt=""
          />
          <div
            className="relative group/image 
          overflow-hidden
           rounded-t-3xl"
          >
            <div
              className="
          absolute left-1/2 bottom-0 
          transform -translate-x-1/2 translate-y-1/2
          p-4 rounded-full mb-3 
          inline-block
          shadow-xl transition-colors 
          duration-500
          group-hover/image:bg-white
        "
              style={{ backgroundColor: accentColor, color: "white" }}
            >
              <IconComponent size={28} />
            </div>
          </div>

          <h3
            className="
          text-xl font-extrabold mb-1 mt-3
          transition-colors duration-500
          group-hover:text-white"
            style={{ color: COLORS.primary }}
          >
            {service.title}
          </h3>

          <p
            className="
          text-xs font-semibold uppercase tracking-wide
          transition-colors duration-500
          group-hover:text-white/80
        "
            style={{ color: COLORS.textGray }}
          >
            {FILTERS.find((f) => f.id === service.category)?.label || "Service"}
          </p>
        </div>

        <div className="flex-grow">
          <p
            className="
          text-base leading-relaxed mb-4
          transition-colors duration-500
          group-hover:text-white/80
        "
            style={{ color: COLORS.textGray }}
          >
            {service.description}
          </p>
        </div>

        <div
          className="
        flex items-center text-sm font-bold mt-4
        transition-colors duration-500
        hover:text-white hover:underline
      "
          style={{ color: COLORS.secondary }}
        >
          View Service Details
          <ArrowRight
            size={18}
            className="ml-1 mt-0.5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------------------------------------
// 3. Core Services Grid (with filters + search)
// --------------------------------------------------------------------------------------------------

const CoreServicesSection = ({
  onNavigate,
  activeFilter,
  setActiveFilter,
  searchTerm,
  setSearchTerm,
}) => {
  const filteredServices = serviceData.filter((service) => {
    const matchesFilter =
      activeFilter === "all" || service.category === activeFilter;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      service.title.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <section
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ background: COLORS.lightBackground }}
    >
      <BackgroundPattern color={COLORS.primary} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h3
          className="text-3xl md:text-5xl font-extrabold mb-4 text-center"
          style={{ color: COLORS.primary }}
        >
          Our Core Guidance Services
        </h3>
        <p
          className="text-center max-w-4xl mx-auto text-xl mb-8 leading-relaxed font-medium"
          style={{ color: COLORS.textGray }}
        >
          These ten services are designed to support you at every critical
          junction of your academic and professional journey.
        </p>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition ${
                  activeFilter === filter.id
                    ? "shadow-md"
                    : "hover:bg-white hover:shadow-lg"
                }`}
                style={{
                  borderColor:
                    activeFilter === filter.id ? COLORS.secondary : "#E5E7EB",
                  backgroundColor:
                    activeFilter === filter.id ? COLORS.secondary : "white",
                  color:
                    activeFilter === filter.id ? "white" : COLORS.primaryDark,
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "#9CA3AF" }}
            />
            <input
              type="text"
              placeholder="Search a service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-full border  text-sm  focus:ring-1"
              style={{
                borderColor: "#00000025",
                color: COLORS.primaryDark,
                "--tw-ring-color": COLORS.primary,
              }}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onNavigate={onNavigate}
            />
          ))}
          {filteredServices.length === 0 && (
            <div
              className="col-span-full text-center text-sm"
              style={{ color: COLORS.textGray }}
            >
              No services match your search. Try a different keyword or filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------------------------------------
// 4. Taleemi Advice Section + Form
// --------------------------------------------------------------------------------------------------

const TaleemiAdviceForm = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(`${e.target.files.length} file(s) selected`);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <section
      className="relative w-full min-h-2xl py-16 px-6"
      style={{
        backgroundImage: "url(/image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#0B1C3C]/80 w-full h-full" />
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
        {/* LEFT IMAGE PANEL */}

        <div
          className="relative hidden md:flex items-end p-10"
          style={{
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />

          <div className="relative z-10 text-white">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
              style={{
                background: "rgba(249,115,22,0.18)",
                border: "1px solid rgba(249,115,22,0.35)",
              }}
            >
              TaleemiGuide • Quick Help
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
              Need Expert
              <span style={{ color: COLORS.secondary }}> Academic Advice</span>?
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <div className="rounded-xl bg-white/10 border border-white/10 p-3">
                <p className="text-xs text-slate-200">Fast Replies</p>
                <p className="text-sm font-semibold">Within 24–48 hrs</p>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/10 p-3">
                <p className="text-xs text-slate-200">Private</p>
                <p className="text-sm font-semibold">Secure & Confidential</p>
              </div>
            </div>

            <p className="mt-3 text-sm text-slate-200 max-w-sm">
              Share your situation and get personalized guidance from
              TaleemiGuide experts.
            </p>
          </div>
        </div>

        {/* FORM PANEL */}
        <div className="bg-white p-8 md:p-12">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: COLORS.primary }}
          >
            Submit Your Application
          </h3>

          <form className="space-y-5">
            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Name", "Email", "Phone"].map((item) => (
                <input
                  key={item}
                  type={
                    item === "Email"
                      ? "email"
                      : item === "Phone"
                      ? "tel"
                      : "text"
                  }
                  placeholder={item}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
                />
              ))}
            </div>

            {/* Category */}
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none">
              <option disabled selected>
                Select your category
              </option>
              <option>Class 10–12</option>
              <option>Undergraduate</option>
              <option>Graduate</option>
              <option>Working Professional</option>
            </select>

            {/* Query */}
            <textarea
              rows="4"
              placeholder="Describe your concern..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:outline-none"
            />

            {/* File Upload */}
            <div className="flex items-center gap-4">
              <label
                htmlFor="fileUpload"
                className="px-5 py-2 rounded-md cursor-pointer font-medium"
                style={{ background: COLORS.secondary, color: "white" }}
              >
                Upload File
              </label>
              <span className="text-sm text-gray-500">{fileName}</span>
              <input
                id="fileUpload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Submit */}
            <button
              className="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ background: COLORS.primary }}
            >
              Submit Query
            </button>
            <p className="text-xs text-gray-400 pt-1">
              By submitting, you agree to be contacted by TaleemiGuide for
              guidance purposes.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const TaleemiAdviceSection = () => {
  // const audienceList = [
  //   { title: 'School Students', icon: User },
  //   { title: 'College/Uni Students', icon: GraduationCap },
  //   { title: 'Graduates', icon: BookOpen },
  //   { title: 'Working Professionals', icon: Briefcase },
  // ];
  const Feature = [
    {
      icon: <FaBook className="text-orange-600 text-7xl mb-4" />,
      title: "10/12 Students",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaGraduationCap className="text-orange-600 text-7xl mb-4" />,
      title: "University Student",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaComputer className="text-orange-600 text-7xl mb-4" />,
      title: "Graduates",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: <FaGlobe className="text-orange-600 text-7xl mb-4" />,
      title: "Professionals",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section
      className="relative w-full pt-6 pb-8 px-4 items-center"
      style={{ background: "white" }}
    >
      <div className="max-w-8xl mx-auto space-y-3">
        <div className="text-center space-y-3">
          <div className="relative z-20 text-center space-y-3 mb-30">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2"
              style={{ color: COLORS.primary }}
            >
              Fast, Expert Help
              <br />
              Anytime You Need It
            </h2>
            <p className="font-medium text-xl">
              Don&apos;t let academic or career challenges hold you back.
            </p>
            <p
              className="text-sm lg:text-base mb-12 leading-relaxed"
              style={{ color: COLORS.primaryDark }}
            >
              TaleemiGuide provides precise, reliable, and&nbsp;
              <strong>personalized solutions</strong> to your queries so you can
              move forward without confusion. We are here to support every
              individual, including:
            </p>
          </div>

          <div
            className="text-center max-w-8xl mx-auto text-lg leading-relaxed space-y-0"
            style={{ color: COLORS.textGray }}
          >
            <div
              className="
   relative w-full bg-[#0B1C3C] text-white
    p-10 rounded-lg mx-auto shadow-lg
    -mt-24
    grid md:grid-cols-4 auto-rows-fr gap-6
  "
            >
              {Feature.map((feature, idx) => {
                const hasBgImage = idx % 2 === 1; // 1010 pattern
                const bgImageUrl =
                  idx === 1 ? "/bg-1.jpg" : idx === 3 ? "/bg-2.jpg" : null;

                return (
                  <div
                    key={idx}
                    className="
            relative rounded-xl overflow-hidden
            flex flex-col items-center justify-center
            p-6 h-full min-h-[160px]
            text-center
          "
                    style={
                      hasBgImage
                        ? {
                            backgroundImage: `url(${bgImageUrl})`,
                            backgroundSize: "120% auto",
                            backgroundPosition: "center center",
                            // ✅ feels closer
                          }
                        : {}
                    }
                  >
                    {hasBgImage && (
                      <div className="absolute inset-0 bg-[#0B1C3C]/80 w-full h-full" />
                    )}

                    <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                      {feature.icon}
                      <h3 className="font-bold text-lg text-center">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// -----------------------------------------------------
// 5. Submission / Application Process Section
// -----------------------------------------------------

const SubmissionSection = () => {
  const steps = [
    {
      title: "Start Online Submission",
      desc: "Begin your application by filling out the online submission form with accurate academic and personal details.",
    },
    {
      title: "Submit The Form",
      desc: "Carefully review your information and submit the completed form for evaluation.",
    },
    {
      title: "Review The Submission",
      desc: "Our team reviews your submission to ensure completeness and relevance.",
    },
    {
      title: "Gather Necessary Documents",
      desc: "Prepare and upload any required academic or supporting documents.",
    },
    {
      title: "Interviewing Process",
      desc: "If required, you may be contacted for an online discussion or clarification.",
    },
    {
      title: "Last Decision",
      desc: "Receive expert guidance and a clear next-step recommendation.",
    },
  ];
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ background: COLORS.lightBackground }}
    >
      <BackgroundPattern color={COLORS.primary} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-bold text-4xl text-start -mt-5 text-[#0B1C3C] ">
          The Application Process
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-20 mt-20">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="font-bold text-orange-600 text-5xl mb-12">
                {index + 1}
              </div>
              <div className="gap-y-16">
                <h3 className="text-xl font-semibold text-black md-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 h-16">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-40">
          <div
            className="h-1 w-full rounded-full"
            style={{ backgroundColor: "#ff6600ff" }}
          />
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------------------------------------
// 6. Online Session Section
// --------------------------------------------------------------------------------------------------

const OnlineSessionSection = ({ onNavigate }) => (
  <section
    className="py-12 md:py-12"
    style={{ background: COLORS.lightBackground }}
  >
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Shell */}
      <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
        {/* Decorative soft glows */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${COLORS.secondary}25` }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full blur-3xl"
          style={{ background: `${COLORS.primary}18` }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12 lg:p-14">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <span
              className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold tracking-wide border"
              style={{
                color: COLORS.primary,
                borderColor: `${COLORS.primary}25`,
                background: `${COLORS.primary}08`,
              }}
            >
              1-on-1 Counseling • Online Session
            </span>

            <h3
              className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight"
              style={{ color: COLORS.primaryDark }}
            >
              Book a Personalized Online Session
            </h3>

            <p
              className="mt-4 text-lg md:text-xl font-semibold"
              style={{ color: COLORS.secondary }}
            >
              Fast Academic Solutions – Within in 24-48 hours
            </p>

            <p
              className="mt-5 leading-relaxed text-base md:text-xm"
              style={{ color: COLORS.textGray }}
            >
              The right advice at the right time can transform your academic or
              professional journey. Our experienced counselors help you overcome
              complex challenges, refine goals, and build a strong, realistic
              plan for success.
            </p>

            {/* Benefit Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personalized guidance",
                "Clear career direction",
                "Actionable solutions",
                "Confidence for your next steps",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl p-1 border
                   transition duration-300 hover:shadow-md"
                  style={{
                    borderColor: `${COLORS.primary}14`,
                    background: "white",
                  }}
                >
                  <div
                    className="h-10 w-10 rounded-xl flex items-center 
                    justify-center flex-shrink-0"
                    style={{ background: `${COLORS.secondary}10` }}
                  >
                    <Layers size={18} style={{ color: COLORS.secondary }} />
                  </div>

                  <div>
                    <p
                      className="text-base font-bold"
                      style={{ color: COLORS.primaryDark }}
                    >
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini info strip */}
            <div
              className="mt-8 -mb-10 flex flex-wrap items-center gap-3 rounded-2xl px-4 py-1 border"
              style={{
                borderColor: `${COLORS.secondary}35`,
                background: `${COLORS.secondary}15`,
              }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                Available on:
              </span>
              <span className="text-sm" style={{ color: COLORS.textGray }}>
                Zoom
              </span>
              <span className="text-sm" style={{ color: COLORS.textGray }}>
                •
              </span>
              <span className="text-sm" style={{ color: COLORS.textGray }}>
                Google Meet
              </span>
              <span className="text-sm" style={{ color: COLORS.textGray }}>
                •
              </span>
              <span className="text-sm" style={{ color: COLORS.textGray }}>
                Call
              </span>
            </div>
          </div>

          {/* RIGHT CTA CARD */}
          <div className="lg:col-span-5">
            <div
              className="h-full rounded-3xl p-7 md:p-9 border shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              style={{
                borderColor: `${COLORS.primary}12`,
                background: `linear-gradient(135deg, ${COLORS.primary}08, white)`,
              }}
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4">
                <div
                  className="h-24 w-24 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `${COLORS.secondary}18`,
                    border: `1px solid ${COLORS.secondary}25`,
                  }}
                >
                  <MessageCircle
                    size={40}
                    style={{ color: COLORS.secondary }}
                  />
                </div>

                <div>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: COLORS.textGray }}
                  >
                    Quick Booking
                  </p>
                  <p
                    className="text-2xl font-extrabold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    Ready to take the next step?
                  </p>
                </div>
              </div>

              {/* Trust bullets */}
              <div className="mt-6 space-y-3">
                {[
                  "Private & confidential session",
                  "Clear roadmap after the call",
                  "Follow-up guidance included",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-4 h-3 w-3 rounded-full"
                      style={{ background: COLORS.secondary }}
                    />
                    <p
                      className="mt-3 text-sm md:text-base"
                      style={{ color: COLORS.textGray }}
                    >
                      {t}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onNavigate("/service/online-session")}
                className="mt-14 w-full px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-[1.02] text-lg"
                style={{
                  backgroundColor: COLORS.secondary,
                  color: "white",
                  boxShadow: `0 14px 30px ${COLORS.secondary}35`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.secondary)
                }
              >
                Schedule Your Session Now
              </button>

              {/* Small note */}
              <p
                className="mt-4 text-xs md:text-sm"
                style={{ color: COLORS.textGray }}
              >
                You’ll receive confirmation details and instructions after
                booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------------------------------------
// MAIN PAGE
// --------------------------------------------------------------------------------------------------

export default function ServicePage({
  onNavigate = (path) => console.log("Navigating to:", path),
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <ServiceHero onNavigate={onNavigate} />
      <CoreServicesSection
        onNavigate={onNavigate}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <TaleemiAdviceSection />
      <TaleemiAdviceForm />
      <OnlineSessionSection onNavigate={onNavigate} />
      <SubmissionSection onNavigate={onNavigate} />

    </div>
  );
}
