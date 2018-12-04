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
    padding: theme.spacing.unit * 10,
  },
  text: {
    marginBottom: '4rem'
  }
});

function GetInTouchRow(props) {
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
          <FeaturedCard hideLearn={true} header="Address" content={<p>3418 Broadway<br/> Everett, Wa 98201</p>}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard hideLearn={true} header="Phone" content={<p>Office (425) 258-6245<br/> Mobile (425) 238-1222</p>}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <FeaturedCard hideLearn={true} header="Email" content="inkbypam@gmail.com"/>
        </Grid>
      </Grid>
    </div>
  );
}

GetInTouchRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetInTouchRow);
