import React from "react";
import DisplayCards from "../components/DisplayCards";

function AdminCars() {
  return (
    <div>
      <DisplayCards basePath="/cars" />
    </div>
  );
}

export default AdminCars;
