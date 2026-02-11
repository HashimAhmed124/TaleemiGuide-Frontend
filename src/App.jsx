// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";

// Permission Guard
import { RequireAuth, RequireRole, RequirePermission } from "./components/guards";

// Landing page contents
import Navbar from "./components/Navbar";
import Hero from "./components/hompage/Hero";
import ForWhom from "./components/hompage/forWhom";
import OurServices from "./components/hompage/OurServices";
import TheProcess from "./components/hompage/TheProcess";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/hompage/Testimonials";
import Footer from "./components/Footer";

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

// Auth Pages
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

// Dashboard pages
import UserDashboard from "./pages/dashboards/userdashboard";

// Super Admin pages
import SuperAdminLayout from "./pages/superadmin/SuperAdminLayout";
import SuperAdminDashboard from "./pages/superadmin/Dashboard";
import AdminManagement from "./pages/superadmin/AdminManagement";
import RolesPermissions from "./pages/superadmin/RolesPermissions";
import AuditLogs from "./pages/superadmin/AuditLogs";

// Helper Component to combine Home components
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

// Wrapper to inject navigate into Service
const ServiceWrapper = () => {
  const navigate = useNavigate();
  return <Service onNavigate={navigate} />;
};

const App = () => {
  const location = useLocation();

  const [isAuthed, setIsAuthed] = useState(false);

  // demo notification state
  const [unreadNotifications, setUnreadNotifications] = useState(2);
  const [unreadMessages, setUnreadMessages] = useState(1);

  const [user, setUser] = useState({
    name: "TaleemiGuide User",
    avatarUrl: "",
  });

  // ✅ Keep auth state in sync (no reload needed)
  useEffect(() => {
    const token = localStorage.getItem("tg_token");
    const name = localStorage.getItem("tg_user_name") || "TaleemiGuide User";
    setIsAuthed(Boolean(token));
    setUser((prev) => ({ ...prev, name }));
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("tg_token");
    localStorage.removeItem("tg_role");
    localStorage.removeItem("tg_user_name");
    setIsAuthed(false);
  };

  // ✅ Hide public Navbar/Footer in Super Admin area
  const isSuperAdminRoute = location.pathname.startsWith("/super-admin");

  // ✅ Footer should not show on login/signup
  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="w-full min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      {!isSuperAdminRoute && (
        <Navbar
          isAuthed={isAuthed}
          user={user}
          unreadNotifications={unreadNotifications}
          unreadMessages={unreadMessages}
          onLogout={handleLogout}
        />
      )}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<ServiceWrapper />} />

        {/* Service pages */}
        <Route path="/service/class-10-guidance" element={<Class10Guidance />} />
        <Route path="/service/class-12-guidance" element={<Class12Guidance />} />
        <Route path="/service/career-assessment" element={<CareerAssessmentTest />} />
        <Route path="/service/subject-classification" element={<SubjectClassification />} />
        <Route path="/service/university-program-finder" element={<UniveristyProgramFinder />} />
        <Route
          path="/service/university-graduates-guidance"
          element={<UniversityGraduatesGuidance />}
        />
        <Route
          path="/service/working-professional-guidance"
          element={<WorkingProfessional />}
        />
        <Route path="/service/online-session" element={<OnlineSession />} />
        <Route path="/service/taleemi-advice" element={<TaleemiAdvice />} />
        <Route path="/service/announcement" element={<TaleemiAnnouncement />} />

        {/* ✅ Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* User Dashboard */}
        <Route path="/userdashboard" element={<UserDashboard />} />

        {/* ✅ Super Admin Routes (Admins are allowed too) */}
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

        {/* 404 */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>

      {/* ✅ Footer hidden on login/signup + super-admin */}
      {!isSuperAdminRoute && !isAuthRoute && <Footer />}
    </div>
  );
};

export default App;
