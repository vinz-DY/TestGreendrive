import React from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import CardItem from "./CardItem";

function DisplayCards({ basePath }) {
  const items = useLoaderData();
  const itemsArray = Array.isArray(items) ? items : [items];
  return (
    <div>
      {itemsArray.map((item) => (
        <CardItem key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}
DisplayCards.propTypes = {
  basePath: PropTypes.string.isRequired,
};
export default DisplayCards;
