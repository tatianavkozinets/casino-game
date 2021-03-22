import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./index.css";

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
    <footer className="footer">
      {/*<div>*/}
      {/*<div className="phantom" />*/}
      {/*<div className="style">*/}
      <Copyright />
      {/*</div>*/}
      {/*</div>*/}
    </footer>
  );
};

export default Footer;
