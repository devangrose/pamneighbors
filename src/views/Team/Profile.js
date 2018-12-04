import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import redColor from '../../color.js';

class Profile extends Component { constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={{padding: "70px 0", width: "80%", margin: "auto"}}> 
        <Grid container spacing={24}>
          <Grid item md={6} sm={12}>
            <div style={{width: "80%",  textAlign: "center"}}>
              <img src={this.props.image} style={{width: "100%", margin: "auto"}} />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography variant="h4" style={{color: redColor}}>
              {this.props.name}
            </Typography>
            <Typography variant="subheading">
              {this.props.subheading}
            </Typography>
            <hr/>
            <br/>
            {this.props.description}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Profile;

