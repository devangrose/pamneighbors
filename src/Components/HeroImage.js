import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = {
  thumbnail: {
      position: 'relative',
      display: 'inline-block',
      width: "100%",
      overflow: "hidden",
      margin: 'auto',
  },
  captionMen: {
    margin: '50%', 
    padding: '0% 10%', 
    textAlign: 'left', 
    display: 'table-cell', 
    verticalAlign: 'middle',
    color: 'white',
  },
  captionWomen: {
    margin: '50%', 
    padding: '0% 10%', 
    textAlign: 'right', 
    display: 'table-cell', 
    verticalAlign: 'middle',
  }
};
class HeroImage extends Component {
	render(props) {
    let innerWidth = 0;
    let divStyle= {};
    const url = 'url(' + this.props.source + ')';
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      const is_iPad = navigator.userAgent.match(/iPad/i) != null;
      innerWidth = is_iPad ? document.documentElement.clientWidth : window.innerWidth;
      divStyle= {backgroundImage: url, display: 'table', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: innerWidth / 2};
    }
    else {
      innerWidth = window.innerHeight;
      divStyle={backgroundImage: url, display: 'table',backgroundPosition: '0 50%',backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: innerWidth / 2}
    }
    return (
      <div>
        <div className={this.props.classes.thumbnail} style={divStyle}>
          { this.props.gender === 'woman' ? 
            <Typography variant="h4" className={this.props.classes.captionWomen}>
              {this.props.overlay}
            </Typography>
            : 
            <Typography variant="h4" className={this.props.classes.captionMen} >
              {this.props.overlay}
            </Typography>
          }
        </div>
      </div>
  )}
}

export default withStyles(styles)(HeroImage);
