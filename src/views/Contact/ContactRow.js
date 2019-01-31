import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ContactCard from './ContactCard.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '10%',
  },
  text: {
    marginBottom: '4rem'
  },
  a: {
    color: 'inherit',
    '&:hover': {
      color: 'inherit'
    }
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
            <ContactCard hideLearn={true} icon="home" header="Addresses" content={
              <Grid container spacing={12}>
                <Grid item md={6} xs={12} sm={12}>
                  <a rel="noopener noreferrer" className={classes.a} href="https://www.google.com/maps/place/Trillium+Ink/@47.971999,-122.2038394,17z/data=!3m1!4b1!4m5!3m4!1s0x549aaa98189b4f1b:0x3525e7727143a351!8m2!3d47.971999!4d-122.2016507:" target="_blank">
                    <Typography variant="body1">3418 Broadway<br/> Everett, WA 98201</Typography>
                  </a>
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <a rel="noopener noreferrer" className={classes.a} href="https://www.google.com/maps/place/7100+SW+Hampton+St+%23103,+Tigard,+OR+97223/@45.4273284,-122.7529504,17z/data=!3m1!4b1!4m5!3m4!1s0x54950cd1a9a9d4a9:0xda1a131e1c08f524!8m2!3d45.4273284!4d-122.7507617" target="_blank">
                    <Typography variant="body1">7100 SW Hampton St.<br/> Tigard, OR 97223</Typography>
                  </a>
                </Grid>
              </Grid>
            }/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ContactCard hideLearn={true} icon="phone" header="Phone Numbers" content={
            <div>
              <a rel="noopener noreferrer" className={classes.a} href="tel:425-258-6245">
                <Typography variant="body1">WA 425.258.6245</Typography> 
              </a>
              <a rel="noopener noreferrer" className={classes.a} href="tel:503-395-8734">
                <Typography variant="body1">OR 503.395.8734</Typography>
              </a>
            </div>
          }/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <a className={classes.a} href="mailto:pam@trilliumink.net">
            <ContactCard hideLearn={true} icon="email" header="Email" content={<Typography variant="body1">pam@trilliumink.net<br/><br/></Typography>}/>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

GetInTouchRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetInTouchRow);

