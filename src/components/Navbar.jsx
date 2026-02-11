// Navbar.jsx
import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-bg-less.png";
import {
  Bell,
  MessageCircle,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";

export default function Navbar({
  isAuthed = false,
  user = { name: "User", avatarUrl: "" },
  unreadNotifications = 0,
  unreadMessages = 0,
  onLogout,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e) => {
      if (!profileRef.current) return;
      if (!profileRef.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const role = localStorage.getItem("tg_role"); // USER | ADMIN | SUPER_ADMIN

  const dashboardPath =
    role === "ADMIN" || role === "SUPER_ADMIN" ? "/super-admin" : "/userdashboard";

  // Base links
  const baseLinks = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Services", path: "/service" },
      { name: "About", path: "/about-us" },
    ],
    []
  );

  // Add dashboard link only when logged in
  const navLinks = useMemo(() => {
    if (!isAuthed) return baseLinks;
    return [...baseLinks, { name: "Dashboard", path: dashboardPath }];
  }, [isAuthed, baseLinks, dashboardPath]);

  const isActive = (path) => {
    if (path.includes("#")) return location.pathname === "/";
    return location.pathname === path;
  };

  const goLogin = () => {
    setMobileOpen(false);
    setProfileOpen(false);
    navigate("/login");
  };

  const goAppointment = () => {
    navigate("/service/online-session");
  };

  const logout = () => {
    onLogout?.();
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Site logo" className="h-30 w-auto object-contain" />
          </Link>

          {/* CENTER: Desktop links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[#1E3A8A] font-medium relative group transition-colors duration-300 cursor-pointer"
              >
                {link.name}
                <span
                  className="absolute left-0 -bottom-1 h-0.5 bg-[#F97316] transition-all"
                  style={{ width: isActive(link.path) ? "100%" : undefined }}
                />
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT: Desktop actions */}
          <div className="flex items-center gap-3">
            {!isAuthed ? (
              <>
                <button
                  onClick={goLogin}
                  className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-medium border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-300"
                >
                  Login
                </button>

                <button
                  onClick={goAppointment}
                  className="hidden md:inline-flex px-5 py-2 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg transition duration-300"
                >
                  Make An Appointment
                </button>
              </>
            ) : (
              <div className="hidden md:flex items-center gap-5">
                {/* Bell */}
                <button
                  className="relative grid place-items-center hover:scale-[1.03] transition"
                  aria-label="Notifications"
                >
                  <Bell className="h-6 w-6 text-[#4B5563]" />
                  {unreadNotifications > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                  )}
                </button>

                {/* Messages */}
                <button
                  className="relative grid place-items-center hover:scale-[1.03] transition"
                  aria-label="Messages"
                >
                  <MessageCircle className="h-6 w-6 text-[#4B5563]" />
                  {unreadMessages > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                  )}
                </button>

                {/* Avatar + dropdown */}
                <div className="relative" ref={profileRef}>
                  <button
                    className="grid place-items-center rounded-full p-0.5"
                    aria-label="Profile"
                    onClick={() => setProfileOpen((s) => !s)}
                  >
                    <div className="h-12 w-12 rounded-full border border-slate-200 bg-white shadow-sm overflow-hidden">
                      {user?.avatarUrl ? (
                        <img src={user.avatarUrl} alt="profile" className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full grid place-items-center bg-[#EFF6FF] text-[#1E3A8A] font-bold">
                          {user?.name?.slice(0, 1)?.toUpperCase()}
                        </div>
                      )}
                    </div>
                  </button>

                  {profileOpen && (
                    <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-lg z-50">
                      <div className="px-4 py-3 border-b border-[#E5E7EB]">
                        <div className="text-sm font-semibold text-[#0F172A] truncate">
                          {user?.name}
                        </div>
                        <div className="text-xs text-[#4B5563] truncate">Account</div>
                      </div>

                      <Link
                        to={dashboardPath}
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-slate-50"
                      >
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>

                      <button
                        onClick={() => {
                          setProfileOpen(false);
                          alert("Connect this to Account Settings route later.");
                        }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-slate-50 text-left"
                      >
                        <Settings className="h-4 w-4" />
                        Account Settings
                      </button>

                      <button
                        onClick={logout}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-slate-50 text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#1E3A8A] hover:bg-[#E5E7EB] focus:outline-none transition duration-300"
              aria-label="Open menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur-md rounded-b-2xl shadow-md">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setMobileOpen(false);
                    setProfileOpen(false);
                  }}
                  className="text-[#1E3A8A] hover:text-[#F97316] py-2 transition duration-300"
                >
                  {link.name}
                </Link>
              ))}

              {!isAuthed ? (
                <div className="flex flex-col gap-2 pt-3">
                  <button
                    onClick={goLogin}
                    className="w-full px-3 py-2 rounded-lg border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      goAppointment();
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-[#F97316] text-white hover:bg-[#EA580C] shadow transition duration-300"
                  >
                    Make An Appointment
                  </button>
                </div>
              ) : (
                <div className="pt-3 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      logout();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg border border-[#E5E7EB] hover:bg-slate-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
