import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <h1 className="hero-title">
            Hi, I'm Christian. <br />
            I build <span className="gradient-text">stunning digital experiences</span>.
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer & Designer crafting modern, dynamic web applications.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
        </section>
        
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af', borderTop: '1px solid rgba(255,255,255,0.08)'}}>
        <p>© {new Date().getFullYear()} Christian. All rights reserved.</p>
      </footer>
    </>
  );
}
