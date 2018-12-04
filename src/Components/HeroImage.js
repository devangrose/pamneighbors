import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = {
  img: {
    display: 'block',
    width: "100%",
    margin: 'auto',
  },
  thumbnail: {
      position: 'relative',
      display: 'inline-block',
      height: "50vh",
      width: "100%",
      overflow: "hidden",
      margin: 'auto',
  },
  captionMen: {
      position: 'absolute',
      top: '40%',
      left: '5%',
      transform: 'translate(-5%, -50%)',
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
  },
  captionWomen: {
      position: 'absolute',
      top: '40%',
      right: '5%',
      transform: 'translate(-5%, -50%)',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
  }
};
class HeroImage extends Component {
  constructor(props){
    super(props);
  }
	render(props) {
    return (
      <div>
        <div className={this.props.classes.thumbnail}>
          <img src={this.props.source} className={this.props.classes.img}/>
          { this.props.gender == 'woman' ?
          <div className={this.props.classes.captionWomen}>
            <Typography variant="h4" style={{color:"black"}}>
              {this.props.overlay}
            </Typography>
          </div> : 
          <div className={this.props.classes.captionMen}>
            <Typography variant="h4" style={{color:"white"}}>
              {this.props.overlay}
            </Typography>
          </div> }
        </div>
      </div>
  )}
}

export default withStyles(styles)(HeroImage);
