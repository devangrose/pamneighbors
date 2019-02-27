import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import BlogRow from './BlogRow.js';
import HeroImage from '../../Components/HeroImage.js';
import { makeMetaTags, blogTags } from '../../meta-tags.js';

import blogs from '../../assets/blog.js';
import hero from '../../assets/blogbanner.jpg';

const styles = {
  grid: {
    margin: '3%',
  }
};

class Blog extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        { makeMetaTags(blogTags) }
        <HeroImage source={hero} overlay="Trillium Blog"/>
        {blogs.map((blog, key) => <BlogRow blog={blog} key={key}/>)}
      </div>
    )
  }
}

export default withStyles(styles)(Blog);
