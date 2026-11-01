const navItems = [
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Projects", "/#projects"],
  ["Contact", "/#contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/#top">
          <span className="brand-mark">G</span>

          <span>
            GIMHAN
            <small>MECHANICAL DESIGNER</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}