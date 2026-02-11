import React, { useEffect, useMemo, useState } from "react";
import { can } from "../../utils/rbac";
import {
  Plus,
  Search,
  Trash2,
  Pencil,
  Save,
  Users,
  ShieldCheck,
} from "lucide-react";
import { logAudit } from "../../utils/audit";

const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
  surface: "#F8FAFC",
};

const LS_ROLES = "tg_roles_v1";
const LS_ADMIN_ROLES = "tg_admin_roles_map_v1"; // { [adminId]: [roleId, ...] }
const LS_ADMINS = "tg_admins_v1"; // from AdminManagement page

//permission flags
const canCreateRole = can("rbac.create");
const canEditRole = can("rbac.update");
const canDeleteRole = can("rbac.delete");
const canAssignRole = can("rbac.assign");

// Minimal, practical permission set (we can expand later)
const PERMISSIONS = [
  // Dashboard
  { code: "dashboard.read", module: "Dashboard", action: "Read" },

  // Admins
  { code: "admin.read", module: "Admins", action: "Read" },
  { code: "admin.create", module: "Admins", action: "Create" },
  { code: "admin.update", module: "Admins", action: "Update" },
  { code: "admin.suspend", module: "Admins", action: "Suspend/Activate" },
  { code: "admin.delete", module: "Admins", action: "Delete" },

  // RBAC
  { code: "rbac.read", module: "Roles & Permissions", action: "Read" },
  { code: "rbac.create", module: "Roles & Permissions", action: "Create" },
  { code: "rbac.update", module: "Roles & Permissions", action: "Update" },
  { code: "rbac.delete", module: "Roles & Permissions", action: "Delete" },
  {
    code: "rbac.assign",
    module: "Roles & Permissions",
    action: "Assign Roles",
  },

  // Users
  { code: "users.read", module: "Users", action: "Read" },
  { code: "users.update", module: "Users", action: "Update" },
  { code: "users.suspend", module: "Users", action: "Suspend/Ban" },
  { code: "users.upgrade", module: "Users", action: "Upgrade/Downgrade" },
  { code: "users.export", module: "Users", action: "Export" },

  // Services
  { code: "services.read", module: "Services", action: "Read" },
  { code: "services.create", module: "Services", action: "Create" },
  { code: "services.update", module: "Services", action: "Update" },
  { code: "services.toggle", module: "Services", action: "Toggle Active" },
  { code: "services.reorder", module: "Services", action: "Reorder" },

  // Bookings
  { code: "bookings.read", module: "Bookings", action: "Read" },
  { code: "bookings.update", module: "Bookings", action: "Update" },
  { code: "bookings.cancel", module: "Bookings", action: "Cancel" },
  { code: "bookings.export", module: "Bookings", action: "Export" },

  // Payments
  { code: "payments.read", module: "Payments", action: "Read" },
  {
    code: "payments.refund.approve",
    module: "Payments",
    action: "Approve Refund",
  },
  { code: "payments.refund.deny", module: "Payments", action: "Deny Refund" },
  { code: "payments.export", module: "Payments", action: "Export" },

  // Content
  { code: "announcements.read", module: "Announcements", action: "Read" },
  { code: "announcements.create", module: "Announcements", action: "Create" },
  { code: "announcements.update", module: "Announcements", action: "Update" },
  { code: "announcements.publish", module: "Announcements", action: "Publish" },
  { code: "announcements.delete", module: "Announcements", action: "Delete" },

  // Settings / Audit
  { code: "settings.read", module: "System Settings", action: "Read" },
  { code: "settings.update", module: "System Settings", action: "Update" },
  { code: "audit.read", module: "Audit Logs", action: "Read" },
];

const seedRoles = [
  {
    id: "role_support",
    name: "Support Admin",
    description: "Handles user queries and tickets. Limited system control.",
    permissionCodes: [
      "dashboard.read",
      "users.read",
      "tickets.read",
      "tickets.update",
      "tickets.assign",
      "tickets.close",
    ].filter(Boolean), // some codes not in list yet; ok
  },
  {
    id: "role_content",
    name: "Content Admin",
    description: "Manages announcements and service content.",
    permissionCodes: [
      "dashboard.read",
      "announcements.read",
      "announcements.create",
      "announcements.update",
      "announcements.publish",
      "services.read",
    ],
  },
  {
    id: "role_finance",
    name: "Finance Admin",
    description: "Views payments and handles refunds.",
    permissionCodes: [
      "dashboard.read",
      "payments.read",
      "payments.refund.approve",
      "payments.refund.deny",
      "payments.export",
    ],
  },
];

const actor = {
  actorRole: "SUPER_ADMIN",
  actorId: "super_admin_local",
  actorName: "Super Admin",
};

function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-extrabold bg-slate-50 text-slate-700 border-slate-200">
      <ShieldCheck className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function ModalShell({ title, subtitle, children, onClose, footer }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-[820px] rounded-3xl bg-white shadow-2xl">
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

export default function RolesPermissions() {
  // Load roles
  const [roles, setRoles] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  // Admin role assignment map {adminId: [roleId, ...]}
  const [adminRolesMap, setAdminRolesMap] = useState({});

  // Admins list from Admin Management
  const [admins, setAdmins] = useState([]);

  // UI state
  const [roleSearch, setRoleSearch] = useState("");
  const [permSearch, setPermSearch] = useState("");
  const [assignSearch, setAssignSearch] = useState("");

  // Modals
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  // Create/edit forms
  const [createForm, setCreateForm] = useState({ name: "", description: "" });
  const [editForm, setEditForm] = useState({ name: "", description: "" });

  useEffect(() => {
    const loadedRoles = safeParse(LS_ROLES, null);
    if (!loadedRoles) {
      localStorage.setItem(LS_ROLES, JSON.stringify(seedRoles));
      setRoles(seedRoles);
      setSelectedRoleId(seedRoles[0]?.id || null);
    } else {
      setRoles(Array.isArray(loadedRoles) ? loadedRoles : seedRoles);
      const first =
        (Array.isArray(loadedRoles) ? loadedRoles : seedRoles)[0]?.id || null;
      setSelectedRoleId(first);
    }

    const map = safeParse(LS_ADMIN_ROLES, {});
    setAdminRolesMap(map && typeof map === "object" ? map : {});

    const adm = safeParse(LS_ADMINS, []);
    setAdmins(Array.isArray(adm) ? adm : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_ROLES, JSON.stringify(roles));
  }, [roles]);

  useEffect(() => {
    localStorage.setItem(LS_ADMIN_ROLES, JSON.stringify(adminRolesMap));
  }, [adminRolesMap]);

  const selectedRole = useMemo(
    () => roles.find((r) => r.id === selectedRoleId) || null,
    [roles, selectedRoleId]
  );

  const permissionByModule = useMemo(() => {
    const q = permSearch.trim().toLowerCase();
    const filtered = PERMISSIONS.filter((p) => {
      if (!q) return true;
      return (
        p.code.toLowerCase().includes(q) ||
        p.module.toLowerCase().includes(q) ||
        p.action.toLowerCase().includes(q)
      );
    });

    const map = {};
    for (const p of filtered) {
      if (!map[p.module]) map[p.module] = [];
      map[p.module].push(p);
    }
    return map;
  }, [permSearch]);

  const filteredRoles = useMemo(() => {
    const q = roleSearch.trim().toLowerCase();
    return roles.filter((r) => {
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        (r.description || "").toLowerCase().includes(q)
      );
    });
  }, [roles, roleSearch]);

  const filteredAdmins = useMemo(() => {
    const q = assignSearch.trim().toLowerCase();
    return admins.filter((a) => {
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q) ||
        (a.status || "").toLowerCase().includes(q)
      );
    });
  }, [admins, assignSearch]);

  const updateSelectedRolePerms = (updater) => {
    if (!selectedRole) return;
    setRoles((prev) =>
      prev.map((r) => {
        if (r.id !== selectedRole.id) return r;
        const current = new Set(r.permissionCodes || []);
        const next = updater(current);
        return { ...r, permissionCodes: Array.from(next) };
      })
    );
    logAudit({
      ...actor,
      module: "Roles & Permissions",
      action: "Edit Role",
      entityType: "role",
      entityId: selectedRole.id,
      before,
      after: { ...before, name, description: editForm.description.trim() },
    });
  };

  const togglePermission = (code) => {
    updateSelectedRolePerms((set) => {
      if (set.has(code)) set.delete(code);
      else set.add(code);
      return set;
    });
    logAudit({
  ...actor,
  module: "Roles & Permissions",
  action: "Toggle Permission",
  entityType: "role_permission",
  entityId: `${selectedRole.id}:${code}`,
  before: { roleId: selectedRole.id, permission: code, enabled: (selectedRole.permissionCodes || []).includes(code) },
  after: { roleId: selectedRole.id, permission: code, enabled: !((selectedRole.permissionCodes || []).includes(code)) },
});

  };

  const toggleModule = (moduleName, add) => {
    const perms = (permissionByModule[moduleName] || []).map((p) => p.code);
    updateSelectedRolePerms((set) => {
      for (const code of perms) {
        if (add) set.add(code);
        else set.delete(code);
      }
      return set;
    });
  };

  const roleAssignedCount = (roleId) => {
    let count = 0;
    for (const adminId of Object.keys(adminRolesMap || {})) {
      const arr = adminRolesMap[adminId] || [];
      if (arr.includes(roleId)) count++;
    }
    return count;
  };

  const openEditRole = (role) => {
    setEditForm({ name: role.name, description: role.description || "" });
    setEditOpen(true);
  };

  const saveEditRole = () => {
    if (!selectedRole) return;
    const name = editForm.name.trim();
    if (!name) return;

    const before = selectedRole;

    setRoles((prev) =>
      prev.map((r) =>
        r.id === selectedRole.id
          ? { ...r, name, description: editForm.description.trim() }
          : r
      )
    );
    setEditOpen(false);
  };

  const createRole = () => {
    const name = createForm.name.trim();
    if (!name) return;

    const id = `role_${Math.random().toString(16).slice(2, 8)}`;
    const newRole = {
      id,
      name,
      description: createForm.description.trim(),
      permissionCodes: [],
    };

    logAudit({
      ...actor,
      module: "Roles & Permissions",
      action: "Create Role",
      entityType: "role",
      entityId: newRole.id,
      before: null,
      after: newRole,
    });

    setRoles((prev) => [newRole, ...prev]);
    setSelectedRoleId(id);
    setCreateForm({ name: "", description: "" });
    setCreateOpen(false);
  };

  const deleteRole = (roleId) => {
    const before = roles.find((r) => r.id === roleId);
    logAudit({
      ...actor,
      module: "Roles & Permissions",
      action: "Delete Role",
      entityType: "role",
      entityId: roleId,
      before,
      after: null,
      meta: { removedFromAdmins: true },
    });

    if (!role) return;

    const assigned = roleAssignedCount(roleId);
    const msg =
      assigned > 0
        ? `This role is assigned to ${assigned} admin(s). Deleting it will remove it from them. Continue?`
        : "Delete this role? This cannot be undone.";

    if (!confirm(msg)) return;

    // remove role from admins
    setAdminRolesMap((prev) => {
      const next = { ...(prev || {}) };
      for (const adminId of Object.keys(next)) {
        next[adminId] = (next[adminId] || []).filter((rid) => rid !== roleId);
      }
      return next;
    });

    // delete role
    setRoles((prev) => prev.filter((r) => r.id !== roleId));

    // update selected
    if (selectedRoleId === roleId) {
      const remaining = roles.filter((r) => r.id !== roleId);
      setSelectedRoleId(remaining[0]?.id || null);
    }
  };

  const toggleAdminRole = (adminId, roleId) => {
    setAdminRolesMap((prev) => {
      const next = { ...(prev || {}) };
      const current = new Set(next[adminId] || []);
      if (current.has(roleId)) current.delete(roleId);
      else current.add(roleId);
      next[adminId] = Array.from(current);
      return next;
    });

    logAudit({
  ...actor,
  module: "Roles & Permissions",
  action: "Assign/Unassign Role",
  entityType: "admin_role",
  entityId: `${adminId}:${roleId}`,
  before: { adminId, roleId, assigned: (prev?.[adminId] || []).includes(roleId) },
  after: { adminId, roleId, assigned: !((prev?.[adminId] || []).includes(roleId)) },
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
            Roles & Permissions
          </h1>
          <p className="mt-1 text-sm" style={{ color: COLORS.textGray }}>
            Define roles, assign permissions, and attach roles to admins.
            (localStorage-backed for now)
          </p>
        </div>

        <button
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-95 transition"
          style={{ backgroundColor: COLORS.primary }}
          onClick={() => setCreateOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Create Role
        </button>
      </div>

      {/* 3-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr_380px] gap-4">
        {/* LEFT: Roles list */}
        <div
          className="rounded-3xl border bg-white overflow-hidden"
          style={{ borderColor: COLORS.softBorder }}
        >
          <div
            className="p-4 border-b"
            style={{
              borderColor: COLORS.softBorder,
              background: COLORS.surface,
            }}
          >
            <div
              className="text-sm font-extrabold"
              style={{ color: COLORS.primaryDark }}
            >
              Roles
            </div>

            <div
              className="mt-3 flex items-center gap-2 rounded-2xl border bg-white px-3 py-2.5"
              style={{ borderColor: COLORS.softBorder }}
            >
              <Search className="h-4 w-4" />
              <input
                value={roleSearch}
                onChange={(e) => setRoleSearch(e.target.value)}
                placeholder="Search roles..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div className="p-2">
            {filteredRoles.length === 0 ? (
              <div className="p-4 text-sm" style={{ color: COLORS.textGray }}>
                No roles found.
              </div>
            ) : (
              <div className="space-y-2">
                {filteredRoles.map((r) => {
                  const active = r.id === selectedRoleId;
                  const assignedCount = roleAssignedCount(r.id);

                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRoleId(r.id)}
                      className={`w-full text-left rounded-2xl border px-3 py-3 transition ${
                        active ? "bg-slate-50" : "hover:bg-slate-50"
                      }`}
                      style={{ borderColor: COLORS.softBorder }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div
                            className="font-extrabold truncate"
                            style={{ color: COLORS.primaryDark }}
                          >
                            {r.name}
                          </div>
                          <div
                            className="mt-1 text-xs line-clamp-2"
                            style={{ color: COLORS.textGray }}
                          >
                            {r.description || "—"}
                          </div>
                        </div>

                        <div
                          className="shrink-0 text-xs font-extrabold rounded-full border px-2 py-1"
                          style={{
                            borderColor: COLORS.softBorder,
                            color: COLORS.textGray,
                          }}
                        >
                          {assignedCount} assigned
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* CENTER: Permissions Matrix */}
        <div
          className="rounded-3xl border bg-white overflow-hidden"
          style={{ borderColor: COLORS.softBorder }}
        >
          <div
            className="p-4 border-b"
            style={{
              borderColor: COLORS.softBorder,
              background: COLORS.surface,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div
                  className="text-sm font-extrabold"
                  style={{ color: COLORS.primaryDark }}
                >
                  Permissions
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Select a role, then toggle permissions below.
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="rounded-2xl px-3 py-2 text-sm font-extrabold border hover:bg-white transition"
                  style={{ borderColor: COLORS.softBorder }}
                  onClick={() => selectedRole && openEditRole(selectedRole)}
                  disabled={!selectedRole}
                  title={
                    !selectedRole ? "Select a role first" : "Edit role details"
                  }
                >
                  <span className="inline-flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    Edit Role
                  </span>
                </button>

                <button
                  className="rounded-2xl px-3 py-2 text-sm font-extrabold border hover:bg-rose-50 transition text-rose-700"
                  style={{ borderColor: COLORS.softBorder }}
                  onClick={() => selectedRole && deleteRole(selectedRole.id)}
                  disabled={!selectedRole}
                  title={!selectedRole ? "Select a role first" : "Delete role"}
                >
                  <span className="inline-flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </span>
                </button>
              </div>
            </div>

            <div
              className="mt-3 flex items-center gap-2 rounded-2xl border bg-white px-3 py-2.5"
              style={{ borderColor: COLORS.softBorder }}
            >
              <Search className="h-4 w-4" />
              <input
                value={permSearch}
                onChange={(e) => setPermSearch(e.target.value)}
                placeholder="Search permissions (module, action, code)..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {!selectedRole ? (
            <div className="p-6 text-sm" style={{ color: COLORS.textGray }}>
              Select a role to start editing permissions.
            </div>
          ) : (
            <div className="p-4 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{selectedRole.name}</Badge>
                <span
                  className="text-xs font-semibold"
                  style={{ color: COLORS.textGray }}
                >
                  {selectedRole.permissionCodes?.length || 0} permission(s)
                  selected
                </span>
              </div>

              <div className="space-y-4">
                {Object.keys(permissionByModule).length === 0 ? (
                  <div className="text-sm" style={{ color: COLORS.textGray }}>
                    No permissions match your search.
                  </div>
                ) : (
                  Object.entries(permissionByModule).map(
                    ([moduleName, perms]) => {
                      const selectedSet = new Set(
                        selectedRole.permissionCodes || []
                      );
                      const total = perms.length;
                      const selectedCount = perms.filter((p) =>
                        selectedSet.has(p.code)
                      ).length;
                      const allSelected = total > 0 && selectedCount === total;

                      return (
                        <div
                          key={moduleName}
                          className="rounded-2xl border overflow-hidden"
                          style={{ borderColor: COLORS.softBorder }}
                        >
                          <div
                            className="px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                            style={{ background: COLORS.surface }}
                          >
                            <div className="min-w-0">
                              <div
                                className="font-extrabold truncate"
                                style={{ color: COLORS.primaryDark }}
                              >
                                {moduleName}
                              </div>
                              <div
                                className="text-xs"
                                style={{ color: COLORS.textGray }}
                              >
                                {selectedCount}/{total} selected
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                className="rounded-xl px-3 py-2 text-xs font-extrabold border hover:bg-white transition"
                                style={{ borderColor: COLORS.softBorder }}
                                onClick={() => toggleModule(moduleName, true)}
                              >
                                Select all
                              </button>
                              <button
                                className="rounded-xl px-3 py-2 text-xs font-extrabold border hover:bg-white transition"
                                style={{ borderColor: COLORS.softBorder }}
                                onClick={() => toggleModule(moduleName, false)}
                              >
                                Clear
                              </button>
                              <span
                                className={`text-xs font-extrabold rounded-full border px-2 py-1 ${
                                  allSelected
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : "bg-white text-slate-700"
                                }`}
                                style={{ borderColor: COLORS.softBorder }}
                              >
                                {allSelected ? "All selected" : "Partial"}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {perms.map((p) => {
                              const checked = selectedSet.has(p.code);
                              return (
                                <label
                                  key={p.code}
                                  className="flex items-start gap-3 rounded-2xl border p-3 hover:bg-slate-50 transition cursor-pointer"
                                  style={{ borderColor: COLORS.softBorder }}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() => togglePermission(p.code)}
                                    className="mt-1 h-4 w-4"
                                  />
                                  <div className="min-w-0">
                                    <div
                                      className="text-sm font-extrabold"
                                      style={{ color: COLORS.primaryDark }}
                                    >
                                      {p.action}
                                    </div>
                                    <div
                                      className="mt-1 text-xs break-all"
                                      style={{ color: COLORS.textGray }}
                                    >
                                      {p.code}
                                    </div>
                                  </div>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  )
                )}
              </div>

              <div
                className="rounded-2xl border p-4 flex items-center justify-between"
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
                    Changes are saved automatically
                  </div>
                  <div className="text-xs" style={{ color: COLORS.textGray }}>
                    (We’ll add audit logs next to track who changed what.)
                  </div>
                </div>

                <div
                  className="inline-flex items-center gap-2 text-xs font-extrabold"
                  style={{ color: COLORS.textGray }}
                >
                  <Save className="h-4 w-4" />
                  Saved to localStorage
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Assign roles to admins */}
        <div
          className="rounded-3xl border bg-white overflow-hidden"
          style={{ borderColor: COLORS.softBorder }}
        >
          <div
            className="p-4 border-b"
            style={{
              borderColor: COLORS.softBorder,
              background: COLORS.surface,
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  className="text-sm font-extrabold"
                  style={{ color: COLORS.primaryDark }}
                >
                  Assign Roles
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Attach roles to existing admins.
                </div>
              </div>
              <div
                className="inline-flex items-center gap-2 text-xs font-extrabold"
                style={{ color: COLORS.textGray }}
              >
                <Users className="h-4 w-4" />
                {admins.length} admin(s)
              </div>
            </div>

            <div
              className="mt-3 flex items-center gap-2 rounded-2xl border bg-white px-3 py-2.5"
              style={{ borderColor: COLORS.softBorder }}
            >
              <Search className="h-4 w-4" />
              <input
                value={assignSearch}
                onChange={(e) => setAssignSearch(e.target.value)}
                placeholder="Search admins..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div className="p-3 space-y-3">
            {admins.length === 0 ? (
              <div className="p-3 text-sm" style={{ color: COLORS.textGray }}>
                No admins found. Create admins from <b>Admin Management</b>{" "}
                first.
              </div>
            ) : !selectedRole ? (
              <div className="p-3 text-sm" style={{ color: COLORS.textGray }}>
                Select a role to assign it to admins.
              </div>
            ) : filteredAdmins.length === 0 ? (
              <div className="p-3 text-sm" style={{ color: COLORS.textGray }}>
                No admins match your search.
              </div>
            ) : (
              filteredAdmins.map((a) => {
                const assigned = (adminRolesMap[a.id] || []).includes(
                  selectedRole.id
                );

                return (
                  <div
                    key={a.id}
                    className="rounded-2xl border p-3 flex items-start justify-between gap-3"
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
                        className="mt-1 text-xs truncate"
                        style={{ color: COLORS.textGray }}
                      >
                        {a.email}
                      </div>
                      <div className="mt-2 text-xs font-extrabold inline-flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2 py-1 ${
                            a.status === "ACTIVE"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-rose-50 text-rose-700 border-rose-200"
                          }`}
                        >
                          {a.status === "ACTIVE" ? "Active" : "Suspended"}
                        </span>
                        <span className="text-slate-500">ID: {a.id}</span>
                      </div>
                    </div>

                    <button
                      className={`shrink-0 rounded-2xl px-3 py-2 text-sm font-extrabold border transition ${
                        assigned
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "hover:bg-slate-50"
                      }`}
                      style={{ borderColor: COLORS.softBorder }}
                      onClick={() => toggleAdminRole(a.id, selectedRole.id)}
                      disabled={!selectedRole}
                      title={
                        assigned
                          ? "Click to remove role"
                          : "Click to assign role"
                      }
                    >
                      {assigned ? "Assigned" : "Assign"}
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Create Role Modal */}
      {createOpen && (
        <ModalShell
          title="Create Role"
          subtitle="Add a new role and then select permissions for it."
          onClose={() => setCreateOpen(false)}
          footer={
            <>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold hover:bg-slate-100 transition"
                onClick={() => setCreateOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition"
                style={{ backgroundColor: COLORS.primary }}
                onClick={createRole}
              >
                Create
              </button>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Role Name
              </label>
              <input
                value={createForm.name}
                onChange={(e) =>
                  setCreateForm((p) => ({ ...p, name: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none"
                style={{ borderColor: COLORS.softBorder }}
                placeholder="e.g., Finance Admin"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Description
              </label>
              <textarea
                value={createForm.description}
                onChange={(e) =>
                  setCreateForm((p) => ({ ...p, description: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none min-h-[110px]"
                style={{ borderColor: COLORS.softBorder }}
                placeholder="What can this role do?"
              />
            </div>
          </div>
        </ModalShell>
      )}

      {/* Edit Role Modal */}
      {editOpen && selectedRole && (
        <ModalShell
          title="Edit Role"
          subtitle={`Update role details for "${selectedRole.name}"`}
          onClose={() => setEditOpen(false)}
          footer={
            <>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold hover:bg-slate-100 transition"
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-2xl px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition"
                style={{ backgroundColor: COLORS.primary }}
                onClick={saveEditRole}
              >
                Save
              </button>
            </>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Role Name
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

            <div className="md:col-span-2">
              <label
                className="text-xs font-extrabold uppercase tracking-wider"
                style={{ color: COLORS.textGray }}
              >
                Description
              </label>
              <textarea
                value={editForm.description}
                onChange={(e) =>
                  setEditForm((p) => ({ ...p, description: e.target.value }))
                }
                className="mt-2 w-full rounded-2xl border px-3 py-3 text-sm outline-none min-h-[110px]"
                style={{ borderColor: COLORS.softBorder }}
              />
            </div>
          </div>
        </ModalShell>
      )}
    </div>
  );
}
