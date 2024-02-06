import React from "react";
import PropTypes from "prop-types";
import "../menuCard.css";

function MenuCardResa({ img, title, alt }) {
  return (
    <div className="menuContainer">
      <img className="menuImage" src={img} alt={alt} />
      <div className="cardTextContent">
        <h2 className="menuMapTitle">{title}</h2>
      </div>
    </div>
  );
}

MenuCardResa.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default MenuCardResa;
