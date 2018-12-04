import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";




const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    overflow: 'hidden',
    position: "relative",
    margin: "auto",
    width: "70%",
    height: "auto",
  },
  vid: {
    width: "100%",
    height: "100%",
  }
});



function Video(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Player
        playsInline
        poster="../../assets/3d-eyebrows2.jpeg"
        src={video}
        className={classes.vid}
      />
    </div>
  );
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Video);
