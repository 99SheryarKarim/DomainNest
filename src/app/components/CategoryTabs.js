export default function CategoryTabs() {
  const categories = [
    "Tech Startups",
    "E-Commerce",
    "Blogs & Media",
    "Healthcare",
    "Fashion & Lifestyle",
  ];

  return (
    <ul style={{}} className="nav nav-tabs">
      {categories.map((category, index) => (
        <li className="nav-item" key={index}>
          <a className={`nav-link ${index === 0 ? "active" : ""}`} href="#">
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}
