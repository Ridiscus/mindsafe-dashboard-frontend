import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function RiskAnalysis() {
  const risques = [
    { nom: "Fuite de gaz", gravité: "Élevée" },
    { nom: "Défaillance électrique", gravité: "Moyenne" },
    { nom: "Incendie potentiel", gravité: "Élevée" },
    { nom: "Maintenance en retard", gravité: "Faible" },
  ];

  const getGraviteColor = (gravité) => {
    switch (gravité) {
      case "Élevée":
        return "bg-red-500";
      case "Moyenne":
        return "bg-yellow-400";
      case "Faible":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Rapport d'analyse des risques - MindSafe AI", 14, 22);

    const tableData = risques.map((r) => [r.nom, r.gravité]);

    doc.autoTable({
      startY: 30,
      head: [["Risque détecté", "Gravité"]],
      body: tableData,
    });

    doc.save("rapport_risques_mindsafe.pdf");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Analyse des Risques</h1>
      <ul className="space-y-4">
        {risques.map((risque, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow rounded-xl"
          >
            <span className="font-medium text-gray-800 dark:text-white">{risque.nom}</span>
            <span
              className={`text-white px-3 py-1 rounded-full text-sm ${getGraviteColor(
                risque.gravité
              )}`}
            >
              Gravité : {risque.gravité}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          onClick={generatePDF}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Générer rapport IA
        </button>
      </div>
    </div>
  );
}
