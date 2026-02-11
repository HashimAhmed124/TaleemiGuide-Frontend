const AUDIT_LS_KEY = "tg_audit_logs_v1";

// Keep logs controlled in size
const MAX_LOGS = 500;

export function logAudit({
  actorRole = "SUPER_ADMIN",
  actorId = "super_admin_local",
  actorName = "Super Admin",
  module,
  action,
  entityType,
  entityId,
  before = null,
  after = null,
  meta = {},
}) {
  try {
    const raw = localStorage.getItem(AUDIT_LS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    const next = Array.isArray(list) ? list : [];

    const entry = {
      id: `log_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
      at: new Date().toISOString(),
      actor: { role: actorRole, id: actorId, name: actorName },
      module,
      action,
      entity: { type: entityType, id: entityId },
      before,
      after,
      meta,
    };

    next.unshift(entry);

    // cap size
    if (next.length > MAX_LOGS) next.length = MAX_LOGS;

    localStorage.setItem(AUDIT_LS_KEY, JSON.stringify(next));
    return entry.id;
  } catch (e) {
    // fail silently in UI for now
    return null;
  }
}

export function getAuditLogs() {
  try {
    const raw = localStorage.getItem(AUDIT_LS_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export function clearAuditLogs() {
  localStorage.removeItem(AUDIT_LS_KEY);
}
