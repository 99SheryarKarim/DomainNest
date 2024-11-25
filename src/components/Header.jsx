"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="shadow-sm bg-white">
      <nav className="container d-flex justify-content-between align-items-center py-3">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img src="/arrowHeader.svg" alt="Logo" width={40} height={40} />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="d-none d-lg-flex align-items-center flex-grow-1 mx-4">
          <ul className="nav me-4">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link d-flex align-items-center fw-bold active"
                style={{ color: "#383D58" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="/domains"
                className="nav-link d-flex align-items-center"
                style={{ color: "#383D58" }}
              >
                Our Domains
                <FaChevronDown className="ms-1" size={12} />
              </a>
              {/* Dropdown Menu */}
              <ul className="dropdown-menu" style={{ marginTop: "0.5rem" }}>
                <li>
                  <a href="/domains/domain1" className="dropdown-item">
                    Domain 1
                  </a>
                </li>
                <li>
                  <a href="/domains/domain2" className="dropdown-item">
                    Domain 2
                  </a>
                </li>
                <li>
                  <a href="/domains/domain3" className="dropdown-item">
                    Domain 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href="/why-us"
                className="nav-link d-flex align-items-center"
                style={{ color: "#383D58" }}
              >
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about-us"
                className="nav-link d-flex align-items-center"
                style={{ color: "#383D58" }}
              >
                About Us
              </a>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="d-flex flex-grow-1 me-4">
            <div className="input-group">
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
        </div>

        {/* Buy Domains Button - Desktop */}
        <div className="d-none d-lg-block">
          <a href="/buy-domains" className="btn btn-dark">
            Buy Domains →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="btn btn-outline-dark d-lg-none"
          type="button"
          onClick={toggleDrawer}
        >
          ☰
        </button>

        {/* Offcanvas/Drawer - Mobile */}
        <div
          className={`offcanvas offcanvas-end ${isDrawerOpen ? "show" : ""}`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{
            width: "100%",
            maxWidth: "300px",
            transform: "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="offcanvas-header">
            <h5>Menu</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={toggleDrawer}
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Mobile Search */}
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for your ideal domain..."
                />
                <div className="input-group-append">
                  <button className="btn btn-dark" type="button">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>

            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a href="/" className="nav-link" style={{ color: "#383D58" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/domains"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  Our Domains
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/why-us"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about-us"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  About Us
                </a>
              </li>
            </ul>
            <div className="mt-3">
              <a href="/buy-domains" className="btn btn-dark w-100">
                Buy Domains →
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
