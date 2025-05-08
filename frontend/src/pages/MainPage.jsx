import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Reviews from "./Reviews";

const MainPage = () => {
  return (
    <div className="flex flex-col">
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="reviews" className="section">
        <Reviews />
      </section>
      <section id="skills" className="section">
        <Skills />
      </section>
      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
};

export default MainPage;
