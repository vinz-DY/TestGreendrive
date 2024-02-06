import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayCardsId from "../components/DisplayCardsId";
import TerminalIdForm from "../components/TerminalIdForm";
import "./AdminTerminalId.css";

function AdminTerminalId() {
  const items = useLoaderData();
  return (
    <div className="adminTermBiggerCtn">
      <div className="adminTerminalBigCtn">
        <div>
          <DisplayCardsId basePath="/terminals/:id" items={items} />
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
      <div>
        <TerminalIdForm basePath="/terminals/:id" />
      </div>
    </div>
  );
}

export default AdminTerminalId;
