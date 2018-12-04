import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from '@material-ui/core/Icon';
import HomeServiceCard from './HomeServiceCard.js';
import { withWidth } from '@material-ui/core';

import redColor from 'color.js';

import menHairLoss from 'assets/mens-hair-loss1.jpg';
import menAlopecia from 'assets/mens-alopcia2.jpg';
import menTransplant from 'assets/men-transplant1.jpg';

import womenHairLoss from 'assets/women-hair-loss1.jpg';
import womenAlopecia from 'assets/women-alopecia1.jpg';
import eyebrows from 'assets/eyebrows1.jpg';
import eyebrows3d from 'assets/3d-eyebrows1.jpg';
import eyeliner from 'assets/eyeliner1.jpg';
import lips from 'assets/lips1.jpg';

const services = [
  {
    label: 'Men\'s Hair Loss Treatment',
    img: menHairLoss,
    link: '/service/men/hair-loss-treatment',
  },
  {
    label: 'Women\'s Alopecia',
    img: womenAlopecia,
    link: '/service/women/alopecia',
  },
  {
    label: 'Eyebrows',
    img: eyebrows,
    link: '/service/women/eyebrows',
  },
  {
    label: 'Lips',
    img: lips,
    link: '/service/women/lips',
  },
  {
    label: 'Men\'s Alopecia',
    img: menAlopecia,
    link: '/service/men/alopecia',
  },
  {
    label: '3-D Hair Stroke Eyebrows',
    img: eyebrows3d,
    link: '/service/women/3d-eyebrows',
  },
  {
    label: 'Transplant Scars',
    img: menTransplant,
    link: '/service/men/transplant-scars',
  },
  {
    label: 'Women\'s Hair Loss Treatment',
    img: womenHairLoss,
    link: '/service/women/hair-loss-treatment',
  },
  {
    label: 'Eyeliner',
    img: eyeliner,
    link: '/service/women/eyeliner',
  },
];

class ServicesStepper extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const slides = ['lg','xl'].includes(this.props.width) ? 3 : 1;
    return (
      <div style={{paddingTop: "50px", textAlign: "center", maxWidth: "80%", margin: "auto"}}>
        <Typography variant="display2" style={{paddingBottom: "20px"}}>
          Our Services
        </Typography>
        <Carousel
          arrowLeft={<Icon style={{fontSize: "3em", color: redColor}}>keyboard_arrow_left</Icon>}
          arrowRight={<Icon style={{fontSize: "3em", color: redColor}}>keyboard_arrow_right</Icon>}
          slidesPerPage={slides}
          draggable={false}
          addArrowClickHandler
          infinite
        >
          {services.map(service => <HomeServiceCard service={service}/>)}
        </Carousel>
      </div>
    )
  }
}

export default withWidth()(ServicesStepper);
