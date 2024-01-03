/* eslint-disable no-alert */
import { useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useLoaderData } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import PropTypes from "prop-types";
import MarkerComponent from "./MarkerComponent";
import useGeoLocation from "./useGeoLocation";

function MarkersMap({ terminalsData }) {
  const ZOOM_LEVEL = 9;
  const mapRef = useRef(null);
  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else if (location.error) {
      alert(location.error.message);
    } else {
      alert("Erreur inconnue");
    }
  };

  return (
    <div className="Map">
      <MapContainer center={[43.3, 5.4]} zoom={13} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>
              <h2>Utilisateur</h2>
            </Popup>
          </Marker>
        )}
        <MarkerClusterGroup chunkedLoading>
          {terminalsData.map((marker) => (
            <MarkerComponent key={marker.id} marker={marker} />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      <div className="geoLocationButton">
        <button type="button" onClick={showMyLocation}>
          Localisez-moi
        </button>
      </div>
    </div>
  );
}

function Map() {
  const terminalsData = useLoaderData();
  return <MarkersMap terminalsData={terminalsData} />;
}

export default Map;

MarkersMap.propTypes = {
  terminalsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
