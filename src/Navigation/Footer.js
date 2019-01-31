import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/Logo.png';
import Facebook from '../assets/facebook-logo.png';
import Insta from '../assets/instagram-logo.png';
import Youtube from '../assets/youtube-logo.png';

import redColor from '../color.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: "0.75rem",
    overflow: "hidden",
    paddingBottom: "10px",
    paddingTop: "10px",
    textAlign: 'center',
    margin: '0 auto'
  },
  socialsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: "2rem!imimportant"
  },
  socials: {
    filter: 'invert(1)',
    height: "2rem",
    width: "auto",
    margin: "1px",
    color: redColor,
    '&:hover': {
      fontStyle: "italic",
    },
    '&:visited':{
      color: redColor
    } 
  },
  footerItem: {
    display: 'block',
    color: 'blue',
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    textAlign: 'left',
    '&:visited':{
      color: "blue",
    },
    '&:hover':{
      textDecoration: 'underline',
    }
  },
  weekday: {
    textOverflow: "ellipsis",
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
    marginLeft: "2rem",
    margin: 'auto',
  },
  footerLinksContainer: {
    marginTop : "1rem",
  },
  footerLinks: {
    '&:hover': {
      fontStyle: "italic"
    },
    '&:visited':{
      color: "blue",
    },
    textDecoration: "none",
  },
  businessHoursContainer: {
    paddingLeft: "2rem!important",
    margin: 'auto',
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={5} className={classes.logoWrapper} style={{textAlign: 'center', margin: '0 3%'}}>
              <img alt="logo" className={classes.logo} style={{margin: 'auto'}} src={Logo}/>
            </Grid>
            <Grid item xs={12} md={3} style={{paddingLeft: "2rem", marginRight: '2%'}}>
              <div style={{paddingBottom: '1%'}}>
                <Typography  className={classes.footerTitle} style={{textAlign: 'left'}}><strong>OUR LOCATIONS</strong></Typography>
                <a  href="https://www.google.com/maps/place/Trillium+Ink/@47.971999,-122.2038394,17z/data=!3m1!4b1!4m5!3m4!1s0x549aaa98189b4f1b:0x3525e7727143a351!8m2!3d47.971999!4d-122.2016507" style={{color: 'blue'}}target="_blank">
                  <Typography  className={classes.footerItem}>3418 Broadway</Typography>
                  <Typography  className={classes.footerItem} paragraph >Everett, WA 98201</Typography>
                </a>
              </div>
              <div>
                <a  href="https://www.google.com/maps/place/7100+SW+Hampton+St+%23103,+Tigard,+OR+97223/@45.4273284,-122.7529504,17z/data=!3m1!4b1!4m5!3m4!1s0x54950cd1a9a9d4a9:0xda1a131e1c08f524!8m2!3d45.4273284!4d-122.7507617" style={{color: 'blue'}}target="_blank">
                  <Typography  className={classes.footerItem}>7100 SW Hampton St #103</Typography>
                  <Typography  className={classes.footerItem}>Tigard, OR 97223</Typography>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} md={3} style={{paddingLeft: "2rem"}}>
              <Typography  className={classes.footerTitle} style={{textAlign: 'left'}}><strong>PHONE</strong></Typography>
              <Typography  className={classes.footerItem} style={{color: 'blue'}}><a rel="noopener noreferrer" style={{textDecoration: "none",color: 'inherit'}} href="tel:425-258-6256"><span style={{color: 'black'}}>WA</span> 425.258.6245</a></Typography>
              <Typography  className={classes.footerItem} style={{color: 'blue'}}><a rel="noopener noreferrer" style={{textDecoration: "none",color: 'inherit'}} href="tel:503-395-8734"><span style={{color: 'black'}}>OR</span> 503.395.8734</a></Typography>
              <Typography  className={classes.footerTitle} style={{textAlign: 'left'}}><strong>EMAIL</strong></Typography>
              <Typography  className={classes.footerItem} style={{color: 'blue'}}><a href="mailto:pam@trilliumink.net" style={{textDecoration: "none",color: 'inherit'}}>pam@trilliumink.net</a></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6} className={classes.businessHoursContainer}>
              <Typography  className={classes.footerTitle} ><strong>BUSINESS HOURS</strong></Typography>
              <Typography  className={classes.footerTitle} ><span style={{paddingRight: '6%'}}>Tue-Fri</span>9:30AM-5:30PM</Typography>
              <Typography  >
                We give special consideration regarding appointments outside of these hours for our clients who are traveling.
              </Typography>
            </Grid> 
            <Grid item xs={12} md={6} className={classes.socialsContainer}>
                <a href="https://www.facebook.com/pamneighborsSMPSeattle/"><img alt="facebook" className={classes.socials} src={Facebook} /></a>
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
