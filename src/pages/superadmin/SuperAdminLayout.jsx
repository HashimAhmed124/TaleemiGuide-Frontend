import React, { useMemo, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { can } from "../../utils/rbac";

import {
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  FileSearch,
  LogOut,
  Menu,
  X,
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

const LS_ADMINS = "tg_admins_v1";

const applyDevAuth = (nextRole, nextAdminId = "") => {
  // token required for super-admin area; keep it set during switching
  if (!localStorage.getItem("tg_token")) {
    localStorage.setItem("tg_token", "demo-token");
  }

  localStorage.setItem("tg_role", nextRole);

  if (nextRole === "ADMIN") {
    // If no admin chosen, pick first active admin if available
    let chosen = nextAdminId || devAdminId;
    if (!chosen) {
      const firstActive =
        admins.find((a) => a.status === "ACTIVE") || admins[0];
      chosen = firstActive?.id || "";
    }
    if (chosen) localStorage.setItem("tg_auth_admin_id", chosen);
    else localStorage.removeItem("tg_auth_admin_id");
  } else {
    localStorage.removeItem("tg_auth_admin_id");
  }

  // Update local state too
  setDevRole(nextRole);
  setDevAdminId(nextRole === "ADMIN" ? nextAdminId || devAdminId : "");

  // Refresh to re-evaluate guards/links/routes
  window.location.reload();
};

const NavItem = ({ to, icon: Icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition
         ${isActive ? "text-white" : "text-slate-700 hover:bg-slate-100"}`
      }
      style={({ isActive }) =>
        isActive ? { backgroundColor: COLORS.primary } : {}
      }
      end={to === "/super-admin"}
    >
      <Icon className="h-5 w-5" />
      <span className="truncate">{label}</span>
    </NavLink>
  );
};

export default function SuperAdminLayout() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [devRole, setDevRole] = useState(
    localStorage.getItem("tg_role") || "USER"
  );
  const [devAdminId, setDevAdminId] = useState(
    localStorage.getItem("tg_auth_admin_id") || ""
  );
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_ADMINS);
      const list = raw ? JSON.parse(raw) : [];
      setAdmins(Array.isArray(list) ? list : []);
    } catch {
      setAdmins([]);
    }
  }, []);

  const links = useMemo(
    () => [
      {
        to: "/super-admin",
        icon: LayoutDashboard,
        label: "Dashboard",
        perm: "dashboard.read",
      },
      {
        to: "/super-admin/admins",
        icon: Users,
        label: "Admin Management",
        perm: "admin.read",
      },
      {
        to: "/super-admin/roles",
        icon: Shield,
        label: "Roles & Permissions",
        perm: "rbac.read",
      },
      {
        to: "/super-admin/audit-logs",
        icon: FileSearch,
        label: "Audit Logs",
        perm: "audit.read",
      },
      {
        to: "/super-admin/settings",
        icon: Settings,
        label: "System Settings (soon)",
        perm: "settings.read",
      },
    ],
    []
  );

  const logout = () => {
    localStorage.removeItem("tg_token");
    localStorage.removeItem("tg_role");
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen w-full" style={{ background: COLORS.surface }}>
      {/* Topbar */}
      <header
        className="sticky top-0 z-40 w-full border-b bg-white"
        style={{ borderColor: COLORS.softBorder }}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden rounded-xl p-2 hover:bg-slate-100 transition"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="flex flex-col leading-tight">
              <span
                className="text-sm font-extrabold"
                style={{ color: COLORS.primaryDark }}
              >
                Super Admin
              </span>
              <span className="text-xs" style={{ color: COLORS.textGray }}>
                TaleemiGuide Control Panel
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* ✅ Dev Auth Switcher */}
            <div
              className="hidden lg:flex items-center gap-2 rounded-2xl border bg-white px-3 py-2"
              style={{ borderColor: COLORS.softBorder }}
            >
              <span
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Dev Mode
              </span>

              <select
                value={devRole}
                onChange={(e) => {
                  const next = e.target.value;
                  // if switching to ADMIN, apply after admin selection (or auto-pick)
                  if (next === "ADMIN") {
                    setDevRole(next);
                  } else {
                    applyDevAuth(next, "");
                  }
                }}
                className="rounded-xl border px-2 py-1.5 text-xs font-extrabold outline-none"
                style={{ borderColor: COLORS.softBorder }}
                title="Switch auth role for testing"
              >
                <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>

              {devRole === "ADMIN" && (
                <>
                  <select
                    value={devAdminId}
                    onChange={(e) => setDevAdminId(e.target.value)}
                    className="rounded-xl border px-2 py-1.5 text-xs font-extrabold outline-none max-w-[220px]"
                    style={{ borderColor: COLORS.softBorder }}
                    title="Select an admin identity"
                  >
                    <option value="">Select admin…</option>
                    {admins.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name} ({a.status})
                      </option>
                    ))}
                  </select>

                  <button
                    className="rounded-xl px-2.5 py-1.5 text-xs font-extrabold text-white hover:opacity-95 transition"
                    style={{ backgroundColor: COLORS.secondary }}
                    onClick={() => applyDevAuth("ADMIN", devAdminId)}
                    disabled={!devAdminId && admins.length === 0}
                    title="Apply admin switch"
                  >
                    Apply
                  </button>
                </>
              )}

              {/* Small permission hint */}
              <span
                className="text-[11px] font-bold"
                style={{ color: COLORS.textGray }}
              >
                {devRole === "SUPER_ADMIN"
                  ? "All access"
                  : devRole === "ADMIN"
                  ? "RBAC limited"
                  : "No access"}
              </span>
            </div>

            <button
              className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 transition"
              onClick={() => navigate("/")}
              title="Back to website"
            >
              Website
            </button>

            <button
              className="rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition flex items-center gap-2"
              style={{ backgroundColor: COLORS.primary }}
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-[280px_1fr]">
        {/* Sidebar (desktop) */}
        <aside
          className="hidden md:block border-r bg-white"
          style={{ borderColor: COLORS.softBorder }}
        >
          <div className="sticky top-[61px] h-[calc(100vh-61px)] p-4">
            <div
              className="rounded-2xl border p-3"
              style={{
                borderColor: COLORS.softBorder,
                background: COLORS.surface,
              }}
            >
              <div
                className="mb-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Navigation
              </div>

              <nav className="space-y-1">
                {links
                  .filter((l) => !l.perm || can(l.perm))
                  .map((l) => (
                    <NavItem
                      key={l.to}
                      to={l.to}
                      icon={l.icon}
                      label={l.label}
                    />
                  ))}
              </nav>
            </div>

            <div
              className="mt-4 rounded-2xl border bg-white p-3"
              style={{ borderColor: COLORS.softBorder }}
            >
              <div
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Quick
              </div>
              <button
                className="mt-2 w-full rounded-xl px-3 py-2 text-sm font-semibold text-white hover:opacity-95 transition"
                style={{ backgroundColor: COLORS.secondary }}
                onClick={() => alert("Next: Invite Admin modal")}
              >
                + Invite Admin (next)
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl">
              <div
                className="flex items-center justify-between border-b p-4"
                style={{ borderColor: COLORS.softBorder }}
              >
                <div
                  className="font-extrabold"
                  style={{ color: COLORS.primaryDark }}
                >
                  Super Admin
                </div>
                <button
                  className="rounded-xl p-2 hover:bg-slate-100 transition"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4">
                <nav className="space-y-1">
                  {links.map((l) => (
                    <NavItem
                      key={l.to}
                      to={l.to}
                      icon={l.icon}
                      label={l.label}
                      onClick={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <main className="p-4 md:p-6">
          <div
            className="rounded-3xl border bg-white p-4 md:p-6 shadow-sm"
            style={{ borderColor: COLORS.softBorder }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
