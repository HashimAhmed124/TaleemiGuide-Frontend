import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

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

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="relative">
      {/* Top Section - Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#6366F1] py-20 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden"
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
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
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
      </motion.section>

      {/* Bottom Section - Quick Links & Social */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#111827] py-16 px-6 md:px-12 lg:px-20 text-[#D1D5DB]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:items-start">
          {/* Left Column - Social */}
          <div className="md:flex-1 space-y-6">
            <h3 className="text-[#FBBF24] font-semibold mb-4 text-lg">Follow Us</h3>
            <p className="text-base md:text-lg">
              Stay connected with TaleemiGuide through our social channels for latest updates, tips, and educational news.
            </p>
            <div className="flex gap-4 mt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3B82F6] hover:bg-[#F97316] transition-all text-white shadow-lg hover:shadow-xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="md:flex-1">
            <h3 className="text-[#FDBA74] font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Taleemi Advice", "Career Assessment Test", "Make an Appointment"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#F97316] transition-colors text-base md:text-lg"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="md:flex-1 space-y-4">
            <h3 className="text-[#FDBA74] font-semibold mb-4 text-lg">Contact Us</h3>
            <p className="text-base md:text-lg">Email: info@taleemiguide.com</p>
            <p className="text-base md:text-lg">Phone: +92 300 1234567</p>
            <p className="text-base md:text-lg">Address: 123 Taleemi St, Karachi, Pakistan</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-[#374151]/40 pt-6 text-center text-sm md:text-base text-[#9CA3AF]">
          &copy; {new Date().getFullYear()} TaleemiGuide. All rights reserved.
        </div>
      </motion.section>
    </footer>
  );
}
