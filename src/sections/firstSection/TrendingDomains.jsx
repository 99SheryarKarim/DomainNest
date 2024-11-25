"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Pricing = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  const cards = [
    { id: 1, title: ".org", price: "$ 500", oldPrice: "$600" },
    { id: 2, title: ".com", price: "$ 1000", oldPrice: "$1200" },
    { id: 3, title: ".net", price: "$ 300", oldPrice: "$400" },
    { id: 4, title: ".io", price: "$ 700", oldPrice: "$850" },
    { id: 5, title: ".ai", price: "$ 1500", oldPrice: "$2000" },
    { id: 6, title: ".shop", price: "$ 250", oldPrice: "$300" },
    { id: 7, title: ".tech", price: "$ 800", oldPrice: "$950" },
    { id: 8, title: ".xyz", price: "$ 400", oldPrice: "$500" },
    { id: 9, title: ".app", price: "$ 600", oldPrice: "$750" },
    { id: 10, title: ".info", price: "$ 300", oldPrice: "$350" },
    { id: 11, title: ".me", price: "$ 200", oldPrice: "$250" },
    { id: 12, title: ".biz", price: "$ 400", oldPrice: "$450" },
  ];

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const visibleCards = isMobile && !showAllCards ? cards.slice(0, 3) : cards;

  return (
    <div style={{ maxWidth: "1209px", margin: "0 auto" }} className="   my-5">
      <h2 style={{ color: "#041E42" }} className="fw-bold text-center">
        Trending Domains
      </h2>
      <p style={{ fontSize: "18px" }} className="text-muted text-center">
        Unlock the potential of your business with a memorable domain name.
      </p>

      <div
        className="row"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(261px, 1fr))", // Automatically adapts to smaller screens
          gap: "30px", // Spacing between rows and columns
          justifyContent: "center",
        }}
      >
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="col d-flex justify-content-center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card shadow card-hover"
              style={{
                border: "none",
                height: "356px",
                width: "100%", // Ensures it adjusts dynamically to smaller screens
                maxWidth: "301px", // Maximum width to match desktop appearance
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  padding: "20px",
                }}
                className="card-body d-flex flex-column"
              >
                <div className="text-center w-100 mb-3">
                  <h5
                    className="badge bg-warning text-white"
                    style={{
                      fontSize: "19px",
                      borderRadius: "6px",
                      padding: "8px 12px",
                    }}
                  >
                    {card.title}
                  </h5>
                </div>
                <h5 style={{ fontSize: "15px" }} className="card-title mb-3">
                  {card.title}
                </h5>
                <p className="card-text text-muted mb-3 fs-6">
                  Perfect for fashion or lifestyle brands.
                </p>
                <div className="mt-auto">
                  <div
                    className="d-flex align-items-center mb-3 gap-3"
                    style={{ gap: "40px" }}
                  >
                    <h3 className="fw-bold m-0 fs-8">{card.price}</h3>
                    <small className="text-muted text-decoration-line-through">
                      {card.oldPrice}
                    </small>
                  </div>
                  {/* Dot and Available for Offer moved here */}
                  <p className="d-flex align-items-center mb-3">
                    <span
                      style={{
                        display: "block",
                        backgroundColor: "#4E66FF",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        marginRight: "8px",
                        boxShadow: "0 0 3px 1px #4E66FF",
                      }}
                    ></span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#454F5D",
                      }}
                    >
                      Available for offer
                    </span>
                  </p>
                  <button
                    className="btn w-100"
                    style={{
                      height: "40px",
                      borderRadius: "6px",
                      backgroundColor: "#171D3F",
                      color: "white",
                    }}
                  >
                    Buy Now <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary toggle-btn"
            onClick={() => setShowAllCards(!showAllCards)}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "6px",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            {showAllCards ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Pricing), { ssr: false });
