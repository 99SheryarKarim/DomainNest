import React from "react";
import Image from "next/image";

const TrustSection = () => {
  return (
    <div style={{ backgroundColor: "#171D3F" }}>
      <section
        className="py-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1440px",
          minHeight: "601px",
          margin: "0 auto",
          padding: "48px auto",
        }}
      >
        <div className="container">
          <div className="row align-items-center gap-5 gap-lg-0">
            <div className="col-lg-6 text-white mb-5 mb-lg-0">
              <h2 className="fw-bold fs-1 mb-4">Why You Can Trust Uss</h2>
              <p className="fw-medium fs-5 mb-5">
                Experience secure, reliable, and customer-focused service with a
                commitment to quality and trust at every step.
              </p>
              <button className="btn btn-light fw-semibold py-2 py-sm-3 px-3 px-sm-4 fs-sm-6 mt-3">
                Get Started Securely →
              </button>
            </div>

            <div className="col-lg-6">
              <div
                className="row g-4 pb-4 ps-4 pe-4"
                style={{
                  backgroundColor: "#E6EAFF",
                  margin: "0 1px",
                }}
              >
                {[
                  {
                    id: 1,
                    icon: "VerifieddTransactions.svg",
                    title: "Verified Transactions",
                  },
                  {
                    id: 2,
                    icon: "sslSecurity.svg",
                    title: "SSL Secure Payment",
                  },
                  {
                    id: 3,
                    icon: "expertSupport.svg",
                    title: "Expert Support 24/7",
                  },
                  {
                    id: 4,
                    icon: "MoneryBackGurantee.svg",
                    title: "Money-Back Guarantee",
                  },
                ]?.map((card) => (
                  <div className="col-sm-6" key={card?.id}>
                    <div className="bg-white p-3 rounded text-center">
                      <Image
                        src={card?.icon}
                        alt={card?.title}
                        width={95}
                        height={95}
                      />
                      <p className="" style={{ marginTop: "20px" }}>
                        {card?.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustSection;
