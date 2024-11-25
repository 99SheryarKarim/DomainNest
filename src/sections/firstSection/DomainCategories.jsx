"use client";

import React, { useState } from "react";
import Image from "next/image";

const sideMenuAssets = [
  {
    id: 1,
    img: "techStartupsLogo.svg",
    title: "Tech Startups",
    domains: [
      { name: "techstartups.com", seller: "Alice", price: "$500" },
      { name: "innovativetech.io", seller: "Bob", price: "$800" },
      { name: "startupzone.net", seller: "Charlie", price: "$450" },
      { name: "nextbigthing.org", seller: "Diana", price: "$700" },
    ],
  },
  {
    id: 2,
    img: "eccomerceLogo.svg",
    title: "E-Commerce",
    domains: [
      { name: "ecommercehub.com", seller: "Charlie", price: "$700" },
      { name: "shophaven.net", seller: "Diana", price: "$600" },
      { name: "quickcart.io", seller: "Eve", price: "$550" },
      { name: "onlineshopnow.org", seller: "Frank", price: "$650" },
    ],
  },
  {
    id: 3,
    img: "blogsAndMediaLogo.svg",
    title: "Blogs & Media",
    domains: [
      { name: "mediablogs.org", seller: "Eve", price: "$400" },
      { name: "dailybuzz.xyz", seller: "Frank", price: "$350" },
      { name: "talkofthetown.com", seller: "Grace", price: "$500" },
      { name: "buzzmedia.net", seller: "Henry", price: "$600" },
    ],
  },
  {
    id: 4,
    img: "heart.svg",
    title: "Healthcare",
    domains: [
      { name: "healthcareworld.com", seller: "Grace", price: "$900" },
      { name: "medicarenow.io", seller: "Henry", price: "$850" },
      { name: "wellnesshub.org", seller: "Ivy", price: "$750" },
      { name: "healthyfuture.net", seller: "Jack", price: "$800" },
    ],
  },
  {
    id: 5,
    img: "clothesAndBag.svg",
    title: "Fashion & Lifestyle",
    domains: [
      { name: "stylishlife.com", seller: "Ivy", price: "$650" },
      { name: "trendsetters.org", seller: "Jack", price: "$700" },
      { name: "fashionworld.net", seller: "Kelly", price: "$550" },
      { name: "chicstyles.com", seller: "Leo", price: "$600" },
    ],
  },
];

const DomainCategories = () => {
  const [toggleSideMenuItem, setToggleSideMenuItem] = useState(1);

  const selectedCategory = sideMenuAssets.find(
    (item) => item.id === toggleSideMenuItem
  );

  return (
    <div className="container" style={{ margin: "80px auto" }}>
      <h2 style={{ color: "#171D3F" }} className="fw-bold text-center mb-4">
        Find Domains by <br className="d-none d-lg-block" /> Category
      </h2>

      {/* Mobile-friendly horizontal menu */}
      <div className="d-block d-md-none mb-4">
        <div
          className="d-flex justify-content-between flex-wrap gap-3 p-3 border rounded shadow-sm"
          style={{ backgroundColor: "white" }}
        >
          {sideMenuAssets.map((asset) => (
            <button
              key={asset.id}
              onClick={() => setToggleSideMenuItem(asset.id)}
              className={`btn border-0 ${
                toggleSideMenuItem === asset.id ? "active-category" : ""
              }`}
              style={{
                fontWeight: "bold",
                position: "relative",
                minWidth: "150px",
                padding: "0.5rem 1rem",
              }}
            >
              {asset.title}
              {toggleSideMenuItem === asset.id && (
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    top: "0",
                    right: "5%",
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#4E66FF",
                    borderRadius: "50%",
                    boxShadow: "0 0 5px 2px #4E66FF",
                  }}
                ></span>
              )}
            </button>
          ))}
          <button className="btn btn-dark" style={{ borderRadius: "6px" }}>
            Browse All
          </button>
        </div>
      </div>

      <div className="row justify-content-start my-4">
        {/* Desktop Side Menu */}
        <SideMenu
          toggleSideMenuItem={toggleSideMenuItem}
          setToggleSideMenuItem={setToggleSideMenuItem}
          styles="col-md-3 col-lg-2 d-none d-md-block"
        />

        {/* Main Content */}
        <div className="col-md-9 col-xl-10 d-flex flex-column gap-2">
          <div className="w-100 d-flex justify-content-between align-items-center mb-3">
            <span>{selectedCategory?.domains.length} found</span>
            <button className="btn btn-dark" style={{ borderRadius: "6px" }}>
              Browse All
            </button>
          </div>
          {selectedCategory?.domains.map((domain, index) => (
            <div
              key={index}
              className="w-100 d-flex justify-content-between flex-column flex-sm-row gap-4 align-items-center border p-4 mb-2 rounded shadow-sm"
            >
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <h5 className="mb-2">{domain.name}</h5>
                  <div className="d-flex align-items-center">
                    <Image
                      src="/domaninSellerAvatar.svg"
                      alt="Domain Seller Avatar"
                      width={24}
                      height={24}
                      className="me-2 rounded-circle"
                    />
                    <small className="text-muted">{domain.seller}</small>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-column flex-sm-row justify-content-between gap-4 gap-sm-0">
                <h5 className="mb-0 me-3">{domain.price}</h5>
                <button
                  style={{ border: "2px solid #171D3F" }}
                  className="btn btn-outline-dark"
                >
                  Make an Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SideMenu = ({ toggleSideMenuItem, setToggleSideMenuItem, styles }) => {
  return (
    <div className={styles} style={{ minWidth: styles }}>
      <div
        className="list-group flex flex-column gap-4 border shadow"
        style={{ padding: "1.4rem .4rem" }}
      >
        {sideMenuAssets.map((asset) => (
          <button
            onClick={() => setToggleSideMenuItem(asset.id)}
            key={asset.id}
            className={`list-group-item list-group-item-action d-flex align-items-center text-black border-0 bg-white justify-content-between p-0 p-md-3 ${
              asset.id === toggleSideMenuItem ? "active-category" : ""
            }`}
            style={{
              transition: "all 0.3s ease",
              cursor: "pointer",
              borderRadius: "8px",
            }}
          >
            <div
              style={{ fontWeight: "bold" }}
              className="d-flex align-items-center gap-3 justify-content-center"
            >
              <Image src={asset.img} alt={asset.title} width={24} height={24} />
              <span>{asset.title}</span>
            </div>

            <div>
              {asset.id === toggleSideMenuItem && (
                <span
                  style={{
                    display: "block",
                    backgroundColor: "#4E66FF",
                    width: "12px",
                    height: "12px",
                    borderRadius: "100px",
                    boxShadow: "0 0 5px 2px #4E66FF",
                  }}
                ></span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainCategories;
