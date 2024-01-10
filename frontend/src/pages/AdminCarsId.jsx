import React from "react";
import { Link } from "react-router-dom";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminCarsId() {
  return (
    <div>
      <DisplayCardsId basePath="/cars/:id" />
      <Link to="/admin/car">
        <button type="button">retour</button>
      </Link>
    </div>
  );
}

export default AdminCarsId;
