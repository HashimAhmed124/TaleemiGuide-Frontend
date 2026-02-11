const LS_ROLES = "tg_roles_v1";
const LS_ADMIN_ROLES = "tg_admin_roles_map_v1";

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

export function getAuthContext() {
  const token = localStorage.getItem("tg_token");
  const role = localStorage.getItem("tg_role"); // SUPER_ADMIN | ADMIN | USER
  const adminId = localStorage.getItem("tg_auth_admin_id"); // only for ADMIN
  return { token, role, adminId };
}

export function getCurrentPermissionSet() {
  const { role, adminId } = getAuthContext();

  // Super Admin: allow everything (keep simple)
  if (role === "SUPER_ADMIN") return new Set(["*"]);

  // Admin: resolve permissions from assigned roles
  if (role === "ADMIN") {
    if (!adminId) return new Set(); // no adminId => no permissions

    const roles = safeParse(LS_ROLES, []);
    const map = safeParse(LS_ADMIN_ROLES, {});
    const assignedRoleIds = (map && map[adminId]) || [];

    const permSet = new Set();
    for (const rid of assignedRoleIds) {
      const roleObj = roles.find((r) => r.id === rid);
      if (!roleObj) continue;
      for (const code of roleObj.permissionCodes || []) permSet.add(code);
    }
    return permSet;
  }

  // Users: none for admin panel
  return new Set();
}

export function can(permissionCode) {
  const set = getCurrentPermissionSet();
  if (set.has("*")) return true;
  return set.has(permissionCode);
}

export function canAny(permissionCodes = []) {
  if (!Array.isArray(permissionCodes) || permissionCodes.length === 0) return true;
  return permissionCodes.some((p) => can(p));
}

export function canAll(permissionCodes = []) {
  if (!Array.isArray(permissionCodes) || permissionCodes.length === 0) return true;
  return permissionCodes.every((p) => can(p));
}
