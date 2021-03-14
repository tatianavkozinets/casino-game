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
  },
  logo: {
    borderRadius: "50%",
    border: "2px solid #ddd",
    width: "30%",
    height: "30%",
    opacity: "0.5"
  }
}));

export default function Header({ user, onUserChange, balance }) {
  const classes = useStyles();
  const img = (
    <img
      src="https://e7.pngegg.com/pngimages/934/207/png-clipart-online-casino-gambling-casino-game-sportbook-game-logo.png"
      alt="Logo"
      className={classes.logo}
    />
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
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
            <Box mr={4} style={{ cursor: "pointer" }}>
              <Avatar className={classes.orange} onClick={handleLogOut}>
                {user[0]}
              </Avatar>
            </Box>
          </Tooltip>
        </>
      );
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
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
