import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix pour les icônes de Leaflet (nécessaire souvent sous React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const sites = [
  {
    name: "Usine pétrochimique Vridi",
    coords: [5.2706, -4.0095],
    danger: "Élevé",
  },
  {
    name: "Mine d’or de Bonikro",
    coords: [6.5071, -5.1273],
    danger: "Moyen",
  },
  {
    name: "Station électrique Yopougon",
    coords: [5.3621, -4.0500],
    danger: "Faible",
  },
];

export default function MiniMap() {
  return (
    <div className="h-[400px] mt-6 rounded-2xl overflow-hidden shadow-md border">
      <MapContainer center={[5.3, -4.0]} zoom={7} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {sites.map((site, idx) => (
          <Marker key={idx} position={site.coords}>
            <Popup>
              <strong>{site.name}</strong>
              <br />
              Danger : <span className={
                site.danger === "Élevé" ? "text-red-600" :
                site.danger === "Moyen" ? "text-yellow-600" :
                "text-green-600"
              }>{site.danger}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
