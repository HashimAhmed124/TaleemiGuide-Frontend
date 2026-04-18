import React from "react";
import {
  User,            
  FlaskConical,    
  Brain,           
  Network,         
  Search,          
  Landmark,        
  Briefcase,       
  MessageSquare,   
  CalendarCheck,   
  BellRing,        
} from "lucide-react";

// Define consistent colors
const COLORS = {
    primary: '#1E3A8A', 
    secondary: '#F97316', 
    textGray: '#4B5563',
    lightBackground: '#EFF6FF',
};

// Services data with highly specific icons
const services = [
  {
    icon: <User size={32} />, 
    title: "Class 10 Guidance",
    desc: "Future Begins Here — Choose the Right Path After Class 10 with Confidence.",
    link: "#",
  },
  {
    icon: <FlaskConical size={32} />, 
    title: "Class 12 Guidance",
    desc: "Decide Smart — The Right Choice After Class 12 Defines Success.",
    link: "#",
  },
  {
    icon: <Brain size={32} />, 
    title: "Career Assessment Test",
    desc: "One Platform, Thousands of Subjects - Find Exactly Where You Fit.",
    link: "#",
  },
  {
    icon: <Network size={32} />, 
    title: "Subject Classification",
    desc: "Find Your Place in the World of Knowledge — Simplified Subject Classification.",
    link: "#",
  },
  {
    icon: <Search size={32} />, 
    title: "University Program Finder",
    desc: "Search. Compare. Decide — Every BS, MS & PhD Program in One Place.",
    link: "#",
  },
  {
    icon: <Landmark size={32} />, 
    title: "University Graduates",
    desc: "Your Academic Partner — Simplifying the Complexities of Higher Education.",
    link: "#",
  },
  {
    icon: <Briefcase size={32} />, 
    title: "Working Professionals",
    desc: "Helping Professionals - Connect Education, Experience, and Ambition.",
    link: "#",
  },
  {
    icon: <MessageSquare size={32} />, 
    title: "Taleemi Advice",
    desc: "A Quick-Response Service Providing Fast-Track Educational Solutions — Like 1122 for Students.",
    link: "#",
  },
  {
    icon: <CalendarCheck size={32} />,
    title: "Book Online Session",
    desc: "Personalized Academic & Career Guidance, Anytime, Anywhere.",
    link: "#",
  },
  {
    icon: <BellRing size={32} />, 
    title: "Taleemi Announcements",
    desc: "Stay updated with the latest academic opportunities and news.",
    link: "#",
  },
];

export default function OurServices() {
  return (
    // Updated background for better consistency with the previous section's light gradient
    <section 
      className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)` }}
    >
      
      {/* Header - max-w-2xl on mobile, max-w-4xl on large screens */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h3 className="font-semibold text-base sm:text-lg" style={{ color: COLORS.secondary }}>
          Our Services
        </h3>
        {/* Responsive Heading Size: text-2xl on mobile, text-4xl on large screens */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2" style={{ color: COLORS.primary }}>
          Explore How TaleemiGuide Can Help You
        </h2>
        {/* Responsive Paragraph Size */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto" style={{ color: COLORS.textGray }}>
          TaleemiGuide is your one-window platform for educational and career guidance — from Class 10 to post-graduation and into professional life. Whether you’re choosing subjects, exploring scholarships, or planning your career path, we provide smart, timely, and reliable support at every step.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* GRID COLUMNS: 1 (mobile) -> 2 (sm) -> 3 (md) -> 5 (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.link}
              className="group block"
            >
              <div 
                className="bg-white h-full rounded-2xl shadow-xl p-6 text-center flex flex-col items-center justify-between gap-4 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border-b-4 border-transparent"
                // Use inline style for consistent hover border color
                onMouseEnter={e => e.currentTarget.style.borderColor = COLORS.primary}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
              >
                
                <div 
                  className="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl shadow-md transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: COLORS.primary }} 
                >
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col items-center justify-center">
                  <h3 
                    className="text-base lg:text-lg font-semibold mb-1 transition duration-300"
                    style={{ color: COLORS.primary }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm flex-grow" style={{ color: COLORS.textGray }}>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}