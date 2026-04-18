import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

const slides = [
    {
        image: "/pic.png",
        title: "TaleemiGuide",
        subtitle: "Don’t Guess Your Future, Plan It With Experts.",
    },
    {
        image: "/pic.png",
        title: "Your Future Starts Here",
        subtitle: "Top Ranked Learning Programs",
    }
];

export default function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className="w-full h-[85vh] md:h-[90vh]">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
                speed={1200}
                loop={true}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                className="h-full"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">

                            <img
                                src={item.image}
                                className="w-full h-full object-cover"
                                alt="slide"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C3C]/80 to-transparent"></div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20">

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={activeSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    className="text-white text-lg md:text-2xl mb-4"
                                >
                                    {item.subtitle}
                                </motion.p>


                                <motion.div
                                    initial={{ opacity: 0, x: -80 }}
                                    animate={activeSlide === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                                    transition={{ duration: 1.5, delay: 0.4 }}
                                    className="pt-1 w-fit"
                                >
                                    <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight">
                                        <span className="bg-[#14223C]/70 px-4 py-2 rounded-xl">{item.title}</span>
                                    </h1>
                                </motion.div>
                                {index === 0 && (
                                    <motion.button initial={{ opacity: 0 }}
                                        animate={activeSlide === index ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 1.2 }}
                                        className="group mt-8 bg-orange-600 text-black px-6 py-3 rounded-lg shadow hover:bg-gray-100 w-fit hover:text-orange-600 flex items-center" >
                                        <span className="relative w-[120px] h-6 flex items-center overflow-hidden">
                                            <span className="absolute inset-0 flex items-center justify-start text-white opacity-100 
        group-hover:opacity-0 transition-all duration-300">
                                                Take a Tour
                                            </span>

                                            <span className="absolute inset-0 flex items-center justify-start opacity-0 
        group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
        transition-all duration-300 text-orange-600 text-[13px]">
                                                Start Your Journey
                                            </span>
                                        </span>

                                    </motion.button>

                                )}

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
