import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import Panel from './Panel.js';

import HeroImage from '../../Components/HeroImage.js';
import redColor from '../../color.js';

import menHairLoss from '../../assets/mens-hairloss.js';
import menAlopecia from '../../assets/mens-alopecia.js';
import menTransplant from '../../assets/mens-transplant.js';

import womenHairLoss from '../../assets/women-hairloss.js';
import womenAlopecia from '../../assets/women-alopecia.js';
import eyebrows from '../../assets/eyebrows.js';
import eyebrows3d from '../../assets/3deyebrows.js';
import eyeliner from '../../assets/eyeliner.js';
import lips from '../../assets/lips.js';

import hero from '../../assets/transformationsbanner.JPG';

const styles = {
  img: {
    width: '80vw'
  },
  grid: {
    margin: 'auto'
  },
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
          <Panel images={menHairLoss} title="Hair Loss" link="/service/men/hair-loss-treatment"/>
          <Panel images={menAlopecia} title="Alopecia" link="/service/men/hair-loss-treatment"/>
          <Panel images={menTransplant} title="Scalp Scars" link="/service/men/transplant-scars"/>
          <Typography variant="display2" style={{marginTop: "25px", color: redColor}}>
            Women
          </Typography>
          <Panel images={womenHairLoss} title="Hair Loss" link="/service/women/hair-loss-treatment"/>
          <Panel images={womenAlopecia} title="Alopecia" link="/service/women/alopecia"/>
          <Panel images={eyebrows} title="Eyebrows" link="/service/women/eyebrows"/>
          <Panel images={eyebrows3d} title="3D Eyebrows" link="/service/women/3d-eyebrows"/>
          <Panel images={eyeliner} title="Eyeliner" link="/service/women/eyeliner"/>
          <Panel images={lips} title="Lips" link="/service/women/lips"/>
        </div>
      </div>
    )
  }

}

export default withStyles(styles)(Transformations);
