import React from "react";
import { Link } from "react-router-dom";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminUserId() {
  return (
    <div>
      <DisplayCardsId basePath="/profils/:id" />
      <Link to="/admin/user">
        <button type="button">retour</button>
      </Link>
    </div>
  );
}

export default AdminUserId;
