/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import UpcommingProjects from "./upcomingProjects.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Fade from "react-reveal/Fade";

export default function HomeItems() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <About />
      <Fade bottom>
        <Projects />
      </Fade>
      <Fade bottom>
        <UpcommingProjects />
      </Fade>
      <Fade bottom>
        <Skills />
      </Fade>
      <Fade bottom>
        <Contact />
      </Fade>
    </div>
  );
}
