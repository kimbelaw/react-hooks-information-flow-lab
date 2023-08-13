// components/Filter.js
import React from "react";

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="groceries">Groceries</option>
        <option value="electronics">Electronics</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default Filter;
