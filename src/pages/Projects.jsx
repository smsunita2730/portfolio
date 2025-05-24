import React from "react";
import "./Project.css";
const Projects = () => {
  return (
    <div className="page projects">
      <h1>Projects</h1>
      <ul>
        <li><strong>Fitness Trainer Scheduler:</strong>
          <p>
            A real-time Fitness Trainer Scheduler built with a modern, responsive UI.
            It allows users to seamlessly book appointments using an integrated calendar
            system. The project focuses on clean design, smooth user experience, and real-world usability.
          </p>
          <a href="https://schedule-appointment.netlify.app/" target="_blank">Live</a></li>
        <li><strong>Pokemon Explorer  :</strong>

          <p>
            This is a Pokémon-themed web app made using React and PokéAPI.
            Users can search and view different Pokémon with their details.
            The app is simple, responsive, and fun to use.
          </p>


          <a href="https://sanupokemon.netlify.app/" target="_blank">Live</a></li>
        <li><strong>Image Search App:</strong>
        <p>
        Image Search App powered by the Unsplash API with infinite scrolling, responsive design, and dynamic content loading, showcasing API integration and frontend development..</p>
        <a href="https://imagesearchhh.netlify.app/" target="_blank">Live</a></li>
        <li><strong>Temperature Converter :</strong>
          <p>
            A simple and interactive Temperature Converter built using React.
            Users can convert temperatures between Celsius, Fahrenheit,
            and Kelvin with ease. The app has a clean, user-friendly interface and is fully responsive.
          
          
          </p> <a href="https://temperatureconverterrrrrr.netlify.app/" target="_blank">Live</a></li>
          <li>
  <strong>CGPA Booster Calculator :</strong>
  <p>
    Created a tool to calculate updated CGPA using previous scores and new semester grades.  
    Implemented dynamic input fields with React hooks for real-time calculation and user experience.  
    Used React hooks (useState) to manage state and perform real-time CGPA calculation.
  </p>
  
  <a href="https://cgpasboosterr.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
</li>

          <li><strong>CRUD Application :</strong>
          <p>
          A simple React-based CRUD app that allows users to add, edit, and delete project entries. It features a responsive design and interactive UI for managing project titles and descriptions. Ideal for managing and customizing project lists efficiently.s
          </p> <a href="https://sanureactproject.netlify.app/" target="_blank">Live</a></li>
      
      
      </ul>
      
    </div>
  );
};

export default Projects;