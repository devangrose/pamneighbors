import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import blogRow from './BlogRow.js';

import blogs from '../../assets/blog.js';

const styles = {

};

class Blog extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        {blogs.map((blog, key) => <BlogRow blog={blog} key={key}/>)}
      </div>
    )
  }
}

export default withStyles(styles)(Blog);
