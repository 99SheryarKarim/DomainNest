"use client";

import React, { useState } from "react";
import styled from "styled-components";
import minusIco from "./../../../public/minus.svg";
import plusIco from "./../../../public/plus.svg"; // Corrected the path to the plus icon
import Image from "next/image";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What makes your service secure?",
      answer:
        "We secure your data with advanced SSL encryption and verified payment gateways, ensuring every transaction is safe and protected from threats.",
    },
    {
      question: "How can I verify your trustworthiness?",
      answer:
        "Our platform is backed by thousands of positive reviews and trusted by leading businesses worldwide.",
    },
    {
      question: "What if I face any issues?",
      answer:
        "We offer 24/7 customer support to resolve your concerns as quickly as possible.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for your satisfaction.",
    },
    {
      question: "How do you ensure transaction safety?",
      answer:
        "All transactions are processed through highly secure, PCI-compliant payment gateways.",
    },
    {
      question: "Why should I choose you over competitors?",
      answer:
        "Our platform offers unparalleled service quality, competitive pricing, and proven reliability.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container" style={{ margin: "80px auto" }}>
      <h2 className="text-center fw-bold">Frequently asked questions</h2>
      <div className="accordion mt-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="accordion-item border-0 mb-2"
            style={{ borderBottom: "1px solid #e5e5e5" }}
          >
            <h2 className="accordion-header">
              <StyledButton
                className={`accordion-button ${
                  activeIndex === index ? "" : "collapsed"
                }`}
                onClick={() => toggleAccordion(index)}
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#212529",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  className="fw-semibold fs-6 fs-sm-5 m-0"
                  style={{ color: "#101828" }}
                >
                  {item.question}
                </p>

                <Image
                  src={activeIndex === index ? minusIco : plusIco} // Corrected the logic to switch between icons
                  width={20}
                  height={20}
                  alt="Icon"
                />
              </StyledButton>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div
                className="accordion-body text-muted pt-0 ps-4 pe-4 pb-3"
                style={{ fontSize: "0.9rem" }}
              >
                <span className="fw-normal fs-6" style={{ color: "#667085" }}>
                  {item.answer}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledButton = styled("button")`
  &::after {
    content: "";
    display: none;
  }
`;

export default FAQ;
