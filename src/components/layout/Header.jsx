import { useState } from "react";

const navItems = [
  ["About", "/#about"],
  ["Skills", "/#skills"],
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
          <span className="brand-mark">G</span>
          <span>
            GIMHAN
            <small>MECHANICAL DESIGNER</small>
          </span>
        </a>

        <button
          className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
          aria-hidden={!isMenuOpen}
        >
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}