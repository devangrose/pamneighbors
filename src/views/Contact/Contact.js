import React, { Component } from 'react';
import { makeMetaTags, contactTags } from '../../meta-tags.js';

import ContactUs from './ContactUs.js';
import ContactRow from './ContactRow.js';
import GoogleMap from './GoogleMap.js';

class Contact extends Component {

  render(){
    return (
      <div>
        { makeMetaTags(contactTags) }
        <ContactRow header="Get in Touch"/>
        <ContactUs/>
      </div>
    )
  }
}

export default Contact;
