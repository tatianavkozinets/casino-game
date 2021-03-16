import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./footer.css";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://casino-game.netlify.app">
        Casino Game
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <Copyright />
      </div>
    </div>
  );
};

const style = {
  backgroundImage: `url(https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
  backgroundSize: "cover",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantom = {
  display: "block",
  height: "60px",
  width: "100%"
};

export default Footer;
