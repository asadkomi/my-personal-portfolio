/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper, Switch } from "@material-ui/core";
import HomeItems from "./HomeItems.jsx";
import ImageCart from "../imageCard/ImageCard.jsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ClockLoader from "react-spinners/ClockLoader";
import Tooltip from "@material-ui/core/Tooltip";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Store } from "../../utils/store.jsx";
import Cookies from "js-cookie";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    width: "100%",
    bottom: 20,
    left: 10,
    zIndex: 999,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Main() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(Store);

  const { darkMode } = state;

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#ef6c00",
      },
      secondary: { main: "#ef6c00" },
    },
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const darkModeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Asad Abdalla | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Software engineer, Iowa State University, Iowa, ReactJs developer, NextJs developer, "
        />
        <meta
          property="og:title"
          content="Asad Abdalla | Software Engineer"
          key="ogtitle"
        />

        <meta
          property="og:description"
          content="Software engineer, Iowa State University, Iowa, ReactJs developer, NextJs developer, "
          key="ogdesc"
        />
      </Head>
      <CssBaseline />
      {loading ? (
        <div
          style={{
            position: "relative",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "30%",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              width: "100%",
            }}
          >
            <ClockLoader color={"#ef6c00"} loading={loading} size={150} />
          </div>
        </div>
      ) : (
        <Paper>
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <ImageCart />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={8}>
                <Grid container>
                  <Grid item xs>
                    <HomeItems />
                  </Grid>
                </Grid>
              </Grid>
              <div className={classes.root}>
                <Button
                  style={{
                    border: "none",
                    outline: "none",
                    textDecoration: "none",
                  }}
                >
                  <Tooltip title="Swich Mode" aria-label="swich-mode">
                    <Brightness4Icon
                      color="primary"
                      fontSize="large"
                      checked={darkMode}
                      onClick={darkModeHandler}
                    ></Brightness4Icon>
                  </Tooltip>
                </Button>
              </div>
            </Grid>
          </Container>
        </Paper>
      )}
    </ThemeProvider>
  );
}
