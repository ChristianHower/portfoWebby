export default function About() {
  return (
    <section id="about" className="section-container about-section">
      <div className="about-content">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="about-text">
          I'm a passionate developer with a deep love for creating beautiful, accessible, and performant user interfaces. 
          With a strong foundation in modern web technologies, I bridge the gap between design and engineering. Let's create something extraordinary together.
        </p>
        <div className="stats-grid">
          <div className="stat glass-panel">
            <h4 className="stat-number gradient-text">5+</h4>
            <p className="stat-label">Years Exp.</p>
          </div>
          <div className="stat glass-panel">
            <h4 className="stat-number gradient-text">50+</h4>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat glass-panel">
            <h4 className="stat-number gradient-text">100%</h4>
            <p className="stat-label">Success</p>
          </div>
        </div>
      </div>
    </section>
  );
}
