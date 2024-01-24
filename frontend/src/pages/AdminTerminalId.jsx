import React from "react";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminTerminalId() {
  return (
    <div>
      <DisplayCardsId basePath="/terminals/:id" />
    </div>
  );
}

export default AdminTerminalId;
