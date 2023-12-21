import React from "react";
import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

function MarkerComponent({ marker }) {
  return (
    <Marker position={[marker.ylatitude, marker.xlongitude]} key={marker.id}>
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
  );
}

export default MarkerComponent;

MarkerComponent.propTypes = {
  marker: PropTypes.shape({
    ylatitude: PropTypes.number,
    xlongitude: PropTypes.number,
    city: PropTypes.string,
    access: PropTypes.string,
    connectic_id: PropTypes.number,
    power: PropTypes.string,
    acces_recharge: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
