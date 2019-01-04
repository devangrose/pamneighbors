import React, { Component } from 'react';
import { Typography, withStyles, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import HeroImage from 'Components/HeroImage.js';
import { Link } from 'react-router-dom';
import Video from '../Home/Video.js';

import hero from '../../assets/trainingbanner.JPG';
import redColor from 'color.js';

import school1 from 'assets/school1.jpg';
import school2 from 'assets/school2.jpg';
import school3 from 'assets/school3.jpg';
import school4 from 'assets/school4.jpg';
import school5 from 'assets/school5.jpg';
import school6 from 'assets/school6.jpg';

const styles = {
  header: {
    color: redColor,
  },
  root: {
    maxWidth: '80%',
    marginTop: '50px',
    margin: '0 auto',
  },
  img: {
    margin: '0 50%',
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: redColor,
    '&:visited':{
      color: redColor,
    }
  }
}

class Training extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <HeroImage source={hero} dark={true} overlay="Training_Opportunities" gender="man"/>
        <div className={classes.root}>
          <Typography variant="h4" className={classes.header}>
            Scalp Academy Training Opportunities
          </Typography>
          <br/>
          <br/>
          <Video homeVideo source="https://player.vimeo.com/video/252958607?title=0&byline=0&portrait=0"/>
          <br/>
          <br/>
          <Typography variant="h5">
            As the industry of scalp micropigmentation grows, the most qualified technicians will be in high demand.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            As a core office and master technician for Trillium Ink Studios, Pam Neighbors is offering hands-on training, continuing education and support in the field of scalp micropigmentation.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            For anyone dealing with balding, receding hairlines, thinning hair or scars in the scalp, this process can be a life-changing.  Trillium Ink Studios has perfected this art and is now the largest and fastest growing scalp micropigmentation company in the world.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            If you are interested in scalp micropigmentaion training, we can help you achieve your goals and become a skilled technician.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            At Trillium Ink Scalp Academy we strive to create the very best technicians through our highly-effective, hybrid training program.  Our educators are artists who achieve optimal results for each and every trainee through our hands-on approach of practical experience paired with our online training.  This interesting, yet flexible way of learning is a proven, successful combination to instill knowledge and encourage creativity in our students.
          </Typography>
          <br/>
          <br/>
          <Grid container spacing={24}>
            <Grid item lg={4} md={12}>
              <img alt="school" className={classes.img} src={school1}/>
            </Grid>
            <Grid item lg={4} md={12}>
              <img alt="school" className={classes.img} src={school2}/>
            </Grid>
            <Grid item lg={4} md={12}>
              <img alt="school" className={classes.img} src={school3}/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <Typography variant="h4" className={classes.header}>
            What Can You Expect From Trillium Ink’s Hybrid Training?
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            The Trillium Ink Scalp Academy is a hybrid training course that was developed to meet the needs of a growing industry.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            Being in the permanent cosmetics business for 28+ years, Pam has seen the repercussion of inadequate training within the field.  As scalp micropigmentation began to grow and enter the US market, she saw the same pattern forming again regarding training.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            The program that Trillium Ink Scalp Academy has built is a hybrid training program that requires online study and practice drills that allow students the time necessary to refine their skills before proceeding to the hands-on portion of the training. There is no room for error, so students must pass assessments on the first day of class before working on live models.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            The online portion of the training contains the fundamental building blocks to give students solid knowledge in every area of scalp micropigmentation.  Though we do not disclose our curriculum online, you are welcome to call any of our instructors and discuss this at length.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            Students learn basic application skills through video instruction, then practice drills and send their work to us via pics/text/email.  We guide them and perfect their skills through systematic practice drills until they have demonstrated a sufficient level of ability, at which time they advance to the next level of drills.  There are study modules to be completed and quizzes to measure progress.  80% competency is required to pass the quizzes. Students also do some outside study and papers are required in the areas listed.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            At the hands-on class, students work closely with instructors at a ratio of not more than 4 students to 1 instructor.  Forty hours of hands-on time makes this an intense course.  We provide an average of 6 live models per class.  We want students to be exposed to as many real-life cases, skin types, hair types, balding patterns and special situations as possible so that they are confident when starting to do procedures on their own.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            Students perform every aspect of a scalp micro pigmentation procedure and are assessed for efficient application and competency of all skills necessary to complete a safe and effective treatment.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            For full certification, students must provide 3 documented case studies with before and after pictures of their work.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            Our goal is to provide a well-rounded educational experience that instills confidence in each student to perform procedures when they leave us.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            We offer ongoing support to our students through continued communication, private training forums, and advanced learning opportunities.
          </Typography>
          <br/>
          <br/>
          <Grid container spacing={24}>
            <Grid item lg={4} md={12}>
              <img alt="school" className={classes.img} src={school4}/>
            </Grid>
            <Grid item lg={4} md={12}>
              <img alt="school" className={classes.img} src={school5}/>
            </Grid>
            <Grid item lg={4} md={12}>
              <img alt="school" className={classes.img} src={school6}/>
            </Grid>
          </Grid>
          <br/>
          <br/>
          <Typography variant="h4" className={classes.header}>
            How Do I Get Started On My Training?
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            When you’re ready to get started, just give us a call and we’ll get you registered for the class that is most convenient for you.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            We teach in many locations in the U.S. and abroad.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5" className={classes.bold}>
            Washington State residences  <Link to="/training/washington" className={classes.link}>click here!</Link>
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5">
            Once you’re registered for a class, we’ll give you the link to the online training portal and send out a practice kit.
          </Typography>
          <br/>
          <br/>
          <Typography variant="h5" className={classes.bold}>
            And you will be on your way to becoming a world-class scalp artist!
          </Typography>
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}

Training.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(Training);
