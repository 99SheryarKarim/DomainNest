"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Import Link from next/link

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
          <Image // Use Image instead of img
            src="/arrowHeader.svg"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="d-none d-lg-flex align-items-center flex-grow-1 mx-4">
          <ul className="nav me-4">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link d-flex align-items-center fw-bold active"
                style={{ color: "#383D58" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                href="/domains"
                className="nav-link d-flex align-items-center"
                style={{ color: "#383D58" }}
              >
                Our Domains
                <FaChevronDown className="ms-1" size={12} />
              </Link>
              {/* Dropdown Menu */}
              <ul className="dropdown-menu" style={{ marginTop: "0.5rem" }}>
                <li>
                  <Link href="/domains/domain1" className="dropdown-item">
                    Domain 1
                  </Link>
                </li>
                <li>
                  <Link href="/domains/domain2" className="dropdown-item">
                    Domain 2
                  </Link>
                </li>
                <li>
                  <Link href="/domains/domain3" className="dropdown-item">
                    Domain 3
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                href="/why-us"
                className="nav-link d-flex align-items-center"
                style={{ color: "#383D58" }}
              >
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about-us"
                className="nav-link d-flex align-items-center"
                style={{ color: "#383D58" }}
              >
                About Us
              </Link>
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
          <Link href="/buy-domains" className="btn btn-dark">
            Buy Domains →
          </Link>
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
            transition: "transform 0.3s ease-in-out",
            transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
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
                <Link
                  href="/"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/domains"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  Our Domains
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/why-us"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  Why Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about-us"
                  className="nav-link"
                  style={{ color: "#383D58" }}
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="mt-3">
              <Link href="/buy-domains" className="btn btn-dark w-100">
                Buy Domains →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
