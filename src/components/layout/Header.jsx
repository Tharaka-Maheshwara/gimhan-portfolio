import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Mechanical Design Portfolio home"
          onClick={closeMenu}
        >
          <span className="brand-mark">MD</span>

          <span className="brand-copy">
            <span className="brand-name">MECHANICAL DESIGN</span>
            <small>
              PORTFOLIO <span className="brand-divider">/</span> 2026
            </small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span>{menuOpen ? "CLOSE" : "MENU"}</span>
          <span className="menu-toggle-symbol" aria-hidden="true">
            {menuOpen ? "−" : "+"}
          </span>
        </button>

        <nav
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}