import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

const LoginPopUp = ({ open, onLogin, onClose }) => {
  const [user, setUser] = useState("");
  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  const handleClose = () => {
    setUser("");
    setError(false);
    setErrorText("");
    onClose();
  };

  const handleLogin = () => {
    if (user !== "") {
      setUser("");
      onLogin(user);
    } else {
      setError(true);
      setErrorText("Empty field");
    }
  };

  const handleChange = e => {
    setUser(e.target.value);
    setError(false);
    setErrorText("");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Log In</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          error={error}
          id="user"
          label="User Name"
          variant="outlined"
          value={user}
          onChange={handleChange}
          helperText={errorText}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLogin} color="primary">
          Log In
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LoginPopUp.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default LoginPopUp;
