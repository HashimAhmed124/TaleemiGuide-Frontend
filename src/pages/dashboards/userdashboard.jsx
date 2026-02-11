import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquareText,
  ClipboardCheck,
  CalendarDays,
  ShoppingBag,
  BadgeDollarSign,
  LifeBuoy,
  MoreVertical,
  Download,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";

const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
  surface: "#F8FAFC",
};

const BtnPrimary = ({ children, className = "", ...props }) => (
  <button
    className={`rounded-2xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90 transition ${className}`}
    style={{ backgroundColor: COLORS.primary }}
    {...props}
  >
    {children}
  </button>
);

const BtnSecondary = ({ children, className = "", ...props }) => (
  <button
    className={`rounded-2xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 active:opacity-90 transition ${className}`}
    style={{ backgroundColor: COLORS.secondary }}
    {...props}
  >
    {children}
  </button>
);

const BtnGhost = ({ children, className = "", ...props }) => (
  <button
    className={`rounded-2xl px-4 py-2.5 text-sm font-semibold border hover:bg-slate-50 transition ${className}`}
    style={{ borderColor: COLORS.softBorder, color: COLORS.primaryDark }}
    {...props}
  >
    {children}
  </button>
);

const Badge = ({ tone = "gray", children }) => {
  const map = {
    gray: "bg-slate-100 text-slate-700 border-slate-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    yellow: "bg-amber-50 text-amber-700 border-amber-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    orange: "bg-orange-50 text-orange-700 border-orange-200",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${map[tone]}`}
    >
      {children}
    </span>
  );
};

const Card = ({ title, subtitle, right, children }) => (
  <div
    className="rounded-3xl border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
    style={{ borderColor: COLORS.softBorder }}
  >
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between px-6 pt-6">
      <div className="min-w-0">
        <h3
          className="text-lg font-extrabold tracking-tight truncate"
          style={{ color: COLORS.primaryDark }}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
            {subtitle}
          </p>
        )}
      </div>
      {right}
    </div>
    <div className="px-6 pb-6 pt-4">{children}</div>
  </div>
);

const Stat = ({ icon, label, value, hint }) => (
  <div
    className="rounded-3xl border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
    style={{ borderColor: COLORS.softBorder }}
  >
    <div className="flex items-center gap-3">
      <div
        className="grid h-11 w-11 place-items-center rounded-2xl"
        style={{ backgroundColor: COLORS.lightBackground }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: COLORS.textGray }}
        >
          {label}
        </div>
        <div
          className="text-2xl font-extrabold"
          style={{ color: COLORS.primaryDark }}
        >
          {value}
        </div>
      </div>
    </div>
    {hint && (
      <div className="mt-3 text-sm" style={{ color: COLORS.textGray }}>
        {hint}
      </div>
    )}
  </div>
);

export default function UserDashboard() {
  const navigate = useNavigate();

  // Guard (demo)
  useEffect(() => {
    const token = localStorage.getItem("tg_token");
    if (!token) navigate("/");
  }, [navigate]);

  const [active, setActive] = useState("overview");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!userMenuRef.current) return;
      if (!userMenuRef.current.contains(e.target)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Mock data (replace with API)
  const user = {
    name: "TaleemiGuide User",
    email: "user@email.com",
    role: "Plus", // Normal | Plus
  };

  const queries = [
    {
      id: "q2",
      subject: "University Program",
      question: "BSCS vs Software Engineering—what’s better for me?",
      response: "",
      status: "pending",
      createdAt: "2025-12-17",
    },
    {
      id: "q1",
      subject: "Class 10 Stream",
      question: "Which subjects should I choose if I like computers?",
      response:
        "Based on your interest, consider Computer Science + Math track...",
      status: "answered",
      createdAt: "2025-12-10",
    },
  ];

  const test = {
    status: "completed", // not_started | in_progress | completed
    score: 78,
    updatedAt: "2025-12-16",
    reportUrl: "#",
  };

  const bookings = [
    {
      id: "b1",
      dateTime: "2025-12-18 18:00",
      counselor: "Career Mentor A",
      status: "upcoming",
      meetingLink: "#",
    },
    {
      id: "b2",
      dateTime: "2025-12-03 20:00",
      counselor: "Career Mentor B",
      status: "completed",
      meetingLink: "#",
    },
    {
      id: "b3",
      dateTime: "2025-11-22 19:00",
      counselor: "Career Mentor C",
      status: "completed",
      meetingLink: "#",
    },
  ];

  const services = [
    {
      id: "s1",
      title: "Class 10 Guidance",
      status: "active",
      startedAt: "2025-12-01",
      endsAt: "2026-01-01",
    },
    {
      id: "s2",
      title: "Career Assessment Test",
      status: "active",
      startedAt: "2025-12-15",
      endsAt: "2026-02-15",
    },
  ];

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "PKR 0",
      note: "Basic Access",
      features: ["Limited queries", "Basic guidance pages"],
    },
    {
      id: "plus",
      name: "Plus",
      price: "PKR 2,999",
      note: "Recommended",
      features: [
        "Priority query responses",
        "Full report downloads",
        "Session discounts",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "PKR 5,999",
      note: "Full Support",
      features: ["Mentor sessions", "Premium roadmaps", "Advanced tools"],
    },
  ];

  const queriesSorted = useMemo(
    () => [...queries].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
    [queries]
  );
  const bookingsSorted = useMemo(
    () => [...bookings].sort((a, b) => (a.dateTime < b.dateTime ? 1 : -1)),
    [bookings]
  );

  const pendingQueriesCount = queries.filter(
    (q) => q.status !== "answered"
  ).length;
  const nextBooking = bookingsSorted.find((b) => b.status === "upcoming");
  const activeServicesCount = services.filter(
    (s) => s.status === "active"
  ).length;

  const nav = [
    {
      id: "overview",
      label: "Overview",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      id: "queries",
      label: "My Queries",
      icon: <MessageSquareText className="h-5 w-5" />,
    },
    {
      id: "test",
      label: "Career Test",
      icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: <CalendarDays className="h-5 w-5" />,
    },
    {
      id: "services",
      label: "Availed Services",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      id: "pricing",
      label: "Pricing",
      icon: <BadgeDollarSign className="h-5 w-5" />,
    },
    { id: "support", label: "Support", icon: <LifeBuoy className="h-5 w-5" /> },
  ];

  const logout = () => {
    localStorage.removeItem("tg_token");
    navigate("/");
  };

  const Sidebar = ({ isMobile = false }) => (
    <aside
      className="rounded-3xl border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] h-full"
      style={{ borderColor: COLORS.softBorder }}
    >
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div
            className="grid h-11 w-11 place-items-center rounded-2xl text-white font-extrabold"
            style={{ backgroundColor: COLORS.primary }}
          >
            TG
          </div>
          <div className="min-w-0">
            <div
              className="text-lg font-extrabold truncate"
              style={{ color: COLORS.primaryDark }}
            >
              TaleemiGuide
            </div>
            <div className="text-xs" style={{ color: COLORS.textGray }}>
              Guidance Dashboard
            </div>
          </div>
          {isMobile && (
            <button
              className="ml-auto grid h-10 w-10 place-items-center rounded-2xl border hover:bg-slate-50"
              style={{ borderColor: COLORS.softBorder }}
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" style={{ color: COLORS.textGray }} />
            </button>
          )}
        </div>

        <div className="mt-8 space-y-2">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  if (isMobile) setMobileSidebarOpen(false);
                }}
                className={`w-full rounded-2xl px-4 py-3 text-left transition flex items-center justify-between ${
                  isActive ? "shadow-sm" : "hover:bg-slate-50"
                }`}
                style={{
                  backgroundColor: isActive
                    ? COLORS.lightBackground
                    : "transparent",
                  border: `1px solid ${
                    isActive ? COLORS.softBorder : "transparent"
                  }`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{ color: isActive ? COLORS.primary : "#94A3B8" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: isActive ? COLORS.primaryDark : COLORS.textGray,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 opacity-40" />
              </button>
            );
          })}
        </div>

        <div
          className="mt-8 rounded-2xl border p-4"
          style={{
            borderColor: COLORS.softBorder,
            backgroundColor: COLORS.lightBackground,
          }}
        >
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5" style={{ color: COLORS.secondary }} />
            <div>
              <div
                className="text-sm font-bold"
                style={{ color: COLORS.primaryDark }}
              >
                Pro Tip
              </div>
              <div className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
                Complete the career test to get a downloadable report and
                recommendations.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom user block */}
      <div
        className="border-t p-4 rounded-b-3xl"
        style={{ borderColor: COLORS.softBorder }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-full border border-slate-200 bg-[#EFF6FF] grid place-items-center text-[#1E3A8A] font-bold">
              {user.name?.slice(0, 1)?.toUpperCase()}
            </div>
            <div className="min-w-0">
              <div
                className="truncate text-sm font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                {user.name}
              </div>
              <div
                className="truncate text-xs"
                style={{ color: COLORS.textGray }}
              >
                {user.email}
              </div>
            </div>
          </div>

          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen((s) => !s)}
              className="grid h-10 w-10 place-items-center rounded-2xl border hover:bg-slate-50"
              style={{ borderColor: COLORS.softBorder }}
              aria-label="User menu"
            >
              <MoreVertical
                className="h-5 w-5"
                style={{ color: COLORS.textGray }}
              />
            </button>

            {userMenuOpen && (
              <div
                className="absolute right-0 bottom-12 w-56 rounded-2xl border bg-white shadow-lg overflow-hidden z-50"
                style={{ borderColor: COLORS.softBorder }}
              >
                <button
                  className="w-full px-4 py-3 text-left text-sm hover:bg-slate-50"
                  onClick={() => {
                    setUserMenuOpen(false);
                    alert("Account Settings page later.");
                  }}
                >
                  Account Settings
                </button>
                <button
                  className="w-full px-4 py-3 text-left text-sm hover:bg-slate-50"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <Link
          to="/"
          className="mt-4 inline-block text-xs font-semibold"
          style={{ color: COLORS.secondary }}
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );

  // Main content switched by sidebar selection (single-file)
  const renderMain = () => {
    if (active === "queries") {
      return (
        <Card
          title="My Queries"
          subtitle="Your submitted questions and our responses."
          right={<BtnSecondary>Ask a Query</BtnSecondary>}
        >
          <div className="space-y-3">
            {queriesSorted.map((q) => (
              <div
                key={q.id}
                className="rounded-2xl border p-4"
                style={{ borderColor: COLORS.softBorder }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ color: COLORS.primaryDark }}
                    >
                      {q.subject}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: COLORS.textGray }}
                    >
                      Submitted: {q.createdAt}
                    </div>
                  </div>
                  <Badge tone={q.status === "answered" ? "green" : "yellow"}>
                    {q.status === "answered" ? "Answered" : "Pending"}
                  </Badge>
                </div>
                <div
                  className="mt-3 text-sm"
                  style={{ color: COLORS.primaryDark }}
                >
                  <span className="font-semibold">Q:</span> {q.question}
                </div>
                {q.response ? (
                  <div
                    className="mt-2 text-sm"
                    style={{ color: COLORS.textGray }}
                  >
                    <span className="font-semibold">A:</span> {q.response}
                  </div>
                ) : (
                  <div
                    className="mt-2 text-sm"
                    style={{ color: COLORS.textGray }}
                  >
                    Our team will respond soon.
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      );
    }

    if (active === "bookings") {
      return (
        <Card
          title="Bookings"
          subtitle="All one-to-one sessions. Newest at the top."
          right={<BtnPrimary>Book a Session</BtnPrimary>}
        >
          <div className="space-y-3">
            {bookingsSorted.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl border p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                style={{ borderColor: COLORS.softBorder }}
              >
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    {b.dateTime}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: COLORS.textGray }}
                  >
                    With: {b.counselor}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge tone={b.status === "upcoming" ? "blue" : "green"}>
                    {b.status}
                  </Badge>
                  <a
                    href={b.meetingLink}
                    className="rounded-2xl px-3 py-2 text-sm font-semibold border hover:bg-slate-50 flex items-center gap-2"
                    style={{ borderColor: COLORS.softBorder }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Card>
      );
    }

    if (active === "test") {
      return (
        <Card
          title="Career Assessment Test"
          subtitle="Track your test status and download your report."
          right={
            test.status === "completed" ? (
              <BtnSecondary className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </BtnSecondary>
            ) : (
              <BtnSecondary>Start Test</BtnSecondary>
            )
          }
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div
              className="rounded-2xl border p-4"
              style={{ borderColor: COLORS.softBorder }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: COLORS.textGray }}
              >
                Status
              </div>
              <div
                className="mt-2 text-sm font-bold"
                style={{ color: COLORS.primaryDark }}
              >
                {test.status.replace("_", " ")}
              </div>
            </div>

            <div
              className="rounded-2xl border p-4"
              style={{ borderColor: COLORS.softBorder }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: COLORS.textGray }}
              >
                Score
              </div>
              <div
                className="mt-2 text-sm font-bold"
                style={{ color: COLORS.primaryDark }}
              >
                {test.status === "completed" ? `${test.score}%` : "—"}
              </div>
            </div>

            <div
              className="rounded-2xl border p-4"
              style={{ borderColor: COLORS.softBorder }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: COLORS.textGray }}
              >
                Last Updated
              </div>
              <div
                className="mt-2 text-sm font-bold"
                style={{ color: COLORS.primaryDark }}
              >
                {test.updatedAt}
              </div>
            </div>
          </div>

          <div
            className="mt-5 rounded-2xl border p-5"
            style={{
              borderColor: COLORS.softBorder,
              backgroundColor: COLORS.lightBackground,
            }}
          >
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="h-5 w-5"
                style={{ color: COLORS.primary }}
              />
              <div>
                <div
                  className="text-sm font-bold"
                  style={{ color: COLORS.primaryDark }}
                >
                  Personalized recommendations
                </div>
                <div
                  className="mt-1 text-sm"
                  style={{ color: COLORS.textGray }}
                >
                  Your report includes suggested fields, degree paths, and next
                  steps based on your answers.
                </div>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    if (active === "services") {
      return (
        <Card
          title="Availed Services"
          subtitle="Services you have activated and can access anytime."
          right={<BtnGhost>Explore Services</BtnGhost>}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.id}
                className="rounded-3xl border p-5"
                style={{ borderColor: COLORS.softBorder }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="text-sm font-extrabold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    {s.title}
                  </div>
                  <Badge tone={s.status === "active" ? "green" : "gray"}>
                    {s.status}
                  </Badge>
                </div>
                <div
                  className="mt-3 flex items-center gap-2 text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  <Clock className="h-4 w-4" />
                  {s.startedAt} → {s.endsAt}
                </div>
                <BtnSecondary className="mt-4 w-full">
                  Open Service
                </BtnSecondary>
              </div>
            ))}
          </div>
        </Card>
      );
    }

    if (active === "pricing") {
      return (
        <Card
          title="Pricing (Only visible after login)"
          subtitle="Choose a plan to unlock more services and priority guidance."
          right={<BtnPrimary>Upgrade</BtnPrimary>}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.id}
                className="rounded-3xl border p-6"
                style={{
                  borderColor: COLORS.softBorder,
                  backgroundColor:
                    p.id === "plus" ? COLORS.lightBackground : "white",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-sm font-extrabold"
                      style={{ color: COLORS.primaryDark }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: COLORS.textGray }}
                    >
                      {p.note}
                    </div>
                  </div>
                  {p.id === "plus" && <Badge tone="orange">Recommended</Badge>}
                </div>

                <div
                  className="mt-4 text-2xl font-extrabold"
                  style={{ color: COLORS.primary }}
                >
                  {p.price}
                </div>

                <ul
                  className="mt-4 space-y-2 text-sm"
                  style={{ color: COLORS.textGray }}
                >
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <button
                  className="mt-5 w-full rounded-2xl py-2.5 text-sm font-semibold text-white hover:opacity-95 transition"
                  style={{
                    backgroundColor:
                      p.id === "plus" ? COLORS.secondary : COLORS.primary,
                  }}
                >
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </Card>
      );
    }

    if (active === "support") {
      return (
        <Card
          title="Help & Support"
          subtitle="We are here to help with bookings, reports, or guidance questions."
          right={<BtnSecondary>Contact Support</BtnSecondary>}
        >
          <div
            className="rounded-3xl border p-5"
            style={{
              borderColor: COLORS.softBorder,
              backgroundColor: COLORS.lightBackground,
            }}
          >
            <div
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Fast support inside dashboard
            </div>
            <div className="mt-2 text-sm" style={{ color: COLORS.textGray }}>
              You can also message us directly for urgent issues. We’ll respond
              as soon as possible.
            </div>
          </div>
        </Card>
      );
    }

    // OVERVIEW (default)
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm" style={{ color: COLORS.textGray }}>
              Welcome back
            </div>
            <div
              className="text-3xl font-extrabold tracking-tight"
              style={{ color: COLORS.primaryDark }}
            >
              {user.name}
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Badge tone={user.role === "Plus" ? "orange" : "gray"}>
                {user.role} User
              </Badge>
              <Badge tone={test.status === "completed" ? "green" : "yellow"}>
                Test: {test.status.replace("_", " ")}
              </Badge>
            </div>
          </div>

          {/* Mobile sidebar open */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-2xl border hover:bg-slate-50"
            style={{ borderColor: COLORS.softBorder }}
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" style={{ color: COLORS.textGray }} />
          </button>
        </div>

        {/* Quick Actions */}
        <div
          className="rounded-3xl border bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          style={{ borderColor: COLORS.softBorder }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div
                className="text-sm font-extrabold"
                style={{ color: COLORS.primaryDark }}
              >
                Quick Actions
              </div>
              <div className="text-sm mt-1" style={{ color: COLORS.textGray }}>
                Ask a query, book a session, or download your latest report.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <BtnSecondary onClick={() => setActive("queries")}>
                Ask a Query
              </BtnSecondary>
              <BtnPrimary onClick={() => setActive("bookings")}>
                Book a Session
              </BtnPrimary>
              <BtnGhost onClick={() => setActive("test")}>View Test</BtnGhost>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Stat
            icon={
              <MessageSquareText
                className="h-5 w-5"
                style={{ color: COLORS.primary }}
              />
            }
            label="Pending Queries"
            value={pendingQueriesCount}
            hint="We prioritize newest queries."
          />
          <Stat
            icon={
              <CalendarDays
                className="h-5 w-5"
                style={{ color: COLORS.primary }}
              />
            }
            label="Next Booking"
            value={nextBooking ? "Upcoming" : "None"}
            hint={
              nextBooking ? nextBooking.dateTime : "Book a session anytime."
            }
          />
          <Stat
            icon={
              <ClipboardCheck
                className="h-5 w-5"
                style={{ color: COLORS.primary }}
              />
            }
            label="Career Test"
            value={test.status === "completed" ? `${test.score}%` : "Not Done"}
            hint={
              test.status === "completed"
                ? "Download your report."
                : "Complete test to generate report."
            }
          />
          <Stat
            icon={
              <ShoppingBag
                className="h-5 w-5"
                style={{ color: COLORS.primary }}
              />
            }
            label="Active Services"
            value={activeServicesCount}
            hint="Your current active services."
          />
        </div>

        {/* Overview panels */}
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <Card
            title="Recent Queries"
            subtitle="Latest submitted items."
            right={
              <BtnGhost onClick={() => setActive("queries")}>View all</BtnGhost>
            }
          >
            <div className="space-y-3">
              {queriesSorted.slice(0, 3).map((q) => (
                <div
                  key={q.id}
                  className="rounded-2xl border p-4"
                  style={{ borderColor: COLORS.softBorder }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div
                        className="text-sm font-bold truncate"
                        style={{ color: COLORS.primaryDark }}
                      >
                        {q.subject}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: COLORS.textGray }}
                      >
                        Submitted: {q.createdAt}
                      </div>
                    </div>
                    <Badge tone={q.status === "answered" ? "green" : "yellow"}>
                      {q.status === "answered" ? "Answered" : "Pending"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card
              title="Test Report"
              subtitle="Your latest assessment report."
              right={
                test.status === "completed" ? (
                  <BtnSecondary className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download
                  </BtnSecondary>
                ) : (
                  <BtnSecondary>Start Test</BtnSecondary>
                )
              }
            >
              <div
                className="rounded-2xl border p-4"
                style={{
                  borderColor: COLORS.softBorder,
                  backgroundColor: COLORS.lightBackground,
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="text-sm font-bold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    Score
                  </div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: COLORS.primary }}
                  >
                    {test.status === "completed" ? `${test.score}%` : "—"}
                  </div>
                </div>
                <div
                  className="mt-2 text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Updated: {test.updatedAt}
                </div>
                <BtnGhost
                  className="mt-4 w-full"
                  onClick={() => setActive("test")}
                >
                  View details
                </BtnGhost>
              </div>
            </Card>

            <Card
              title="Plans"
              subtitle="Pricing is visible after login only."
              right={
                <BtnPrimary onClick={() => setActive("pricing")}>
                  View pricing
                </BtnPrimary>
              }
            >
              <div
                className="rounded-2xl border p-4"
                style={{ borderColor: COLORS.softBorder }}
              >
                <div
                  className="text-sm font-semibold"
                  style={{ color: COLORS.primaryDark }}
                >
                  Upgrade to unlock more guidance
                </div>
                <div
                  className="mt-1 text-sm"
                  style={{ color: COLORS.textGray }}
                >
                  Get priority responses, full reports, and premium roadmaps.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.surface }}>
      <div className="mx-auto max-w-[1400px] px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Mobile sidebar drawer */}
          {mobileSidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileSidebarOpen(false)}
              />
              <div className="absolute left-3 top-3 bottom-3 w-[92%] max-w-[380px]">
                <Sidebar isMobile />
              </div>
            </div>
          )}

          {/* Main */}
          <main className="space-y-6">{renderMain()}</main>
        </div>
      </div>
    </div>
  );
}
