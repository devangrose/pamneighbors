import React, { Component } from 'react';
//import Video from './Video.js';
import MidBanner from './MidBanner.js';
import Process from './Process.js';
import Technicians from './Technicians.js';
import Carousel from "../../Components/Carousel.js";
import HomeServiceCard from 'views/Home/TestHomeServiceCard';
import { withWidth } from '@material-ui/core';
import Video from './Video.js';
import ProcessCard from './ProcessCard.js';

import services from 'assets/AllImages.js';

import step1 from '../../assets/steps/consultation.JPG';
import step2 from '../../assets/steps/first_pass.JPG';
import step3 from '../../assets/steps/third pass.jpg';
import step4 from '../../assets/steps/second pass.JPG';
import step5 from '../../assets/steps/touch_ups.jpeg';

import { makeMetaTags, homeTags } from '../../meta-tags.js';

class Home extends Component {


  render(){
    return (
      <div> 
        { makeMetaTags(homeTags) }
        <Video source="https://player.vimeo.com/video/308634287" homeVideo/>        
        <Carousel header="Our SMP Services" slides={services.map((service, index) => {return (<ProcessCard key={index} service={service} img={service.img} label={service.label}/>)})}/>
        <Process steps={steps} width={this.props.width}/>
        <MidBanner />
        <Technicians backgroundColor='#e0e0e0' header='Meet Our Certified Technicians'/>
      </div>
    )
  }
}

export default withWidth()(Home);

const steps = [
  { label: 'Consultation', img: step1 },
  { label: 'First Pass', img: step2 },
  { label: 'Second Pass', img: step3 },
  { label: 'Third Pass (if necessary)', img: step4 },
  { label: 'Touch Ups (if necessary)', img: step5 },
];
