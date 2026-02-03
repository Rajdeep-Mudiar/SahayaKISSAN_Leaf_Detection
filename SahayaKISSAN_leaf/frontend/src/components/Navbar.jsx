import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "http://localhost:5173/home", label: "🏠 Home", external: true },

    { to: "/", label: "Assam Tea Crisis" },
    { to: "/page2", label: "Page 2" },
    { to: "/page3", label: "Page 3" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-flex">
            {/* Desktop Menu */}
            <div className="desktop-menu">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle Button */}
            <button
              className={`mobile-toggle ${isOpen ? "open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <div className="mobile-menu-container">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
