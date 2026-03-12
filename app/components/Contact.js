export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">
        Get in <span className="gradient-text">Touch</span>
      </h2>

      <div className="contact-card glass-panel">
        <p className="about-text" style={{ marginBottom: "1.5rem" }}>
          Whether you have a project opportunity, want to collaborate on
          research, or just want to connect — I'd love to hear from you.
        </p>

        <a
          href="mailto:hower.christian@osu.edu"
          className="gradient-text contact-email"
        >
          hower.christian@osu.edu
        </a>

        <br />

        <a
          href="mailto:hower.christian@osu.edu"
          className="btn-primary"
          style={{ marginTop: "1rem" }}
        >
          Send Message
        </a>

        <div className="contact-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
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
