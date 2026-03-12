export default function Projects() {
  const projects = [
    {
      title: "Pedestrian Bridge Design",
      description:
        "Designed a steel truss pedestrian bridge for a campus connectivity project. Performed load analysis and created full construction drawings in AutoCAD.",
      tags: ["Structural Design", "AutoCAD", "Steel"],
      link: "#",
    },
    {
      title: "Sustainable Housing Study",
      description:
        "Researched passive solar design strategies for affordable housing in the Midwest. Combined architectural concepts with energy modeling.",
      tags: ["Sustainability", "Revit", "Energy Analysis"],
      link: "#",
    },
    {
      title: "Stormwater Management Plan",
      description:
        "Developed a green infrastructure plan for urban runoff mitigation using bioswales, permeable pavement, and retention basins.",
      tags: ["Hydrology", "Civil 3D", "GIS"],
      link: "#",
    },
    {
      title: "Mixed-Use Building Concept",
      description:
        "Collaborative architectural studio project designing a mixed-use building that blends residential, retail, and public spaces.",
      tags: ["Architecture", "SketchUp", "Concept Design"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        Selected <span className="gradient-text">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card glass-panel">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View Details →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
