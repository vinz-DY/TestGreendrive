import axios from "axios";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";
import "./DisplayCards.css";

function DisplayCards({ tableName }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/${tableName.toLowerCase()}?searchTerm=${searchTerm}`
        );
        setFilteredItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm, tableName]);

  return (
    <div className="adminCtn">
      <input
        className="searchbar"
        type="text"
        placeholder="Rechercher par nom..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="DisplayCards">
        {filteredItems.map((item) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

DisplayCards.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default DisplayCards;
