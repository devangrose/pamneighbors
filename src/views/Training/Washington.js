import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HeroImage from 'Components/HeroImage.js';

import hero from '../../assets/banner-smp.jpg';
import redColor from 'color.js';

const styles = {
  root: {
    maxWidth: '80%',
    margin: 'auto',
    marginTop: '50px',
  },
  header: {
    color: redColor,
  },
}

class Washington extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <HeroImage source={hero} overlay="Washington Residents"/>
        <div className={classes.root}>
          <br/>
          <br/>
          <Typography variant="h4" className={classes.header} paragraph >
            If you are resident of Washington State, you will need to choose the course(s) you wish to take when you call us and we will let you know when those courses are being offered in WA.
          </Typography>
          <ul>
            <li><Typography variant="h5">
                Online Basic Fundamentals of SMP
              </Typography></li>
            <li><Typography variant="h5">
                Clinical Hands-On Work Shop (3 days)
              </Typography></li>
            <li><Typography variant="h5">
                Female Treatment Clinical Hands-On (1 day)
              </Typography></li>
          </ul>
        </div>
      </div>
    )
  }
}

Washington.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Washington);
