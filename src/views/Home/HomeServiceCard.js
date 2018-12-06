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
      <Link to={props.service.link} style={{cursor: 'pointer', margin: 'auto', textAlign: 'center'}}>
        <Card style={{ width: "20rem", margin: 'auto' }}>
          <img
          style={{ width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={props.service.img}
          alt={props.service.label}
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
