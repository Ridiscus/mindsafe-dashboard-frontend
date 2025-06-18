import React from "react";
import MiniMap from "../components/MiniMap";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const incidentsData = [
  { site: "Mine A", incidents: 4 },
  { site: "Usine B", incidents: 3 },
  { site: "Station C", incidents: 2 },
  { site: "Plateforme D", incidents: 3 },
];

const graviteData = [
  { name: "Élevée", value: 5 },
  { name: "Moyenne", value: 3 },
  { name: "Faible", value: 2 },
];

const COLORS = ["#ef4444", "#facc15", "#10b981"];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Bienvenue sur MindSafe AI
      </h1>
      <MiniMap />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Incidents par site</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={incidentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="site" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="incidents" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Répartition des risques</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={graviteData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {graviteData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

