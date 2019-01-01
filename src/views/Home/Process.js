import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Carousel from 'Components/Carousel.js';

import ProcessCard from './ProcessCard.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#e0e0e0',
    textAlign: 'center',
    marginBottom: '20px',
  },
  text: {
    padding: theme.spacing.unit * 3
  }
});

function Process(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{padding: "0 3%"}}>
      <Typography className={classes.text} component="h2" variant="display1" align="center" gutterBottom>
        The Scalp Micropigmentation Process
      </Typography>
          <div style={{paddingBottom: '25px'}}>
            <Carousel slides={props.steps.map((step, index) => <ProcessCard index={index} img={step.img} label={step.label}/>)}/>
          </div>
    </div>
  );
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Process);
