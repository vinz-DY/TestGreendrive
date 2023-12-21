import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useLoaderData } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import MarkerComponent from "./MarkerComponent";

function Map() {
  const terminalsData = useLoaderData();
  return (
    <MapContainer center={[43.3, 5.4]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {terminalsData.map((marker) => (
          <MarkerComponent marker={marker} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
