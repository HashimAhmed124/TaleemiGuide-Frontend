import { api, tokenStore } from "../lib/api";

export async function login(email, password) {
  const res = await api.post("/auth/login", { email, password });
  tokenStore.setAccess(res.data.accessToken);
  tokenStore.setRefresh(res.data.refreshToken);
  localStorage.setItem("tg_user", JSON.stringify(res.data.user));
  return res.data.user;
}

export async function logout() {
  const refreshToken = tokenStore.getRefresh();
  if (refreshToken) {
    try {
      await api.post("/auth/logout", { refreshToken });
    } catch {}
  }
  tokenStore.clear();
}

export async function me() {
  const res = await api.get("/users/me");
  return res.data;
}
