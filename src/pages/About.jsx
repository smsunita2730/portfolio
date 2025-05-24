import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay a bit if you want smoother load
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`about-section ${isVisible ? "fade-in" : ""}`} id="about">
      

      <div className="about-text">
        
        <h2 className="sanu">About Me</h2>
         <h1>
          <strong>
            Software Developer | DSA Enthusiast | Frontend Developer | ReactJS | Java & MySQL
          </strong>
        </h1>
        <p>
          I’m Sunita Meena — a passionate and consistent learner with strong skills in frontend development using
          ReactJS, along with knowledge of Core Java. I enjoy creating responsive and user-friendly interfaces,
          solving problems through Data Structures and Algorithms, and exploring the world of content writing.
          I believe in continuous growth and love turning ideas into working solutions.
        </p>
        <div className="about-contact">
          <p><strong>Email:</strong> <a href="mailto:sunitameenasm01@gmail.com">sunitameenasm01@gmail.com</a></p>
          <p><strong>Place:</strong> Rajasthan, India</p>
        </div>
        <a href="https://drive.google.com/file/d/1p5O0nRG42bykxhUVy6p6ndAJBraApSW3/view?usp=sharing" className="resume-button" target="_blank" rel="noopener noreferrer">
          Click to see Resume ›
        </a>
      </div>
    </div>
  );
};

export default About;
