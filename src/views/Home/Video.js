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
          <iframe width="100%" height="350vh" src="https://player.vimeo.com/video/308634287" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        );

    }
}

export default VideoPlayer;
