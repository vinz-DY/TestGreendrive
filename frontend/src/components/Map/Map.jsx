import { useRef, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import MarkerComponent from "./MarkerComponent";
import useGeoLocation from "./useGeoLocation";
import Resa from "../Resa/Resa";

function MarkersMap({ terminalsData }) {
  const ZOOM_LEVEL = 9;
  const mapRef = useRef(null);
  const location = useGeoLocation();
  const [cityInput, setCityInput] = useState("");
  const [searchedCityMarker, setSearchedCityMarker] = useState(null);

  const showToastErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else if (location.error) {
      showToastErrorMessage(location.error);
    }
  };

  const handleCitySearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${cityInput}&limit=1`
      );

      const firstLocation = response.data[0];

      if (firstLocation) {
        const coordinates = [
          parseFloat(firstLocation.lat),
          parseFloat(firstLocation.lon),
        ];
        setSearchedCityMarker({
          coordinates,
          displayName: firstLocation.display_name,
        });

        mapRef.current.flyTo(coordinates, ZOOM_LEVEL, { animate: true });
      } else {
        showToastErrorMessage("La ville n'a pas été trouvée.");
      }
    } catch (error) {
      console.error(error);
      showToastErrorMessage("Erreur lors de la recherche de la ville.");
    }
  };

  return (
    <div className="map-container">
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
        {searchedCityMarker && (
          <Marker position={searchedCityMarker.coordinates}>
            <Popup>
              <h2>{searchedCityMarker.displayName}</h2>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="location-container">
        <div className="geoLocationButton">
          <button
            className="geolocationButton"
            type="button"
            onClick={showMyLocation}
          >
            Localisez-moi
          </button>
        </div>
        <div className="citySearch">
          <input
            className="search-input"
            type="text"
            placeholder="Entrez le nom de la ville"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button
            className="search-button"
            type="button"
            onClick={handleCitySearch}
          >
            Rechercher
          </button>
        </div>
      </div>
      <Resa />
      <ToastContainer />
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
      name: PropTypes.string,
    })
  ).isRequired,
};
