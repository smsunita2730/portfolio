import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">Sunita</div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {["home", "about", "skills", "education", "projects", "experience", "contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className={activeLink === link ? "active" : ""}
            onClick={handleLinkClick}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <GiHamburgerMenu size={32} />
      </div>
    </header>
  );
};

export default Navbar;
