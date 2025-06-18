import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Bienvenue sur MindSafe
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
        Analyse intelligente des risques grâce à l’IA. Protégez votre entreprise avec une plateforme simple et intuitive.
      </p>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition"
      >
        Accéder au Dashboard
      </button>
    </div>
  );
}