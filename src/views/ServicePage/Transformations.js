import React, { Component } from "react";
import ServiceCard from '../../Components/ServiceCard.js';
import { Typography } from '@material-ui/core';
import { withWidth } from '@material-ui/core';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from '@material-ui/core/Icon';

import redColor from '../../color.js';

class Transformations extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const slides = ['lg','xl'].includes(this.props.width) ? 3 : 1;
    return (
      <div style={{paddingTop: "50px", textAlign: "center", maxWidth: "80%", margin: "auto"}}>
        <Typography variant="display2" style={{paddingBottom: "20px"}}>
          Client Transformations
        </Typography>
        <Carousel
          arrowLeft={<Icon style={{fontSize: "3em", color: redColor}}>keyboard_arrow_left</Icon>}
          arrowRight={<Icon style={{fontSize: "3em", color: redColor}}>keyboard_arrow_right</Icon>}
          slidesPerPage={slides}
          draggable={false}
          addArrowClickHandler
          infinite
        >
          {this.props.images.map(service => <ServiceCard service={service}/>)}
        </Carousel>
      </div>
    )
  }
}

export default withWidth()(Transformations);
