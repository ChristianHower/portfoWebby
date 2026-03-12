import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb" />
        <div className="ambient-orb" />
        <div className="ambient-orb" />
      </div>

      <Navbar />

      <main>
        <section className="hero-section" id="home">
          <span className="hero-badge glass-panel">
            <span className="hero-badge-dot" />
            Open to opportunities
          </span>

          <h1 className="hero-title">
            Hi, I'm Christian Hower. <br />
            I design{" "}
            <span className="gradient-text">what gets built.</span>
          </h1>

          <p className="hero-subtitle">
            Civil Engineering student at The Ohio State University with a
            minor in Architectural Studies — bridging structural precision
            and architectural vision.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </section>

        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Christian Hower. Built with Next.js.
        </p>
      </footer>
    </>
  );
}
