import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/Logo.png';
import Facebook from '../assets/facebook-logo.png';
import Insta from '../assets/instagram-logo.png';
import Youtube from '../assets/youtube-logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: "0.75rem",
    overflow: "hidden",
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  socialsContainer: {
    display: 'flex',
    justifyContent: 'sTypography ace-around',
    alignItems: 'center',
    paddingRight: "2rem!imimportant"
  },
  socials: {
    filter: 'invert(1)',
    height: "2rem",
    width: "auto",
    margin: "1px",
  },
  footerItem: {
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    margin: "0",
  },
  weekday: {
    textOverflow: "elliTypography sis",
    overflow: "hidden",
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    margin: "0"
  },
  footerTitle: {
    marginBottom: "0"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: { width: "100%",
    height: "auto",
    marginLeft: "1rem"
  },
  footerLinksContainer: {
    marginTop : "1rem",
  },
  footerLinks: {
    '&:hover': {
      fontStyle: "italic"
    },
    textDecoration: "none",
    color: "black"
  },
  businessHoursContainer: {
    paddingLeft: "2rem!important"
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={6} s={6} className={classes.logoWrapper}>
              <img alt="logo" className={classes.logo} src={Logo}/>
            </Grid>
            <Grid item xs={12} md={3} style={{paddingLeft: "2rem"}}>
              <Typography  className={classes.footerTitle}><strong>OUR LOCATION</strong></Typography>
              <Typography  className={classes.footerItem}>3418 Broadway</Typography>
              <Typography  className={classes.footerItem}>Everett, WA 98201</Typography>
              <a rel="noopener noreferrer" href="https://www.google.com/maps/place/Trillium+Ink/@47.971999,-122.2038394,17z/data=!3m1!4b1!4m5!3m4!1s0x549aaa98189b4f1b:0x3525e7727143a351!8m2!3d47.971999!4d-122.2016507" className={classes.footerLinks} target="_blank"><strong>Click here for map</strong></a>
            </Grid>
            <Grid item xs={12} md={3} style={{paddingLeft: "2rem"}}>
              <Typography  className={classes.footerTitle}><strong>PHONE</strong></Typography>
              <Typography  className={classes.footerItem}>Office <a rel="noopener noreferrer" href="tel:425-258-6256">425.258.6245</a></Typography>
              <Typography  className={classes.footerItem}>Mobile <a rel="noopener noreferrer" href="tel:425-238-1222">425.238.1222</a></Typography>
              <Typography  className={classes.footerTitle}><strong>EMAIL</strong></Typography>
              <Typography  className={classes.footerItem}><a href="mailto:pam@trilliumink.net" style={{color: "blue", textDecoration: "none"}}>pam@trilliumink.net</a></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={6} className={classes.businessHoursContainer}>
              <Typography  className={classes.footerTitle}><strong>BUSINESS HOURS</strong></Typography>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <Typography  className={classes.weekday}>Tues</Typography>
                  <Typography  className={classes.weekday}>Wed</Typography>
                  <Typography  className={classes.weekday}>Thur</Typography>
                  <Typography  className={classes.weekday}>Fri</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                </Grid>
              </Grid>
            </Grid> 
            <Grid item xs={6} className={classes.socialsContainer}>
              <a href="https://www.facebook.com/trilliumink/"><img alt="facebook" className={classes.socials} src={Facebook} /></a>
              <a href="https://www.instagram.com/scalpmicropigmentationseattle/?hl=en"><img alt="instagram" className={classes.socials} src={Insta} /></a>
              <a href="https://www.youtube.com/channel/UCQpWLBQbz3rbY1aQQbW_vMg"><img alt="youtube" className={classes.socials} src={Youtube} /></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
} 
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
