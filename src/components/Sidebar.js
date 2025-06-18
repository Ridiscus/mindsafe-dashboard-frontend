import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, Settings, Shield } from 'lucide-react';
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">MindSafe AI</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center space-x-2"><Home size={20} /> <span>Dashboard</span></Link>
        <Link to="/risks" className="flex items-center space-x-2"><Shield size={20} /> <span>Risks</span></Link>
        <Link to="/alerts" className="flex items-center space-x-2"><AlertCircle size={20} /> <span>Alerts</span></Link>
        <Link to="/settings" className="flex items-center space-x-2"><Settings size={20} /> <span>Settings</span></Link>
      </nav>
    </div>
  );
}

<div className="mt-auto px-4 pb-4">
  <ThemeToggle />
</div>
