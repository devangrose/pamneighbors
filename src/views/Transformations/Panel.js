import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'Components/Carousel.js';
import CardLink from './Card.js';
import redColor from 'color.js';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
  },
  cardTitle: {
  },
});


function Panel(props) {
  // Create an expansion panel with a question header and answer content
  const { classes } = props;

  return (
    <ExpansionPanel style={{ margin: "10px"}}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{ color: redColor }}/>}>
        <Typography className={classes.cardTitle} variant="h5" component="h2">
          {props.title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ height: '100%' }}>
        <Carousel slides={props.images.map(image => 
          <CardLink image={image.img} name={props.title} link={props.link}/>
        )}/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel)
