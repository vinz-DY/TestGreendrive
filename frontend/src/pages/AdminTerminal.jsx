import React from "react";
import DisplayCards from "../components/DisplayCards";

function AdminTerminal() {
  return (
    <div>
      <DisplayCards basePath="/terminals" />
    </div>
  );
}

export default AdminTerminal;
