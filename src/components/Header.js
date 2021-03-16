import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import LoginPopUp from "./LoginPopUp";
import "./logo.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  }
  // logo: {
  //   borderRadius: "50%",
  //   width: "25%",
  //   height: "25%",
  //   opacity: "0.8"
  // }
}));

export default function Header({ user, onUserChange, balance }) {
  const classes = useStyles();
  const img = (
    <img
      src="https://media.istockphoto.com/vectors/casino-logo-on-a-white-background-vector-id540828410"
      alt="Logo"
      className="logo"
    />
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogIn = user => {
    setOpen(false);
    onUserChange(user);
  };

  const handleLogOut = () => {
    onUserChange(null);
  };

  const loginLogOut = () => {
    if (user === null) {
      return (
        <>
          <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
            Login
          </Button>
          <LoginPopUp open={open} onLogin={handleLogIn} onClose={handleClose} />
        </>
      );
    } else {
      return (
        <>
          <Box mr={1}>
            <Typography variant="h6">{`$ ${balance}`}</Typography>
          </Box>

          <Tooltip title="Log Out">
            <Box mr={2} style={{ cursor: "pointer" }}>
              <Avatar className={classes.purple} onClick={handleLogOut}>
                {user[0]}
              </Avatar>
            </Box>
          </Tooltip>
          <Button color="inherit" variant="outlined" onClick={handleLogOut}>
            Log Out
          </Button>
        </>
      );
    }
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
          backgroundSize: "cover"
        }}
      >
        <Container>
          <Toolbar>
            {img}
            <Typography mr={9} variant="h1" className={classes.title}>
              Game
            </Typography>
            {loginLogOut()}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
