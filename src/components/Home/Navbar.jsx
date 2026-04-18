import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/logo-bg-less.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);


  const navLinks = [
    { name: "Home", href: "/#service" },
    { name: "Services", href: "/#service" },
    { name: "About", href: "/about" },
  ];
  const menu = useRef(null);
  const items = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    moveUnderline(activeSlide);
  }, [activeSlide]);

  const moveUnderline = (index) => {
    const currentItem = items.current[index];
    const currentMenu = menu.current;

    if (currentItem && currentMenu) {
      const itemRect = currentItem.getBoundingClientRect();
      const menuRect = currentMenu.getBoundingClientRect();

      setUnderlineStyle({
        left: itemRect.left - menuRect.left,
        width: itemRect.width,
      });
    }

  }

  return (
    <header className="backdrop-blur-lg bg-white/70 border-b boerder-gray-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-9xl mx-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">


          {/* LEFT: Logo */}
          <div className="flex items-center">
            <img

              src={Logo}
              alt="Site logo"
              className="h-36 w-auto object-contain"
            />
          </div>






          {/* MIDDLE: Nav links */}
          <nav
            className="hidden md:flex md:space-x-10 relative"
            aria-label="Main navigation"
            onMouseLeave={() => moveUnderline(activeSlide)}
            ref={menu}
          >
            <ul className="flex space-x-10">
              {navLinks.map((label, i) => (
                <li key={i}>
                  <Link
                    to={label.href}
                    ref={(el) => (items.current[i] = el)}
                    onMouseEnter={() => moveUnderline(i)}
                    onClick={() => setActiveSlide(i)}
                    className="text-[#1E3A8A] text-l font-medium relative transition-colors duration-300"
                  >
                    {label.name}
                  </Link>

                </li>
              ))}
            </ul>

            {/* FIXED underline */}
            <span
              className="absolute top-12 bottom-0 w-14 h-1 bg-[#F97316] transition-all duration-300 rounded-xl"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </nav>


          {/* RIGHT: Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-medium border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-300">
              Login
            </button>
            <button className="hidden md:inline-flex px-5 py-2 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg transition duration-300">
              Make An Appointment
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#1E3A8A] hover:bg-[#E5E7EB] focus:outline-none transition duration-300"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 border-t border-gray-200 bg-white/90 backdrop-blur-md rounded-b-lg shadow-md transition duration-300">
            <div className="flex flex-col px-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#1E3A8A] hover:text-[#F97316] py-2 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 pr-10">
                <button className="w-full px-3 py-2 rounded-xl border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-300">
                  Login
                </button>
                <button className="w-full px-3 py-2 rounded-xl bg-[#F97316] text-white hover:bg-[#EA580C] shadow transition duration-300">
                  Make An Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
