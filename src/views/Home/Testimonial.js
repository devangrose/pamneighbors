import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Carousel from 'Components/Carousel.js';
import Video from './Video.js';

import testimonial1 from '../../assets/Testimonial.1.png';
import testimonial2 from '../../assets/Testimonial.2.jpeg';
import testimonial3 from '../../assets/Testimonial.3.jpeg';

import before from '../../assets/beforepic.png';
import after from '../../assets/afterpic.jpg';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  text: {
    marginBottom: '4rem'
  },
  img: {
    width: "100%",
    height: "auto",
  },
  imgFrame: {
    paddingBottom: "50px"
  },
  img2: {
    width: '75%',
    height: 'auto',
    margin: '10% auto',
  }
});

function Testimonial(props) {
  const { classes } = props;

  const slides = [
    <div>
      <div style={{margin: '30% auto 0 auto',padding: '15% 0', backgroundColor: 'black'}}>
          <Video source="https://player.vimeo.com/video/309221450?title=0&byline=0&portrait=0"/>
      </div>
    </div>
    ,
    <div>
      <img src={testimonial2} className={classes.img2} style={{position: 'relative'}}/>
    </div>
    ,
    <div>
      <div style={{margin: '30% auto 0 auto',padding: '15% 0', backgroundColor: 'black'}}>
          <Video source="https://player.vimeo.com/video/309161355?title=0&byline=0&portrait=0"/>
      </div>
    </div>
    ,
    <div>
    <img src={testimonial1} className={classes.img2}/>
    </div>
    ,
    <div>
      <div style={{margin: '30% auto 0 auto',padding: '15% 0', backgroundColor: 'black'}}>
        <Video source="https://player.vimeo.com/video/309160464?title=0&byline=0&portrait=0"/>
      </div>
    </div>
    ,
    <div>
      <img homeVideo src={testimonial3} className={classes.img2}/>
    </div>
    ,
    <div>
      <div style={{margin: '30% auto 0 auto',padding: '15% 0', backgroundColor: 'black'}}>
        <Video source="https://player.vimeo.com/video/309161946?title=0&byline=0&portrait=0"/>
      </div>
    </div>
  ]

  return (
    <div className={classes.root} style={{background: props.backgroundColor}}>
      <Carousel slides={slides} fullWidth/>
    </div>
  );
}

Testimonial.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Testimonial);
