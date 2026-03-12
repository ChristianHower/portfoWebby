export default function About() {
  const skills = [
    {
      icon: "📐",
      title: "AutoCAD & SketchUp",
      desc: "Design documentation, 3D modeling, and architectural visualization using industry-standard tools.",
    },
    {
      icon: "📊",
      title: "MATLAB & Microsoft 365",
      desc: "Data analysis, numerical computing, and professional documentation for engineering coursework.",
    },
    {
      icon: "🎮",
      title: "Blender & Unreal Engine",
      desc: "3D design, VR development, and game environment creation — hands-on experience from MMC Digital Lab.",
    },
    {
      icon: "✍️",
      title: "Technical Writing",
      desc: "Professional writing for engineering reports and project grants, with a deep understanding of engineering ethics.",
    },
  ];

  return (
    <section id="about" className="section-container about-section">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>

      <p className="about-text">
        I'm a Civil Engineering student at{" "}
        <strong>The Ohio State University</strong> pursuing a B.S. in Civil
        Engineering with a minor in <strong>Architectural Studies</strong>.
        Originally from Medford, New Jersey, I'm passionate about the
        intersection of structural engineering and architectural design.
      </p>

      <p className="about-detail">
        I'm seeking an engineering internship for Summer 2026, looking to
        apply my knowledge from civil engineering and architecture coursework
        to gain hands-on experience in transportation and/or structural
        engineering. Outside the classroom, I serve as an Engineers' Council
        Representative for OHI/O, an officer in the Game Creation Club, and
        I'm an Undergraduate Grader for OSU's Department of Engineering
        Education.
      </p>

      <div className="stats-grid">
        <div className="stat glass-panel">
          <h4 className="stat-number gradient-text">3.49</h4>
          <p className="stat-label">GPA</p>
        </div>
        <div className="stat glass-panel">
          <h4 className="stat-number gradient-text">2028</h4>
          <p className="stat-label">Expected Graduation</p>
        </div>
        <div className="stat glass-panel">
          <h4 className="stat-number gradient-text">1st</h4>
          <p className="stat-label">Place — MakeOHI/O 2026</p>
        </div>
      </div>

      <h3
        className="section-title"
        style={{ marginTop: "5rem", fontSize: "1.75rem" }}
      >
        Skills &amp; <span className="gradient-text">Tools</span>
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
