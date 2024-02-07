import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardItem.css";

function CardItem({ data }) {
  return (
    <div className="CardItem">
      <Link className="CardItem_card" to={`${data.id}`}>
        <img
          className="CardItem_img"
          src={`${import.meta.env.VITE_BACKEND_URL}/public/assets/images/${
            data.image
          }`}
          alt="borne"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="CardItem_text">
        <h2 className="CardItem_h2">{data.id}</h2>
        <h2 className="CardItem_h2">{data.city}</h2>
        <h2 className="CardItem_h2">{data.name}</h2>
        <h2 className="CardItem_h2">{data.brand}</h2>
      </div>
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
