import React, { use, useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Pause } from "lucide-react";
import { GraduationCap, University, Wrench, Building2 } from "lucide-react";
import { img, title } from "framer-motion/client";

const LOGOS = [
    "/src/assets/harvard_logo.png",
    "/src/assets/download (1).jpg",
    "/src/assets/download (2).jpg",
    "/src/assets/download (1).png",
    "/src/assets/hero.png",
]

const acadamicData = [
    ["Academic & Career Guidance", "End-to-end guidance aligned with real-world career pathways."],
    ["Career Assessment & Psychometrics", "Data-driven assessments to identify strengths and interests."],
    ["University Program Mapping", "Helping students choose programs based on aptitude and demand."],
    ["Expert Sessions", "One-on-one and group sessions with verified mentors."],
    ["Student Support System", "Centralized platform for academic and career queries."],
    ["Analytics & Insights", "Dashboards with measurable student behavior and outcomes."],
];


export default function Corporate({ speed = 20 }) {
    const viewportRef = useRef(null);
    const setRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);


    const [setWidth, setSetWidth] = useState(0);
    const [repeatCount, setRepeatCount] = useState(2);
    const controls = useAnimation();

    useEffect(() => {
        if (!setWidth) return;

        if (isHovered) {
            controls.stop();
            return;
        }

        controls.start({
            x: [0, -setWidth],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
            },
        });
    }, [setWidth, speed, isHovered, controls]);

    const recalc = () => {
        const viewport = viewportRef.current;
        const setEl = setRef.current;
        if (!viewport || !setEl) return;

        const vw = viewport.offsetWidth;
        const sw = setEl.scrollWidth;

        if (!sw) return; // safety

        setSetWidth(sw);

        // ensure track is long enough to cover wide screens (no gap)
        const needed = Math.ceil((vw * 2) / sw) + 1;
        setRepeatCount(Math.max(2, needed));
    };
    const data = [
        { title: "Schools", icon: GraduationCap },
        { title: "Colleges & Universities", icon: University },
        { title: "Training Institutes", icon: Wrench },
        { title: "Organizations & Corporates", icon: Building2 },
    ];
    useEffect(() => {
        recalc();

        const ro = new ResizeObserver(recalc);
        if (viewportRef.current) ro.observe(viewportRef.current);
        if (setRef.current) ro.observe(setRef.current);

        return () => ro.disconnect();
    }, []);





    const academicData = [
        {
            label: "For Institutions",
            title: "ACADEMIC & CAREER GUIDANCE",
            desc: "End-to-end structured guidance aligned with real-world academic and career pathways.",
        },
        {
            label: "For Institutions",
            title: "CAREER ASSESSMENT & PSYCHOMETRICS",
            desc: "Data-driven assessments to identify student strengths, interests, and learning styles.",
        },
        {
            label: "For Institutions",
            title: "UNIVERSITY PROGRAM MAPPING",
            desc: "Helping students choose the right programs based on aptitude and market demand.",
        },
        {
            label: "For Institutions",
            title: "EXPERT MENTOR SESSIONS",
            desc: "One-on-one and group sessions with verified academic and industry mentors.",
        },

    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prev) => (prev + 1) % academicData.length);
        }, 4000);

        return () => clearInterval(interval);

    }, []);





    return (
        <main className="">
            <a href="#apply"
                className="fixed bottom-15 right-0 bg-orange-600 text-white rounded-l-full px-6 py-3 text-xl font-extrabold transition-all hover:bg-[#F97316]/100 z-100
                hover:scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                Apply now
            </a>

            <div className="bg-[#0B1C3C] text-slate-200" >
                {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB]"> */}
                <section className="relative min-h-[70vh] overflow-hidden  flex items-center px-6 lg:px-20" >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                                Empowering Institutions Through
                                <span className="text-[#F97316]"> Smart Academic & Career Solutions</span>
                            </h1>
                            <p className="mt-6 text-slate-400 max-w-xl">
                                TaleemiGuide partners with schools, colleges, universities, and organizations to deliver structured academic guidance, career planning, assessments, and mentorship solutions.
                            </p>

                            <div className="flex gap-4 mt-8">
                                <button className="bg-[#F97316] px-6 py-3 rounded-xl hover:scale-105 transition">
                                    Request a Demo
                                </button>
                                <button className="border border-white px-6 py-3 rounded-xl text-white hover:bg-slate-900 transition">
                                    Partner With Us
                                </button>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="bg-slate-800 rounded-2xl h-[350px]"
                        ></motion.div> */}
                        <div className="relative w-[740px] h-[420px] lg:h-[510px]">


                            <div
                                className="relative w-full h-full overflow-hidden"
                                style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}
                            >
                                {/* IMAGE */}
                                <img
                                    src="/pic.png"
                                    alt="Diagonal"
                                    className="w-full h-full object-cover"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-[#0B1C3C]/80"></div>
                            </div>

                        </div>


                    </div>
                </section >
            </div >




            <section className="bg-white text-white overflow-hidden py-6" >
                <div className="mx-auto max-w-7xl px-6 py-10 text-center">
                    <h2 className="text-3xl font-bold text-black">Trusted by
                        <span className="text-[#F97316]"> 500+ educational institutes </span> across Pakistan</h2>
                    {/* <p className="mt-2 max-w-3xl mx-auto text-slate-300">
                        Let’s collaborate to build impactful academic and career guidance
                        solutions tailored to your institution.
                    </p> */}
                </div>
                <div ref={viewportRef} className="relative w-full overflow-hidden">

                    <div
                        className="
                            pointer-events-none absolute
                            top-0
                            h-40 md:h-56 lg:h-64
                            left-0 w-20
                            bg-gradient-to-r
                            from-white/90 to-transparent
                            z-10
                        "
                    />

                    <div
                        className="
                            pointer-events-none absolute
                            top-0
                            h-40 md:h-56 lg:h-64
                            right-0 w-20
                            bg-gradient-to-l
                            from-white/90 to-transparent
                            z-10
                        "
                    />
                    <motion.div
                        className="flex items-center"
                        animate={controls}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                                duration: speed
                            },
                        }}

                    >
                        {/* measuring set */}
                        <div ref={setRef} className="flex items-center">
                            {LOGOS.map((logo, i) => (
                                <div key={`measure-${i}`} className="w-44 md:w-52 px-0 flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="Partner"
                                        className="
                                            h-16 md:h-30
                                            w-auto
                                            object-contain
                                            shrink-0
                                            opacity-80
                                            grayscale
                                            hover:opacity-100
                                            hover:grayscale-0
                                            transition
                                            "
                                        onLoad={recalc}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* extra sets */}
                        {Array.from({ length: repeatCount - 1 }).map((_, r) => (
                            <div key={`set-${r}`}
                                className="flex items-center">

                                {LOGOS.map((logo, i) => (
                                    <div key={`logo-${r}-${i}`} className="w-44 md:w-52 px-0 flex items-center justify-center">
                                        <img
                                            src={logo}
                                            alt="Partner"
                                            className="
                                                h-16 md:h-30
                                                w-auto
                                                object-contain
                                                shrink-0
                                                opacity-80
                                                grayscale
                                                hover:opacity-100
                                                hover:grayscale-0
                                                transition
                                                "
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>


                </div>
            </section>










            {/* WHO WE WORK WITH */}

            <section className="px-6 lg:px-20 py-20 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#0B1C3C] pointer-events-none">
                    Designed for Educational & Professional Institutions
                </h2>


                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {data.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="relative bg-white p-6 w-80 h-45 rounded-2xl hover:-translate-y-2 
                                shadow-2xl 
                                shadow-[2px_2px_4px_rgba(0,0,0,0.1)] transition border border-transparent hover:shadow-2xl overflow-hidden text-left  "
                            >
                                {/* Top Right Corner */}
                                <span className="absolute top-0 right-0 w-18 h-18 border-t-5 border-r-5 border-orange-600 rounded-tr-2xl"></span>

                                {/* Bottom Left Corner */}
                                <span className="absolute bottom-0 left-0 w-14 h-14 border-b-5 border-l-5 border-orange-600 rounded-bl-2xl"></span>


                                <div className="w-12 h-12 rounded-lg bg-orange-600/20 flex items-center justify-center mb-4">
                                    <Icon className="text-orange-600" size={24} />
                                </div>

                                <div className="text-[#0B1C3C] text-xl font-semibold mt-4 pointer-events-none">{item.title}</div>



                                <p className="text-sm text-slate-400 mt-2 pointer-events-none">
                                    Structured guidance, career awareness, and learner progression support.
                                </p>
                            </div>

                        )
                    })}
                </div>

            </section>









            <section className="relative rounded-2xl overflow-hidden min-h-[340px] bg-cover bg-center"

                style={{ backgroundImage: "url('/bg-1.jpg')" }}>
                <div className="rounded-2xl px-1 lg:px-20 py-6 flex flex-col justify-start">


                    <h2 className="text-5xl font-bold text-center mb-10 mt-5 text-[#0B1C3C] pointer-events-none">
                        What We Offer Institutions
                    </h2>

                    <div className="relative w-full top-10  rounded-2xl overflow-hidden  ">



                        <div className="absolute inset-0  bg-gradient-to-t from-white/95 via-white/80  to-transparent"></div>


                        <div className="relative left-0 w-full p-6 lg:p-10 overflow-hidden">

                            <div className="grid lg:grid-cols-2 gap-6 items-end">

                                <div className="">

                                    <span className="text-xm bg-orange-600 text-white px-3 py-1 rounded-full font-bold">{academicData[index].label}</span>

                                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0B1C3C] mt-3 leading-tight transition-all duration-500 overflow-hidden line-clamp-1">
                                        {academicData[index].title}
                                    </h3>
                                </div>

                                {/* RIGHT — Description */}
                                <p className="text-sm lg:text-base text-slate-600 max-w-md transition-all duration-500 overflow-hidden ">
                                    {academicData[index].desc}
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>























            <section className="relative mx-auto max-w-8xl px-6 bg-white rounded-2xl overflow-hidden">

                <div className="grid grid-cols-3 md:grid-cols-[1fr_1.5fr_1fr] items-center gap-8">

                    <div className="mt-12 text-center text-slate-400">

                        <h2 className="text-3xl font-bold text-center text-black">
                            Value for Your Institution
                        </h2>
                        empowering institutions to provide structured academic and career guidance, reducing dropout rates and improving student outcomes through data-driven insights and expert mentorship.
                    </div>
                    <div className=" relative
                    mt-6 ml-10 rounded-full">

                        <span className=" absolute bg-[#F54900] rounded-full bottom-0 top-6 left-13 border-4 border-[#F54900] h-[38rem] w-[28rem]  shadow-2xl 
                        shadow-[2px_2px_4px_rgba(0,0,0,0.1)] "></span>
                        <img src="/bg-1.jpg" className=" relative rounded-full h-[40rem] w-[28rem] py-4  object-cover shadow-2xl 
                        shadow-[2px_2px_4px_rgba(0,0,0,0.1)]" />

                    </div>

                    <div className="mt-0 max-w-3xl mx-auto max-h-8xl text-slate-600">

                        <ul className="flex flex-wrap gap-3">
                            {[
                                "Improves student decision-making and career clarity", "Reduces dropout and wrong program selection rates", "Enhances guidance without hiring overhead", "Provides measurable insights into student needs", "Strengthens academic & career support ecosystem",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className={`px-8 py-2 text-xm font-medium rounded-full w-fit shadow-xl transition
        ${i % 2 === 0 ? "bg-[#0B1C3C] text-white" : "bg-[#F54900] text-white"}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>


                </div>
            </section>
































            <section className="relative overflow-hidden rounded-t-4xl bg-[#0B1C3C]">
                <div className="absolute bottom-0 left-0 w-full h-[22%] bg-white z-0"></div>

                <div className="max-w-7xl px-10  py-24 grid grid-cols-3 md:grid-cols-[1.5fr_2fr_1fr]  gap-6 items-start relative z-10 ">
                    <div className="text-white -mt-14">
                        <h2 className="text-2xl md:text-3xl font-semibold leading-tight w-[135%] tracking-tight ">
                            Join our structured partnership journey and unlock impactful collaboration.
                        </h2>

                        <button className="bg-[#0B1C3C] text-slate-100 px-8 py-3 rounded-full font-medium shadow hover:shadow-md transition flex items-center gap-2 border-2 border-white hover:border-white hover:bg-white hover:text-white mt-8">
                            More Service →
                        </button>

                    </div>


                    <div className="relative flex justify-center lg:justify-end">

                        <div className="absolute pointer-events-none">
                            {[
                                {
                                    title: "Institution Onboarding",
                                    desc: "A structured onboarding process enabling seamless integration with secure account setup, data alignment, and role-based access.",
                                    pos: "top-12 left-0",
                                    shift: "-translate-x-155",
                                },
                                {
                                    title: "Customization & Setup",
                                    desc: "Configuring the platform to align with your institution’s workflows, programs, and reporting requirements.",
                                    pos: "-top-10 right-6",
                                    shift: "translate-x-20",
                                },
                                {
                                    title: "Deployment & Training",
                                    desc: "Deploying the customized platform and providing staff with the necessary training to ensure effective use.",
                                    pos: "top-78 right-0",
                                    shift: "-translate-x-75",
                                },
                                {
                                    title: "Ongoing Support & Reporting",
                                    desc: "Offering continuous support while monitoring and reporting on platform performance.",
                                    pos: "top-55 left-10",
                                    shift: "-translate-x-75",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`
                                        absolute ${item.pos}
                                        ${item.shift || ""}
                                        w-80 h-60 rounded-2xl bg-white/95 p-5
                                        shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                                        border border-white/60 backdrop-blur
                                        transition-transform duration-300
                                        hover:-translate-y-1
                                        `}
                                >
                                    <div className="mb-3  items-center gap-3">
                                        <div className="w-21 h-19 rounded-xl shadow-sm 
                                        mb-4  rounded-full bg-[#F54900]/70 text-white grid place-items-center font-bold text-5xl
                                        " >

                                            {idx + 1}
                                        </div>
                                        <h3 className="font-extrabold text-slate-900 leading-tight mt-4 text-lg">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div><img
                            src="/teacher.png"
                            alt="Doctor"
                            className="h-[420px] md:h-[480px] object-contain relative  drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)] top-23 left-140"
                        /></div>
                    </div>



                </div>


            </section>











        </main >
    );
};
