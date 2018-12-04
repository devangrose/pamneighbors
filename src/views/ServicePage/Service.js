import React, { Component } from 'react';
import Carousel from 'Components/Carousel.js';
import HeroImage from '../../Components/HeroImage.js';
import ServiceSummary from './ServiceSummary.js';
import FeaturedRow from '../../Components/FeaturedRow.js';
import Transformations from './Transformations.js';
import ServiceCard from '../../Components/ServiceCard.js';

{/* PROPS 
    category: category
    name: service name
    images: client images
    img: top image
    first paragraph: info section
    secondParagraph: optional additional info
    transformations: array of images for before/after
    steps: steps for process
*/}

class Service extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <HeroImage source={this.props.banner} overlay={this.props.category} gender={this.props.gender}/>
        <Carousel header="Client Transformations" slides={this.props.images.map(service => {return (<ServiceCard service={service}/>)})}/>
        <ServiceSummary name={this.props.category} img={this.props.img} firstParagraph={this.props.firstParagraph}/>
        {this.props.secondParagraph}
      </div>
    )
  }

}

export default Service;
