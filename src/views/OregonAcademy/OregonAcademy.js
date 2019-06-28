import React, { Component } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HeroImage from 'Components/HeroImage.js';
import { Link } from "react-router-dom";

import hero from '../../assets/banner-smp.jpg';
import pamWithStudent from "../../assets/img/pam-with-student.jpeg";
import redColor from 'color.js';

import { container } from "../../assets/material-kit-pro-react.jsx";

const styles = {
  container,
  root: {
    maxWidth: '80%',
    margin: 'auto',
    marginTop: '50px',
  },
  header: {
    color: redColor,
  },
  section: {
  },
  img: {
    margin: '0 auto',
    maxHeight: '50vh',
    maxWidth: '100%'
  },
  hr: {
    backgroundColor: redColor,
    width: '80%',
    margin: '5vh auto',
  },
  testimonial: {
    fontStyle: 'italic',
    color: redColor,
  },
}

class Oregon extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <HeroImage source={hero} overlay="Oregon Academy"/>
        <div className={classes.root}>
          <br/>
          <br/>
          <div className={classes.section}>
            <Typography variant="h2" className={classes.header} align="center" paragraph >
              Start a career in cosmetic tattooing!
            </Typography>
          </div>
          <div className={classes.section}>
            <Typography variant="h5" paragraph>
              Oregon State Health Licensing and Higher Education requires that students wanting to take the Oregon Exam for Tattoo Licensing must complete a minimum of 360 hours of training with an approved school.  Instructors must be licensed in the State and meet all criteria required to obtain approval to teach and provide transcripts necessary for students to apply to take the licensing exams.
            </Typography>
            <Typography variant="h5" paragraph>
              Trillium Ink Academy is approved and offering courses designed to get students ready to take the Oregon licensing exams and educate them in their selected area of tattoo practice.  We offer emphasis on permanent make-up or scalp micropigmentation in our beginning courses. Students training in these areas may add other areas of practice in the future as they choose.
            </Typography>
            <Typography variant="h5" paragraph>
              Oregon State requires that students meet the minimum 360 hours of training and complete 50 procedures before taking the exams.  210 theory hours must be completed before students may begin work on live models.  
            </Typography>
          </div>
          <hr className={classes.hr}/>
          <div className={classes.section}>
            <Typography variant="h3" className={classes.header} paragraph>
              Permanent Cosmetics
            </Typography>
            <Typography variant="h5" paragraph>
              The field of permanent cosmetics has grown to enormous proportions.  With todays’ busy lifestyles, women and men everywhere want to look their best with the least amount of time involved.  Perfectly applied make-up that stays all the time is highly desirable and has become one of the most sought after procedures of the times. This course gives students the fundamental training in make-up tattooing and the solid foundational basics required to apply for the exams.
            </Typography>
            <Typography variant="h5" paragraph>
              Permanent cosmetics training is the foundational education to other cosmetic tattoo services.  Post surgical tattooing restores missing color to areolas following breast reconstruction, camouflages surgical scarring, and can significantly improve many birth defects and accident related scars.  Students wanting to pursue a career in medical tattooing must get the foundational training, and then add other areas of practice to their skillset.
            </Typography>
            <Typography variant="h5" paragraph>
              Trillium Ink Academy training tuitions include complete start- up kits, so students are ready to get started in their prospective careers.
            </Typography>
          </div>
          <div className={classes.container} style={{textAlign: 'center', margin: '5vh auto'}}>
            <img className={classes.img} src={pamWithStudent}/>
          </div>
          <hr className={classes.hr}/>
          <div className={classes.section}>
            <Typography variant="h3" className={classes.header} paragraph>
              SMP
            </Typography>
            <Typography variant="h5" paragraph>
              For anyone balding, receding hairlines, thinning hair or scarring in the scalp, scalp micropigmentation can be a life changing procedure.
            </Typography>
            <Typography variant="h5" paragraph>
              Both men and women experience pattern balding or thinning.  Many have surgical scars or accident related scars in the scalp.  More and more people are affected by auto-immune disease or other illnesses that leave them with little or no hair.  The effects are devastating.
            </Typography>
            <Typography variant="h5" paragraph>
              Scalp micropigmentation is the fastest growing area of tattooing at current time.  The benefits of this process make it an incredibly lucrative area of practice, with many niche markets.  Students with a desire to go into this field will find it demanding but unbelievably rewarding.  Trillium Ink has perfected this art using the Trillium Ink Technique™ and teaches it as an area of emphasis in the Oregon school.
            </Typography>
            <Typography variant="h5" paragraph>
              Our interactive online training and live online classes allow students from across the state to attend the academy.  Theory hours and lectures can be done from home, while hands-on days in the Tigard location are mostly weekends, all allowing students to maintain their current employment while working toward their new careers.  
            </Typography>
          </div>
          <hr className={classes.hr}/>
          <div className={classes.section}>
            <Typography variant="h3" className={classes.header} paragraph>
              LEARN FROM THE BEST!
            </Typography>
            <Typography variant="h5" paragraph>
              Pam Neighbors is Founder and Master artist and educator of Trillium Ink Academy in Tigard, Oregon.  She has 29+ year of experience in the field.  She is licensed in three states, is a certified permanent cosmetics artist and is accomplished in tattoo art, scar camouflage, esthetics, and micro needling.  She has studied scalp micropigmentation in three countries and holds three Master certificates.
            </Typography>
            <Typography variant="h5" paragraph>
              Pam was a keynote speaker at Meeting of Minds 2019 in London, the world conference for scalp micropigmentation.  She also sat on the expert panel discussing Business Advancement in Scalp Micropigmentation.
            </Typography>
            <Typography variant="h5" paragraph>
              In her years of practice she has helped countless clients performing post surgery reconstructive tattoo procedures along side some of Seattle’s top surgeons.  Hair loss professionals refer their alopecia patients to her with confidence.  She is committed to providing break through techniques in her field and sharing those for the advancement of the industry.
            </Typography>
            <div className={classes.container} style={{margin: '4vh auto'}}>
              <Typography variant="h5" align="center" className={classes.testimonial}>
                Thank you Pam for everything. This has been the most fulfilling milestone that I've experienced in a long time. I appreciate your guidance and support. Hope you are starting off having a wonderful day. 
              </Typography>
              <Typography variant="h6" align="center" style={{color: 'grey'}}>
                - Alexis
              </Typography>
            </div>
            <Typography variant="h5" paragraph>
              Pam is a professional who believes knowledge is power.  She is a dedicated trainer, devoted to her student’s success.  Her Oregon approved tattoo training school insures a positive and exciting learning experience!
            </Typography>
            <Typography variant="h5" paragraph>
              Work with a master!  Build the confidence necessary to start a successful career in the field of cosmetic tattooing!
            </Typography>
            <Typography variant="h5" paragraph>
              For more information regarding the Oregon Tattoo Training Program contact Trillium Ink Academy at  <a rel="noopener noreferrer" style={{textDecoration: "none",color: redColor}} href="tel:503-747-3726">503.747.3726</a> or contact us <Link to="/contact" style={{color: redColor}}>here.</Link>
            </Typography>
          </div>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

Oregon.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Oregon);

