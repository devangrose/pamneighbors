import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import redColor from '../../color.js';
import { container } from '../../assets/jss/material-kit-pro-react.jsx';

const styles = {
  container,
  root: {
    padding: '5%',  
    margin: '3% auto',
  },
  header: {
    color: redColor,
  },
  subheader: {
    fontStyle: 'italic',
  },
  hr: {
    maxWidth: '80%',
  },
  img: {
    width: '100%',
    height: 'auto',
    maxWidth: '500px',
  },
  imgCard: {
    maxWidth: '500px',
    margin: '2% auto',
  }
};

class BlogRow extends Component {
  render(){
    const { classes, blog } = this.props;
   
    return (
      <Card className={classnames(classes.container, classes.root)}>
        <Typography variant="p" className={classes.subheader} paragraph>
          {blog.date}
        </Typography>
        <Typography variant="h3" className={classes.header}>
          {blog.header}
        </Typography>
        <Typography variant="h4" className={classes.subheader} paragraph>
          {blog.subheader}
        </Typography>
        <Typography variant="p" className={classes.subheader}>
          By Pam Neighbors
        </Typography>
        <Typography variant="p" className={classes.subheader}>
          Founder and Lead SMP trainer for Trillium Ink Academy
        </Typography>
        <hr className={classes.hr}/>
        {blog.content}
        <Grid container spacing={24}>
        {blog.pics.map((pic, index) => 
          <Grid item md={blog.picGrid} sm={12}>
            <Card className={classes.imgCard}>
              <img src={pic} className={classes.img}/>
            </Card>
          </Grid>
        )}
        </Grid>
        {blog.footer}
       <Typography variant="p">
         Copyright 2018, All Rights Reserved
        </Typography>
      </Card>
    )
  }
}

export default withStyles(styles)(BlogRow);
