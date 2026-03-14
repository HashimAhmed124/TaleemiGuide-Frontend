import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { RequireAuth, RequireRole, RequirePermission } from "./components/guards";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Landing sections
import Hero from "./components/hompage/Hero";
import ForWhom from "./components/hompage/forWhom";
import OurServices from "./components/hompage/OurServices";
import TheProcess from "./components/hompage/TheProcess";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/hompage/Testimonials";

// Pages
import AboutUs from "./pages/about";
import Service from "./pages/Service";

// Service pages
import Class10Guidance from "./pages/servicepages/Class-10-Guidance";
import Class12Guidance from "./pages/servicepages/Class12Guidance";
import CareerAssessmentTest from "./pages/servicepages/CareerAssessmentTest";
import SubjectClassification from "./pages/servicepages/SubjectClassification";
import UniveristyProgramFinder from "./pages/servicepages/UniversityProgramFinder";
import UniversityGraduatesGuidance from "./pages/servicepages/UniversityGraduatesGuidance";
import WorkingProfessional from "./pages/servicepages/WorkingProfessionalsGuidance";
import OnlineSession from "./pages/servicepages/OnlineSessionPage";
import TaleemiAdvice from "./pages/servicepages/TaleemiAdvicePage";
import TaleemiAnnouncement from "./pages/servicepages/TaleemiAnnouncementsPage";

// Auth
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// Dashboards
import UserDashboard from "./pages/dashboards/userdashboard";

// Super Admin
import SuperAdminLayout from "./pages/superadmin/SuperAdminLayout";
import SuperAdminDashboard from "./pages/superadmin/Dashboard";
import AdminManagement from "./pages/superadmin/AdminManagement";
import RolesPermissions from "./pages/superadmin/RolesPermissions";
import AuditLogs from "./pages/superadmin/AuditLogs";

// 🔥 NEW: socket + auth services
import { connectSocket, disconnectSocket, getSocket } from "./lib/socket";
import { tokenStore } from "./lib/tokenStore";

const Home = () => (
  <div className="w-full min-h-screen">
    <Hero />
    <ForWhom />
    <OurServices />
    <TheProcess />
    <ContactUs />
    <Testimonials />
  </div>
);

const ServiceWrapper = () => {
  const navigate = useNavigate();
  return <Service onNavigate={navigate} />;
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState(null);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  /**
   * 🔥 Sync auth state from localStorage
   */
  useEffect(() => {
    const token = tokenStore.getAccess();
    const rawUser = localStorage.getItem("tg_user");

    if (token && rawUser) {
      setIsAuthed(true);
      setUser(JSON.parse(rawUser));
      connectSocket(); // 🔥 connect realtime
    } else {
      setIsAuthed(false);
      setUser(null);
      disconnectSocket();
    }
  }, []);

  /**
   * 🔥 Socket listeners
   */
  useEffect(() => {
    if (!isAuthed) return;

    const socket = getSocket();
    if (!socket) return;

    socket.on("notification:new", () => {
      setUnreadNotifications((prev) => prev + 1);
    });

    return () => {
      socket.off("notification:new");
    };
  }, [isAuthed]);

  /**
   * 🔥 Logout
   */
  const handleLogout = async () => {
    const refreshToken = tokenStore.getRefresh();

    if (refreshToken) {
      try {
        await fetch("http://localhost:5000/auth/logout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        });
      } catch {}
    }

    tokenStore.clear();
    disconnectSocket();
    setIsAuthed(false);
    setUser(null);
    navigate("/login");
  };

  const isSuperAdminRoute = location.pathname.startsWith("/super-admin");
  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="w-full min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      {!isSuperAdminRoute && (
        <Navbar
          isAuthed={isAuthed}
          user={user}
          unreadNotifications={unreadNotifications}
          unreadMessages={0}
          onLogout={handleLogout}
        />
      )}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<ServiceWrapper />} />

        {/* Services */}
        <Route path="/service/class-10-guidance" element={<Class10Guidance />} />
        <Route path="/service/class-12-guidance" element={<Class12Guidance />} />
        <Route path="/service/career-assessment" element={<CareerAssessmentTest />} />
        <Route path="/service/subject-classification" element={<SubjectClassification />} />
        <Route path="/service/university-program-finder" element={<UniveristyProgramFinder />} />
        <Route path="/service/university-graduates-guidance" element={<UniversityGraduatesGuidance />} />
        <Route path="/service/working-professional-guidance" element={<WorkingProfessional />} />
        <Route path="/service/online-session" element={<OnlineSession />} />
        <Route path="/service/taleemi-advice" element={<TaleemiAdvice />} />
        <Route path="/service/announcement" element={<TaleemiAnnouncement />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        <Route
          path="/userdashboard"
          element={
            <RequireAuth>
              <UserDashboard />
            </RequireAuth>
          }
        />

        {/* Super Admin */}
        <Route
          path="/super-admin"
          element={
            <RequireAuth>
              <RequireRole allowed={["SUPER_ADMIN", "ADMIN"]} fallback="/userdashboard">
                <SuperAdminLayout />
              </RequireRole>
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequirePermission permission="dashboard.read">
                <SuperAdminDashboard />
              </RequirePermission>
            }
          />

          <Route
            path="admins"
            element={
              <RequirePermission permission="admin.read">
                <AdminManagement />
              </RequirePermission>
            }
          />

          <Route
            path="roles"
            element={
              <RequirePermission permission="rbac.read">
                <RolesPermissions />
              </RequirePermission>
            }
          />

          <Route
            path="audit-logs"
            element={
              <RequirePermission permission="audit.read">
                <AuditLogs />
              </RequirePermission>
            }
          />
        </Route>

        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>

      {!isSuperAdminRoute && !isAuthRoute && <Footer />}
    </div>
  );
};

export default App;
