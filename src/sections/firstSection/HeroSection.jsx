"use client";
import React from "react";
import Image from "next/image";
import { RxMagnifyingGlass } from "react-icons/rx";

const HeroSection = () => {
  return (
    <section
      className="text-center py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div
          className="d-flex align-items-center justify-content-center position-relative"
          style={{ marginTop: "50px" }}
        >
          {/* Rocket and Text Section */}
          <div
            className="d-flex flex-column m-0 position-relative"
            style={{ zIndex: "1" }}
          >
            <div className="position-relative">
              {/* Rocket Image */}
              <Image
                src="/rocket.png"
                alt="Rocket"
                width={60} // Reduced size for the rocket
                height={140} // Reduced size for the rocket
                style={{
                  height: "auto",
                  width: "100px",
                  transform: "translate(-55%, -65%)",
                  filter: "drop-shadow(0 8px 16px #5C28D466)",
                }}
                className="position-absolute start-0 top-0 d-none d-md-block"
              />

              {/* Main Heading */}
              <h1
                className="fw-bold"
                style={{
                  color: "#041E42",
                  fontSize: "2.9rem", // Smaller font size for desktop
                }}
              >
                Find the Perfect Web Address to <br /> Start Your Business
              </h1>
            </div>

            {/* Subtext */}
            <p
              className="mb-4"
              style={{
                color: "#00000080",
                fontSize: "1rem", // Adjusted font size for visibility
              }}
            >
              Unlock the potential of your business with a memorable domain name
            </p>

            {/* Input Section */}
            <div
              className="input-group mb-5 mx-auto"
              style={{ maxWidth: "350px" }} // Reduced the width slightly
            >
              <input
                type="text"
                className="form-control"
                placeholder="think of a domain name"
                aria-label="Domain name"
              />
              <button className="btn btn-outline-dark" type="button">
                <RxMagnifyingGlass size={20} />
              </button>
            </div>
          </div>

          {/* Astronaut Image */}
          {/* <div
            className="position position-absolute top-0 end-0 z-index-0"
            style={{
              transform: "translate(-150%, -30%)", // Adjusted positioning for better visibility
              zIndex: "0",
            }}
          >
            <Image
              src="/asrranut.svg"
              alt="Astronaut"
              width={80} // Reduced astronaut size
              height={280} // Reduced astronaut size
              className="w-auto"
            />
          </div> */}
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem !important;
          }

          p {
            font-size: 0.9rem !important;
          }

          .input-group {
            max-width: 300px !important;
          }

          .position img {
            width: 60px !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
