import React from "react";
import { motion } from "framer-motion";
import ProcessImg from "../../assets/bg-images/sample2.png";

export default function TheProcess() {
  const steps = [
    { number: 1, title: "Login", desc: "Access your personalized dashboard." },
    {
      number: 2,
      title: "Submit Query",
      desc: "Share your academic challenge with documents if needed.",
    },
    {
      number: 3,
      title: "Get Solutions",
      desc: "Receive clear, actionable expert guidance immediately.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#EFF6FF] to-[#FDF6E3] py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-[#3B82F6]/20 rounded-full top-10 left-20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-[#F97316]/20 rounded-full bottom-10 right-20 blur-3xl"
        />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 30, 0],
              x: [0, Math.random() * 30, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        {/* Left: Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={ProcessImg}
            alt="Process"
            className="w-full h-auto max-w-md md:max-w-xl object-contain rounded-3xl"
          />
        </motion.div>

        {/* Right: Steps */}

        <div className="flex-1 space-y-4 md:space-y-6">
          <h3 className="text-[#F97316] font-semibold text-lg md:text-base tracking-wide">
            The Process
          </h3>
          <h2 className="text-[#1E3A8A] text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold leading-snug">
            Quality Guidance Made Simple
          </h2>
          <p className="text-[#4B5563] text-lg md:text-xl max-w-lg">
            Getting the right advice has never been easier — just follow 3
            simple steps and start your journey with TaleemiGuide.
          </p>

          <div className="relative mt-8 space-y-6 md:space-y-8">
            {/* Vertical connecting line */}
            <div className="absolute top-6 left-8 h-full w-1 bg-gradient-to-b from-[#1E3A8A] to-[#F97316] rounded"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 group cursor-pointer relative z-10"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Number Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1E3A8A] text-white font-bold text-xl shadow-lg transition-all duration-500 group-hover:bg-[#F97316] group-hover:shadow-2xl">
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <h4 className="text-[#1E3A8A] text-2xl font-semibold transition-colors duration-500 group-hover:text-[#F97316]">
                    {step.title}
                  </h4>
                  <p className="text-[#6B7280] text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 w-full h-32"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#FDF6E3"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,144C672,149,768,171,864,165.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
