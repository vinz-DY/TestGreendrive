import React from "react";
import PropTypes from "prop-types";
import CardItemId from "./CardItemId";
import "./DisplayCards.css";

function DisplayCardsId({ items, basePath }) {
  return (
    <div className="DisplayCardsId">
      <CardItemId data={items} basePath={basePath} />
    </div>
  );
}
DisplayCardsId.propTypes = {
  basePath: PropTypes.string.isRequired,
  items: PropTypes.string.isRequired,
};
export default DisplayCardsId;
