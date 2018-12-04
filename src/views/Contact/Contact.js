import React, { Component } from 'react';

import GetInTouchRow from '../Home/GetInTouchRow.js';
import HeroImage from '../../Components/HeroImage.js';
import ContactUs from './ContactUs.js';
import ContactRow from './ContactRow.js';

import map from '../../assets/map.png';

class Contact extends Component {

  render(){
    return (
      <div>
        <HeroImage />
        <ContactRow header="Get in Touch"/>
        <HeroImage source={map}/>
        <ContactUs/>
      </div>
    )
  }
}

export default Contact;
