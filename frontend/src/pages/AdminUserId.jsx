import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayCardsId from "../components/DisplayCardsId";

function AdminUserId() {
  const items = useLoaderData();
  return (
    <div>
      <DisplayCardsId basePath="/profils/:id" items={items} />
    </div>
  );
}

export default AdminUserId;
