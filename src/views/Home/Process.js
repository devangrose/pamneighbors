import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Carousel from 'Components/Carousel.js';

import ProcessCard from './ProcessCard.js';
import redColor from '../../color.js';


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#e0e0e0',
    textAlign: 'center',
    marginBottom: '20px',
    paddingTop: '3%',
  },
  text: {
    color: redColor,
    paddingBottom: '5%',
    paddingTop: '5%',
  }
});

function Process(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{padding: "0 5%"}}>
      {['lg','xl'].includes(props.width) ? 
      <Typography className={classes.text} component="h3" variant="h3" align="center" gutterBottom>
        The Scalp Micropigmentation Process
      </Typography>
        :
      <Typography className={classes.text} component="h4" variant="h4" align="center" gutterBottom>
        The Scalp Micropigmentation Process
      </Typography>
      }
          <div style={{paddingBottom: '25px'}}>
            <Carousel slides={props.steps.map((step, index) => <ProcessCard index={index} img={step.img} label={step.label}/>)}/>
          </div>
    </div>
  );
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(Process));
