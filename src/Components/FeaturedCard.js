import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

function FeaturedCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={props.imageUrl}
          height="600"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.header}
          </Typography>
          <Typography component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      { props.hideLearn ? '' : 
      <CardActions>
        <Button size="small" color="primary">
          <Link to={props.url} style={{color: "black", textDecoration: "none"}}>
            Learn More About {props.header.split(' ')[0]}
          </Link>
        </Button>
      </CardActions>
      }
    </Card>
  );
}

FeaturedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturedCard);
