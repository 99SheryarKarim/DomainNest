import React from "react";
import "./filterPanel.css";

export default function FilterPanel() {
  return (
    <div className="filter-panel">
      {/* Header */}
      <div className="filter-header d-flex justify-content-between align-items-center mb-4">
        <h5 className="filter-title d-flex align-items-center">
          <i className="bi bi-funnel me-2"></i> Filter by
        </h5>
        <button className="btn btn-link text-decoration-none clear-btn">
          clear
        </button>
      </div>

      {/* Selected Filters */}
      <div className="selected-filters mb-4">
        <span className="badge bg-light text-dark me-2">Popular domain</span>
        <span className="badge bg-light text-dark me-2">.com</span>
        <span className="badge bg-light text-dark me-2">No hyphens</span>
      </div>

      {/* Categories Section */}
      <div className="mb-4">
        <h6 className="filter-section-title">Categories</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="popularDomain"
          />
          <label className="form-check-label" htmlFor="popularDomain">
            Popular domain{" "}
            <span className="badge bg-secondary ms-1">12343</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="premiumDomain"
          />
          <label className="form-check-label" htmlFor="premiumDomain">
            Premium domain
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="3LetterDomain"
          />
          <label className="form-check-label" htmlFor="3LetterDomain">
            3 Letter domain
          </label>
        </div>
        {/* Add more categories as needed */}
        <button className="btn btn-link p-0 see-more">See more</button>
      </div>

      {/* Extension Section */}
      <div className="mb-4">
        <h6 className="filter-section-title">Extension</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="extensionCom"
          />
          <label className="form-check-label" htmlFor="extensionCom">
            .com
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="extensionNet"
          />
          <label className="form-check-label" htmlFor="extensionNet">
            .net
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="extensionOrg"
          />
          <label className="form-check-label" htmlFor="extensionOrg">
            .org
          </label>
        </div>
      </div>

      {/* Length Section */}
      <div className="mb-4">
        <h6 className="filter-section-title">Length</h6>
        <div className="range-wrapper">
          <input type="range" className="form-range" min="3" max="10" />
          <div className="d-flex justify-content-between">
            <span>03</span>
            <span>10</span>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-4">
        <h6 className="filter-section-title">Price</h6>
        <div className="range-wrapper">
          <input type="range" className="form-range" min="200" max="250" />
          <div className="d-flex justify-content-between">
            <span>$200</span>
            <span>$250</span>
          </div>
        </div>
      </div>

      {/* Name Constraints Section */}
      <div className="mb-4">
        <h6 className="filter-section-title">Name</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="noHyphens" />
          <label className="form-check-label" htmlFor="noHyphens">
            No hyphens (-)
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="noNumerals" />
          <label className="form-check-label" htmlFor="noNumerals">
            No numerals (0-9)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="noSpecialChars"
          />
          <label className="form-check-label" htmlFor="noSpecialChars">
            No special chars
          </label>
        </div>
      </div>

      {/* Prefix/Suffix Section */}
      <div className="mb-4">
        <h6 className="filter-section-title">Starting with</h6>
        <input type="text" className="form-control" placeholder="e.g., com" />
      </div>
      <div className="mb-4">
        <h6 className="filter-section-title">Ending with</h6>
        <input type="text" className="form-control" placeholder="e.g., com" />
      </div>
    </div>
  );
}
