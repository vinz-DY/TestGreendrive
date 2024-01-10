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
          src={data.image}
          alt="borne"
          style={{ cursor: "pointer" }}
        />
      </Link>
      <h2 className="CardItem_id">{data.id}</h2>
      <h2 className="CardItem_city">{data.city}</h2>
      <h2 className="CardItem_name">{data.name}</h2>
      <h2 className="CardItem_brand">{data.brand}</h2>
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
