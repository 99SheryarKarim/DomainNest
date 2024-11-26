export default function SortDropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="sortDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by: Most Relevant
      </button>
      <ul className="dropdown-menu" aria-labelledby="sortDropdown">
        <li>
          <a className="dropdown-item" href="#">
            Most Relevant
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Lowest Price
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Highest Price
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Recently Added
          </a>
        </li>
      </ul>
    </div>
  );
}
