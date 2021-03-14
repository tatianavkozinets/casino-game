import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GridTable from "./GridTable";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import DigitRoll from "digit-roll-react";
import "./digitRoll.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const Content = ({ onChangeData, tableData, user }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState("000");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNum([0, 0, 0]);
  };

  const handleDebug = () => {
    changeNumbers("777");
  };

  const renderNum = () => {
    let str = "";
    for (let i = 0; i < 3; i++) {
      str += Math.floor(1 + Math.random() * Math.floor(9));
    }
    changeNumbers(str);
    return Number(str);
  };

  // const getRandomInt = max => {
  //   return Math.floor(1 + Math.random() * Math.floor(max));
  // };

  const changeNumbers = n => {
    setNum(n);
    let tempBalance = -1;
    let countSame = 0;

    const checkResult = (i, j) => {
      if (i === j) {
        countSame++;
      }
    };

    checkResult(n[0], n[1]);
    checkResult(n[0], n[2]);
    checkResult(n[1], n[2]);

    if (countSame === 1) {
      tempBalance += 0.5;
    }

    if (countSame === 3) {
      tempBalance += 5;
      if (n[0] === 7) {
        tempBalance += 5;
      }
    }

    onChangeData(tempBalance, n);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <div className={classes.root}>
        <Button
          variant="outlined"
          color="primary"
          href="#contained-buttons"
          size="large"
          onClick={handleClickOpen}
        >
          Play Game
        </Button>
      </div>
      {user && <GridTable tableData={tableData} />}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="game-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="game-dialog-title">{"Play"}</DialogTitle>
        <DialogContent>
          <div className="mainContainer">
            <DigitRoll
              num={num}
              length={3}
              divider=""
              delay="1"
              height="10"
              width="5"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={renderNum} color="primary">
            Random numbers
          </Button>
          <Button onClick={handleDebug} color="primary">
            Debug
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Content;
