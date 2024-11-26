"use client";
import Header from "../Header";
import FilterPanel from "../FilterPanel";
import DomainList from "../DomainList";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
export default function SellingPage() {
  const [activeTab, setActiveTab] = React.useState("Tech Startups");
  const [sortBy, setSortBy] = React.useState("most-relevant");
  return (
    <div
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#fff",
          padding: "1rem 0",
          height: "70px", // Added height property
        }}
      >
        <div
          style={{ maxWidth: "542px", display: "flex", margin: "0 auto" }}
          className="input-group"
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search for your ideal domain..."
            aria-label="Search domains"
          />
          <div className="input-group-append">
            <button className="btn btn-dark" type="button">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="row">
        <div className="col-md-3">
          <FilterPanel />
        </div>
        <div className="col-md-9">
          <DomainList />
        </div>
      </div>
    </div>
  );
}
