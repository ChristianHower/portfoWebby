export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
      <div className="contact-card glass-panel">
        <p className="about-text" style={{marginBottom: "2rem"}}>
          Whether you have a question, a project in mind, or just want to say hi, I'd love to hear from you.
        </p>
        <a href="mailto:hello@example.com" className="gradient-text contact-email">hello@example.com</a>
        <br />
        <a href="mailto:hello@example.com" className="btn-primary">Send Message</a>
      </div>
    </section>
  );
}
