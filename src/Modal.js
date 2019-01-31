import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ExampleLiveDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveDemo: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="primary"
          onClick={() => this.handleClickOpen("liveDemo")}
        >
          Launch Demo Modal
        </Button>
      </div>
    );
  }
}

export default withStyles(modalStyle)(Modal);
