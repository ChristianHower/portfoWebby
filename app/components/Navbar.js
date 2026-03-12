"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-header">
        <Link href="/" aria-label="Home" className="mobile-logo">
          CH
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${menuOpen ? "hamburger--open" : ""}`} />
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {menuOpen && (
        <div className="sidebar-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      <nav className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-top">
          <Link href="/" aria-label="Home" className="sidebar-logo" onClick={closeMenu}>
            CH
          </Link>
          <div className="sidebar-divider" />
          <Link href="#about" className="sidebar-link" onClick={closeMenu}>
            About
          </Link>
          <Link href="#projects" className="sidebar-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="#contact" className="sidebar-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-divider" />
          <p className="sidebar-copyright">
            © {new Date().getFullYear()} Christian Hower
          </p>
        </div>
      </nav>
    </>
  );
}
