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
          <div style={{backgroundColor: 'black'}}>
            <iframe width="100%" height="350vh" src={this.props.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          </div>
        );

    }
}

export default VideoPlayer;
