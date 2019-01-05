import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FeaturedCard from '../../Components/FeaturedCard.js';
import pam from '../../assets/pam-headshot.jpg';
import ran from '../../assets/ran.jpg';
import colleen from '../../assets/colleen.jpg';

import redColor from '../../color.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
    paddingTop: '3%',
  },
  text: {
    marginBottom: '4rem',
    color: redColor
  }
});

function Technicians(props) {
  const { classes } = props;
  const heading = props.header ?
    (<Typography className={classes.text} component="h2" variant="display2" align="center" gutterBottom>
        {props.header}
      </Typography>) : ''
  return (
    <div className={classes.root} style={{background: props.backgroundColor}}>
      {heading}
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard imageUrl={colleen} header="Colleen Schwartz-Hall" content="Master Esthetician"  url="/team/colleen"/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard imageUrl={pam} header="Pam Neighbors" content="Certified Permanent Cosmetics / Scalp Artist and Educator" url="/team/pam"/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard imageUrl={ran} header="Ran Pfliger (Lon)" content="Certified Permanent Cosmetics Artist / Scalp Artist" url="/team/ran"/>
        </Grid>
      </Grid>
    </div>
  );
}

Technicians.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Technicians);
