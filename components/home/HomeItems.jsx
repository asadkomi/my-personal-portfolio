/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Paper } from "@material-ui/core";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import About from "./About.jsx";
import Fade from "react-reveal/Fade";

export default function HomeItems() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "0 auto",
        // borderLeft: "1px solid #E0E0E0",
      }}
    >
      <About />
      <Fade bottom>
        <Projects />
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
