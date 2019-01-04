import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import redColor from '../../color.js';

const styles = {
  root: {

  },
  header: {
    color: redColor,
  },
  subheader: {
    fontStyle: 'italic',
  },
  hr: {
    maxWidth: '80%',
  }
};

class BlogRow extends Component {
  render(){
    const { classes, blog } = this.props;
   
    return (
      <Card>
        <Typography variant="h3" className={classes.header}>
          {blog.header}
        </Typography>
        <Typography variant="h4" className={classes.title} paragraph>
          {blog.subheader}
        </Typography>
        <hr className={classes.hr}/>
        {blog.content}
      </Card>
    )
  }
}

export default withStyles(styles)(BlogRow);
