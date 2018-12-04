import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import FeaturedCard from '../../Components/FeaturedCard.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  },
  text: {
    marginBottom: '4rem'
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
          <FeaturedCard imageUrl="http://pamneighbors.com/wp-content/uploads/2016/10/9CBA01D2F6394C65BFD7BCBB9E1703B2.jpg" header="Colleen Schwartz-Hall" content="Master Esthetician"  url="/team/colleen"/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard imageUrl="http://pamneighbors.com/wp-content/uploads/2016/07/pam-working.jpg" header="Pam Neighbors" content="Certified Permanent Cosmetics / Scalp Artist and Educator" url="/team/pam"/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard imageUrl="http://pamneighbors.com/wp-content/uploads/2016/07/stylist.jpg" header="Ran Pfliger (Lon)" content="Certified Permanent Cosmetics Artist / Scalp Artist" url="/team/ran"/>
        </Grid>
      </Grid>
    </div>
  );
}

Technicians.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Technicians);
