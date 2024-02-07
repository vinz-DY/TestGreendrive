import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminCarsId() {
  const items = useLoaderData();
  return (
    <div>
      <DisplayCardsId basePath="/cars/:id" items={items} />
    </div>
  );
}

export default AdminCarsId;
