import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Impact", href: "#impact" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`site-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="brand" onClick={closeMenu}>
          {/* <span className="brand-mark">
            <span className="brand-line brand-line-top"></span>
            <span className="brand-dot"></span>
            <span className="brand-line brand-line-bottom"></span>
          </span> */}

          <span className="brand-name">
            Binbay <span>Recycling</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="desktop-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="navbar-button">
          Recycle With Us
          <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger">
            <span className="hamburger-line hamburger-top"></span>
            <span className="hamburger-dot"></span>
            <span className="hamburger-line hamburger-bottom"></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-navigation ${menuOpen ? "open" : ""}`}>
        <div className="mobile-navigation-inner">
          <div className="mobile-menu-label">
            <span>MENU</span>
            <span>BINBAY RECYCLING</span>
          </div>

          <nav className="mobile-links">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                style={{ "--delay": `${index * 0.06}s` }}
                onClick={closeMenu}
              >
                <span className="mobile-link-number">0{index + 1}</span>

                <span>{link.name}</span>

                <span className="mobile-link-arrow">↗</span>
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="mobile-recycle-button"
            onClick={closeMenu}
          >
            Recycle With Us
            <span>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
