"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    avatar: "/blackMan.svg", // Updated to use blackMan.svg directly
    name: "John Doe",
    title: "CEO, ABC Corporation",
    text: "This is a great service.",
    date: "2022-01-01",
  },
  {
    avatar: "/blackMan.svg", // Updated to use blackMan.svg directly
    name: "Jane Smith",
    title: "Marketing Manager, DEF Agency",
    text: "We've seen significant growth.",
    date: "2022-02-01",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerView;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerView;
      return newIndex < 0 ? testimonials.length - itemsPerView : newIndex;
    });
  };

  const getVisibleTestimonials = () => {
    const endIndex = currentIndex + itemsPerView;
    if (endIndex <= testimonials.length) {
      return testimonials.slice(currentIndex, endIndex);
    } else {
      return [
        ...testimonials.slice(currentIndex, testimonials.length),
        ...testimonials.slice(0, endIndex - testimonials.length),
      ];
    }
  };

  return (
    <div className="container py-5 position-relative">
      <h2 className="text-center mb-4 fw-bold text-dark">
        What Our Customers Say
      </h2>

      {/* Left Arrow */}
      <button
        className="position-absolute top-50 start-0 translate-middle-y btn btn-light shadow rounded-circle d-flex justify-content-center align-items-center"
        style={{
          width: "50px",
          color: "black",
          height: "50px",
          zIndex: 10,
          left: "-30px",
        }}
        onClick={handlePrev}
      >
        <FaChevronLeft className="text-dark" size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="position-absolute top-50 end-0 translate-middle-y btn btn-light shadow rounded-circle d-flex justify-content-center align-items-center"
        style={{
          width: "50px",
          height: "50px",
          zIndex: 10,
          right: "-30px",
        }}
        onClick={handleNext}
      >
        <FaChevronRight className="text-dark" size={24} />
      </button>

      {/* Testimonials */}
      <div className="row">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={index}
            className={`col-${12 / itemsPerView} mb-4`} // Dynamically adjust the column width
          >
            <div className="card h-100 shadow">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="me-3"
                    style={{ borderRadius: "8px" }}
                  />
                  <div>
                    <h5 className="card-title mb-0">{testimonial.name}</h5>
                    <p className="card-subtitle text-muted">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="bi bi-star-fill text-warning me-1"
                    ></i>
                  ))}
                </div>

                <p
                  className="card-text mb-3 fw-bold"
                  style={{ color: "#041E42" }}
                >
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="card-text">
                  <small className="text-muted">{testimonial.date}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
