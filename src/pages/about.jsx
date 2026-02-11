import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaBook,
  FaGraduationCap,
  FaArrowCircleRight,
  FaGlobe,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { desc, select } from "framer-motion/client";

import { Play } from "lucide-react";

export default function AboutPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  const Feature = [
    {
      icon: <FaBook className="text-orange-600 text-7xl mb-4" />,
      title: "10/12 Students",
      description:
        "Get clear guidance to choose the right subjects, stream, and future pathway with confidence.",
    },
    {
      icon: <FaGraduationCap className="text-orange-600 text-7xl mb-4" />,
      title: "University Student",
      description:
        "Find direction for your major, skills, and career choices with expert-backed insights.",
    },
    {
      icon: <FaComputer className="text-orange-600 text-7xl mb-4" />,
      title: "Graduates",
      description:
        "Discover your best-fit career options and higher-education pathways as you step into professional life.",
    },
    {
      icon: <FaGlobe className="text-orange-600 text-7xl mb-4" />,
      title: "Professionals",
      description:
        "Plan smarter career moves, upskill effectively, and explore new opportunities with personalized guidance.",
    },
  ];

  const boardMembers = [
    {
      id: 1,
      name: "HidayatUllah Kasi",
      img: "/profile.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      designation: "CEO",
      email: "aouudhw",
      facebook: "asdasd",
      linkedin: "asdasd",
    },
    {
      id: 2,
      name: "Haabeel Kasi ",
      img: "/profile.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      designation: "Research & Development",
      email: "aouudhw",
      facebook: "asdasd",
      linkedin: "asdasd",
    },
    {
      id: 3,
      name: "Abiha Fatima ",
      img: "/profile.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      designation: "IT Dept",
      email: "aouudhw",
      facebook: "asdasd",
      linkedin: "asdasd",
    },
    {
      id: 4,
      name: "Muhammad Hashim",
      img: "/profile.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      designation: "IT Dept",
      email: "aouudhw",
      facebook: "asdasd",
      linkedin: "asdasd",
    },
    {
      id: 5,
      name: "Adan ",
      img: "/profile.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      designation: " Manager",
      email: "aouudhw",
      facebook: "asdasd",
      linkedin: "asdasd",
    },
    {
      id: 6,
      name: "fardeen ",
      img: "/profile.jpg",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      designation: " Manager",
      email: "aouudhw",
      facebook: "asdasd",
      linkedin: "asdasd",
    },
  ];
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState("benefit");
  const [selected, setSelected] = useState(boardMembers[0]);
  const tabs = [
    {
      id: "benefit",
      title: "Philosophy",
      img: "/bg-1.jpg",
      subheading: "why choose us?",
      desc: "Your future is built on the choices you make today. Every subject you select, every degree you pursue, and every career direction you consider shapes the life ahead of you. Because more than 70% of your adult life is spent at work, these decisions deserve care, clarity, and guidance. TaleemiGuide exists to walk with you on this journey — helping you choose with confidence, purpose, and self-belief.",
    },
    {
      id: "vision",
      title: "Vision",
      img: "/bg-2.jpg",
      subheading: "Our Vision",
      desc: "To ensure every student in Pakistan receives quick, reliable, and personalized educational guidance—right when they need it.",
    },
    {
      id: "Mission",
      title: "Mission",
      img: "/bg-2.jpg",
      subheading: "Our Vision",
      desc: "To support students, graduates, and professionals with trustworthy counselling, helping them make informed, meaningful choices about their education and careers.",
    },
  ];
  const current = tabs.find((tab) => tab.id === activeTab);
  return (
    <div className="w-full text-[#14223C]">
      {/* ================= MAIN SECTION ================= */}
      <div className="relative w-full h-[60vh] md:h-[75vh]">
        <img
          src="/pic.png"
          alt="about cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1C3C]/80"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            About Us
          </h1>

          <span
            className="bg-white h-1 rounded mt-0 inline-block transition-all duration-700"
            style={{ width: loaded ? "280px" : "0px" }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-white text-lg md:text-xl mt-4 max-w-2xl"
          >
            <br />
            <h2 className="text-xl sm:text-xl lg:text-2xl font-bold leading-tight mb-1">
              Who We Are
            </h2>
            Today’s education world is completely different from before. There
            are countless colleges, hundreds of degree options, and careers that
            change every year because of technology and AI. Most students feel
            confused — and the old style of guidance is no longer enough.
            <br />
            <br />
            <h2 className="text-xl sm:text-xl lg:text-xl font-bold leading-tight mb-1">
              This is exactly why TaleemiGuide exists.
            </h2>
            We offer a smart, modern platform that gives students clear,
            personalized, and trusted academic guidance. Whether you’re in Class
            10, choosing intermediate subjects, selecting a university degree,
            or planning your career growth, TaleemiGuide helps you make the
            right decisions with confidence.
          </motion.p>
        </div>
      </div>

      {/* ================= FEATURE SECTION ================= */}
      <section className="relative py-20 px-3 md:px-20 bg-[#FFDBBB]/100">
        <div className="w-full  bg-[#0B1C3C] text-white p-10 rounded-lg mx-auto shadow-lg -mt-28 grid md:grid-cols-4 gap-8">
          {Feature.map((feature, idx) => (
            <div key={idx} className="flex flex-col ">
              {feature.icon}
              <h3 className="font-bold text-lg mb-2 text-start">
                {feature.title}
              </h3>
              <p className="text-sm  max-w-md text-start overflow-hidden h-full justify-between">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-orange-600 mt-2 mb-1 text-xs hover:underline  flex items-end"
              >
                Learn More <FaArrowCircleRight className="inline ml-2 mb-0.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="relative w-full flex items-center justify-between max-w-7xl mx-auto gap-10">
          {/* Text side */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 flex-col"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl leading-relaxed"
          >
            TaleemiGuide is dedicated to helping students discover their true
            potential. We connect students with expert counselors, provide
            accurate career insights, and empower them to make informed
            decisions about their academic journey.
          </motion.p>

          <img
            src="/pic.png"
            alt="Diagonal"
            className="w-full h-120 object-cover -mt-20 -mb-20 -mr-30 b"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
          />
          <div
            className="absolute inset-0 bg-[#0B1C3C]/80 w-[56.3%] h-120 left-170 -mt-20 -mb-20 "
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}
          ></div>
        </div>
      </section>
      {/* ================= OUR VISION ================= */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={current.img}
              alt={current.title}
              className="w-full h-115 object-cover rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Text side */}
          <div className="flex flex-col">
            <div className="flex gap-2 ">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 rounded-lg py-2 font-semibold border ${
                    activeTab === tab.id
                      ? "bg-[#0B1C3C] text-white border-[#0B1C3C]"
                      : "bg-white text-[#0B1C3C] border-gray-300"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <motion.h2
              key={current.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-[#0B1C3C]"
            >
              {current.title}
            </motion.h2>

            <motion.p
              key={current.desc}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg leading-relaxed text-[#14223C]"
            >
              {current.desc}
              <img
                src="/logo.jpg"
                className=" w-90 h-60 ml-90 opacity-30 select-none pointer-events-none"
              />
            </motion.p>
          </div>
        </div>
      </section>

      {/* ================= OUR VIDEO================= */}

      <section className="relative w-full h-[90vh] flex items-center justify-center text-center ">
        <div
          className=" absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-300"
          style={{
            backgroundImage: "url('/video.jpg')",
          }}
        ></div>

        <div className="relative z-10 px-4">
          <button
            onClick={() => setShowVideo(true)}
            className="mx-auto mb-6 flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border
             border-[#0B1C3C] hover:bg-50 transition"
          >
            <play size={55} color="white" />
            <FaPlay className=" w-50 h-16 ml-4 text-white/300" />
          </button>
          <h2 className=" font-bold text-4xl md:text-5xl text-[#0B1C3C] mb-4">
            Watch Our Introduction Video
          </h2>
          <p className="text-lg text-[#0B1C3C] md:text-xl max-w-2xl mx-auto">
            Introduction to TaleemiGuide and our mission to help students
            succeed.
          </p>
        </div>
        {showVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center justify-center z-20">
            <div className="relative w-full max-w-4xl p-4">
              <button
                className="absolute -top-10 right-0 text-white text-3xl"
                onClick={() => setShowVideo(false)}
              >
                X
              </button>
              <iframe
                className="w-full h-[500px] rounded-lg"
                src="https://www.youtube-nocookie.com/embed/W8NsVWvfN0w?rel=0&modestbranding=1&showinfo=0 "
                title="video"
                frameBorder={0}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
      <section className="py-20 px-6 md:px-20 bg-[#FFDBBB]/100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Why Choose TaleemiGuide?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Easily Accessible",
              text: "TaleemiGuide is accessible by students and learners from any location of the country.",
            },
            {
              title: "Personalized Dashboard",
              text: "The personalized dashboard facility is provided, that allows students to track their progress on submitted queries and career assessment reports.",
            },
            {
              title: "Quick Response",
              text: "TaleemiGuide provides prompt responses for educational solutions, and also allows one-on-one online counselling session with our dedicated experts.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#F97316]">
                {item.title}
              </h3>
              <p className="text-[#14223C] leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OUR BOARD MEMBERS ================= */}

      <section className="py-8 px-6 md:px-20 bg-[url('/bg-2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full bg-[#0B1C3C]/80 py-4 px-6 md:px-10 text-center rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-3xl text-white">
              TALEEMI GUIDE TEAM
            </h2>
            <span className=" mx-auto bg-white w-90 h-1 text-black rounded-full mb-10"></span>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    layout: { duration: 0.35, ease: "easeInOut" },
                  }}
                  className=" w-140 h-135 mb-3 gap-1 bg-[#0B1C3C] p-6 ml-6 rounded-2xl shadow-2xl flex flex-col items-center text-center "
                >
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="w-72 h-72 object-cover rounded-full bg-[#000] shadow-2xl"
                  />
                  <h2 className="font-bold text-3xl text-white mt-4">
                    {selected.name}
                  </h2>
                  <h3 className="font-bold text-l text-orange-600">
                    {selected.designation}
                  </h3>
                  <div className="w-50 mx-auto my-1 border-b-2 border-white"></div>
                  <p className="text-sm text-start text-white mt-2">
                    {selected.description}
                  </p>
                  <div className=" gap-7 justify-center flex mt-8 text-white">
                    <a
                      href={selected.facebook}
                      className=" text-3xl hover:text-orange-600"
                    >
                      <FaFacebook className="cursor-pointer "></FaFacebook>
                    </a>
                    <a
                      href={selected.linkedin}
                      className=" text-3xl hover:text-orange-600"
                    >
                      <FaLinkedin className="cursor-pointer "></FaLinkedin>
                    </a>
                    <a
                      href={selected.email}
                      className=" text-3xl hover:text-orange-600"
                    >
                      <FaEnvelope className="cursor-pointer"></FaEnvelope>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-150 h-120 ">
              {boardMembers.map((member) => (
                <motion.div
                  key={member.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelected(member)}
                  className={`cursor-pointer p-3 rounded-xl bg-[#0B1C3C] transition-all duration-300 border-2  ${
                    selected.id === member.id
                      ? "border-white shadow-xl"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-34 h-34 rounded-full mb-4 object-cover ml-2"
                  />
                  <h4 className="text-l font-bold text-center text-white">
                    {member.name}
                  </h4>

                  <div className="w-25 mx-auto my-1 border-b-2 border-white"></div>
                  <h5 className="text-xs text-center text-orange-600">
                    {member.designation}
                  </h5>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="-mt-8 mr-5 flex justify-end">
            <a
              href="#"
              className="text-orange-600 text-l hover:underline inline-flex items-center"
            >
              Learn More <FaArrowCircleRight className="ml-2 mb-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
