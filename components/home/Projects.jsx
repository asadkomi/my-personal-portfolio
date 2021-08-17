import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Divider,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
  Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 1),
    width: "350px",
    outline: "none",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [one, setOne] = useState("");
  const [tow, setTow] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");
  const [ten, setTen] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleModalOpen = (id) => {
    if (id === 1) {
      setTitle("eCommerce Application");
      setOne("React / Next");
      setTow("Redux");
      setThree("PayPal payment geteways");
      setFour("MongoDB");
      setFive("Next Connect");
      setSix("Material UI");
      setSeven("Bootstrap");
      setEight("SEO");
      setNine("Github - Vercel");
      setTen("Others");
      setImg("/images/eCom.png");
      setLink("https://shoes-store-ten.vercel.app/");
    } else {
      setTitle("Booking Application");
      setOne("NextJs");
      setTow("Redux");
      setThree("Stripe payment geteways");
      setFour("MongoDB");
      setFive("Next Connect");
      setSix("Material UI");
      setSeven("Bootstrap");
      setEight("SEO");
      setNine("Github - Vercel");
      setTen("Others");
      setImg("/images/booking.png");
      setLink("https://hotel-app-komi.vercel.app/");
    }
    handleOpen();
  };

  const data = {
    title: "Technologies used",
  };
  return (
    <div>
      <Typography color="primary" variant="h6" className="pt-5 pb-1">
        Projects
      </Typography>
      <Divider style={{ background: "#ef6c00" }} />
      <Grid container spacing={3} className=" pb-3 pt-5">
        <Grid item md={6} xs={12}>
          <Paper>
            <CardActionArea
              style={{
                border: "none",
                outline: "none",
                textDecoration: "none",
              }}
              onClick={() => handleModalOpen(1)}
            >
              <CardMedia
                height="250"
                component="img"
                image="/images/eCom.png"
                title="eCommerce application"
              ></CardMedia>
              <CardContent>
                <Typography>eCommerce Application</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions align="center">
              {/* <IconButton
                color="primary"
                aria-label="github"
                style={{
                  border: "none",
                  outline: "none",
                  textDecoration: "none",
                }}
              >
                <GitHubIcon />
              </IconButton> */}
              <IconButton
                aria-label="launch"
                color="primary"
                style={{
                  border: "none",
                  outline: "none",
                  textDecoration: "none",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://shoes-store-ten.vercel.app/"
                  passHref
                >
                  <LaunchIcon />
                </a>
              </IconButton>
            </CardActions>
          </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper>
            <CardActionArea
              style={{
                border: "none",
                outline: "none",
                textDecoration: "none",
              }}
              onClick={() => handleModalOpen(2)}
            >
              <CardMedia
                height="250"
                component="img"
                image="/images/booking.png"
                title="Booking application"
              ></CardMedia>
              <CardContent>
                <Typography>Booking Application</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions align="center">
              <IconButton
                aria-label="github"
                color="primary"
                style={{
                  border: "none",
                  outline: "none",
                  textDecoration: "none",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asadkomi/hotel-app"
                  passHref
                >
                  <GitHubIcon />
                </a>
              </IconButton>
              <IconButton
                aria-label="launch"
                color="primary"
                style={{
                  border: "none",
                  outline: "none",
                  textDecoration: "none",
                }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://hotel-app-komi.vercel.app/"
                  passHref
                >
                  <LaunchIcon />
                </a>
              </IconButton>
            </CardActions>
          </Paper>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CardActionArea
              style={{
                border: "none",
                outline: "none",
                textDecoration: "none",
              }}
            >
              <CardMedia
                height="250"
                component="img"
                image={img}
                title="Asad Abdalla"
              ></CardMedia>
              <CardContent>
                <Typography className="pb-2">
                  <b>{title}</b>{" "}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item md={6} xs={6}>
                    <ul style={{ padding: "0px" }}>
                      <li>{one}</li>
                      <li>{tow}</li>
                      <li>{three}</li>
                      <li>{four}</li>
                      <li>{five}</li>
                    </ul>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <ul style={{ padding: "0px" }}>
                      <li>{six}</li>
                      <li>{seven}</li>
                      <li>{eight}</li>
                      <li>{nine}</li>
                    </ul>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
            <a target="_blank" rel="noreferrer" href={link} passHref>
              <LaunchIcon color="primary" />
            </a>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
