import React from "react";
import PropTypes from "prop-types";
import "./CardItem.css";

function CardItemId({ data }) {
  return (
    <div className="CardItem CardItemId">
      <div className="CardItem_card">
        <img
          className="CardItem_img"
          src={`${import.meta.env.VITE_BACKEND_URL}/public/assets/images/${
            data.image
          }`}
          alt="poster"
        />
      </div>

      <div className="CardItem_text">
        <p>{data.id}</p>
        <p>{data.city}</p>
        <p>{data.adresseStation}</p>
        <p>{data.power}</p>
        <p>{data.acces_recharge}</p>
        <p>{data.access}</p>
        <p>{data.localisation}</p>
        <p>{data.region}</p>
        <p>{data.name}</p>
        <p>{data.lastname}</p>
        <p>{data.birthdate}</p>
        <p>{data.brand}</p>
        <p>{data.model}</p>
        <p>{data.licensePlate}</p>
        <p>{data.connectic_plugType}</p>
      </div>
    </div>
  );
}

CardItemId.propTypes = {
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
    model: PropTypes.string,
    licensePlate: PropTypes.string,
    connectic_plugType: PropTypes.string,
  }).isRequired,
};

export default CardItemId;
