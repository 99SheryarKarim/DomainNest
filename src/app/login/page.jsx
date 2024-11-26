"use client";
import React, { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Custom CSS for styling

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    termsAccepted: false,
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Handle API submission here
  };

  return (
    <div
      className="d-flex"
      style={{
        paddingTop: "77px",
        maxWidth: "1440px",
        margin: "0 auto",
        fontFamily: "Jost, sans-serif",
      }}
    >
      {/* Left Section */}
      <div
        className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: "url('/loginandSignupbgImg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "754px",
          width: "613px",
          marginLeft: "2rem", // Decreased the gap between left and right sections
        }}
      >
        <div
          style={{
            display: "flex",
            width: "510px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="p-5"
        >
          <h1
            style={{
              color: "#FFF",
              textAlign: "justify",
              fontSize: "120px",
              fontWeight: "700",
              lineHeight: "110px",
              fontFamily: "Jost, sans-serif",
              marginBottom: "2rem",
            }}
          >
            Hello <br /> Again.
          </h1>
          <p
            style={{
              textAlign: "justify",
              fontSize: "18px",
              fontFamily: "Jost, sans-serif",
              marginBottom: "20px",
              color: "#FFF",
            }}
            className="mb-4"
          >
            Seamlessly connecting you to the perfect domain with james.com.
            Empowering businesses and elevating opportunities.
          </p>
          <div style={{ marginTop: "111px" }}>
            <p style={{ fontSize: "18px", fontFamily: "Jost, sans-serif" }}>
              Log In With Social Media
            </p>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "40px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "#3B5998",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                className="facebook-btn"
              >
                <FaFacebook style={{ marginRight: "8px" }} />
              </button>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50%",
                  height: "40px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "#DD4B39",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  marginLeft: "8px",
                }}
                className="google-btn"
              >
                <FaGoogle style={{ marginRight: "8px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-lg-6 d-flex align-items-center justify-content-center bg-white p-4">
        <div
          className="w-100"
          style={{ maxWidth: "400px", fontFamily: "Jost, sans-serif" }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "60px",
              fontWeight: "700",
              color: "#171D3F",
            }}
          >
            Log In
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div
              style={{ height: "50px", width: "100%" }} // Changed to make it responsive
              className="form-floating mb-3"
            >
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            {/* Phone Field */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="form-control"
                containerClass="w-100" // Changed to make it responsive
                dropdownClass="phone-dropdown"
                style={{ width: "100%" }} // Changed to make it responsive
              />
            </div>

            {/* Password Field */}
            <div className="form-floating mb-3 position-relative">
              <input
                style={{ height: "50px", width: "100%" }} // Changed to make it responsive
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <p
              style={{
                fontSize: "18px",
                color: "#848282",
                fontFamily: "Jost, sans-serif",
              }}
            >
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
            {/* Terms Checkbox */}
            <div className="form-check d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                style={{
                  width: "151px",
                  height: "50px",
                  backgroundColor: "#171D3F",
                  fontFamily: "Jost, sans-serif",
                }}
              >
                Log In
              </button>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                className="form-check-input"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="termsAccepted"
                style={{ color: "#848282" }}
                className="form-check-label"
              >
                I agree to the
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms of use
                </a>
                and
                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy policy
                </a>
                . By moving forward, you accept that jones and its affiliates
                may contact you via calls, WhatsApp, or SMS messages,
                potentially using automated technology, at the number you
                provided.
              </label>
            </div>
          </form>
          <br />
          <div
            className="d-flex justify-content-center align-items-center text-center"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <div
              className="text-muted"
              style={{
                maxWidth: "506px",
                height: "245px",
                fontFamily: "Jost, sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Space for CAPTCHA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
