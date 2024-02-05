import React from "react";
import DisplayCardsId from "../components/DisplayCardsId";
import "./AdminTerminalId.css";

function AdminTerminalId() {
  return (
    <div className="adminTerminalBigCtn">
      <div>
        <DisplayCardsId basePath="/terminals/:id" />
      </div>
      <div className="adminTerminalBtnCtn">
        <button className="adminTerminalBtn" type="button">
          Modifier
        </button>
        <button className="adminTerminalBtn adminTerminalBtn2" type="button">
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default AdminTerminalId;
