import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { makeMetaTags, pricingTags } from '../../meta-tags.js';

import headerPhoto from '../../assets/pricingbanner.jpg';
import HeroImage from '../../Components/HeroImage';
import redColor from 'color.js';

const styles = theme => ({
  root: {
    width: '100%',
  },
  a : {
    color: redColor,
    '&:visited':{
      color: redColor, 
    },
    '&:hover':{
      textDecoration: 'underline',
    }
  },
});

function Pricing(props) {
    const { classes } = props;
    return (
      <div>
        { makeMetaTags(pricingTags) }
        <HeroImage source={ headerPhoto } overlay="Pricing" gender="woman"/>
        <Paper style={{ margin: "0px",  padding: "5%", paddingTop: "3%", background: "linear-gradient(#e0e0e0, #CECECE)" }} >
          <Typography variant="h4" align="center" paragraph="true" style={{color: redColor}}>
            Trillium Ink Pricing
          </Typography>
          <Typography variant="h5" paragraph="true">
            Scalp micropigmentation procedures are not all the same.  Each client will require a different amount of coverage and density. We do not have a set price list for these procedures.  
          </Typography>
          <Typography variant="h5" paragraph="true">
Most providers use the <a rel="noopener noreferrer" className={classes.a} href="http://www.americanhairloss.org/men_hair_loss/the_norwood_scale.asp" target="_blank">Norwood Balding Chart</a> as a guide for pricing men’s treatments and the <a rel="noopener noreferrer" className={classes.a} href="http://www.americanhairloss.org/women_hair_loss/degree_of_hair_loss.asp" target="_blank">Ludwig Chart</a> for pricing women’s treatments. We welcome you to come in for complimentary consultation.  If distance is a hindrance, send us pictures of your head front, side and back.  We can consult with you on the phone and start a quote for you.
          </Typography>
          <Typography variant="h5" paragraph="true">
Scalp micropigmentation procedures average between $2000 and $4000.  
          </Typography>
          <Typography variant="h5" paragraph="true">
Scalp scars, transplant donor scars, and special cases such as traction alopecia all require a variety of attention.  We are happy to quote your individual case.
          </Typography>
          <Typography variant="h5" paragraph="true">
Trillium Ink Studios have tiered pricing.  We base these prices on years of experience.  Regardless of the technician you choose, we deliver the best possible results for each and every client.
          </Typography>
          <Typography variant="h5" paragraph="true">
Call today for your consultation!   <a rel="noopener noreferrer"className={classes.a} href="tel:425-238-1222">425.238.1222</a>
          </Typography>
        
        </Paper>
      </div>
    );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing)
