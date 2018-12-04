import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/Logo.png';
import Facebook from '../assets/facebook-logo.png';
import Insta from '../assets/instagram-logo.png';
import Youtube from '../assets/youtube-logo.png';
import Twitter from '../assets/twitter-logo.png';

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
      <Grid container sTypography acing={24}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container sTypography acing={24}>
            <Grid item xs={5} s={6} className={classes.logoWrapper}>
              <img className={classes.logo} src={Logo}/>
            </Grid>
            <Grid item xs={3} s={3}>
              <Typography  className={classes.footerTitle}><strong>OUR LOCATION</strong></Typography>
              <Typography  className={classes.footerItem}>3418 Broadway</Typography>
              <Typography  className={classes.footerItem}>Everett, WA 98201</Typography>
              <a href="#" className={classes.footerLinks}><strong>Click here for map</strong></a>
            </Grid>
            <Grid item xs={4} s={3}>
              <Typography  className={classes.footerTitle}><strong>PHONE</strong></Typography>
              <Typography  className={classes.footerItem}>Office <span>425.258.6245</span></Typography>
              <Typography  className={classes.footerItem}>Mobile <span>425.238.1222</span></Typography>
              <Typography  className={classes.footerTitle}><strong>EMAIL</strong></Typography>
              <Typography  className={classes.footerItem}><a href="mailto:pam@trilliumink.net" style={{color: "blue", textDecoration: "none"}}>pam@trilliumink.net</a></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container sTypography acing={24}>
            <Grid item xs={5} className={classes.businessHoursContainer}>
              <Typography  className={classes.footerTitle}><strong>BUSINESS HOURS</strong></Typography>
              <Grid container sTypography acing={24}>
                <Grid item xs={4}>
                  <Typography  className={classes.weekday}>Tuesday</Typography>
                  <Typography  className={classes.weekday}>Wednesday</Typography>
                  <Typography  className={classes.weekday}>Thursday</Typography>
                  <Typography  className={classes.weekday}>Friday</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                  <Typography  className={classes.footerItem}>9:30AM-5:30PM</Typography>
                </Grid>
              </Grid>
            </Grid> 
            <Grid item xs={2} className={classes.footerLinksContainer}>
              <Typography  className={classes.footerItem}><a className={classes.footerLinks} href="#">Contact Us</a></Typography>
              <Typography  className={classes.footerItem}><a className={classes.footerLinks} href="#">Our Team</a></Typography>
              <Typography  className={classes.footerItem}><a className={classes.footerLinks} href="#">Pricing</a></Typography>
              <Typography  className={classes.footerItem}><a className={classes.footerLinks} href="#">FAQs</a></Typography>
              <Typography  className={classes.footerItem}><a className={classes.footerLinks} href="#">Other Link</a></Typography>
            </Grid>
            <Grid item xs={5} className={classes.socialsContainer}>
              <a href="#"><img className={classes.socials} src={Facebook} /></a>
              <a href="#"><img className={classes.socials} src={Insta} /></a>
              <a href="#"><img className={classes.socials} src={Youtube} /></a>
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
