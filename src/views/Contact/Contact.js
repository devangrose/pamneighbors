import React, { Component } from 'react';

import ContactUs from './ContactUs.js';
import ContactRow from './ContactRow.js';
import GoogleMap from './GoogleMap.js';

class Contact extends Component {

  render(){
    return (
      <div>
        <ContactRow header="Get in Touch"/>
        <GoogleMap/>
        <ContactUs/>
      </div>
    )
  }
}

export default Contact;
