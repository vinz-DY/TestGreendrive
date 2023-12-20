import React from "react";
import { useLoaderData } from "react-router-dom";
import CardP from "./CardP";

function DisplayCard() {
  const terminals = useLoaderData();

  return (
    <div>
      {terminals.map((terminal) => (
        <CardP key={terminal.id} terminal={terminal} />
      ))}
    </div>
  );
}
export default DisplayCard;
