export default function Projects() {
  const projects = [
    {
      title: "Portable Assistance Centers for Columbus",
      description:
        "Collaborated in a multidisciplinary team of four to design, develop, and pitch mobile sanitation and food distribution stations for the city of Columbus. Managed project timelines, organized budget breakdowns, and presented a theoretical development plan for the SEEC foundation.",
      tags: ["Civil Engineering", "Project Management", "Team Collaboration"],
      date: "Feb – Apr 2025",
      link: null,
    },
    {
      title: "Bench Fishing — Game Creation Club",
      description:
        "A fishing mini-jam game project built for OSU's Game Creation Club tournament (GCT2025). Developed game mechanics and environments using C# in a collaborative team setting.",
      tags: ["C#", "Game Dev", "Unreal Engine"],
      date: "2025",
      link: "https://github.com/ChristianHower/GCT2025",
    },
    {
      title: "OHI/O Discord Bot",
      description:
        "Contributed to the Discord bot used for OHI/O hackathon events, helping manage event logistics and participant communication at scale.",
      tags: ["Python", "Discord API", "Hackathon"],
      date: "2024",
      link: "https://github.com/ChristianHower/ohio-discord-bot-2024",
    },
    {
      title: "LeetCode Solutions",
      description:
        "An ongoing repository of algorithmic problem solutions in C++, building strong foundations in data structures and computational thinking.",
      tags: ["C++", "Algorithms", "Data Structures"],
      date: "Ongoing",
      link: "https://github.com/ChristianHower/leetCode",
    },
  ];

  const experience = [
    {
      role: "Undergraduate Grader",
      org: "OSU Dept. of Engineering Education",
      date: "Aug 2025 – Present",
      desc: "Coordinate with engineering professors to maintain grading schedules and meet weekly quotas, demonstrating strong technical communication and writing skills.",
    },
    {
      role: "VR Development Team Intern",
      org: "MMC Digital Lab",
      date: "Oct 2024 – Jan 2025",
      desc: "Developed projects using Blender and Unreal Engine alongside student employees, building 3D design skills and general software proficiency.",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">
        Projects &amp; <span className="gradient-text">Experience</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card glass-panel">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              <span className="tag" style={{ opacity: 0.6 }}>
                {project.date}
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            )}
          </article>
        ))}
      </div>

      <h3
        className="section-title"
        style={{ marginTop: "5rem", fontSize: "1.75rem" }}
      >
        Work <span className="gradient-text">Experience</span>
      </h3>

      <div className="projects-grid">
        {experience.map((exp) => (
          <article key={exp.role} className="project-card glass-panel">
            <h3 className="project-title">{exp.role}</h3>
            <div className="project-tags" style={{ marginBottom: "0.75rem" }}>
              <span className="tag">{exp.org}</span>
              <span className="tag" style={{ opacity: 0.6 }}>
                {exp.date}
              </span>
            </div>
            <p className="project-desc" style={{ marginBottom: 0 }}>
              {exp.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
