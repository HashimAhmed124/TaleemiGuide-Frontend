import React from "react";

import {
  School,
  GraduationCap,
  FileBadge,
  Briefcase,
} from "lucide-react";

export default function ForWhom() {
  
  const COLORS = {
    primary: '#1E3A8A', 
    secondary: '#f2592d', 
    backgroundLight: '#f4fcff', 
    primary2: '#11253e' 
  };

  const categoriesData = [
    { 
      title: "Class 10-12 Students", 
      description: "Choose subjects, tracks and fields confidently",
      icon: <School className="w-8 h-8" />
    },
    { 
      title: "University Students", 
      description: "Solve academic, administrative, and credit issues",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    { 
      title: "Graduates", 
      description: "Plan further studies, exams, or job pathways",
      icon: <FileBadge className="w-8 h-8" />,
    },
    { 
      title: "Working Professionals", 
      description: "Align education with skills and career growth",
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];

  return (
    <section 
      className="w-full py-4 md:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EFF6FF] to-white"
      id="for-whom"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div 
          className="p-2 md:p-3 mb-2 md:mb-2 text-center"
          style={{ color: COLORS.primary }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-3">
            Who Is TaleemiGuide For?
          </h2>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ opacity: 0.8, color: COLORS.primary2 }}
          >
            TaleemiGuide is your trusted partner for making informed academic and career decisions. Whether you are a student, graduate, or working professional, we provide clarity, direction, and expert solutions tailored to your journey.
          </p>
        </div>

        {/* GRID + VIDEO SECTION */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 mt-2">

          {/* LEFT COLUMN – VIDEO */}
          <div
  className="w-full lg:w-1/2 flex justify-center items-center p-3 md:p-6 min-h-[260px] lg:min-h-[450px]"
>
  <div className="w-full h-full rounded-3xl overflow-hidden">
    <iframe
      className="w-full h-full object-cover rounded-3xl"
      src="https://www.youtube-nocookie.com/embed/W8NsVWvfN0w?rel=0&modestbranding=1&showinfo=0"
      title="TaleemiGuide Intro"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


          {/* RIGHT COLUMN – CATEGORY GRID */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-4 md:gap-6 p-3 md:p-6">
            {categoriesData.map((category, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-3 rounded-xl border-b border-gray-100 last:border-b-0"
              >
                <div 
                  className="flex-shrink-0 p-2.5 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: COLORS.secondary + "20",
                    color: COLORS.secondary 
                  }}
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-0.5" style={{ color: COLORS.primary }}>
                    {category.title}
                  </h3>

                  <p className="text-sm" style={{ color: COLORS.primary2, opacity: 0.8 }}>
                    {category.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
