import axios from "axios";
import { tokenStore } from "./tokenStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // keep true if backend sets refresh cookie; harmless otherwise
});

// Attach access token
api.interceptors.request.use((config) => {
  const token = tokenStore.getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Refresh on 401
let isRefreshing = false;
let pending = [];

function flushPending(err, token) {
  pending.forEach((p) => {
    if (err) p.reject(err);
    else p.resolve(token);
  });
  pending = [];
}

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    // If no response or not 401 → reject
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    // prevent infinite loop
    if (original._retry) return Promise.reject(error);
    original._retry = true;

    // If already refreshing, queue requests
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pending.push({
          resolve: (token) => {
            original.headers.Authorization = `Bearer ${token}`;
            resolve(api(original));
          },
          reject,
        });
      });
    }

    isRefreshing = true;

    try {
      // ✅ refresh endpoint (adjust path if your backend uses /api/v1/auth/refresh)
      const refreshRes = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/refresh`,
        {},
        { withCredentials: true }
      );

      const newAccess = refreshRes.data?.accessToken || refreshRes.data?.access_token;
      if (!newAccess) throw new Error("Refresh did not return access token");

      tokenStore.setAccess(newAccess);
      flushPending(null, newAccess);

      original.headers.Authorization = `Bearer ${newAccess}`;
      return api(original);
    } catch (e) {
      flushPending(e, null);
      tokenStore.clear();
      return Promise.reject(e);
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;
