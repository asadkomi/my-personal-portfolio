import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e040fb",
    },
    secondary: { main: "#ef6c00" },
  },
});

export default function Theme(props) {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
