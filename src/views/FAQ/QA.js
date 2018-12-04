 import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paper } from '@material-ui/core';

import redColor from '../../color.js';

const styles = theme => ({
  root: {
    width: '100%',
  },
  cardTitle: {
    marginBottom: '10px',
  },
});


function QA(props) {
  // Create an expansion panel with a question header and answer content
  const { classes } = props;

  return (
    <ExpansionPanel style={{ margin: "10px"}}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{ color: redColor }}/>}>
        <Typography className={classes.cardTitle} variant="h5" component="h2">
          {props.question}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ height: '100%' }}>
        <Typography align="left">{props.answer}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}


QA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QA)
