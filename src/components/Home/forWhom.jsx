import React from "react";
import video1 from "../../assets/video/1.mp4";

export default function ForWhom() {

  const COLORS = {
    primary: '#1E3A8A',
    secondary: '#f2592d',
    backgroundLight: '#f4fcff',
    primary2: '#11253e'
  };

  // The categories and their descriptions
  const categoriesData = [
    {
      title: "Class 10-12 Students",
      description: "Choose subjects, tracks and fields confidently",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.902a48.627 48.627 0 018.232-4.408 60.426 60.426 0 00-.491-6.347m-15.482 0A50.573 50.573 0 0012 13.489c2.324 0 4.613-.684 6.504-1.952m-15.482 0zM4.785 11.167a1.536 1.536 0 01.491-3.692C6.182 6.136 7.66 5.232 9 5.232c1.34 0 2.818.904 3.723 2.243.344.512.634 1.144.785 1.764m-12.441-.12C2.871 11.235 2 12.28 2 13.5c0 1.22.871 2.265 2.115 2.333m15.77-4.8c1.244-.068 2.115-1.113 2.115-2.333 0-1.22-.871-2.265-2.115-2.333m-15.77 0C2.871 11.235 2 12.28 2 13.5c0 1.22.871 2.265 2.115 2.333m15.77-4.8c1.244-.068 2.115-1.113 2.115-2.333 0-1.22-.871-2.265-2.115-2.333" />
        </svg>
      ),
    },
    {
      title: "University Students",
      description: "Solve academic, administrative, and credit issues",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21V12m0 0a3 3 0 013-3h.75a3 3 0 013 3m-9 0v9m3-9h.75a3 3 0 003-3H6.75M19.984 10.16A4.5 4.5 0 0018 9.75h-2.25a3 3 0 00-3 3v6.75m3-6.75v-3C15.75 6.22 14.77 5.165 13.525 5.05A6.25 6.25 0 0116.3 3.5m-3.525 1.55a6.25 6.25 0 00-.811-1.686 4.5 4.5 0 01-1.396 3.193C9.4 6.75 8.25 7.5 7.125 7.5h.75m7.5 0v-.916m-7.5 0h-.75" />
        </svg>
      ),
    },
    {
      title: "Graduates",
      description: "Plan further studies, exams, or job pathways",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.181A1.652 1.652 0 006.016 21a2.005 2.005 0 01-1.415-.585L2.985 19.644zM18.905 9.684a2.25 2.25 0 00-1.616-.677c-1.353 0-2.671.655-3.654 1.835-.742.92-1.322 2.008-1.733 3.155.079.141.154.282.227.424 1.483 2.909 1.483 6.371 0 9.28m-.484-6.386a40.057 40.057 0 00-1.712-.663 3.25 3.25 0 00-2.148-.52c-.177 0-.355.01-.532.031-.194.021-.387.051-.578.092m10.158-10.982C17.027 3.336 13.5 2.5 10.5 2.5a8.25 8.25 0 00-6.19 2.5M16.023 9.348H4.992v-.001m0 0l3.181 3.181A1.652 1.652 0 006.016 21a2.005 2.005 0 01-1.415-.585L2.985 19.644zM18.905 9.684a2.25 2.25 0 00-1.616-.677c-1.353 0-2.671.655-3.654 1.835-.742.92-1.322 2.008-1.733 3.155.079.141.154.282.227.424 1.483 2.909 1.483 6.371 0 9.28m-.484-6.386a40.057 40.057 0 00-1.712-.663 3.25 3.25 0 00-2.148-.52c-.177 0-.355.01-.532.031-.194.021-.387.051-.578.092" />
        </svg>
      ),
    },
    {
      title: "Working Professionals",
      description: "Align education with skills and career growth",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.5V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v7.5m18 0v-3.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v3.375m18 0H2.25M21 13.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-4.5" />
        </svg>
      ),
    },
  ];

  return (
    <section

      className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EFF6FF] to-white"
      id="for-whom"
    >
      <div className="max-w-6xl mx-auto">

        {/* TOP SECTION: Heading and Description */}
        <div
          className="p-4 md:p-8 mb-8 md:mb-12 text-center border-b border-gray-300 md:border-none"
          style={{ color: COLORS.primary }}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4"
          >
            Who Is TaleemiGuide For?
          </h2>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ opacity: 0.8, color: COLORS.primary2 }}
          >
            TaleemiGuide is your trusted partner for making informed academic and career decisions. Whether you are a student, graduate, or working professional, we provide clarity, direction, and expert solutions tailored to your journey.
          </p>
        </div>
        <div className="hidden md:block w-full h-[1px] bg-gray-300 mx-auto max-w-5xl mb-12" />


        {/* BOTTOM SECTION: Video Placeholder & Categories Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">

          {/* LEFT COLUMN: Video Placeholder */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center p-4 md:p-8 min-h-[300px] lg:min-h-[500px] border-b border-gray-300 lg:border-none"
          >
            <video
              src={video1}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="https://via.placeholder.com/700x500.png?text=Loading+Video"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* RIGHT COLUMN: Categories Grid */}
          <div
            className="w-full lg:w-1/2 grid grid-cols-1 gap-6 md:gap-8 p-4 md:p-8"
          >
            {categoriesData.map((category, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border-b border-gray-100 last:border-b-0"
              >
                <div
                  className="flex-shrink-0 p-3 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: COLORS.secondary + '20',
                    color: COLORS.secondary
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.primary }}>
                    {category.title}
                  </h3>
                  <p className="text-base" style={{ color: COLORS.primary2, opacity: 0.8 }}>
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