import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">Bienvenue sur MindSafe</h1>
      <p className="text-lg text-gray-700 mb-6">
        Plateforme intelligente d’analyse des risques.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Accéder au Dashboard
      </Link>
    </div>
  );
}