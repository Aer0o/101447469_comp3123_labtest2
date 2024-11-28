import React, { useState } from "react";
import "../SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;