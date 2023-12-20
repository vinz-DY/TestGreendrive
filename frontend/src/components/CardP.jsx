import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardP({ terminal }) {
  return (
    <div>
      <Link to={`/terminals/${terminal.id}`}>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.ljF9ZSVOYHja42J1kivhcgHaHa&pid=Api&P=0&h=180"
          alt="borne"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <p>City: {terminal.city}</p>
      <p>AdresseStation: {terminal.adresseStation}</p>
      <p>Power: {terminal.power}</p>
      <p>Acces Recharge: {terminal.acces_recharge}</p>
      <p>Access: {terminal.access}</p>
      <p>Localisation: {terminal.localisation}</p>
      <p>Region: {terminal.region}</p>
    </div>
  );
}

CardP.propTypes = {
  terminal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    adresseStation: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    acces_recharge: PropTypes.string.isRequired,
    access: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardP;
