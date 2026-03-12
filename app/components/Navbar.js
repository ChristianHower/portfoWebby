"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar glass-panel ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="nav-brand">
        <Link href="/" aria-label="Home">
          <span className="gradient-text gradient-logo">CH</span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger ${menuOpen ? "hamburger--open" : ""}`} />
      </button>

      <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        <Link href="#about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        <Link href="#projects" className="nav-link" onClick={closeMenu}>
          Projects
        </Link>
        <Link href="#contact" className="btn-primary btn-small" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
