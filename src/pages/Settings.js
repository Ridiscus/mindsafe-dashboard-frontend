import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Settings() {
  const [seuilTemperature, setSeuilTemperature] = useState(50);
  const [notificationsActives, setNotificationsActives] = useState(true);
  const [iaActive, setIaActive] = useState(true);

  
return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-4"
  >
    <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
      Paramètres
    </h1>

    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 space-y-6 transition-colors duration-300">
      {/* Seuil Température */}
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200 mb-2">
          🔥 Seuil critique de température (°C)
        </label>
        <input
          type="number"
          value={seuilTemperature}
          onChange={(e) => setSeuilTemperature(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Notifications */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-200 font-medium">
          🔔 Notifications en temps réel
        </span>
        <input
          type="checkbox"
          checked={notificationsActives}
          onChange={() => setNotificationsActives(!notificationsActives)}
          className="w-5 h-5 accent-blue-600"
        />
      </div>

      {/* IA activée */}
      <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-200 font-medium">
          🤖 Système IA activé
        </span>
        <input
          type="checkbox"
          checked={iaActive}
          onChange={() => setIaActive(!iaActive)}
          className="w-5 h-5 accent-green-600"
        />
      </div>

      {/* Bouton enregistrer */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert("Paramètres enregistrés ✅")}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90"
      >
        💾 Enregistrer
      </motion.button>
    </div>
  </motion.div>
);

}
