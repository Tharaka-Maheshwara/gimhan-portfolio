import { useState } from "react";

const navItems = [
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Work Experience", "/#experience"],
  ["Education", "/#education"],
  ["Projects", "/#projects"],
  ["Contact", "/#contact"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/#top" onClick={closeMenu}>
          <span className="brand-mark">MD</span>

          <span className="brand-copy">
            <span className="brand-title">MECHANICAL DESIGNER</span>
            <small className="brand-subtitle">
              PORTFOLIO <span aria-hidden="true">/</span> 2026
            </small>
          </span>
        </a>

        <button
          className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>

        <nav
          className={`nav-links${isMenuOpen ? " is-open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => {
            const isContactLink = label === "Contact";

            return (
              <a
                key={label}
                className={
                  isContactLink ? "nav-link nav-link--contact" : "nav-link"
                }
                href={href}
                onClick={closeMenu}
              >
                <span>{label}</span>
                {isContactLink && (
                  <span className="nav-link__arrow" aria-hidden="true">
                    ↗
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}