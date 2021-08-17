import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NextLink from "next/link";
import { CardActionArea, CardMedia, Divider } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import Slide from "react-reveal/Slide";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "4.5rem",
    minWidth: "275",
    marginTop: "30px",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ImageCart() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={1}>
      <CardActionArea
        style={{
          border: "none",
          outline: "none",
          textDecoration: "none",
        }}
      >
        <CardMedia
          height="400"
          component="img"
          image="/images/asad.jpg"
          title="Asad Abdalla"
        ></CardMedia>
        <CardContent>
          <Typography className="pb-3">
            <b>Asad Abdalla</b> | Software Engineer
          </Typography>
          <Divider />
          <Typography className="pb-2 pt-3" style={{ fontSize: "14px" }}>
            <MailIcon
              color="primary"
              style={{ fontSize: "16px", marginRight: "10px" }}
            />{" "}
            asadkomi@iastate.edu
          </Typography>
          <Typography className="pb-2" style={{ fontSize: "14px" }}>
            <PhoneIcon
              color="primary"
              style={{ fontSize: "16px", marginRight: "10px" }}
            />
            +1 (402) 219 1587
          </Typography>
          <Typography className="pb-2" style={{ fontSize: "14px" }}>
            <RoomIcon
              color="primary"
              style={{ fontSize: "16px", marginRight: "10px" }}
            />
            124 Hyland Ave, Ames IA,
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton
          aria-label="add to favorites"
          style={{
            border: "none",
            outline: "none",
            textDecoration: "none",
          }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/asadkomi/"
            passHref
          >
            <LinkedInIcon color="primary" />
          </a>
        </IconButton>
        <IconButton
          aria-label="share"
          style={{
            border: "none",
            outline: "none",
            textDecoration: "none",
          }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/asadkomi"
            passHref
          >
            <GitHubIcon color="primary" />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
