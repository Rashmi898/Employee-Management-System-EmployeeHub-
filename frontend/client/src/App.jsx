import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import LoginLanding from "./pages/LoginLanding";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payslips from "./pages/Payslips";
import Settings from "./pages/Settings";
import PrintPayslip from "./pages/PrintPayslip";
import Layout from "./pages/Layout";
import LoginFrom from "./components/LoginFrom";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/admin" element={<LoginFrom role="admin" title="Admin Portal" subtitle="Access your administrative dashboard" />} />
        <Route path="/login/employee" element={<LoginFrom role="employee" title="Employee Portal" subtitle="Access your employee dashboard" />} />

        {/* Main Layout Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Print Payslip */}
        <Route
          path="/print/payslip/:id"
          element={<PrintPayslip />}
        />

        {/* Redirect Unknown Routes */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </>
  );
};

export default App;