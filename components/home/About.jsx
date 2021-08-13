import React from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import NextLink from "next/link";

export default function About() {
  return (
    <div>
      <Slide top>
        <Grid container spacing={1}>
          <Grid item md={6} xs={6}>
            <Typography color="primary" variant="h6" className="pt-sm-5 ">
              <span
              // style={{
              //   backgroundColor: "#fff",
              //   padding: "3px",
              //   borderRadius: "2px",
              // }}
              >
                About
              </span>
            </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            <div align="right" className="pt-sm-5 pb-1">
              <a
                style={{
                  textDecoration: "none",
                  outline: "none",
                  border: "none",
                }}
                href="/documents/Resume.pdf"
                target="_blank"
                passHref
              >
                <Button
                  variant="contained"
                  style={{ outline: "none", textTransform: "none" }}
                  color="primary"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Slide>

      <Divider style={{ background: "#ef6c00" }} />

      <Fade bottom>
        <Typography className="pt-3 pb-5">
          Hardworking and intuitive learner. Currently enrolled to obtain a
          bachelor’s degree in Software engineering with an anticipated
          graduation date of May 2023. An effective collaborator, team player,
          and problem-solver who loves challenges. Developing web and mobile
          applications demonstrating a strong understanding of object-oriented
          design, data structures, algorithms, and programming.
        </Typography>
      </Fade>
      <Fade bottom>
        <Typography color="primary" variant="h6" className=" pb-1">
          Education
        </Typography>
        <Divider style={{ background: "#ef6c00" }} />
        <div className="pb-3"> </div>
        <Typography
          style={{ borderLeft: "1px solid #ef6c00", paddingLeft: "20px" }}
        >
          <b> Kirkwood Community College</b> |{" "}
          <span style={{ fontSize: "14px" }}>Cedar Rapids, IA</span>
          <br />
          <Typography style={{ fontSize: "14px" }}>
            Applied Science
            <br /> Graduation - May 2020
          </Typography>
        </Typography>
        <div className="pb-3"> </div>
        <Typography
          style={{ borderLeft: "1px solid #ef6c00", paddingLeft: "20px" }}
        >
          <b> Iowa State University</b> |{" "}
          <span style={{ fontSize: "14px" }}>Ames, IA</span>
          <br />
          <Typography style={{ fontSize: "14px" }}>
            Bachelor of Science in Software Engineering
            <br /> Expected Graduation - May 2023
          </Typography>
        </Typography>
      </Fade>
    </div>
  );
}
