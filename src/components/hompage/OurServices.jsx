// UPDATED OurServices — Navigation Fully Integrated

import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Added for routing support

import Icon10th from "./../../assets/Icons/10th.png";
import Icon12th from "./../../assets/Icons/12th.png";
import IconSubject from "./../../assets/Icons/career.png";
import IconCareer from "./../../assets/Icons/assesment.png";
import IconFinder from "./../../assets/Icons/finder.png";
import IconGraduates from "./../../assets/Icons/graduate.png";
import IconProfessionals from "./../../assets/Icons/suitcase.png";
import IconAdvice from "./../../assets/Icons/advice.png";
import IconSession from "./../../assets/Icons/session.png";
import IconAnnouncements from "./../../assets/Icons/announcement.png";

// Define consistent colors
const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
};

const services = [
  {
    icon: Icon10th,
    title: "Class 10 Guidance",
    desc: "Future Begins Here — Choose the Right Path After Class 10 with Confidence.",
    link: "/service/class-10-guidance",
  },
  {
    icon: Icon12th,
    title: "Class 12 Guidance",
    desc: "Decide Smart — The Right Choice After Class 12 Defines Success.",
    link: "/service/class-12-guidance",
  },
  {
    icon: IconCareer,
    title: "Career Assessment Test",
    desc: "One Platform, Thousands of Subjects - Find Exactly Where You Fit.",
    link: "/service/career-assessment",
  },
  {
    icon: IconSubject,
    title: "Subject Classification",
    desc: "Find Your Place in the World of Knowledge — Simplified Subject Classification.",
    link: "/service/subject-classification",
  },
  {
    icon: IconFinder,
    title: "University Program Finder",
    desc: "Search. Compare. Decide — Every BS, MS & PhD Program in One Place.",
    link: "/service/university-program-finder",
  },
  {
    icon: IconGraduates,
    title: "University Graduates",
    desc: "Your Academic Partner — Simplifying the Complexities of Higher Education.",
    link: "/service/university-graduates-guidance",
  },
  {
    icon: IconProfessionals,
    title: "Working Professionals",
    desc: "Helping Professionals - Connect Education, Experience, and Ambition.",
    link: "/service/working-professional-guidance",
  },
  {
    icon: IconAdvice,
    title: "Taleemi Advice",
    desc: "A Quick-Response Service Providing Fast-Track Educational Solutions — Like 1122 for Students.",
    link: "/service/taleemi-advice",
  },
  {
    icon: IconSession,
    title: "Book Online Session",
    desc: "Personalized Academic & Career Guidance, Anytime, Anywhere.",
    link: "/service/online-session",
  },
  {
    icon: IconAnnouncements,
    title: "Taleemi Announcements",
    desc: "Stay updated with the latest academic opportunities and news.",
    link: "/service/announcement",
  },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
      }}
    >
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h3
          className="font-semibold text-base sm:text-lg"
          style={{ color: COLORS.secondary }}
        >
          Our Services
        </h3>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2"
          style={{ color: COLORS.primary }}
        >
          Explore How TaleemiGuide Can Help You
        </h2>
        <p
          className="mt-4 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto"
          style={{ color: COLORS.textGray }}
        >
          At TaleemiGuide, we offer a one-window solution for students from
          Grade 10 to post-graduation, as well as for graduates and
          professionals seeking career growth or job transitions. Your success
          is our mission.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group block cursor-pointer"
              onClick={() => navigate(service.link)} // <-- CHANGED from <a href> to navigate()
            >
              <div
                className="bg-white h-full rounded-2xl shadow-xl p-6 text-center flex flex-col items-center justify-between gap-4 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border-b-4 border-transparent"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = COLORS.primary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full shadow-md transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: "#F5F1DC" }}
                >
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="flex-grow flex flex-col items-center justify-center">
                  <h3
                    className="text-base lg:text-lg font-semibold mb-1 transition duration-300"
                    style={{ color: COLORS.primary }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm flex-grow"
                    style={{ color: COLORS.textGray }}
                  >
                    {service.desc}
                  </p>
                </div>

                <span
                  className="mt-2 text-xs sm:text-sm font-medium transition-colors duration-300 flex items-center"
                  style={{ color: COLORS.secondary }}
                >
                  Explore <span className="ml-1">&#8594;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
