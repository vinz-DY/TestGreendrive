import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardItem({ data }) {
  return (
    <div>
      <Link to={`${data.id}`}>
        <img src={data.image} alt="borne" style={{ cursor: "pointer" }} />
      </Link>
      <h2>{data.id}</h2>
      <h2>{data.city}</h2>
      <h2>{data.name}</h2>
      <h2>{data.brand}</h2>
    </div>
  );
}

CardItem.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    id: PropTypes.number,
    city: PropTypes.string,
    adresseStation: PropTypes.string,
    power: PropTypes.string,
    acces_recharge: PropTypes.string,
    access: PropTypes.string,
    localisation: PropTypes.string,
    region: PropTypes.string,
    name: PropTypes.string,
    lastname: PropTypes.string,
    birthdate: PropTypes.string,
    user_id: PropTypes.number,
    brand: PropTypes.string,
    engine: PropTypes.string,
    fonction_id: PropTypes.string,
  }).isRequired,
};

export default CardItem;
