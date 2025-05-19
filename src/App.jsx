import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


import Navbar from "./components/Navbar";
import { Education } from "./pages/Education";

function App() {
  return (
    <>
    <Navbar/>
    <div className="app">
  
      <div className="main-content">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education/></section>
        <section id="projects"><Projects /></section>
        
        <section id="contact"><Contact /></section>
      </div>
    </div>
    </>
  );
}

export default App;