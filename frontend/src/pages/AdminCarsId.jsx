import React from "react";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminCarsId() {
  return (
    <div>
      <DisplayCardsId basePath="/cars/:id" />
    </div>
  );
}

export default AdminCarsId;
