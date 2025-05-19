import React from "react";
import {
  SiCplusplus, SiJavascript, SiMysql, SiReact, SiHtml5,
  SiCss3, SiTailwindcss, SiBootstrap,  SiGit,
  SiLeetcode, SiLinux
} from "react-icons/si";
import { FaDatabase, FaJava, FaMicrosoft } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import "./Skill.css";

const Skills = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "MySQL", icon: <SiMysql /> },
    
    { name: "Git", icon: <SiGit /> },
    { name: "VS Code", icon: <FaMicrosoft /> },
    { name: "DSA", icon: <SiLeetcode /> },
    { name: "DBMS", icon: <FaDatabase /> },
    { name: "OOPs", icon: <BsGear /> },
    { name: "Operating Systems", icon: <SiLinux /> },
  ];

  return (
    <div className="outer">
      <div className="box">
        <div className="content">
          <h1>Skills</h1>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-box" key={index}>
                <span className="icon">{skill.icon}</span>
                <span className="text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
