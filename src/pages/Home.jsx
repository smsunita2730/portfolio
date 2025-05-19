import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// Replace with your image
import "./Home.css";
const Home = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Hi There,</h2>
        <h1>I'm <span className="highlight-dark">Sunita Meena</span> <span className="highlight"></span></h1>
        <h3 className="typewriter">
          I Am  Good Into <span className="type">
            <Typewriter
              options={{
                strings: ["Software developement", "DSA", "Frontend Developement ","C++" , "ReactJs"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>

        <a className="btn-primary" href="#about">About Me <span>↓</span></a>

        <div className="social">
          <a href="https://linkedin.com/in/sunita-meena-92856122b/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/smsunita2730" target="_blank"><FaGithub /></a>
          <a href="mail to:sunitameenasm01@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <div className="hero-right">
        <img src="sanupic.jpeg"alt="profile" />
      </div>
    </div>
  );
};

export default Home;
