/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiMaterialUi } from "react-icons/si";
import { Divider, Grid, Typography } from "@material-ui/core";

export default function Skills() {
  return (
    <div>
      <Typography color="primary" variant="h6" className=" pb-1 pt-5">
        Skills
      </Typography>
      <Divider style={{ background: "#ef6c00" }} />
      <Grid container spacing={1} className=" pb-5 pt-5">
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <FaJava style={{ fontSize: "80px" }} />
            <Typography>
              <b>Java</b>
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Build industry-standard web app in java and spring framework with
              production deployment using docker, jib and AWS
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <FaNodeJs style={{ fontSize: "80px" }} />
            <Typography>
              <b>NodeJs</b>
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Build extensive backend API with Express and protected endpoints
              with JWT
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <FaReact style={{ fontSize: "80px" }} />
            <Typography>
              <b>React/Next</b>
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Build full-stack apps in React, Nextjs and Redux for state
              management with server-side rendering
            </Typography>
          </Typography>
        </Grid>

        <Grid item md={3} xs={6}>
          <Typography align="center">
            <SiMaterialUi style={{ fontSize: "80px" }} />
            <Typography>
              <b>Styling</b>
            </Typography>
            <Typography style={{ fontSize: "12px" }}>
              Build highly interactive and mobile-first UI websites and apps
              with responsive design using Material UI, Bootstrap, and CSS
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
