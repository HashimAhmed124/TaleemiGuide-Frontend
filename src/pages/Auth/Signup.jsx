import React, { useEffect, useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const COLORS = {
  primary: "#0B1C3C",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#11253e",
  Dark: "#000",
};

const slides = [
  {
    image: "/image.png",
    badge: "TaleemiGuide • Smart Learning",
    title: "Your Academic Journey ",
    subtitle: "Starts Here",
    description:
      "Get personalized guidance, career advice, and expert support — all in one place.",
    points: ["Career Guidance", "Expert Mentors"],
  },
  {
    image: "/bg-9.jpg",
    badge: "TaleemiGuide • Career Growth",
    title: "Make the Right\n",
    subtitle: "Career Decisions",
    description:
      "Explore fields, universities, and opportunities that truly fit your goals.",
    points: ["Verified Information", "Trusted Advice"],
  },
  {
    image: "/bg-10.jpg",
    badge: "TaleemiGuide • Future Ready",
    title: "Learn Today,\n",
    subtitle: "Lead Tomorrow",
    description: "Empowering students with clarity, confidence, and direction.",
    points: ["Student Focused", "Future Driven"],
  },
];

const SignUp = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  const onSubmit = (e) => {
    e.preventDefault();
    // For now (dummy auth phase), just redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* LEFT SLIDER SECTION */}
      <div
        className={`hidden lg:flex lg:w-1/2 relative bg-cover bg-center items-end p-8 xl:p-10
          transition-opacity duration-1000 ease-in-out
          ${isVisible ? "opacity-100" : "opacity-100"}
        `}
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />

        <div
          className={`relative z-10 text-white w-full max-w-xl
            transform transition-all duration-1000 delay-200 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide mb-4"
            style={{
              background: "rgba(249,115,22,0.18)",
              border: "1px solid rgba(249,115,22,0.35)",
            }}
          >
            {slide.badge}
          </span>

          <h2 className="text-3xl xl:text-4xl font-extrabold leading-tight whitespace-pre-line">
            {slide.title}
            <span style={{ color: COLORS.secondary }}>{slide.subtitle}</span>
          </h2>

          <p className="mt-3 text-sm text-slate-200 max-w-sm">{slide.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
            {slide.points.map((point, index) => (
              <div key={index} className="rounded-xl bg-white/10 border border-white/10 p-3">
                <p className="text-sm font-semibold text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIGN UP SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12 bg-[#0B1C3C]/10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8">
          {/* Brand */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-extrabold text-slate-900" style={{ color: COLORS.primaryDark }}>
              Create Account
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Join TaleemiGuide and shape your future
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={onSubmit}>
            {/* Full Name */}
            <div>
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-slate-700">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-semibold text-slate-700">Confirm Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
