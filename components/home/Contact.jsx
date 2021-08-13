import React from "react";
import emailjs from "emailjs-com";
import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Divider,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

export default function Contact() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();

  function sendEmail(data, e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_q1whqjf",
        e.target,
        "user_S4PfTk2QfooxMUJZBDu23"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setValue("name", "");
    setValue("email", "");
    setValue("message", "");
  }
  return (
    <>
      <Typography color="primary" variant="h6" className=" pb-1 pt-5">
        Contact
      </Typography>
      <Divider style={{ background: "#ef6c00" }} />
      <div className="p-sm-5">
        <form onSubmit={handleSubmit(sendEmail)}>
          <List>
            <ListItem>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Name"
                    inputProps={{ type: "name" }}
                    {...field}
                    error={Boolean(errors.name)}
                    helperText={
                      errors.name
                        ? errors.name.type === "minLength"
                          ? "Name should not be less than 2 characters"
                          : "Name is required"
                        : ""
                    }
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    inputProps={{ type: "email" }}
                    {...field}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "Email is not valid"
                          : "Email is required"
                        : ""
                    }
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 10,
                }}
                render={({ field }) => (
                  <TextField
                    rows={4}
                    multiline
                    variant="outlined"
                    fullWidth
                    id="message"
                    label="Message"
                    inputProps={{ type: "text" }}
                    {...field}
                    error={Boolean(errors.message)}
                    helperText={
                      errors.message
                        ? errors.message.type === "minLength"
                          ? "Message should not be less than 2 characters"
                          : "Message is required"
                        : ""
                    }
                  ></TextField>
                )}
              ></Controller>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
                style={{
                  border: "none",
                  outline: "none",
                  textDecoration: "none",
                }}
              >
                Send
              </Button>
            </ListItem>
          </List>
        </form>
      </div>
    </>
  );
}
