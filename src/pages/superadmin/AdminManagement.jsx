import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  ShieldCheck,
  Ban,
  Trash2,
  Pencil,
} from "lucide-react";
import { logAudit } from "../../utils/audit";
import { can } from "../../utils/rbac";

const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
  surface: "#F8FAFC",
};

const LS_KEY = "tg_admins_v1";

const actor = {
  actorRole: "SUPER_ADMIN",
  actorId: "super_admin_local",
  actorName: "Super Admin",
};

const seedAdmins = [
  {
    id: "adm_001",
    name: "System Admin",
    email: "admin@taleemiguide.com",
    status: "ACTIVE", // ACTIVE | SUSPENDED
    roles: ["Support Admin"],
    lastActive: "Today",
    createdAt: "2026-01-01",
  },
  {
    id: "adm_002",
    name: "Content Manager",
    email: "content@taleemiguide.com",
    status: "SUSPENDED",
    roles: ["Content Admin"],
    lastActive: "3 days ago",
    createdAt: "2025-12-29",
  },
];
const canInvite = can("admin.create");

function Badge({ children, tone = "neutral" }) {
  const toneCls =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : tone === "danger"
      ? "bg-rose-50 text-rose-700 border-rose-200"
      : "bg-slate-50 text-slate-700 border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${toneCls}`}
    >
      {children}
    </span>
  );
}

function ModalShell({ title, subtitle, children, onClose, footer }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[720px] rounded-3xl bg-white shadow-2xl">
        <div
          className="p-5 md:p-6 border-b"
          style={{ borderColor: COLORS.softBorder }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div
                className="text-xl md:text-2xl font-extrabold"
                style={{ color: COLORS.primaryDark }}
              >
                {title}
              </div>
              {subtitle && (
                <div
                  className="mt-1 text-sm"
                  style={{ color: COLORS.textGray }}
                >
                  {subtitle}
                </div>
              )}
            </div>
            <button
              className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>

        <div className="p-5 md:p-6">{children}</div>

        {footer && (
          <div
            className="p-5 md:p-6 border-t flex items-center justify-end gap-2"
            style={{ borderColor: COLORS.softBorder }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

function ActionsMenu({ onEdit, onToggleStatus, onDelete, status, canEdit, canToggle, canDelete }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="rounded-xl p-2 hover:bg-slate-100 transition"
        onClick={() => setOpen((v) => !v)}
        aria-label="Actions"
      >
        <MoreVertical className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-2xl border bg-white shadow-xl overflow-hidden"
          style={{ borderColor: COLORS.softBorder }}
        >
          <button
          disabled={!canEdit}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold ${!canEdit ? opacity-50 cursor-not-allowed} hover:bg-slate-50 transition"
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
          >
            <Pencil className="h-4 w-4" />
            Edit
          </button>

          <button
          disabled={!canToggle}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold hover:bg-slate-50 transition"
            onClick={() => {
              setOpen(false);
              onToggleStatus();
            }}
          >
            <Ban className="h-4 w-4" />
            {status === "ACTIVE" ? "Suspend" : "Activate"}
          </button>

          <button
          disabled={!canDelete}
            className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-rose-700 hover:bg-rose-50 transition"
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default function AdminManagement() {
  const [admins, setAdmins] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL"); // ALL | ACTIVE | SUSPENDED

  // Modals
  const [inviteOpen, setInviteOpen] = useState(false);
  const [editAdmin, setEditAdmin] = useState(null);

  // Invite form
  const [inviteForm, setInviteForm] = useState({
    name: "",
    email: "",
    roles: "Support Admin",
  });

  // Edit form
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    roles: "",
  });

  // Load/store local admins
  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) {
      localStorage.setItem(LS_KEY, JSON.stringify(seedAdmins));
      setAdmins(seedAdmins);
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      setAdmins(Array.isArray(parsed) ? parsed : seedAdmins);
    } catch {
      setAdmins(seedAdmins);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(admins));
  }, [admins]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return admins
      .filter((a) =>
        statusFilter === "ALL" ? true : a.status === statusFilter
      )
      .filter((a) => {
        if (!q) return true;
        return (
          a.name.toLowerCase().includes(q) ||
          a.email.toLowerCase().includes(q) ||
          (a.roles || []).join(",").toLowerCase().includes(q)
        );
      });
  }, [admins, query, statusFilter]);

  const openEdit = (admin) => {
    setEditAdmin(admin);
    setEditForm({
      name: admin.name,
      email: admin.email,
      roles: (admin.roles || []).join(", "),
    });
  };

  const toggleStatus = (adminId) => {
    const before = admins.find((x) => x.id === adminId);
    setAdmins((prev) =>
      prev.map((a) =>
        a.id === adminId
          ? { ...a, status: a.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE" }
          : a
      )
    );

    // after snapshot (approx) using before
    if (before) {
      const after = {
        ...before,
        status: before.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE",
      };
      logAudit({
        ...actor,
        module: "Admin Management",
        action:
          after.status === "SUSPENDED" ? "Suspend Admin" : "Activate Admin",
        entityType: "admin",
        entityId: adminId,
        before,
        after,
      });
    }
  };

  const deleteAdmin = (adminId) => {
    if (!confirm("Delete this admin? This cannot be undone.")) return;
    const before = admins.find((x) => x.id === adminId);
    logAudit({
      ...actor,
      module: "Admin Management",
      action: "Delete Admin",
      entityType: "admin",
      entityId: adminId,
      before,
      after: null,
    });

    setAdmins((prev) => prev.filter((a) => a.id !== adminId));
  };

  const submitInvite = (e) => {
    e.preventDefault();
    const name = inviteForm.name.trim();
    const email = inviteForm.email.trim().toLowerCase();
    const roles = inviteForm.roles
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);

    if (!name || !email) return;

    // prevent duplicates
    if (admins.some((a) => a.email.toLowerCase() === email)) {
      alert("An admin with this email already exists.");
      return;
    }

    const newAdmin = {
      id: `adm_${Math.random().toString(16).slice(2, 8)}`,
      name,
      email,
      status: "ACTIVE",
      roles: roles.length ? roles : ["Support Admin"],
      lastActive: "—",
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setAdmins((prev) => [newAdmin, ...prev]);
    setInviteForm({ name: "", email: "", roles: "Support Admin" });
    setInviteOpen(false);

    logAudit({
      ...actor,
      module: "Admin Management",
      action: "Invite Admin",
      entityType: "admin",
      entityId: newAdmin.id,
      before: null,
      after: newAdmin,
    });
  };

  const submitEdit = (e) => {
    e.preventDefault();
    if (!editAdmin) return;

    const name = editForm.name.trim();
    const email = editForm.email.trim().toLowerCase();
    const roles = editForm.roles
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);

    if (!name || !email) return;

    // prevent duplicates (except itself)
    if (
      admins.some(
        (a) => a.id !== editAdmin.id && a.email.toLowerCase() === email
      )
    ) {
      alert("Another admin already uses this email.");
      return;
    }
    const before = editAdmin;

    setAdmins((prev) =>
      prev.map((a) =>
        a.id === editAdmin.id
          ? { ...a, name, email, roles: roles.length ? roles : a.roles }
          : a
      )
    );
    setEditAdmin(null);

    logAudit({
      ...actor,
      module: "Admin Management",
      action: "Edit Admin",
      entityType: "admin",
      entityId: editAdmin.id,
      before,
      after: {
        ...before,
        name,
        email,
        roles: roles.length ? roles : before.roles,
      },
    });
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1
            className="text-2xl md:text-3xl font-extrabold"
            style={{ color: COLORS.primaryDark }}
          >
            Admin Management
          </h1>
          <p className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
            Create, suspend, and manage admins. (Mock data saved in localStorage
            for now.)
          </p>
        </div>

        <button
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-95 transition"
          style={{ backgroundColor: COLORS.primary }}
          onClick={() => setInviteOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Invite Admin
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-3">
        <div
          className="flex items-center gap-2 rounded-2xl border bg-white px-3 py-2.5"
          style={{ borderColor: COLORS.softBorder }}
        >
          <Search className="h-4 w-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email, role..."
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-2xl border bg-white px-3 py-2.5 text-sm font-semibold outline-none"
          style={{ borderColor: COLORS.softBorder }}
        >
          <option value="ALL">All status</option>
          <option value="ACTIVE">Active</option>
          <option value="SUSPENDED">Suspended</option>
        </select>
      </div>

      {/* Table */}
      <div
        className="rounded-3xl border overflow-hidden bg-white"
        style={{ borderColor: COLORS.softBorder }}
      >
        <div
          className="hidden md:grid grid-cols-[1.4fr_1.4fr_1fr_1fr_1fr_64px] gap-3 px-4 py-3 border-b text-xs font-extrabold uppercase tracking-wider"
          style={{
            borderColor: COLORS.softBorder,
            color: COLORS.textGray,
            background: COLORS.surface,
          }}
        >
          <div>Name</div>
          <div>Email</div>
          <div>Roles</div>
          <div>Status</div>
          <div>Last Active</div>
          <div className="text-right"> </div>
        </div>

        {filtered.length === 0 ? (
          <div className="p-6 text-sm" style={{ color: COLORS.textGray }}>
            No admins found.
          </div>
        ) : (
          filtered.map((a) => (
            <div
              key={a.id}
              className="grid grid-cols-1 md:grid-cols-[1.4fr_1.4fr_1fr_1fr_1fr_64px] gap-2 md:gap-3 px-4 py-4 border-b last:border-b-0"
              style={{ borderColor: COLORS.softBorder }}
            >
              <div className="min-w-0">
                <div
                  className="font-extrabold truncate"
                  style={{ color: COLORS.primaryDark }}
                >
                  {a.name}
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  ID: {a.id}
                </div>
              </div>

              <div className="min-w-0">
                <div
                  className="text-sm font-semibold truncate"
                  style={{ color: COLORS.primaryDark }}
                >
                  {a.email}
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Created: {a.createdAt}
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {(a.roles || []).slice(0, 2).map((r) => (
                  <Badge key={r}>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {r}
                    </span>
                  </Badge>
                ))}
                {(a.roles || []).length > 2 && (
                  <Badge>+{(a.roles || []).length - 2}</Badge>
                )}
              </div>

              <div>
                {a.status === "ACTIVE" ? (
                  <Badge tone="success">Active</Badge>
                ) : (
                  <Badge tone="danger">Suspended</Badge>
                )}
              </div>

              <div
                className="text-sm font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                {a.lastActive || "—"}
              </div>

              <div className="flex justify-end">
                <ActionsMenu
                  status={a.status}
                  canEdit={can("admin.update")}
                  canToggle={can("admin.suspend")}
                  canDelete={can("admin.delete")}
                  onEdit={() => openEdit(a)}
                  onToggleStatus={() => toggleStatus(a.id)}
                  onDelete={() => deleteAdmin(a.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Invite Modal */}
      {inviteOpen && (
        <ModalShell
          title="Invite Admin"
          subtitle="Create an admin account and assign initial roles."
          onClose={() => setInviteOpen(false)}
          footer={
            <>
              <button
                disabled={!canInvite}
                className={`... ${
                  !canInvite ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => canInvite && setInviteOpen(true)}
              >
                Cancel
              </button>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition"
                style={{ backgroundColor: COLORS.primary }}
                onClick={submitInvite}
              >
                Create Admin
              </button>
            </>
          }
        >
          <form
            onSubmit={submitInvite}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Full Name
              </label>
              <input
                value={inviteForm.name}
                onChange={(e) =>
                  setInviteForm((p) => ({ ...p, name: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
                placeholder="e.g., Support Admin"
                required
              />
            </div>

            <div>
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Email
              </label>
              <input
                value={inviteForm.email}
                onChange={(e) =>
                  setInviteForm((p) => ({ ...p, email: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
                placeholder="admin@email.com"
                type="email"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Roles (comma separated)
              </label>
              <input
                value={inviteForm.roles}
                onChange={(e) =>
                  setInviteForm((p) => ({ ...p, roles: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
                placeholder="Support Admin, Content Admin"
              />
              <p className="mt-2 text-xs" style={{ color: COLORS.textGray }}>
                We’ll connect this to the Roles & Permissions module next.
              </p>
            </div>
          </form>
        </ModalShell>
      )}

      {/* Edit Modal */}
      {editAdmin && (
        <ModalShell
          title="Edit Admin"
          subtitle={`Update details for ${editAdmin.name}`}
          onClose={() => setEditAdmin(null)}
          footer={
            <>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold hover:bg-slate-100 transition"
                onClick={() => setEditAdmin(null)}
              >
                Cancel
              </button>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition"
                style={{ backgroundColor: COLORS.primary }}
                onClick={submitEdit}
              >
                Save Changes
              </button>
            </>
          }
        >
          <form
            onSubmit={submitEdit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Full Name
              </label>
              <input
                value={editForm.name}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, name: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
                required
              />
            </div>

            <div>
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Email
              </label>
              <input
                value={editForm.email}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, email: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
                type="email"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Roles (comma separated)
              </label>
              <input
                value={editForm.roles}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, roles: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
              />
            </div>

            <div
              className="md:col-span-2 rounded-2xl border p-3 flex items-center justify-between"
              style={{
                borderColor: COLORS.softBorder,
                background: COLORS.surface,
              }}
            >
              <div>
                <div
                  className="text-sm font-extrabold"
                  style={{ color: COLORS.primaryDark }}
                >
                  Status
                </div>
                <div className="text-xs" style={{ color: COLORS.textGray }}>
                  Toggle active/suspended from the actions menu in table (kept
                  consistent).
                </div>
              </div>
              <Badge
                tone={editAdmin.status === "ACTIVE" ? "success" : "danger"}
              >
                {editAdmin.status === "ACTIVE" ? "Active" : "Suspended"}
              </Badge>
            </div>
          </form>
        </ModalShell>
      )}
    </div>
  );
}
