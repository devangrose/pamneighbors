import React, { Component } from 'react';
import Carousel from 'Components/Carousel.js';
import HeroImage from '../../Components/HeroImage.js';
import HomeServiceCard from '../Home/ProcessCard.js';
import ServiceSummary from './ServiceSummary.js';

import { withStyles } from '@material-ui/core';
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";
import classNames from "classnames";

class Service extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div >
        <HeroImage source={this.props.banner} overlay={this.props.category} gender={this.props.gender} dark={this.props.dark}/>
        <div className={classNames(classes.main)} style={{paddingBottom: '3%'}}>
                  {this.props.images.length > 0 ? <Carousel header="Client Transformations" slides={this.props.images.map((service, index) => {return (<HomeServiceCard key={index} img={service.img} label={service.label} service={service}/>)})}/>: ''}

        <ServiceSummary name={this.props.category.replace('_', ' ')} img={this.props.img} firstParagraph={this.props.firstParagraph}/>
        {this.props.secondParagraph}
      </div>
      </div>
    )
  }

}

export default withStyles(shoppingCartStyle)(Service);
