import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import RiskAnalysis from "./pages/RiskAnalysis";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import Home from "./pages/Home"; // <-- page d'accueil

export default function App() {
  return (
    <Router basename="/mindsafe-dashboard-frontend">
      <Routes>
        {/* Page d'accueil sans sidebar */}
        <Route path="/" element={<Home />} />

        {/* Pages internes avec sidebar */}
        <Route
          path="/dashboard"
          element={
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 bg-gray-100 p-6">
                <Dashboard />
              </main>
            </div>
          }
        />
        <Route
          path="/risks"
          element={
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 bg-gray-100 p-6">
                <RiskAnalysis />
              </main>
            </div>
          }
        />
        <Route
          path="/alerts"
          element={
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 bg-gray-100 p-6">
                <Alerts />
              </main>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 bg-gray-100 p-6">
                <Settings />
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}