import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeServiceCard from 'views/Home/HomeServiceCard.js';

const styles = {
   media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
   },
   card: {
      position: 'relative',
      width: "100%",
      height: "50vh", 
      display: "inline-block",
      marginTop: "25px"
   },
   overlay: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      color: 'black',
     backgroundColor: 'white',
     height: "100%",
     width: "100%",
   },
   image: {
     width: "auto",
     maxHeight: "80%",
     margin: 'auto',
     padding: '3%',
   }
};

class CardLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      show : "none"
    };
  }

  mouseOver = () =>{
    this.setState({ show: "inline"});
  }
  mouseLeave = () => {
    this.setState({ show: "none"});
  }

  render(){
    return (
      <Link to={this.props.link} style={{maxWidth: "80%", height: "100%", textDecoration: "none"}}>
        <Card style={styles.card} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave}>
          <CardMedia 
              component="img"
              src={this.props.image}
              style={styles.image}
            />
           <div style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            color: 'white',
            textAlign: 'center', 
            backgroundColor: 'rgba(0,0,0,.4)',
            height: "100%",
            width: "100%",
            display: this.state.show,
            padding: "50% 0",
            }}>
                <Typography variant="h4" style={{color: 'white', fontWeight: "bold"}}>
                  {this.props.name}
                </Typography>
           </div>
           <CardContent>
              <Typography variant="body1" style={{fontWeight: "bold"}}>
                {this.props.name}
              </Typography>
           </CardContent>
        </Card>
      </Link>


    )
  }
}

CardLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardLink);
