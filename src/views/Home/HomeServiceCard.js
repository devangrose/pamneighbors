import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

const styles = {
  ...imagesStyles
};


function HomeServiceCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Link to={props.service.link} style={{cursor: 'pointer'}}>
        <Card style={{ width: "20rem" }}>
          <img
          style={{ width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={props.service.img}
        />
          <CardBody>
            <p>
              {props.service.label}
            </p>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}


HomeServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeServiceCard);
