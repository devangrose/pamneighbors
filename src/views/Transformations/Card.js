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
      <Link to={this.props.link} style={{margin: '5%',height: "100%", textDecoration: "none"}}>
        <Card elevation={0} style={styles.card} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseLeave}>
          <CardMedia 
              component="img"
              src={this.props.image}
              style={styles.image}
            />
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
