import React, { Component } from 'react';
import { withStyles, Icon } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const styles = {
    root: {
      width: '100%',
      height: '50vh',
    },
};
class GoogleMap extends Component {

  renderMarkers(map, maps){
    const position = {lat: 47.971999, lng: -122.2016507}
    let marker = new maps.Marker({
      position: position,
      map,
      title: 'Trillium Ink',
    });
    marker.addListener('click', function() {
          window.location.href = 'https://www.google.com/maps/dir//Trillium+Ink,+3418+Broadway,+Everett,+WA+98201/@47.9720026,-122.2038394,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x549aaa98189b4f1b:0x3525e7727143a351!2m2!1d-122.2016507!2d47.971999!3e0';

    });
  }
  render(){
    const { classes } = this.props;
    const position = {lat: 47.971999, lng: -122.2016507}
    return (
      <div  className={classes.root}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCWtNL43rZAsC2bRkR5ryzOs005edUug6o'}}
        defaultCenter={position}
        defaultZoom={16}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
      >
      </GoogleMapReact>
      </div>
    )
  }
}

export default withStyles(styles)(GoogleMap);
