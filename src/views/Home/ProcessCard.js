import React, { Component } from 'react';
import { Paper, Icon } from '@material-ui/core';


class ProcessCard extends Component {
  
  render(){
    return (
      <Paper style={{padding: "10px"}}>
        <Icon style={{ fontSize: 30 }}>content_cut</Icon>
        <p>Step {this.props.index + 1}:</p>
        <p>{this.props.step}</p>
      </Paper>
    )
  }
}

export default ProcessCard;
