export default function About() {
  const skills = [
    {
      icon: "🏗️",
      title: "Structural Analysis",
      desc: "Load calculations, stress analysis, and structural modeling using industry-standard software.",
    },
    {
      icon: "🏛️",
      title: "Architectural Design",
      desc: "Space planning, conceptual design, and visual communication bridging engineering and architecture.",
    },
    {
      icon: "🌱",
      title: "Sustainable Infrastructure",
      desc: "Green building principles, LEED frameworks, and environmentally-conscious design solutions.",
    },
    {
      icon: "📐",
      title: "CAD & BIM",
      desc: "Proficient in AutoCAD, Revit, and Civil 3D for detailed design documentation and modeling.",
    },
  ];

  return (
    <section id="about" className="section-container about-section">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <p className="about-text">
        I'm a Civil Engineering student at{" "}
        <strong>The Ohio State University</strong> with a minor in{" "}
        <strong>Architectural Studies</strong>. I'm passionate about the
        intersection of structural engineering and architectural design —
        creating spaces that are both beautifully designed and built to
        last.
      </p>

      <p className="about-detail">
        From analyzing load-bearing systems to sketching building concepts,
        I bring a unique dual perspective that combines engineering rigor
        with creative vision. I'm driven by the belief that infrastructure
        should be as inspiring as it is functional.
      </p>

      <div className="stats-grid">
        <div className="stat glass-panel">
          <h4 className="stat-number gradient-text">3+</h4>
          <p className="stat-label">Years of Study</p>
        </div>
        <div className="stat glass-panel">
          <h4 className="stat-number gradient-text">OSU</h4>
          <p className="stat-label">Ohio State</p>
        </div>
        <div className="stat glass-panel">
          <h4 className="stat-number gradient-text">2</h4>
          <p className="stat-label">Disciplines</p>
        </div>
      </div>

      <h3
        className="section-title"
        style={{ marginTop: "5rem", fontSize: "1.75rem" }}
      >
        Focus <span className="gradient-text">Areas</span>
      </h3>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.title} className="skill-card glass-panel">
            <div className="skill-icon">{skill.icon}</div>
            <h4 className="skill-title">{skill.title}</h4>
            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
