// components/Footer.jsx

import React, { useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  const ref = useRef(null);

  return (
    <footer ref={ref} className="relative">


      {/* 2. Bottom Section - Quick Links & Social */}
      <section

        className="bg-[#0B1C3C] py-16 px-6 md:px-12 lg:px-20 text-[#D1D5DB]"
      >
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row
        space-y-6 justify-between gap-10 md:items-start">
          {/* Left Column - Social */}
          <div className="md:flex-1 space-y-6">
            <div className="">
              <h3 className="text-[#F97316] font-semibold  text-lg">Follow Us</h3>
              <div className="w-22 bg-[#F97316] h-0.5 " />
            </div>
            <p className="text-base md:text-lg">
              Stay connected with TaleemiGuide through our social channels for latest updates, tips, and educational news.
            </p>
            <div className="flex gap-8 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center border border-white rounded-full bg-[#0B1C3C]
                   hover:bg-[#F97316] transition-all text-white shadow-lg hover:shadow-xl hover:border-[#F97316]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="md:flex-1 space-y-6">
            <div>
              <h3 className="text-[#F97316] font-semibold text-lg">Quick Links</h3>
              <div className="w-26 bg-[#F97316] h-0.5 mb-4 " />
            </div>
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
          <div className="md:flex-1 space-y-6">
            <div><h3 className="text-[#F97316] font-semibold text-lg">Contact Us</h3>
              <div className="w-25 bg-[#F97316] h-0.5 mb-4 " />
            </div>
            <p className="text-base md:text-lg">Email: info@taleemiguide.com</p>
            <p className="text-base md:text-lg">Phone: +92 300 1234567</p>
            <p className="text-base md:text-lg">Address: 123 Taleemi St, Karachi, Pakistan</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div>
          <div className="w-full bg-[#F97316] h-0.5 mb-4 mt-12 " />
          <div className="-mb-8  text-center text-sm md:text-base text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} TaleemiGuide. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
}