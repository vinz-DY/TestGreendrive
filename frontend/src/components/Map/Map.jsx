import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "./Map.css";
import { useLoaderData } from "react-router-dom";

function Map() {
  const terminalsData = useLoaderData();
  return (
    <div>
      <h1>Test</h1>
      <MapContainer center={[43.3, 5.4]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading>
          {terminalsData.map((marker) => (
            <Marker
              position={[marker.ylatitude, marker.xlongitude]}
              key={marker.id}
            >
              <Popup>
                <h2>Informations sur la borne</h2>
                <ul>
                  <li>Adresse: {marker.city}</li>
                  <li>Acessibilité: {marker.access}</li>
                  <li>Type de prise: {marker.connectic_id}</li>
                  <li>Puissance maximale: {marker.power}</li>
                  <li>Accès à la borne: {marker.acces_recharge}</li>
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
