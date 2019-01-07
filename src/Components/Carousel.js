import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import redColor from 'color.js';

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";

const styles = {
  
  leftArrow: {
    position: 'absolute',
    fontSize: '5em',
    color: redColor,
    left: '-5%',
    top: "50%",
    zIndex: 100,
  },
  rightArrow: {
    position: 'absolute',
    fontSize: '5em',
    color: redColor,
    right: '-5%',
    top: "50%",
    zIndex: 100,
  }
};

class SectionCarousel extends React.Component {

  slidePrev = (e) => {
    this.refs.carousel.slickPrev();
  }
  slideNext = (e) => {
    this.refs.carousel.slickNext();
  }
  render() {
    const { classes } = this.props;
    var settings = {
      infinite: false,
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: this.props.fullWidth ? 1 : 3,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide: true,
      autoplayspeed: 2000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
      ]
    };
    return (
      <div className={classes.container} style={{position: 'relative', marginBottom: '2%'}} id="carousel">
        {this.props.header ? <Typography style={{color: redColor, textAlign: 'center', paddingTop: "10%", paddingBottom: '5%'}} variant="h3" paragraph >{this.props.header}</Typography> : ''}
          <Icon onClick={this.slidePrev} style={styles.leftArrow}>keyboard_arrow_left</Icon>
          <Slider {...settings} ref="carousel" style={{display: "inline"}}>
            {this.props.slides}
          </Slider>

          <Icon onClick={this.slideNext} style={styles.rightArrow}>keyboard_arrow_right</Icon>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
