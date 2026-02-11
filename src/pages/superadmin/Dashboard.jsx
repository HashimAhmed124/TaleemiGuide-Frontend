import React from "react";

const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
  surface: "#F8FAFC",
};

const StatCard = ({ title, value }) => (
  <div className="rounded-2xl border bg-white p-4" style={{ borderColor: COLORS.softBorder }}>
    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.textGray }}>
      {title}
    </div>
    <div className="mt-2 text-2xl font-extrabold" style={{ color: COLORS.primaryDark }}>
      {value}
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: COLORS.primaryDark }}>
          Dashboard
        </h1>
        <p className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
          Super Admin overview (KPIs + system health). We’ll connect real data later.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="—" />
        <StatCard title="Plus Users" value="—" />
        <StatCard title="Bookings" value="—" />
        <StatCard title="Revenue" value="—" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-white p-4" style={{ borderColor: COLORS.softBorder }}>
          <div className="font-bold" style={{ color: COLORS.primaryDark }}>Recent Activity</div>
          <div className="mt-2 text-sm" style={{ color: COLORS.textGray }}>
            Audit logs preview will go here.
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-4" style={{ borderColor: COLORS.softBorder }}>
          <div className="font-bold" style={{ color: COLORS.primaryDark }}>Pending Queue</div>
          <div className="mt-2 text-sm" style={{ color: COLORS.textGray }}>
            Refund requests / approvals will go here.
          </div>
        </div>
      </div>
    </div>
  );
}
