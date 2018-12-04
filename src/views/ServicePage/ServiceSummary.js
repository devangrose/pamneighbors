import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%',
  },
  paper: {
    overflow: 'hidden',
    position: 'relative'
  }
});

function Transformations(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        <Grid item xs={12} md={12} style={{textAlign: "center"}}>
            <Typography variant="display2"  gutterBottom>
              {props.name}
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.paper}>
            <div className={classes.img} style={{width: "100%", minHeight: "50vh"}}>
              {props.img}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            {props.firstParagraph}
            <br/>
            <Link to="/contact" style={{textDecoration: "none", padding: "10px"}}><Button variant="contained"><Typography variant="h5">Schedule a consultation now!</Typography></Button></Link>
        </Grid>
      </Grid>
    </div>
  );
}

Transformations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transformations);
