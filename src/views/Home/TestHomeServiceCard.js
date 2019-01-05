import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  root: {
    margin: 'auto',
    height: '50vh',
  }
};


function HomeServiceCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Card className={classes.root} style={{ width: "16rem", margin: 'auto',paddingTop: '2.5%'}}>
          <div style={{width: '100%', height: '80%'}}>
            <img
              style={{maxWidth: '100%', maxHeight:'100%'}}
              className={classes.imgCardTop}
              src={props.img}
              alt={props.label}
            />
          </div>
          <CardBody style={{height: '20%'}}>
            <Typography variant="h6" align="center">
              {props.label}
            </Typography>
          </CardBody>
        </Card>
    </div>
  );
}


HomeServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeServiceCard);
