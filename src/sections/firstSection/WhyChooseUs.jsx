import React from "react";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

const WhyChooseUs = () => {
  return (
    <div className="container" style={{ margin: "80px auto" }}>
      <div className="row align-items-center justify-content-between gap-5 gap-lg-0">
        <div className="col-lg-6 col-xxl-5 flex flex-column gap-5">
          <div className="w-100">
            <h2 className="fw-bold text-start">Why Choose Us</h2>
            <p>
              We offer unique, memorable domains perfect for any business. With
              secure transactions, clear pricing, and a professional edge, we
              help you boost your brand&apos;s credibility and SEO. Join many
              others who trust us to find their ideal domain.
            </p>
            <div className="d-flex align-items-center">
              <Image
                src="/trustPilotAndStarsImage.svg"
                alt="Trustpilot Rating"
                width={300}
                height={100}
              />
            </div>
          </div>

          <div className="card w-100 my-3 my-lg-5">
            <ul className="list-group list-group-flush">
              {[
                {
                  id: 1,
                  title: "Transparency First:",
                  text: "No hidden costs. No complicated math. You’ll never be in the dark, whether you’re buying or selling.",
                },
                {
                  id: 2,
                  title: "Effortless Trading:",
                  text: "Our easy-to-use platform makes domain trading super simple with cutting-edge technology.",
                },
                {
                  id: 3,
                  title: "Secure Transactions:",
                  text: "Security is important to us. Every payment is monitored by our fraud prevention team for your safety.",
                },
              ]?.map((list) => (
                <li key={list?.id} className="list-group-item">
                  <b className="fw-bold" style={{ color: "#041E42" }}>
                    {list?.title}
                  </b>
                  <p>{list?.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-100 d-flex justify-content-center align-items-center flex-wrap gap-3 justify-content-lg-start">
            {[
              { id: 1, title: "Explore Domains" },
              { id: 2, title: "Contact Us" },
            ]?.map((btn) => (
              <button
                key={btn?.id}
                className={`btn mt-3 d-flex align-items-center px-4 gap-3 ${
                  btn?.id === 1 ? "btn-dark" : "btn-light"
                }`}
                style={{ border: btn?.id === 2 ? ".8px solid #171D3F" : "" }}
              >
                {btn?.title} <i className="bi bi-arrow-right fs-5"></i>
              </button>
            ))}
          </div>
        </div>

        <div className="col-lg-6 col-xxl-5 text-center d-flex flex-column gap-5">
          <div className="w-auto">
            <Image
              src="/whychooseusbg.svg"
              alt="Global Partnership"
              width={400}
              height={400}
              className="h-auto w-100"
            />
          </div>

          <div className="w-auto">
            <ul className="list-unstyled">
              {[
                {
                  id: 1,
                  img: "/yellowTickMark.svg",
                  title: "Curated collection of premium domains.",
                },
                {
                  id: 2,
                  img: "/yellowTickMark.svg",
                  title: "Secure payment and seamless transfer process.",
                },
                {
                  id: 3,
                  img: "/yellowTickMark.svg",
                  title: "Trusted by 1,000+ businesses worldwide.",
                },
                {
                  id: 4,
                  img: "/yellowTickMark.svg",
                  title: "Trusted by 1,000+ businesses worldwide.",
                },
              ]?.map((list) => (
                <li
                  key={list?.id}
                  className="d-flex align-align-items-center gap-3 text-start"
                >
                  <div>
                    <Image
                      src={list?.img}
                      alt="Global Partnership"
                      width={16}
                      height={16}
                      className="m-0"
                    />
                  </div>
                  <p className="m-0 fw-medium" style={{ fontSize: "18px" }}>
                    {list?.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
