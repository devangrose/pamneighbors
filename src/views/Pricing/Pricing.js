import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

import headerPhoto from "../../assets/slider-item-2-1.jpg"
import HeroImage from '../../Components/HeroImage';

const styles = theme => ({
  root: {
    width: '100%',
  },
});

function Pricing(props) {
    return (
      <div>
        <HeroImage source={ headerPhoto } overlay="Pricing" gender="woman"/>
        <Paper style={{ margin: "0px",  padding: "5%", paddingTop: "3%", background: "linear-gradient(#e0e0e0, #CECECE)" }} >
          <Typography variant="h4" align="center" paragraph="true">
            Trillium Ink Pricing
          </Typography>
          <Typography variant="h5" paragraph="true">
            Scalp micropigmentation procedures are not all the same.  Each client will require a different amount of coverage and density. We do not have a set price list for these procedures.  
          </Typography>
          <Typography variant="h5" paragraph="true">
Most providers use the <a href="http://www.americanhairloss.org/men_hair_loss/the_norwood_scale.asp">Norwood balding chart</a> as a guide for pricing men’s treatments and the <a href="http://www.americanhairloss.org/women_hair_loss/degree_of_hair_loss.asp">Ludwig chart</a> for pricing women’s treatments. We welcome you to come in for complimentary consultation.  If distance is a hindrance, send us pictures of your head front, side and back.  We can consult with you on the phone and start a quote for you.
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
Call today for your consultation!   <a href="tel:425-238-1222">425-238-1222</a>
          </Typography>
        
        </Paper>
      </div>
    );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing)
