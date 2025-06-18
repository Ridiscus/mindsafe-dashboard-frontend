import React from "react";
import { motion } from "framer-motion";

export default function Alerts() {
  const alerts = [
    { message: "Fuite de gaz détectée", status: "Non résolue" },
    { message: "Surcharge électrique", status: "Résolue" },
    { message: "Présence anormale détectée", status: "Non résolue" },
    { message: "Température critique", status: "Résolue" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const getStatusColor = (status) => {
    return status === "Résolue" ? "bg-green-500" : "bg-red-500";
  };

  return (
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <motion.h1
        className="text-3xl font-bold text-gray-800 dark:text-white"
        variants={fadeIn}
        custom={0}
      >
        Centre d’alertes
      </motion.h1>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 flex justify-between items-center"
            variants={fadeIn}
            custom={index + 1}
          >
            <span className="text-gray-800 dark:text-white font-medium">
              {alert.message}
            </span>
            <span
              className={`text-white px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                alert.status
              )}`}
            >
              {alert.status}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Voir toutes les alertes
      </motion.button>
    </motion.div>
  );
}
