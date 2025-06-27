import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/service" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Dev<span>Folio</span>
        </Link>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active-link" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <FaSun className="sun-icon" />
          </li>
        </ul>

        <div className="mobile-menu-icon">
          <FaSun className="sun-icon" />
          <FaBars className="bar-icon" onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <h2 className="mobile-logo">
              Dev<span>Folio</span>
            </h2>
            <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
          </div>
          <ul className="mobile-links">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active-link" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <FaSun className="sun-icon" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
