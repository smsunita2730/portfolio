import "./Contact.css";

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p>Phone: +91-9079302728</p>
          <p>Email: <a href="mailto:sunitameenasm01@gmail.com">sunitameenasm01@gmail.com</a></p>
          <p>Location: Jaipur, India-140413</p>
        </div>

        {/* Center: Contact */}
        <div className="footer-section">
          <h2>Contact</h2>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          <p>Keep Rising 🚀</p>
        </div>

        {/* Right: Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-note">Designed with ❤️ by Sunita Meena</p>
    </footer>
  );
};

export default Contact;
