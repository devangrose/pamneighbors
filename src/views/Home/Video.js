import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import poster from 'assets/poster.png';

window.videojs = videojs;
require('videojs-contrib-hls/dist/videojs-contrib-hls.js');

const videoJsOptions = {
  autoplay: true,
  controls: true,
  muted: false,
  poster: poster,
};

class VideoPlayer extends Component {

    render() {
        return (
          <div style={{backgroundColor: 'black', maxHeight: this.props.homeVideo ? '33vw': "35vh", height: this.props.homeVideo ? '33vw': "350vh", margin: this.props.carouselVideo ? '50% auto 0% auto' : '0 auto', padding: this.props.padding ? '15% 0' : '0'}}>
            <iframe width="100%" height="100%" src={this.props.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          </div>
        );

    }
}

export default VideoPlayer;
