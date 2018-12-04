import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

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
    <div className={classes.root} style={{padding: "0 30px"}}>
      <Typography className={classes.text} component="h2" variant="display1" gutterBottom>
        The Scalp Micropigmentation Process
      </Typography>
      <Grid container spacing={40}>
        {props.steps.map((step, index) => {
          return (
            <Grid item xs={12} sm={12} md={Math.floor(12 / (props.steps.length))}>
              <Paper style={{padding: "10px"}}>
                <Icon style={{ fontSize: 30 }}>content_cut</Icon>
                <p>Step {index + 1}:</p>
                <p>{step}</p>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

Process.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Process);
