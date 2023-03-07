import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Dashboard } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { ResgisterPage } from "../pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResgisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
