import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  root: {
    margin: 'auto',
  }
};


function HomeServiceCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Card style={{ width: "16rem", margin: 'auto' }}>
          <img
          style={{ width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={props.img}
          alt={props.label}
        />
          <CardBody>
            <p>
              {props.label}
            </p>
          </CardBody>
        </Card>
    </div>
  );
}


HomeServiceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeServiceCard);
