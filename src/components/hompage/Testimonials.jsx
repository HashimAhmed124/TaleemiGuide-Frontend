// components/Testimonials.jsx

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Testimonial Data Array
const comments = [
  {
    stars: 5,
    comment:
      "TaleemiGuide helped me choose the right subjects and career path. Truly life-changing!",
    name: "Aisha Khan",
    profession: "Student",
  },
  {
    stars: 5,
    comment: "My son’s career decisions were guided perfectly. Excellent support!",
    name: "Mr. Ahmed",
    profession: "Parent",
  },
  {
    stars: 5,
    comment: "The experts provided clear, actionable advice for my transition to a new job.",
    name: "Ali Raza",
    profession: "Working Professional",
  },
  {
    stars: 5,
    comment: "Quick, reliable, and professional guidance for all my academic challenges.",
    name: "Sara Malik",
    profession: "Graduate",
  },
  {
    stars: 5,
    comment: "I highly recommend TaleemiGuide for anyone seeking educational guidance.",
    name: "Hassan Shah",
    profession: "Student",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  // useInView is kept here to trigger the animation of the testimonial section
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#6366F1] py-20 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden"
    >
      {/* Testimonial Section Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-16 w-48 h-48 bg-[#F97316]/30 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-16 w-64 h-64 bg-[#FBBF24]/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Words Of Our Clients</h3>
          <p className="text-[#E0E7FF] max-w-3xl mx-auto text-base md:text-lg">
            Our greatest pride is the trust of students, parents, graduates, and professionals.
          </p>
        </div>

        <div className="relative z-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {comments.map((c, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-[#1F2937] rounded-3xl p-8 flex flex-col gap-4 h-full border border-white/20 backdrop-blur-md shadow-lg transition-transform duration-300"
                >
                  <div className="flex gap-1 text-[#F97316] text-lg">
                    {[...Array(c.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="flex-1 text-[#374151] font-medium">{c.comment}</p>
                  <h4 className="font-bold text-lg text-[#1E3A8A]">{c.name}</h4>
                  <p className="text-[#6B7280] text-sm">{c.profession}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="testimonial-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F97316] hover:text-white transition z-10 text-xl font-bold">
            &#8592;
          </button>
          <button className="testimonial-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-lg w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F97316] hover:text-white transition z-10 text-xl font-bold">
            &#8594;
          </button>
        </div>
      </motion.div>
    </section>
  );
}