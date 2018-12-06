import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  },
  text: {
    marginBottom: '4rem'
  },
  img: {
    width: "100%",
    height: "auto",
  },
  imgFrame: {
    paddingBottom: "50px"
  }
});

function Testimonial(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{background: props.backgroundColor}}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <p><em>"I was sad to see the hair loss at my hairline in my fifties. Pam has created a natural and beautiful hairline for me through her scalp pigmentation process."</em></p>
          <p className={classes.p}><em>- Suzanne E.</em></p>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imgFrame}>
          <Typography variant="caption" align="center" gutterBottom style={{fontSize: "2em"}}>
            Before
          </Typography> 
          <img alt="before" className={classes.img} src="http://pamneighbors.com/wp-content/uploads/2016/07/W_SMP_before.png" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imgFrame}>
          <Typography variant="caption" align="center" gutterBottom style={{fontSize: "2em"}}>
            After
          </Typography>
          <img alt="after" className={classes.img} src="http://pamneighbors.com/wp-content/uploads/2016/07/FullSizeRender-6-300x300.jpg" /> 
        </Grid>
      </Grid>
    </div>
  );
}

Testimonial.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Testimonial);
