export default function StepCards() {
  const steps = [
    {
      number: "1",
      title: "Get Started",
      description:
        "Search for your desired domain on Jones.com. Create a free account to make an offer or buy it now.",
      bgColor: "rgb(67, 56, 242)",
    },
    {
      number: "2",
      title: "Simply Buy",
      description:
        "Choose between buy-it-now or negotiation options. Start the purchase process with one click.",
      bgColor: "rgb(255, 65, 65)",
    },
    {
      number: "3",
      title: "Secure Payment",
      description:
        "Pay securely via card or wire transfer. We'll handle the rest for a seamless ownership transfer.",
      bgColor: "rgb(255, 64, 184)",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#1E2B4D" }}>
        Easy Steps to Buy <br />
        Domain
      </h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {steps.map((step, index) => (
          <div key={index} className="col">
            <div
              className="card h-100 border-0 p-4"
              style={{
                backgroundColor: "rgb(247, 247, 255)",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="card-body d-flex flex-column">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: step.bgColor,
                  }}
                >
                  <span className="fs-4 fw-bold text-white">{step.number}</span>
                </div>
                <h5
                  className="card-title mb-3 fw-bold"
                  style={{ color: "#1E2B4D" }}
                >
                  {step.title}
                </h5>
                <p
                  className="card-text"
                  style={{
                    color: "#6B7280",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
