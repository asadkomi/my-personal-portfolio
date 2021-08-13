import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Asad Abdalla | Software Engineer</title>
      </Head>
      <AppBar>
        <Toolbar>
          <Typography>Asad Abdalla</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Asad Abdalla | 2020</Typography>
      </footer>
    </div>
  );
}
