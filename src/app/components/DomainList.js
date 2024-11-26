import React from "react";
import "./domainList.css"; // Custom styles for the domain list

export default function DomainList() {
  // Sample domain data
  const domains = [
    {
      name: "techstartups.org",
      extension: ".org",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: 999,
      monthlyPrice: 60,
    },
    {
      name: "PixelForge.net",
      extension: ".net",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: null,
      monthlyPrice: null,
    },
    {
      name: "DesignCraft.ai",
      extension: ".ai",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: null,
      monthlyPrice: null,
    },
    {
      name: "CodeHive.net",
      extension: ".net",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: null,
      monthlyPrice: null,
    },
    {
      name: "techstartups.io",
      extension: ".io",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: null,
      monthlyPrice: null,
    },
    {
      name: "PixelMasters.tech",
      extension: ".net",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: null,
      monthlyPrice: null,
    },
    {
      name: "WebMinds.ai",
      extension: ".org",
      seller: "Domain Seller name",
      price: 599,
      originalPrice: null,
      monthlyPrice: null,
    },
  ];

  return (
    <div className="domain-list">
      <div className="row">
        {domains.map((domain, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="domain-card card p-3 shadow-sm border-0 rounded">
              {/* Extension Badge */}
              <span
                className={`badge domain-badge ${
                  domain.extension === ".org" || domain.extension === ".ai"
                    ? "bg-warning"
                    : "bg-danger"
                }`}
              >
                {domain.extension}
              </span>

              {/* Domain Details */}
              <h5 className="domain-name mt-3 mb-2">{domain.name}</h5>
              <div className="seller-info d-flex align-items-center mb-3">
                <img
                  src="/domaninSellerAvatar.svg"
                  alt="Seller Avatar"
                  className="seller-avatar rounded-circle me-2"
                  width="32"
                  height="32"
                />
                <span>{domain.seller}</span>
              </div>

              {/* Pricing Section */}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {domain.originalPrice && (
                    <p className="original-price text-muted mb-0">
                      <del>${domain.originalPrice}</del>
                    </p>
                  )}
                  <h5 className="current-price">${domain.price}</h5>
                  {domain.monthlyPrice && (
                    <p className="monthly-price text-muted mb-0">
                      ${domain.monthlyPrice}/m
                    </p>
                  )}
                </div>

                {/* Call-to-Action Button */}
                <button className="btn btn-primary">Make an Offer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
