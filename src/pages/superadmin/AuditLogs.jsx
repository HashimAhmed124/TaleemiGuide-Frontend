import React, { useMemo, useState } from "react";
import { Search, Trash2, Download, Eye } from "lucide-react";
import { clearAuditLogs, getAuditLogs } from "../../utils/audit";

const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
  surface: "#F8FAFC",
};

function Badge({ children, tone = "neutral" }) {
  const toneCls =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : tone === "danger"
      ? "bg-rose-50 text-rose-700 border-rose-200"
      : tone === "warning"
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-slate-50 text-slate-700 border-slate-200";

  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-extrabold ${toneCls}`}>
      {children}
    </span>
  );
}

function formatLocal(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AuditLogs() {
  const [query, setQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState("ALL");
  const [actionFilter, setActionFilter] = useState("ALL");
  const [selected, setSelected] = useState(null);

  const logs = useMemo(() => getAuditLogs(), []);

  const modules = useMemo(() => {
    const set = new Set(logs.map((l) => l.module).filter(Boolean));
    return ["ALL", ...Array.from(set).sort()];
  }, [logs]);

  const actions = useMemo(() => {
    const set = new Set(logs.map((l) => l.action).filter(Boolean));
    return ["ALL", ...Array.from(set).sort()];
  }, [logs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return logs
      .filter((l) => (moduleFilter === "ALL" ? true : l.module === moduleFilter))
      .filter((l) => (actionFilter === "ALL" ? true : l.action === actionFilter))
      .filter((l) => {
        if (!q) return true;
        const hay = [
          l.module,
          l.action,
          l.entity?.type,
          l.entity?.id,
          l.actor?.name,
          l.actor?.role,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
  }, [logs, query, moduleFilter, actionFilter]);

  const actionTone = (action) => {
    const a = (action || "").toLowerCase();
    if (a.includes("delete")) return "danger";
    if (a.includes("suspend") || a.includes("ban")) return "warning";
    if (a.includes("create") || a.includes("invite") || a.includes("assign")) return "success";
    return "neutral";
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold" style={{ color: COLORS.primaryDark }}>
            Audit Logs
          </h1>
          <p className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
            Track every sensitive action performed by admins (localStorage-based for now).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="rounded-2xl px-3 py-2.5 text-sm font-extrabold border hover:bg-slate-50 transition inline-flex items-center gap-2"
            style={{ borderColor: COLORS.softBorder }}
            onClick={() => downloadJson("audit-logs.json", logs)}
            title="Export logs as JSON"
          >
            <Download className="h-4 w-4" />
            Export
          </button>

          <button
            className="rounded-2xl px-3 py-2.5 text-sm font-extrabold border text-rose-700 hover:bg-rose-50 transition inline-flex items-center gap-2"
            style={{ borderColor: COLORS.softBorder }}
            onClick={() => {
              if (!confirm("Clear all audit logs?")) return;
              clearAuditLogs();
              location.reload();
            }}
            title="Clear logs"
          >
            <Trash2 className="h-4 w-4" />
            Clear
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px_240px] gap-3">
        <div className="flex items-center gap-2 rounded-2xl border bg-white px-3 py-2.5" style={{ borderColor: COLORS.softBorder }}>
          <Search className="h-4 w-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search module, action, actor, entity..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        <select
          value={moduleFilter}
          onChange={(e) => setModuleFilter(e.target.value)}
          className="rounded-2xl border bg-white px-3 py-2.5 text-sm font-semibold outline-none"
          style={{ borderColor: COLORS.softBorder }}
        >
          {modules.map((m) => (
            <option key={m} value={m}>
              {m === "ALL" ? "All modules" : m}
            </option>
          ))}
        </select>

        <select
          value={actionFilter}
          onChange={(e) => setActionFilter(e.target.value)}
          className="rounded-2xl border bg-white px-3 py-2.5 text-sm font-semibold outline-none"
          style={{ borderColor: COLORS.softBorder }}
        >
          {actions.map((a) => (
            <option key={a} value={a}>
              {a === "ALL" ? "All actions" : a}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="rounded-3xl border overflow-hidden bg-white" style={{ borderColor: COLORS.softBorder }}>
        <div
          className="hidden md:grid grid-cols-[220px_160px_1fr_1fr_180px_60px] gap-3 px-4 py-3 border-b text-xs font-extrabold uppercase tracking-wider"
          style={{ borderColor: COLORS.softBorder, color: COLORS.textGray, background: COLORS.surface }}
        >
          <div>Time</div>
          <div>Actor</div>
          <div>Module</div>
          <div>Action</div>
          <div>Entity</div>
          <div className="text-right"> </div>
        </div>

        {filtered.length === 0 ? (
          <div className="p-6 text-sm" style={{ color: COLORS.textGray }}>
            No logs found.
          </div>
        ) : (
          filtered.map((l) => (
            <div
              key={l.id}
              className="grid grid-cols-1 md:grid-cols-[220px_160px_1fr_1fr_180px_60px] gap-2 md:gap-3 px-4 py-4 border-b last:border-b-0"
              style={{ borderColor: COLORS.softBorder }}
            >
              <div>
                <div className="text-sm font-extrabold" style={{ color: COLORS.primaryDark }}>
                  {formatLocal(l.at)}
                </div>
                <div className="mt-1 text-xs" style={{ color: COLORS.textGray }}>
                  {l.id}
                </div>
              </div>

              <div className="min-w-0">
                <div className="text-sm font-extrabold truncate" style={{ color: COLORS.primaryDark }}>
                  {l.actor?.name || "—"}
                </div>
                <div className="mt-1 text-xs truncate" style={{ color: COLORS.textGray }}>
                  {l.actor?.role || "—"}
                </div>
              </div>

              <div className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>
                {l.module || "—"}
              </div>

              <div className="flex items-center gap-2">
                <Badge tone={actionTone(l.action)}>{l.action || "—"}</Badge>
              </div>

              <div className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>
                {(l.entity?.type || "—") + " / " + (l.entity?.id || "—")}
              </div>

              <div className="flex justify-end">
                <button
                  className="rounded-xl p-2 hover:bg-slate-100 transition"
                  onClick={() => setSelected(l)}
                  title="View details"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Details Modal */}
      {selected && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-[900px] rounded-3xl bg-white shadow-2xl">
            <div className="p-5 md:p-6 border-b" style={{ borderColor: COLORS.softBorder }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl md:text-2xl font-extrabold" style={{ color: COLORS.primaryDark }}>
                    Log Details
                  </div>
                  <div className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
                    {formatLocal(selected.at)} • {selected.module} • {selected.action}
                  </div>
                </div>
                <button
                  className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 transition"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </div>

            <div className="p-5 md:p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-2xl border p-3" style={{ borderColor: COLORS.softBorder }}>
                  <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: COLORS.textGray }}>
                    Actor
                  </div>
                  <div className="mt-2 text-sm font-extrabold" style={{ color: COLORS.primaryDark }}>
                    {selected.actor?.name || "—"}
                  </div>
                  <div className="mt-1 text-xs" style={{ color: COLORS.textGray }}>
                    {selected.actor?.role || "—"} • {selected.actor?.id || "—"}
                  </div>
                </div>

                <div className="rounded-2xl border p-3" style={{ borderColor: COLORS.softBorder }}>
                  <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: COLORS.textGray }}>
                    Entity
                  </div>
                  <div className="mt-2 text-sm font-extrabold" style={{ color: COLORS.primaryDark }}>
                    {selected.entity?.type || "—"}
                  </div>
                  <div className="mt-1 text-xs" style={{ color: COLORS.textGray }}>
                    {selected.entity?.id || "—"}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border p-3" style={{ borderColor: COLORS.softBorder }}>
                <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: COLORS.textGray }}>
                  Meta
                </div>
                <pre className="mt-2 text-xs overflow-auto bg-slate-50 rounded-2xl p-3 border"
                     style={{ borderColor: COLORS.softBorder }}>
{JSON.stringify(selected.meta || {}, null, 2)}
                </pre>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="rounded-2xl border p-3" style={{ borderColor: COLORS.softBorder }}>
                  <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: COLORS.textGray }}>
                    Before
                  </div>
                  <pre className="mt-2 text-xs overflow-auto bg-slate-50 rounded-2xl p-3 border"
                       style={{ borderColor: COLORS.softBorder }}>
{JSON.stringify(selected.before, null, 2)}
                  </pre>
                </div>

                <div className="rounded-2xl border p-3" style={{ borderColor: COLORS.softBorder }}>
                  <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: COLORS.textGray }}>
                    After
                  </div>
                  <pre className="mt-2 text-xs overflow-auto bg-slate-50 rounded-2xl p-3 border"
                       style={{ borderColor: COLORS.softBorder }}>
{JSON.stringify(selected.after, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-6 border-t flex items-center justify-end gap-2" style={{ borderColor: COLORS.softBorder }}>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold border hover:bg-slate-50 transition"
                style={{ borderColor: COLORS.softBorder }}
                onClick={() => downloadJson(`audit-log-${selected.id}.json`, selected)}
              >
                Download Entry
              </button>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition"
                style={{ backgroundColor: COLORS.primary }}
                onClick={() => setSelected(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
