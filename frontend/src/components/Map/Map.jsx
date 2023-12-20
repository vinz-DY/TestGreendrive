import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./Map.css";
import { useLoaderData } from "react-router-dom";

function Map() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Test</h1>
      <MapContainer center={[43.3, 5.4]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {data.map((marker) => (
            <Marker
              position={[marker.ylatitude, marker.xlongitude]}
              key={marker.id}
            >
              <Popup>
                <ul>
                  <li>Adresse: {marker.city}</li>
                  <li>Acessibilité: {marker.access}</li>
                </ul>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
