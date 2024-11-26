import React from "react";
import "./Header.css"; // Custom CSS for styling

export default function Header({
  activeTab,
  onTabChange,
  sortBy,
  onSortChange,
}) {
  const tabs = [
    "Tech Startups",
    "E-Commerce",
    "Blogs & Media",
    "Healthcare",
    "Fashion & Lifestyle",
  ];

  return (
    <div className="header-container d-flex justify-content-between align-items-center mb-4">
      {/* Count Display */}
      <span className="domain-count">1200 found</span>

      {/* Navigation Tabs */}
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li key={index} className="nav-item">
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Sort Dropdown */}
      <div className="sort-dropdown">
        <label htmlFor="sortBy" className="sort-label">
          Sort by
        </label>
        <select
          id="sortBy"
          className="form-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="most-relevant">Most Relevant</option>
          <option value="lowest-price">Lowest Price</option>
          <option value="highest-price">Highest Price</option>
          <option value="recently-added">Recently Added</option>
        </select>
      </div>
    </div>
  );
}
