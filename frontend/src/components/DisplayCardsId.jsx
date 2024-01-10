import React from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import CardItemId from "./CardItemId";

function DisplayCardsId({ basePath }) {
  const items = useLoaderData();

  return (
    <div>
      {items.map((item) => (
        <CardItemId key={item.id} data={item} basePath={basePath} />
      ))}
    </div>
  );
}
DisplayCardsId.propTypes = {
  basePath: PropTypes.string.isRequired,
};
export default DisplayCardsId;
