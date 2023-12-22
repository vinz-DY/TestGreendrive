import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardItem({ data, basePath }) {
  return (
    <div>
      <Link to={`${basePath}/${data.id}`}>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.ljF9ZSVOYHja42J1kivhcgHaHa&pid=Api&P=0&h=180"
          alt="borne"
          style={{ cursor: "pointer" }}
        />
      </Link>
      {Object.keys(data).map((key) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {data[key]}
        </p>
      ))}
    </div>
  );
}

CardItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    adresseStation: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    acces_recharge: PropTypes.string.isRequired,
    access: PropTypes.string.isRequired,
    localisation: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  }).isRequired,
  basePath: PropTypes.string.isRequired,
};

export default CardItem;
