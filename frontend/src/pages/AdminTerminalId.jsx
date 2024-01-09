import React from "react";
import { Link } from "react-router-dom";
import DisplayCards from "../components/DisplayCards";

function AdminTerminalId() {
  return (
    <div>
      <DisplayCards basePath="/terminals/:id" />
      <Link to="/admin/terminal">Retour</Link>
    </div>
  );
}

export default AdminTerminalId;
