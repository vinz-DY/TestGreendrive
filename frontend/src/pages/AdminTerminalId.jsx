import React from "react";
import { Link } from "react-router-dom";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminTerminalId() {
  return (
    <div>
      <DisplayCardsId basePath="/terminals/:id" />
      <Link to="/admin/terminal">
        <button type="button">retour</button>
      </Link>
    </div>
  );
}

export default AdminTerminalId;
