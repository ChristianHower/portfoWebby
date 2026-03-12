export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A blazing fast Next.js store with Sanity CMS and Stripe.',
      tags: ['Next.js', 'React', 'Stripe'],
      link: '#'
    },
    {
      title: 'AI Code Assistant',
      description: 'An AI-powered dev tool built to understand full codebases.',
      tags: ['Python', 'LLMs', 'TypeScript'],
      link: '#'
    },
    {
      title: 'Fintech Dashboard',
      description: 'Real-time financial analytics board using WebSockets.',
      tags: ['Vue', 'Node.js', 'D3.js'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-container projects-section">
      <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card glass-panel">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={p.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
