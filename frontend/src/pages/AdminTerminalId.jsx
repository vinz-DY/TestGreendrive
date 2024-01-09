import React from "react";
import DisplayCards from "../components/DisplayCards";

function AdminTerminalId() {
  return <DisplayCards basePath="/terminals/:id" />;
}

export default AdminTerminalId;
