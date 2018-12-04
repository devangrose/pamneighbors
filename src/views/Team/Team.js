import React, { Component } from 'react';
import HeroImage from '../../Components/HeroImage.js';
import Profile from './Profile.js';
import { Typography } from '@material-ui/core';
import scrollToComponent from 'react-scroll-to-component';

import womanBanner from '../../assets/banner-lips.jpg';

import pam from '../../assets/pam.jpg';
import ran from '../../assets/Ran.jpg';
import colleen from '../../assets/colleen.jpg';

const teamInfo = [
  {
    name: "Pam",
    image: pam,
    subheading: "Certified Permanent Cosmetics / Scalp Artist and Educator",
    description: (
      <div>
        <Typography variant="h5">
          Has 25+ years in the permanent cosmetics field. She uses her years of artistry in tattoo art, skin needling, camouflaging, her work with plastic surgeons and SMP’s most advanced micro pigmentation techniques to provide the best possible experience for her clients.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
          Pam believes that continuing education is key in this industry.  Staying current with the latest equipment and techniques allows her and her staff to insure that each client is going to receive optimum results in a safe, comfortable environment.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
          Her attention to detail and no nonsense approach paired with her sense of humor keeps her clients confident in each procedure.  Most importantly, she listens to her clients, customizing each look to restore their confidence in business, relationships, and in their lifestyle.
        </Typography>
        <br/>
        <br/>
      </div>
    ),
  },
  {
    name: "Ran Pfliger (Lon)",
    image: ran,
    subheading: "Certified Permanent Cosmetics Artist / Scalp Artist",
    description: (
      <div>
        <Typography variant="h5">
          Ran has been a member of the Trillium Ink team for several years and is a fully licensed permanent cosmetics and scalp artist  She came to the U.S. as a Japanese foreign exchange student and made the States her home. Ran has been working along side of Pam for several years as an assistant and has learned this art hands-on.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
          Ran has her Washington State Permanent Cosmetics License and Scalp Micropigmentation Certifications.  She is a Certified Permanent Cosmetics Artist trained in Dallas, Texas.  Her dedication to her work and her willingness to learn has landed her a coveted spot with Trillium Ink Stuidos.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
          She is a joy to work with and is admired by her coworkers.  Her bubbly personality and drive insure her a prosperous career!
        </Typography>
        <br/>
        <br/>
      </div>
    ),
  },
  {
    name: "Colleen Schwartz-Hall",
    image: colleen,
    subheading: "Master Esthetician",
    description: (
      <div>
        <Typography variant="h5">
          Colleen started her career in skincare in 1995. In her 20+ years in the industry, she has experienced many changes in both beauty and anti-aging. Her quest for continuing education and product knowledge puts Colleen at the forefront in her profession.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
          In 2014 Washington state added the Master Esthetician licensing credential to the current program to ensure a higher level of education in laser technology, chemical resurfacing and expanded product updates. Colleen attended the first enhanced program in Washington and obtained her masters license.
        </Typography>
        <br/>
        <br/>
        <Typography variant="h5">
          As a Master Esthetician, Colleen provides personalized skincare and anti-aging services. Her consultations and in depth skin analysis allow her to assess the needs and desires of her individual client and execute a treatment plan to achieve optimal results and total customer satisfaction.
        </Typography>
        <br/>
        <br/>
      </div>
    ),
  },
]
class Team extends Component {

  componentDidMount(){
    if(this.props.match.params.member == 'pam'){
      console.log(this.refs['member0']);
      scrollToComponent(this.refs['member0'], {align: 'top'});
    }
    if(this.props.match.params.member == 'ran'){
      console.log(this.refs['member1']);
      scrollToComponent(this.refs['member1'], {align: 'top'});
    }
    if(this.props.match.params.member == 'colleen'){
      console.log(this.refs['member0']);
      scrollToComponent(this.refs['member2'], {align: 'top'});
    }
  }
  render(){
    return (
      <div> 
        <HeroImage source={womanBanner} overlay="Our Team" gender="woman"/>
        {teamInfo.map((profile, index) => {
          return (
            <div>
              { index > 0 ? <hr style={{width: "80%"}}/> : '' }
              <Profile ref={'member' + index} name={profile.name} image={profile.image}  subheading={profile.subheading} description={profile.description}/>
            </div>
          )
          })
        }
      </div>
    )
  }
}

export default Team;
