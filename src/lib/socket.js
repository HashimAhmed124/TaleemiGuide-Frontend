import { io } from "socket.io-client";
import { tokenStore } from "./tokenStore";

const API_URL = import.meta.env.VITE_API_URL;

let socket = null;

export function connectSocket() {
  const token = tokenStore.getAccess();
  if (!token) return null;

  socket = io(API_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  socket.on("connect", () => console.log("✅ socket connected", socket.id));
  socket.on("connect_error", (e) => console.log("❌ socket error", e.message));

  return socket;
}

export function disconnectSocket() {
  if (socket) socket.disconnect();
  socket = null;
}

export function getSocket() {
  return socket;
}
