import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';


import HeroImage from '../../Components/HeroImage.js';
import CardLink from './Card.js';
import redColor from '../../color.js';

import menHairLoss from '../../assets/mens-hair-loss3.jpg';
import menAlopecia from '../../assets/mens-alopcia2.jpg';
import menTransplant from '../../assets/men-transplant1.jpg';

import womenHairLoss from '../../assets/women-hair-loss1.jpg';
import womenAlopecia from '../../assets/women-alopecia1.jpg';
import eyebrows from '../../assets/eyebrows1.jpg';
import eyebrows3d from '../../assets/3d-eyebrows2.jpeg';
import eyeliner from '../../assets/eyeliner1.jpg';
import lips from '../../assets/lips1.jpg';

import hero from '../../assets/slider-item-2-1.jpg';

const styles = {
  img: {
    width: '80vw'
  }
};

class Transformations extends Component {

  render(){
    return (
      <div>
        <HeroImage source={hero} overlay="Client Transformations" gender="woman"/>
        <div style={{margin: "5%", paddingTop: "50px"}}> 
          <Typography variant="display2" style={{color: redColor}}>
            Men
          </Typography>
          <Typography variant="h6" style={{color: redColor}}>
            Click for more info!
          </Typography>
          <Grid container spacing={24} >
            <Grid item md={4} sm={12}>
              <CardLink image={menHairLoss} name="Men's Hair Loss" link="/service/men/hair-loss-treatment"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={menAlopecia} name="Men's Alopecia" link="/service/men/alopecia"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={menTransplant} name="Transplant Scars" link="/service/men/transplant-scars"/>
            </Grid>
          </Grid>
          <Typography variant="display2" style={{marginTop: "25px", color: redColor}}>
            Women
          </Typography>
          <Typography variant="h6" style={{color: redColor}}>
            Click for more info!
          </Typography>
          <Grid container spacing={24}>
            <Grid item md={4} sm={12}>
              <CardLink image={womenHairLoss} name="Women's Hair Loss" link="/service/women/hair-loss-treatment"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={womenAlopecia} name="Women's Alopecia" link="/service/women/alopecia"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={eyebrows} name="Eyebrows" link="/service/women/eyebrows"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={eyebrows3d} name="3d-Eyebrows" link="/service/women/3d-eyebrows"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={eyeliner} name="Eyeliner" link="/service/women/eyeliner"/>
            </Grid>
            <Grid item md={4} sm={12}>
              <CardLink image={lips} name="Lips" link="/service/women/lips"/>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }

}

export default withStyles(styles)(Transformations);
