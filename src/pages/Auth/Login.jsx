import React, { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const COLORS = {
  primary: "#0B1C3C",
  secondary: "#F97316",
};

const DUMMY_ACCOUNTS = [
  {
    email: "user@demo.com",
    password: "User1234",
    role: "USER",
    name: "Demo User",
  },
  {
    email: "admin@demo.com",
    password: "Admin1234",
    role: "ADMIN",
    name: "Demo Admin",
  },
];

const Login = () => {
  const navigate = useNavigate();

  // ✅ Fix scrollbar
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setErr("");

    const found = DUMMY_ACCOUNTS.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );

    if (!found) {
      setErr("Invalid email or password (use the demo credentials).");
      return;
    }

    localStorage.setItem("tg_token", `demo-token-${found.role}`);
    localStorage.setItem("tg_role", found.role);
    localStorage.setItem("tg_user_name", found.name);

    if (found.role === "ADMIN") navigate("/super-admin");
    else navigate("/userdashboard");
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-gray-100 overflow-hidden">

      {/* LEFT SECTION */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center items-end p-10"
        style={{ backgroundImage: "url('/bg-8.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />

        <div className="relative z-10 text-white w-full max-w-xl">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
            style={{
              background: "rgba(249,115,22,0.18)",
              border: "1px solid rgba(249,115,22,0.35)",
            }}
          >
            TaleemiGuide • Quick Help
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight">
            Welcome Back to
            <span style={{ color: COLORS.secondary }}> TaleemiGuide</span>
          </h2>

          <p className="mt-3 text-sm text-slate-200 max-w-sm">
            Log in to access personalized academic guidance and expert support.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/10 border border-white/10 p-3">
              <p className="text-xs text-slate-200">Fast Login</p>
              <p className="text-sm font-semibold">
                Access your account quickly
              </p>
            </div>

            <div className="rounded-xl bg-white/10 border border-white/10 p-3">
              <p className="text-xs text-slate-200">Protected</p>
              <p className="text-sm font-semibold">
                Your information is safe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 mt-20">

          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-extrabold text-slate-900">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Login to continue to TaleemiGuide
            </p>
          </div>

          {/* Error */}
          {err && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {err}
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={onSubmit}>

            {/* Email */}
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>

              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="email"
                  placeholder="@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-600 font-semibold hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-slate-200 flex-1" />
              <span className="text-xs text-slate-400">OR</span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-slate-300 rounded-xl py-2.5 hover:bg-slate-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>

          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-slate-500">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;