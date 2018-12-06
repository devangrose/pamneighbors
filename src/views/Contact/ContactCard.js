import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 250,
    width: "auto",
    margin: "auto",
    paddingTop: "20px",
  },
};

function ContactCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <div style={{textAlign: "center", padding: "50px 0"}}>
          <Icon style={{fontSize: 100}}>
            {props.icon}
          </Icon>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            {props.header}
          </Typography>
            {props.content}
        </CardContent>
      </CardActionArea>
      { props.hideLearn ? '' : 
      <CardActions>
        <Button size="small" color="primary">
          <Link to={props.url} style={{color: "black", textDecoration: "none"}}>
            Learn More
          </Link>
        </Button>
      </CardActions>
      }
    </Card>
  );
}

ContactCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactCard);

