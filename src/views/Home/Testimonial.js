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
  }
});

function Testimonial(props) {
  const { classes } = props;

  const slides = [
    <div>
      <Grid container spacing={24} style={{margin: 0, width: '100%'}}>
        <Grid item xs={12}>
          <p><em>"I was sad to see the hair loss at my hairline in my fifties. Pam has created a natural and beautiful hairline for me through her scalp pigmentation process."</em></p>
          <p className={classes.p}><em>- Suzanne E.</em></p>
        </Grid>
      </Grid>
        <div style={{float: 'left', width: '45%'}}>
          <Typography variant="caption" align="center" gutterBottom style={{fontSize: "2em"}}>
            Before
          </Typography> 
          <img alt="before" className={classes.img} src={before} />
        </div>
        <div style={{float: 'right', width: '45%'}}>
          <Typography variant="caption" align="center" gutterBottom style={{fontSize: "2em"}}>
            After
          </Typography>
          <img alt="after" className={classes.img} src={after} /> 
        </div>
      </div>
    ,
    <Video source="https://player.vimeo.com/video/309161946?title=0&byline=0&portrait=0"/>
    ,
    <img src={testimonial2} className={classes.img}/>
    ,
    <Video source="https://player.vimeo.com/video/309161355?title=0&byline=0&portrait=0"/>
    ,
    <img src={testimonial1} className={classes.img}/>
    ,
    <Video source="https://player.vimeo.com/video/309160464?title=0&byline=0&portrait=0"/>
    ,
    <img src={testimonial3} className={classes.img}/>
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
