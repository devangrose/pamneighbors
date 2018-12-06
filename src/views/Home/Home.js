import React, { Component } from 'react';
//import Video from './Video.js';
import MidBanner from './MidBanner.js';
import Process from './Process.js';
import Technicians from './Technicians.js';
import Carousel from "../../Components/Carousel.js";
import HomeServiceCard from 'views/Home/HomeServiceCard';
import { withWidth } from '@material-ui/core';
import Video from './Video.js';

import services from 'assets/AllImages.js';

class Home extends Component {


  render(){
    return (
      <div> 
        <Video  />        
        <Carousel header="Our Services" slides={services.map((service, index) => {return (<HomeServiceCard key={index} service={service}/>)})}/>
        <Process steps={steps} width={this.props.width}/>
        <MidBanner />
        <Technicians backgroundColor='#e0e0e0' header='Meet Our Certified Technicians'/>
      </div>
    )
  }
}

export default withWidth()(Home);

const steps = [
  'Consultation',
  'Drawing Hair Line',
  'First Pass',
  'Second Pass',
  'Third Pass (if necessary)',
  'Touch Ups (if necessary)',
];
