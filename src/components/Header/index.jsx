import { useState, useEffect } from "react";
import "./header.css";

export default function Header({ activeSection }) {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`} id="header">
      <nav className="nav container">
        {/* Brand Logo */}
        <a href="#home" className="nav__logo">
          <span className="nav__logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19V5L12 13L20 5V19" stroke="#ff7a00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="nav__logo-text">Mathan</span>
        </a>

        {/* Desktop & Mobile Menu */}
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={`#${item.id}`}
                  onClick={() => setShowMenu(false)}
                  className={`nav__link ${activeSection === item.id ? "active-link" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            className="nav__close"
            id="nav-close"
            aria-label="Close menu"
            onClick={() => setShowMenu(false)}
          >
            ✕
          </button>
        </div>

        {/* Right CTA */}
        <div className="nav__actions">
          <a href="#contact" className="nav__cta-btn">
            Book Call
          </a>
          <button
            className="nav__toggle"
            id="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="uil uil-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
