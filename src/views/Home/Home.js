import React, { Component } from 'react';
//import Video from './Video.js';
import HeroImage from '../../Components/HeroImage.js';
import ServicesStepper from './ServicesStepper.js';
import FeaturedRow from '../../Components/FeaturedRow.js';
import MidBanner from './MidBanner.js';
import Process from './Process.js';
import Technicians from './Technicians.js';
import Carousel from "../../Components/Carousel.js";
import HomeServiceCard from 'views/Home/HomeServiceCard';

import services from 'assets/serviceCarousel.js';

import hero from '../../assets/banner-lips.jpg';

const DEV_MODE = true;


class Home extends Component {


  render(){
    return (
      <div> 
        <HeroImage source={hero}/>
        <Carousel header="Our Services" slides={services.map(service => {return (<HomeServiceCard service={service}/>)})}/>
        <Process steps={steps} />
        <MidBanner />
        <Technicians backgroundColor='#e0e0e0' header='Meet Our Certified Technicians'/>
      </div>
    )
  }
}

export default Home;

const steps = [
  'Consultation',
  'Drawing Hair Line',
  'First Pass',
  'Second Pass',
  'Third Pass (if necessary)',
  'Touch Ups (if necessary)',
];
