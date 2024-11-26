import Image from "next/image";

export default function DomainCard({ domain }) {
  const getBadgeColor = (extension) => {
    switch (extension) {
      case "org":
        return "bg-warning";
      case "net":
        return "bg-danger";
      case "com":
        return "bg-warning";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="card">
      <div className="card-body d-flex">
        <div className={`badge ${getBadgeColor(domain.extension)} me-3`}>
          .{domain.extension}
        </div>
        <div className="flex-grow-1">
          <h5 className="card-title">{domain.name}</h5>
          <div className="d-flex align-items-center mb-2">
            <Image
              src="/domainSellerAvatar.svg"
              alt="Seller Avatar"
              width={24}
              height={24}
              className="me-2"
            />
            <span>Domain Seller name</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-muted text-decoration-line-through me-2">
                $699
              </span>
              <span className="fw-bold">${domain.price}</span>
              <span className="text-muted ms-2">
                ${Math.round(domain.price / 10)}/m
              </span>
            </div>
            <button className="btn btn-primary">Make an Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
