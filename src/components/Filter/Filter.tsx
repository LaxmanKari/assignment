import React from "react";
import "./filter.css";

const Filter: React.FC = () => {
  return (
    <div className="filter-card">
      <span className="filter-by">FILTER BY</span>
        <select>
          {" "}
          <option>Collection</option>{" "}
        </select>
        <select>
          {" "}
          <option>Color</option>{" "}
        </select>
        <select>
          {" "}
          <option>Category</option>{" "}
        </select>
        <span>Price Range</span>
        <input type="range" min="0" max="1000"/>
    </div>
  );
};

export default Filter;
