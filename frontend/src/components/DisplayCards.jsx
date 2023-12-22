import React from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import CardP from "./CardP";

function DisplayCards({ basePath }) {
  const items = useLoaderData();

  return (
    <div>
      {items.map((item) => (
        <CardP key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}
DisplayCards.propTypes = {
  basePath: PropTypes.string.isRequired,
};
export default DisplayCards;
