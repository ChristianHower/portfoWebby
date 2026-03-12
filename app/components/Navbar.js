import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-brand">
        <Link href="/">
          <span className="gradient-text gradient-logo">Christian</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="#about" className="nav-link">About</Link>
        <Link href="#projects" className="nav-link">Projects</Link>
        <Link href="#contact" className="btn-primary btn-small">Contact</Link>
      </div>
    </nav>
  );
}
