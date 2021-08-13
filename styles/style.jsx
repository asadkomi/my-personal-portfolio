import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    // padding: "50px",
  },
  secondGrid: {
    // height: "100vh",
    // overflow: "hiden",
    // marginTop: "80px",
  },
  thirdGrid: {
    maxHeight: "100vh",
    overflow: "auto",
  },

  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: "ease-in-out 0.4s",
    borderRadius: "8px",
    position: "relative",
    "&:hover": {
      boxShadow: ["none", null, "0 4px 10px rgba(39, 83, 123, 0.12)"],
      ".info__name": {
        color: "primary",
      },
      ".info__designation": {
        color: "primary",
      },
      ".social__share": {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1],
        },
      },
    },
  },
});

export default useStyles;
