import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Logo and Description Column */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <div className="mb-3">
              <img
                src="/arrowHeader.svg"
                alt="Company Logo"
                width={60}
                height={60}
                className="d-inline-block"
              />
            </div>
            <p className="text-muted mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#" className="text-dark">
                <i className="bi bi-twitter"></i>
                <span className="visually-hidden">Twitter</span>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-facebook"></i>
                <span className="visually-hidden">Facebook</span>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-instagram"></i>
                <span className="visually-hidden">Instagram</span>
              </a>
              <a href="#" className="text-dark">
                <i className="bi bi-github"></i>
                <span className="visually-hidden">Github</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h5 className="fw-bold mb-3">Quick links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-decoration-none text-dark">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/our-domains"
                  className="text-decoration-none text-dark"
                >
                  Our Domains
                </a>
              </li>
              <li className="mb-2">
                <a href="/why-us" className="text-decoration-none text-dark">
                  Why Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h5 className="fw-bold mb-3">Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/terms" className="text-decoration-none text-dark">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-decoration-none text-dark">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="mailto:support@yourdomain.com"
                  className="text-decoration-none text-dark"
                >
                  support@yourdomain.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel:+1.800.123.4567"
                  className="text-decoration-none text-dark"
                >
                  +1.800.123.4567
                </a>
              </li>
              <li>
                <img
                  src="/secureSslLogo.svg"
                  alt="Secure SSL"
                  width={100}
                  height={40}
                  className="mt-2"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              © 2024 Domains. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
