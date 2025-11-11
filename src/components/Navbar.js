import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">🌟 Kishan Kumar Kannaujiya 🌟</h1>
        <div className="navbar-links">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="navbar-link"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
