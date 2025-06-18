// src/pages/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-between p-6 md:p-16">
      {/* Bloc gauche */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bienvenue sur <span className="text-blue-600">MindSafe AI</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          La première solution d’IA dédiée à la prévention des risques psychosociaux en entreprise. Surveillez, analysez et intervenez intelligemment.
        </p>
        <a
          href="/dashboard"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Accéder au tableau de bord
        </a>
      </div>

      {/* Bloc illustration */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          src="/images/hero-illustration.png" // Place cette image dans public/images/
          alt="Illustration MindSafe"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Home;
