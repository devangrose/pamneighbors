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
    constructor(props){
      super(props);
    }
    componentDidMount(){

      this.videoNode = videojs('videoplayer',videoJsOptions, () =>{
      });

    }

    render() {
        return (
          <div>
          <video id="videoplayer" autoplay="" muted="" width={document.documentElement.clientWidth} height={document.documentElement.clientHeight / 2} className="video-js vjs-default-skin" controls>
              <source src="https://s3.amazonaws.com/pamneighbors.out.video/video720p.m3u8" type="application/x-mpegURL" />
            </video>
          </div>
        );

    }
}

export default VideoPlayer;
