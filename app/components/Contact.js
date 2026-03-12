export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">
        Get in <span className="gradient-text">Touch</span>
      </h2>

      <div className="contact-card glass-panel">
        <p className="about-text" style={{ marginBottom: "1.5rem" }}>
          Whether you have an internship opportunity, want to collaborate on
          a project, or just want to connect — I'd love to hear from you.
        </p>

        <a
          href="mailto:christianh.hower@gmail.com"
          className="gradient-text contact-email"
        >
          christianh.hower@gmail.com
        </a>

        <br />

        <a
          href="mailto:christianh.hower@gmail.com"
          className="btn-primary"
          style={{ marginTop: "1rem" }}
        >
          Send Message
        </a>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/christian-hower-42b177319/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ChristianHower"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
