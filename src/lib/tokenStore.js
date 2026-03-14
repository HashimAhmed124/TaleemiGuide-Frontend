const ACCESS = "tg_access_token";
const REFRESH = "tg_refresh_token";
const USER = "tg_user";

export const tokenStore = {
  getAccess() {
    return localStorage.getItem(ACCESS);
  },
  setAccess(token) {
    if (!token) return;
    localStorage.setItem(ACCESS, token);
  },

  getRefresh() {
    return localStorage.getItem(REFRESH);
  },
  setRefresh(token) {
    if (!token) return;
    localStorage.setItem(REFRESH, token);
  },

  getUser() {
    const raw = localStorage.getItem(USER);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },
  setUser(user) {
    if (!user) return;
    localStorage.setItem(USER, JSON.stringify(user));
  },

  clear() {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);
    localStorage.removeItem(USER);

    // ✅ clean legacy keys too (remove the “dummy auth” system)
    localStorage.removeItem("tg_token");
    localStorage.removeItem("tg_role");
    localStorage.removeItem("tg_user_name");
  },
};
