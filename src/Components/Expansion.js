import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import redColor from '../color.js';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function Expansion(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: redColor}}/>}>
          <Typography variant="h5" className={classes.heading}>{props.heading}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            {props.details}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Expansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Expansion);
