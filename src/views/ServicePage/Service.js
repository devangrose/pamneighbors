import React, { Component } from 'react';
import Carousel from 'Components/Carousel.js';
import HeroImage from '../../Components/HeroImage.js';
import HomeServiceCard from '../Home/HomeServiceCard.js';
import ServiceSummary from './ServiceSummary.js';

class Service extends Component {

  render(){
    return (
      <div>
        <HeroImage source={this.props.banner} overlay={this.props.category} gender={this.props.gender}/>
        {this.props.images.length > 0 ? <Carousel header="Client Transformations" slides={this.props.images.map((service, index) => {return (<HomeServiceCard key={index} service={service}/>)})}/>: ''}
        <ServiceSummary name={this.props.category} img={this.props.img} firstParagraph={this.props.firstParagraph}/>
        {this.props.secondParagraph}
      </div>
    )
  }

}

export default Service;
