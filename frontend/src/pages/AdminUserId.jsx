import React from "react";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminUserId() {
  return (
    <div>
      <DisplayCardsId basePath="/profils/:id" />
    </div>
  );
}

export default AdminUserId;
